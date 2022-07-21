const Employee = require('./Employee')
const inquirer = require('inquirer');
const fs = require('fs');
//const generateHTML = require (generateHtml.js)
// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school
    }
    getRole() {
        return "Intern"
    }
    getSchool() {
        return this.school

    }

    // }
}
module.exports = Intern