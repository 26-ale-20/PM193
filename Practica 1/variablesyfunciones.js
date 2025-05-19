        //EJERCICIO 1 (a)
        let nombre = "Juan";
        let edad = "25";

        nombre = "Veronica Alejandra";
        edad = "21";

        const saludo = "Hola, " + nombre + "Tienes " + edad + "años"
        console.log(saludo);


        //EJERCICO 2 

        const cuadrado = (numero) => numero * numero;

        console.log(cuadrado(2));
        console.log(cuadrado(8));
        console.log(cuadrado(10));

        //EJERCICIO 3 

        const saludoPersonal = (nombre, edad) => {
                return 'Hola,me llamo ${nombre} y tengo ${edad} años.';
        };

        console.log(saludoPersonal("Veronica Alejandra", 23))
