const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None']
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:'
  }
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log('The README has been generated!');
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdownContent = generateMarkdown(answers);
    writeToFile('README.md', markdownContent);
  });
}

// Function call to initialize app
init();
