const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, title, officeNumber) {
        super(name, id, title);
        this.officeNumber = officeNumber;
    }
    getOffice() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}
module.exports = Manager;