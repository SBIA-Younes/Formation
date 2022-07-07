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
    console.log(i);
    i++;
}

do {
    console.log(i, "tst");
    i++;
}
while (i < 10);



