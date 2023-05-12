import _ from 'underscore';

import {chiediCarta, creaMazzo, valoreCarta, turnoPc, creaCartaHTML} from './usecases'

/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

let deck = [];
const tipiCarte = ['C','D','H','S'];
const carteSpeciali = ['A','J','Q','K'];

let puntiGiocatore = 0,
puntiPc = 0;

// References HTML
const btnChiedi   = document.querySelector('#btnChiedi');
const btnFerma = document.querySelector('#btnFerma');
const btnNuovo   = document.querySelector('#btnNuovo');

const divCarteGiocatore     = document.querySelector('#giocatore-carta');
const divCartePc = document.querySelector('#pc-carta');

const puntiHTML = document.querySelectorAll('small');

// Creazione nuovo mazzo
deck = creaMazzo(tipiCarte,carteSpeciali);


// Eventi
btnChiedi.addEventListener('click', () => {

    const carta = chiediCarta(deck);
    
    puntiGiocatore = puntiGiocatore + valoreCarta( carta );
    puntiHTML[0].innerText = puntiGiocatore;
    
    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = creaCartaHTML(carta)
    divCarteGiocatore.append( imgCarta );

    if ( puntiGiocatore > 21 ) {
        console.warn('Lo siento mucho, perdiste');
        btnChiedi.disabled   = true;
        btnFerma.disabled = true;
        turnoPc( puntiGiocatore, puntiHTML[1], divCartePc, deck );

    } else if ( puntiGiocatore === 21 ) {
        console.warn('21, genial!');
        btnChiedi.disabled   = true;
        btnFerma.disabled = true;
        turnoPc( puntiGiocatore, puntiHTML[1], divCartePc, deck );
    }

});


btnFerma.addEventListener('click', () => {
  btnChiedi.disabled   = true;
  btnFerma.disabled = true;

  turnoPc( puntiGiocatore, puntiHTML[1], divCartePc, deck );
});

btnNuovo.addEventListener('click', () => {

    // console.clear();
    deck = [];
    deck = creaMazzo(tipiCarte,carteSpeciali);

    puntiGiocatore     = 0;
    puntiPc = 0;
    
    puntiHTML[0].innerText = 0;
    puntiHTML[1].innerText = 0;

    divCartePc.innerHTML = '';
    divCarteGiocatore.innerHTML = '';

    btnChiedi.disabled   = false;
    btnFerma.disabled = false;

});
