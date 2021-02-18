// Generate text from user input and place it into the provided README layout.
exports.generateREADME = (answers) =>
`# ${answers.title} ${badge}

## Table of Contents
 - [Description](#description)
 - [Installation](#installation)
 - [Usage](#Usage)
 - [Contribution](#contribution)
 - [Testing](#testing)
 - [License](#license)
 - [Questions](#questions)

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
${licenseInfo}

## Questions
Github: [${answers.github}](https://github.com/${answers.github})
Email: ${answers.email}

${answers.contactInstructions}`;
