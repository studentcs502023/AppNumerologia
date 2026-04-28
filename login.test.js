import { expect } from 'chai';
import { validarFormatoLogin } from './helpers/validaciones.js';

describe('Pruebas de Login (Mocha) - Realistas', () => {

    describe('Validación de Formatos con Helper', () => {
        
        it('Debe fallar si el email no contiene @', () => {
            // const resultado = validarFormatoLogin('email-sin-arroba', '123456');
            expect(resultado.valido).to.be.false;
expect(resultado.msg).to.equal('Este mensaje va a fallar');
            // expect(resultado.msg).to.equal('Email inválido');
        });

        it('Debe fallar si la contraseña tiene menos de 6 caracteres', () => {
            const resultado = validarFormatoLogin('test@test.com', '12345');
            expect(resultado.valido).to.be.false;
            expect(resultado.msg).to.equal('Contraseña demasiado corta');
        });

        it('Debe pasar con datos correctos', () => {
            const resultado = validarFormatoLogin('usuario@correo.com', 'password123');
            expect(resultado.valido).to.be.true;
        });
    });

    describe('Estructura de Respuesta Mock', () => {
        it('El objeto de respuesta debe tener los campos correctos', () => {
            const mockUserResponse = {
                id: '123',
                nombre: 'Admin',
                rol: 'ADMIN_ROLE'
            };
            expect(mockUserResponse).to.have.property('id');
            expect(mockUserResponse).to.have.property('rol');
        });
    });
});
