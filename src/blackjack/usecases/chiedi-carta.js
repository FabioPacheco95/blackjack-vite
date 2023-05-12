/**
 * Crea un nuovo mazzo.
 * @constructor
 * @param {Array<string>} mazzo - mazzo
 * @returns {String} ritorna una carta
 */
export const chiediCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'Non ci sono Carte!';
    }
    const carta = deck.pop();
    return carta;
}