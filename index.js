const inquirer = require("inquirer");
const fs = require("fs");
const team = require("./src/team");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern")
// do not call require Employee and each class already calls it

// Install dependencies
// Create application to ask for Manager name, ID, Email, Office Number
// Save manager data
// Select another employee to add: Intern, Engineer, or finish
// Engineer - Name, ID, Email, Github
// Intern - Name, ID, Email, school
// Finish building team
    // creates HTML with cards for each employee
    // Links to email and github

    // Test each JS file - Employee, Manager, Engineer, Intern


const members = [];

const startManager = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Manager's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the Manager's ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the Manager's email?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the Manager's office number?",
        },
    ])
    .then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        members.push(manager);
        menu();
    })
};

const startEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Engineer's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the Engineer's ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the Engineer's email?",
        },
        {
            type: "input",
            name: "github",
            message: "What is the Engineer's Github?",
        },
    ])
    .then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        members.push(engineer);
        menu();
    })
};

const startIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Intern's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the Intern's ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the Intern's email?",
        },
        {
            type: "input",
            name: "school",
            message: "What is the Intern's School?",
        },
    ])
    .then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        members.push(intern);
        menu();
    })
};

const menu = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "Do you want to add another team member or create the team?",
            choices: ["Add an Engineer", "Add an Intern", "Create Team"],
            name: "select",
        }])
        .then((answer) => {
            switch(answer.select){
            case "Add an Engineer":
                startEngineer();
                break;
            case "Add an Intern":
                startIntern();
                break;
            default:
                generateTeam();
                break;
        }})
};

const generateTeam = () => {
  
    fs.writeFile("./dist/index.html", team(members), (err) => 
    err ? console.log(err) : console.log ("success!"));
};


startManager();

