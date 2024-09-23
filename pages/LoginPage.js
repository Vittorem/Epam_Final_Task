const LoginElements = require('../elements/LoginElements');

class LoginPage {
    async open() {
        await browser.url('/');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await LoginElements.usernameInput.setValue(username);
        await LoginElements.passwordInput.setValue(password);
        await LoginElements.loginButton.click();
    }
}

module.exports = new LoginPage();
