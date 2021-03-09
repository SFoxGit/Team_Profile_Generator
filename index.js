const fs = require('fs');
const inquirer = require('./assets/node_modules/inquirer');
const Algo = require("./algo");

const manageQuestions = [
  {
    type: 'input',
    message: 'What is the name of the team Manager?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is the employee ID of the Manager?',
    name: 'id',
  },
  {
    type: 'input',
    message: 'What is the email address of the Manager?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What is the office number of the Manager?',
    name: 'office',
  },
  {
    type: 'list',
    message: 'What would you like to do?',
    name: 'next',
    choices: ['Add Engineer', 'Add Intern', 'Finish Building My Team']
  },
];

const engineerQuestions = [
  {
    type: 'input',
    message: 'What is the name of the Engineer?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is the employee ID of the Engineer?',
    name: 'id',
  },
  {
    type: 'input',
    message: 'What is the email address of the Engineer?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What is the GitHub username of the Engineer?',
    name: 'gitHub',
  },
  {
    type: 'list',
    message: 'What would you like to do?',
    name: 'next',
    choices: ['Add Engineer', 'Add Intern', 'Finish Building My Team']
  },
];

const internQuestions = [
  {
    type: 'input',
    message: 'What is the name of the Intern?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'What is the employee ID of the Intern?',
    name: 'id',
  },
  {
    type: 'input',
    message: 'What is the email address of the Intern?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What is the school of the Intern?',
    name: 'gitHub',
  },
  {
    type: 'list',
    message: 'What would you like to do?',
    name: 'next',
    choices: ['Add Engineer', 'Add Intern', 'Finish Building My Team']
  },
];