let data = [
  {
    Name: "Jared",
    Title: "Manager",
    ID: 1,
    Email: "jared@gmail.com",
    OfficeNumber: "333-131-7817",
    Icon: "fa-coffee",
  },
  {
    Name: "Kabao",
    Title: "Business Analyst",
    ID: 2,
    Email: "kthao@gmail.com",
    OfficeNumber: "763-131-7817",
    Icon: "fa-laptop",
  },
  {
    Name: "Yo Mama",
    Title: "Mother",
    ID: 3,
    Email: "ymama@gmail.com",
    OfficeNumber: "696-666-6969",
    Icon: "fa-laptop",
  },
  {
    Name: "Danny",
    Title: "Intern",
    ID: 4,
    Email: "danny@gmail.com",
    OfficeNumber: "696-366-6969",
    Icon: "fa-graduation-cap",
  },
];

for (let i = 0; i < data.length; i++) {
  document.getElementById("grid").innerHTML += `
  <div id="teamContent">
    <div id="cardTitle">
            <h1>${data[i].Name}</h1>
            <h2>
                <i class="fa ${data[i].Icon}" aria-hidden="true"></i>
                ${data[i].Title}
            </h2>
        </div>
        <div id="cardContent">
            <div class="card">${data[i].ID}</div>
            <div class="card">Email: ${data[i].Email}</div>
            <div class="card">Office Number: ${data[i].OfficeNumber}</div>
        </div>
    </div>`;
}
