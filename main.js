let DB = null;

let request = fetch('./users.json').then(response => response.json()).then((data) => {
    DB = data;
    populateHeader(DB);
    showUsers(data);
});

// (async () => {
//     let DB = await(await fetch('users.json')).json();
//     console.log(DB);
// })();


let header = document.querySelector("header");
let section = document.querySelector("section");

function populateHeader(jsonObj) {
    let header = document.querySelector("header");
    let myH1 = document.createElement("h1");
    myH1.textContent = Object.keys(jsonObj);
    header.appendChild(myH1);
    };

function showUsers(jsonObj) {
    let section = document.querySelector("section");
    let users = Object.values(jsonObj);

    for (let i = 0; i < users.length; i++) {
        var row = document.createElement("row");
        var myH2 = document.createElement("h2");
        var myPara1 = document.createElement("p");
        var myPara2 = document.createElement("p");
        var myPara3 = document.createElement("p");
        var myList = document.createElement("ul");
      
    myH2.textContent = heroes[i].name;
    myPara1.textContent = "Secret identity: " + heroes[i].secretIdentity;
    myPara2.textContent = "Age: " + heroes[i].age;
    myPara3.textContent = "Superpowers:";
      
    var superPowers = heroes[i].powers;
    for (var j = 0; j < superPowers.length; j++) {
    var listItem = document.createElement("li");
    listItem.textContent = superPowers[j];
    myList.appendChild(listItem);
    }
      
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);
      
    section.appendChild(myArticle);
    }
};