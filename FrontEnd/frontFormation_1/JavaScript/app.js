// Creation de Variable
const prenom = "Youbra";
const typeNumber = undefined;
// console.log(typeNumber);
const typeObje = {
    a:1,
    b:2,
    c:3,
}
// console.log(typeObje);
const typeTableau = [1,2,3,4,5,6,7,8,9]
// console.log(typeTableau);
const typeBooleen = true;
// console.log(typeBooleen);
let name = "Younes";
name += " tst ";
// console.log(name);

// console.log(prenom);

// console.log(`${prenom} txt ${typeBooleen}`);

// ****************

// Fonction

function presntation(){

    console.log("Hello je suis Youbra");
    
}

// presntation()



function presntation(){
    const txt = "Hello je suis Youbra";

    
    return txt
}
// console.log(presntation()); 


function presntation(a, b){

    console.log("Hello World!");
    return a +b;
}
// console.log(presntation(1,2)); 

// fonction flechee

const foo = (a,b) => {
    console.log("Hello World!");
    return a + b;
}

// console.log(foo(4,5));


const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    console.log("Tu as clique!");
}) 


const fooa = () => console.log("Hello World!");
// fooa(); 

// Les Condition

const nb = 200;

if(nb > 300 || nb > 100) {
    // console.log("La Condition or (true or false)");
}
else if(nb > 50 && nb > 100) {
    // console.log("La Condition and (true and true)");
}
else if(nb > 50) {
    console.log("nb est plus grand que 50");
}
else {
    console.log("nb = 50");
}
let rb = false;
// console.log(10 !== "10" );
// console.log(10 === "10" );
// console.log(10 != "10" );
/* console.log(Boolean(!rb)); // non logique ! */

// Les switch
let couleur = "yellow";

switch (couleur) {
    case "green":
        console.log("Prix : 19.99");
        break;
    case "red":
        console.log("Prix : 17.99");
        break;
    case "white":
        console.log("Prix : 15.99");
        break;

    default:
        // console.log(`Desolé, nous n'anons pas de ${couleur}.`);
        break;
}


// les boucle

for (let i =0; i <5; i++) {
    // console.log(`${i}`);
    // console.log(i, "tst");
}

let i = 0;
while (i < 10) {
    // console.log(i);
    i++;
}

do {
    // console.log(i, "tst");
    i++;
}
while (i < 10);

// les Tableau ps=> {dictionair en python}

let tableau1 = ["a","b","c","d","e","f","g","h","i","j"];
            // 0/  1/   2/  3/  4/  5/  6/  7/  8/  9/

// console.log(tableau1[3]);
tableau1.push("ajoute element") // ajoute un element au dernier
// console.log(tableau1[tableau1.length -1]);
// console.log(tableau1);
tableau1.pop(); // enleve le dernier element
// console.log(tableau1);
tableau1.shift(); // enleve le premier element
// console.log(tableau1);
tableau1.unshift("a"); // ajoute un elemnt au debut 
// console.log(tableau1);
// console.log(tableau1.indexOf("e")); // retourn l'index d'un element dans le tableau

tableau1.splice(0,2,"z"); // enlev les les element du 0 index(1er parm) a 2 index(2er parm) et ajoute l'elemnt "z"(3er parm)
// console.log(tableau1);

// console.log(tableau1.slice(2,4)); // retourn les elemnt depuis(1er parm)=>index jusqu'a (2er parm)=>non compris

const tableau2 = ["k","l","m","n"];

// tableau1 = tableau1 + tableau2;

tableau2[tableau2.length] = "o";
// console.log(tableau2);

let tableau3 = [];
// console.log(tableau3);

const numTab = [1,2,3];
tableau1.forEach(function(i) {
    // console.log(i);
    tableau3.unshift(i);

})
// console.log(tableau3);
const fruits = ["Fraise","Pomme","Pastèque","Kiwi"];
const resultFilter = fruits.filter(function(fruit) { 
    return fruit.length > 4;
})

// console.log(resultFilter);


const str = "Lorem ipsum dolor sit amet, consectet";
const regex = /[A-Z]/gi;
// console.log(str.match(regex));


// Les Objet

const kitty = {
    race : "Siamois",
    poids : 3,
    couleur : "gris",
    nvObjet : {
        abc : "abc",
        zzz : "zzz",
        nvnvObjet : {
            uuu : "uuu",
            ppp : "ppp"
        }
    }
};
kitty.age = 13;
// console.log(kitty);

delete kitty.age;

// console.log(kitty.nvObjet.nvnvObjet.ppp);


// for in 

let voiture = {
    couleur: 'noire',
    marque: 'peugeot',
    anneer: 2007
}

for (let props in voiture) {
    // console.log(props, voiture[props]);
}

const dFruit = ["fraise", "cerise", "framboise"];

for (let dFruits of dFruit) {
    // console.log(dFruit.indexOf(dFruits), dFruits);
}


voiture = {
    couleur: 'noire',
    marque: 'peugeot',
    annee: 2007,
    myFunction : function (){
        console.log(this.annee);
    }
}
// voiture.myFunction();
// console.log(this);
let nvFunctions = voiture.myFunction.bind(voiture);

// console.log(nvFunctions);

// nvFunctions(); 

const bton = document.querySelector("button");

bton.addEventListener("click", voiture.myFunction.bind(voiture));

// Le spread operator

// const arr = [1,2,3];
// console.log([...arr,4]);

const presonne = {
    nom : 'Tom',
    age : 36
}

const presentation = {
    ...presonne,
    email : 'tom@example'
}

// console.log(presentation);

// Le rest operator

function arr(...nbs) {
    console.log(nbs);
}

// arr(1,2,3,4,5,6,7,8,9,10,11,12)


// const tabNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let tableauPairs = [];
// for (let i = 0; i < tabNumbers.length; i++) {
//     if (tabNumbers[i] % 2 === 0) {
//         tableauPairs.push(tabNumbers[i]);
//     }
// }
// console.log(tableauPairs);


const tabNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const checkPairs = n => n % 2 === 0;
// console.log(checkPairs(4));

let nvDate = new Date();
// console.log(nvDate);

// Les classes

class Voiture {
    constructor(marque, annee, option) {
        this.marque = marque;
        this.annee = annee;
        this.option = option;
    }

    rajoutOption(nomOption) {
        this.option++;
        console.log(`Rajout de ${nomOption}, nombre d'option : ${this.option}`);
        return this;
    }

    dateSortie() {
        console.log(`Date de sortie de cette voiture ${this.annee}`);
    }
}


const voiture1 = new Voiture("Toyota", 2013, 0);
console.log(voiture1);

voiture1.rajoutOption("2 porte")

class Moto extends Voiture {
    dateSortie() {
        console.log(`Date de sortie de cette moto ${this.annee}`);
    }
};

const moto1 = new Moto("suzuki", 2021, 0);
console.log(moto1);
moto1.dateSortie()




