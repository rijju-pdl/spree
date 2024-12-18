class LoginPage {
constructor() {
    this.loginBtnSelector = "(//input[@name='commit'])[1]";
    this.emailFieldSelector = "#spree_user_email"
    this.passwordFieldSelector = "#spree_user_password"
    this.errorMessageSelector = ".alert-danger"
}
 async navigateToAdminLoginPage() {
    await page.goto("http://localhost:3000/admin/login");
 }

 async login(email, password ){
    await page.fill(this.emailFieldSelector, email);
    await page.fill(this.passwordFieldSelector,password);
    await page.click(this.loginBtnSelector); 
}
}

module.exports = { LoginPage }