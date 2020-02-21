const Employee = require('./employee');


//class of Engineer
class Engineer extends Employee {
    constructor(name, id, title, github) {
        super(name, id, title)
        this.github = github;
    }

    getGithub() {

    }

    getRole() {
        return
    }
}


console.log(getRole());