//This includes the required packges for the application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')


//array of questions for user input
    const questions = [
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
            message: "Provide any installation instructions?",
            name: "instructions",
        },
        {
            type: "input",
            message: "Provide any usage information",
            name: "usage",
        },
        {
            type: "list",
            message: "Which license will you use?",
            choices: ["MIT", "Apache", "ISC", "No license"],
            name: "license",
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
            type: "input",
            message: "Write if the users may reach out to you with questions. You can provide your username and email in the following prompts",
            name: "questions",
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

    ]


//function to write README file
function writeToFile(fileName, response) {
const readMeContent = generateMarkdown(response)
console.log(readMeContent)
fs.writeFile(fileName, readMeContent, (err) => {
    err ? console.log(err) : console.log("Your README has been generated!")
})
}

//function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
    const fileName = "newREADME.md"
    writeToFile(fileName, response)
    })
}

// Function call to initialize app
init();
