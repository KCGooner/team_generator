const Employee = require('./employee');


//Manager class
class Manager extends Employee {
    constructor(name, id, title, officeNumber) {
        super(name, id, title);
        this.officeNumber = officeNumber;
    }
    getOffice(officeNumber) {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}
module.exports = Manager;