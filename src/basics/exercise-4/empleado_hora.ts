import { Empleado } from "./empleado";

export class EmpleadoPorHora extends Empleado {

    public static soyPropiedadEstatica: number = 0;

    constructor(
        nombre: string,
        id: number,
        public tipoEmpleado: string,
        public tariFaPorHora: number,
        public horasTrabajadas: number
    ) {
        super(nombre, id);
    }

    public calcularSalario(): number {
        console.log(this.nombre);
        console.log(this.tipoEmpleado);
        return this.tariFaPorHora * this.horasTrabajadas;
    }

    static saludar() {
        console.log('Hola', EmpleadoPorHora.soyPropiedadEstatica);
        console.log('Hola', this.soyPropiedadEstatica);
    }

}

EmpleadoPorHora.saludar();
console.log(EmpleadoPorHora.soyPropiedadEstatica);
