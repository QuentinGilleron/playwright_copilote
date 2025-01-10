import { expect } from "playwright/test";


export class FormPage {
    readonly page;
    
    constructor(page) {
      this.page = page;
    }
    
    // Méthode pour accéder à la page d'accueil
    async gotoHome() {
      await this.page.goto('/forms');
    }

    // Méthode pour cliquer sur le bouton Practice Form
    async clickPracticeForm() {
      await this.page.click('text=Practice Form');
      // Vérifier que l'URL est correcte
      expect(this.page.url()).toBe('https://demoqa.com/automation-practice-form');
    }

    // Méthode pour remplir le formulaire
    async fillForm() {

      await this.page.getByPlaceholder('First Name').click();
      await this.page.fill('[placeholder="First Name"]', 'John');

      await this.page.getByPlaceholder('Last Name').click();
      await this.page.fill('[placeholder="Last Name"]', 'Doe');

      await this.page.getByPlaceholder('name@example.com').click();
      await this.page.fill('[placeholder="name@example.com"]', 'test@gmail.com');

      await this.page.getByText('Other').click();

      await this.page.getByPlaceholder('Mobile Number').click();
      await this.page.fill('[placeholder="Mobile Number"]', '1234567890');

      await this.page.locator('#dateOfBirthInput').click();

      await this.page.locator('div').filter({ hasText: /^JanuaryFebruaryMarchAprilMayJuneJulyAugustSeptemberOctoberNovemberDecember$/ }).getByRole('combobox')
      await this.page.locator('.react-datepicker__month-select').selectOption('6'); // July is the 7th month, index starts from 0

      await this.page.getByRole('combobox').nth(1).selectOption('2003');

      await this.page.getByLabel('Choose Friday, July 4th,').click();

      await this.page.locator('.subjects-auto-complete__value-container').click();
      await this.page.fill('.subjects-auto-complete__value-container input', 'Maths');
      await this.page.waitForTimeout(500);
      await this.page.keyboard.press('Enter');
      
      await this.page.getByText('Sports').click();
      await this.page.getByText('Reading').click();
      await this.page.getByText('Music').click();

      await this.page.getByPlaceholder('Current Address').click();
      await this.page.fill('[placeholder="Current Address"]', '123 Main Street');

      await this.page.locator('div').filter({ hasText: /^Select State$/ }).nth(3).click();
      await this.page.getByText('Haryana', { exact: true }).click();
      
      await this.page.locator('div').filter({ hasText: /^Select City$/ }).nth(3).click();
      await this.page.getByText('Panipat', { exact: true }).click();

      await this.page.getByRole('button', { name: 'Submit' }).click();
      await this.page.waitForTimeout(2000);

      await this.page.getByRole('button', { name: 'Close' }).click();
    }


}  