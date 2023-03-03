/**
 * @class Person
 * Contiene los datos del formulario para registrar una persona
 */
export class Usuario {

    constructor(
        public nombre: string,
        public email: string,
        public password: string,
        public confirmPassword: string
    )   {  }

}