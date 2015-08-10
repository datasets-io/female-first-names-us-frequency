/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	table = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'datasets-male-first-names-us-frequency', function tests() {

	it( 'should export an object', function test() {
		expect( table ).to.be.an( 'object' );
	});

	it( 'should map state abbreviations to names', function test() {
		assert.strictEqual( table[ 'Ashley' ][ 1980 ], 7295 );
		assert.strictEqual( table[ 'Ashley' ][ 2000 ], 17995 );
		assert.strictEqual( table[ 'Sarah' ][ 1970 ], 5621 );
		assert.strictEqual( table[ 'Sarah' ][ 1995 ], 21365 );
	});

});
