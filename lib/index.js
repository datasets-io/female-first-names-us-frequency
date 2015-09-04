'use strict';

// MODULES //

var fs = require( 'fs' ),
		path = require( 'path' );


// EXPORTS //

var dataset = {},
		files = fs.readdirSync( __dirname ),
		len = files.length,
		name,
		ext,
		f, i;

for ( i = 0; i < len; i++ ) {
		f = files[ i ];
		ext = f.substring( f.length-5 );
		if ( ext === '.json' ) {
				name = f.substring( 0, f.length-5 );
				dataset[ name ] = require( path.join( __dirname, f ) );
		}
}

module.exports = dataset;
