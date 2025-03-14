class Persona {
    peso: number;
    altura: number;

    constructor(peso: number, altura: number) {
        this.peso = peso;
        this.altura = altura;
    }

    calcularimc(): string {
        const imc = this.peso / (this.altura * this.altura);
        const categorias = [
            { rango: 18.5, categoria: "Bajo peso" },
            { rango: 24.9, categoria: "Normal" },
            { rango: 29.9, categoria: "Sobrepeso" },
            { rango: Infinity, categoria: "Obesidad" },
        ];
        return categorias.find(({ rango }) => imc <= rango)?.categoria || "";
    }
}


const persona1 = new Persona(50, 1.65);
console.log(persona1.calcularimc()); 

const persona2 = new Persona(90, 1.75);
console.log(persona2.calcularimc()); 