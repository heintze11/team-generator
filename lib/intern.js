const Employee = require("./employee");
// require employee
// intern extends employee
class Intern extends Employee{
    constructor (name, id, email, school){
        //call employee data
        super(name, id, email);
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;
