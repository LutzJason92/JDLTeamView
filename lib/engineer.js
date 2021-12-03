const Employee = require("./employee");

class Engineer extends Employee {
  constructor(NAME, ID, EMAIL, IMG, GITHUB) {
    super(NAME, ID, EMAIL, IMG);
    this.github = GITHUB;
  }
  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
