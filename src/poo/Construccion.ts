export abstract class Construccion {

    public static cantidad_edificios: number = 0;

    constructor(private _pisos: number) {
        Construccion.cantidad_edificios += 1;
    }

    public impuestos(): number {
        return this._pisos * 3000000;
    }

    get pisos(): number {
        return this._pisos;
    }

    set pisos( pisos: number ) {
        this._pisos = pisos;
    }

    public static edificios_contador(): number {
        return Construccion.cantidad_edificios;
    }

}