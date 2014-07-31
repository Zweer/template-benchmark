# Node.JS template engines benchmark

## Engines

- [CoffeeKup](https://github.com/mauricemach/coffeekup) v0.3.1 ([website](http://coffeekup.org/))
- [doT](https://github.com/olado/doT) v1.0.1 ([website](http://olado.github.com/doT/))
- [Dust](https://github.com/linkedin/dustjs) v1.2.1 ([website](http://linkedin.github.com/dustjs/))
- [Eco](https://github.com/sstephenson/eco) v1.1.0-rc-3
- [ECT](https://github.com/baryshev/ect) v0.4.8 ([website](http://ectjs.com/))
- [EJS](https://github.com/visionmedia/ejs) v0.8.3
- [Fest](https://github.com/mailru/fest) v0.5.4
- [Gaikan](https://github.com/Deathspike/gaikan) v1.3.4
- [Handlebars.js](https://github.com/wycats/handlebars.js/) v1.0.9 ([website](http://handlebarsjs.com/))
- [Hogan.js](https://github.com/twitter/hogan.js) v2.0.0 ([website](http://twitter.github.com/hogan.js/))
- [Jade](https://github.com/visionmedia/jade) v0.28.1 ([website](http://jade-lang.com/))
- [Swig](https://github.com/paularmstrong/swig) v0.13.5
- [Underscore](https://github.com/documentcloud/underscore) v1.4.4 ([website](http://underscorejs.org/))

(I can't make Gaikan working...pull request accepted!!!)

## Test environment

- CPU: Intel Core i5 750 2.67GHz
- OS: Windows 8
- Node.JS version: 0.11.13

## Results

	Rendering 100000 templates:

	ECT
    Escaped   : 2953ms
    Unescaped : 110ms
    Total     : 3063ms

  Dust
    Escaped   : 4549ms
    Unescaped : 968ms
    Total     : 5517ms

  Hogan.js
    Escaped   : 3626ms
    Unescaped : 429ms
    Total     : 4055ms

  Fest
    Escaped   : 2206ms
    Unescaped : 535ms
    Total     : 2741ms

  EJS without `with`
    Escaped   : 4578ms
    Unescaped : 404ms
    Total     : 4982ms

  doT
    Escaped   : 2412ms
    Unescaped : 60ms
    Total     : 2472ms

  Swig
    Escaped   : 6355ms
    Unescaped : 934ms
    Total     : 7289ms

  Underscore
    Escaped   : 2947ms
    Unescaped : 1800ms
    Total     : 4747ms

  EJS
    Escaped   : 7712ms
    Unescaped : 2158ms
    Total     : 9870ms

  Eco
    Escaped   : 5938ms
    Unescaped : 706ms
    Total     : 6644ms

  Handlebars.js
    Escaped   : 2010ms
    Unescaped : 340ms
    Total     : 2350ms

  Jade without `with`
    Escaped   : 4245ms
    Unescaped : 674ms
    Total     : 4919ms

  CoffeeKup
    Escaped   : 4534ms
    Unescaped : 10446ms
    Total     : 14980ms

  Jade
    Escaped   : 12837ms
    Unescaped : 7171ms
    Total     : 20008ms

View the results in a Fiddle [here](http://jsfiddle.net/zweer/bkwLK/)

## Usage

	git clone git://github.com/Zweer/template-benchmark.git
	cd template-benchmark
	npm install
	node ./benchmark.js
