import { test, expect } from '@playwright/test';
import { DemoQAPage } from '../pageObjects/demoqa.page';
import { ElementPage } from "../pageObjects/element.page";
import { FormPage } from "../pageObjects/form.page";
import { WidgetsPage } from '../pageObjects/widgets.page';
import { InteractionPage } from '../pageObjects/interactions.page';

test.describe('DemoQA home page tests', () => {
  test.beforeEach(async ({ page }) => {
    const demoqa = new DemoQAPage(page);
    await demoqa.gotoHome();
    expect(page.url()).toBe('https://demoqa.com/');
  });

  test('vérifier le bouton home page', async ({ page }) => {
    const demoqa = new DemoQAPage(page);
    await demoqa.clickHome();
    expect(page.url()).toBe('https://demoqa.com/');
  });

  test('vérifier la page elements', async ({ page }) => {
    const demoqa = new DemoQAPage(page);
    await demoqa.clickElements();
    expect(page.url()).toBe('https://demoqa.com/elements');
  });

  test('vérifier la page form', async ({ page }) => {
    const demoqa = new DemoQAPage(page);
    await demoqa.clickForms();
    expect(page.url()).toBe('https://demoqa.com/forms');
  });

  test('vérifier la page alerts', async ({ page }) => {
    const demoqa = new DemoQAPage(page);
    await demoqa.clickAlerts();
    expect(page.url()).toBe('https://demoqa.com/alertsWindows');
  });

  test('vérifier la page widgets', async ({ page }) => {
    const demoqa = new DemoQAPage(page);
    await demoqa.clickWidgets();
    expect(page.url()).toBe('https://demoqa.com/widgets');
  });

  test('vérifier la page interactions', async ({ page }) => {
    const demoqa = new DemoQAPage(page);
    await demoqa.clickInteractions();
    expect(page.url()).toBe('https://demoqa.com/interaction');
  });

  test('vérifier la page book store', async ({ page }) => {
    const demoqa = new DemoQAPage(page);
    await demoqa.clickBookStore();
    expect(page.url()).toBe('https://demoqa.com/books');
  });
});


test.describe('DemoQA Element', () => {
  test.beforeEach(async ({ page }) => {
    const element = new ElementPage(page);
    await element.gotoHome();
    expect(page.url()).toBe('https://demoqa.com/elements');
  });

  test('Accéder à la page Text Box', async ({ page }) => {
    const element = new ElementPage(page);
    // await element.defileElements();
    await element.gotoTextBox();
    expect(page.url()).toBe('https://demoqa.com/text-box');
  });

  test('Remplir correctement le formulaire', async ({ page }) => {
    const element = new ElementPage(page);
    // await element.defileElements();
    await element.gotoTextBox();
    await element.clickFullName();
    await page.fill('[placeholder="Full Name"]', 'Jean Dupont');
    await element.clickEmail();
    await page.fill('[placeholder="name@example.com"]', 'test@gmail.com');
    await element.clickCurrentAddress();
    await page.fill('[placeholder="Current Address"]', 'Paris');
    await element.clickPermanentAddress();
    await page.fill('#permanentAddress', 'Paris');
    await element.clickSubmitButton();

    expect(await page.locator('text=Name:Jean Dupont').isVisible()).toBeTruthy();
    expect(await page.locator('text=Email:test@gmail.com').isVisible()).toBeTruthy();
    expect(await page.locator('text=Current Address :Paris').isVisible()).toBeTruthy();
    expect(await page.locator('text=Permananet Address :Paris').isVisible()).toBeTruthy();
  });

  test('Remplir le formulaire avec un mail invalide', async ({ page }) => {
    const element = new ElementPage(page);
    // await element.defileElements();
    await element.gotoTextBox();
    await element.clickFullName();
    await page.fill('[placeholder="Full Name"]', 'Jean Dupont');
    await element.clickEmail();
    await page.fill('[placeholder="name@example.com"]', 'testgmail.com');
    await element.clickCurrentAddress();
    await page.fill('[placeholder="Current Address"]', 'Paris');
    await element.clickPermanentAddress();
    await page.fill('#permanentAddress', 'Paris');
    await element.clickSubmitButton();

    expect(await page.locator('[placeholder="name@example.com"]').getAttribute('class')).toContain('mr-sm-2 field-error form-control');

  });

  test('Modifier un element du web table', async ({ page }) => {
    const element = new ElementPage(page);
    // await element.defileElements();
    await element.gotoWebTables();
    await element.gotoAddButton();
    await element.firstname();
    await page.fill('[placeholder="First Name"]', 'Jean');
    await element.lastname();
    await page.fill('[placeholder="Last Name"]', 'Dupont');
    await element.email();
    await page.fill('[placeholder="name@example.com"]', 'test@gmail.com');
    await element.age();
    await page.fill('[placeholder="Age"]', '25');
    await element.salary();
    await page.fill('[placeholder="Salary"]', '50000');
    await element.department();
    await page.fill('[placeholder="Department"]', 'IT');
    await element.submit();

    expect(await page.locator('text=Jean').isVisible()).toBeTruthy();

  });

  test('Faire tout type de clique', async ({ page }) => {
    const element = new ElementPage(page);
    // await element.defileElements();
    await element.gotoButtons();
    await element.doubleClick();
    await element.rightClick();
    await element.clickMe();

    expect(await page.locator('text=You have done a double click').isVisible()).toBeTruthy();
    expect(await page.locator('text=You have done a right click').isVisible()).toBeTruthy();
    expect(await page.locator('text=You have done a dynamic click').isVisible()).toBeTruthy();
  
  });


});

test.describe('DemoQA Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/forms');
    expect(page.url()).toBe('https://demoqa.com/forms');
  });

  test('Remplir le formulaire', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    const form = new FormPage(page);
  
    await form.gotoHome();
    await form.clickPracticeForm();
    await form.fillForm();

  });

});

test.describe('DemoQA Alerts, frame & windows', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/alertsWindows');
    expect(page.url()).toBe('https://demoqa.com/alertsWindows');
  });
});

test.describe('DemoQA widget', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/widgets');
    expect(page.url()).toBe('https://demoqa.com/widgets');
  });

  test('vérifier le fonctionnement du slider', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    const widgets = new WidgetsPage(page);

    await widgets.gotoHome();
    await widgets.clickSlider();

    await widgets.moveSliderTo(100);

  });

  test('vérifier le fonctionnement de l\'accordéon', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    const widgets = new WidgetsPage(page);

    await widgets.gotoHome();
    await widgets.clickAccordion();

    await widgets.clickSection1();
    await widgets.clickSection2();
    await widgets.clickSection3();

  });

});

test.describe('DemoQA interaction', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/interactions');
    expect(page.url()).toBe('https://demoqa.com/interactions');
  });

  test('vérifier le fonctionnement du resizable', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    const interaction = new InteractionPage(page);

    await interaction.gotoHome();
    await interaction.clickResizable();

    await interaction.resizeElementMooved();

  });



});

test.describe('DemoQA book store application', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/books');
    expect(page.url()).toBe('https://demoqa.com/books');
  });
});