const Employee = require("./employee");

class Intern extends Employee {
  constructor(NAME, ID, EMAIL, SCHOOL) {
    super(NAME, ID, EMAIL);
    this.school = SCHOOL;
  }
  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
