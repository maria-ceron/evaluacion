class Usuario {
    nombre: string;
   contraseña: string;

    constructor(nombre: string, contraseña: string) {
        this.nombre = nombre;
        this.contraseña = contraseña;
    }

    login(): string {
        if (!this.nombre || this.contraseña.length < 8) {
            return "Usuario o contraseña incorrectos";
        }
        return "Inicio de sesión exitoso";
    }
}


const usuario1 = new Usuario("diego", "dc290897");
console.log(usuario1.login()); 

const usuario2 = new Usuario("martha", "456789");
console.log(usuario2.login());