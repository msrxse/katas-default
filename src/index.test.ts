import { isEven } from "./index";

describe("isEven", () => {
  it("case 1", () => {
    const evenNumber = 10;

    const result = isEven(evenNumber);

    expect(result).toBe(true);
  });

  it("case 2", () => {
    const oddNumber = 7;

    const result = isEven(oddNumber);

    expect(result).toBe(false);
  });

  it("case 3", () => {
    const zero = 0;

    const result = isEven(zero);

    expect(result).toBe(true);
  });
});
