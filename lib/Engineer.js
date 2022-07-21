const Employee = require('./Employee');
const inquirer = require('inquirer');
const fs = require('fs');
//const generateHTML = require (generateHtml.js)

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github
  }
  //--overridden to 'Engineer'
  getRole() {
    return "Engineer"
  }
  getGithub() {
    return this.github
  }
}
module.exports = Engineer
