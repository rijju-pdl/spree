class AddPage{
  constructor() 
  {
   this.accountButtonSelector = "//button[contains(@id,'account-button')]";
   this.adminPanelSelector ="a[href='/admin/orders']"
   this.sidebarContentSelector ="a[href='#sidebar-content']";
   this.sidebarPageSelector = "a[href='/admin/cms_pages']";
   this.addNewPageButtonSelector = "//div[contains(@class, 'page-actions')]/a[contains(@id, 'new_page')]";
   this.titleInputFieldSelector = "//input[@id='cms_page_title']";
   this.pageTypeDropDownSelector = "//span[@id='select2-cms_page_type-container']";
   this.pageSelector = "//li[text()='Feature Page']"
   this.languageSelector = "//span[@id='select2-cms_page_locale-container']"
   this.metaTitleSelector = "//input[@id='cms_page_meta_title']"
   this.metaDescriptionSelector = "//textarea[@id='cms_page_meta_description']"
   this.slugSelector = "//input[@id='cms_page_slug']"
   this.createSelector = "//button[normalize-space()='Create']"
   this.createdPageSelector = "//td[contains(text(),'%s')]" }

  async navigateToPagesPage() {
    await page.click(this.accountButtonSelector);
    await page.click(this.adminPanelSelector);
    await page.click(this.sidebarContentSelector);
    await page.click(this.sidebarPageSelector);
  }

  async addNewPage(title, pagetype, language, slug, metaTitle, metaDescription) {
  await page.click(this.addNewPageButtonSelector);
  await page.fill(this.titleInputFieldSelector, title);
  await page.click(this.pageTypeDropDownSelector);
  await page.click(this.pageSelector);
  await page.click(this.languageSelector);
  await page.keyboard.press('Enter');
  await page.fill(this.metaTitleSelector,metaTitle);
  await page.fill(this.slugSelector,slug);
  await page.fill(this.metaDescriptionSelector,metaDescription);
  await page.click(this.createSelector);
  }
}

module.exports = {AddPage}
