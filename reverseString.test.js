const reverseString = require("./reverseString");

test("1 word test", () =>{
    expect(reverseString("hello")).toBe("olleh");
})


test("spaced-word test", () =>{
    expect(reverseString("hello there")).toBe("ereht olleh");
})


test("not a string", () =>{
    expect(reverseString(123)).toBe("not a string");
})