const { addToArr, removeFromArr, updateArr } = require("./localStorage.js");

describe("Check if addToArr function add obj correctly", () => {
  test("[] should be [{pro1 : 1 }]", () => {
    expect(addToArr([], { pro1: 1 })).toEqual([{ pro1: 1 }]);
  });
  test("[{pro1:1}] should be [{pro1:1},{pro2:2}]", () => {
    expect(addToArr([{ pro1: 1 }], { pro2: 2 })).toEqual([
      { pro1: 1 },
      { pro2: 2 },
    ]);
  });
  test("[{pro1:1},{pro2:2}] should be [{pro1:1},{pro2:2},{pro3:3}]", () => {
    expect(addToArr([{ pro1: 1 }, { pro2: 2 }], { pro3: 3 })).toEqual([
      { pro1: 1 },
      { pro2: 2 },
      { pro3: 3 },
    ]);
  });
});

describe("Check if removeFromArr function removed the item", () => {
  test("[] should be [{pro1 : 1 }]", () => {
    expect(removeFromArr([{ pro1: 1, id: 1 }], 1)).toEqual([]);
  });
  test("[{pro1:1 , id : 1},{pro2:2 , id : 2}] should be [{pro1:1 , id : 1}]", () => {
    expect(
      removeFromArr(
        [
          { pro1: 1, id: 1 },
          { pro2: 2, id: 2 },
        ],
        2
      )
    ).toEqual([{ pro1: 1, id: 1 }]);
  });
});

describe("check updateFromArr funciton", () => {
  test("update the obj in array", () => {
    expect(
      updateArr([{ id: 1, name: "mobilee" }], 1, { id: 1, name: "mobile" })
    ).toEqual([{ id: 1, name: "mobile" }]);
  });
  test("update the obj in array", () => {
    expect(
      updateArr(
        [
          { id: 1, name: "maouse EE" },
          { id: 2, name: "maouse HP" },
        ],
        1,
        { id: 1, name: "maouse thinkPad" }
      )
    ).toEqual([
      { id: 1, name: "maouse thinkPad" },
      { id: 2, name: "maouse HP" },
    ]);
  });
});
