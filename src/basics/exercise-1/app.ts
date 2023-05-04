const teacher = {
    name: 'Yhoan',
    lastName: 'Galeano',
    age: 29
};

console.log('Teacher is json:', teacher);

// Primitivos
// Booleans
// Declaración implícita
const isTeacher = true; // Toma el valor con el cual fue declarado y ese es el tipo
let isPlayer = true; // Tomo el tipo del valor que le fue asignado
isPlayer = false;

// Declaración explicita
const hasErrors: boolean = false;
let isChampion: boolean = false;

let result = hasErrors ? 'Tiene errores' : 'No tiene errores';

// String
const firstName = 'Yhoan';
const lastName = "Galeano";

let fullName: string = `Su nombre es: ${firstName} ${lastName}, bienvenido`;
console.log(fullName.toUpperCase());

// Number
let countStudents: number = 29;
let average: number = 4.5;

console.log(average.toFixed())


// Array
let fruits = ['pera', 'banano'];
let sports: string[] = ['futbol', 'baloncesto'];

type stringOrNull = string | null;

// Union types
let students: Array<stringOrNull> = ['Nico', 'Yhoan', null, 'Rayffer', null, 'Ana'];
console.log(students.filter((student) => student !== null));

// Tuplas
let exampleTuple: [string, null] = ['hola', null];

// Tipos personalizados
type statusCode = 'active' | 'inactive';

let studentStatus: statusCode = 'inactive';

// Any
let working: any = 25;
working = 'hola';

// Funciones
/**
 * function nombreFuncion(parametro: tipoDato): tipoDatoQueRetornaLaFuncion { }
 */
function validateValue(value: unknown): boolean {

    // unknown que es un tipo de dato que es desconocido
    // para cualquier validación que deba hacer con el dato
    // debo primero saber o validar que tipo de dato es
    if (typeof value === 'string') {
        console.log(value.trim().toUpperCase());
    } else if (typeof value === 'number') {
        console.log(value.toFixed());
    }

    if (value === '') {
        return false;
    } else {
        return true;
    }

}

function getFullName(firstName: string, lastName: string): string {

    return `${firstName} ${lastName}`;

}

// Void
function processResponse( saved: boolean ): void {

    if (saved) {
        console.log('Guardado');
    } else {
        console.log('Ocurrió un error');
    }

}


console.log( getFullName(firstName, lastName)  );
processResponse(true);


enum Role {
    Admin,
    Client,
    Users,
    SuperAdmin
}

let users: Array< { name: string, role: Role } > = [
    {
        name: 'Pepito',
        role: Role.Admin
    },
    {
        name: 'Juanito',
        role: Role.Client
    },
    {
        name: 'Fulanito',
        role: Role.Client
    }
]

console.log( users.filter( (user) => user.role === Role.Client  ) );
