const Employee = require("../lib/Manager");

const data = {
  Id: 20,
  Name: "Kathy",
  Email: "kathy@gmail.com",
  officeNumber: 6122221111,
};

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});

test("Can set id via constructor argument", () => {
  const e = new Employee(data.Id);
  expect(e.id).toBe(data.Id);
});

test("Can set name via contructor arguments", () => {
  const e = new Employee(data.Id, data.Name);
  expect(e.name).toBe(data.Name);
});

test("Can set email via contructor arguments", () => {
  const e = new Employee(data.Id, data.Name, data.Email);
  expect(e.email).toBe(data.Email);
});

test("Can set office number via contructor arguments", () => {
  const e = new Employee(data.Id, data.Name, data.Email, data.officeNumber);
  expect(e.officeNumber).toBe(data.officeNumber);
});

//TODO: Add expected functions

test("Can get office number function return expected office number", () => {
  const e = new Employee(data.Id, data.Name, data.Email, data.officeNumber);
  expect(e.getOfficeNumber()).toBe(data.officeNumber);
});

test("Can get role function return expected role", () => {
  const e = new Employee();
  expect(e.getRole()).toBe("Manager");
});
