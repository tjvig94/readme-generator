const inquirer = require('inquirer');
const license = require('./license');
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
${answers.tests}

## License (${answers.license})
${licenseInfo}`;

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
        }
    ])
    .then((answers) => {

        license.generateLicense(answers);

        const pageContent = generateREADME(answers);
        fs.writeFile('README.md', pageContent, (err) =>
        err ? console.log(err) : console.log("Success!")
        );
    });