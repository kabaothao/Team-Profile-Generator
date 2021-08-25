const Employee = require("../lib/Employee");

const data = { Id: 7, Name: "Tom", Email: "tom@gmail.com" };

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

//TODO: Add expected functions

test("Can get id function return expected id", () => {
  const e = new Employee(data.Id);
  expect(e.getId()).toBe(data.Id);
});

test("Can get name function return expected name", () => {
  const e = new Employee(data.Id, data.Name);
  expect(e.getName()).toBe(data.Name);
});

test("Can get email function return expected email", () => {
  const e = new Employee(data.Id, data.Name, data.Email);
  expect(e.getEmail()).toBe(data.Email);
});

test("Can get role function return expected role", () => {
  const e = new Employee();
  expect(e.getRole()).toBe("Employee");
});
