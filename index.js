const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const fs = require('fs');
const generateHtml = require('./util/generateHtml');

const team = []

const managerQuestions = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter manager's first and last name.",
            name: "name"
        },
        {
            type: "input",
            message: "Enter manager's employee ID.",
            name: "id",
        },
        {
            type: "input",
            message: "Enter manager's email.",
            name: "email",
        },
        {
            type: "input",
            message: "Enter managers's office phone number.",
            name: "officeNumber",
        },
    ]).then(ans => {
        let manager = new Manager(ans.name,ans.id,ans.email,ans.officeNumber)
        team.push(manager)
        start()
    })
}
const start = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add another team member? Select 'Finish' if team is complete",
            choices: ['Intern', 'Engineer', 'Finish'
            ],
            name: "role",
        },
    ]).then(ans => {
        if (ans.role === 'Finish') {
            writeToFile()
            console.log("complete")
        } else if (ans.role === 'Engineer') {
            console.log("You have selected to add an Engineer to your team.");
            engineerQuestions()
        } else {
            (ans.role === "Intern")
            console.log("You have selected to add an Intern to your team.");
            internQuestions()

        }

    })
}

const engineerQuestions = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter engineer's first and last name.",
            name: "name",
        },
        {
            type: "input",
            message: "Enter engineer's ID.",
            name: "id",
        },
        {
            type: "input",
            message: "Enter engineer's email.",
            name: "email",
        },
        {
            type: "input",
            message: "Enter engineer's GitHub profile.",
            name: "github",
        },

    ]).then(ans => {
        let engineer = new Engineer(ans.name,ans.id,ans.email,ans.github)
        team.push(engineer)
        start()
    })
}
const internQuestions = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter intern's fist and last name.",
            name: "name"
        },

        {
            type: "input",
            message: "Enter intern's employee ID.",
            name: "id",
        },
        {
            type: "input",
            message: "Enter intern's email.",
            name: "email",
        },
        {
            type: "input",
            message: "Enter intern's school.",
            name: "school",
        },

    ]).then(ans => {
        let intern = new Intern(ans.name,ans.id,ans.email,ans.school)
        team.push(intern)
        start()
    })
}

function writeToFile(fileName, data) {
    fs.writeFileSync("./output/teamroster.html", generateHtml(team), "UTF-8", (err) => {
        if (err) {
            throw err;
        }
    })
}


managerQuestions()