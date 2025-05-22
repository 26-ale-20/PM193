function verificarUsuario(usuario) {
    
}

verificarUsuario("admin")
.then(res => console.log(res))
.catch(err => console.error(err));//acceso concedido

verificarUsuario("Ivan")
.then(res => console.log(res))
.catch(err => console.error(err));//acceso denegado
