const persona = { 
    nombre: "Veronica Alejandra" ,
    edad: 21,
    direccion: {
        ciudad: "Qro",
        pais: "MX"
    }
};

// Destructuracion aqui 
const personadatos = {nombre, edad, direccion: {ciudad}} = persona;

console.log(nombre, edad, ciudad);
console.log('Hola, me llamo ' + nombre + " y tengo " + edad + " años y vivo en " + ciudad + ".");
