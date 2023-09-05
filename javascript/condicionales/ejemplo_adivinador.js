const winner = Math.floor(Math.random() * 10) + 1; // (0 al 9) + 1

alert('Escriba su número del 1 al 10 para ganar el premio')
let myNumber = prompt("Ingresar el número...");
if (myNumber == winner) {
    alert("Has acertado el número: " + winner);
}else{
    alert("No has acertado el número!, Salió el " + winner);
}