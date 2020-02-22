const inquirer = require("inquirer");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const card = require("./team_generator/lib/main");

const debug = 1;

ask();

async function ask() {
    let addPeople = "y";
    let people = [];
    do {
        const response = await promptUser();
        people.push(response);
        addPeople = response.end;
        debug && console.log(response);
    } while (addPeople === "y");
    debug && console.log(people);
    buildHtml(people);
}