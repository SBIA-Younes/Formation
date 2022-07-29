// Les Type de Donne
let string = "chaine";
let number = 0;
let boolean = true;
let stringLength = string.length;
let maVariable; // type Undefined

// Tableau
let array = ["Oran", "Tlemçan", "Alge"];

// console.log(array[0][0]);

for (let i = 0; i < array.length; i++) {
  // console.log(array[i]);
  for (let a = 0; a < array[i].length; a++) {
    // console.log(array[i][a]);
  }
}

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];
// console.log(array2[4].nom);

let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};

objet.ajou = function () {
  console.log(this.age);
};

// console.log(objet.ajou());

let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["CSS", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Nikola",
    age: 42,
    technos: ["Php", "React", "NodeJs"],
    admin: true,
  },
];
// console.log(data[2].pseudo[0]);

// ---------------------------------
// Les structure de control
// ---------------------------------

if (data[0].age > data[1].age) {
  // Valeur si vrai
  // console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  // Valeur si faut
}

// Do while

let d = 0;

do {
  d++;
  // console.log(d);
} while (d < 5);

for (const user of data) {
  // document.body.innerHTML += `<li> ${user.pseudo} - ${user.age} ans </li> `;
}

for (i = 0; i < data.length; i++) {
  // document.body.innerHTML += "<h2>" + data[i].technos.join(" - ") + "</h2>";
}

document.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "red";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
      // document.body.style.background = "green";
      break;
  }
});

// ----------------------------
//  Méthodes Arrays
// ----------------------------

let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

let newArray = array3.concat(array4);

// console.log(newArray);

let newArray1 = [...array3, ...array4];

// console.log(newArray1);

// console.log(array3.join(" "));

// Important //

let arrayNumber = [4, 5, 6, 9, 10];

// console.log(arrayNumber.reduce((x,y) => x + y));
arrayNumber.unshift(17)
// console.log(arrayNumber);
