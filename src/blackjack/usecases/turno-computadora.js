import { pedirCarta , valorCarta, crearCartaHTML } from './'

// turno de la computadora
/**
 * 
 * @param {Numbre} puntosMinimos  puntos minimos que la pc necesita para garnar
* @param {hTMLElement } elemento html para mostrar los pundos. 
* @param {divCartasComputadora } elemento DivCartas 
* @param {Array <String>} deck 
 */
export const turnoComputadora = ( puntosMinimos , puntosHTML , divCartasComputadora ,deck = [] ) => {
    if ( !puntosMinimos)    throw  new Error('Puntos Minimos son necesarios');
    if ( !puntosHTML)    throw  new Error('Argumento puntos HTML es necesario');
     
    let puntosComputadora = 0 ;
    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        const imgCarta = crearCartaHTML( carta );
        
        
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
