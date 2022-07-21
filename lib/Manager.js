
const Employee = require ('./Employee')
const inquirer = require('inquirer');
const fs = require ('fs');
//const generateHTML = require (generateHtml.js)

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

class Manager extends Employee{
    constructor (name, id, email, officeNumber){
    super (name, id, email);
    this.officeNumber = officeNumber
    }
    getRole(){
        return "Manager"
    }
    getOfficeNumber (){
        return this.officeNumber
    }
}
module.exports = Manager