const search = require("./logic");

describe("Search Functions Tests : ", () => {
  test("Should return array of objects it's title include 5 ", () => {
    let arr = [
      { title: "test1" },
      { title: "test21" },
      { title: "test54" },
      { title: "test451" },
    ];
    let actual = search.LocalSearch(arr, "5");
    let expected = [{ title: "test54" }, { title: "test451" }];
    expect(actual).toEqual(expected);
  });

  test("Should return array of objects it's title include 1 ", () => {
    let arr = [
      { title: "test1" },
      { title: "test21" },
      { title: "test54" },
      { title: "test451" },
    ];
    let actual = search.LocalSearch(arr, "1");
    let expected = [
      { title: "test1" },
      { title: "test21" },
      { title: "test451" },
    ];
    expect(actual).toEqual(expected);
  });

  test("Should return array of objects it's title include TEST chars", () => {
    let arr = [
      { title: "test1" },
      { title: "test21" },
      { title: "test54" },
      { title: "test451" },
    ];
    let actual = search.LocalSearch(arr, "TEST");
    let expected = [
      { title: "test1" },
      { title: "test21" },
      { title: "test54" },
      { title: "test451" },
    ];
    expect(actual).toEqual(expected);
  });
});
