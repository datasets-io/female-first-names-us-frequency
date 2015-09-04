Frequencies of Female First Names
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Data on the historical frequency of female first names in the population of U.S. births.


## Installation

``` bash
$ npm install datasets-female-first-names-us-frequency
```


## Usage

``` javascript
var data = require( 'datasets-female-first-names-us-frequency' );
```

#### data

A data [`object`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) with keys corresponding to all the names given to *female* children born in the United States in the period from `1880-2014`. All names are in lower-case letters. For each name, an [`array-of-arrays`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) is exported with birth frequencies for each year. For a given name and year, no data is available if less *five* children with said name were born in that year.

``` javascript
// Retrieve data for the name "Ashley"
data.ashley
/*
	[
		[ 1917, 5 ],
		[ 1938, 7 ],
		[ 1941, 6 ],
		(...),
		[ 2012, 4691 ],
		[ 2013, 3930 ],
		[ 2014, 3539 ]
	]
*/
```

### Reference

The original data was collected by the [Social Security Administration](http://www.ssa.gov/oact/babynames/) and is based on Social Security card applications for births that occurred in the United States after 1879. Since this data is based on government documents, it should be considered public domain.

## Examples

``` javascript
// Frequencies for the name `Gertrude`
var freqs,
 	i;

freqs = require('datasets-female-first-names-us-frequency/lib/gertrude.json' );

for( i = 0; i < freqs.length; i++ ) {
	console.log( 'Year: ' + freqs[ i ][ 0 ] + '; Count: ' + freqs[ i ][ 1 ] );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/datasets-female-first-names-us-frequency.svg
[npm-url]: https://npmjs.org/package/datasets-female-first-names-us-frequency

[travis-image]: http://img.shields.io/travis/datasets-io/female-first-names-us-frequency/master.svg
[travis-url]: https://travis-ci.org/datasets-io/female-first-names-us-frequency

[codecov-image]: https://img.shields.io/codecov/c/github/datasets-io/female-first-names-us-frequency/master.svg
[codecov-url]: https://codecov.io/github/datasets-io/female-first-names-us-frequency?branch=master

[dependencies-image]: http://img.shields.io/david/datasets-io/female-first-names-us-frequency.svg
[dependencies-url]: https://david-dm.org/datasets-io/female-first-names-us-frequency

[dev-dependencies-image]: http://img.shields.io/david/dev/datasets-io/female-first-names-us-frequency.svg
[dev-dependencies-url]: https://david-dm.org/dev/datasets-io/female-first-names-us-frequency

[github-issues-image]: http://img.shields.io/github/issues/datasets-io/female-first-names-us-frequency.svg
[github-issues-url]: https://github.com/datasets-io/female-first-names-us-frequency/issues
