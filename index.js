const inquirer = require('inquirer');
const license = require('./sources/license');
const generate = require('./sources/generate');
const fs = require ('fs');

inquirer
    .prompt([
        {
            name:'title',
            type: 'input',
            message: 'Enter project title:',
            validate: async(input) => {
                if (input == "") {
                    return "Please enter a title.";
                }
                return true;
            }
        },
        {
            name: 'description',
            type: 'input',
            message: 'Enter a detailed description of this software:',
            validate: async (input) => {
                if (input == "") {
                    return "Please enter a description.";
                }
                return true;
            }
        },
        {
            name: 'installation',
            type: 'input',
            message: 'Enter installation instructions:',
            validate: async (input) => {
                if (input == "") {
                    return "Please enter instructions.";
                }
                return true;
            }
        },
        {
            name: 'usage',
            type: 'input',
            message: 'Enter usage information:',
            validate: async (input) => {
                if (input == "") {
                    return "Please enter a usage information.";
                }
                return true;
            }
        },
        {
            name: 'contributing',
            type: 'input',
            message: 'How would you like this software to be contributed?',
            validate: async (input) => {
                if (input == "") {
                    return "Please enter contribution requirements.";
                }
                return true;
            }
        },
        {
            name: 'tests',
            type: 'input',
            message: 'Enter instructions for testing software:',
            validate: async (input) => {
                if (input == "") {
                    return "Please enter instructions for testing";
                }
                return true;
            }
        },
        {
            name: 'license',
            type: 'list',
            choices: ['MIT', 'BSD', 'Apache'],
            validate: async (input) => {
                if (input == "") {
                    return "Please enter license information.";
                }
                return true;
            }
        },
        {
            name: 'year',
            type: 'input',
            message: 'Enter the current year for your license:',
            validate: async (input) => {
                if (input == "") {
                    return "Please enter a year.";
                }
                return true;
            }
        },
        {
            name: 'name',
            type: 'input',
            message: 'Enter your name(s) for your license:',
            validate: async (input) => {
                if (input == "") {
                    return "Please enter your name.";
                }
                return true;
            }
        },
        {
            name: 'github',
            type: 'input',
            message: 'Enter your github username:',
            validate: async (input) => {
                if (input == "") {
                    return "Please enter your github username.";
                }
                return true;
            }            
        },
        {
            name: 'email',
            type: 'input',
            message: 'Enter your email address:',
            validate: async (input) => {
                if (input == "") {
                    return "Please enter your email address."
                }
                return true;
            }
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