class LoginElements {
    get usernameInput() {
        return $("//input[@id='user-name']");
    }

    get passwordInput() {
        return $("//input[@id='password']");
    }

    get loginButton() {
        return $("//input[@id='login-button']");
    }

    get errorMessage() {
        return $("//h3[@data-test='error']");
    }

    get logo() {
        return $("//div[@class='app_logo']");
    }
}

module.exports = new LoginElements();
