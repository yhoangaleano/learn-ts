import { Empleado } from "./empleado";

export class EmpleadoPorHora extends Empleado {

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
        return this.tariFaPorHora * this.horasTrabajadas;
    }

}