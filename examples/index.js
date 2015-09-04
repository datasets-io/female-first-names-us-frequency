'use strict';

var freqs = require( './../lib/gertrude.json' ),
	i;

console.log( 'Frequencies for the name `Gertrude`' );
for( i = 0; i < freqs.length; i++ ) {
	console.log( 'Year: ' + freqs[ i ][ 0 ] + '; Count: ' + freqs[ i ][ 1 ] );
}
