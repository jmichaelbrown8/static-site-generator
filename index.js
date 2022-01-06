const fs = require('fs');
const inquirer = require('inquirer');
const { generateHTML } = require('./generateHTML');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name'
        },
        {
            type: 'input',
            message: 'Where are you located?',
            name: 'location'
        },
        {
            type: 'input',
            message: 'Tell me about yourself',
            name: 'bio'
        },
        {
            type: 'input',
            message: 'What is your linkedIn URL?',
            name: 'linkedIn'
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github'
        },
    ])
    .then(data => {
        // write the answers out using a template literal for the html
        fs.writeFile('index.html', generateHTML(data), err => 
            err ? console.error(err) : console.log("Successfully wrote index.html!")
        );
    });