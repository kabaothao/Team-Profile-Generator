const Employee = require("../lib/Engineer");

const data = {
  Id: 5,
  Name: "Lily Jay",
  Email: "lilyj@gmail.com",
  Github: "lilyjay",
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

test("Can set github via contructor arguments", () => {
  const e = new Employee(data.Id, data.Name, data.Email, data.Github);
  expect(e.github).toBe(data.Github);
});

//TODO: Add expected functions

test("Can get Github function return expected Github", () => {
  const e = new Employee(data.Id, data.Name, data.Email, data.Github);
  expect(e.getGithub()).toBe(data.Github);
});

test("Can get role function return expected role", () => {
  const e = new Employee();
  expect(e.getRole()).toBe("Engineer");
});
