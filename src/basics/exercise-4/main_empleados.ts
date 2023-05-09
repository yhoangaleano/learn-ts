import { Empleado } from "./empleado";
import { EmpleadoPorHora } from "./empleado_hora";
import { EmpleadoTiempoCompleto } from "./empleado_tiempo_completo";
import { TipoEmpleado } from "./tipo_empleado.enum";

const empleadoTiempoCompleto: Empleado = new EmpleadoTiempoCompleto( 
    'Yhoan Galeano',
    123,
    1500000 
);
empleadoTiempoCompleto.mostrarInformacion();
console.log(`Salario: ${empleadoTiempoCompleto.calcularSalario()}`);

if (empleadoTiempoCompleto instanceof EmpleadoTiempoCompleto) {

    console.log(empleadoTiempoCompleto.salarioMensual);
    
}

// Cast
console.log(
    'Cast 1', ( empleadoTiempoCompleto as EmpleadoTiempoCompleto ).salarioMensual
);

console.log(
    'Cast 2', (<EmpleadoTiempoCompleto>empleadoTiempoCompleto).salarioMensual
);



console.log("===================================================");

const empleadoPorHora = new EmpleadoPorHora(
    'Juanita Perez',
    456,
    TipoEmpleado.POR_HORA,
    200000,
    5
);
empleadoPorHora.mostrarInformacion();
console.log(`Salario: ${empleadoPorHora.calcularSalario()}`);
console.log( empleadoPorHora.horasTrabajadas );
console.log( empleadoPorHora.tariFaPorHora );


const empleados = [ empleadoTiempoCompleto, empleadoPorHora ];