// Código del cuadrado
console.group("Cuadrados");
function perimetroCuadrado(lado) {
    return lado + lado + lado + lado;
} 

function areaCuadrado(lado) {
    return lado * lado;
} 
console.groupEnd();

// Código del triángulo
console.group("Triángulos");
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.groupEnd();

// Código del círculo
console.group("Círculos");

// Diámetro y el radio lo pedimos simplemente en las demás funciones
function diametroCirculo(radio) {
    return radio * 2;
}
// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 

// Área
function areaCirculo(radio) {
    return (radio * radio) * PI
}
console.groupEnd() 


// Aquí interactuamos con HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = parseInt(input.value);

    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado")
    const value = input.value;

    
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const inputBase = document.getElementById("InputBase")
    const valueBase = parseInt(inputBase.value);

    const inputLadoUno = document.getElementById("InputPrimerLado")
    const valueLadoUno = parseInt(inputLadoUno.value);

    const inputLadoDos = document.getElementById("InputSegundoLado")
    const valueLadoDos = parseInt(inputLadoDos.value);

    const perimetro = perimetroTriangulo(valueBase, valueLadoUno, valueLadoDos);
    alert(perimetro);
}

function calcularAreaTriangulo() {

    const inputBase = document.getElementById("InputBase")
    const valueBase = (inputBase.value);

    const inputAltura = document.getElementById("InputAltura")
    const valueAltura = (inputAltura.value);

    const area = areaTriangulo(valueBase, valueAltura);
    alert(area);

}

function calcularPerimetroCirculo() {
    const inputRadio = document.getElementById("InputRadio")
    const valueRadio = (inputRadio.value);

    const perimetro = perimetroCirculo(valueRadio);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const inputRadio = document.getElementById("InputRadio")
    const valueRadio = parseInt(inputRadio.value);

    const area = areaCirculo(valueRadio);
    alert(area);
}




