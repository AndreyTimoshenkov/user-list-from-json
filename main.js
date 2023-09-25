const users = {};

let request = fetch("./users.json")
  .then((response) => response.json())
  .then((data) => {
    let values = Object.values(data)[0];
    for (value of values) {
      localStorage.setItem(value.id, JSON.stringify(value));
    }

    populateCaption(data);
    populateHeaders(data);
    renderUsers();
  });

for (let [key, value] of Object.entries(localStorage)) {
  users[key] = value;
}

console.log(users);

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

function renderUsers() {
  let tbody = document.querySelector("tbody");
  if (tbody !== null) {
    tbody.remove();
  }
  tbody = document.createElement("tbody");
  let table = document.querySelector("table");
  table.appendChild(tbody);

  for (let id in localStorage) {
    let user = JSON.parse(localStorage.getItem(id));
    renderUser(user);
  }
}

function renderUser(user) {
  if (user === null) {
    return;
  }
  let tr = document.createElement("tr");
  let tbody = document.querySelector("tbody");
  for (key in user) {
    let td = document.createElement("td");
    td.textContent = user[key];
    tr.appendChild(td);
  }
  createDelButton(tr, user);
  tbody.appendChild(tr);
}

function createDelButton(tr, user) {
  let td = document.createElement("td");
  let button = document.createElement("button");
  button.textContent = "🗑";
  let id = user["id"];
  button.setAttribute("id", id);
  td.appendChild(button);
  tr.appendChild(button);
  button.addEventListener("click", () => {
    localStorage.removeItem(id);
    renderUsers();
  });
}
