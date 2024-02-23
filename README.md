# challenge-qa-engineer-bravocare

# Pre-Requisites

• <a href="https://git-scm.com/downloads">git (to clone the repo)</a> <br>
• <a href="https://nodejs.org/en">node.js</a> <br>
• npm (comes with node.js installation) <br>
• Google Chrome / Edge / Firefox (whichever browser you prefer, it's 100% up to you) <br>
• Code editor of your preference <br>

- Once you have everything installed, make sure you have a GitHub account

# Accessing the Project

1 - Clone this repository to your local machine (It's up to you to clone it with SSH or HTTPS. If you can't clone it with SSH
(and you want to do it via SSH) please refer to the documentation <a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account"> here </a >) by clicking on the clone button and then clicking on the copy URL button next to the method that you decided to clone

2 - Now that you have the URL to clone the project, go to a folder where you keep your GitHub projects (or create a new one ). Now that you have a folder to keep clone the project, open the terminal (gitbash/PowerShell with admin permission) paste the command `git clone copied url` and press enter.

3 - Open the project's folder(that can be done within the terminal by typing `cd challenge-qa-engineer-bravocare` . If you can't manage to open the folder within the terminal, close the terminal, open it manually via the user interface, and open a terminal inside the project's folder). Now that you're inside the project's folder, with the terminal opened, type the command `npm install`. That's gonna install all of the dependencies needed for the project to work.

• Now you have the project ready to be tested. Let's understand how you can run the tests, configure them according to the data that you want to test, and so on

# Project Structure

1 - Inside the file `cypress.config.js` we set the baseUrl. So that we don't have to keep repeating ourselves with long strings when trying to access the website we want to test. <strong>Do not touch that !</strong>

2 - The only file that you can adjust to your needs is the `cypress.env.json` file. Although it's not a good practice versioning this file because it usually holds sensitive information/data , since it's only for a demonstration purpose, I chose to version it anyway, otherwise, I'd had to go through the creation of the file and each property inside the JSON inside the file. Explaining that with words/images could be a little tricky, so that's the reason behind it.
Please <strong>DO NOT TOUCH</strong> the properties (they're in blue) of this file. You can change all the values you want, just don't touch the properties and pay attention to the type of the value (string/number). Some of the fields MUST BE numbers because of the validations that are going to happen.
If you change that, the test may break.

3 - This project uses POM (Page Object Modelling). This means that every page has a dedicated .js file that holds all the methods that are related to that specific
page of the application. All the pages are being instantiated at the beginning of the test suite.

4 - The project also uses the beforeEach hook, so that if more test cases are created, it will also access the application website without duplicating the code.

# Running the Test Cases

- Open the terminal of your choice inside the project's folder. Type `npx cypress run` to run it in headless mode.
  If you want to see the tests running, you can use `npx cypress open` to open the cypress app. Once you open it, click on the "E2E Testing" configured button,
  select the browser of your choice, and click on the "Start E2E Testing in select browser". Then you're going to see the spec(test file) named "Automation_Exercise_Tests".
  Click on it and it'll trigger the tests automatically.

# Important

1 - Once you run the test case once, you'll have two options to run the test case again :

    - Login manually to it and delete the user you used

    - Change the data you used previously (you only have to change the email)


2 - I added CI to this project. So that every time I push something new, it's going to trigger the test cases via GitHub Actions
