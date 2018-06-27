import { displayScore, handleClick } from "./utils";

describe("displayScore", () => {
  it("should return a '1' if passed 1", () => {
    const score = 1;
    const result = displayScore(score);
    expect(result).toBe("1");
  });
});

describe("handleClick", () => {
  it("should call updateScore with a score incremented by 1", () => {
    const props = { score: 1, updateScore: jest.fn() };
    handleClick(props)();
    expect(props.updateScore).toHaveBeenCalledWith(props.score + 1);
  });
});
