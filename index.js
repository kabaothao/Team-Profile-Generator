//TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

//const generateMarkdown = require("./generateMarkdown");

//TODO: Include classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");

let id = 0;
let employees = [];

let getGeneralQuestions = function (role) {
  let q = `What is the team ${role}'s`;
  let questions = [
    {
      type: "input",
      name: "name",
      message: `${q} name?`,
    },
    {
      type: "input",
      name: "email",
      message: `${q} email?`,
    },
  ];

  switch (role) {
    case "Manager":
      {
        questions.push({
          type: "input",
          name: "office",
          message: `${q} office number?`,
        });
      }
      break;
    case "Engineer":
      {
        questions.push({
          type: "input",
          name: "github",
          message: `${q} GitHub username?`,
        });
      }
      break;
    case "Intern":
      {
        questions.push({
          type: "input",
          name: "school",
          message: `${q} school?`,
        });
      }
      break;
  }
  inquirer.prompt(questions).then(function (data) {
    let employee;
    if (role === "Manager") {
      employee = new Manager(id++, data.name, data.email, data.office);
    } else if (role === "Engineer") {
      employee = new Engineer(id++, data.name, data.email, data.github);
    } else if (role === "Intern") {
      employee = new Intern(id++, data.name, data.email, data.school);
    }

    employees.push({
      Name: employee.name,
      Title: role,
      ID: employee.id,
      Email: employee.email,
      Location: employee[employee.Location],
      Icon: employee.Icon,
      Image: `https://image.flaticon.com/icons/png/512/146/${146012 + id}.png`,
    });
    inquirer.prompt(employeeTypeQuestion).then(function (choice) {
      console.log(`You choose ${choice.employeeType}`);
      if (choice.employeeType !== "I don't want to add anymore team members") {
        console.log(`Lets create your new ${choice.employeeType}..`);
        getGeneralQuestions(choice.employeeType);
      } else {
        console.log("Generating html file..");
        fs.writeFileSync("index.html", render(employees), "utf-8");
      }
    });
  });
};

const render = (employees) => {
  let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Assistant&display=swap" rel="stylesheet">

        <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="stylesheet" href="./dist/style.css" />

        <title>Team Profile Generator</title>
    </head>
    <body>
        <section id="titleContent">
        <h1 class="font-25-em">My Team</h1>
        </section>

        <section id="content">
        <div class="grid" id="grid">`;

  for (let i = 0; i < employees.length; i++) {
    html += `
        <div id="teamContent" class="w3-animate-zoom">
            <div id="cardTitle">
              <div>
                <img alt="image icon" src="${employees[i].Image}">
              </div>
              <div>
                <h1>${employees[i].Name}</h1>
                <h2>
                    <i class="fa fa-${
                      employees[i].Icon
                    }" aria-hidden="true"></i>
                    ${employees[i].Title}
                </h2>
              </div>
            </div>
            <div id="cardContent">
                <div class="card">Employee ID: ${employees[i].ID}</div>
                <div class="card">Email: 
                    <a href="mailto:${employees[i].Email}">${
      employees[i].Email
    }</a>
                </div>
                <div class="card">
                    ${
                      employees[i].Title == "Manager"
                        ? "Office Number: " + employees[i].Location
                        : employees[i].Title == "Engineer"
                        ? `GitHub: <a href="https://github.com/${employees[i].Location}">https://github.com/${employees[i].Location}</a>`
                        : "School: " + employees[i].Location
                    }</div>
            </div>
        </div>`;
  }

  html += `</div>
            </section>
        </body>
    </html>
  `;
  return html;
};

let employeeTypeQuestion = {
  type: "list",
  name: "employeeType",
  message: "What type of team member would you like to add?",
  choices: ["Engineer", "Intern", "I don't want to add anymore team members"],
};

function init(role) {
  console.log("Hello, let's build your team!");
  getGeneralQuestions(role);
}

// Function call to initialize app
init("Manager");
