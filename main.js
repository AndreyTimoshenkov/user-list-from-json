let request = fetch("./users.json")
  .then((response) => response.json())
  .then((data) => {
    let values = Object.values(data)[0];
    for (value of values) {
      localStorage.setItem(value.id, JSON.stringify(value));
    }

    populateCaption(data);
    populateHeaders(data);

    if (localStorage.length === 0) {
      showUsers(data);
    } else {
      renderUsers();
    }
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
      let tr = document.createElement("tr");
      let tbody = document.querySelector("tbody");
      for (key in user) {
        let td = document.createElement("td");
        td.textContent = user[key];
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
  }
}

function renderUsers() {
  for (let i = 1; i <= localStorage.length; i++) {
    let user = JSON.parse(localStorage.getItem(i));
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
  tbody.appendChild(tr);
}
