const fetch = (url, cb) => {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        cb(JSON.parse(xhr.responseText));
      }
    //   else if(xhr.status === 404){

    //   }
    }
  };
  xhr.open("GET", url);
  xhr.send();
};
