// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')


// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: "input",
            message: "What is your project title?",
            name: "title",
        },
        {
            type: "input",
            message: "Provide a description of your project",
            name: "description",
        },
        {
            type: "input",
            message: "What is your github username?",
            name: "user",
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email",
        },
        {
            type: "input",
            message: "Provide any installation instructions?",
            name: "instructions",
        },
        {
            type: "input",
            message: "Provide any usage information",
            name: "usage",
        },
        {
            type: "input",
            message: "Provide any contribution guidelines",
            name: "contribution",
        },
        {
            type: "input",
            message: "Provide any test instructions",
            name: "test",
        },
        {
            type: "list",
            message: "Which license will you use?",
            name: "license",
        },

    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
