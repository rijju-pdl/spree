class LoginPage {
    constructor() {
        this.loginBtnSelector = "(//input[@name='commit'])[1]";
        this.emailFieldSelector = "#spree_user_email";
        this.passwordFieldSelector = "#spree_user_password";
        this.errorMessageSelector = ".alert-danger";
    }
 
    async navigateToAdminLoginPage() {
        await page.goto("http://localhost:3000/admin/login");
    }

    async login(email, password) {
        await global.page.waitForSelector(this.emailFieldSelector);
        await global.page.fill(this.emailFieldSelector, email);
        await global.page.fill(this.passwordFieldSelector, password);
        await global.page.click(this.loginBtnSelector);
    }
}

module.exports = { LoginPage }