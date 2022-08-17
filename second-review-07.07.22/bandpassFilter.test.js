const bandpassFilter = require("./bandpassFilter");

describe("bandpassFilter", () => {
  it("returns the input that it's given", () => {
    const soundwave = [60, 40, 45, 60, 1000];
    expect(bandpassFilter(soundwave)).toEqual([60, 40, 45, 60, 1000]);
  });

  it("returns array with freq that are above the lower limit ", () => {
    const soundwave = [60, 10, 45, 60, 1500];
    expect(bandpassFilter(soundwave)).toEqual([60, 40, 45, 60, 1000]);
  });
});
