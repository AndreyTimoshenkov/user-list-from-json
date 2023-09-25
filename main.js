const users = {};

let request = fetch("./users.json")
  .then((response) => response.json())
  .then((data) => {
    let values = Object.values(data)[0];

    for (value of values) {
      let key = value.id;
      users[key] = value;
    }

    populateCaption(data);
    populateHeaders(data);
    renderUsers();
  });

function populateCaption(jsonObj) {
  let caption = document.querySelector("caption");
  let capitalisedText = _.capitalize(String(Object.keys(jsonObj)));
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
    let capitalisedText = _.capitalize(headers[key]);
    th.textContent = capitalisedText + "⭥";
    th.setAttribute("role", "button");
    th.addEventListener("click", () => console.log("BOOM!"));
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

  for (let id in users) {
    let user = users[id];
    renderUser(user);
  }
}

function renderUser(user) {
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
    delete users[id];
    renderUsers();
  });
}

function sortUsers() {}
