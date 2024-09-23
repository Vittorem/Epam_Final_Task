const LoginPage = require('../pages/LoginPage');
const LoginElements = require('../elements/LoginElements');

describe('Login Tests', () => {
    beforeEach(async () => {
        await LoginPage.open();
    });

    it('should show error when credentials are empty', async () => {
        await LoginPage.login('', ''); 
        await expect(LoginElements.errorMessage).toHaveText('Epic sadface: Username is required');
    });

    it('should show error when password is empty', async () => {
        await LoginPage.login('standard_user', ''); 
        await expect(LoginElements.errorMessage).toHaveText('Epic sadface: Password is required');
    });

    it('should login successfully with valid credentials', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(LoginElements.logo).toHaveText('Swag Labs');
    });
});
