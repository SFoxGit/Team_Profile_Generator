// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

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
    name: 'school',
  },
  {
    type: 'list',
    message: 'What would you like to do?',
    name: 'next',
    choices: ['Add Engineer', 'Add Intern', 'Finish Building My Team']
  },
];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
const employees = [];

function init() {
  inquirer
  .prompt(manageQuestions)
  .then(answers => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
    const engineer = []
    if (answers.next === "Add Engineer") {
      employees.push(addEngineer());
    } else if (answers.next === "Add Intern") {
      employees.push(addIntern());
    } else {
      console.log('end')
    }
    console.log(employees)
  })
}

function addEngineer() {
  inquirer
    .prompt(engineerQuestions)
    .then(answers => {
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.gitHub);
      return engineer
    })
};

function addIntern() {
  inquirer
    .prompt(internQuestions)
    .then(answers => {
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      return intern
    })
};


init();
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
