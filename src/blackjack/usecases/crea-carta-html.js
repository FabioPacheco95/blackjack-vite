/**
 * @constructor
 * @param {string} carta - carta
 * @returns {HTMLImageElement} ritorna l'immagine della carta
 */
export const creaCartaHTML = (carta) => {

    if(!carta) throw new Error("carta required!");

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/mazzo/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    
    return imgCarta;
}