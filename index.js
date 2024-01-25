// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
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
            choices: ["Apache", "MIT", "ISC"],
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
            message: "PLACEHOLDER TEXT",
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

//     .then((Response) => {
//        const createREADME = generateMarkdown(Response)
//     })



//function to write README file
function writeToFile(fileName, response) {
fs.writeFile(fileName, response, (err) => {
    err ? console.log(err) : console.log("Your README has been generated!")
})
}



//function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
    const fileName = "newREADME.md"
    writeToFile(fileName, JSON.stringify(response))
    })
}

// Function call to initialize app
init();
