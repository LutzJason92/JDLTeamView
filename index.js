const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer.js");
const Manager = require("./lib/manager.js");
const Intern = require("./lib/intern.js");
const renderTemplateLiteral = require("./src/src.js");

let staff = [];
// prompts user input
const entry = [
  {
    type: "input",
    message: "What is employee First and Last name?",
    name: "NAME",
  },
  {
    type: "input",
    message: "Enter Employee ID#:",
    name: "GETID",
  },
  {
    type: "input",
    message: "Enter Employee email address:",
    name: "GETEMAIL",
  },
  {
    type: "input",
    message: "Enter a Relative path tom EMP Profile Photo:",
    name: "GETIMG",
  },
  {
    type: "list",
    message: "Enter Employee :",
    name: "GETROLE",
    choices: ["Intern", "Engineer", "Manager"],
  },
];

function init(entry) {
  inquirer.prompt(entry).then((response) =>
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the Managers office number",
          name: "OFFICE",
          when: function (_) {
            return response.GETROLE === "Manager";
          },
        },
        {
          type: "input",
          message: "What is the Engineers Github Username?",
          name: "GITHUB",
          when: function (_) {
            return response.GETROLE === "Engineer";
          },
        },
        {
          type: "input",
          message: "At what school does the Intern Study?",
          name: "SCHOOL",
          when: function (_) {
            return response.GETROLE === "Intern";
          },
        },
      ])

      .then(({ OFFICE, GITHUB, SCHOOL }) => {
        console.log(OFFICE, GITHUB, SCHOOL, response);

        if (OFFICE) {
          let newManager = new Manager(
            response.NAME,
            response.GETID,
            response.GETEMAIL,
            response.GETIMG,
            OFFICE
          );
          staff.push(newManager);
        }
        if (GITHUB) {
          let newEngineer = new Engineer(
            response.NAME,
            response.GETID,
            response.GETEMAIL,
            response.GETIMG,
            GITHUB
          );
          staff.push(newEngineer);
        }
        if (SCHOOL) {
          let newIntern = new Intern(
            response.NAME,
            response.GETID,
            response.GETEMAIL,
            response.GETIMG,
            SCHOOL
          );
          staff.push(newIntern);
        }
        inquirer
          .prompt({
            type: "list",
            message: "Would you link to add another staff member?",
            name: "ADDSTAFF",
            choices: ["Yes", "No"],
          })
          .then(({ ADDSTAFF }) => {
            if (ADDSTAFF === "Yes") {
              init(entry);
            } else {
              fs.writeFile(
                "index.html",
                renderTemplateLiteral(staff),
                (err) => {
                  err
                    ? console.log(err)
                    : console.log(
                        "HTML file created. Open in browser to view Team."
                      );
                }
              );
            }
          });
      })
  );
}
init(entry);
