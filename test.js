import test from 'ava';
import m from './';

test('throws on invalid input', t => {
	t.throws(() => m(''));
	t.throws(() => m('1'));
	t.throws(() => m(NaN));
	t.throws(() => m(true));
	t.throws(() => m(Infinity));
	t.throws(() => m(-Infinity));
	t.throws(() => m(null));
});

test('converts bytes to human readable strings', t => {
	t.is(m(0), '0 B');
	t.is(m(0.4), '0.4 B');
	t.is(m(0.7), '0.7 B');
	t.is(m(10), '10 B');
	t.is(m(10.1), '10.1 B');
	t.is(m(1020), '1020 B');
	t.is(m(1025), '1 kiB');
	t.is(m(1130), '1.1 kiB');
	t.is(m(1e16), '8.88 PiB'); // 8.882 PiB
	t.is(m(1e19), '8.67 EiB'); // 8.674 EiB
	t.is(m(1.209e30), '1000000 YiB');
});

test('supports negative number', t => {
	t.is(m(-0.4), '-0.4 B');
	t.is(m(-0.7), '-0.7 B');
	t.is(m(-10.1), '-10.1 B');
	t.is(m(-1020), '-1020 B');
	t.is(m(-1025), '-1 kiB');
});
