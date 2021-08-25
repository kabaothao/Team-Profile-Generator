//This is a subclass from Employee.

const employee = require("./Employee");

class Intern extends employee {
  constructor(id, name, email, school) {
    super(id, name, email);
    this.school = school;
  }

  Icon = "graduation-cap";
  Location = "school";

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
