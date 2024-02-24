# Bravo Care QA Engineer Challenge

# What's this project is about ?

This project is part of a hiring process for a QA Engineer position available at Bravo Care.
It's an E2E test automated with Cypress.
The environment at testing is the <a href="https://automationexercise.com/">Automation Exercise</a> website, a playground for QA Engineers who want to put their automation skills into practice.

The test contains the following steps (in order) :

1. Enter the website and scroll down about halfway down the page
2. Choose a product and click on “View product” under the picture of the product
3. In the Quantity box enter 5
4. Click “Add to cart”
5. Click “View Cart”
6. Click on “Proceed to Checkout”
7. Click on “Register / Login”
8. Enter name and email under “New User Signup!”
9. Click on “Signup”
10. Fill in all information and click on “Create Account”
11. Click on “Continue” under “ACCOUNT CREATED!” title
12. Click on the Cart in the header
13. Click on “Proceed to checkout”
14. Add a comment and click on “Place Order”
15. Fill in fake Credit Card information and click on “Pay and Confirm Order”
16. Click on “Continue” button
17. Click on “Logout” on top header
18. On the “Login to your account” box enter with previously created user
19. Click on “Contact us” on the header
20. Fill required data and Click on “Submit”
21. Press “OK” in the pop up
22. Finally, click on the “Logout” button on the header

# Project Structure

1 - Inside the file `cypress.config.js` we set the baseUrl. So that we don't have to keep repeating ourselves with long strings when trying to access the website we want to test. <strong>Do not touch that !</strong>

2 - The only file that you can adjust to your needs is the `cypress.env.json` file. Although it's not a good practice versioning this file because it usually holds sensitive information/data , since it's only for a demonstration purpose, I chose to version it anyway, otherwise, I'd had to go through the creation of the file and each property inside the JSON inside the file. Explaining that with words/images could be a little tricky, so that's the reason behind it.
Please <strong>DO NOT TOUCH</strong> the properties (they're in blue) of this file. You can change all the values you want, just don't touch the properties and pay attention to the type of the value (string/number). Some of the fields MUST BE numbers because of the validations that are going to happen.
If you change that, the test may break.

3 - This project uses POM (Page Object Modelling). This means that every page has a dedicated .js file that holds all the methods that are related to that specific
page of the application. All the pages are being instantiated at the beginning of the test suite.

4 - The project also uses the beforeEach hook, so that if more test cases are created, it will also access the application website without duplicating the code.

5 - Whenever it was possible, the selector used was "data-qa" / id . Unfortunately , some of the elements didn't have a specific selector and because of that an xpath was needed in order to get the job done.

# Pre-Requisites

• <a href="https://git-scm.com/downloads">git</a> (to clone the repo) and a GitHub account<br>
• <a href="https://nodejs.org/en">node.js</a> <br>
• npm (comes with node.js installation) <br>
• Google Chrome / Edge / Firefox (whichever browser you prefer, it's 100% up to you) <br>
• Code editor of your preference (I use VSCode)<br>

# Setting Up the Project

1 - Clone this repository to your local machine (it's up to you to clone it with SSH or HTTPS. If you can't clone it with SSH
-and you want to do it via SSH- please refer to the documentation <a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account"> here </a >) by clicking on the green `Code` button and then clicking on the copy URL button next to the method that you decided to use for cloning.

2 - Now that you have the URL to clone the project, go to a folder where you keep your GitHub projects (or create a new one ). Now that you have a folder to keep the project, open the terminal (GitBash/PowerShell with admin permission) paste the command `git clone git@github.com:joaomcruz/challenge-qa-engineer-bravocare.git` if you're doing it through SSH and press enter. If you want to do it via HTTPS do `git clone https://github.com/joaomcruz/challenge-qa-engineer-bravocare.git` instead.

3 - Open the project's folder(that can be done within the terminal by typing `cd challenge-qa-engineer-bravocare` . If you can't manage to open the folder within the terminal, close the terminal, open it manually via the user interface, and open a terminal inside the project's folder). Now that you're inside the project's folder, with the terminal opened, type the command `npm install`. That's gonna install all of the dependencies needed for the project to work.

• Now you have the project ready to be tested. Let's understand how you can run the tests, configure them according to the data that you want to test, and so on

# Running the Test Cases

- Open the terminal of your choice inside the project's folder. You can use the `test` script created on the package.json file to run the test in headless mode (It will run the tests behind the curtains, this will also generate a video recording with all the actions taken. You can find the video inside the videos folder).

- If you want to see the tests running, you can use the script `cy:open` to open the cypress app. Once you open it, click on the "E2E Testing" configured button,
  select the browser of your choice, and click on the "Start E2E Testing in select browser". Then you're going to see the spec(test file) named "Automation_Exercise_Tests".
  Click on it and it'll trigger the tests automatically.

# Important

1 - Once you run the test case once, you'll have two options to run the test case again :

    - Login manually in the application and delete the user you used

    - Change the data you used previously (you only have to change the email)

2 - I added CI to this project. So that every time I push something new, it's going to trigger the test cases via GitHub Actions

3 - I'm using mochawesome to create advanced reports. In order to have an advanced/beautiful report in hand, simply use the defined script `mochawesome-merge` after
running a test . Then open the folder named `mochawesome-report` and then open the mochawesome.html file in your browser. You'll be able to see a very good looking report.
You can also delete the reports you have with the `delete-results` script. It's also possible to run the `cypress-regression-pack` script that deletes all the reports,
triggers the tests and merges the generated reports.
