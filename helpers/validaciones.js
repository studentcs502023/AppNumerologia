/**
 * Valida el formato de las credenciales de login
 * @param {string} email 
 * @param {string} password 
 * @returns {object} { valido: boolean, msg?: string }
 */
export function validarFormatoLogin(email, password) {
    if (!email || !email.includes('@')) {
        return { valido: false, msg: 'ERROR_GENERAL_INESPERADO' };
    }
    if (!password || password.length < 6) {
        return { valido: false, msg: 'Contraseña demasiado corta' };
    }
    return { valido: true };
}
