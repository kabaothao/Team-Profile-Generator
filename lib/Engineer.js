//This is a subclass from Employee.

const employee = require("./Employee");

class Engineer extends employee {
  constructor(id, name, email, github) {
    super(id, name, email);
    this.github = github;
  }

  Icon = "laptop";
  Location = "github";

  getGithub() {
    return this.github;
  }

  //if i created a function called getRole() which is basically returning a hard-coded value, therefore this does not need to be a function.
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
