const personas = [
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "Maria", edad: 28 }
];

//find para buscar a la persona llamada Luis
const buscarnombre = personas.find (p => p.nombre === "Luis");

//validamos el find
console.log("Persona");
console.log(buscarnombre);

//imprime el nombre de las personas con su respectiva edad 
personas.forEach((datos) => console.log("Nombre: ", datos.nombre, "Edad: ", datos.edad));

const sumaEdad = personas.reduce((acumulador, persona) => {
    return acumulador + persona.edad;

}, 0)

console.log(sumaEdad);
