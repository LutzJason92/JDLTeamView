const Employee = require("./employee");

class Manager extends Employee {
  constructor(NAME, ID, EMAIL, IMG, OFFICE) {
    super(NAME, ID, EMAIL, IMG);
    this.office = OFFICE;
  }

  getOfficeNumber() {
    return this.office;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
