import { generateImageMap } from './utils/calculator'

// add function to check that array is unique.
const isArrayUnique = arr => Array.isArray(arr) && new Set(arr).size === arr.length; 

describe("Test for rgb map", () => {
  test("check if rgb values are unique", () => {
    const res = 32768
    const width = 256
    const output = generateImageMap(res,width)
    expect(output.rgbValues.length).toEqual(res)
    expect(isArrayUnique(output.rgbValues)).toBeTruthy();
  });
});