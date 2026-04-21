import { expect } from 'chai';

/**
 * Función de utilidad para reducir un número a un solo dígito (Esencia de la Numerología)
 * Mantiene los números maestros 11, 22 y 33 sin reducir.
 */
function reducirNumero(num) {
    if (num === 11 || num === 22 || num === 33) return num;
    
    while (num > 9) {
        num = num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        if (num === 11 || num === 22 || num === 33) break;
    }
    return num;
}

/**
 * Función para calcular el Número del Destino (Ruta de Vida) a partir de una fecha
 */
function calcularDestino(fechaStr) {
    const suma = fechaStr.replace(/-/g, '').split('').reduce((acc, n) => acc + parseInt(n), 0);
    return reducirNumero(suma);
}

describe('Pruebas de Cálculo Numerológico (Mocha)', () => {
    
    describe('Reducción de Números', () => {
        it('Debe reducir 15 a 6 (1+5)', () => {
            expect(reducirNumero(15)).to.equal(6);
        });

        it('Debe reducir 19 a 1 (1+9=10 -> 1+0=1)', () => {
            expect(reducirNumero(19)).to.equal(1);
        });

        it('Debe respetar el número maestro 11', () => {
            expect(reducirNumero(11)).to.equal(11);
        });
    });

    describe('Cálculo de Destino (Fecha de Nacimiento)', () => {
        it('Debe calcular correctamente para 1990-05-15 (Suma: 30 -> 3)', () => {
            expect(calcularDestino('1990-05-15')).to.equal(3);
        });

        it('Debe calcular correctamente para 2000-01-08 (Suma: 11)', () => {
            expect(calcularDestino('2000-01-08')).to.equal(11);
        });
    });
});
