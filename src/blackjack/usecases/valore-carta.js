/**
 * Calcola il valore della carta
 * @constructor
 * @param {String} carta - carta.
 * @returns {Number} ritorna il valore della carta in numerico
 */
export const valoreCarta = ( carta ) => {

    const valore = carta.substring(0, carta.length - 1);
    return ( isNaN( valore ) ) ? ( valore === 'A' ) ? 11 : 10 : valore * 1;
}