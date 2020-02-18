const inquirer = require("inquirer");
const fs = require("fs");
const manager = ("./templates/manager.js");
const engineer = ("./templates/engineer.js");
const intern = ("./templates/intern.js");


inquirer.prompt([{
    type: "confirm",
    message: "Add a new team member?",
    name: "users",
    prompts: [
        {
            type: "list",
            message: "Choose team member's role:",
            name: "role",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
            ],
        },
        {
            type: "input",
            name: "name",
            message: "What is member's Name? ",
        }
    ]
}])