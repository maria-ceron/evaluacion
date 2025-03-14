class Ciudad {
    ciudad: string;
    temperatura: number;

    constructor(ciudad: string, temperatura: number) {
        this.ciudad = ciudad;
        this.temperatura = temperatura;
    }
}

class Analizartemperatura {
    datos: Ciudad[];

    constructor(datos: Ciudad[]) {
        this.datos = datos;
    }

    analizar(): { ciudadmascaliente: string; ciudadmasfria: string; promedio: number } | string {
        if (this.datos.length === 0) return "No hay datos disponibles";

        const ciudadmascaliente = this.datos.reduce((max, actual) => (actual.temperatura > max.temperatura ? actual : max));
        const ciudadmasfria = this.datos.reduce((min, actual) => (actual.temperatura < min.temperatura ? actual : min));
        const promedio = Math.round(this.datos.reduce((acc, actual) => acc + actual.temperatura, 0) / this.datos.length);

        return {
            ciudadmascaliente: ciudadmascaliente.ciudad,
            ciudadmasfria: ciudadmasfria.ciudad,
            promedio: promedio
        };
    }
}

const ciudades = [
    new Ciudad("Bogotá", 18),
    new Ciudad("Cali", 30),
    new Ciudad("Medellín", 24),
    new Ciudad("Popayán", 25),
    new Ciudad("Quindío", 20),
    new Ciudad("Valledupar", 44)
];

const analizador = new Analizartemperatura(ciudades);
console.log(analizador.analizar());
