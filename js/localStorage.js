// Pure functions
function addToArr(arr, obj) {
  arr = [...arr, obj];
  return arr;
}
function removeFromArr(arr, removedId) {
  return arr.filter((id) => removedId !== id);
}
function updateArr(arr, id, obj) {
  arr = [...arr];
  arr.forEach((e, index) => {
    if (e.id === id) {
      arr[index] = { ...obj, id };
    }
  });
  return arr;
}

const LocalStorageHelpers = (() => {
  function getItem(key) {
    let arr = localStorage.getItem(key);
    arr = !arr ? [] : JSON.parse(arr);
    return arr;
  }
  // set item to local storage
  function setItem(key, arr) {
    arr = JSON.stringify(arr);
    localStorage.setItem(key, arr);
  }
  //add element to local storage item
  function addItemTo(key, obj) {
    let arr = localStorage.getItem(key);
    arr = !arr ? [] : JSON.parse(arr);
    arr = addToArr(arr, obj);
    newArr = JSON.stringify(arr);
    localStorage.setItem(key, newArr);
  }
  //remove element from loclstorage item
  function removeItemFrom(key, id) {
    let arr = localStorage.getItem(key);
    console.log(arr);
    arr = JSON.parse(arr);
    arr = removeFromArr(arr, id);
    arr = JSON.stringify(arr);
    console.log(arr);
    localStorage.setItem(key, arr);
  }
  //takes key and id for object that we need update, and new obj that will taken
  function updateItemFrom(key, id, obj) {
    let arr = localStorage.getItem(key);
    arr = JSON.parse(arr);
    arr = updateArr(arr, id, obj);
    arr = JSON.stringify(arr);
    localStorage.setItem(key, arr);
  }

  return {
    getItem,
    setItem,
    addItemTo,
    removeItemFrom,
    updateItemFrom,
  };
})();

if (module) {
  module.exports = {
    addToArr,
    removeFromArr,
    updateArr,
  };
}
