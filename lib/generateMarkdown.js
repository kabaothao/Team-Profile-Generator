let employees = [
  {
    ID: 0,
    Name: "John Oliver",
    Title: "Manager",
    OfficeNumber: "612-450-2151",
    Email: "johno@gmail.com",
    Icon: "coffee",
  },
  {
    ID: 1,
    Name: "Mulan Lee",
    Title: "Engineer",
    OfficeNumber: "651-529-6454",
    Email: "mulanl@gmail.com",
    Icon: "laptop",
  },
  {
    ID: 2,
    Name: "Thor Thunder",
    Title: "Intern",
    OfficeNumber: "612-454-6556",
    Email: "thort@gmail.com",
    Icon: "graduation-cap",
  },
];

const render = (employees) => {
  for (let i = 0; i < employees.length; i++) {
    document.getElementById("grid").innerHTML += `
      <div id="teamContent">
        <div id="cardTitle">
                <h1>${employees[i].Name}</h1>
                <h2>
                    <i class="fa fa-${employees[i].Icon}" aria-hidden="true"></i>
                    ${employees[i].Title}
                </h2>
            </div>
            <div id="cardContent">
                <div class="card">${employees[i].ID}</div>
                <div class="card">Email: ${employees[i].Email}</div>
                <div class="card">Office Number: ${employees[i].OfficeNumber}</div>
            </div>
        </div>`;
  }
};
