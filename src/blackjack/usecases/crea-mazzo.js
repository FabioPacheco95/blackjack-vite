import _ from 'underscore';

/**
 * Crea un nuovo mazzo.
 * @constructor
 * @param {Array<string>} tipiDiCarte - I semi delle carte: cuori, quadri, picche e fiori).
 * @param {Array<string>} tipiSpeciali - Le tre figure delle carte: asso, fante, regina e re.
 * @returns {Array<string>} ritorna un nuovo mazzo
 */
export const creaMazzo = (tipiDiCarte,tipiSpeciali) => {

    if(!tipiDiCarte || tipiDiCarte.length === 0) throw new Error("tipi di carte required!");
    if(!tipiSpeciali || tipiSpeciali.length === 0) throw new Error("tipi di carte speciali required!");

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tipiDiCarte ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tipiDiCarte ) {
        for( let spec of tipiSpeciali ) {
            deck.push( spec + tipo);
        }
    }

    deck = _.shuffle( deck );

    return deck;
}