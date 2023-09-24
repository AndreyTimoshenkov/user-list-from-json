let request = fetch("./users.json")
  .then((response) => response.json())
  .then((data) => {
    populateCaption(data);
    populateHeaders(data);
    showUsers(data);
  });

function capitalizeFLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function populateCaption(jsonObj) {
  let caption = document.querySelector("caption");
  let capitalisedText = capitalizeFLetter(String(Object.keys(jsonObj)));
  caption.textContent = capitalisedText;
}

function populateHeaders(jsonObj) {
  let tr = document.createElement("tr");
  let thead = document.querySelector("thead");
  thead.appendChild(tr);

  let user = Object.values(jsonObj)[0][0];
  let headers = Object.keys(user);

  for (key in headers) {
    let th = document.createElement("th");
    let capitalisedText = capitalizeFLetter(headers[key]);
    th.textContent = capitalisedText;
    tr.appendChild(th);
  }
}

function showUsers(jsonObj) {
  let values = Object.values(jsonObj);
  for (let value of values) {
    for (let user of value) {
      for (key in user) {
        console.log(user[key]);
      }
    }
  }
}
