//This is a subclass from Employee.

const employee = require("./Employee");

class Manager extends employee {
  constructor(id, name, email, officeNumber) {
    super(id, name, email);
    this.officeNumber = officeNumber;
  }

  Icon = "coffee";
  Location = "officeNumber";

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
