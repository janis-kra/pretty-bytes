'use strict';
const UNITS = ['B', 'kiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];

module.exports = num => {
	if (!Number.isFinite(num)) {
		throw new TypeError(`Expected a finite number, got ${typeof num}: ${num}`);
	}

	const neg = num < 0;

	if (neg) {
		num = -num;
	}

	if (num < 1) {
		return (neg ? '-' : '') + num + ' B';
	}

	const exponent = Math.min(Math.floor(Math.log(num) / Math.log(1024)), UNITS.length - 1);

	const numStr = Number((num / Math.pow(1024, exponent)).toPrecision(3));

	const unit = UNITS[exponent];

	return (neg ? '-' : '') + numStr + ' ' + unit;
};
