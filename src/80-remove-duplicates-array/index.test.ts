import { removeDuplicates } from "./index";

describe("removeDuplicates", () => {
  it("case 1", () => {
    const nums = [1, 1, 1, 2, 2, 3];

    const result = removeDuplicates(nums);

    expect(result).toBe(5);
    expect(nums).toEqual(expect.arrayContaining([1, 1, 2, 2, 3]));
  });

  it("case 2", () => {
    const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];

    const result = removeDuplicates(nums);

    expect(result).toBe(7);

    expect(nums).toEqual(expect.arrayContaining([0, 0, 1, 1, 2, 3, 3]));
  });

  it("case 2", () => {
    const nums = [0, 2, 2];

    const result = removeDuplicates(nums);

    expect(result).toBe(3);

    expect(nums).toEqual(expect.arrayContaining([0, 2, 2]));
  });
});
