const inquirer = require('inquirer');
const license = require('./sources/license');
const generate = require('./sources/generate');
const fs = require ('fs');

inquirer
    .prompt([
        {
            name:'title',
            type: 'input',
            message: 'Enter project title:'
        },
        {
            name: 'description',
            type: 'input',
            message: 'Enter a detailed description of this software:'
        },
        {
            name: 'installation',
            type: 'input',
            message: 'Enter installation instructions:'
        },
        {
            name: 'usage',
            type: 'input',
            message: 'Enter usage information:'
        },
        {
            name: 'contributing',
            type: 'input',
            message: 'How would you like this software to be contributed?'
        },
        {
            name: 'tests',
            type: 'input',
            message: 'Enter instructions for testing software:'
        },
        {
            name: 'license',
            type: 'list',
            choices: ['MIT', 'BSD', 'Apache']
        },
        {
            name: 'year',
            type: 'input',
            message: 'Enter the current year for your license:'
        },
        {
            name: 'name',
            type: 'input',
            message: 'Enter your name(s) for your license:'
        },
        {
            name: 'github',
            type: 'input',
            message: 'Enter your github username:'
        },
        {
            name: 'email',
            type: 'input',
            message: 'Enter your email address:'
        },
        {
            name: 'contactInstructions',
            type: 'input',
            message: 'Input any additional information for how you might wish to be contacted if a user has questions:'
        }
    ])
    .then((answers) => {
        // Generate license info from license.js
        license.generateLicense(answers);
        // Generate text for README file
        const pageContent = generate.generateREADME(answers);
        // Create file with the generated text as the content of the page
        fs.writeFile('README.md', pageContent, (err) =>
        err ? console.log(err) : console.log("Success!")
        );
    });