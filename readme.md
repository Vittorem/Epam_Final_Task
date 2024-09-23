# Automated Testing Project with WebDriverIO

This project uses **WebDriverIO** to automate end-to-end tests for a web application. The tests are written following the Page Object pattern.

## System Requirements

Ensure you have the following installed:

- **Node.js** (>= 14.x)
- **NPM** or **Yarn**
- **Google Chrome** or **Microsoft Edge**

## Installation

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/Vittorem/Epam_Final_Task.git
    ```

2. Navigate to the project directory and install dependencies:
    ```bash
    cd your-repository
    npm install
    ```

## Browser Configuration

The tests are configured to run in **Google Chrome** and **Microsoft Edge**.

## Running Tests

To run the tests, use the following command:

```bash
npm run test

```

This will execute the tests in parallel across the configured browsers.

Test Parameters
The tests are parameterized to cover different use cases, including valid and invalid users.

## Test report in Allure Reporter

```bash
npm run reporter

```

## License
This project is licensed under the MIT License.

This version includes all the necessary information in English for running the tests, system requirements, and instructions for generating the test report using Allure.
