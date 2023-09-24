let request = fetch("./users.json")
  .then((response) => response.json())
  .then((data) => {
    populateCaption(data);
    populateHeaders(data);
    // showUsers(data);
  });

function capitalizeFLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

// (async () => {
//     let DB = await(await fetch('users.json')).json();
//     console.log(DB);
// })();

let caption = document.querySelector("caption");
let section = document.querySelector("section");

function populateCaption(jsonObj) {
  let caption = document.querySelector("caption");
  let capitalisedText = capitalizeFLetter(String(Object.keys(jsonObj)));
  caption.textContent = capitalisedText;
}

function populateHeaders(jsonObj) {
  let tr = document.querySelector("tr");

  let user = Object.values(jsonObj)[0][0];
  let headers = Object.keys(user);

  for (let prop in headers) {
  }
}

// function showUsers(jsonObj) {
//   let section = document.querySelector("table");
//   let users = Object.values(jsonObj);

//   for (let i = 0; i < users.length; i++) {
//     var row = document.createElement("row");
//     var myH2 = document.createElement("h2");
//     var myPara1 = document.createElement("p");
//     var myPara2 = document.createElement("p");
//     var myPara3 = document.createElement("p");
//     var myList = document.createElement("ul");

//     myH2.textContent = heroes[i].name;
//     myPara1.textContent = "Secret identity: " + heroes[i].secretIdentity;
//     myPara2.textContent = "Age: " + heroes[i].age;
//     myPara3.textContent = "Superpowers:";

//     var superPowers = heroes[i].powers;
//     for (var j = 0; j < superPowers.length; j++) {
//       var listItem = document.createElement("li");
//       listItem.textContent = superPowers[j];
//       myList.appendChild(listItem);
//     }

//     myArticle.appendChild(myH2);
//     myArticle.appendChild(myPara1);
//     myArticle.appendChild(myPara2);
//     myArticle.appendChild(myPara3);
//     myArticle.appendChild(myList);

//     section.appendChild(myArticle);
//   }
// }
