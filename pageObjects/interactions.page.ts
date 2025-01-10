import { expect } from "playwright/test";


export class InteractionPage {
    readonly page;
    
    constructor(page) {
      this.page = page;
    }
    
    // Méthode pour accéder à la page d'accueil
    async gotoHome() {
      await this.page.goto('/interaction');
    }

    // Méthode pour cliquer sur le bouton Resizable
    async clickResizable() {
      await this.page.click('text=Resizable');
      // Vérifier que l'URL est correcte
      expect(this.page.url()).toBe('https://demoqa.com/resizable');
    }

    async resizeElementMooved() {
      // Sélectionner la poignée de redimensionnement
      const handle = await this.page.locator('#resizableBoxWithRestriction span');

      // Maintenir le clic sur la poignée de redimensionnement et déplacer la souris
      await handle.hover();
      await this.page.mouse.down();
      await this.page.mouse.move(1000, 1000);
      await this.page.mouse.up();

      //TODO: vérifier que l'élément a bien été redimensionné
    }





}  