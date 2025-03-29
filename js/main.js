// Iteration 1: Names and Input

let hacker1= `Antonio`;
console.log(`El nomnbre del conductor es ${hacker1}`);

let hacker2= "Maria";
console.log(`El nombre del navegante es ${hacker1}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log("El conductor tiene el nombre mas largo, tiene " + hacker1.length + "caracteres.");
} else if (hacker1.length < hacker2.length) {
    console.log("Parece que el navegante tiene el nombre mas largo, tiene " + hacker2.length + "caracteres." )
} else {
    console.log("Vaya, ambos tienen nombres igual de largos, " + hacker1.length + "caracteres.")
}


// Iteration 3: Loops
// 3.1 Imprime todos los caracteres del nombre del conductor, separados por un espacio y en mayúsculas,
let spacedUpperName = hacker1.toUpperCase().split("").join(" ");
console.log(spacedUpperName);

// 3.2 Imprima todos los caracteres del nombre del navegador, en orden inverso.es decir, " nhoJ"
let reversedNavegador = hacker2.split("").reverse().join("");
console.log(reversedNavegador);

/*3.3 Según el orden lexicográfico de las cadenas, imprime:

El nombre del conductor va primero.
Yo, el navegador va primero definitivamente.
¿Qué? ¿Los dos tienen el mismo nombre?*/

let minLength = Math.min(hacker1.length, hacker2.length);
let result = "¿Qué? ¿Los dos tienen el mismo nombre?";

for (let i = 0; i < minLength; i++) {
    if (hacker1[i] < hacker2[i]) {
        result = "El nombre del conductor va primero.";
        break;
    } else if (hacker1[i] > hacker2[i]) {
        result = "Yo, el navegador va primero definitivamente.";
        break;
    }
}
console.log(result);

//Bono 1: 
//Generar 3 párrafos. Guarda el texto en una variable de tipo cadena.
let lorem= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent iaculis odio a tempus laoreet. Pellentesque scelerisque nisi volutpat cursus rutrum. Nunc eu semper nibh, id commodo quam. Vestibulum tempor turpis id mauris blandit vehicula. Aliquam pulvinar venenatis ligula tempor molestie. Vivamus venenatis purus ut urna commodo, ullamcorper commodo sapien consectetur. Donec vehicula nisi id aliquet tristique.Pellentesque in risus blandit, accumsan neque vel, cursus erat. Vestibulum dignissim iaculis nisl, id porttitor dolor finibus ac. Nullam gravida tincidunt nibh, sit amet lacinia sapien sagittis sed. Sed ac suscipit est, at finibus elit. Donec posuere ultricies mi. Nam turpis ligula, lobortis non venenatis vel, varius non ex. Proin eu elementum risus. Cras ut tellus vehicula metus varius scelerisque et tempor sapien. Integer id orci ut tellus hendrerit egestas. Curabitur euismod at nisl in consequat. Pellentesque mollis libero nec magna euismod, at feugiat diam iaculis. Proin euismod lectus erat, in fermentum turpis faucibus non. Nam quis eleifend lorem. Integer tristique interdum diam, et consequat nulla scelerisque sit amet.Donec aliquet dui id leo faucibus, ac venenatis ante pellentesque. Quisque non erat cursus turpis tincidunt interdum. Integer et viverra nisi. Donec vel augue mollis, dignissim ex ut, pharetra odio. Aliquam erat volutpat. Vivamus feugiat elementum ligula in facilisis. Duis diam orci, aliquet sed eros a, viverra scelerisque lectus. Quisque lacinia aliquam scelerisque. Aenean porta, ipsum quis elementum aliquam, elit quam semper libero, vitae commodo sapien ante vel odio."

// 2. Contar el número de palabras en la cadena
let wordCount = lorem.split(" ").length;
console.log("Número total de palabras:", wordCount);


// 3. Contar cuántas veces aparece la palabra "et".
let etCount = lorem.split(" et ").length - 1;
console.log("Número de veces que aparece 'et':", etCount);


//Bono 2: 
let phraseToCheck = "Ateo poco poeta"; 

// Convertir la frase en minúsculas y eliminamos espacios
let cleanedPhrase = "";
for (let i = 0; i < phraseToCheck.length; i++) {
    if (phraseToCheck[i] === " ") {
        continue; // Ignora los espacios y sigue con el siguiente carácter
    }
    cleanedPhrase += phraseToCheck[i].toLowerCase();
}

let isPalindrome = true;
for (let i = 0; i < cleanedPhrase.length; i++) {
    if (cleanedPhrase[i] !== cleanedPhrase[cleanedPhrase.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log(phraseToCheck + " es un palíndromo.");
} else {
    console.log(phraseToCheck + " no es un palíndromo.");
}
