import { Empleado } from "./empleado";
import { TipoEmpleado } from "./tipo_empleado.enum";

export class EmpleadoTiempoCompleto extends Empleado {
    public tipoEmpleado: string;

    constructor ( nombre: string, id: number, public salarioMensual: number ) {
        super( nombre, id  );
        this.tipoEmpleado = TipoEmpleado.TIEMPO_COMPLETO;
    }

    public calcularSalario(): number {
       return this.salarioMensual;
    }

}