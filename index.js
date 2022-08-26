const inquire = require("inquirer");
const manager = require("./lib/manager");
const intern = require("./lib/intern.js");
const engineer = require("./lib/engineer")
const fs = require("fs");
const team = require("./src/team")
// don not call require Employee and each class already calls it

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

