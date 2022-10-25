
// let primerNota= prompt("Ingrese la 1er nota: ");

// console.log(primerNota);

// let segundaNota= prompt("Ingrese la 2da nota: ");

// console.log(segundaNota);

// const pedirNota = () => {
//     let nota= prompt("Ingrese su nota: ");
//     console.log(nota);
// }

// for(let i = 1; i <= 3; i = i + 1){
//     pedirNota()
// } 



// const restar = (a, b) => {
//     return a - b;
// }

// let cantidadNotas= prompt("Ingrese la cantidad de notas: ");

// const pedirNota = () => {
//      let nota= prompt("Ingrese su nota: ");
//      console.log(nota);
// }

// for(let i = 1; i <= cantidadNotas; i = i + 1){
//     pedirNota()
// } 


const resolverPromedio = () => {
    let notaFinal= 0
    let cantidadNotas = parseFloat(prompt("Ingrese la cantidad de notas: "))

    for(let i = 1; i <= cantidadNotas; i++){
        let nota= parseFloat(prompt("Ingrese su nota: "))
        notaFinal = notaFinal + nota
    }

    let notaPromediada= notaFinal / cantidadNotas

    console.log(notaFinal);

    console.log(notaPromediada);
}

alert("Bienvenido a la calculadora para averiguar tu promedio!");

resolverPromedio()


let decision = prompt("toque ESC si quiere terminar el proceso")

while(decision != "ESC"){
    resolverPromedio()
    decision = prompt("toque ESC si quiere terminar el proceso")
}

if (decision == "ESC"){
    alert("Se ha acabado el proceso")
}


