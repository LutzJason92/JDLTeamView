const Employee = require("./employee");

class Intern extends Employee {
  constructor(NAME, ID, EMAIL, IMG, SCHOOL) {
    super(NAME, ID, EMAIL, IMG);
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
