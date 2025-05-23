function verificarUsuario(usuario) {
    return new Promise((resolve, reject) => {
        if (usuario === "admin") {
            resolve("Acceso concedido");
        } else {
            reject("Acceso dengado");
        }
    });
    
}

verificarUsuario("admin")
.then(res => console.log(res))
.catch(err => console.error(err));//acceso concedido

verificarUsuario("Ivan")
.then(res => console.log(res))
.catch(err => console.error(err));//acceso denegado
