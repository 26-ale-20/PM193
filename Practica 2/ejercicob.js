const productos = [ 
    {nombre: "Laptop", precio: 12000 },
    {nombre: "Mouse", precio: 250 },
    {nombre: "Teclado", precio: 750 },
    {nombre: "Monitor", precio: 3000 }
];
// los productos que valen mas de 1000
let alto = productos.filter (p = p.precio >=1000);

//filtro
console.log(alto);

