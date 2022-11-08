const {contain} = require("./task5");

test("Testing include", () => {
    expect(contain(5)).toBe(false);
});