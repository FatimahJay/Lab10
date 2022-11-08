const task1 = require("./task1");

test("Testing sum", () => {
    expect(task1.sum(8,4)).toBe(12);
});


test("Testing sub", () => {
    expect(task1.sub(8,4)).toBe(4);
});


test("Testing mult", ()=> {
    expect(task1.mult(8,4)).toBe(32);
});


test("Testing div", () => {
    expect(task1.div(8,4)).toBe(2);
});

test("Testing div", () => {
    expect(task1.div(8,0)).toBe(undefined);
});
