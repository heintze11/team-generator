const Employee = require("./employee");
// require employee
// Engineer extends employee
class Engineer extends Employee{
    constructor(name, id, email, github){
        //call employee data
        super(name, id, email);
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;