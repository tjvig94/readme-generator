const inquirer = require('inquirer');
const fs = require ('fs');

const generateREADME = (answers) =>
`# ${answers.title}

## Description
${answers.description}
    
## Installation
${answers.installation}
    
## Usage
${answers.usage}
    
## Contribution
${answers.contributing}
    
## Testing
${answers.tests}`;

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
            message: 'Enter contribution guidelines:'
        },
        {
            name: 'tests',
            type: 'input',
            message: 'Enter instructions for testing software:'
        }
    ])
    .then((answers) => {
        const pageContent = generateREADME(answers);
        fs.writeFile('README.md', pageContent, (err) =>
        err ? console.log(err) : console.log("Success!")
        );
    });