

export class ElementPage {
    readonly page;
    
    constructor(page) {
      this.page = page;
    }
    
    // Méthode pour accéder à la page d'accueil
    async gotoHome() {
      await this.page.goto('/elements');
    }
    
    // Méthode de défilement des éléments
    async defileElements() {
        await this.page.locator('span').filter({ hasText: 'Elements' }).locator('div').first().click();
    }

    //--------------------------------------------------------------------------------

        // Méthode pour accéder à la page Text Box
        async gotoTextBox() {
            await this.page.locator('li').filter({ hasText: 'Text Box' }).first().click();
        }

        // Méthode pour cliquer sur le champ "Full Name"
        async clickFullName() {
            await this.page.getByPlaceholder('Full Name').click();
        }

        // Méthode pour cliquer sur le champ "Email"
        async clickEmail() {
            await this.page.getByPlaceholder('name@example.com').click();
        }

        // Méthode pour cliquer sur le champ "Current Address"
        async clickCurrentAddress() {
            await this.page.getByPlaceholder('Current Address').click();
        }

        // Méthode pour cliquer sur le champ "Permanent Address"
        async clickPermanentAddress() {
            await this.page.locator('#permanentAddress').click();
        }

        // Méthode pour cliquer sur le bouton "Submit"
        async clickSubmitButton() {
            await this.page.getByRole('button', { name: 'Submit' }).click();
        }

        

    //--------------------------------------------------------------------------------

    async gotoCheckBox() {
        await this.page.locator('li').filter({ hasText: 'Check Box' }).click();
    }

    async gotoRadioButton() {
        await this.page.locator('li').filter({ hasText: 'Radio Button' }).click();
    }

    // --------------------------------------------------------------------------------
        
        // Méthode pour accéder à la page Web Tables
        async gotoWebTables() {
            await this.page.locator('li').filter({ hasText: 'Web Tables' }).click();
        }

        async gotoAddButton() {
            await this.page.getByRole('button', { name: 'Add' }).click();
        }

        async firstname() {
            await this.page.getByPlaceholder('First Name').click();
        }

        async lastname() {
            await this.page.getByPlaceholder('Last Name').click();
        }

        async email() {
            await this.page.getByPlaceholder('name@example.com').click();
        }

        async age() {
            await this.page.getByPlaceholder('Age').click();
        }

        async salary() {
            await this.page.getByPlaceholder('Salary').click();
        }

        async department() {
            await this.page.getByPlaceholder('Department').click();
        }

        async submit() {
            await this.page.getByRole('button', { name: 'Submit' }).click();
        }



    //--------------------------------------------------------------------------------
    
    //--------------------------------------------------------------------------------
        
        // Méthode pour accéder à la page Buttons
        async gotoButtons() {
            await this.page.locator('li').filter({ hasText: 'Buttons' }).click();
        }

        async doubleClick() {
            // vérifier si le bouton "Double Click Me" est visible
            await this.page.locator('button').filter({ hasText: 'Double Click Me' }).isVisible();
            await this.page.getByRole('button', { name: 'Double Click Me' }).dblclick();
        }

        async rightClick() {
            await this.page.locator('button').filter({ hasText: 'Right Click Me' }).click({ button: 'right' });}

        async clickMe() {
            // vérifier si le bouton "Click Me" est visible
            await this.page.getByRole('button', { name: 'Click Me', exact: true }).isVisible();
            await this.page.getByRole('button', { name: 'Click Me', exact: true }).click();
        }

    
    //--------------------------------------------------------------------------------

    async gotoLinks() {
        await this.page.locator('li').filter({ hasText: 'Links' }).click();
    }

    async gotoBrokenLinksImages() {
        await this.page.locator('li').filter({ hasText: 'Broken Links - Images' }).click();
    }

    async gotoUploadAndDownload() {
        await this.page.locator('li').filter({ hasText: 'Upload and Download' }).click();
    }

    async gotoDynamicProperties() {
        await this.page.locator('li').filter({ hasText: 'Dynamic Properties' }).click();
    }
}  