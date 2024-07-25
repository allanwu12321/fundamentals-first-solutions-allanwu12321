/* global getAverageOfNumbersArray, expect */

describe("getAverageOfNumbersArray(array)", function () {
    beforeEach(
        "make sure that getAverageOfNumbersArray is defined",
        function () {
            expect(getAverageOfNumbersArray).to.be.a("function");
        }
    );

    it("returns the average of [6, 5, 9, 36, 63]", function () {
        const output = getAverageOfNumbersArray([6, 5, 9, 36, 63]);
        expect(output).to.equal(23.8);
    });

    it("returns the average of [34, 7, 1, 67, 222]", function () {
        const output = getAverageOfNumbersArray([34, 7, 1, 67, 222]);
        expect(output).to.equal(66.2);
    });

    it("returns the average of [78943, 7654, 123432, 87465]", function () {
        const output = getAverageOfNumbersArray([78943, 7654, 123432, 87465]);
        expect(output).to.equal(74373.5);
    });
});
