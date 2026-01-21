const calculator = require("./calculator");

test("add", () => {
    expect(calculator.add(1,2)).toBe(3);
})

test("subtract", () => {
    expect(calculator.subtract(1,2)).toBe(-1);
})

test("divide", () => {
    expect(calculator.divide(6,3)).toBe(2);
})

test("multiply", () => {
    expect(calculator.multiply(3,3)).toBe(9);
})

test("not valid numbers", () => {
    expect(calculator.divide("a","b")).toBe("Arguments contain non-number");
})