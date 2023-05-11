import { Construccion } from "./Construccion";
import { Hombre } from "./Hombre";
import { IPersona } from "./IPersona";
import { Mujer } from "./Mujer";

export class Residencial extends Construccion {

    private _habitantes: Array<IPersona>;

    constructor(pisos: number) {
        super(pisos);
        this._habitantes = [];
    }

    public override impuestos(): number {
        return this.pisos * 1500000;
    }

    public numero_habitantes(): number {
        return this._habitantes.length;
    }

    public agregar_habitante(persona: IPersona): void {
        this._habitantes.push( persona );
    }

    public listar_habitantes(): void {
        this._habitantes.forEach(( persona ) => {

            console.log( persona.nombre_completo() );

            if ( persona instanceof Hombre ) {
                persona.hablar_futbol('Inter', 2);
            } else if( persona instanceof Mujer ) {
                persona.ir_cine( 'Sala 4DX', 'Avatar' );
            }

        });
    }

}