const app = require('./app');

test("should equal 5 when pass 2 and 3", () => {
    expect(app.add(2, 3)).toBe(5);
});

test("should not return null when passed 2 and 3", () => {
    expect(app.add(2, 3)).not.toBe(null);
});

test("should return truthy if passed 6", () => {
    expect(app.isEven(6)).toBeTruthy;
})

test("should return falsy if passed 5", () => {
    expect(app.isEven(5)).toBeFalsy;
})

test("should return an array of 7 characters", () => {
    expect(app.numberSequence(7)).toHaveLength(7);
})

test("should return string type", () => {
    expect(app.convertToString(1234)).toEqual("1234");
})

test("should not return number type", () => {
    expect(app.convertToString(1234)).not.toEqual(1234);
})

test("should return Earth when passed 3", () => {
    expect(app.getPlanet(3)).toEqual('Earth');
})

test("should return No Planet when passed a number that isn't available", () => {
    expect(app.getPlanet(20)).toEqual('No Planet');
})

test("should return 4 for [true, true, false, true, true]", () => {
    expect(app.countStudents([true, true, false, true, true])).toEqual(4);
})

test("should return number 3649 for input 67", () => {
    expect (app.squareAndConcat(67)).toEqual(3649);
})

test("should not return string '3649' for input 67", () => {
    expect (app.squareAndConcat(67)).not.toEqual("3649");
})

test("should return 20 for input 2022", () => {
    expect (app.getCentury(2022)).toEqual(20);
})

test("should return 1 for [0,0,0,1]", () => {
    expect (app.binary([0,0,0,1])).toEqual(1);
})

test("should return 4 for [0,1,0,0]", () => {
    expect (app.binary([0,1,0,0])).toEqual(4);
})

//.toBe( ) .toHaveLength( ) .toEqual( ) .toContain( ) .toBeDefined( ) .toHaveBeenCalled( )