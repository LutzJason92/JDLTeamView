class Employee {
  constructor(NAME, ID, EMAIL, IMG) {
    this.name = NAME;
    this.id = ID;
    this.img = IMG;
    this.email = EMAIL;
  }
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getImg() {
    return this.img;
  }

  getRole() {
    return "employee";
  }
}

module.exports = Employee;
