/**
 * Una clase abstracta en Typescript es una clase de la que no se puede crear instancias
 * y que puede contener propiedades o métodos abstractos que deben ser implementados en la
 * subclase (Interface). También puede tener propiedades o métodos que tengan ya una implementación
 * y los cuales serán heredados por la subclase (Herencia). También se puede sobrescribir 
 * los métodos y se pueden marcar con la palabra reservada override. Permite el uso de modificadores
 * de acceso
 */

export abstract class Empleado {

    abstract tipoEmpleado: string;

    constructor ( public nombre: string, public id: number ) {
    }

    public mostrarInformacion(): void {
        console.log(` Nombre: ${this.nombre}, ID: ${this.id} `);
    }

    // Firma de un método - Quien use la clase base debe implementar
    public abstract calcularSalario(): number;

}

