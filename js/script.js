'use strict';

window.addEventListener('DOMContentLoaded', function() {
	const tabs = require('./modules/tabs'),
		  modal = require('./modules/modal'),
		  forms = require('./modules/forms'),
		  cards = require('./modules/cards'),
		  timer = require('./modules/timer'),
		  slider = require('./modules/slider'),
		  calc = require('./modules/calc');

	tabs();
	modal();
	forms();
	cards();
	timer();
	slider();
	calc();
});