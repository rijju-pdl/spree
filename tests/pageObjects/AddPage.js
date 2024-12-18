class AddPage{
  constructor() 
  {
    this.accountButtonSelector = "//button[contains(@id,'account-button')]";
    // this.accountButtonSelector = "button#account-button";
    this.adminPanelSelector = "//div[contains(@id,'link-to-account')]//a[contains(@href,'/admin/orders')]";
   this.sidebarContentSelector ="a[href='#sidebar-content']";
   this.sidebarPageSelector = "a[href='/admin/cms_pages']";
   this.addNewPageButtonSelector = "//div[@class='page-actions pl-0 pr-0 d-none d-lg-flex']//a[@id='new_page']";

  }
  async navigateToNewPage() {
    await page.click(this.accountButtonSelector);
    await page.click(this.adminPanelSelector);
    await page.click(this.sidebarContentSelector);
    await page.click(this.sidebarPageSelector);
    await page.click(this.addNewPageButtonSelector);
  }
  async addNewPage() {
  await page.click(this.addNewPageButtonSelector);
  }
}

module.exports = {AddPage}
