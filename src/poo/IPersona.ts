export interface IPersona {

    // El readonly solo permite que la propiedad sea inicializada
    // en el constructor. Fuera del constructor solo se puede leer el valor
    // En caso de asignarle un valor fuera del constructor, typescript generaría un error
    readonly nombre: string;
    readonly apellido: string;
    edad: number;

    nombre_completo(): string;

}