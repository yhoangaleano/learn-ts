// Interface: me sirve para generar la estructura de un objeto o definir un contrato para una clase.
enum Rol {
    Junior,
    Middle,
    Senior
}

enum TipoContrato {
    Indefinido,
    TerminoFijo
}

// Definir un contrato para una clase.
interface IContrato {

    // Propiedades opcionales - No es obligatorio que quien implemente escriba estas propiedades
    salario?: number;
    fechaInicio?: Date;

    // Propiedades obligatorias - Deben escribirse en la implementación
    rol: Rol;

    // Solo se crea la firma de los métodos, quien implemente debe definir
    // su funcionalidad
    // Métodos opcionales
    cancelar?(): void;

    // Métodos obligatorios
    pagar(): number;
    suspender(cantidad: number): void;

}

interface IClausula {
    cumplirObjetivos(): boolean;
}

// Entre interfaces solo se puede hacer herencia
interface IClausulaJunior extends IClausula {
    levanteManoATiempo(): boolean;
}

interface IClausulaMedium extends IClausula {
    apoyarProcesosCriticos(): boolean;
}

interface IClausulaSenior extends IClausula {
    apoyarFormacion(): boolean;
}

class ContratoUltraCredit implements IContrato {

    // Atributos que debo tener de la interface ContratoJunior
    rol: Rol;
    salario?: number;

    // Atributos propios
    tipoContrato: TipoContrato;

    constructor() {
        this.tipoContrato = TipoContrato.Indefinido;
        this.rol = Rol.Junior;
    }

    pagar(): number {
        return 1000000;
    }

    suspender(cantidad: number): void {
        console.log(`Estas suspendido ${cantidad} días.`);
        console.log('Información del contrato');
        // ?? Nullish coalescing operator - Valida que la expresión de la izquierda sea diferente
        // de null o undefined. Si es null o undefined devolverá la expresión de la derecha,
        // de lo contrario retorna el valor de la expresión de la izquierda
        console.log(`Tu salario es: ${this.salario ?? 1000}`);
        // Validando null, undefined, 0, false, '', NaN
        console.log(`Tu salario es: ${this.salario ? this.salario : 1000}`);
    }

}

// Multiples implementaciones
class ContratoGlobal implements IContrato, IClausulaJunior, IClausulaMedium, IClausulaSenior {

    salario?: number;
    fechaInicio?: Date;
    rol: Rol;

    constructor() {
        this.rol = Rol.Middle;
    }
    levanteManoATiempo(): boolean {
        throw new Error("Method not implemented.");
    }
    apoyarProcesosCriticos(): boolean {
        throw new Error("Method not implemented.");
    }
    apoyarFormacion(): boolean {
        throw new Error("Method not implemented.");
    }
    cumplirObjetivos(): boolean {
        throw new Error("Method not implemented.");
    }


    cancelar?(): void {
        console.log('Contrato cancelado');
    }

    pagar(): number {
        return 2000000;
    }

    suspender(cantidad: number): void {
        console.log(`Estas suspendido por: ${cantidad} meses`);
    }

}

// Son dos objetos de diferentes clases (implementaciones) pero de la misma interface
// Polimorfismo por Interface
const contratoJuan: IContrato = new ContratoGlobal();
const contratoJuana: IContrato = new ContratoUltraCredit();

const listaContratos = [contratoJuan, contratoJuana];

listaContratos.forEach((contrato: IContrato) => {

    console.log('==============================');
    contrato.suspender(3);
    console.log(typeof contrato);

    if (contrato instanceof ContratoUltraCredit) {
        console.log(contrato.tipoContrato);
    } else if (contrato instanceof ContratoGlobal) {
        contrato.cancelar!();
    }

    console.log('==============================');

});