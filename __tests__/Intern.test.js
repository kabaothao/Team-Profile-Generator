const Employee = require("../lib/Intern");

const data = {
  Id: 30,
  Name: "John",
  Email: "john@gmail.com",
  School: "Henry High School",
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

test("Can set school via contructor arguments", () => {
  const e = new Employee(data.Id, data.Name, data.Email, data.School);
  expect(e.school).toBe(data.School);
});

//TODO: Add expected functions

test("Can get school function return expected school", () => {
  const e = new Employee(data.Id, data.Name, data.Email, data.School);
  expect(e.getSchool()).toBe(data.School);
});

test("Can get role function return expected role", () => {
  const e = new Employee();
  expect(e.getRole()).toBe("Intern");
});
