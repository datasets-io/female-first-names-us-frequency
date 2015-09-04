/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	table = require( './../lib' ),
	isArrayArray = require( 'validate.io-array-array' );

// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'datasets-male-first-names-us-frequency', function tests() {

	it( 'should export an object', function test() {
		expect( table ).to.be.an( 'object' );
	});

	it( 'should retrieve an array-of-arrays for a given name', function test() {
		assert.isTrue( isArrayArray( table[ 'ashley' ] ) );
		assert.isTrue( isArrayArray( table[ 'sarah' ] ) );
	});

});
