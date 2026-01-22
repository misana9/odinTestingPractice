const analyzeArray = require("./analyzeArray");


test("array = [1,8,3,4,2,6]", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})

test("array = ['a string']", () => {
    expect(analyzeArray(["a string"])).toBe("array invalid")
})