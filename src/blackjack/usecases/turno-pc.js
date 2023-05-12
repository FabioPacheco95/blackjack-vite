import {chiediCarta, creaCartaHTML, valoreCarta} from './'

/**
 * Crea un nuovo mazzo.
 * @constructor
 * @param {Number} puntiMinimi - Punti minimi che il pc ha bisogno per vincere.
 * @param {HTMLElement} puntiHTML - Elemento html per mostrare i punti.
 * @param {HTMLElement} divCartePc - Elemento html per mostrare le carte.
 * @param {Array<string>} mazzo - mazzo
 */
export const turnoPc = ( puntiMinimi, puntiHTML, divCartePc, deck ) => {

    if(!puntiMinimi) throw new Error("Punti minimi required!");
    if(!puntiHTML) throw new Error("elemento html required!");

    let puntiPc = 0;

    do {
        const carta = chiediCarta(deck);

        puntiPc = puntiPc + valoreCarta( carta );
        puntiHTML.innerText = puntiPc;
        
  const imgCarta = creaCartaHTML(carta);
   
        divCartePc.append( imgCarta );

        if( puntiMinimi > 21 ) {
            break;
        }

    } while(  (puntiPc < puntiMinimi)  && (puntiMinimi <= 21 ) );

    setTimeout(() => {
        if( puntiPc === puntiMinimi ) {
            alert('NESSUNO Vince :(');
        } else if ( puntiMinimi > 21 ) {
            alert('PC Vince')
        } else if( puntiPc > 21 ) {
            alert('Giocatore Vince');
        } else {
            alert('PC Vince')
        }
    }, 100 );
}