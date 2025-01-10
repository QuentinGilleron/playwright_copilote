import { expect } from "playwright/test";


export class WidgetsPage {
    readonly page;
    
    constructor(page) {
      this.page = page;
    }
    
    // Méthode pour accéder à la page d'accueil
    async gotoHome() {
      await this.page.goto('/widgets');
    }

    // Méthode pour cliquer sur le bouton Slider
    async clickSlider() {
      await this.page.click('text=Slider');
      // Vérifier que l'URL est correcte
      expect(this.page.url()).toBe('https://demoqa.com/slider');
    }

    // Méthode pour déplacer le curseur du slider
    async moveSlider() {
        await this.page.getByRole('slider').dragValueTo(75);
    }
    
    async moveSliderTo(value: number) {
      const slider = await this.page.getByRole('slider');
      const boundingBox = await slider.boundingBox();
      if (boundingBox) {
        // Calcul de la position initiale du slider
        const sliderX = boundingBox.x + boundingBox.width / 2;
        const sliderY = boundingBox.y + boundingBox.height / 2;
    
        // Déplace la souris au centre du slider
        await this.page.mouse.move(sliderX, sliderY);
        await this.page.mouse.down();
    
        // Déplace le slider selon le pourcentage de la largeur du slider sans additionner la position de départ
        const targetX = boundingBox.x + (boundingBox.width * (value / 100));
    
        // Déplace la souris à la position cible sur le slider
        await this.page.mouse.move(targetX, sliderY);
        await this.page.mouse.up();
      }
    }

    //--------------------------------------------------------------------------------

    // Méthode pour cliquer sur le bouton de l'accordéon
    async clickAccordion() {
      await this.page.click('text=Accordian');
      // Vérifier que l'URL est correcte
      expect(this.page.url()).toBe('https://demoqa.com/accordian');
    }
    
    async clickSection1() {
      await this.page.getByRole('heading', { name: 'Accordian' }).click();
    }

    async clickSection2() {
      await this.page.getByText('Where does it come from?').click();
    }

    async clickSection3() {
      await this.page.getByText('Why do we use it?').click();
    }

    //--------------------------------------------------------------------------------


}  