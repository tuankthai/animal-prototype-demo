const Shape = require('./challenges');

// Challenge 1 test
test("Challenge 1 - describe method", () => {
  const shape1 = new Shape("Shape");
  expect(() => {
    shape1.describe();
  }).not.toThrow();
});

// Challenge 2 test
test("Challenge 2 - describe and calculateArea methods", () => {
  const shape2 = new Shape("Shape");
  expect(() => {
    shape2.describe();
    shape2.calculateArea();
  }).not.toThrow();
});

// Challenge 3 test
test("Challenge 3 - info method and describe method", () => {
  expect(() => {
    Shape.info();
  }).not.toThrow();

  const shape3 = new Shape("Shape");
  expect(() => {
    shape3.describe();
  }).not.toThrow();
});
