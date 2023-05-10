import { IPersona } from './IPersona';

export class Hombre implements IPersona {
    
    public readonly nombre: string;
    public readonly apellido: string;
    public edad!: number;

    constructor(nombre?: string, apellido?: string) {
        this.nombre = nombre ?? '';
        this.apellido = apellido ?? '';
    }

    public nombre_completo(): string {
        return `${this.nombre} ${this.apellido}`;
    }

    public hablar_futbol( equipo: string, minutos: number) : void {
        console.log(`Hablemos sobre el: ${equipo} ${minutos} minutos, pues está jugando como los dioses`);
    }
}