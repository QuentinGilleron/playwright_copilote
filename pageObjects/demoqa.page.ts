export class DemoQAPage {
  readonly page;
  
  constructor(page) {
    this.page = page;
  }
  
  async gotoHome() {
    await this.page.goto('/');
  }

  async clickHome() {
    await this.page.getByRole('banner').getByRole('link').click();
  }

  async clickElements() {
    await this.page.click('text=Elements');
  }

  async clickForms() {
    await this.page.click('text=Forms');
  }
  
  async clickAlerts() {
    await this.page.click('text=Alerts, Frame & Windows');
  }
  
  async clickWidgets() {
    await this.page.click('text=Widgets');
  }
  
  async clickInteractions() {
    await this.page.click('text=Interactions');
  }
  
  async clickBookStore() {
    await this.page.click('text=Book Store Application');
  }
}