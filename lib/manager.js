const Employee = require("./employee");
// require employee
// manager extends employee
class Manager extends Employee{
    constructor (name, id, email, officeNumber) {
        //call employee data
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;
