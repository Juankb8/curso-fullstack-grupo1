
//función
function cubo(valor) {
    return valor * valor * valor;
}

//de flechas
const cuadrado = (number) => {
    return number * number;
}

//recursivo
function factorial(num) {
    if (num < 0)
        return -1;
    else if (num == 0)
        return 1;
    else {
        return (num * factorial(num - 1));
    }
}