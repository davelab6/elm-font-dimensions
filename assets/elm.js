
(function() {
'use strict';

function F2(fun)
{
  function wrapper(a) { return function(b) { return fun(a,b); }; }
  wrapper.arity = 2;
  wrapper.func = fun;
  return wrapper;
}

function F3(fun)
{
  function wrapper(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  }
  wrapper.arity = 3;
  wrapper.func = fun;
  return wrapper;
}

function F4(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  }
  wrapper.arity = 4;
  wrapper.func = fun;
  return wrapper;
}

function F5(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  }
  wrapper.arity = 5;
  wrapper.func = fun;
  return wrapper;
}

function F6(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  }
  wrapper.arity = 6;
  wrapper.func = fun;
  return wrapper;
}

function F7(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  }
  wrapper.arity = 7;
  wrapper.func = fun;
  return wrapper;
}

function F8(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  }
  wrapper.arity = 8;
  wrapper.func = fun;
  return wrapper;
}

function F9(fun)
{
  function wrapper(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  }
  wrapper.arity = 9;
  wrapper.func = fun;
  return wrapper;
}

function A2(fun, a, b)
{
  return fun.arity === 2
    ? fun.func(a, b)
    : fun(a)(b);
}
function A3(fun, a, b, c)
{
  return fun.arity === 3
    ? fun.func(a, b, c)
    : fun(a)(b)(c);
}
function A4(fun, a, b, c, d)
{
  return fun.arity === 4
    ? fun.func(a, b, c, d)
    : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e)
{
  return fun.arity === 5
    ? fun.func(a, b, c, d, e)
    : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f)
{
  return fun.arity === 6
    ? fun.func(a, b, c, d, e, f)
    : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g)
{
  return fun.arity === 7
    ? fun.func(a, b, c, d, e, f, g)
    : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h)
{
  return fun.arity === 8
    ? fun.func(a, b, c, d, e, f, g, h)
    : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i)
{
  return fun.arity === 9
    ? fun.func(a, b, c, d, e, f, g, h, i)
    : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

//import Native.Utils //

var _elm_lang$core$Native_Basics = function() {

function div(a, b)
{
	return (a / b) | 0;
}
function rem(a, b)
{
	return a % b;
}
function mod(a, b)
{
	if (b === 0)
	{
		throw new Error('Cannot perform mod 0. Division by zero error.');
	}
	var r = a % b;
	var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

	return m === b ? 0 : m;
}
function logBase(base, n)
{
	return Math.log(n) / Math.log(base);
}
function negate(n)
{
	return -n;
}
function abs(n)
{
	return n < 0 ? -n : n;
}

function min(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) < 0 ? a : b;
}
function max(a, b)
{
	return _elm_lang$core$Native_Utils.cmp(a, b) > 0 ? a : b;
}
function clamp(lo, hi, n)
{
	return _elm_lang$core$Native_Utils.cmp(n, lo) < 0
		? lo
		: _elm_lang$core$Native_Utils.cmp(n, hi) > 0
			? hi
			: n;
}

var ord = ['LT', 'EQ', 'GT'];

function compare(x, y)
{
	return { ctor: ord[_elm_lang$core$Native_Utils.cmp(x, y) + 1] };
}

function xor(a, b)
{
	return a !== b;
}
function not(b)
{
	return !b;
}
function isInfinite(n)
{
	return n === Infinity || n === -Infinity;
}

function truncate(n)
{
	return n | 0;
}

function degrees(d)
{
	return d * Math.PI / 180;
}
function turns(t)
{
	return 2 * Math.PI * t;
}
function fromPolar(point)
{
	var r = point._0;
	var t = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
}
function toPolar(point)
{
	var x = point._0;
	var y = point._1;
	return _elm_lang$core$Native_Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
}

return {
	div: F2(div),
	rem: F2(rem),
	mod: F2(mod),

	pi: Math.PI,
	e: Math.E,
	cos: Math.cos,
	sin: Math.sin,
	tan: Math.tan,
	acos: Math.acos,
	asin: Math.asin,
	atan: Math.atan,
	atan2: F2(Math.atan2),

	degrees: degrees,
	turns: turns,
	fromPolar: fromPolar,
	toPolar: toPolar,

	sqrt: Math.sqrt,
	logBase: F2(logBase),
	negate: negate,
	abs: abs,
	min: F2(min),
	max: F2(max),
	clamp: F3(clamp),
	compare: F2(compare),

	xor: F2(xor),
	not: not,

	truncate: truncate,
	ceiling: Math.ceil,
	floor: Math.floor,
	round: Math.round,
	toFloat: function(x) { return x; },
	isNaN: isNaN,
	isInfinite: isInfinite
};

}();
//import //

var _elm_lang$core$Native_Utils = function() {

// COMPARISONS

function eq(x, y)
{
	var stack = [];
	var isEqual = eqHelp(x, y, 0, stack);
	var pair;
	while (isEqual && (pair = stack.pop()))
	{
		isEqual = eqHelp(pair.x, pair.y, 0, stack);
	}
	return isEqual;
}


function eqHelp(x, y, depth, stack)
{
	if (depth > 100)
	{
		stack.push({ x: x, y: y });
		return true;
	}

	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object')
	{
		if (typeof x === 'function')
		{
			throw new Error(
				'Trying to use `(==)` on functions. There is no way to know if functions are "the same" in the Elm sense.'
				+ ' Read more about this at http://package.elm-lang.org/packages/elm-lang/core/latest/Basics#=='
				+ ' which describes why it is this way and what the better version will look like.'
			);
		}
		return false;
	}

	if (x === null || y === null)
	{
		return false
	}

	if (x instanceof Date)
	{
		return x.getTime() === y.getTime();
	}

	if (!('ctor' in x))
	{
		for (var key in x)
		{
			if (!eqHelp(x[key], y[key], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	// convert Dicts and Sets to lists
	if (x.ctor === 'RBNode_elm_builtin' || x.ctor === 'RBEmpty_elm_builtin')
	{
		x = _elm_lang$core$Dict$toList(x);
		y = _elm_lang$core$Dict$toList(y);
	}
	if (x.ctor === 'Set_elm_builtin')
	{
		x = _elm_lang$core$Set$toList(x);
		y = _elm_lang$core$Set$toList(y);
	}

	// check if lists are equal without recursion
	if (x.ctor === '::')
	{
		var a = x;
		var b = y;
		while (a.ctor === '::' && b.ctor === '::')
		{
			if (!eqHelp(a._0, b._0, depth + 1, stack))
			{
				return false;
			}
			a = a._1;
			b = b._1;
		}
		return a.ctor === b.ctor;
	}

	// check if Arrays are equal
	if (x.ctor === '_Array')
	{
		var xs = _elm_lang$core$Native_Array.toJSArray(x);
		var ys = _elm_lang$core$Native_Array.toJSArray(y);
		if (xs.length !== ys.length)
		{
			return false;
		}
		for (var i = 0; i < xs.length; i++)
		{
			if (!eqHelp(xs[i], ys[i], depth + 1, stack))
			{
				return false;
			}
		}
		return true;
	}

	if (!eqHelp(x.ctor, y.ctor, depth + 1, stack))
	{
		return false;
	}

	for (var key in x)
	{
		if (!eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

var LT = -1, EQ = 0, GT = 1;

function cmp(x, y)
{
	if (typeof x !== 'object')
	{
		return x === y ? EQ : x < y ? LT : GT;
	}

	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? EQ : a < b ? LT : GT;
	}

	if (x.ctor === '::' || x.ctor === '[]')
	{
		while (x.ctor === '::' && y.ctor === '::')
		{
			var ord = cmp(x._0, y._0);
			if (ord !== EQ)
			{
				return ord;
			}
			x = x._1;
			y = y._1;
		}
		return x.ctor === y.ctor ? EQ : x.ctor === '[]' ? LT : GT;
	}

	if (x.ctor.slice(0, 6) === '_Tuple')
	{
		var ord;
		var n = x.ctor.slice(6) - 0;
		var err = 'cannot compare tuples with more than 6 elements.';
		if (n === 0) return EQ;
		if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
		if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
		if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
		if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
		if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
		if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
		if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
		return EQ;
	}

	throw new Error(
		'Comparison error: comparison is only defined on ints, '
		+ 'floats, times, chars, strings, lists of comparable values, '
		+ 'and tuples of comparable values.'
	);
}


// COMMON VALUES

var Tuple0 = {
	ctor: '_Tuple0'
};

function Tuple2(x, y)
{
	return {
		ctor: '_Tuple2',
		_0: x,
		_1: y
	};
}

function chr(c)
{
	return new String(c);
}


// GUID

var count = 0;
function guid(_)
{
	return count++;
}


// RECORDS

function update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


//// LIST STUFF ////

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return {
		ctor: '::',
		_0: hd,
		_1: tl
	};
}

function append(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (xs.ctor === '[]')
	{
		return ys;
	}
	var root = Cons(xs._0, Nil);
	var curr = root;
	xs = xs._1;
	while (xs.ctor !== '[]')
	{
		curr._1 = Cons(xs._0, Nil);
		xs = xs._1;
		curr = curr._1;
	}
	curr._1 = ys;
	return root;
}


// CRASHES

function crash(moduleName, region)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function crashCase(moduleName, region, value)
{
	return function(message) {
		throw new Error(
			'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
			+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
			+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
			+ 'The message provided by the code author is:\n\n    '
			+ message
		);
	};
}

function regionToString(region)
{
	if (region.start.line == region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'between lines ' + region.start.line + ' and ' + region.end.line;
}


// TO STRING

function toString(v)
{
	var type = typeof v;
	if (type === 'function')
	{
		return '<function>';
	}

	if (type === 'boolean')
	{
		return v ? 'True' : 'False';
	}

	if (type === 'number')
	{
		return v + '';
	}

	if (v instanceof String)
	{
		return '\'' + addSlashes(v, true) + '\'';
	}

	if (type === 'string')
	{
		return '"' + addSlashes(v, false) + '"';
	}

	if (v === null)
	{
		return 'null';
	}

	if (type === 'object' && 'ctor' in v)
	{
		var ctorStarter = v.ctor.substring(0, 5);

		if (ctorStarter === '_Tupl')
		{
			var output = [];
			for (var k in v)
			{
				if (k === 'ctor') continue;
				output.push(toString(v[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (ctorStarter === '_Task')
		{
			return '<task>'
		}

		if (v.ctor === '_Array')
		{
			var list = _elm_lang$core$Array$toList(v);
			return 'Array.fromList ' + toString(list);
		}

		if (v.ctor === '<decoder>')
		{
			return '<decoder>';
		}

		if (v.ctor === '_Process')
		{
			return '<process:' + v.id + '>';
		}

		if (v.ctor === '::')
		{
			var output = '[' + toString(v._0);
			v = v._1;
			while (v.ctor === '::')
			{
				output += ',' + toString(v._0);
				v = v._1;
			}
			return output + ']';
		}

		if (v.ctor === '[]')
		{
			return '[]';
		}

		if (v.ctor === 'Set_elm_builtin')
		{
			return 'Set.fromList ' + toString(_elm_lang$core$Set$toList(v));
		}

		if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin')
		{
			return 'Dict.fromList ' + toString(_elm_lang$core$Dict$toList(v));
		}

		var output = '';
		for (var i in v)
		{
			if (i === 'ctor') continue;
			var str = toString(v[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return v.ctor + output;
	}

	if (type === 'object')
	{
		if (v instanceof Date)
		{
			return '<' + v.toString() + '>';
		}

		if (v.elm_web_socket)
		{
			return '<websocket>';
		}

		var output = [];
		for (var k in v)
		{
			output.push(k + ' = ' + toString(v[k]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return '<internal structure>';
}

function addSlashes(str, isChar)
{
	var s = str.replace(/\\/g, '\\\\')
			  .replace(/\n/g, '\\n')
			  .replace(/\t/g, '\\t')
			  .replace(/\r/g, '\\r')
			  .replace(/\v/g, '\\v')
			  .replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}


return {
	eq: eq,
	cmp: cmp,
	Tuple0: Tuple0,
	Tuple2: Tuple2,
	chr: chr,
	update: update,
	guid: guid,

	append: F2(append),

	crash: crash,
	crashCase: crashCase,

	toString: toString
};

}();
var _elm_lang$core$Basics$never = function (_p0) {
	never:
	while (true) {
		var _p1 = _p0;
		var _v1 = _p1._0;
		_p0 = _v1;
		continue never;
	}
};
var _elm_lang$core$Basics$uncurry = F2(
	function (f, _p2) {
		var _p3 = _p2;
		return A2(f, _p3._0, _p3._1);
	});
var _elm_lang$core$Basics$curry = F3(
	function (f, a, b) {
		return f(
			{ctor: '_Tuple2', _0: a, _1: b});
	});
var _elm_lang$core$Basics$flip = F3(
	function (f, b, a) {
		return A2(f, a, b);
	});
var _elm_lang$core$Basics$always = F2(
	function (a, _p4) {
		return a;
	});
var _elm_lang$core$Basics$identity = function (x) {
	return x;
};
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<|'] = F2(
	function (f, x) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['|>'] = F2(
	function (x, f) {
		return f(x);
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>>'] = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<<'] = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['++'] = _elm_lang$core$Native_Utils.append;
var _elm_lang$core$Basics$toString = _elm_lang$core$Native_Utils.toString;
var _elm_lang$core$Basics$isInfinite = _elm_lang$core$Native_Basics.isInfinite;
var _elm_lang$core$Basics$isNaN = _elm_lang$core$Native_Basics.isNaN;
var _elm_lang$core$Basics$toFloat = _elm_lang$core$Native_Basics.toFloat;
var _elm_lang$core$Basics$ceiling = _elm_lang$core$Native_Basics.ceiling;
var _elm_lang$core$Basics$floor = _elm_lang$core$Native_Basics.floor;
var _elm_lang$core$Basics$truncate = _elm_lang$core$Native_Basics.truncate;
var _elm_lang$core$Basics$round = _elm_lang$core$Native_Basics.round;
var _elm_lang$core$Basics$not = _elm_lang$core$Native_Basics.not;
var _elm_lang$core$Basics$xor = _elm_lang$core$Native_Basics.xor;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['||'] = _elm_lang$core$Native_Basics.or;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['&&'] = _elm_lang$core$Native_Basics.and;
var _elm_lang$core$Basics$max = _elm_lang$core$Native_Basics.max;
var _elm_lang$core$Basics$min = _elm_lang$core$Native_Basics.min;
var _elm_lang$core$Basics$compare = _elm_lang$core$Native_Basics.compare;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>='] = _elm_lang$core$Native_Basics.ge;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<='] = _elm_lang$core$Native_Basics.le;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['>'] = _elm_lang$core$Native_Basics.gt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['<'] = _elm_lang$core$Native_Basics.lt;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/='] = _elm_lang$core$Native_Basics.neq;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['=='] = _elm_lang$core$Native_Basics.eq;
var _elm_lang$core$Basics$e = _elm_lang$core$Native_Basics.e;
var _elm_lang$core$Basics$pi = _elm_lang$core$Native_Basics.pi;
var _elm_lang$core$Basics$clamp = _elm_lang$core$Native_Basics.clamp;
var _elm_lang$core$Basics$logBase = _elm_lang$core$Native_Basics.logBase;
var _elm_lang$core$Basics$abs = _elm_lang$core$Native_Basics.abs;
var _elm_lang$core$Basics$negate = _elm_lang$core$Native_Basics.negate;
var _elm_lang$core$Basics$sqrt = _elm_lang$core$Native_Basics.sqrt;
var _elm_lang$core$Basics$atan2 = _elm_lang$core$Native_Basics.atan2;
var _elm_lang$core$Basics$atan = _elm_lang$core$Native_Basics.atan;
var _elm_lang$core$Basics$asin = _elm_lang$core$Native_Basics.asin;
var _elm_lang$core$Basics$acos = _elm_lang$core$Native_Basics.acos;
var _elm_lang$core$Basics$tan = _elm_lang$core$Native_Basics.tan;
var _elm_lang$core$Basics$sin = _elm_lang$core$Native_Basics.sin;
var _elm_lang$core$Basics$cos = _elm_lang$core$Native_Basics.cos;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['^'] = _elm_lang$core$Native_Basics.exp;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['%'] = _elm_lang$core$Native_Basics.mod;
var _elm_lang$core$Basics$rem = _elm_lang$core$Native_Basics.rem;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['//'] = _elm_lang$core$Native_Basics.div;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['/'] = _elm_lang$core$Native_Basics.floatDiv;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['*'] = _elm_lang$core$Native_Basics.mul;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['-'] = _elm_lang$core$Native_Basics.sub;
var _elm_lang$core$Basics_ops = _elm_lang$core$Basics_ops || {};
_elm_lang$core$Basics_ops['+'] = _elm_lang$core$Native_Basics.add;
var _elm_lang$core$Basics$toPolar = _elm_lang$core$Native_Basics.toPolar;
var _elm_lang$core$Basics$fromPolar = _elm_lang$core$Native_Basics.fromPolar;
var _elm_lang$core$Basics$turns = _elm_lang$core$Native_Basics.turns;
var _elm_lang$core$Basics$degrees = _elm_lang$core$Native_Basics.degrees;
var _elm_lang$core$Basics$radians = function (t) {
	return t;
};
var _elm_lang$core$Basics$GT = {ctor: 'GT'};
var _elm_lang$core$Basics$EQ = {ctor: 'EQ'};
var _elm_lang$core$Basics$LT = {ctor: 'LT'};
var _elm_lang$core$Basics$JustOneMore = function (a) {
	return {ctor: 'JustOneMore', _0: a};
};

//import Native.Utils //

var _elm_lang$core$Native_Debug = function() {

function log(tag, value)
{
	var msg = tag + ': ' + _elm_lang$core$Native_Utils.toString(value);
	var process = process || {};
	if (process.stdout)
	{
		process.stdout.write(msg);
	}
	else
	{
		console.log(msg);
	}
	return value;
}

function crash(message)
{
	throw new Error(message);
}

return {
	crash: crash,
	log: F2(log)
};

}();
var _elm_lang$core$Debug$crash = _elm_lang$core$Native_Debug.crash;
var _elm_lang$core$Debug$log = _elm_lang$core$Native_Debug.log;

var _elm_lang$core$Maybe$withDefault = F2(
	function ($default, maybe) {
		var _p0 = maybe;
		if (_p0.ctor === 'Just') {
			return _p0._0;
		} else {
			return $default;
		}
	});
var _elm_lang$core$Maybe$Nothing = {ctor: 'Nothing'};
var _elm_lang$core$Maybe$andThen = F2(
	function (callback, maybeValue) {
		var _p1 = maybeValue;
		if (_p1.ctor === 'Just') {
			return callback(_p1._0);
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$Just = function (a) {
	return {ctor: 'Just', _0: a};
};
var _elm_lang$core$Maybe$map = F2(
	function (f, maybe) {
		var _p2 = maybe;
		if (_p2.ctor === 'Just') {
			return _elm_lang$core$Maybe$Just(
				f(_p2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map2 = F3(
	function (func, ma, mb) {
		var _p3 = {ctor: '_Tuple2', _0: ma, _1: mb};
		if (((_p3.ctor === '_Tuple2') && (_p3._0.ctor === 'Just')) && (_p3._1.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A2(func, _p3._0._0, _p3._1._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map3 = F4(
	function (func, ma, mb, mc) {
		var _p4 = {ctor: '_Tuple3', _0: ma, _1: mb, _2: mc};
		if ((((_p4.ctor === '_Tuple3') && (_p4._0.ctor === 'Just')) && (_p4._1.ctor === 'Just')) && (_p4._2.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A3(func, _p4._0._0, _p4._1._0, _p4._2._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map4 = F5(
	function (func, ma, mb, mc, md) {
		var _p5 = {ctor: '_Tuple4', _0: ma, _1: mb, _2: mc, _3: md};
		if (((((_p5.ctor === '_Tuple4') && (_p5._0.ctor === 'Just')) && (_p5._1.ctor === 'Just')) && (_p5._2.ctor === 'Just')) && (_p5._3.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A4(func, _p5._0._0, _p5._1._0, _p5._2._0, _p5._3._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _elm_lang$core$Maybe$map5 = F6(
	function (func, ma, mb, mc, md, me) {
		var _p6 = {ctor: '_Tuple5', _0: ma, _1: mb, _2: mc, _3: md, _4: me};
		if ((((((_p6.ctor === '_Tuple5') && (_p6._0.ctor === 'Just')) && (_p6._1.ctor === 'Just')) && (_p6._2.ctor === 'Just')) && (_p6._3.ctor === 'Just')) && (_p6._4.ctor === 'Just')) {
			return _elm_lang$core$Maybe$Just(
				A5(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0, _p6._4._0));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});

//import Native.Utils //

var _elm_lang$core$Native_List = function() {

var Nil = { ctor: '[]' };

function Cons(hd, tl)
{
	return { ctor: '::', _0: hd, _1: tl };
}

function fromArray(arr)
{
	var out = Nil;
	for (var i = arr.length; i--; )
	{
		out = Cons(arr[i], out);
	}
	return out;
}

function toArray(xs)
{
	var out = [];
	while (xs.ctor !== '[]')
	{
		out.push(xs._0);
		xs = xs._1;
	}
	return out;
}

function foldr(f, b, xs)
{
	var arr = toArray(xs);
	var acc = b;
	for (var i = arr.length; i--; )
	{
		acc = A2(f, arr[i], acc);
	}
	return acc;
}

function map2(f, xs, ys)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]')
	{
		arr.push(A2(f, xs._0, ys._0));
		xs = xs._1;
		ys = ys._1;
	}
	return fromArray(arr);
}

function map3(f, xs, ys, zs)
{
	var arr = [];
	while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
	{
		arr.push(A3(f, xs._0, ys._0, zs._0));
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map4(f, ws, xs, ys, zs)
{
	var arr = [];
	while (   ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function map5(f, vs, ws, xs, ys, zs)
{
	var arr = [];
	while (   vs.ctor !== '[]'
		   && ws.ctor !== '[]'
		   && xs.ctor !== '[]'
		   && ys.ctor !== '[]'
		   && zs.ctor !== '[]')
	{
		arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
		vs = vs._1;
		ws = ws._1;
		xs = xs._1;
		ys = ys._1;
		zs = zs._1;
	}
	return fromArray(arr);
}

function sortBy(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		return _elm_lang$core$Native_Utils.cmp(f(a), f(b));
	}));
}

function sortWith(f, xs)
{
	return fromArray(toArray(xs).sort(function(a, b) {
		var ord = f(a)(b).ctor;
		return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
	}));
}

return {
	Nil: Nil,
	Cons: Cons,
	cons: F2(Cons),
	toArray: toArray,
	fromArray: fromArray,

	foldr: F3(foldr),

	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	sortBy: F2(sortBy),
	sortWith: F2(sortWith)
};

}();
var _elm_lang$core$List$sortWith = _elm_lang$core$Native_List.sortWith;
var _elm_lang$core$List$sortBy = _elm_lang$core$Native_List.sortBy;
var _elm_lang$core$List$sort = function (xs) {
	return A2(_elm_lang$core$List$sortBy, _elm_lang$core$Basics$identity, xs);
};
var _elm_lang$core$List$singleton = function (value) {
	return {
		ctor: '::',
		_0: value,
		_1: {ctor: '[]'}
	};
};
var _elm_lang$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return list;
			} else {
				var _p0 = list;
				if (_p0.ctor === '[]') {
					return list;
				} else {
					var _v1 = n - 1,
						_v2 = _p0._1;
					n = _v1;
					list = _v2;
					continue drop;
				}
			}
		}
	});
var _elm_lang$core$List$map5 = _elm_lang$core$Native_List.map5;
var _elm_lang$core$List$map4 = _elm_lang$core$Native_List.map4;
var _elm_lang$core$List$map3 = _elm_lang$core$Native_List.map3;
var _elm_lang$core$List$map2 = _elm_lang$core$Native_List.map2;
var _elm_lang$core$List$any = F2(
	function (isOkay, list) {
		any:
		while (true) {
			var _p1 = list;
			if (_p1.ctor === '[]') {
				return false;
			} else {
				if (isOkay(_p1._0)) {
					return true;
				} else {
					var _v4 = isOkay,
						_v5 = _p1._1;
					isOkay = _v4;
					list = _v5;
					continue any;
				}
			}
		}
	});
var _elm_lang$core$List$all = F2(
	function (isOkay, list) {
		return !A2(
			_elm_lang$core$List$any,
			function (_p2) {
				return !isOkay(_p2);
			},
			list);
	});
var _elm_lang$core$List$foldr = _elm_lang$core$Native_List.foldr;
var _elm_lang$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			var _p3 = list;
			if (_p3.ctor === '[]') {
				return acc;
			} else {
				var _v7 = func,
					_v8 = A2(func, _p3._0, acc),
					_v9 = _p3._1;
				func = _v7;
				acc = _v8;
				list = _v9;
				continue foldl;
			}
		}
	});
var _elm_lang$core$List$length = function (xs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p4, i) {
				return i + 1;
			}),
		0,
		xs);
};
var _elm_lang$core$List$sum = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x + y;
			}),
		0,
		numbers);
};
var _elm_lang$core$List$product = function (numbers) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return x * y;
			}),
		1,
		numbers);
};
var _elm_lang$core$List$maximum = function (list) {
	var _p5 = list;
	if (_p5.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p5._0, _p5._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$minimum = function (list) {
	var _p6 = list;
	if (_p6.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p6._0, _p6._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$member = F2(
	function (x, xs) {
		return A2(
			_elm_lang$core$List$any,
			function (a) {
				return _elm_lang$core$Native_Utils.eq(a, x);
			},
			xs);
	});
var _elm_lang$core$List$isEmpty = function (xs) {
	var _p7 = xs;
	if (_p7.ctor === '[]') {
		return true;
	} else {
		return false;
	}
};
var _elm_lang$core$List$tail = function (list) {
	var _p8 = list;
	if (_p8.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p8._1);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List$head = function (list) {
	var _p9 = list;
	if (_p9.ctor === '::') {
		return _elm_lang$core$Maybe$Just(_p9._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$List_ops = _elm_lang$core$List_ops || {};
_elm_lang$core$List_ops['::'] = _elm_lang$core$Native_List.cons;
var _elm_lang$core$List$map = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			F2(
				function (x, acc) {
					return {
						ctor: '::',
						_0: f(x),
						_1: acc
					};
				}),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$filter = F2(
	function (pred, xs) {
		var conditionalCons = F2(
			function (front, back) {
				return pred(front) ? {ctor: '::', _0: front, _1: back} : back;
			});
		return A3(
			_elm_lang$core$List$foldr,
			conditionalCons,
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _p10 = f(mx);
		if (_p10.ctor === 'Just') {
			return {ctor: '::', _0: _p10._0, _1: xs};
		} else {
			return xs;
		}
	});
var _elm_lang$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$foldr,
			_elm_lang$core$List$maybeCons(f),
			{ctor: '[]'},
			xs);
	});
var _elm_lang$core$List$reverse = function (list) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (x, y) {
				return {ctor: '::', _0: x, _1: y};
			}),
		{ctor: '[]'},
		list);
};
var _elm_lang$core$List$scanl = F3(
	function (f, b, xs) {
		var scan1 = F2(
			function (x, accAcc) {
				var _p11 = accAcc;
				if (_p11.ctor === '::') {
					return {
						ctor: '::',
						_0: A2(f, x, _p11._0),
						_1: accAcc
					};
				} else {
					return {ctor: '[]'};
				}
			});
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$foldl,
				scan1,
				{
					ctor: '::',
					_0: b,
					_1: {ctor: '[]'}
				},
				xs));
	});
var _elm_lang$core$List$append = F2(
	function (xs, ys) {
		var _p12 = ys;
		if (_p12.ctor === '[]') {
			return xs;
		} else {
			return A3(
				_elm_lang$core$List$foldr,
				F2(
					function (x, y) {
						return {ctor: '::', _0: x, _1: y};
					}),
				ys,
				xs);
		}
	});
var _elm_lang$core$List$concat = function (lists) {
	return A3(
		_elm_lang$core$List$foldr,
		_elm_lang$core$List$append,
		{ctor: '[]'},
		lists);
};
var _elm_lang$core$List$concatMap = F2(
	function (f, list) {
		return _elm_lang$core$List$concat(
			A2(_elm_lang$core$List$map, f, list));
	});
var _elm_lang$core$List$partition = F2(
	function (pred, list) {
		var step = F2(
			function (x, _p13) {
				var _p14 = _p13;
				var _p16 = _p14._0;
				var _p15 = _p14._1;
				return pred(x) ? {
					ctor: '_Tuple2',
					_0: {ctor: '::', _0: x, _1: _p16},
					_1: _p15
				} : {
					ctor: '_Tuple2',
					_0: _p16,
					_1: {ctor: '::', _0: x, _1: _p15}
				};
			});
		return A3(
			_elm_lang$core$List$foldr,
			step,
			{
				ctor: '_Tuple2',
				_0: {ctor: '[]'},
				_1: {ctor: '[]'}
			},
			list);
	});
var _elm_lang$core$List$unzip = function (pairs) {
	var step = F2(
		function (_p18, _p17) {
			var _p19 = _p18;
			var _p20 = _p17;
			return {
				ctor: '_Tuple2',
				_0: {ctor: '::', _0: _p19._0, _1: _p20._0},
				_1: {ctor: '::', _0: _p19._1, _1: _p20._1}
			};
		});
	return A3(
		_elm_lang$core$List$foldr,
		step,
		{
			ctor: '_Tuple2',
			_0: {ctor: '[]'},
			_1: {ctor: '[]'}
		},
		pairs);
};
var _elm_lang$core$List$intersperse = F2(
	function (sep, xs) {
		var _p21 = xs;
		if (_p21.ctor === '[]') {
			return {ctor: '[]'};
		} else {
			var step = F2(
				function (x, rest) {
					return {
						ctor: '::',
						_0: sep,
						_1: {ctor: '::', _0: x, _1: rest}
					};
				});
			var spersed = A3(
				_elm_lang$core$List$foldr,
				step,
				{ctor: '[]'},
				_p21._1);
			return {ctor: '::', _0: _p21._0, _1: spersed};
		}
	});
var _elm_lang$core$List$takeReverse = F3(
	function (n, list, taken) {
		takeReverse:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return taken;
			} else {
				var _p22 = list;
				if (_p22.ctor === '[]') {
					return taken;
				} else {
					var _v23 = n - 1,
						_v24 = _p22._1,
						_v25 = {ctor: '::', _0: _p22._0, _1: taken};
					n = _v23;
					list = _v24;
					taken = _v25;
					continue takeReverse;
				}
			}
		}
	});
var _elm_lang$core$List$takeTailRec = F2(
	function (n, list) {
		return _elm_lang$core$List$reverse(
			A3(
				_elm_lang$core$List$takeReverse,
				n,
				list,
				{ctor: '[]'}));
	});
var _elm_lang$core$List$takeFast = F3(
	function (ctr, n, list) {
		if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
			return {ctor: '[]'};
		} else {
			var _p23 = {ctor: '_Tuple2', _0: n, _1: list};
			_v26_5:
			do {
				_v26_1:
				do {
					if (_p23.ctor === '_Tuple2') {
						if (_p23._1.ctor === '[]') {
							return list;
						} else {
							if (_p23._1._1.ctor === '::') {
								switch (_p23._0) {
									case 1:
										break _v26_1;
									case 2:
										return {
											ctor: '::',
											_0: _p23._1._0,
											_1: {
												ctor: '::',
												_0: _p23._1._1._0,
												_1: {ctor: '[]'}
											}
										};
									case 3:
										if (_p23._1._1._1.ctor === '::') {
											return {
												ctor: '::',
												_0: _p23._1._0,
												_1: {
													ctor: '::',
													_0: _p23._1._1._0,
													_1: {
														ctor: '::',
														_0: _p23._1._1._1._0,
														_1: {ctor: '[]'}
													}
												}
											};
										} else {
											break _v26_5;
										}
									default:
										if ((_p23._1._1._1.ctor === '::') && (_p23._1._1._1._1.ctor === '::')) {
											var _p28 = _p23._1._1._1._0;
											var _p27 = _p23._1._1._0;
											var _p26 = _p23._1._0;
											var _p25 = _p23._1._1._1._1._0;
											var _p24 = _p23._1._1._1._1._1;
											return (_elm_lang$core$Native_Utils.cmp(ctr, 1000) > 0) ? {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A2(_elm_lang$core$List$takeTailRec, n - 4, _p24)
														}
													}
												}
											} : {
												ctor: '::',
												_0: _p26,
												_1: {
													ctor: '::',
													_0: _p27,
													_1: {
														ctor: '::',
														_0: _p28,
														_1: {
															ctor: '::',
															_0: _p25,
															_1: A3(_elm_lang$core$List$takeFast, ctr + 1, n - 4, _p24)
														}
													}
												}
											};
										} else {
											break _v26_5;
										}
								}
							} else {
								if (_p23._0 === 1) {
									break _v26_1;
								} else {
									break _v26_5;
								}
							}
						}
					} else {
						break _v26_5;
					}
				} while(false);
				return {
					ctor: '::',
					_0: _p23._1._0,
					_1: {ctor: '[]'}
				};
			} while(false);
			return list;
		}
	});
var _elm_lang$core$List$take = F2(
	function (n, list) {
		return A3(_elm_lang$core$List$takeFast, 0, n, list);
	});
var _elm_lang$core$List$repeatHelp = F3(
	function (result, n, value) {
		repeatHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(n, 0) < 1) {
				return result;
			} else {
				var _v27 = {ctor: '::', _0: value, _1: result},
					_v28 = n - 1,
					_v29 = value;
				result = _v27;
				n = _v28;
				value = _v29;
				continue repeatHelp;
			}
		}
	});
var _elm_lang$core$List$repeat = F2(
	function (n, value) {
		return A3(
			_elm_lang$core$List$repeatHelp,
			{ctor: '[]'},
			n,
			value);
	});
var _elm_lang$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_elm_lang$core$Native_Utils.cmp(lo, hi) < 1) {
				var _v30 = lo,
					_v31 = hi - 1,
					_v32 = {ctor: '::', _0: hi, _1: list};
				lo = _v30;
				hi = _v31;
				list = _v32;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var _elm_lang$core$List$range = F2(
	function (lo, hi) {
		return A3(
			_elm_lang$core$List$rangeHelp,
			lo,
			hi,
			{ctor: '[]'});
	});
var _elm_lang$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			_elm_lang$core$List$map2,
			f,
			A2(
				_elm_lang$core$List$range,
				0,
				_elm_lang$core$List$length(xs) - 1),
			xs);
	});

var _elm_lang$core$Result$toMaybe = function (result) {
	var _p0 = result;
	if (_p0.ctor === 'Ok') {
		return _elm_lang$core$Maybe$Just(_p0._0);
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _elm_lang$core$Result$withDefault = F2(
	function (def, result) {
		var _p1 = result;
		if (_p1.ctor === 'Ok') {
			return _p1._0;
		} else {
			return def;
		}
	});
var _elm_lang$core$Result$Err = function (a) {
	return {ctor: 'Err', _0: a};
};
var _elm_lang$core$Result$andThen = F2(
	function (callback, result) {
		var _p2 = result;
		if (_p2.ctor === 'Ok') {
			return callback(_p2._0);
		} else {
			return _elm_lang$core$Result$Err(_p2._0);
		}
	});
var _elm_lang$core$Result$Ok = function (a) {
	return {ctor: 'Ok', _0: a};
};
var _elm_lang$core$Result$map = F2(
	function (func, ra) {
		var _p3 = ra;
		if (_p3.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(
				func(_p3._0));
		} else {
			return _elm_lang$core$Result$Err(_p3._0);
		}
	});
var _elm_lang$core$Result$map2 = F3(
	function (func, ra, rb) {
		var _p4 = {ctor: '_Tuple2', _0: ra, _1: rb};
		if (_p4._0.ctor === 'Ok') {
			if (_p4._1.ctor === 'Ok') {
				return _elm_lang$core$Result$Ok(
					A2(func, _p4._0._0, _p4._1._0));
			} else {
				return _elm_lang$core$Result$Err(_p4._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p4._0._0);
		}
	});
var _elm_lang$core$Result$map3 = F4(
	function (func, ra, rb, rc) {
		var _p5 = {ctor: '_Tuple3', _0: ra, _1: rb, _2: rc};
		if (_p5._0.ctor === 'Ok') {
			if (_p5._1.ctor === 'Ok') {
				if (_p5._2.ctor === 'Ok') {
					return _elm_lang$core$Result$Ok(
						A3(func, _p5._0._0, _p5._1._0, _p5._2._0));
				} else {
					return _elm_lang$core$Result$Err(_p5._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p5._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p5._0._0);
		}
	});
var _elm_lang$core$Result$map4 = F5(
	function (func, ra, rb, rc, rd) {
		var _p6 = {ctor: '_Tuple4', _0: ra, _1: rb, _2: rc, _3: rd};
		if (_p6._0.ctor === 'Ok') {
			if (_p6._1.ctor === 'Ok') {
				if (_p6._2.ctor === 'Ok') {
					if (_p6._3.ctor === 'Ok') {
						return _elm_lang$core$Result$Ok(
							A4(func, _p6._0._0, _p6._1._0, _p6._2._0, _p6._3._0));
					} else {
						return _elm_lang$core$Result$Err(_p6._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p6._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p6._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p6._0._0);
		}
	});
var _elm_lang$core$Result$map5 = F6(
	function (func, ra, rb, rc, rd, re) {
		var _p7 = {ctor: '_Tuple5', _0: ra, _1: rb, _2: rc, _3: rd, _4: re};
		if (_p7._0.ctor === 'Ok') {
			if (_p7._1.ctor === 'Ok') {
				if (_p7._2.ctor === 'Ok') {
					if (_p7._3.ctor === 'Ok') {
						if (_p7._4.ctor === 'Ok') {
							return _elm_lang$core$Result$Ok(
								A5(func, _p7._0._0, _p7._1._0, _p7._2._0, _p7._3._0, _p7._4._0));
						} else {
							return _elm_lang$core$Result$Err(_p7._4._0);
						}
					} else {
						return _elm_lang$core$Result$Err(_p7._3._0);
					}
				} else {
					return _elm_lang$core$Result$Err(_p7._2._0);
				}
			} else {
				return _elm_lang$core$Result$Err(_p7._1._0);
			}
		} else {
			return _elm_lang$core$Result$Err(_p7._0._0);
		}
	});
var _elm_lang$core$Result$mapError = F2(
	function (f, result) {
		var _p8 = result;
		if (_p8.ctor === 'Ok') {
			return _elm_lang$core$Result$Ok(_p8._0);
		} else {
			return _elm_lang$core$Result$Err(
				f(_p8._0));
		}
	});
var _elm_lang$core$Result$fromMaybe = F2(
	function (err, maybe) {
		var _p9 = maybe;
		if (_p9.ctor === 'Just') {
			return _elm_lang$core$Result$Ok(_p9._0);
		} else {
			return _elm_lang$core$Result$Err(err);
		}
	});

//import Maybe, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_String = function() {

function isEmpty(str)
{
	return str.length === 0;
}
function cons(chr, str)
{
	return chr + str;
}
function uncons(str)
{
	var hd = str[0];
	if (hd)
	{
		return _elm_lang$core$Maybe$Just(_elm_lang$core$Native_Utils.Tuple2(_elm_lang$core$Native_Utils.chr(hd), str.slice(1)));
	}
	return _elm_lang$core$Maybe$Nothing;
}
function append(a, b)
{
	return a + b;
}
function concat(strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join('');
}
function length(str)
{
	return str.length;
}
function map(f, str)
{
	var out = str.split('');
	for (var i = out.length; i--; )
	{
		out[i] = f(_elm_lang$core$Native_Utils.chr(out[i]));
	}
	return out.join('');
}
function filter(pred, str)
{
	return str.split('').map(_elm_lang$core$Native_Utils.chr).filter(pred).join('');
}
function reverse(str)
{
	return str.split('').reverse().join('');
}
function foldl(f, b, str)
{
	var len = str.length;
	for (var i = 0; i < len; ++i)
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function foldr(f, b, str)
{
	for (var i = str.length; i--; )
	{
		b = A2(f, _elm_lang$core$Native_Utils.chr(str[i]), b);
	}
	return b;
}
function split(sep, str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(sep));
}
function join(sep, strs)
{
	return _elm_lang$core$Native_List.toArray(strs).join(sep);
}
function repeat(n, str)
{
	var result = '';
	while (n > 0)
	{
		if (n & 1)
		{
			result += str;
		}
		n >>= 1, str += str;
	}
	return result;
}
function slice(start, end, str)
{
	return str.slice(start, end);
}
function left(n, str)
{
	return n < 1 ? '' : str.slice(0, n);
}
function right(n, str)
{
	return n < 1 ? '' : str.slice(-n);
}
function dropLeft(n, str)
{
	return n < 1 ? str : str.slice(n);
}
function dropRight(n, str)
{
	return n < 1 ? str : str.slice(0, -n);
}
function pad(n, chr, str)
{
	var half = (n - str.length) / 2;
	return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
}
function padRight(n, chr, str)
{
	return str + repeat(n - str.length, chr);
}
function padLeft(n, chr, str)
{
	return repeat(n - str.length, chr) + str;
}

function trim(str)
{
	return str.trim();
}
function trimLeft(str)
{
	return str.replace(/^\s+/, '');
}
function trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function words(str)
{
	return _elm_lang$core$Native_List.fromArray(str.trim().split(/\s+/g));
}
function lines(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split(/\r\n|\r|\n/g));
}

function toUpper(str)
{
	return str.toUpperCase();
}
function toLower(str)
{
	return str.toLowerCase();
}

function any(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return true;
		}
	}
	return false;
}
function all(pred, str)
{
	for (var i = str.length; i--; )
	{
		if (!pred(_elm_lang$core$Native_Utils.chr(str[i])))
		{
			return false;
		}
	}
	return true;
}

function contains(sub, str)
{
	return str.indexOf(sub) > -1;
}
function startsWith(sub, str)
{
	return str.indexOf(sub) === 0;
}
function endsWith(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
}
function indexes(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _elm_lang$core$Native_List.Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _elm_lang$core$Native_List.fromArray(is);
}


function toInt(s)
{
	var len = s.length;

	// if empty
	if (len === 0)
	{
		return intErr(s);
	}

	// if hex
	var c = s[0];
	if (c === '0' && s[1] === 'x')
	{
		for (var i = 2; i < len; ++i)
		{
			var c = s[i];
			if (('0' <= c && c <= '9') || ('A' <= c && c <= 'F') || ('a' <= c && c <= 'f'))
			{
				continue;
			}
			return intErr(s);
		}
		return _elm_lang$core$Result$Ok(parseInt(s, 16));
	}

	// is decimal
	if (c > '9' || (c < '0' && c !== '-' && c !== '+'))
	{
		return intErr(s);
	}
	for (var i = 1; i < len; ++i)
	{
		var c = s[i];
		if (c < '0' || '9' < c)
		{
			return intErr(s);
		}
	}

	return _elm_lang$core$Result$Ok(parseInt(s, 10));
}

function intErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to an Int");
}


function toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return floatErr(s);
	}
	var n = +s;
	// faster isNaN check
	return n === n ? _elm_lang$core$Result$Ok(n) : floatErr(s);
}

function floatErr(s)
{
	return _elm_lang$core$Result$Err("could not convert string '" + s + "' to a Float");
}


function toList(str)
{
	return _elm_lang$core$Native_List.fromArray(str.split('').map(_elm_lang$core$Native_Utils.chr));
}
function fromList(chars)
{
	return _elm_lang$core$Native_List.toArray(chars).join('');
}

return {
	isEmpty: isEmpty,
	cons: F2(cons),
	uncons: uncons,
	append: F2(append),
	concat: concat,
	length: length,
	map: F2(map),
	filter: F2(filter),
	reverse: reverse,
	foldl: F3(foldl),
	foldr: F3(foldr),

	split: F2(split),
	join: F2(join),
	repeat: F2(repeat),

	slice: F3(slice),
	left: F2(left),
	right: F2(right),
	dropLeft: F2(dropLeft),
	dropRight: F2(dropRight),

	pad: F3(pad),
	padLeft: F3(padLeft),
	padRight: F3(padRight),

	trim: trim,
	trimLeft: trimLeft,
	trimRight: trimRight,

	words: words,
	lines: lines,

	toUpper: toUpper,
	toLower: toLower,

	any: F2(any),
	all: F2(all),

	contains: F2(contains),
	startsWith: F2(startsWith),
	endsWith: F2(endsWith),
	indexes: F2(indexes),

	toInt: toInt,
	toFloat: toFloat,
	toList: toList,
	fromList: fromList
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Char = function() {

return {
	fromCode: function(c) { return _elm_lang$core$Native_Utils.chr(String.fromCharCode(c)); },
	toCode: function(c) { return c.charCodeAt(0); },
	toUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toUpperCase()); },
	toLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLowerCase()); },
	toLocaleUpper: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleUpperCase()); },
	toLocaleLower: function(c) { return _elm_lang$core$Native_Utils.chr(c.toLocaleLowerCase()); }
};

}();
var _elm_lang$core$Char$fromCode = _elm_lang$core$Native_Char.fromCode;
var _elm_lang$core$Char$toCode = _elm_lang$core$Native_Char.toCode;
var _elm_lang$core$Char$toLocaleLower = _elm_lang$core$Native_Char.toLocaleLower;
var _elm_lang$core$Char$toLocaleUpper = _elm_lang$core$Native_Char.toLocaleUpper;
var _elm_lang$core$Char$toLower = _elm_lang$core$Native_Char.toLower;
var _elm_lang$core$Char$toUpper = _elm_lang$core$Native_Char.toUpper;
var _elm_lang$core$Char$isBetween = F3(
	function (low, high, $char) {
		var code = _elm_lang$core$Char$toCode($char);
		return (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(low)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			code,
			_elm_lang$core$Char$toCode(high)) < 1);
	});
var _elm_lang$core$Char$isUpper = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('A'),
	_elm_lang$core$Native_Utils.chr('Z'));
var _elm_lang$core$Char$isLower = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('a'),
	_elm_lang$core$Native_Utils.chr('z'));
var _elm_lang$core$Char$isDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('9'));
var _elm_lang$core$Char$isOctDigit = A2(
	_elm_lang$core$Char$isBetween,
	_elm_lang$core$Native_Utils.chr('0'),
	_elm_lang$core$Native_Utils.chr('7'));
var _elm_lang$core$Char$isHexDigit = function ($char) {
	return _elm_lang$core$Char$isDigit($char) || (A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('a'),
		_elm_lang$core$Native_Utils.chr('f'),
		$char) || A3(
		_elm_lang$core$Char$isBetween,
		_elm_lang$core$Native_Utils.chr('A'),
		_elm_lang$core$Native_Utils.chr('F'),
		$char));
};

var _elm_lang$core$String$fromList = _elm_lang$core$Native_String.fromList;
var _elm_lang$core$String$toList = _elm_lang$core$Native_String.toList;
var _elm_lang$core$String$toFloat = _elm_lang$core$Native_String.toFloat;
var _elm_lang$core$String$toInt = _elm_lang$core$Native_String.toInt;
var _elm_lang$core$String$indices = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$indexes = _elm_lang$core$Native_String.indexes;
var _elm_lang$core$String$endsWith = _elm_lang$core$Native_String.endsWith;
var _elm_lang$core$String$startsWith = _elm_lang$core$Native_String.startsWith;
var _elm_lang$core$String$contains = _elm_lang$core$Native_String.contains;
var _elm_lang$core$String$all = _elm_lang$core$Native_String.all;
var _elm_lang$core$String$any = _elm_lang$core$Native_String.any;
var _elm_lang$core$String$toLower = _elm_lang$core$Native_String.toLower;
var _elm_lang$core$String$toUpper = _elm_lang$core$Native_String.toUpper;
var _elm_lang$core$String$lines = _elm_lang$core$Native_String.lines;
var _elm_lang$core$String$words = _elm_lang$core$Native_String.words;
var _elm_lang$core$String$trimRight = _elm_lang$core$Native_String.trimRight;
var _elm_lang$core$String$trimLeft = _elm_lang$core$Native_String.trimLeft;
var _elm_lang$core$String$trim = _elm_lang$core$Native_String.trim;
var _elm_lang$core$String$padRight = _elm_lang$core$Native_String.padRight;
var _elm_lang$core$String$padLeft = _elm_lang$core$Native_String.padLeft;
var _elm_lang$core$String$pad = _elm_lang$core$Native_String.pad;
var _elm_lang$core$String$dropRight = _elm_lang$core$Native_String.dropRight;
var _elm_lang$core$String$dropLeft = _elm_lang$core$Native_String.dropLeft;
var _elm_lang$core$String$right = _elm_lang$core$Native_String.right;
var _elm_lang$core$String$left = _elm_lang$core$Native_String.left;
var _elm_lang$core$String$slice = _elm_lang$core$Native_String.slice;
var _elm_lang$core$String$repeat = _elm_lang$core$Native_String.repeat;
var _elm_lang$core$String$join = _elm_lang$core$Native_String.join;
var _elm_lang$core$String$split = _elm_lang$core$Native_String.split;
var _elm_lang$core$String$foldr = _elm_lang$core$Native_String.foldr;
var _elm_lang$core$String$foldl = _elm_lang$core$Native_String.foldl;
var _elm_lang$core$String$reverse = _elm_lang$core$Native_String.reverse;
var _elm_lang$core$String$filter = _elm_lang$core$Native_String.filter;
var _elm_lang$core$String$map = _elm_lang$core$Native_String.map;
var _elm_lang$core$String$length = _elm_lang$core$Native_String.length;
var _elm_lang$core$String$concat = _elm_lang$core$Native_String.concat;
var _elm_lang$core$String$append = _elm_lang$core$Native_String.append;
var _elm_lang$core$String$uncons = _elm_lang$core$Native_String.uncons;
var _elm_lang$core$String$cons = _elm_lang$core$Native_String.cons;
var _elm_lang$core$String$fromChar = function ($char) {
	return A2(_elm_lang$core$String$cons, $char, '');
};
var _elm_lang$core$String$isEmpty = _elm_lang$core$Native_String.isEmpty;

var _elm_lang$core$Tuple$mapSecond = F2(
	function (func, _p0) {
		var _p1 = _p0;
		return {
			ctor: '_Tuple2',
			_0: _p1._0,
			_1: func(_p1._1)
		};
	});
var _elm_lang$core$Tuple$mapFirst = F2(
	function (func, _p2) {
		var _p3 = _p2;
		return {
			ctor: '_Tuple2',
			_0: func(_p3._0),
			_1: _p3._1
		};
	});
var _elm_lang$core$Tuple$second = function (_p4) {
	var _p5 = _p4;
	return _p5._1;
};
var _elm_lang$core$Tuple$first = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};

//import //

var _elm_lang$core$Native_Platform = function() {


// PROGRAMS

function program(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flags !== 'undefined')
				{
					throw new Error(
						'The `' + moduleName + '` module does not need flags.\n'
						+ 'Call ' + moduleName + '.worker() with no arguments and you should be all set!'
					);
				}

				return initialize(
					impl.init,
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function programWithFlags(impl)
{
	return function(flagDecoder)
	{
		return function(object, moduleName)
		{
			object['worker'] = function worker(flags)
			{
				if (typeof flagDecoder === 'undefined')
				{
					throw new Error(
						'Are you trying to sneak a Never value into Elm? Trickster!\n'
						+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
						+ 'Use `program` instead if you do not want flags.'
					);
				}

				var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
				if (result.ctor === 'Err')
				{
					throw new Error(
						moduleName + '.worker(...) was called with an unexpected argument.\n'
						+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
						+ result._0
					);
				}

				return initialize(
					impl.init(result._0),
					impl.update,
					impl.subscriptions,
					renderer
				);
			};
		};
	};
}

function renderer(enqueue, _)
{
	return function(_) {};
}


// HTML TO PROGRAM

function htmlToProgram(vnode)
{
	var emptyBag = batch(_elm_lang$core$Native_List.Nil);
	var noChange = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		emptyBag
	);

	return _elm_lang$virtual_dom$VirtualDom$program({
		init: noChange,
		view: function(model) { return main; },
		update: F2(function(msg, model) { return noChange; }),
		subscriptions: function (model) { return emptyBag; }
	});
}


// INITIALIZE A PROGRAM

function initialize(init, update, subscriptions, renderer)
{
	// ambient state
	var managers = {};
	var updateView;

	// init and update state in main process
	var initApp = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
		var model = init._0;
		updateView = renderer(enqueue, model);
		var cmds = init._1;
		var subs = subscriptions(model);
		dispatchEffects(managers, cmds, subs);
		callback(_elm_lang$core$Native_Scheduler.succeed(model));
	});

	function onMessage(msg, model)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {
			var results = A2(update, msg, model);
			model = results._0;
			updateView(model);
			var cmds = results._1;
			var subs = subscriptions(model);
			dispatchEffects(managers, cmds, subs);
			callback(_elm_lang$core$Native_Scheduler.succeed(model));
		});
	}

	var mainProcess = spawnLoop(initApp, onMessage);

	function enqueue(msg)
	{
		_elm_lang$core$Native_Scheduler.rawSend(mainProcess, msg);
	}

	var ports = setupEffects(managers, enqueue);

	return ports ? { ports: ports } : {};
}


// EFFECT MANAGERS

var effectManagers = {};

function setupEffects(managers, callback)
{
	var ports;

	// setup all necessary effect managers
	for (var key in effectManagers)
	{
		var manager = effectManagers[key];

		if (manager.isForeign)
		{
			ports = ports || {};
			ports[key] = manager.tag === 'cmd'
				? setupOutgoingPort(key)
				: setupIncomingPort(key, callback);
		}

		managers[key] = makeManager(manager, callback);
	}

	return ports;
}

function makeManager(info, callback)
{
	var router = {
		main: callback,
		self: undefined
	};

	var tag = info.tag;
	var onEffects = info.onEffects;
	var onSelfMsg = info.onSelfMsg;

	function onMessage(msg, state)
	{
		if (msg.ctor === 'self')
		{
			return A3(onSelfMsg, router, msg._0, state);
		}

		var fx = msg._0;
		switch (tag)
		{
			case 'cmd':
				return A3(onEffects, router, fx.cmds, state);

			case 'sub':
				return A3(onEffects, router, fx.subs, state);

			case 'fx':
				return A4(onEffects, router, fx.cmds, fx.subs, state);
		}
	}

	var process = spawnLoop(info.init, onMessage);
	router.self = process;
	return process;
}

function sendToApp(router, msg)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		router.main(msg);
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sendToSelf(router, msg)
{
	return A2(_elm_lang$core$Native_Scheduler.send, router.self, {
		ctor: 'self',
		_0: msg
	});
}


// HELPER for STATEFUL LOOPS

function spawnLoop(init, onMessage)
{
	var andThen = _elm_lang$core$Native_Scheduler.andThen;

	function loop(state)
	{
		var handleMsg = _elm_lang$core$Native_Scheduler.receive(function(msg) {
			return onMessage(msg, state);
		});
		return A2(andThen, loop, handleMsg);
	}

	var task = A2(andThen, loop, init);

	return _elm_lang$core$Native_Scheduler.rawSpawn(task);
}


// BAGS

function leaf(home)
{
	return function(value)
	{
		return {
			type: 'leaf',
			home: home,
			value: value
		};
	};
}

function batch(list)
{
	return {
		type: 'node',
		branches: list
	};
}

function map(tagger, bag)
{
	return {
		type: 'map',
		tagger: tagger,
		tree: bag
	}
}


// PIPE BAGS INTO EFFECT MANAGERS

function dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	gatherEffects(true, cmdBag, effectsDict, null);
	gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		var fx = home in effectsDict
			? effectsDict[home]
			: {
				cmds: _elm_lang$core$Native_List.Nil,
				subs: _elm_lang$core$Native_List.Nil
			};

		_elm_lang$core$Native_Scheduler.rawSend(managers[home], { ctor: 'fx', _0: fx });
	}
}

function gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.type)
	{
		case 'leaf':
			var home = bag.home;
			var effect = toEffect(isCmd, home, taggers, bag.value);
			effectsDict[home] = insert(isCmd, effect, effectsDict[home]);
			return;

		case 'node':
			var list = bag.branches;
			while (list.ctor !== '[]')
			{
				gatherEffects(isCmd, list._0, effectsDict, taggers);
				list = list._1;
			}
			return;

		case 'map':
			gatherEffects(isCmd, bag.tree, effectsDict, {
				tagger: bag.tagger,
				rest: taggers
			});
			return;
	}
}

function toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		var temp = taggers;
		while (temp)
		{
			x = temp.tagger(x);
			temp = temp.rest;
		}
		return x;
	}

	var map = isCmd
		? effectManagers[home].cmdMap
		: effectManagers[home].subMap;

	return A2(map, applyTaggers, value)
}

function insert(isCmd, newEffect, effects)
{
	effects = effects || {
		cmds: _elm_lang$core$Native_List.Nil,
		subs: _elm_lang$core$Native_List.Nil
	};
	if (isCmd)
	{
		effects.cmds = _elm_lang$core$Native_List.Cons(newEffect, effects.cmds);
		return effects;
	}
	effects.subs = _elm_lang$core$Native_List.Cons(newEffect, effects.subs);
	return effects;
}


// PORTS

function checkPortName(name)
{
	if (name in effectManagers)
	{
		throw new Error('There can only be one port named `' + name + '`, but your program has multiple.');
	}
}


// OUTGOING PORTS

function outgoingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'cmd',
		cmdMap: outgoingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var outgoingPortMap = F2(function cmdMap(tagger, value) {
	return value;
});

function setupOutgoingPort(name)
{
	var subs = [];
	var converter = effectManagers[name].converter;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function onEffects(router, cmdList, state)
	{
		while (cmdList.ctor !== '[]')
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = converter(cmdList._0);
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
			cmdList = cmdList._1;
		}
		return init;
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}


// INCOMING PORTS

function incomingPort(name, converter)
{
	checkPortName(name);
	effectManagers[name] = {
		tag: 'sub',
		subMap: incomingPortMap,
		converter: converter,
		isForeign: true
	};
	return leaf(name);
}

var incomingPortMap = F2(function subMap(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});

function setupIncomingPort(name, callback)
{
	var sentBeforeInit = [];
	var subs = _elm_lang$core$Native_List.Nil;
	var converter = effectManagers[name].converter;
	var currentOnEffects = preInitOnEffects;
	var currentSend = preInitSend;

	// CREATE MANAGER

	var init = _elm_lang$core$Native_Scheduler.succeed(null);

	function preInitOnEffects(router, subList, state)
	{
		var postInitResult = postInitOnEffects(router, subList, state);

		for(var i = 0; i < sentBeforeInit.length; i++)
		{
			postInitSend(sentBeforeInit[i]);
		}

		sentBeforeInit = null; // to release objects held in queue
		currentSend = postInitSend;
		currentOnEffects = postInitOnEffects;
		return postInitResult;
	}

	function postInitOnEffects(router, subList, state)
	{
		subs = subList;
		return init;
	}

	function onEffects(router, subList, state)
	{
		return currentOnEffects(router, subList, state);
	}

	effectManagers[name].init = init;
	effectManagers[name].onEffects = F3(onEffects);

	// PUBLIC API

	function preInitSend(value)
	{
		sentBeforeInit.push(value);
	}

	function postInitSend(value)
	{
		var temp = subs;
		while (temp.ctor !== '[]')
		{
			callback(temp._0(value));
			temp = temp._1;
		}
	}

	function send(incomingValue)
	{
		var result = A2(_elm_lang$core$Json_Decode$decodeValue, converter, incomingValue);
		if (result.ctor === 'Err')
		{
			throw new Error('Trying to send an unexpected type of value through port `' + name + '`:\n' + result._0);
		}

		currentSend(result._0);
	}

	return { send: send };
}

return {
	// routers
	sendToApp: F2(sendToApp),
	sendToSelf: F2(sendToSelf),

	// global setup
	effectManagers: effectManagers,
	outgoingPort: outgoingPort,
	incomingPort: incomingPort,

	htmlToProgram: htmlToProgram,
	program: program,
	programWithFlags: programWithFlags,
	initialize: initialize,

	// effect bags
	leaf: leaf,
	batch: batch,
	map: F2(map)
};

}();

//import Native.Utils //

var _elm_lang$core$Native_Scheduler = function() {

var MAX_STEPS = 10000;


// TASKS

function succeed(value)
{
	return {
		ctor: '_Task_succeed',
		value: value
	};
}

function fail(error)
{
	return {
		ctor: '_Task_fail',
		value: error
	};
}

function nativeBinding(callback)
{
	return {
		ctor: '_Task_nativeBinding',
		callback: callback,
		cancel: null
	};
}

function andThen(callback, task)
{
	return {
		ctor: '_Task_andThen',
		callback: callback,
		task: task
	};
}

function onError(callback, task)
{
	return {
		ctor: '_Task_onError',
		callback: callback,
		task: task
	};
}

function receive(callback)
{
	return {
		ctor: '_Task_receive',
		callback: callback
	};
}


// PROCESSES

function rawSpawn(task)
{
	var process = {
		ctor: '_Process',
		id: _elm_lang$core$Native_Utils.guid(),
		root: task,
		stack: null,
		mailbox: []
	};

	enqueue(process);

	return process;
}

function spawn(task)
{
	return nativeBinding(function(callback) {
		var process = rawSpawn(task);
		callback(succeed(process));
	});
}

function rawSend(process, msg)
{
	process.mailbox.push(msg);
	enqueue(process);
}

function send(process, msg)
{
	return nativeBinding(function(callback) {
		rawSend(process, msg);
		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function kill(process)
{
	return nativeBinding(function(callback) {
		var root = process.root;
		if (root.ctor === '_Task_nativeBinding' && root.cancel)
		{
			root.cancel();
		}

		process.root = null;

		callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}

function sleep(time)
{
	return nativeBinding(function(callback) {
		var id = setTimeout(function() {
			callback(succeed(_elm_lang$core$Native_Utils.Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}


// STEP PROCESSES

function step(numSteps, process)
{
	while (numSteps < MAX_STEPS)
	{
		var ctor = process.root.ctor;

		if (ctor === '_Task_succeed')
		{
			while (process.stack && process.stack.ctor === '_Task_onError')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_fail')
		{
			while (process.stack && process.stack.ctor === '_Task_andThen')
			{
				process.stack = process.stack.rest;
			}
			if (process.stack === null)
			{
				break;
			}
			process.root = process.stack.callback(process.root.value);
			process.stack = process.stack.rest;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_andThen')
		{
			process.stack = {
				ctor: '_Task_andThen',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_onError')
		{
			process.stack = {
				ctor: '_Task_onError',
				callback: process.root.callback,
				rest: process.stack
			};
			process.root = process.root.task;
			++numSteps;
			continue;
		}

		if (ctor === '_Task_nativeBinding')
		{
			process.root.cancel = process.root.callback(function(newRoot) {
				process.root = newRoot;
				enqueue(process);
			});

			break;
		}

		if (ctor === '_Task_receive')
		{
			var mailbox = process.mailbox;
			if (mailbox.length === 0)
			{
				break;
			}

			process.root = process.root.callback(mailbox.shift());
			++numSteps;
			continue;
		}

		throw new Error(ctor);
	}

	if (numSteps < MAX_STEPS)
	{
		return numSteps + 1;
	}
	enqueue(process);

	return numSteps;
}


// WORK QUEUE

var working = false;
var workQueue = [];

function enqueue(process)
{
	workQueue.push(process);

	if (!working)
	{
		setTimeout(work, 0);
		working = true;
	}
}

function work()
{
	var numSteps = 0;
	var process;
	while (numSteps < MAX_STEPS && (process = workQueue.shift()))
	{
		if (process.root)
		{
			numSteps = step(numSteps, process);
		}
	}
	if (!process)
	{
		working = false;
		return;
	}
	setTimeout(work, 0);
}


return {
	succeed: succeed,
	fail: fail,
	nativeBinding: nativeBinding,
	andThen: F2(andThen),
	onError: F2(onError),
	receive: receive,

	spawn: spawn,
	kill: kill,
	sleep: sleep,
	send: F2(send),

	rawSpawn: rawSpawn,
	rawSend: rawSend
};

}();
var _elm_lang$core$Platform_Cmd$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Cmd$none = _elm_lang$core$Platform_Cmd$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Cmd_ops = _elm_lang$core$Platform_Cmd_ops || {};
_elm_lang$core$Platform_Cmd_ops['!'] = F2(
	function (model, commands) {
		return {
			ctor: '_Tuple2',
			_0: model,
			_1: _elm_lang$core$Platform_Cmd$batch(commands)
		};
	});
var _elm_lang$core$Platform_Cmd$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Cmd$Cmd = {ctor: 'Cmd'};

var _elm_lang$core$Platform_Sub$batch = _elm_lang$core$Native_Platform.batch;
var _elm_lang$core$Platform_Sub$none = _elm_lang$core$Platform_Sub$batch(
	{ctor: '[]'});
var _elm_lang$core$Platform_Sub$map = _elm_lang$core$Native_Platform.map;
var _elm_lang$core$Platform_Sub$Sub = {ctor: 'Sub'};

var _elm_lang$core$Platform$hack = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Platform$sendToSelf = _elm_lang$core$Native_Platform.sendToSelf;
var _elm_lang$core$Platform$sendToApp = _elm_lang$core$Native_Platform.sendToApp;
var _elm_lang$core$Platform$programWithFlags = _elm_lang$core$Native_Platform.programWithFlags;
var _elm_lang$core$Platform$program = _elm_lang$core$Native_Platform.program;
var _elm_lang$core$Platform$Program = {ctor: 'Program'};
var _elm_lang$core$Platform$Task = {ctor: 'Task'};
var _elm_lang$core$Platform$ProcessId = {ctor: 'ProcessId'};
var _elm_lang$core$Platform$Router = {ctor: 'Router'};

var _elm_community$basics_extra$Basics_Extra$turnsPerRadian = 1 / _elm_lang$core$Basics$turns(1);
var _elm_community$basics_extra$Basics_Extra$inTurns = function (angle) {
	return angle * _elm_community$basics_extra$Basics_Extra$turnsPerRadian;
};
var _elm_community$basics_extra$Basics_Extra$inRadians = _elm_lang$core$Basics$identity;
var _elm_community$basics_extra$Basics_Extra$degreesPerRadian = 1 / _elm_lang$core$Basics$degrees(1);
var _elm_community$basics_extra$Basics_Extra$inDegrees = function (angle) {
	return angle * _elm_community$basics_extra$Basics_Extra$degreesPerRadian;
};
var _elm_community$basics_extra$Basics_Extra$fmod = F2(
	function (f, n) {
		var integer = _elm_lang$core$Basics$floor(f);
		return (_elm_lang$core$Basics$toFloat(
			A2(_elm_lang$core$Basics_ops['%'], integer, n)) + f) - _elm_lang$core$Basics$toFloat(integer);
	});
var _elm_community$basics_extra$Basics_Extra$maxSafeInteger = Math.pow(2, 53) - 1;
var _elm_community$basics_extra$Basics_Extra$minSafeInteger = 0 - _elm_community$basics_extra$Basics_Extra$maxSafeInteger;
var _elm_community$basics_extra$Basics_Extra$isSafeInteger = function (number) {
	return (_elm_lang$core$Native_Utils.cmp(_elm_community$basics_extra$Basics_Extra$minSafeInteger, number) < 1) && (_elm_lang$core$Native_Utils.cmp(_elm_community$basics_extra$Basics_Extra$maxSafeInteger, number) > -1);
};
var _elm_community$basics_extra$Basics_Extra$swap = function (_p0) {
	var _p1 = _p0;
	return {ctor: '_Tuple2', _0: _p1._1, _1: _p1._0};
};
var _elm_community$basics_extra$Basics_Extra_ops = _elm_community$basics_extra$Basics_Extra_ops || {};
_elm_community$basics_extra$Basics_Extra_ops['=>'] = F2(
	function (v0, v1) {
		return {ctor: '_Tuple2', _0: v0, _1: v1};
	});


/*
 * Copyright (c) 2010 Mozilla Corporation
 * Copyright (c) 2010 Vladimir Vukicevic
 * Copyright (c) 2013 John Mayer
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/*
 * File: mjs
 *
 * Vector and Matrix math utilities for JavaScript, optimized for WebGL.
 * Edited to work with the Elm Programming Language
 */

var _elm_community$linear_algebra$Native_MJS = function() {


    /*
     * Constant: MJS_VERSION
     *
     * mjs version number aa.bb.cc, encoded as an integer of the form:
     * 0xaabbcc.
     */
    var MJS_VERSION = 0x000000;

    /*
     * Constant: MJS_DO_ASSERT
     *
     * Enables or disables runtime assertions.
     *
     * For potentially more performance, the assert methods can be
     * commented out in each place where they are called.
     */
    // var MJS_DO_ASSERT = false;

    /*
     * Constant: MJS_FLOAT_ARRAY_TYPE
     *
     * The base float array type.  By default, WebGLFloatArray.
     *
     * mjs can work with any array-like elements, but if an array
     * creation is requested, it will create an array of the type
     * MJS_FLOAT_ARRAY_TYPE.  Also, the builtin constants such as (M4x4.I)
     * will be of this type.
     */
    //MJS_FLOAT_ARRAY_TYPE = WebGLFloatArray;
    //MJS_FLOAT_ARRAY_TYPE = Float32Array;
    var MJS_FLOAT_ARRAY_TYPE = Float64Array;
    //MJS_FLOAT_ARRAY_TYPE = Array;

    /*
    if (MJS_DO_ASSERT) {
        function MathUtils_assert(cond, msg) {
            if (!cond) {
                throw "Assertion failed: " + msg;
            }
        }
    } else {
    */
        function MathUtils_assert() { }
    //}

    /*
     * Class: V3
     *
     * Methods for working with 3-element vectors.  A vector is represented by a 3-element array.
     * Any valid JavaScript array type may be used, but if new
     * vectors are created they are created using the configured MJS_FLOAT_ARRAY_TYPE.
     */

    var V3 = { };

    V3._temp1 = new MJS_FLOAT_ARRAY_TYPE(3);
    V3._temp2 = new MJS_FLOAT_ARRAY_TYPE(3);
    V3._temp3 = new MJS_FLOAT_ARRAY_TYPE(3);

    if (MJS_FLOAT_ARRAY_TYPE == Array) {
        V3.x = [1.0, 0.0, 0.0];
        V3.y = [0.0, 1.0, 0.0];
        V3.z = [0.0, 0.0, 1.0];

        V3.$ = function V3_$(x, y, z) {
            return [x, y, z];
        };
    } else {
        V3.x = new MJS_FLOAT_ARRAY_TYPE([1.0, 0.0, 0.0]);
        V3.y = new MJS_FLOAT_ARRAY_TYPE([0.0, 1.0, 0.0]);
        V3.z = new MJS_FLOAT_ARRAY_TYPE([0.0, 0.0, 1.0]);

        /*
         * Function: V3.$
         *
         * Creates a new 3-element vector with the given values.
         *
         * Parameters:
         *
         *   x,y,z - the 3 elements of the new vector.
         *
         * Returns:
         *
         * A new vector containing with the given argument values.
         */

        V3.$ = function V3_$(x, y, z) {
            return new MJS_FLOAT_ARRAY_TYPE([x, y, z]);
        };
    }

    V3.u = V3.x;
    V3.v = V3.y;

    V3.getX = function V3_getX(a) {
        return a[0];
    }
    V3.getY = function V3_getY(a) {
        return a[1];
    }
    V3.getZ = function V3_getZ(a) {
        return a[2];
    }
    V3.setX = function V3_setX(x, a) {
        return new MJS_FLOAT_ARRAY_TYPE([x, a[1], a[2]]);
    }
    V3.setY = function V3_setY(y, a) {
        return new MJS_FLOAT_ARRAY_TYPE([a[0], y, a[2]]);
    }
    V3.setZ = function V3_setZ(z, a) {
        return new MJS_FLOAT_ARRAY_TYPE([a[0], a[1], z]);
    }

    V3.toTuple3 = function V3_toTuple3(a) {
      return {
        ctor:"_Tuple3",
        _0:a[0],
        _1:a[1],
        _2:a[2]
      };
    };
    V3.fromTuple3 = function V3_fromTuple3(t) {
      return new MJS_FLOAT_ARRAY_TYPE([t._0, t._1, t._2]);
    };

    V3.toRecord3 = function V3_toRecord3(a) {
      return {
        _:{},
        x:a[0],
        y:a[1],
        z:a[2]
      };
    };
    V3.fromRecord3 = function V3_fromRecord3(r) {
      return new MJS_FLOAT_ARRAY_TYPE([r.x, r.y, r.z]);
    };

    /*
     * Function: V3.add
     *
     * Perform r = a + b.
     *
     * Parameters:
     *
     *   a - the first vector operand
     *   b - the second vector operand
     *   r - optional vector to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 3-element vector with the result.
     */
    V3.add = function V3_add(a, b, r) {
        //MathUtils_assert(a.length == 3, "a.length == 3");
        //MathUtils_assert(b.length == 3, "b.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);
        r[0] = a[0] + b[0];
        r[1] = a[1] + b[1];
        r[2] = a[2] + b[2];
        return r;
    };

    /*
     * Function: V3.sub
     *
     * Perform
     * r = a - b.
     *
     * Parameters:
     *
     *   a - the first vector operand
     *   b - the second vector operand
     *   r - optional vector to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 3-element vector with the result.
     */
    V3.sub = function V3_sub(a, b, r) {
        //MathUtils_assert(a.length == 3, "a.length == 3");
        //MathUtils_assert(b.length == 3, "b.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);
        r[0] = a[0] - b[0];
        r[1] = a[1] - b[1];
        r[2] = a[2] - b[2];
        return r;
    };

    /*
     * Function: V3.neg
     *
     * Perform
     * r = - a.
     *
     * Parameters:
     *
     *   a - the vector operand
     *   r - optional vector to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 3-element vector with the result.
     */
    V3.neg = function V3_neg(a, r) {
        //MathUtils_assert(a.length == 3, "a.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);
        r[0] = - a[0];
        r[1] = - a[1];
        r[2] = - a[2];
        return r;
    };

    /*
     * Function: V3.direction
     *
     * Perform
     * r = (a - b) / |a - b|.  The result is the normalized
     * direction from a to b.
     *
     * Parameters:
     *
     *   a - the first vector operand
     *   b - the second vector operand
     *   r - optional vector to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 3-element vector with the result.
     */
    V3.direction = function V3_direction(a, b, r) {
        //MathUtils_assert(a.length == 3, "a.length == 3");
        //MathUtils_assert(b.length == 3, "b.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);
        return V3.normalize(V3.sub(a, b, r), r);
    };

    /*
     * Function: V3.length
     *
     * Perform r = |a|.
     *
     * Parameters:
     *
     *   a - the vector operand
     *
     * Returns:
     *
     *   The length of the given vector.
     */
    V3.length = function V3_length(a) {
        //MathUtils_assert(a.length == 3, "a.length == 3");

        return Math.sqrt(a[0]*a[0] + a[1]*a[1] + a[2]*a[2]);
    };

    /*
     * Function: V3.lengthSquard
     *
     * Perform r = |a|*|a|.
     *
     * Parameters:
     *
     *   a - the vector operand
     *
     * Returns:
     *
     *   The square of the length of the given vector.
     */
    V3.lengthSquared = function V3_lengthSquared(a) {
        //MathUtils_assert(a.length == 3, "a.length == 3");

        return a[0]*a[0] + a[1]*a[1] + a[2]*a[2];
    };

    V3.distance = function V3_distance(a, b) {
        var dx = a[0] - b[0];
        var dy = a[1] - b[1];
        var dz = a[2] - b[2];
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    };

    V3.distanceSquared = function V3_distanceSquared(a, b) {
        var dx = a[0] - b[0];
        var dy = a[1] - b[1];
        var dz = a[2] - b[2];
        return dx * dx + dy * dy + dz * dz;
    };

    /*
     * Function: V3.normalize
     *
     * Perform r = a / |a|.
     *
     * Parameters:
     *
     *   a - the vector operand
     *   r - optional vector to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 3-element vector with the result.
     */
    V3.normalize = function V3_normalize(a, r) {
        //MathUtils_assert(a.length == 3, "a.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);
        var im = 1.0 / V3.length(a);
        r[0] = a[0] * im;
        r[1] = a[1] * im;
        r[2] = a[2] * im;
        return r;
    };

    /*
     * Function: V3.scale
     *
     * Perform r = k * a.
     *
     * Parameters:
     *
     *   a - the vector operand
     *   k - a scalar value
     *   r - optional vector to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 3-element vector with the result.
     */
    V3.scale = function V3_scale(k, a, r) {
        //MathUtils_assert(a.length == 3, "a.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);
        r[0] = a[0] * k;
        r[1] = a[1] * k;
        r[2] = a[2] * k;
        return r;
    };

    /*
     * Function: V3.dot
     *
     * Perform
     * r = dot(a, b).
     *
     * Parameters:
     *
     *   a - the first vector operand
     *   b - the second vector operand
     *
     * Returns:
     *
     *   The dot product of a and b.
     */
    V3.dot = function V3_dot(a, b) {
        //MathUtils_assert(a.length == 3, "a.length == 3");
        //MathUtils_assert(b.length == 3, "b.length == 3");

        return a[0] * b[0] +
            a[1] * b[1] +
            a[2] * b[2];
    };

    /*
     * Function: V3.cross
     *
     * Perform r = a x b.
     *
     * Parameters:
     *
     *   a - the first vector operand
     *   b - the second vector operand
     *   r - optional vector to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 3-element vector with the result.
     */
    V3.cross = function V3_cross(a, b, r) {
        //MathUtils_assert(a.length == 3, "a.length == 3");
        //MathUtils_assert(b.length == 3, "b.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);
        r[0] = a[1]*b[2] - a[2]*b[1];
        r[1] = a[2]*b[0] - a[0]*b[2];
        r[2] = a[0]*b[1] - a[1]*b[0];
        return r;
    };

    /*
     * Function: V3.mul4x4
     *
     * Perform
     * r = m * v.
     *
     * Parameters:
     *
     *   m - the 4x4 matrix operand
     *   v - the 3-element vector operand
     *   r - optional vector to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 3-element vector with the result.
     *   The 4-element result vector is divided by the w component
     *   and returned as a 3-element vector.
     */
    V3.mul4x4 = function V3_mul4x4(m, v, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(v.length == 3, "v.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");

        var w;
        var tmp = V3._temp1;
        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);
        tmp[0] = m[ 3];
        tmp[1] = m[ 7];
        tmp[2] = m[11];
        w    =  V3.dot(v, tmp) + m[15];
        tmp[0] = m[ 0];
        tmp[1] = m[ 4];
        tmp[2] = m[ 8];
        r[0] = (V3.dot(v, tmp) + m[12])/w;
        tmp[0] = m[ 1];
        tmp[1] = m[ 5];
        tmp[2] = m[ 9];
        r[1] = (V3.dot(v, tmp) + m[13])/w;
        tmp[0] = m[ 2];
        tmp[1] = m[ 6];
        tmp[2] = m[10];
        r[2] = (V3.dot(v, tmp) + m[14])/w;
        return r;
    };

    /*
     * Class: M4x4
     *
     * Methods for working with 4x4 matrices.  A matrix is represented by a 16-element array
     * in column-major order.  Any valid JavaScript array type may be used, but if new
     * matrices are created they are created using the configured MJS_FLOAT_ARRAY_TYPE.
     */

    var M4x4 = { };

    M4x4._temp1 = new MJS_FLOAT_ARRAY_TYPE(16);
    M4x4._temp2 = new MJS_FLOAT_ARRAY_TYPE(16);

    if (MJS_FLOAT_ARRAY_TYPE == Array) {
        M4x4.I = [1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                0.0, 0.0, 0.0, 1.0];

        M4x4.$ = function M4x4_$(m00, m01, m02, m03,
                m04, m05, m06, m07,
                m08, m09, m10, m11,
                m12, m13, m14, m15)
        {
            return [m00, m01, m02, m03,
            m04, m05, m06, m07,
            m08, m09, m10, m11,
            m12, m13, m14, m15];
        };
    } else {
        M4x4.I = new MJS_FLOAT_ARRAY_TYPE([1.0, 0.0, 0.0, 0.0,
                0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                0.0, 0.0, 0.0, 1.0]);

        /*
         * Function: M4x4.$
         *
         * Creates a new 4x4 matrix with the given values.
         *
         * Parameters:
         *
         *   m00..m15 - the 16 elements of the new matrix.
         *
         * Returns:
         *
         * A new matrix filled with the given argument values.
         */
        M4x4.$ = function M4x4_$(m00, m01, m02, m03,
                m04, m05, m06, m07,
                m08, m09, m10, m11,
                m12, m13, m14, m15)
        {
            return new MJS_FLOAT_ARRAY_TYPE([m00, m01, m02, m03,
                    m04, m05, m06, m07,
                    m08, m09, m10, m11,
                    m12, m13, m14, m15]);
        };
    }

    M4x4.identity = M4x4.I;

    /*
     * Function: M4x4.fromList
     *
     * Creates a new 4x4 matrix with the given values.
     *
     * Parameters:
     *
     *   list - A list of the 16 elements of the new matrix.
     *
     * Returns:
     *
     * Just a new matrix filled with the given argument values.
     * Nothing, if the length of the list is not exactly 16.
     */
    M4x4.fromList = function(list) {
        var m = _elm_lang$core$Native_List.toArray(list);
        if (m.length === 16) {
            return _elm_lang$core$Maybe$Just(M4x4.$(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]));
        } else {
            return _elm_lang$core$Maybe$Nothing;
        }
    }

    /*
     * Function: M4x4.fromRecord
     *
     * Creates a new 4x4 matrix from the given record.
     *
     * Parameters:
     *
     * A record with m11..m44 attributes - the 16 elements of the new matrix
     *
     * Returns:
     *
     * A new matrix filled with the values from the given record.
     */
    M4x4.fromRecord = function(r) {
        return new MJS_FLOAT_ARRAY_TYPE([
            r.m11, r.m21, r.m31, r.m41,
            r.m12, r.m22, r.m32, r.m42,
            r.m13, r.m23, r.m33, r.m43,
            r.m14, r.m24, r.m34, r.m44
        ]);
    }

    /*
     * Function: M4x4.toRecord
     *
     * Creates a record from the given matrix
     *
     * Parameters:
     *
     * A 4x4 matrix
     *
     * Returns:
     *
     * A new record with m11..m44 attributes - the 16 elements of the given matrix
     */
    M4x4.toRecord = function(m) {
        return {
            m11: m[0], m21: m[1], m31: m[2], m41: m[3],
            m12: m[4], m22: m[5], m32: m[6], m42: m[7],
            m13: m[8], m23: m[9], m33: m[10], m43: m[11],
            m14: m[12], m24: m[13], m34: m[14], m44: m[15]
        };
    }

    /*
     * Function: M4x4.topLeft3x3
     *
     * Return the top left 3x3 matrix from the given 4x4 matrix m.
     *
     * Parameters:
     *
     *   m - the matrix
     *   r - optional 3x3 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 3x3 matrix with the result.
     */
    M4x4.topLeft3x3 = function M4x4_topLeft3x3(m, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 9, "r == undefined || r.length == 9");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(9);
        r[0] = m[0]; r[1] = m[1]; r[2] = m[2];
        r[3] = m[4]; r[4] = m[5]; r[5] = m[6];
        r[6] = m[8]; r[7] = m[9]; r[8] = m[10];
        return r;
    };

    /*
     * Function: M4x4.inverse
     *
     * Computes the inverse of the given matrix m.
     *
     * Parameters:
     *
     *   m - the matrix
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 4x4 matrix with the result.
     */
    M4x4.inverse = function M4x4_inverse(m, r) {
        if (r == undefined) {
            r = new MJS_FLOAT_ARRAY_TYPE(16);
        }

        r[0] = m[5] * m[10] * m[15] - m[5] * m[11] * m[14] - m[9] * m[6] * m[15] +
            m[9] * m[7] * m[14] + m[13] * m[6] * m[11] - m[13] * m[7] * m[10];
        r[4] = -m[4] * m[10] * m[15] + m[4] * m[11] * m[14] + m[8] * m[6] * m[15] -
            m[8] * m[7] * m[14] - m[12] * m[6] * m[11] + m[12] * m[7] * m[10];
        r[8] = m[4] * m[9] * m[15] - m[4] * m[11] * m[13] - m[8] * m[5] * m[15] +
            m[8] * m[7] * m[13] + m[12] * m[5] * m[11] - m[12] * m[7] * m[9];
        r[12] = -m[4] * m[9] * m[14] + m[4] * m[10] * m[13] + m[8] * m[5] * m[14] -
            m[8] * m[6] * m[13] - m[12] * m[5] * m[10] + m[12] * m[6] * m[9];
        r[1] = -m[1] * m[10] * m[15] + m[1] * m[11] * m[14] + m[9] * m[2] * m[15] -
            m[9] * m[3] * m[14] - m[13] * m[2] * m[11] + m[13] * m[3] * m[10];
        r[5] = m[0] * m[10] * m[15] - m[0] * m[11] * m[14] - m[8] * m[2] * m[15] +
            m[8] * m[3] * m[14] + m[12] * m[2] * m[11] - m[12] * m[3] * m[10];
        r[9] = -m[0] * m[9] * m[15] + m[0] * m[11] * m[13] + m[8] * m[1] * m[15] -
            m[8] * m[3] * m[13] - m[12] * m[1] * m[11] + m[12] * m[3] * m[9];
        r[13] = m[0] * m[9] * m[14] - m[0] * m[10] * m[13] - m[8] * m[1] * m[14] +
            m[8] * m[2] * m[13] + m[12] * m[1] * m[10] - m[12] * m[2] * m[9];
        r[2] = m[1] * m[6] * m[15] - m[1] * m[7] * m[14] - m[5] * m[2] * m[15] +
            m[5] * m[3] * m[14] + m[13] * m[2] * m[7] - m[13] * m[3] * m[6];
        r[6] = -m[0] * m[6] * m[15] + m[0] * m[7] * m[14] + m[4] * m[2] * m[15] -
            m[4] * m[3] * m[14] - m[12] * m[2] * m[7] + m[12] * m[3] * m[6];
        r[10] = m[0] * m[5] * m[15] - m[0] * m[7] * m[13] - m[4] * m[1] * m[15] +
            m[4] * m[3] * m[13] + m[12] * m[1] * m[7] - m[12] * m[3] * m[5];
        r[14] = -m[0] * m[5] * m[14] + m[0] * m[6] * m[13] + m[4] * m[1] * m[14] -
            m[4] * m[2] * m[13] - m[12] * m[1] * m[6] + m[12] * m[2] * m[5];
        r[3] = -m[1] * m[6] * m[11] + m[1] * m[7] * m[10] + m[5] * m[2] * m[11] -
            m[5] * m[3] * m[10] - m[9] * m[2] * m[7] + m[9] * m[3] * m[6];
        r[7] = m[0] * m[6] * m[11] - m[0] * m[7] * m[10] - m[4] * m[2] * m[11] +
            m[4] * m[3] * m[10] + m[8] * m[2] * m[7] - m[8] * m[3] * m[6];
        r[11] = -m[0] * m[5] * m[11] + m[0] * m[7] * m[9] + m[4] * m[1] * m[11] -
            m[4] * m[3] * m[9] - m[8] * m[1] * m[7] + m[8] * m[3] * m[5];
        r[15] = m[0] * m[5] * m[10] - m[0] * m[6] * m[9] - m[4] * m[1] * m[10] +
            m[4] * m[2] * m[9] + m[8] * m[1] * m[6] - m[8] * m[2] * m[5];

        var det = m[0] * r[0] + m[1] * r[4] + m[2] * r[8] + m[3] * r[12];

        if (det === 0) {
            return _elm_lang$core$Maybe$Nothing;
        }

        det = 1.0 / det;

        for (var i = 0; i < 16; i = i + 1) {
            r[i] = r[i] * det;
        }

        return _elm_lang$core$Maybe$Just(r);
    };

    /*
     * Function: M4x4.inverseOrthonormal
     *
     * Computes the inverse of the given matrix m, assuming that
     * the matrix is orthonormal.
     *
     * Parameters:
     *
     *   m - the matrix
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 4x4 matrix with the result.
     */
    M4x4.inverseOrthonormal = function M4x4_inverseOrthonormal(m, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");
        //MathUtils_assert(m != r, "m != r");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);
        M4x4.transpose(m, r);
        var t = [m[12], m[13], m[14]];
        r[3] = r[7] = r[11] = 0;
        r[12] = -V3.dot([r[0], r[4], r[8]], t);
        r[13] = -V3.dot([r[1], r[5], r[9]], t);
        r[14] = -V3.dot([r[2], r[6], r[10]], t);
        return r;
    };

    /*
     * Function: M4x4.inverseTo3x3
     *
     * Computes the inverse of the given matrix m, but calculates
     * only the top left 3x3 values of the result.
     *
     * Parameters:
     *
     *   m - the matrix
     *   r - optional 3x3 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 3x3 matrix with the result.
     */
    M4x4.inverseTo3x3 = function M4x4_inverseTo3x3(m, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 9, "r == undefined || r.length == 9");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(9);

        var a11 = m[10]*m[5]-m[6]*m[9],
            a21 = -m[10]*m[1]+m[2]*m[9],
            a31 = m[6]*m[1]-m[2]*m[5],
            a12 = -m[10]*m[4]+m[6]*m[8],
            a22 = m[10]*m[0]-m[2]*m[8],
            a32 = -m[6]*m[0]+m[2]*m[4],
            a13 = m[9]*m[4]-m[5]*m[8],
            a23 = -m[9]*m[0]+m[1]*m[8],
            a33 = m[5]*m[0]-m[1]*m[4];
        var det = m[0]*(a11) + m[1]*(a12) + m[2]*(a13);
        if (det == 0) // no inverse
            throw "matrix not invertible";
        var idet = 1.0 / det;

        r[0] = idet*a11;
        r[1] = idet*a21;
        r[2] = idet*a31;
        r[3] = idet*a12;
        r[4] = idet*a22;
        r[5] = idet*a32;
        r[6] = idet*a13;
        r[7] = idet*a23;
        r[8] = idet*a33;

        return r;
    };

    /*
     * Function: M4x4.makeFrustum
     *
     * Creates a matrix for a projection frustum with the given parameters.
     *
     * Parameters:
     *
     *   left - the left coordinate of the frustum
     *   right- the right coordinate of the frustum
     *   bottom - the bottom coordinate of the frustum
     *   top - the top coordinate of the frustum
     *   znear - the near z distance of the frustum
     *   zfar - the far z distance of the frustum
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after creating the projection matrix.
     *   Otherwise, returns a new 4x4 matrix.
     */
    M4x4.makeFrustum = function M4x4_makeFrustum(left, right, bottom, top, znear, zfar, r) {
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        var X = 2*znear/(right-left);
        var Y = 2*znear/(top-bottom);
        var A = (right+left)/(right-left);
        var B = (top+bottom)/(top-bottom);
        var C = -(zfar+znear)/(zfar-znear);
        var D = -2*zfar*znear/(zfar-znear);

        r[0] = 2*znear/(right-left);
        r[1] = 0;
        r[2] = 0;
        r[3] = 0;
        r[4] = 0;
        r[5] = 2*znear/(top-bottom);
        r[6] = 0;
        r[7] = 0;
        r[8] = (right+left)/(right-left);
        r[9] = (top+bottom)/(top-bottom);
        r[10] = -(zfar+znear)/(zfar-znear);
        r[11] = -1;
        r[12] = 0;
        r[13] = 0;
        r[14] = -2*zfar*znear/(zfar-znear);
        r[15] = 0;

        return r;
    };

    /*
     * Function: M4x4.makePerspective
     *
     * Creates a matrix for a perspective projection with the given parameters.
     *
     * Parameters:
     *
     *   fovy - field of view in the y axis, in degrees
     *   aspect - aspect ratio
     *   znear - the near z distance of the projection
     *   zfar - the far z distance of the projection
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after creating the projection matrix.
     *   Otherwise, returns a new 4x4 matrix.
     */
    M4x4.makePerspective = function M4x4_makePerspective (fovy, aspect, znear, zfar, r) {
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        var ymax = znear * Math.tan(fovy * Math.PI / 360.0);
        var ymin = -ymax;
        var xmin = ymin * aspect;
        var xmax = ymax * aspect;

        return M4x4.makeFrustum(xmin, xmax, ymin, ymax, znear, zfar, r);
    };

    /*
     * Function: M4x4.makeOrtho
     *
     * Creates a matrix for an orthogonal frustum projection with the given parameters.
     *
     * Parameters:
     *
     *   left - the left coordinate of the frustum
     *   right- the right coordinate of the frustum
     *   bottom - the bottom coordinate of the frustum
     *   top - the top coordinate of the frustum
     *   znear - the near z distance of the frustum
     *   zfar - the far z distance of the frustum
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after creating the projection matrix.
     *   Otherwise, returns a new 4x4 matrix.
     */
    M4x4.makeOrtho = function M4x4_makeOrtho (left, right, bottom, top, znear, zfar, r) {
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        var tX = -(right+left)/(right-left);
        var tY = -(top+bottom)/(top-bottom);
        var tZ = -(zfar+znear)/(zfar-znear);
        var X = 2 / (right-left);
        var Y = 2 / (top-bottom);
        var Z = -2 / (zfar-znear);

        r[0] = 2 / (right-left);
        r[1] = 0;
        r[2] = 0;
        r[3] = 0;
        r[4] = 0;
        r[5] = 2 / (top-bottom);
        r[6] = 0;
        r[7] = 0;
        r[8] = 0;
        r[9] = 0;
        r[10] = -2 / (zfar-znear);
        r[11] = 0;
        r[12] = -(right+left)/(right-left);
        r[13] = -(top+bottom)/(top-bottom);
        r[14] = -(zfar+znear)/(zfar-znear);
        r[15] = 1;

        return r;
    };

    /*
     * Function: M4x4.makeOrtho2D
     *
     * Creates a matrix for a 2D orthogonal frustum projection with the given parameters.
     * znear and zfar are assumed to be -1 and 1, respectively.
     *
     * Parameters:
     *
     *   left - the left coordinate of the frustum
     *   right- the right coordinate of the frustum
     *   bottom - the bottom coordinate of the frustum
     *   top - the top coordinate of the frustum
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after creating the projection matrix.
     *   Otherwise, returns a new 4x4 matrix.
     */
    M4x4.makeOrtho2D = function M4x4_makeOrtho2D (left, right, bottom, top, r) {
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        return M4x4.makeOrtho(left, right, bottom, top, -1, 1, r);
    };

    /*
     * Function: M4x4.mul
     *
     * Performs r = a * b.
     *
     * Parameters:
     *
     *   a - the first matrix operand
     *   b - the second matrix operand
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 4x4 matrix with the result.
     */
    M4x4.mul = function M4x4_mul(a, b, r) {
        //MathUtils_assert(a.length == 16, "a.length == 16");
        //MathUtils_assert(b.length == 16, "b.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");
        //MathUtils_assert(a != r && b != r, "a != r && b != r");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        var a11 = a[0];
        var a21 = a[1];
        var a31 = a[2];
        var a41 = a[3];
        var a12 = a[4];
        var a22 = a[5];
        var a32 = a[6];
        var a42 = a[7];
        var a13 = a[8];
        var a23 = a[9];
        var a33 = a[10];
        var a43 = a[11];
        var a14 = a[12];
        var a24 = a[13];
        var a34 = a[14];
        var a44 = a[15];

        var b11 = b[0];
        var b21 = b[1];
        var b31 = b[2];
        var b41 = b[3];
        var b12 = b[4];
        var b22 = b[5];
        var b32 = b[6];
        var b42 = b[7];
        var b13 = b[8];
        var b23 = b[9];
        var b33 = b[10];
        var b43 = b[11];
        var b14 = b[12];
        var b24 = b[13];
        var b34 = b[14];
        var b44 = b[15];

        r[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
        r[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
        r[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
        r[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
        r[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
        r[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
        r[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
        r[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
        r[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
        r[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
        r[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
        r[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
        r[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;
        r[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;
        r[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;
        r[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

        return r;
    };

    /*
     * Function: M4x4.mulAffine
     *
     * Performs r = a * b, assuming a and b are affine (elements 3,7,11,15 = 0,0,0,1)
     *
     * Parameters:
     *
     *   a - the first matrix operand
     *   b - the second matrix operand
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 4x4 matrix with the result.
     */
    M4x4.mulAffine = function M4x4_mulAffine(a, b, r) {
        //MathUtils_assert(a.length == 16, "a.length == 16");
        //MathUtils_assert(b.length == 16, "b.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");
        //MathUtils_assert(a != r && b != r, "a != r && b != r");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);
        var a11 = a[0];
        var a21 = a[1];
        var a31 = a[2];
        var a12 = a[4];
        var a22 = a[5];
        var a32 = a[6];
        var a13 = a[8];
        var a23 = a[9];
        var a33 = a[10];
        var a14 = a[12];
        var a24 = a[13];
        var a34 = a[14];

        var b11 = b[0];
        var b21 = b[1];
        var b31 = b[2];
        var b12 = b[4];
        var b22 = b[5];
        var b32 = b[6];
        var b13 = b[8];
        var b23 = b[9];
        var b33 = b[10];
        var b14 = b[12];
        var b24 = b[13];
        var b34 = b[14];

        r[0] = a11 * b11 + a12 * b21 + a13 * b31;
        r[1] = a21 * b11 + a22 * b21 + a23 * b31;
        r[2] = a31 * b11 + a32 * b21 + a33 * b31;
        r[3] = 0;
        r[4] = a11 * b12 + a12 * b22 + a13 * b32;
        r[5] = a21 * b12 + a22 * b22 + a23 * b32;
        r[6] = a31 * b12 + a32 * b22 + a33 * b32;
        r[7] = 0;
        r[8] = a11 * b13 + a12 * b23 + a13 * b33;
        r[9] = a21 * b13 + a22 * b23 + a23 * b33;
        r[10] = a31 * b13 + a32 * b23 + a33 * b33;
        r[11] = 0;
        r[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14;
        r[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24;
        r[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34;
        r[15] = 1;

        return r;
    };

    /*
     * Function: M4x4.makeRotate
     *
     * Creates a transformation matrix for rotation by angle radians about the 3-element vector axis.
     *
     * Parameters:
     *
     *   angle - the angle of rotation, in radians
     *   axis - the axis around which the rotation is performed, a 3-element vector
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after creating the matrix.
     *   Otherwise, returns a new 4x4 matrix with the result.
     */
    M4x4.makeRotate = function M4x4_makeRotate(angle, axis, r) {
        //MathUtils_assert(angle.length == 3, "angle.length == 3");
        //MathUtils_assert(axis.length == 3, "axis.length == 3");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        axis = V3.normalize(axis, V3._temp1);
        var x = axis[0], y = axis[1], z = axis[2];
        var c = Math.cos(angle);
        var c1 = 1-c;
        var s = Math.sin(angle);

        r[0] = x*x*c1+c;
        r[1] = y*x*c1+z*s;
        r[2] = z*x*c1-y*s;
        r[3] = 0;
        r[4] = x*y*c1-z*s;
        r[5] = y*y*c1+c;
        r[6] = y*z*c1+x*s;
        r[7] = 0;
        r[8] = x*z*c1+y*s;
        r[9] = y*z*c1-x*s;
        r[10] = z*z*c1+c;
        r[11] = 0;
        r[12] = 0;
        r[13] = 0;
        r[14] = 0;
        r[15] = 1;

        return r;
    };

    /*
     * Function: M4x4.rotate
     *
     * Concatenates a rotation of angle radians about the axis to the give matrix m.
     *
     * Parameters:
     *
     *   angle - the angle of rotation, in radians
     *   axis - the axis around which the rotation is performed, a 3-element vector
     *   m - the matrix to concatenate the rotation to
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after performing the operation.
     *   Otherwise, returns a new 4x4 matrix with the result.
     */
    M4x4.rotate = function M4x4_rotate(angle, axis, m, r) {
        //MathUtils_assert(angle.length == 3, "angle.length == 3");
        //MathUtils_assert(axis.length == 3, "axis.length == 3");
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);
        var a0=axis [0], a1=axis [1], a2=axis [2];
        var l = Math.sqrt(a0*a0 + a1*a1 + a2*a2);
        var x = a0, y = a1, z = a2;
        if (l != 1.0) {
            var im = 1.0 / l;
            x *= im;
            y *= im;
            z *= im;
        }
        var c = Math.cos(angle);
        var c1 = 1-c;
        var s = Math.sin(angle);
        var xs = x*s;
        var ys = y*s;
        var zs = z*s;
        var xyc1 = x * y * c1;
        var xzc1 = x * z * c1;
        var yzc1 = y * z * c1;

        var m11 = m[0];
        var m21 = m[1];
        var m31 = m[2];
        var m41 = m[3];
        var m12 = m[4];
        var m22 = m[5];
        var m32 = m[6];
        var m42 = m[7];
        var m13 = m[8];
        var m23 = m[9];
        var m33 = m[10];
        var m43 = m[11];

        var t11 = x * x * c1 + c;
        var t21 = xyc1 + zs;
        var t31 = xzc1 - ys;
        var t12 = xyc1 - zs;
        var t22 = y * y * c1 + c;
        var t32 = yzc1 + xs;
        var t13 = xzc1 + ys;
        var t23 = yzc1 - xs;
        var t33 = z * z * c1 + c;

        r[0] = m11 * t11 + m12 * t21 + m13 * t31;
        r[1] = m21 * t11 + m22 * t21 + m23 * t31;
        r[2] = m31 * t11 + m32 * t21 + m33 * t31;
        r[3] = m41 * t11 + m42 * t21 + m43 * t31;
        r[4] = m11 * t12 + m12 * t22 + m13 * t32;
        r[5] = m21 * t12 + m22 * t22 + m23 * t32;
        r[6] = m31 * t12 + m32 * t22 + m33 * t32;
        r[7] = m41 * t12 + m42 * t22 + m43 * t32;
        r[8] = m11 * t13 + m12 * t23 + m13 * t33;
        r[9] = m21 * t13 + m22 * t23 + m23 * t33;
        r[10] = m31 * t13 + m32 * t23 + m33 * t33;
        r[11] = m41 * t13 + m42 * t23 + m43 * t33;
        if (r != m) {
            r[12] = m[12];
            r[13] = m[13];
            r[14] = m[14];
            r[15] = m[15];
        }
        return r;
    };

    /*
     * Function: M4x4.makeScale3
     *
     * Creates a transformation matrix for scaling by 3 scalar values, one for
     * each of the x, y, and z directions.
     *
     * Parameters:
     *
     *   x - the scale for the x axis
     *   y - the scale for the y axis
     *   z - the scale for the z axis
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after creating the matrix.
     *   Otherwise, returns a new 4x4 matrix with the result.
     */
    M4x4.makeScale3 = function M4x4_makeScale3(x, y, z, r) {
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        r[0] = x;
        r[1] = 0;
        r[2] = 0;
        r[3] = 0;
        r[4] = 0;
        r[5] = y;
        r[6] = 0;
        r[7] = 0;
        r[8] = 0;
        r[9] = 0;
        r[10] = z;
        r[11] = 0;
        r[12] = 0;
        r[13] = 0;
        r[14] = 0;
        r[15] = 1;

        return r;
    };

    /*
     * Function: M4x4.makeScale1
     *
     * Creates a transformation matrix for a uniform scale by a single scalar value.
     *
     * Parameters:
     *
     *   k - the scale factor
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after creating the matrix.
     *   Otherwise, returns a new 4x4 matrix with the result.
     */
    M4x4.makeScale1 = function M4x4_makeScale1(k, r) {
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        return M4x4.makeScale3(k, k, k, r);
    };

    /*
     * Function: M4x4.makeScale
     *
     * Creates a transformation matrix for scaling each of the x, y, and z axes by the amount
     * given in the corresponding element of the 3-element vector.
     *
     * Parameters:
     *
     *   v - the 3-element vector containing the scale factors
     *   r - optional 4x4 matrix to store the result in
     *
     * Returns:
     *
     *   If r is specified, returns r after creating the matrix.
     *   Otherwise, returns a new 4x4 matrix with the result.
     */
    M4x4.makeScale = function M4x4_makeScale(v, r) {
        //MathUtils_assert(v.length == 3, "v.length == 3");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        return M4x4.makeScale3(v[0], v[1], v[2], r);
    };

    /*
     * Function: M4x4.scale3
     */
    M4x4.scale3 = function M4x4_scale3(x, y, z, m, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        if (r == m) {
            m[0] *= x;
            m[1] *= x;
            m[2] *= x;
            m[3] *= x;
            m[4] *= y;
            m[5] *= y;
            m[6] *= y;
            m[7] *= y;
            m[8] *= z;
            m[9] *= z;
            m[10] *= z;
            m[11] *= z;
            return m;
        }

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        r[0] = m[0] * x;
        r[1] = m[1] * x;
        r[2] = m[2] * x;
        r[3] = m[3] * x;
        r[4] = m[4] * y;
        r[5] = m[5] * y;
        r[6] = m[6] * y;
        r[7] = m[7] * y;
        r[8] = m[8] * z;
        r[9] = m[9] * z;
        r[10] = m[10] * z;
        r[11] = m[11] * z;
        r[12] = m[12];
        r[13] = m[13];
        r[14] = m[14];
        r[15] = m[15];

        return r;
    };

    /*
     * Function: M4x4.scale1
     */
    M4x4.scale1 = function M4x4_scale1(k, m, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");
        if (r == m) {
            m[0] *= k;
            m[1] *= k;
            m[2] *= k;
            m[3] *= k;
            m[4] *= k;
            m[5] *= k;
            m[6] *= k;
            m[7] *= k;
            m[8] *= k;
            m[9] *= k;
            m[10] *= k;
            m[11] *= k;
            return m;
        }


        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        r[0] = m[0] * k;
        r[1] = m[1] * k;
        r[2] = m[2] * k;
        r[3] = m[3] * k;
        r[4] = m[4] * k;
        r[5] = m[5] * k;
        r[6] = m[6] * k;
        r[7] = m[7] * k;
        r[8] = m[8] * k;
        r[9] = m[9] * k;
        r[10] = m[10] * k;
        r[11] = m[11] * k;
        r[12] = m[12];
        r[13] = m[13];
        r[14] = m[14];
        r[15] = m[15];

        return r;
    };

    /*
     * Function: M4x4.scale1
     */
    M4x4.scale = function M4x4_scale(v, m, r) {
        //MathUtils_assert(v.length == 3, "v.length == 3");
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");
        var x = v[0], y = v[1], z = v[2];

        if (r == m) {
            m[0] *= x;
            m[1] *= x;
            m[2] *= x;
            m[3] *= x;
            m[4] *= y;
            m[5] *= y;
            m[6] *= y;
            m[7] *= y;
            m[8] *= z;
            m[9] *= z;
            m[10] *= z;
            m[11] *= z;
            return m;
        }

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);


        r[0] = m[0] * x;
        r[1] = m[1] * x;
        r[2] = m[2] * x;
        r[3] = m[3] * x;
        r[4] = m[4] * y;
        r[5] = m[5] * y;
        r[6] = m[6] * y;
        r[7] = m[7] * y;
        r[8] = m[8] * z;
        r[9] = m[9] * z;
        r[10] = m[10] * z;
        r[11] = m[11] * z;
        r[12] = m[12];
        r[13] = m[13];
        r[14] = m[14];
        r[15] = m[15];

        return r;
    };

    /*
     * Function: M4x4.makeTranslate3
     */
    M4x4.makeTranslate3 = function M4x4_makeTranslate3(x, y, z, r) {
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        r[0] = 1;
        r[1] = 0;
        r[2] = 0;
        r[3] = 0;
        r[4] = 0;
        r[5] = 1;
        r[6] = 0;
        r[7] = 0;
        r[8] = 0;
        r[9] = 0;
        r[10] = 1;
        r[11] = 0;
        r[12] = x;
        r[13] = y;
        r[14] = z;
        r[15] = 1;

        return r;
    };

    /*
     * Function: M4x4.makeTranslate1
     */
    M4x4.makeTranslate1 = function M4x4_makeTranslate1 (k, r) {
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        return M4x4.makeTranslate3(k, k, k, r);
    };

    /*
     * Function: M4x4.makeTranslate
     */
    M4x4.makeTranslate = function M4x4_makeTranslate (v, r) {
        //MathUtils_assert(v.length == 3, "v.length == 3");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        return M4x4.makeTranslate3(v[0], v[1], v[2], r);
    };

    /*
     * Function: M4x4.translate3Self
     */
    M4x4.translate3Self = function M4x4_translate3Self (x, y, z, m) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");
        m[12] += m[0] * x + m[4] * y + m[8] * z;
        m[13] += m[1] * x + m[5] * y + m[9] * z;
        m[14] += m[2] * x + m[6] * y + m[10] * z;
        m[15] += m[3] * x + m[7] * y + m[11] * z;
        return m;
    };

    /*
     * Function: M4x4.translate3
     */
    M4x4.translate3 = function M4x4_translate3 (x, y, z, m, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        if (r == m) {
            m[12] += m[0] * x + m[4] * y + m[8] * z;
            m[13] += m[1] * x + m[5] * y + m[9] * z;
            m[14] += m[2] * x + m[6] * y + m[10] * z;
            m[15] += m[3] * x + m[7] * y + m[11] * z;
            return m;
        }

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        var m11 = m[0];
        var m21 = m[1];
        var m31 = m[2];
        var m41 = m[3];
        var m12 = m[4];
        var m22 = m[5];
        var m32 = m[6];
        var m42 = m[7];
        var m13 = m[8];
        var m23 = m[9];
        var m33 = m[10];
        var m43 = m[11];


        r[0] = m11;
        r[1] = m21;
        r[2] = m31;
        r[3] = m41;
        r[4] = m12;
        r[5] = m22;
        r[6] = m32;
        r[7] = m42;
        r[8] = m13;
        r[9] = m23;
        r[10] = m33;
        r[11] = m43;
        r[12] = m11 * x + m12 * y + m13 * z + m[12];
        r[13] = m21 * x + m22 * y + m23 * z + m[13];
        r[14] = m31 * x + m32 * y + m33 * z + m[14];
        r[15] = m41 * x + m42 * y + m43 * z + m[15];

        return r;
    };

    /*
     * Function: M4x4.translate1
     */
    M4x4.translate1 = function M4x4_translate1 (k, m, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        return M4x4.translate3(k, k, k, m, r);
    };
    /*
     * Function: M4x4.translateSelf
     */
    M4x4.translateSelf = function M4x4_translateSelf (v, m) {
        //MathUtils_assert(v.length == 3, "v.length == 3");
        //MathUtils_assert(m.length == 16, "m.length == 16");
        var x=v[0], y=v[1], z=v[2];
        m[12] += m[0] * x + m[4] * y + m[8] * z;
        m[13] += m[1] * x + m[5] * y + m[9] * z;
        m[14] += m[2] * x + m[6] * y + m[10] * z;
        m[15] += m[3] * x + m[7] * y + m[11] * z;
        return m;
    };
    /*
     * Function: M4x4.translate
     */
    M4x4.translate = function M4x4_translate (v, m, r) {
        //MathUtils_assert(v.length == 3, "v.length == 3");
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");
        var x=v[0], y=v[1], z=v[2];
        if (r == m) {
            m[12] += m[0] * x + m[4] * y + m[8] * z;
            m[13] += m[1] * x + m[5] * y + m[9] * z;
            m[14] += m[2] * x + m[6] * y + m[10] * z;
            m[15] += m[3] * x + m[7] * y + m[11] * z;
            return m;
        }

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        var m11 = m[0];
        var m21 = m[1];
        var m31 = m[2];
        var m41 = m[3];
        var m12 = m[4];
        var m22 = m[5];
        var m32 = m[6];
        var m42 = m[7];
        var m13 = m[8];
        var m23 = m[9];
        var m33 = m[10];
        var m43 = m[11];

        r[0] = m11;
        r[1] = m21;
        r[2] = m31;
        r[3] = m41;
        r[4] = m12;
        r[5] = m22;
        r[6] = m32;
        r[7] = m42;
        r[8] = m13;
        r[9] = m23;
        r[10] = m33;
        r[11] = m43;
        r[12] = m11 * x + m12 * y + m13 * z + m[12];
        r[13] = m21 * x + m22 * y + m23 * z + m[13];
        r[14] = m31 * x + m32 * y + m33 * z + m[14];
        r[15] = m41 * x + m42 * y + m43 * z + m[15];

        return r;
    };

    /*
     * Function: M4x4.makeLookAt
     */
    M4x4.makeLookAt = function M4x4_makeLookAt (eye, center, up, r) {
        //MathUtils_assert(eye.length == 3, "eye.length == 3");
        //MathUtils_assert(center.length == 3, "center.length == 3");
        //MathUtils_assert(up.length == 3, "up.length == 3");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        var z = V3.direction(eye, center, V3._temp1);
        var x = V3.normalize(V3.cross(up, z, V3._temp2), V3._temp2);
        var y = V3.normalize(V3.cross(z, x, V3._temp3), V3._temp3);

        var tm1 = M4x4._temp1;
        var tm2 = M4x4._temp2;

        tm1[0] = x[0];
        tm1[1] = y[0];
        tm1[2] = z[0];
        tm1[3] = 0;
        tm1[4] = x[1];
        tm1[5] = y[1];
        tm1[6] = z[1];
        tm1[7] = 0;
        tm1[8] = x[2];
        tm1[9] = y[2];
        tm1[10] = z[2];
        tm1[11] = 0;
        tm1[12] = 0;
        tm1[13] = 0;
        tm1[14] = 0;
        tm1[15] = 1;

        tm2[0] = 1; tm2[1] = 0; tm2[2] = 0; tm2[3] = 0;
        tm2[4] = 0; tm2[5] = 1; tm2[6] = 0; tm2[7] = 0;
        tm2[8] = 0; tm2[9] = 0; tm2[10] = 1; tm2[11] = 0;
        tm2[12] = -eye[0]; tm2[13] = -eye[1]; tm2[14] = -eye[2]; tm2[15] = 1;

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);
        return M4x4.mul(tm1, tm2, r);
    };

    /*
     * Function: M4x4.transposeSelf
     */
    M4x4.transposeSelf = function M4x4_transposeSelf (m) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        var tmp = m[1]; m[1] = m[4]; m[4] = tmp;
        tmp = m[2]; m[2] = m[8]; m[8] = tmp;
        tmp = m[3]; m[3] = m[12]; m[12] = tmp;
        tmp = m[6]; m[6] = m[9]; m[9] = tmp;
        tmp = m[7]; m[7] = m[13]; m[13] = tmp;
        tmp = m[11]; m[11] = m[14]; m[14] = tmp;
        return m;
    };
    /*
     * Function: M4x4.transpose
     */
    M4x4.transpose = function M4x4_transpose (m, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(r == undefined || r.length == 16, "r == undefined || r.length == 16");

        if (m == r) {
            var tmp = 0.0;
            tmp = m[1]; m[1] = m[4]; m[4] = tmp;
            tmp = m[2]; m[2] = m[8]; m[8] = tmp;
            tmp = m[3]; m[3] = m[12]; m[12] = tmp;
            tmp = m[6]; m[6] = m[9]; m[9] = tmp;
            tmp = m[7]; m[7] = m[13]; m[13] = tmp;
            tmp = m[11]; m[11] = m[14]; m[14] = tmp;
            return m;
        }

        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(16);

        r[0] = m[0]; r[1] = m[4]; r[2] = m[8]; r[3] = m[12];
        r[4] = m[1]; r[5] = m[5]; r[6] = m[9]; r[7] = m[13];
        r[8] = m[2]; r[9] = m[6]; r[10] = m[10]; r[11] = m[14];
        r[12] = m[3]; r[13] = m[7]; r[14] = m[11]; r[15] = m[15];

        return r;
    };


    /*
     * Function: M4x4.transformPoint
     */
    M4x4.transformPoint = function M4x4_transformPoint (m, v, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(v.length == 3, "v.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");
        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);

        var v0 = v[0], v1 = v[1], v2 = v[2];

        r[0] = m[0] * v0 + m[4] * v1 + m[8] * v2 + m[12];
        r[1] = m[1] * v0 + m[5] * v1 + m[9] * v2 + m[13];
        r[2] = m[2] * v0 + m[6] * v1 + m[10] * v2 + m[14];
        var w = m[3] * v0 + m[7] * v1 + m[11] * v2 + m[15];

        if (w != 1.0) {
            r[0] /= w;
            r[1] /= w;
            r[2] /= w;
        }

        return r;
    };

    /*
     * Function: M4x4.transformLine
     */
    M4x4.transformLine = function M4x4_transformLine(m, v, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(v.length == 3, "v.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");
        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);

        var v0 = v[0], v1 = v[1], v2 = v[2];
        r[0] = m[0] * v0 + m[4] * v1 + m[8] * v2;
        r[1] = m[1] * v0 + m[5] * v1 + m[9] * v2;
        r[2] = m[2] * v0 + m[6] * v1 + m[10] * v2;
        var w = m[3] * v0 + m[7] * v1 + m[11] * v2;

        if (w != 1.0) {
            r[0] /= w;
            r[1] /= w;
            r[2] /= w;
        }

        return r;
    };


    /*
     * Function: M4x4.transformPointAffine
     */
    M4x4.transformPointAffine = function M4x4_transformPointAffine (m, v, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(v.length == 3, "v.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");
        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);

        var v0 = v[0], v1 = v[1], v2 = v[2];

        r[0] = m[0] * v0 + m[4] * v1 + m[8] * v2 + m[12];
        r[1] = m[1] * v0 + m[5] * v1 + m[9] * v2 + m[13];
        r[2] = m[2] * v0 + m[6] * v1 + m[10] * v2 + m[14];

        return r;
    };

    /*
     * Function: M4x4.transformLineAffine
     */
    M4x4.transformLineAffine = function M4x4_transformLineAffine(m, v, r) {
        //MathUtils_assert(m.length == 16, "m.length == 16");
        //MathUtils_assert(v.length == 3, "v.length == 3");
        //MathUtils_assert(r == undefined || r.length == 3, "r == undefined || r.length == 3");
        if (r == undefined)
            r = new MJS_FLOAT_ARRAY_TYPE(3);

        var v0 = v[0], v1 = v[1], v2 = v[2];
        r[0] = m[0] * v0 + m[4] * v1 + m[8] * v2;
        r[1] = m[1] * v0 + m[5] * v1 + m[9] * v2;
        r[2] = m[2] * v0 + m[6] * v1 + m[10] * v2;

        return r;
    };

    M4x4.makeBasis = function M4x4_makeBasis(vx,vy,vz) {

        var r = new MJS_FLOAT_ARRAY_TYPE(16);

        r[0] = vx[0];
        r[1] = vx[1];
        r[2] = vx[2];
        r[3] = 0;
        r[4] = vy[0];
        r[5] = vy[1];
        r[6] = vy[2];
        r[7] = 0;
        r[8] = vz[0];
        r[9] = vz[1];
        r[10] = vz[2];
        r[11] = 0;
        r[12] = 0;
        r[13] = 0;
        r[14] = 0;
        r[15] = 1;

        return r;

    };

    return {
        vec3: F3(V3.$),
        v3getX: V3.getX,
        v3getY: V3.getY,
        v3getZ: V3.getZ,
        v3setX: F2(V3.setX),
        v3setY: F2(V3.setY),
        v3setZ: F2(V3.setZ),
        toTuple3: V3.toTuple3,
        toRecord3: V3.toRecord3,
        fromTuple3: V3.fromTuple3,
        fromRecord3: V3.fromRecord3,
        v3add: F2(V3.add),
        v3sub: F2(V3.sub),
        v3neg: V3.neg,
        v3direction: F2(V3.direction),
        v3length: V3.length,
        v3lengthSquared: V3.lengthSquared,
        v3distance: F2(V3.distance),
        v3distanceSquared: F2(V3.distanceSquared),
        v3normalize: V3.normalize,
        v3scale: F2(V3.scale),
        v3dot: F2(V3.dot),
        v3cross: F2(V3.cross),
        v3mul4x4: F2(V3.mul4x4),
        m4x4fromList: M4x4.fromList,
        m4x4fromRecord: M4x4.fromRecord,
        m4x4toRecord: M4x4.toRecord,
        m4x4identity: M4x4.identity,
        m4x4topLeft3x3: M4x4.topLeft3x3,
        m4x4inverse: M4x4.inverse,
        m4x4inverseOrthonormal: M4x4.inverseOrthonormal,
        m4x4inverseTo3x3: M4x4.inverseTo3x3,
        m4x4makeFrustum: F6(M4x4.makeFrustum),
        m4x4makePerspective: F4(M4x4.makePerspective),
        m4x4makeOrtho: F6(M4x4.makeOrtho),
        m4x4makeOrtho2D: F4(M4x4.makeOrtho2D),
        m4x4mul: F2(M4x4.mul),
        m4x4Affine: F2(M4x4.mulAffine),
        m4x4makeRotate: F2(M4x4.makeRotate),
        m4x4rotate: F3(M4x4.rotate),
        m4x4makeScale3: F3(M4x4.makeScale3),
        m4x4makeScale1: M4x4.makeScale1,
        m4x4makeScale: M4x4.makeScale,
        m4x4scale3: F4(M4x4.scale3),
        m4x4scale: F2(M4x4.scale),
        m4x4makeTranslate3: F3(M4x4.makeTranslate3),
        m4x4makeTranslate: M4x4.makeTranslate,
        m4x4translate3: F4(M4x4.translate3),
        m4x4translate: F2(M4x4.translate),
        m4x4makeLookAt: F3(M4x4.makeLookAt),
        m4x4transpose: M4x4.transpose,
        m4x4transformPoint: F2(M4x4.transformPoint),
        m4x4makeBasis: F3(M4x4.makeBasis)
    };

}();

var _elm_community$linear_algebra$Math_Vector3$cross = _elm_community$linear_algebra$Native_MJS.v3cross;
var _elm_community$linear_algebra$Math_Vector3$dot = _elm_community$linear_algebra$Native_MJS.v3dot;
var _elm_community$linear_algebra$Math_Vector3$scale = _elm_community$linear_algebra$Native_MJS.v3scale;
var _elm_community$linear_algebra$Math_Vector3$normalize = _elm_community$linear_algebra$Native_MJS.v3normalize;
var _elm_community$linear_algebra$Math_Vector3$distanceSquared = _elm_community$linear_algebra$Native_MJS.v3distanceSquared;
var _elm_community$linear_algebra$Math_Vector3$distance = _elm_community$linear_algebra$Native_MJS.v3distance;
var _elm_community$linear_algebra$Math_Vector3$lengthSquared = _elm_community$linear_algebra$Native_MJS.v3lengthSquared;
var _elm_community$linear_algebra$Math_Vector3$length = _elm_community$linear_algebra$Native_MJS.v3length;
var _elm_community$linear_algebra$Math_Vector3$direction = _elm_community$linear_algebra$Native_MJS.v3direction;
var _elm_community$linear_algebra$Math_Vector3$negate = _elm_community$linear_algebra$Native_MJS.v3neg;
var _elm_community$linear_algebra$Math_Vector3$sub = _elm_community$linear_algebra$Native_MJS.v3sub;
var _elm_community$linear_algebra$Math_Vector3$add = _elm_community$linear_algebra$Native_MJS.v3add;
var _elm_community$linear_algebra$Math_Vector3$fromRecord = _elm_community$linear_algebra$Native_MJS.fromRecord3;
var _elm_community$linear_algebra$Math_Vector3$fromTuple = _elm_community$linear_algebra$Native_MJS.fromTuple3;
var _elm_community$linear_algebra$Math_Vector3$toRecord = _elm_community$linear_algebra$Native_MJS.toRecord3;
var _elm_community$linear_algebra$Math_Vector3$toTuple = _elm_community$linear_algebra$Native_MJS.toTuple3;
var _elm_community$linear_algebra$Math_Vector3$setZ = _elm_community$linear_algebra$Native_MJS.v3setZ;
var _elm_community$linear_algebra$Math_Vector3$setY = _elm_community$linear_algebra$Native_MJS.v3setY;
var _elm_community$linear_algebra$Math_Vector3$setX = _elm_community$linear_algebra$Native_MJS.v3setX;
var _elm_community$linear_algebra$Math_Vector3$getZ = _elm_community$linear_algebra$Native_MJS.v3getZ;
var _elm_community$linear_algebra$Math_Vector3$getY = _elm_community$linear_algebra$Native_MJS.v3getY;
var _elm_community$linear_algebra$Math_Vector3$getX = _elm_community$linear_algebra$Native_MJS.v3getX;
var _elm_community$linear_algebra$Math_Vector3$k = A3(_elm_community$linear_algebra$Native_MJS.vec3, 0, 0, 1);
var _elm_community$linear_algebra$Math_Vector3$j = A3(_elm_community$linear_algebra$Native_MJS.vec3, 0, 1, 0);
var _elm_community$linear_algebra$Math_Vector3$i = A3(_elm_community$linear_algebra$Native_MJS.vec3, 1, 0, 0);
var _elm_community$linear_algebra$Math_Vector3$vec3 = _elm_community$linear_algebra$Native_MJS.vec3;
var _elm_community$linear_algebra$Math_Vector3$Vec3 = {ctor: 'Vec3'};

var _elm_community$linear_algebra$Math_Matrix4$fromRecord = _elm_community$linear_algebra$Native_MJS.m4x4fromRecord;
var _elm_community$linear_algebra$Math_Matrix4$toRecord = _elm_community$linear_algebra$Native_MJS.m4x4toRecord;
var _elm_community$linear_algebra$Math_Matrix4$makeFromList = _elm_community$linear_algebra$Native_MJS.m4x4fromList;
var _elm_community$linear_algebra$Math_Matrix4$makeBasis = _elm_community$linear_algebra$Native_MJS.m4x4makeBasis;
var _elm_community$linear_algebra$Math_Matrix4$transpose = _elm_community$linear_algebra$Native_MJS.m4x4transpose;
var _elm_community$linear_algebra$Math_Matrix4$makeLookAt = _elm_community$linear_algebra$Native_MJS.m4x4makeLookAt;
var _elm_community$linear_algebra$Math_Matrix4$translate = _elm_community$linear_algebra$Native_MJS.m4x4translate;
var _elm_community$linear_algebra$Math_Matrix4$translate3 = _elm_community$linear_algebra$Native_MJS.m4x4translate3;
var _elm_community$linear_algebra$Math_Matrix4$makeTranslate = _elm_community$linear_algebra$Native_MJS.m4x4makeTranslate;
var _elm_community$linear_algebra$Math_Matrix4$makeTranslate3 = _elm_community$linear_algebra$Native_MJS.m4x4makeTranslate3;
var _elm_community$linear_algebra$Math_Matrix4$scale = _elm_community$linear_algebra$Native_MJS.m4x4scale;
var _elm_community$linear_algebra$Math_Matrix4$scale3 = _elm_community$linear_algebra$Native_MJS.m4x4scale3;
var _elm_community$linear_algebra$Math_Matrix4$makeScale = _elm_community$linear_algebra$Native_MJS.m4x4makeScale;
var _elm_community$linear_algebra$Math_Matrix4$makeScale3 = _elm_community$linear_algebra$Native_MJS.m4x4makeScale3;
var _elm_community$linear_algebra$Math_Matrix4$rotate = _elm_community$linear_algebra$Native_MJS.m4x4rotate;
var _elm_community$linear_algebra$Math_Matrix4$makeRotate = _elm_community$linear_algebra$Native_MJS.m4x4makeRotate;
var _elm_community$linear_algebra$Math_Matrix4$mulAffine = _elm_community$linear_algebra$Native_MJS.m4x4mulAffine;
var _elm_community$linear_algebra$Math_Matrix4$mul = _elm_community$linear_algebra$Native_MJS.m4x4mul;
var _elm_community$linear_algebra$Math_Matrix4$makeOrtho2D = _elm_community$linear_algebra$Native_MJS.m4x4makeOrtho2D;
var _elm_community$linear_algebra$Math_Matrix4$makeOrtho = _elm_community$linear_algebra$Native_MJS.m4x4makeOrtho;
var _elm_community$linear_algebra$Math_Matrix4$makePerspective = _elm_community$linear_algebra$Native_MJS.m4x4makePerspective;
var _elm_community$linear_algebra$Math_Matrix4$makeFrustum = _elm_community$linear_algebra$Native_MJS.m4x4makeFrustum;
var _elm_community$linear_algebra$Math_Matrix4$inverseOrthonormal = _elm_community$linear_algebra$Native_MJS.m4x4inverseOrthonormal;
var _elm_community$linear_algebra$Math_Matrix4$inverse = _elm_community$linear_algebra$Native_MJS.m4x4inverse;
var _elm_community$linear_algebra$Math_Matrix4$identity = _elm_community$linear_algebra$Native_MJS.m4x4identity;
var _elm_community$linear_algebra$Math_Matrix4$transform = _elm_community$linear_algebra$Native_MJS.v3mul4x4;
var _elm_community$linear_algebra$Math_Matrix4$Mat4 = {ctor: 'Mat4'};

var _elm_lang$core$Task$onError = _elm_lang$core$Native_Scheduler.onError;
var _elm_lang$core$Task$andThen = _elm_lang$core$Native_Scheduler.andThen;
var _elm_lang$core$Task$spawnCmd = F2(
	function (router, _p0) {
		var _p1 = _p0;
		return _elm_lang$core$Native_Scheduler.spawn(
			A2(
				_elm_lang$core$Task$andThen,
				_elm_lang$core$Platform$sendToApp(router),
				_p1._0));
	});
var _elm_lang$core$Task$fail = _elm_lang$core$Native_Scheduler.fail;
var _elm_lang$core$Task$mapError = F2(
	function (convert, task) {
		return A2(
			_elm_lang$core$Task$onError,
			function (_p2) {
				return _elm_lang$core$Task$fail(
					convert(_p2));
			},
			task);
	});
var _elm_lang$core$Task$succeed = _elm_lang$core$Native_Scheduler.succeed;
var _elm_lang$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return _elm_lang$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var _elm_lang$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return _elm_lang$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map3 = F4(
	function (func, taskA, taskB, taskC) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return _elm_lang$core$Task$succeed(
									A3(func, a, b, c));
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map4 = F5(
	function (func, taskA, taskB, taskC, taskD) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return _elm_lang$core$Task$succeed(
											A4(func, a, b, c, d));
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$map5 = F6(
	function (func, taskA, taskB, taskC, taskD, taskE) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (a) {
				return A2(
					_elm_lang$core$Task$andThen,
					function (b) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (c) {
								return A2(
									_elm_lang$core$Task$andThen,
									function (d) {
										return A2(
											_elm_lang$core$Task$andThen,
											function (e) {
												return _elm_lang$core$Task$succeed(
													A5(func, a, b, c, d, e));
											},
											taskE);
									},
									taskD);
							},
							taskC);
					},
					taskB);
			},
			taskA);
	});
var _elm_lang$core$Task$sequence = function (tasks) {
	var _p3 = tasks;
	if (_p3.ctor === '[]') {
		return _elm_lang$core$Task$succeed(
			{ctor: '[]'});
	} else {
		return A3(
			_elm_lang$core$Task$map2,
			F2(
				function (x, y) {
					return {ctor: '::', _0: x, _1: y};
				}),
			_p3._0,
			_elm_lang$core$Task$sequence(_p3._1));
	}
};
var _elm_lang$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			_elm_lang$core$Task$map,
			function (_p4) {
				return {ctor: '_Tuple0'};
			},
			_elm_lang$core$Task$sequence(
				A2(
					_elm_lang$core$List$map,
					_elm_lang$core$Task$spawnCmd(router),
					commands)));
	});
var _elm_lang$core$Task$init = _elm_lang$core$Task$succeed(
	{ctor: '_Tuple0'});
var _elm_lang$core$Task$onSelfMsg = F3(
	function (_p7, _p6, _p5) {
		return _elm_lang$core$Task$succeed(
			{ctor: '_Tuple0'});
	});
var _elm_lang$core$Task$command = _elm_lang$core$Native_Platform.leaf('Task');
var _elm_lang$core$Task$Perform = function (a) {
	return {ctor: 'Perform', _0: a};
};
var _elm_lang$core$Task$perform = F2(
	function (toMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(_elm_lang$core$Task$map, toMessage, task)));
	});
var _elm_lang$core$Task$attempt = F2(
	function (resultToMessage, task) {
		return _elm_lang$core$Task$command(
			_elm_lang$core$Task$Perform(
				A2(
					_elm_lang$core$Task$onError,
					function (_p8) {
						return _elm_lang$core$Task$succeed(
							resultToMessage(
								_elm_lang$core$Result$Err(_p8)));
					},
					A2(
						_elm_lang$core$Task$andThen,
						function (_p9) {
							return _elm_lang$core$Task$succeed(
								resultToMessage(
									_elm_lang$core$Result$Ok(_p9)));
						},
						task))));
	});
var _elm_lang$core$Task$cmdMap = F2(
	function (tagger, _p10) {
		var _p11 = _p10;
		return _elm_lang$core$Task$Perform(
			A2(_elm_lang$core$Task$map, tagger, _p11._0));
	});
_elm_lang$core$Native_Platform.effectManagers['Task'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Task$init, onEffects: _elm_lang$core$Task$onEffects, onSelfMsg: _elm_lang$core$Task$onSelfMsg, tag: 'cmd', cmdMap: _elm_lang$core$Task$cmdMap};

var _elm_lang$core$Dict$foldr = F3(
	function (f, acc, t) {
		foldr:
		while (true) {
			var _p0 = t;
			if (_p0.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v1 = f,
					_v2 = A3(
					f,
					_p0._1,
					_p0._2,
					A3(_elm_lang$core$Dict$foldr, f, acc, _p0._4)),
					_v3 = _p0._3;
				f = _v1;
				acc = _v2;
				t = _v3;
				continue foldr;
			}
		}
	});
var _elm_lang$core$Dict$keys = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return {ctor: '::', _0: key, _1: keyList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$values = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return {ctor: '::', _0: value, _1: valueList};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$toList = function (dict) {
	return A3(
		_elm_lang$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return {
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: key, _1: value},
					_1: list
				};
			}),
		{ctor: '[]'},
		dict);
};
var _elm_lang$core$Dict$foldl = F3(
	function (f, acc, dict) {
		foldl:
		while (true) {
			var _p1 = dict;
			if (_p1.ctor === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var _v5 = f,
					_v6 = A3(
					f,
					_p1._1,
					_p1._2,
					A3(_elm_lang$core$Dict$foldl, f, acc, _p1._3)),
					_v7 = _p1._4;
				f = _v5;
				acc = _v6;
				dict = _v7;
				continue foldl;
			}
		}
	});
var _elm_lang$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _p2) {
				stepState:
				while (true) {
					var _p3 = _p2;
					var _p9 = _p3._1;
					var _p8 = _p3._0;
					var _p4 = _p8;
					if (_p4.ctor === '[]') {
						return {
							ctor: '_Tuple2',
							_0: _p8,
							_1: A3(rightStep, rKey, rValue, _p9)
						};
					} else {
						var _p7 = _p4._1;
						var _p6 = _p4._0._1;
						var _p5 = _p4._0._0;
						if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) < 0) {
							var _v10 = rKey,
								_v11 = rValue,
								_v12 = {
								ctor: '_Tuple2',
								_0: _p7,
								_1: A3(leftStep, _p5, _p6, _p9)
							};
							rKey = _v10;
							rValue = _v11;
							_p2 = _v12;
							continue stepState;
						} else {
							if (_elm_lang$core$Native_Utils.cmp(_p5, rKey) > 0) {
								return {
									ctor: '_Tuple2',
									_0: _p8,
									_1: A3(rightStep, rKey, rValue, _p9)
								};
							} else {
								return {
									ctor: '_Tuple2',
									_0: _p7,
									_1: A4(bothStep, _p5, _p6, rValue, _p9)
								};
							}
						}
					}
				}
			});
		var _p10 = A3(
			_elm_lang$core$Dict$foldl,
			stepState,
			{
				ctor: '_Tuple2',
				_0: _elm_lang$core$Dict$toList(leftDict),
				_1: initialResult
			},
			rightDict);
		var leftovers = _p10._0;
		var intermediateResult = _p10._1;
		return A3(
			_elm_lang$core$List$foldl,
			F2(
				function (_p11, result) {
					var _p12 = _p11;
					return A3(leftStep, _p12._0, _p12._1, result);
				}),
			intermediateResult,
			leftovers);
	});
var _elm_lang$core$Dict$reportRemBug = F4(
	function (msg, c, lgot, rgot) {
		return _elm_lang$core$Native_Debug.crash(
			_elm_lang$core$String$concat(
				{
					ctor: '::',
					_0: 'Internal red-black tree invariant violated, expected ',
					_1: {
						ctor: '::',
						_0: msg,
						_1: {
							ctor: '::',
							_0: ' and got ',
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(c),
								_1: {
									ctor: '::',
									_0: '/',
									_1: {
										ctor: '::',
										_0: lgot,
										_1: {
											ctor: '::',
											_0: '/',
											_1: {
												ctor: '::',
												_0: rgot,
												_1: {
													ctor: '::',
													_0: '\nPlease report this bug to <https://github.com/elm-lang/core/issues>',
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					}
				}));
	});
var _elm_lang$core$Dict$isBBlack = function (dict) {
	var _p13 = dict;
	_v14_2:
	do {
		if (_p13.ctor === 'RBNode_elm_builtin') {
			if (_p13._0.ctor === 'BBlack') {
				return true;
			} else {
				break _v14_2;
			}
		} else {
			if (_p13._0.ctor === 'LBBlack') {
				return true;
			} else {
				break _v14_2;
			}
		}
	} while(false);
	return false;
};
var _elm_lang$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			var _p14 = dict;
			if (_p14.ctor === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var _v16 = A2(_elm_lang$core$Dict$sizeHelp, n + 1, _p14._4),
					_v17 = _p14._3;
				n = _v16;
				dict = _v17;
				continue sizeHelp;
			}
		}
	});
var _elm_lang$core$Dict$size = function (dict) {
	return A2(_elm_lang$core$Dict$sizeHelp, 0, dict);
};
var _elm_lang$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			var _p15 = dict;
			if (_p15.ctor === 'RBEmpty_elm_builtin') {
				return _elm_lang$core$Maybe$Nothing;
			} else {
				var _p16 = A2(_elm_lang$core$Basics$compare, targetKey, _p15._1);
				switch (_p16.ctor) {
					case 'LT':
						var _v20 = targetKey,
							_v21 = _p15._3;
						targetKey = _v20;
						dict = _v21;
						continue get;
					case 'EQ':
						return _elm_lang$core$Maybe$Just(_p15._2);
					default:
						var _v22 = targetKey,
							_v23 = _p15._4;
						targetKey = _v22;
						dict = _v23;
						continue get;
				}
			}
		}
	});
var _elm_lang$core$Dict$member = F2(
	function (key, dict) {
		var _p17 = A2(_elm_lang$core$Dict$get, key, dict);
		if (_p17.ctor === 'Just') {
			return true;
		} else {
			return false;
		}
	});
var _elm_lang$core$Dict$maxWithDefault = F3(
	function (k, v, r) {
		maxWithDefault:
		while (true) {
			var _p18 = r;
			if (_p18.ctor === 'RBEmpty_elm_builtin') {
				return {ctor: '_Tuple2', _0: k, _1: v};
			} else {
				var _v26 = _p18._1,
					_v27 = _p18._2,
					_v28 = _p18._4;
				k = _v26;
				v = _v27;
				r = _v28;
				continue maxWithDefault;
			}
		}
	});
var _elm_lang$core$Dict$NBlack = {ctor: 'NBlack'};
var _elm_lang$core$Dict$BBlack = {ctor: 'BBlack'};
var _elm_lang$core$Dict$Black = {ctor: 'Black'};
var _elm_lang$core$Dict$blackish = function (t) {
	var _p19 = t;
	if (_p19.ctor === 'RBNode_elm_builtin') {
		var _p20 = _p19._0;
		return _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$Black) || _elm_lang$core$Native_Utils.eq(_p20, _elm_lang$core$Dict$BBlack);
	} else {
		return true;
	}
};
var _elm_lang$core$Dict$Red = {ctor: 'Red'};
var _elm_lang$core$Dict$moreBlack = function (color) {
	var _p21 = color;
	switch (_p21.ctor) {
		case 'Black':
			return _elm_lang$core$Dict$BBlack;
		case 'Red':
			return _elm_lang$core$Dict$Black;
		case 'NBlack':
			return _elm_lang$core$Dict$Red;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a double black node more black!');
	}
};
var _elm_lang$core$Dict$lessBlack = function (color) {
	var _p22 = color;
	switch (_p22.ctor) {
		case 'BBlack':
			return _elm_lang$core$Dict$Black;
		case 'Black':
			return _elm_lang$core$Dict$Red;
		case 'Red':
			return _elm_lang$core$Dict$NBlack;
		default:
			return _elm_lang$core$Native_Debug.crash('Can\'t make a negative black node less black!');
	}
};
var _elm_lang$core$Dict$LBBlack = {ctor: 'LBBlack'};
var _elm_lang$core$Dict$LBlack = {ctor: 'LBlack'};
var _elm_lang$core$Dict$RBEmpty_elm_builtin = function (a) {
	return {ctor: 'RBEmpty_elm_builtin', _0: a};
};
var _elm_lang$core$Dict$empty = _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
var _elm_lang$core$Dict$isEmpty = function (dict) {
	return _elm_lang$core$Native_Utils.eq(dict, _elm_lang$core$Dict$empty);
};
var _elm_lang$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {ctor: 'RBNode_elm_builtin', _0: a, _1: b, _2: c, _3: d, _4: e};
	});
var _elm_lang$core$Dict$ensureBlackRoot = function (dict) {
	var _p23 = dict;
	if ((_p23.ctor === 'RBNode_elm_builtin') && (_p23._0.ctor === 'Red')) {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p23._1, _p23._2, _p23._3, _p23._4);
	} else {
		return dict;
	}
};
var _elm_lang$core$Dict$lessBlackTree = function (dict) {
	var _p24 = dict;
	if (_p24.ctor === 'RBNode_elm_builtin') {
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$lessBlack(_p24._0),
			_p24._1,
			_p24._2,
			_p24._3,
			_p24._4);
	} else {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	}
};
var _elm_lang$core$Dict$balancedTree = function (col) {
	return function (xk) {
		return function (xv) {
			return function (yk) {
				return function (yv) {
					return function (zk) {
						return function (zv) {
							return function (a) {
								return function (b) {
									return function (c) {
										return function (d) {
											return A5(
												_elm_lang$core$Dict$RBNode_elm_builtin,
												_elm_lang$core$Dict$lessBlack(col),
												yk,
												yv,
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, xk, xv, a, b),
												A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, zk, zv, c, d));
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _elm_lang$core$Dict$blacken = function (t) {
	var _p25 = t;
	if (_p25.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p25._1, _p25._2, _p25._3, _p25._4);
	}
};
var _elm_lang$core$Dict$redden = function (t) {
	var _p26 = t;
	if (_p26.ctor === 'RBEmpty_elm_builtin') {
		return _elm_lang$core$Native_Debug.crash('can\'t make a Leaf red');
	} else {
		return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, _p26._1, _p26._2, _p26._3, _p26._4);
	}
};
var _elm_lang$core$Dict$balanceHelp = function (tree) {
	var _p27 = tree;
	_v36_6:
	do {
		_v36_5:
		do {
			_v36_4:
			do {
				_v36_3:
				do {
					_v36_2:
					do {
						_v36_1:
						do {
							_v36_0:
							do {
								if (_p27.ctor === 'RBNode_elm_builtin') {
									if (_p27._3.ctor === 'RBNode_elm_builtin') {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._3._0.ctor) {
												case 'Red':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																		break _v36_2;
																	} else {
																		if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																			break _v36_3;
																		} else {
																			break _v36_6;
																		}
																	}
																}
															}
														case 'NBlack':
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																		break _v36_4;
																	} else {
																		break _v36_6;
																	}
																}
															}
														default:
															if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
																break _v36_0;
															} else {
																if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
																	break _v36_1;
																} else {
																	break _v36_6;
																}
															}
													}
												case 'NBlack':
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															}
														case 'NBlack':
															if (_p27._0.ctor === 'BBlack') {
																if ((((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																	break _v36_4;
																} else {
																	if ((((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																		break _v36_5;
																	} else {
																		break _v36_6;
																	}
																}
															} else {
																break _v36_6;
															}
														default:
															if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
																break _v36_5;
															} else {
																break _v36_6;
															}
													}
												default:
													switch (_p27._4._0.ctor) {
														case 'Red':
															if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
																break _v36_2;
															} else {
																if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
																	break _v36_3;
																} else {
																	break _v36_6;
																}
															}
														case 'NBlack':
															if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
																break _v36_4;
															} else {
																break _v36_6;
															}
														default:
															break _v36_6;
													}
											}
										} else {
											switch (_p27._3._0.ctor) {
												case 'Red':
													if ((_p27._3._3.ctor === 'RBNode_elm_builtin') && (_p27._3._3._0.ctor === 'Red')) {
														break _v36_0;
													} else {
														if ((_p27._3._4.ctor === 'RBNode_elm_builtin') && (_p27._3._4._0.ctor === 'Red')) {
															break _v36_1;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._3._3.ctor === 'RBNode_elm_builtin')) && (_p27._3._3._0.ctor === 'Black')) && (_p27._3._4.ctor === 'RBNode_elm_builtin')) && (_p27._3._4._0.ctor === 'Black')) {
														break _v36_5;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										}
									} else {
										if (_p27._4.ctor === 'RBNode_elm_builtin') {
											switch (_p27._4._0.ctor) {
												case 'Red':
													if ((_p27._4._3.ctor === 'RBNode_elm_builtin') && (_p27._4._3._0.ctor === 'Red')) {
														break _v36_2;
													} else {
														if ((_p27._4._4.ctor === 'RBNode_elm_builtin') && (_p27._4._4._0.ctor === 'Red')) {
															break _v36_3;
														} else {
															break _v36_6;
														}
													}
												case 'NBlack':
													if (((((_p27._0.ctor === 'BBlack') && (_p27._4._3.ctor === 'RBNode_elm_builtin')) && (_p27._4._3._0.ctor === 'Black')) && (_p27._4._4.ctor === 'RBNode_elm_builtin')) && (_p27._4._4._0.ctor === 'Black')) {
														break _v36_4;
													} else {
														break _v36_6;
													}
												default:
													break _v36_6;
											}
										} else {
											break _v36_6;
										}
									}
								} else {
									break _v36_6;
								}
							} while(false);
							return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._3._1)(_p27._3._3._2)(_p27._3._1)(_p27._3._2)(_p27._1)(_p27._2)(_p27._3._3._3)(_p27._3._3._4)(_p27._3._4)(_p27._4);
						} while(false);
						return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._3._1)(_p27._3._2)(_p27._3._4._1)(_p27._3._4._2)(_p27._1)(_p27._2)(_p27._3._3)(_p27._3._4._3)(_p27._3._4._4)(_p27._4);
					} while(false);
					return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._3._1)(_p27._4._3._2)(_p27._4._1)(_p27._4._2)(_p27._3)(_p27._4._3._3)(_p27._4._3._4)(_p27._4._4);
				} while(false);
				return _elm_lang$core$Dict$balancedTree(_p27._0)(_p27._1)(_p27._2)(_p27._4._1)(_p27._4._2)(_p27._4._4._1)(_p27._4._4._2)(_p27._3)(_p27._4._3)(_p27._4._4._3)(_p27._4._4._4);
			} while(false);
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_elm_lang$core$Dict$Black,
				_p27._4._3._1,
				_p27._4._3._2,
				A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3, _p27._4._3._3),
				A5(
					_elm_lang$core$Dict$balance,
					_elm_lang$core$Dict$Black,
					_p27._4._1,
					_p27._4._2,
					_p27._4._3._4,
					_elm_lang$core$Dict$redden(_p27._4._4)));
		} while(false);
		return A5(
			_elm_lang$core$Dict$RBNode_elm_builtin,
			_elm_lang$core$Dict$Black,
			_p27._3._4._1,
			_p27._3._4._2,
			A5(
				_elm_lang$core$Dict$balance,
				_elm_lang$core$Dict$Black,
				_p27._3._1,
				_p27._3._2,
				_elm_lang$core$Dict$redden(_p27._3._3),
				_p27._3._4._3),
			A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p27._1, _p27._2, _p27._3._4._4, _p27._4));
	} while(false);
	return tree;
};
var _elm_lang$core$Dict$balance = F5(
	function (c, k, v, l, r) {
		var tree = A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
		return _elm_lang$core$Dict$blackish(tree) ? _elm_lang$core$Dict$balanceHelp(tree) : tree;
	});
var _elm_lang$core$Dict$bubble = F5(
	function (c, k, v, l, r) {
		return (_elm_lang$core$Dict$isBBlack(l) || _elm_lang$core$Dict$isBBlack(r)) ? A5(
			_elm_lang$core$Dict$balance,
			_elm_lang$core$Dict$moreBlack(c),
			k,
			v,
			_elm_lang$core$Dict$lessBlackTree(l),
			_elm_lang$core$Dict$lessBlackTree(r)) : A5(_elm_lang$core$Dict$RBNode_elm_builtin, c, k, v, l, r);
	});
var _elm_lang$core$Dict$removeMax = F5(
	function (c, k, v, l, r) {
		var _p28 = r;
		if (_p28.ctor === 'RBEmpty_elm_builtin') {
			return A3(_elm_lang$core$Dict$rem, c, l, r);
		} else {
			return A5(
				_elm_lang$core$Dict$bubble,
				c,
				k,
				v,
				l,
				A5(_elm_lang$core$Dict$removeMax, _p28._0, _p28._1, _p28._2, _p28._3, _p28._4));
		}
	});
var _elm_lang$core$Dict$rem = F3(
	function (color, left, right) {
		var _p29 = {ctor: '_Tuple2', _0: left, _1: right};
		if (_p29._0.ctor === 'RBEmpty_elm_builtin') {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p30 = color;
				switch (_p30.ctor) {
					case 'Red':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
					case 'Black':
						return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBBlack);
					default:
						return _elm_lang$core$Native_Debug.crash('cannot have bblack or nblack nodes at this point');
				}
			} else {
				var _p33 = _p29._1._0;
				var _p32 = _p29._0._0;
				var _p31 = {ctor: '_Tuple3', _0: color, _1: _p32, _2: _p33};
				if ((((_p31.ctor === '_Tuple3') && (_p31._0.ctor === 'Black')) && (_p31._1.ctor === 'LBlack')) && (_p31._2.ctor === 'Red')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._1._1, _p29._1._2, _p29._1._3, _p29._1._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/LBlack/Red',
						color,
						_elm_lang$core$Basics$toString(_p32),
						_elm_lang$core$Basics$toString(_p33));
				}
			}
		} else {
			if (_p29._1.ctor === 'RBEmpty_elm_builtin') {
				var _p36 = _p29._1._0;
				var _p35 = _p29._0._0;
				var _p34 = {ctor: '_Tuple3', _0: color, _1: _p35, _2: _p36};
				if ((((_p34.ctor === '_Tuple3') && (_p34._0.ctor === 'Black')) && (_p34._1.ctor === 'Red')) && (_p34._2.ctor === 'LBlack')) {
					return A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Black, _p29._0._1, _p29._0._2, _p29._0._3, _p29._0._4);
				} else {
					return A4(
						_elm_lang$core$Dict$reportRemBug,
						'Black/Red/LBlack',
						color,
						_elm_lang$core$Basics$toString(_p35),
						_elm_lang$core$Basics$toString(_p36));
				}
			} else {
				var _p40 = _p29._0._2;
				var _p39 = _p29._0._4;
				var _p38 = _p29._0._1;
				var newLeft = A5(_elm_lang$core$Dict$removeMax, _p29._0._0, _p38, _p40, _p29._0._3, _p39);
				var _p37 = A3(_elm_lang$core$Dict$maxWithDefault, _p38, _p40, _p39);
				var k = _p37._0;
				var v = _p37._1;
				return A5(_elm_lang$core$Dict$bubble, color, k, v, newLeft, right);
			}
		}
	});
var _elm_lang$core$Dict$map = F2(
	function (f, dict) {
		var _p41 = dict;
		if (_p41.ctor === 'RBEmpty_elm_builtin') {
			return _elm_lang$core$Dict$RBEmpty_elm_builtin(_elm_lang$core$Dict$LBlack);
		} else {
			var _p42 = _p41._1;
			return A5(
				_elm_lang$core$Dict$RBNode_elm_builtin,
				_p41._0,
				_p42,
				A2(f, _p42, _p41._2),
				A2(_elm_lang$core$Dict$map, f, _p41._3),
				A2(_elm_lang$core$Dict$map, f, _p41._4));
		}
	});
var _elm_lang$core$Dict$Same = {ctor: 'Same'};
var _elm_lang$core$Dict$Remove = {ctor: 'Remove'};
var _elm_lang$core$Dict$Insert = {ctor: 'Insert'};
var _elm_lang$core$Dict$update = F3(
	function (k, alter, dict) {
		var up = function (dict) {
			var _p43 = dict;
			if (_p43.ctor === 'RBEmpty_elm_builtin') {
				var _p44 = alter(_elm_lang$core$Maybe$Nothing);
				if (_p44.ctor === 'Nothing') {
					return {ctor: '_Tuple2', _0: _elm_lang$core$Dict$Same, _1: _elm_lang$core$Dict$empty};
				} else {
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Dict$Insert,
						_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _elm_lang$core$Dict$Red, k, _p44._0, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty)
					};
				}
			} else {
				var _p55 = _p43._2;
				var _p54 = _p43._4;
				var _p53 = _p43._3;
				var _p52 = _p43._1;
				var _p51 = _p43._0;
				var _p45 = A2(_elm_lang$core$Basics$compare, k, _p52);
				switch (_p45.ctor) {
					case 'EQ':
						var _p46 = alter(
							_elm_lang$core$Maybe$Just(_p55));
						if (_p46.ctor === 'Nothing') {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Remove,
								_1: A3(_elm_lang$core$Dict$rem, _p51, _p53, _p54)
							};
						} else {
							return {
								ctor: '_Tuple2',
								_0: _elm_lang$core$Dict$Same,
								_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p46._0, _p53, _p54)
							};
						}
					case 'LT':
						var _p47 = up(_p53);
						var flag = _p47._0;
						var newLeft = _p47._1;
						var _p48 = flag;
						switch (_p48.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, newLeft, _p54)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, newLeft, _p54)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, newLeft, _p54)
								};
						}
					default:
						var _p49 = up(_p54);
						var flag = _p49._0;
						var newRight = _p49._1;
						var _p50 = flag;
						switch (_p50.ctor) {
							case 'Same':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Same,
									_1: A5(_elm_lang$core$Dict$RBNode_elm_builtin, _p51, _p52, _p55, _p53, newRight)
								};
							case 'Insert':
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Insert,
									_1: A5(_elm_lang$core$Dict$balance, _p51, _p52, _p55, _p53, newRight)
								};
							default:
								return {
									ctor: '_Tuple2',
									_0: _elm_lang$core$Dict$Remove,
									_1: A5(_elm_lang$core$Dict$bubble, _p51, _p52, _p55, _p53, newRight)
								};
						}
				}
			}
		};
		var _p56 = up(dict);
		var flag = _p56._0;
		var updatedDict = _p56._1;
		var _p57 = flag;
		switch (_p57.ctor) {
			case 'Same':
				return updatedDict;
			case 'Insert':
				return _elm_lang$core$Dict$ensureBlackRoot(updatedDict);
			default:
				return _elm_lang$core$Dict$blacken(updatedDict);
		}
	});
var _elm_lang$core$Dict$insert = F3(
	function (key, value, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(
				_elm_lang$core$Maybe$Just(value)),
			dict);
	});
var _elm_lang$core$Dict$singleton = F2(
	function (key, value) {
		return A3(_elm_lang$core$Dict$insert, key, value, _elm_lang$core$Dict$empty);
	});
var _elm_lang$core$Dict$union = F2(
	function (t1, t2) {
		return A3(_elm_lang$core$Dict$foldl, _elm_lang$core$Dict$insert, t2, t1);
	});
var _elm_lang$core$Dict$filter = F2(
	function (predicate, dictionary) {
		var add = F3(
			function (key, value, dict) {
				return A2(predicate, key, value) ? A3(_elm_lang$core$Dict$insert, key, value, dict) : dict;
			});
		return A3(_elm_lang$core$Dict$foldl, add, _elm_lang$core$Dict$empty, dictionary);
	});
var _elm_lang$core$Dict$intersect = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Dict$filter,
			F2(
				function (k, _p58) {
					return A2(_elm_lang$core$Dict$member, k, t2);
				}),
			t1);
	});
var _elm_lang$core$Dict$partition = F2(
	function (predicate, dict) {
		var add = F3(
			function (key, value, _p59) {
				var _p60 = _p59;
				var _p62 = _p60._1;
				var _p61 = _p60._0;
				return A2(predicate, key, value) ? {
					ctor: '_Tuple2',
					_0: A3(_elm_lang$core$Dict$insert, key, value, _p61),
					_1: _p62
				} : {
					ctor: '_Tuple2',
					_0: _p61,
					_1: A3(_elm_lang$core$Dict$insert, key, value, _p62)
				};
			});
		return A3(
			_elm_lang$core$Dict$foldl,
			add,
			{ctor: '_Tuple2', _0: _elm_lang$core$Dict$empty, _1: _elm_lang$core$Dict$empty},
			dict);
	});
var _elm_lang$core$Dict$fromList = function (assocs) {
	return A3(
		_elm_lang$core$List$foldl,
		F2(
			function (_p63, dict) {
				var _p64 = _p63;
				return A3(_elm_lang$core$Dict$insert, _p64._0, _p64._1, dict);
			}),
		_elm_lang$core$Dict$empty,
		assocs);
};
var _elm_lang$core$Dict$remove = F2(
	function (key, dict) {
		return A3(
			_elm_lang$core$Dict$update,
			key,
			_elm_lang$core$Basics$always(_elm_lang$core$Maybe$Nothing),
			dict);
	});
var _elm_lang$core$Dict$diff = F2(
	function (t1, t2) {
		return A3(
			_elm_lang$core$Dict$foldl,
			F3(
				function (k, v, t) {
					return A2(_elm_lang$core$Dict$remove, k, t);
				}),
			t1,
			t2);
	});

//import Native.Scheduler //

var _elm_lang$core$Native_Time = function() {

var now = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
{
	callback(_elm_lang$core$Native_Scheduler.succeed(Date.now()));
});

function setInterval_(interval, task)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var id = setInterval(function() {
			_elm_lang$core$Native_Scheduler.rawSpawn(task);
		}, interval);

		return function() { clearInterval(id); };
	});
}

return {
	now: now,
	setInterval_: F2(setInterval_)
};

}();
var _elm_lang$core$Time$setInterval = _elm_lang$core$Native_Time.setInterval_;
var _elm_lang$core$Time$spawnHelp = F3(
	function (router, intervals, processes) {
		var _p0 = intervals;
		if (_p0.ctor === '[]') {
			return _elm_lang$core$Task$succeed(processes);
		} else {
			var _p1 = _p0._0;
			var spawnRest = function (id) {
				return A3(
					_elm_lang$core$Time$spawnHelp,
					router,
					_p0._1,
					A3(_elm_lang$core$Dict$insert, _p1, id, processes));
			};
			var spawnTimer = _elm_lang$core$Native_Scheduler.spawn(
				A2(
					_elm_lang$core$Time$setInterval,
					_p1,
					A2(_elm_lang$core$Platform$sendToSelf, router, _p1)));
			return A2(_elm_lang$core$Task$andThen, spawnRest, spawnTimer);
		}
	});
var _elm_lang$core$Time$addMySub = F2(
	function (_p2, state) {
		var _p3 = _p2;
		var _p6 = _p3._1;
		var _p5 = _p3._0;
		var _p4 = A2(_elm_lang$core$Dict$get, _p5, state);
		if (_p4.ctor === 'Nothing') {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{
					ctor: '::',
					_0: _p6,
					_1: {ctor: '[]'}
				},
				state);
		} else {
			return A3(
				_elm_lang$core$Dict$insert,
				_p5,
				{ctor: '::', _0: _p6, _1: _p4._0},
				state);
		}
	});
var _elm_lang$core$Time$inMilliseconds = function (t) {
	return t;
};
var _elm_lang$core$Time$millisecond = 1;
var _elm_lang$core$Time$second = 1000 * _elm_lang$core$Time$millisecond;
var _elm_lang$core$Time$minute = 60 * _elm_lang$core$Time$second;
var _elm_lang$core$Time$hour = 60 * _elm_lang$core$Time$minute;
var _elm_lang$core$Time$inHours = function (t) {
	return t / _elm_lang$core$Time$hour;
};
var _elm_lang$core$Time$inMinutes = function (t) {
	return t / _elm_lang$core$Time$minute;
};
var _elm_lang$core$Time$inSeconds = function (t) {
	return t / _elm_lang$core$Time$second;
};
var _elm_lang$core$Time$now = _elm_lang$core$Native_Time.now;
var _elm_lang$core$Time$onSelfMsg = F3(
	function (router, interval, state) {
		var _p7 = A2(_elm_lang$core$Dict$get, interval, state.taggers);
		if (_p7.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var tellTaggers = function (time) {
				return _elm_lang$core$Task$sequence(
					A2(
						_elm_lang$core$List$map,
						function (tagger) {
							return A2(
								_elm_lang$core$Platform$sendToApp,
								router,
								tagger(time));
						},
						_p7._0));
			};
			return A2(
				_elm_lang$core$Task$andThen,
				function (_p8) {
					return _elm_lang$core$Task$succeed(state);
				},
				A2(_elm_lang$core$Task$andThen, tellTaggers, _elm_lang$core$Time$now));
		}
	});
var _elm_lang$core$Time$subscription = _elm_lang$core$Native_Platform.leaf('Time');
var _elm_lang$core$Time$State = F2(
	function (a, b) {
		return {taggers: a, processes: b};
	});
var _elm_lang$core$Time$init = _elm_lang$core$Task$succeed(
	A2(_elm_lang$core$Time$State, _elm_lang$core$Dict$empty, _elm_lang$core$Dict$empty));
var _elm_lang$core$Time$onEffects = F3(
	function (router, subs, _p9) {
		var _p10 = _p9;
		var rightStep = F3(
			function (_p12, id, _p11) {
				var _p13 = _p11;
				return {
					ctor: '_Tuple3',
					_0: _p13._0,
					_1: _p13._1,
					_2: A2(
						_elm_lang$core$Task$andThen,
						function (_p14) {
							return _p13._2;
						},
						_elm_lang$core$Native_Scheduler.kill(id))
				};
			});
		var bothStep = F4(
			function (interval, taggers, id, _p15) {
				var _p16 = _p15;
				return {
					ctor: '_Tuple3',
					_0: _p16._0,
					_1: A3(_elm_lang$core$Dict$insert, interval, id, _p16._1),
					_2: _p16._2
				};
			});
		var leftStep = F3(
			function (interval, taggers, _p17) {
				var _p18 = _p17;
				return {
					ctor: '_Tuple3',
					_0: {ctor: '::', _0: interval, _1: _p18._0},
					_1: _p18._1,
					_2: _p18._2
				};
			});
		var newTaggers = A3(_elm_lang$core$List$foldl, _elm_lang$core$Time$addMySub, _elm_lang$core$Dict$empty, subs);
		var _p19 = A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			newTaggers,
			_p10.processes,
			{
				ctor: '_Tuple3',
				_0: {ctor: '[]'},
				_1: _elm_lang$core$Dict$empty,
				_2: _elm_lang$core$Task$succeed(
					{ctor: '_Tuple0'})
			});
		var spawnList = _p19._0;
		var existingDict = _p19._1;
		var killTask = _p19._2;
		return A2(
			_elm_lang$core$Task$andThen,
			function (newProcesses) {
				return _elm_lang$core$Task$succeed(
					A2(_elm_lang$core$Time$State, newTaggers, newProcesses));
			},
			A2(
				_elm_lang$core$Task$andThen,
				function (_p20) {
					return A3(_elm_lang$core$Time$spawnHelp, router, spawnList, existingDict);
				},
				killTask));
	});
var _elm_lang$core$Time$Every = F2(
	function (a, b) {
		return {ctor: 'Every', _0: a, _1: b};
	});
var _elm_lang$core$Time$every = F2(
	function (interval, tagger) {
		return _elm_lang$core$Time$subscription(
			A2(_elm_lang$core$Time$Every, interval, tagger));
	});
var _elm_lang$core$Time$subMap = F2(
	function (f, _p21) {
		var _p22 = _p21;
		return A2(
			_elm_lang$core$Time$Every,
			_p22._0,
			function (_p23) {
				return f(
					_p22._1(_p23));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Time'] = {pkg: 'elm-lang/core', init: _elm_lang$core$Time$init, onEffects: _elm_lang$core$Time$onEffects, onSelfMsg: _elm_lang$core$Time$onSelfMsg, tag: 'sub', subMap: _elm_lang$core$Time$subMap};

var _elm_lang$core$Process$kill = _elm_lang$core$Native_Scheduler.kill;
var _elm_lang$core$Process$sleep = _elm_lang$core$Native_Scheduler.sleep;
var _elm_lang$core$Process$spawn = _elm_lang$core$Native_Scheduler.spawn;

//import Native.List //

var _elm_lang$core$Native_Array = function() {

// A RRB-Tree has two distinct data types.
// Leaf -> "height"  is always 0
//         "table"   is an array of elements
// Node -> "height"  is always greater than 0
//         "table"   is an array of child nodes
//         "lengths" is an array of accumulated lengths of the child nodes

// M is the maximal table size. 32 seems fast. E is the allowed increase
// of search steps when concatting to find an index. Lower values will
// decrease balancing, but will increase search steps.
var M = 32;
var E = 2;

// An empty array.
var empty = {
	ctor: '_Array',
	height: 0,
	table: []
};


function get(i, array)
{
	if (i < 0 || i >= length(array))
	{
		throw new Error(
			'Index ' + i + ' is out of range. Check the length of ' +
			'your array first or use getMaybe or getWithDefault.');
	}
	return unsafeGet(i, array);
}


function unsafeGet(i, array)
{
	for (var x = array.height; x > 0; x--)
	{
		var slot = i >> (x * 5);
		while (array.lengths[slot] <= i)
		{
			slot++;
		}
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array = array.table[slot];
	}
	return array.table[i];
}


// Sets the value at the index i. Only the nodes leading to i will get
// copied and updated.
function set(i, item, array)
{
	if (i < 0 || length(array) <= i)
	{
		return array;
	}
	return unsafeSet(i, item, array);
}


function unsafeSet(i, item, array)
{
	array = nodeCopy(array);

	if (array.height === 0)
	{
		array.table[i] = item;
	}
	else
	{
		var slot = getSlot(i, array);
		if (slot > 0)
		{
			i -= array.lengths[slot - 1];
		}
		array.table[slot] = unsafeSet(i, item, array.table[slot]);
	}
	return array;
}


function initialize(len, f)
{
	if (len <= 0)
	{
		return empty;
	}
	var h = Math.floor( Math.log(len) / Math.log(M) );
	return initialize_(f, h, 0, len);
}

function initialize_(f, h, from, to)
{
	if (h === 0)
	{
		var table = new Array((to - from) % (M + 1));
		for (var i = 0; i < table.length; i++)
		{
		  table[i] = f(from + i);
		}
		return {
			ctor: '_Array',
			height: 0,
			table: table
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

function fromList(list)
{
	if (list.ctor === '[]')
	{
		return empty;
	}

	// Allocate M sized blocks (table) and write list elements to it.
	var table = new Array(M);
	var nodes = [];
	var i = 0;

	while (list.ctor !== '[]')
	{
		table[i] = list._0;
		list = list._1;
		i++;

		// table is full, so we can push a leaf containing it into the
		// next node.
		if (i === M)
		{
			var leaf = {
				ctor: '_Array',
				height: 0,
				table: table
			};
			fromListPush(leaf, nodes);
			table = new Array(M);
			i = 0;
		}
	}

	// Maybe there is something left on the table.
	if (i > 0)
	{
		var leaf = {
			ctor: '_Array',
			height: 0,
			table: table.splice(0, i)
		};
		fromListPush(leaf, nodes);
	}

	// Go through all of the nodes and eventually push them into higher nodes.
	for (var h = 0; h < nodes.length - 1; h++)
	{
		if (nodes[h].table.length > 0)
		{
			fromListPush(nodes[h], nodes);
		}
	}

	var head = nodes[nodes.length - 1];
	if (head.height > 0 && head.table.length === 1)
	{
		return head.table[0];
	}
	else
	{
		return head;
	}
}

// Push a node into a higher node as a child.
function fromListPush(toPush, nodes)
{
	var h = toPush.height;

	// Maybe the node on this height does not exist.
	if (nodes.length === h)
	{
		var node = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
		nodes.push(node);
	}

	nodes[h].table.push(toPush);
	var len = length(toPush);
	if (nodes[h].lengths.length > 0)
	{
		len += nodes[h].lengths[nodes[h].lengths.length - 1];
	}
	nodes[h].lengths.push(len);

	if (nodes[h].table.length === M)
	{
		fromListPush(nodes[h], nodes);
		nodes[h] = {
			ctor: '_Array',
			height: h + 1,
			table: [],
			lengths: []
		};
	}
}

// Pushes an item via push_ to the bottom right of a tree.
function push(item, a)
{
	var pushed = push_(item, a);
	if (pushed !== null)
	{
		return pushed;
	}

	var newTree = create(item, a.height);
	return siblise(a, newTree);
}

// Recursively tries to push an item to the bottom-right most
// tree possible. If there is no space left for the item,
// null will be returned.
function push_(item, a)
{
	// Handle resursion stop at leaf level.
	if (a.height === 0)
	{
		if (a.table.length < M)
		{
			var newA = {
				ctor: '_Array',
				height: 0,
				table: a.table.slice()
			};
			newA.table.push(item);
			return newA;
		}
		else
		{
		  return null;
		}
	}

	// Recursively push
	var pushed = push_(item, botRight(a));

	// There was space in the bottom right tree, so the slot will
	// be updated.
	if (pushed !== null)
	{
		var newA = nodeCopy(a);
		newA.table[newA.table.length - 1] = pushed;
		newA.lengths[newA.lengths.length - 1]++;
		return newA;
	}

	// When there was no space left, check if there is space left
	// for a new slot with a tree which contains only the item
	// at the bottom.
	if (a.table.length < M)
	{
		var newSlot = create(item, a.height - 1);
		var newA = nodeCopy(a);
		newA.table.push(newSlot);
		newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
		return newA;
	}
	else
	{
		return null;
	}
}

// Converts an array into a list of elements.
function toList(a)
{
	return toList_(_elm_lang$core$Native_List.Nil, a);
}

function toList_(list, a)
{
	for (var i = a.table.length - 1; i >= 0; i--)
	{
		list =
			a.height === 0
				? _elm_lang$core$Native_List.Cons(a.table[i], list)
				: toList_(list, a.table[i]);
	}
	return list;
}

// Maps a function over the elements of an array.
function map(f, a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? f(a.table[i])
				: map(f, a.table[i]);
	}
	return newA;
}

// Maps a function over the elements with their index as first argument.
function indexedMap(f, a)
{
	return indexedMap_(f, a, 0);
}

function indexedMap_(f, a, from)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: new Array(a.table.length)
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths;
	}
	for (var i = 0; i < a.table.length; i++)
	{
		newA.table[i] =
			a.height === 0
				? A2(f, from + i, a.table[i])
				: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
	}
	return newA;
}

function foldl(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = 0; i < a.table.length; i++)
		{
			b = foldl(f, b, a.table[i]);
		}
	}
	return b;
}

function foldr(f, b, a)
{
	if (a.height === 0)
	{
		for (var i = a.table.length; i--; )
		{
			b = A2(f, a.table[i], b);
		}
	}
	else
	{
		for (var i = a.table.length; i--; )
		{
			b = foldr(f, b, a.table[i]);
		}
	}
	return b;
}

// TODO: currently, it slices the right, then the left. This can be
// optimized.
function slice(from, to, a)
{
	if (from < 0)
	{
		from += length(a);
	}
	if (to < 0)
	{
		to += length(a);
	}
	return sliceLeft(from, sliceRight(to, a));
}

function sliceRight(to, a)
{
	if (to === length(a))
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(0, to);
		return newA;
	}

	// Slice the right recursively.
	var right = getSlot(to, a);
	var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (right === 0)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(0, right),
		lengths: a.lengths.slice(0, right)
	};
	if (sliced.table.length > 0)
	{
		newA.table[right] = sliced;
		newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
	}
	return newA;
}

function sliceLeft(from, a)
{
	if (from === 0)
	{
		return a;
	}

	// Handle leaf level.
	if (a.height === 0)
	{
		var newA = { ctor:'_Array', height:0 };
		newA.table = a.table.slice(from, a.table.length + 1);
		return newA;
	}

	// Slice the left recursively.
	var left = getSlot(from, a);
	var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

	// Maybe the a node is not even needed, as sliced contains the whole slice.
	if (left === a.table.length - 1)
	{
		return sliced;
	}

	// Create new node.
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice(left, a.table.length + 1),
		lengths: new Array(a.table.length - left)
	};
	newA.table[0] = sliced;
	var len = 0;
	for (var i = 0; i < newA.table.length; i++)
	{
		len += length(newA.table[i]);
		newA.lengths[i] = len;
	}

	return newA;
}

// Appends two trees.
function append(a,b)
{
	if (a.table.length === 0)
	{
		return b;
	}
	if (b.table.length === 0)
	{
		return a;
	}

	var c = append_(a, b);

	// Check if both nodes can be crunshed together.
	if (c[0].table.length + c[1].table.length <= M)
	{
		if (c[0].table.length === 0)
		{
			return c[1];
		}
		if (c[1].table.length === 0)
		{
			return c[0];
		}

		// Adjust .table and .lengths
		c[0].table = c[0].table.concat(c[1].table);
		if (c[0].height > 0)
		{
			var len = length(c[0]);
			for (var i = 0; i < c[1].lengths.length; i++)
			{
				c[1].lengths[i] += len;
			}
			c[0].lengths = c[0].lengths.concat(c[1].lengths);
		}

		return c[0];
	}

	if (c[0].height > 0)
	{
		var toRemove = calcToRemove(a, b);
		if (toRemove > E)
		{
			c = shuffle(c[0], c[1], toRemove);
		}
	}

	return siblise(c[0], c[1]);
}

// Returns an array of two nodes; right and left. One node _may_ be empty.
function append_(a, b)
{
	if (a.height === 0 && b.height === 0)
	{
		return [a, b];
	}

	if (a.height !== 1 || b.height !== 1)
	{
		if (a.height === b.height)
		{
			a = nodeCopy(a);
			b = nodeCopy(b);
			var appended = append_(botRight(a), botLeft(b));

			insertRight(a, appended[1]);
			insertLeft(b, appended[0]);
		}
		else if (a.height > b.height)
		{
			a = nodeCopy(a);
			var appended = append_(botRight(a), b);

			insertRight(a, appended[0]);
			b = parentise(appended[1], appended[1].height + 1);
		}
		else
		{
			b = nodeCopy(b);
			var appended = append_(a, botLeft(b));

			var left = appended[0].table.length === 0 ? 0 : 1;
			var right = left === 0 ? 1 : 0;
			insertLeft(b, appended[left]);
			a = parentise(appended[right], appended[right].height + 1);
		}
	}

	// Check if balancing is needed and return based on that.
	if (a.table.length === 0 || b.table.length === 0)
	{
		return [a, b];
	}

	var toRemove = calcToRemove(a, b);
	if (toRemove <= E)
	{
		return [a, b];
	}
	return shuffle(a, b, toRemove);
}

// Helperfunctions for append_. Replaces a child node at the side of the parent.
function insertRight(parent, node)
{
	var index = parent.table.length - 1;
	parent.table[index] = node;
	parent.lengths[index] = length(node);
	parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
}

function insertLeft(parent, node)
{
	if (node.table.length > 0)
	{
		parent.table[0] = node;
		parent.lengths[0] = length(node);

		var len = length(parent.table[0]);
		for (var i = 1; i < parent.lengths.length; i++)
		{
			len += length(parent.table[i]);
			parent.lengths[i] = len;
		}
	}
	else
	{
		parent.table.shift();
		for (var i = 1; i < parent.lengths.length; i++)
		{
			parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
		}
		parent.lengths.shift();
	}
}

// Returns the extra search steps for E. Refer to the paper.
function calcToRemove(a, b)
{
	var subLengths = 0;
	for (var i = 0; i < a.table.length; i++)
	{
		subLengths += a.table[i].table.length;
	}
	for (var i = 0; i < b.table.length; i++)
	{
		subLengths += b.table[i].table.length;
	}

	var toRemove = a.table.length + b.table.length;
	return toRemove - (Math.floor((subLengths - 1) / M) + 1);
}

// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
function get2(a, b, index)
{
	return index < a.length
		? a[index]
		: b[index - a.length];
}

function set2(a, b, index, value)
{
	if (index < a.length)
	{
		a[index] = value;
	}
	else
	{
		b[index - a.length] = value;
	}
}

function saveSlot(a, b, index, slot)
{
	set2(a.table, b.table, index, slot);

	var l = (index === 0 || index === a.lengths.length)
		? 0
		: get2(a.lengths, a.lengths, index - 1);

	set2(a.lengths, b.lengths, index, l + length(slot));
}

// Creates a node or leaf with a given length at their arrays for perfomance.
// Is only used by shuffle.
function createNode(h, length)
{
	if (length < 0)
	{
		length = 0;
	}
	var a = {
		ctor: '_Array',
		height: h,
		table: new Array(length)
	};
	if (h > 0)
	{
		a.lengths = new Array(length);
	}
	return a;
}

// Returns an array of two balanced nodes.
function shuffle(a, b, toRemove)
{
	var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
	var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

	// Skip the slots with size M. More precise: copy the slot references
	// to the new node
	var read = 0;
	while (get2(a.table, b.table, read).table.length % M === 0)
	{
		set2(newA.table, newB.table, read, get2(a.table, b.table, read));
		set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
		read++;
	}

	// Pulling items from left to right, caching in a slot before writing
	// it into the new nodes.
	var write = read;
	var slot = new createNode(a.height - 1, 0);
	var from = 0;

	// If the current slot is still containing data, then there will be at
	// least one more write, so we do not break this loop yet.
	while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
	{
		// Find out the max possible items for copying.
		var source = get2(a.table, b.table, read);
		var to = Math.min(M - slot.table.length, source.table.length);

		// Copy and adjust size table.
		slot.table = slot.table.concat(source.table.slice(from, to));
		if (slot.height > 0)
		{
			var len = slot.lengths.length;
			for (var i = len; i < len + to - from; i++)
			{
				slot.lengths[i] = length(slot.table[i]);
				slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
			}
		}

		from += to;

		// Only proceed to next slots[i] if the current one was
		// fully copied.
		if (source.table.length <= to)
		{
			read++; from = 0;
		}

		// Only create a new slot if the current one is filled up.
		if (slot.table.length === M)
		{
			saveSlot(newA, newB, write, slot);
			slot = createNode(a.height - 1, 0);
			write++;
		}
	}

	// Cleanup after the loop. Copy the last slot into the new nodes.
	if (slot.table.length > 0)
	{
		saveSlot(newA, newB, write, slot);
		write++;
	}

	// Shift the untouched slots to the left
	while (read < a.table.length + b.table.length )
	{
		saveSlot(newA, newB, write, get2(a.table, b.table, read));
		read++;
		write++;
	}

	return [newA, newB];
}

// Navigation functions
function botRight(a)
{
	return a.table[a.table.length - 1];
}
function botLeft(a)
{
	return a.table[0];
}

// Copies a node for updating. Note that you should not use this if
// only updating only one of "table" or "lengths" for performance reasons.
function nodeCopy(a)
{
	var newA = {
		ctor: '_Array',
		height: a.height,
		table: a.table.slice()
	};
	if (a.height > 0)
	{
		newA.lengths = a.lengths.slice();
	}
	return newA;
}

// Returns how many items are in the tree.
function length(array)
{
	if (array.height === 0)
	{
		return array.table.length;
	}
	else
	{
		return array.lengths[array.lengths.length - 1];
	}
}

// Calculates in which slot of "table" the item probably is, then
// find the exact slot via forward searching in  "lengths". Returns the index.
function getSlot(i, a)
{
	var slot = i >> (5 * a.height);
	while (a.lengths[slot] <= i)
	{
		slot++;
	}
	return slot;
}

// Recursively creates a tree with a given height containing
// only the given item.
function create(item, h)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: [item]
		};
	}
	return {
		ctor: '_Array',
		height: h,
		table: [create(item, h - 1)],
		lengths: [1]
	};
}

// Recursively creates a tree that contains the given tree.
function parentise(tree, h)
{
	if (h === tree.height)
	{
		return tree;
	}

	return {
		ctor: '_Array',
		height: h,
		table: [parentise(tree, h - 1)],
		lengths: [length(tree)]
	};
}

// Emphasizes blood brotherhood beneath two trees.
function siblise(a, b)
{
	return {
		ctor: '_Array',
		height: a.height + 1,
		table: [a, b],
		lengths: [length(a), length(a) + length(b)]
	};
}

function toJSArray(a)
{
	var jsArray = new Array(length(a));
	toJSArray_(jsArray, 0, a);
	return jsArray;
}

function toJSArray_(jsArray, i, a)
{
	for (var t = 0; t < a.table.length; t++)
	{
		if (a.height === 0)
		{
			jsArray[i + t] = a.table[t];
		}
		else
		{
			var inc = t === 0 ? 0 : a.lengths[t - 1];
			toJSArray_(jsArray, i + inc, a.table[t]);
		}
	}
}

function fromJSArray(jsArray)
{
	if (jsArray.length === 0)
	{
		return empty;
	}
	var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
	return fromJSArray_(jsArray, h, 0, jsArray.length);
}

function fromJSArray_(jsArray, h, from, to)
{
	if (h === 0)
	{
		return {
			ctor: '_Array',
			height: 0,
			table: jsArray.slice(from, to)
		};
	}

	var step = Math.pow(M, h);
	var table = new Array(Math.ceil((to - from) / step));
	var lengths = new Array(table.length);
	for (var i = 0; i < table.length; i++)
	{
		table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
		lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
	}
	return {
		ctor: '_Array',
		height: h,
		table: table,
		lengths: lengths
	};
}

return {
	empty: empty,
	fromList: fromList,
	toList: toList,
	initialize: F2(initialize),
	append: F2(append),
	push: F2(push),
	slice: F3(slice),
	get: F2(get),
	set: F3(set),
	map: F2(map),
	indexedMap: F2(indexedMap),
	foldl: F3(foldl),
	foldr: F3(foldr),
	length: length,

	toJSArray: toJSArray,
	fromJSArray: fromJSArray
};

}();
var _elm_lang$core$Array$append = _elm_lang$core$Native_Array.append;
var _elm_lang$core$Array$length = _elm_lang$core$Native_Array.length;
var _elm_lang$core$Array$isEmpty = function (array) {
	return _elm_lang$core$Native_Utils.eq(
		_elm_lang$core$Array$length(array),
		0);
};
var _elm_lang$core$Array$slice = _elm_lang$core$Native_Array.slice;
var _elm_lang$core$Array$set = _elm_lang$core$Native_Array.set;
var _elm_lang$core$Array$get = F2(
	function (i, array) {
		return ((_elm_lang$core$Native_Utils.cmp(0, i) < 1) && (_elm_lang$core$Native_Utils.cmp(
			i,
			_elm_lang$core$Native_Array.length(array)) < 0)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Native_Array.get, i, array)) : _elm_lang$core$Maybe$Nothing;
	});
var _elm_lang$core$Array$push = _elm_lang$core$Native_Array.push;
var _elm_lang$core$Array$empty = _elm_lang$core$Native_Array.empty;
var _elm_lang$core$Array$filter = F2(
	function (isOkay, arr) {
		var update = F2(
			function (x, xs) {
				return isOkay(x) ? A2(_elm_lang$core$Native_Array.push, x, xs) : xs;
			});
		return A3(_elm_lang$core$Native_Array.foldl, update, _elm_lang$core$Native_Array.empty, arr);
	});
var _elm_lang$core$Array$foldr = _elm_lang$core$Native_Array.foldr;
var _elm_lang$core$Array$foldl = _elm_lang$core$Native_Array.foldl;
var _elm_lang$core$Array$indexedMap = _elm_lang$core$Native_Array.indexedMap;
var _elm_lang$core$Array$map = _elm_lang$core$Native_Array.map;
var _elm_lang$core$Array$toIndexedList = function (array) {
	return A3(
		_elm_lang$core$List$map2,
		F2(
			function (v0, v1) {
				return {ctor: '_Tuple2', _0: v0, _1: v1};
			}),
		A2(
			_elm_lang$core$List$range,
			0,
			_elm_lang$core$Native_Array.length(array) - 1),
		_elm_lang$core$Native_Array.toList(array));
};
var _elm_lang$core$Array$toList = _elm_lang$core$Native_Array.toList;
var _elm_lang$core$Array$fromList = _elm_lang$core$Native_Array.fromList;
var _elm_lang$core$Array$initialize = _elm_lang$core$Native_Array.initialize;
var _elm_lang$core$Array$repeat = F2(
	function (n, e) {
		return A2(
			_elm_lang$core$Array$initialize,
			n,
			_elm_lang$core$Basics$always(e));
	});
var _elm_lang$core$Array$Array = {ctor: 'Array'};

//import Maybe, Native.Array, Native.List, Native.Utils, Result //

var _elm_lang$core$Native_Json = function() {


// CORE DECODERS

function succeed(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'succeed',
		msg: msg
	};
}

function fail(msg)
{
	return {
		ctor: '<decoder>',
		tag: 'fail',
		msg: msg
	};
}

function decodePrimitive(tag)
{
	return {
		ctor: '<decoder>',
		tag: tag
	};
}

function decodeContainer(tag, decoder)
{
	return {
		ctor: '<decoder>',
		tag: tag,
		decoder: decoder
	};
}

function decodeNull(value)
{
	return {
		ctor: '<decoder>',
		tag: 'null',
		value: value
	};
}

function decodeField(field, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'field',
		field: field,
		decoder: decoder
	};
}

function decodeIndex(index, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'index',
		index: index,
		decoder: decoder
	};
}

function decodeKeyValuePairs(decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'key-value',
		decoder: decoder
	};
}

function mapMany(f, decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'map-many',
		func: f,
		decoders: decoders
	};
}

function andThen(callback, decoder)
{
	return {
		ctor: '<decoder>',
		tag: 'andThen',
		decoder: decoder,
		callback: callback
	};
}

function oneOf(decoders)
{
	return {
		ctor: '<decoder>',
		tag: 'oneOf',
		decoders: decoders
	};
}


// DECODING OBJECTS

function map1(f, d1)
{
	return mapMany(f, [d1]);
}

function map2(f, d1, d2)
{
	return mapMany(f, [d1, d2]);
}

function map3(f, d1, d2, d3)
{
	return mapMany(f, [d1, d2, d3]);
}

function map4(f, d1, d2, d3, d4)
{
	return mapMany(f, [d1, d2, d3, d4]);
}

function map5(f, d1, d2, d3, d4, d5)
{
	return mapMany(f, [d1, d2, d3, d4, d5]);
}

function map6(f, d1, d2, d3, d4, d5, d6)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6]);
}

function map7(f, d1, d2, d3, d4, d5, d6, d7)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
}

function map8(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
}


// DECODE HELPERS

function ok(value)
{
	return { tag: 'ok', value: value };
}

function badPrimitive(type, value)
{
	return { tag: 'primitive', type: type, value: value };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badField(field, nestedProblems)
{
	return { tag: 'field', field: field, rest: nestedProblems };
}

function badIndex(index, nestedProblems)
{
	return { tag: 'index', index: index, rest: nestedProblems };
}

function badOneOf(problems)
{
	return { tag: 'oneOf', problems: problems };
}

function bad(msg)
{
	return { tag: 'fail', msg: msg };
}

function badToString(problem)
{
	var context = '_';
	while (problem)
	{
		switch (problem.tag)
		{
			case 'primitive':
				return 'Expecting ' + problem.type
					+ (context === '_' ? '' : ' at ' + context)
					+ ' but instead got: ' + jsToString(problem.value);

			case 'index':
				context += '[' + problem.index + ']';
				problem = problem.rest;
				break;

			case 'field':
				context += '.' + problem.field;
				problem = problem.rest;
				break;

			case 'oneOf':
				var problems = problem.problems;
				for (var i = 0; i < problems.length; i++)
				{
					problems[i] = badToString(problems[i]);
				}
				return 'I ran into the following problems'
					+ (context === '_' ? '' : ' at ' + context)
					+ ':\n\n' + problems.join('\n');

			case 'fail':
				return 'I ran into a `fail` decoder'
					+ (context === '_' ? '' : ' at ' + context)
					+ ': ' + problem.msg;
		}
	}
}

function jsToString(value)
{
	return value === undefined
		? 'undefined'
		: JSON.stringify(value);
}


// DECODE

function runOnString(decoder, string)
{
	var json;
	try
	{
		json = JSON.parse(string);
	}
	catch (e)
	{
		return _elm_lang$core$Result$Err('Given an invalid JSON: ' + e.message);
	}
	return run(decoder, json);
}

function run(decoder, value)
{
	var result = runHelp(decoder, value);
	return (result.tag === 'ok')
		? _elm_lang$core$Result$Ok(result.value)
		: _elm_lang$core$Result$Err(badToString(result));
}

function runHelp(decoder, value)
{
	switch (decoder.tag)
	{
		case 'bool':
			return (typeof value === 'boolean')
				? ok(value)
				: badPrimitive('a Bool', value);

		case 'int':
			if (typeof value !== 'number') {
				return badPrimitive('an Int', value);
			}

			if (-2147483647 < value && value < 2147483647 && (value | 0) === value) {
				return ok(value);
			}

			if (isFinite(value) && !(value % 1)) {
				return ok(value);
			}

			return badPrimitive('an Int', value);

		case 'float':
			return (typeof value === 'number')
				? ok(value)
				: badPrimitive('a Float', value);

		case 'string':
			return (typeof value === 'string')
				? ok(value)
				: (value instanceof String)
					? ok(value + '')
					: badPrimitive('a String', value);

		case 'null':
			return (value === null)
				? ok(decoder.value)
				: badPrimitive('null', value);

		case 'value':
			return ok(value);

		case 'list':
			if (!(value instanceof Array))
			{
				return badPrimitive('a List', value);
			}

			var list = _elm_lang$core$Native_List.Nil;
			for (var i = value.length; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result)
				}
				list = _elm_lang$core$Native_List.Cons(result.value, list);
			}
			return ok(list);

		case 'array':
			if (!(value instanceof Array))
			{
				return badPrimitive('an Array', value);
			}

			var len = value.length;
			var array = new Array(len);
			for (var i = len; i--; )
			{
				var result = runHelp(decoder.decoder, value[i]);
				if (result.tag !== 'ok')
				{
					return badIndex(i, result);
				}
				array[i] = result.value;
			}
			return ok(_elm_lang$core$Native_Array.fromJSArray(array));

		case 'maybe':
			var result = runHelp(decoder.decoder, value);
			return (result.tag === 'ok')
				? ok(_elm_lang$core$Maybe$Just(result.value))
				: ok(_elm_lang$core$Maybe$Nothing);

		case 'field':
			var field = decoder.field;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return badPrimitive('an object with a field named `' + field + '`', value);
			}

			var result = runHelp(decoder.decoder, value[field]);
			return (result.tag === 'ok') ? result : badField(field, result);

		case 'index':
			var index = decoder.index;
			if (!(value instanceof Array))
			{
				return badPrimitive('an array', value);
			}
			if (index >= value.length)
			{
				return badPrimitive('a longer array. Need index ' + index + ' but there are only ' + value.length + ' entries', value);
			}

			var result = runHelp(decoder.decoder, value[index]);
			return (result.tag === 'ok') ? result : badIndex(index, result);

		case 'key-value':
			if (typeof value !== 'object' || value === null || value instanceof Array)
			{
				return badPrimitive('an object', value);
			}

			var keyValuePairs = _elm_lang$core$Native_List.Nil;
			for (var key in value)
			{
				var result = runHelp(decoder.decoder, value[key]);
				if (result.tag !== 'ok')
				{
					return badField(key, result);
				}
				var pair = _elm_lang$core$Native_Utils.Tuple2(key, result.value);
				keyValuePairs = _elm_lang$core$Native_List.Cons(pair, keyValuePairs);
			}
			return ok(keyValuePairs);

		case 'map-many':
			var answer = decoder.func;
			var decoders = decoder.decoders;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = runHelp(decoders[i], value);
				if (result.tag !== 'ok')
				{
					return result;
				}
				answer = answer(result.value);
			}
			return ok(answer);

		case 'andThen':
			var result = runHelp(decoder.decoder, value);
			return (result.tag !== 'ok')
				? result
				: runHelp(decoder.callback(result.value), value);

		case 'oneOf':
			var errors = [];
			var temp = decoder.decoders;
			while (temp.ctor !== '[]')
			{
				var result = runHelp(temp._0, value);

				if (result.tag === 'ok')
				{
					return result;
				}

				errors.push(result);

				temp = temp._1;
			}
			return badOneOf(errors);

		case 'fail':
			return bad(decoder.msg);

		case 'succeed':
			return ok(decoder.msg);
	}
}


// EQUALITY

function equality(a, b)
{
	if (a === b)
	{
		return true;
	}

	if (a.tag !== b.tag)
	{
		return false;
	}

	switch (a.tag)
	{
		case 'succeed':
		case 'fail':
			return a.msg === b.msg;

		case 'bool':
		case 'int':
		case 'float':
		case 'string':
		case 'value':
			return true;

		case 'null':
			return a.value === b.value;

		case 'list':
		case 'array':
		case 'maybe':
		case 'key-value':
			return equality(a.decoder, b.decoder);

		case 'field':
			return a.field === b.field && equality(a.decoder, b.decoder);

		case 'index':
			return a.index === b.index && equality(a.decoder, b.decoder);

		case 'map-many':
			if (a.func !== b.func)
			{
				return false;
			}
			return listEquality(a.decoders, b.decoders);

		case 'andThen':
			return a.callback === b.callback && equality(a.decoder, b.decoder);

		case 'oneOf':
			return listEquality(a.decoders, b.decoders);
	}
}

function listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

function encode(indentLevel, value)
{
	return JSON.stringify(value, null, indentLevel);
}

function identity(value)
{
	return value;
}

function encodeObject(keyValuePairs)
{
	var obj = {};
	while (keyValuePairs.ctor !== '[]')
	{
		var pair = keyValuePairs._0;
		obj[pair._0] = pair._1;
		keyValuePairs = keyValuePairs._1;
	}
	return obj;
}

return {
	encode: F2(encode),
	runOnString: F2(runOnString),
	run: F2(run),

	decodeNull: decodeNull,
	decodePrimitive: decodePrimitive,
	decodeContainer: F2(decodeContainer),

	decodeField: F2(decodeField),
	decodeIndex: F2(decodeIndex),

	map1: F2(map1),
	map2: F3(map2),
	map3: F4(map3),
	map4: F5(map4),
	map5: F6(map5),
	map6: F7(map6),
	map7: F8(map7),
	map8: F9(map8),
	decodeKeyValuePairs: decodeKeyValuePairs,

	andThen: F2(andThen),
	fail: fail,
	succeed: succeed,
	oneOf: oneOf,

	identity: identity,
	encodeNull: null,
	encodeArray: _elm_lang$core$Native_Array.toJSArray,
	encodeList: _elm_lang$core$Native_List.toArray,
	encodeObject: encodeObject,

	equality: equality
};

}();

var _elm_lang$core$Json_Encode$list = _elm_lang$core$Native_Json.encodeList;
var _elm_lang$core$Json_Encode$array = _elm_lang$core$Native_Json.encodeArray;
var _elm_lang$core$Json_Encode$object = _elm_lang$core$Native_Json.encodeObject;
var _elm_lang$core$Json_Encode$null = _elm_lang$core$Native_Json.encodeNull;
var _elm_lang$core$Json_Encode$bool = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$float = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$int = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$string = _elm_lang$core$Native_Json.identity;
var _elm_lang$core$Json_Encode$encode = _elm_lang$core$Native_Json.encode;
var _elm_lang$core$Json_Encode$Value = {ctor: 'Value'};

var _elm_lang$core$Json_Decode$null = _elm_lang$core$Native_Json.decodeNull;
var _elm_lang$core$Json_Decode$value = _elm_lang$core$Native_Json.decodePrimitive('value');
var _elm_lang$core$Json_Decode$andThen = _elm_lang$core$Native_Json.andThen;
var _elm_lang$core$Json_Decode$fail = _elm_lang$core$Native_Json.fail;
var _elm_lang$core$Json_Decode$succeed = _elm_lang$core$Native_Json.succeed;
var _elm_lang$core$Json_Decode$lazy = function (thunk) {
	return A2(
		_elm_lang$core$Json_Decode$andThen,
		thunk,
		_elm_lang$core$Json_Decode$succeed(
			{ctor: '_Tuple0'}));
};
var _elm_lang$core$Json_Decode$decodeValue = _elm_lang$core$Native_Json.run;
var _elm_lang$core$Json_Decode$decodeString = _elm_lang$core$Native_Json.runOnString;
var _elm_lang$core$Json_Decode$map8 = _elm_lang$core$Native_Json.map8;
var _elm_lang$core$Json_Decode$map7 = _elm_lang$core$Native_Json.map7;
var _elm_lang$core$Json_Decode$map6 = _elm_lang$core$Native_Json.map6;
var _elm_lang$core$Json_Decode$map5 = _elm_lang$core$Native_Json.map5;
var _elm_lang$core$Json_Decode$map4 = _elm_lang$core$Native_Json.map4;
var _elm_lang$core$Json_Decode$map3 = _elm_lang$core$Native_Json.map3;
var _elm_lang$core$Json_Decode$map2 = _elm_lang$core$Native_Json.map2;
var _elm_lang$core$Json_Decode$map = _elm_lang$core$Native_Json.map1;
var _elm_lang$core$Json_Decode$oneOf = _elm_lang$core$Native_Json.oneOf;
var _elm_lang$core$Json_Decode$maybe = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'maybe', decoder);
};
var _elm_lang$core$Json_Decode$index = _elm_lang$core$Native_Json.decodeIndex;
var _elm_lang$core$Json_Decode$field = _elm_lang$core$Native_Json.decodeField;
var _elm_lang$core$Json_Decode$at = F2(
	function (fields, decoder) {
		return A3(_elm_lang$core$List$foldr, _elm_lang$core$Json_Decode$field, decoder, fields);
	});
var _elm_lang$core$Json_Decode$keyValuePairs = _elm_lang$core$Native_Json.decodeKeyValuePairs;
var _elm_lang$core$Json_Decode$dict = function (decoder) {
	return A2(
		_elm_lang$core$Json_Decode$map,
		_elm_lang$core$Dict$fromList,
		_elm_lang$core$Json_Decode$keyValuePairs(decoder));
};
var _elm_lang$core$Json_Decode$array = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'array', decoder);
};
var _elm_lang$core$Json_Decode$list = function (decoder) {
	return A2(_elm_lang$core$Native_Json.decodeContainer, 'list', decoder);
};
var _elm_lang$core$Json_Decode$nullable = function (decoder) {
	return _elm_lang$core$Json_Decode$oneOf(
		{
			ctor: '::',
			_0: _elm_lang$core$Json_Decode$null(_elm_lang$core$Maybe$Nothing),
			_1: {
				ctor: '::',
				_0: A2(_elm_lang$core$Json_Decode$map, _elm_lang$core$Maybe$Just, decoder),
				_1: {ctor: '[]'}
			}
		});
};
var _elm_lang$core$Json_Decode$float = _elm_lang$core$Native_Json.decodePrimitive('float');
var _elm_lang$core$Json_Decode$int = _elm_lang$core$Native_Json.decodePrimitive('int');
var _elm_lang$core$Json_Decode$bool = _elm_lang$core$Native_Json.decodePrimitive('bool');
var _elm_lang$core$Json_Decode$string = _elm_lang$core$Native_Json.decodePrimitive('string');
var _elm_lang$core$Json_Decode$Decoder = {ctor: 'Decoder'};

var _elm_lang$dom$Native_Dom = function() {

var fakeNode = {
	addEventListener: function() {},
	removeEventListener: function() {}
};

var onDocument = on(typeof document !== 'undefined' ? document : fakeNode);
var onWindow = on(typeof window !== 'undefined' ? window : fakeNode);

function on(node)
{
	return function(eventName, decoder, toTask)
	{
		return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback) {

			function performTask(event)
			{
				var result = A2(_elm_lang$core$Json_Decode$decodeValue, decoder, event);
				if (result.ctor === 'Ok')
				{
					_elm_lang$core$Native_Scheduler.rawSpawn(toTask(result._0));
				}
			}

			node.addEventListener(eventName, performTask);

			return function()
			{
				node.removeEventListener(eventName, performTask);
			};
		});
	};
}

var rAF = typeof requestAnimationFrame !== 'undefined'
	? requestAnimationFrame
	: function(callback) { callback(); };

function withNode(id, doStuff)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		rAF(function()
		{
			var node = document.getElementById(id);
			if (node === null)
			{
				callback(_elm_lang$core$Native_Scheduler.fail({ ctor: 'NotFound', _0: id }));
				return;
			}
			callback(_elm_lang$core$Native_Scheduler.succeed(doStuff(node)));
		});
	});
}


// FOCUS

function focus(id)
{
	return withNode(id, function(node) {
		node.focus();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function blur(id)
{
	return withNode(id, function(node) {
		node.blur();
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SCROLLING

function getScrollTop(id)
{
	return withNode(id, function(node) {
		return node.scrollTop;
	});
}

function setScrollTop(id, desiredScrollTop)
{
	return withNode(id, function(node) {
		node.scrollTop = desiredScrollTop;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toBottom(id)
{
	return withNode(id, function(node) {
		node.scrollTop = node.scrollHeight;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function getScrollLeft(id)
{
	return withNode(id, function(node) {
		return node.scrollLeft;
	});
}

function setScrollLeft(id, desiredScrollLeft)
{
	return withNode(id, function(node) {
		node.scrollLeft = desiredScrollLeft;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}

function toRight(id)
{
	return withNode(id, function(node) {
		node.scrollLeft = node.scrollWidth;
		return _elm_lang$core$Native_Utils.Tuple0;
	});
}


// SIZE

function width(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollWidth;
			case 'VisibleContent':
				return node.clientWidth;
			case 'VisibleContentWithBorders':
				return node.offsetWidth;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.right - rect.left;
		}
	});
}

function height(options, id)
{
	return withNode(id, function(node) {
		switch (options.ctor)
		{
			case 'Content':
				return node.scrollHeight;
			case 'VisibleContent':
				return node.clientHeight;
			case 'VisibleContentWithBorders':
				return node.offsetHeight;
			case 'VisibleContentWithBordersAndMargins':
				var rect = node.getBoundingClientRect();
				return rect.bottom - rect.top;
		}
	});
}

return {
	onDocument: F3(onDocument),
	onWindow: F3(onWindow),

	focus: focus,
	blur: blur,

	getScrollTop: getScrollTop,
	setScrollTop: F2(setScrollTop),
	getScrollLeft: getScrollLeft,
	setScrollLeft: F2(setScrollLeft),
	toBottom: toBottom,
	toRight: toRight,

	height: F2(height),
	width: F2(width)
};

}();

var _elm_lang$dom$Dom_LowLevel$onWindow = _elm_lang$dom$Native_Dom.onWindow;
var _elm_lang$dom$Dom_LowLevel$onDocument = _elm_lang$dom$Native_Dom.onDocument;

var _elm_lang$virtual_dom$VirtualDom_Debug$wrap;
var _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags;

var _elm_lang$virtual_dom$Native_VirtualDom = function() {

var STYLE_KEY = 'STYLE';
var EVENT_KEY = 'EVENT';
var ATTR_KEY = 'ATTR';
var ATTR_NS_KEY = 'ATTR_NS';

var localDoc = typeof document !== 'undefined' ? document : {};


////////////  VIRTUAL DOM NODES  ////////////


function text(string)
{
	return {
		type: 'text',
		text: string
	};
}


function node(tag)
{
	return F2(function(factList, kidList) {
		return nodeHelp(tag, factList, kidList);
	});
}


function nodeHelp(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function keyedNode(tag, factList, kidList)
{
	var organized = organizeFacts(factList);
	var namespace = organized.namespace;
	var facts = organized.facts;

	var children = [];
	var descendantsCount = 0;
	while (kidList.ctor !== '[]')
	{
		var kid = kidList._0;
		descendantsCount += (kid._1.descendantsCount || 0);
		children.push(kid);
		kidList = kidList._1;
	}
	descendantsCount += children.length;

	return {
		type: 'keyed-node',
		tag: tag,
		facts: facts,
		children: children,
		namespace: namespace,
		descendantsCount: descendantsCount
	};
}


function custom(factList, model, impl)
{
	var facts = organizeFacts(factList).facts;

	return {
		type: 'custom',
		facts: facts,
		model: model,
		impl: impl
	};
}


function map(tagger, node)
{
	return {
		type: 'tagger',
		tagger: tagger,
		node: node,
		descendantsCount: 1 + (node.descendantsCount || 0)
	};
}


function thunk(func, args, thunk)
{
	return {
		type: 'thunk',
		func: func,
		args: args,
		thunk: thunk,
		node: undefined
	};
}

function lazy(fn, a)
{
	return thunk(fn, [a], function() {
		return fn(a);
	});
}

function lazy2(fn, a, b)
{
	return thunk(fn, [a,b], function() {
		return A2(fn, a, b);
	});
}

function lazy3(fn, a, b, c)
{
	return thunk(fn, [a,b,c], function() {
		return A3(fn, a, b, c);
	});
}



// FACTS


function organizeFacts(factList)
{
	var namespace, facts = {};

	while (factList.ctor !== '[]')
	{
		var entry = factList._0;
		var key = entry.key;

		if (key === ATTR_KEY || key === ATTR_NS_KEY || key === EVENT_KEY)
		{
			var subFacts = facts[key] || {};
			subFacts[entry.realKey] = entry.value;
			facts[key] = subFacts;
		}
		else if (key === STYLE_KEY)
		{
			var styles = facts[key] || {};
			var styleList = entry.value;
			while (styleList.ctor !== '[]')
			{
				var style = styleList._0;
				styles[style._0] = style._1;
				styleList = styleList._1;
			}
			facts[key] = styles;
		}
		else if (key === 'namespace')
		{
			namespace = entry.value;
		}
		else if (key === 'className')
		{
			var classes = facts[key];
			facts[key] = typeof classes === 'undefined'
				? entry.value
				: classes + ' ' + entry.value;
		}
 		else
		{
			facts[key] = entry.value;
		}
		factList = factList._1;
	}

	return {
		facts: facts,
		namespace: namespace
	};
}



////////////  PROPERTIES AND ATTRIBUTES  ////////////


function style(value)
{
	return {
		key: STYLE_KEY,
		value: value
	};
}


function property(key, value)
{
	return {
		key: key,
		value: value
	};
}


function attribute(key, value)
{
	return {
		key: ATTR_KEY,
		realKey: key,
		value: value
	};
}


function attributeNS(namespace, key, value)
{
	return {
		key: ATTR_NS_KEY,
		realKey: key,
		value: {
			value: value,
			namespace: namespace
		}
	};
}


function on(name, options, decoder)
{
	return {
		key: EVENT_KEY,
		realKey: name,
		value: {
			options: options,
			decoder: decoder
		}
	};
}


function equalEvents(a, b)
{
	if (a.options !== b.options)
	{
		if (a.options.stopPropagation !== b.options.stopPropagation || a.options.preventDefault !== b.options.preventDefault)
		{
			return false;
		}
	}
	return _elm_lang$core$Native_Json.equality(a.decoder, b.decoder);
}


function mapProperty(func, property)
{
	if (property.key !== EVENT_KEY)
	{
		return property;
	}
	return on(
		property.realKey,
		property.value.options,
		A2(_elm_lang$core$Json_Decode$map, func, property.value.decoder)
	);
}


////////////  RENDER  ////////////


function render(vNode, eventNode)
{
	switch (vNode.type)
	{
		case 'thunk':
			if (!vNode.node)
			{
				vNode.node = vNode.thunk();
			}
			return render(vNode.node, eventNode);

		case 'tagger':
			var subNode = vNode.node;
			var tagger = vNode.tagger;

			while (subNode.type === 'tagger')
			{
				typeof tagger !== 'object'
					? tagger = [tagger, subNode.tagger]
					: tagger.push(subNode.tagger);

				subNode = subNode.node;
			}

			var subEventRoot = { tagger: tagger, parent: eventNode };
			var domNode = render(subNode, subEventRoot);
			domNode.elm_event_node_ref = subEventRoot;
			return domNode;

		case 'text':
			return localDoc.createTextNode(vNode.text);

		case 'node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i], eventNode));
			}

			return domNode;

		case 'keyed-node':
			var domNode = vNode.namespace
				? localDoc.createElementNS(vNode.namespace, vNode.tag)
				: localDoc.createElement(vNode.tag);

			applyFacts(domNode, eventNode, vNode.facts);

			var children = vNode.children;

			for (var i = 0; i < children.length; i++)
			{
				domNode.appendChild(render(children[i]._1, eventNode));
			}

			return domNode;

		case 'custom':
			var domNode = vNode.impl.render(vNode.model);
			applyFacts(domNode, eventNode, vNode.facts);
			return domNode;
	}
}



////////////  APPLY FACTS  ////////////


function applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		switch (key)
		{
			case STYLE_KEY:
				applyStyles(domNode, value);
				break;

			case EVENT_KEY:
				applyEvents(domNode, eventNode, value);
				break;

			case ATTR_KEY:
				applyAttrs(domNode, value);
				break;

			case ATTR_NS_KEY:
				applyAttrsNS(domNode, value);
				break;

			case 'value':
				if (domNode[key] !== value)
				{
					domNode[key] = value;
				}
				break;

			default:
				domNode[key] = value;
				break;
		}
	}
}

function applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}

function applyEvents(domNode, eventNode, events)
{
	var allHandlers = domNode.elm_handlers || {};

	for (var key in events)
	{
		var handler = allHandlers[key];
		var value = events[key];

		if (typeof value === 'undefined')
		{
			domNode.removeEventListener(key, handler);
			allHandlers[key] = undefined;
		}
		else if (typeof handler === 'undefined')
		{
			var handler = makeEventHandler(eventNode, value);
			domNode.addEventListener(key, handler);
			allHandlers[key] = handler;
		}
		else
		{
			handler.info = value;
		}
	}

	domNode.elm_handlers = allHandlers;
}

function makeEventHandler(eventNode, info)
{
	function eventHandler(event)
	{
		var info = eventHandler.info;

		var value = A2(_elm_lang$core$Native_Json.run, info.decoder, event);

		if (value.ctor === 'Ok')
		{
			var options = info.options;
			if (options.stopPropagation)
			{
				event.stopPropagation();
			}
			if (options.preventDefault)
			{
				event.preventDefault();
			}

			var message = value._0;

			var currentEventNode = eventNode;
			while (currentEventNode)
			{
				var tagger = currentEventNode.tagger;
				if (typeof tagger === 'function')
				{
					message = tagger(message);
				}
				else
				{
					for (var i = tagger.length; i--; )
					{
						message = tagger[i](message);
					}
				}
				currentEventNode = currentEventNode.parent;
			}
		}
	};

	eventHandler.info = info;

	return eventHandler;
}

function applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		if (typeof value === 'undefined')
		{
			domNode.removeAttribute(key);
		}
		else
		{
			domNode.setAttribute(key, value);
		}
	}
}

function applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.namespace;
		var value = pair.value;

		if (typeof value === 'undefined')
		{
			domNode.removeAttributeNS(namespace, key);
		}
		else
		{
			domNode.setAttributeNS(namespace, key, value);
		}
	}
}



////////////  DIFF  ////////////


function diff(a, b)
{
	var patches = [];
	diffHelp(a, b, patches, 0);
	return patches;
}


function makePatch(type, index, data)
{
	return {
		index: index,
		type: type,
		data: data,
		domNode: undefined,
		eventNode: undefined
	};
}


function diffHelp(a, b, patches, index)
{
	if (a === b)
	{
		return;
	}

	var aType = a.type;
	var bType = b.type;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (aType !== bType)
	{
		patches.push(makePatch('p-redraw', index, b));
		return;
	}

	// Now we know that both nodes are the same type.
	switch (bType)
	{
		case 'thunk':
			var aArgs = a.args;
			var bArgs = b.args;
			var i = aArgs.length;
			var same = a.func === b.func && i === bArgs.length;
			while (same && i--)
			{
				same = aArgs[i] === bArgs[i];
			}
			if (same)
			{
				b.node = a.node;
				return;
			}
			b.node = b.thunk();
			var subPatches = [];
			diffHelp(a.node, b.node, subPatches, 0);
			if (subPatches.length > 0)
			{
				patches.push(makePatch('p-thunk', index, subPatches));
			}
			return;

		case 'tagger':
			// gather nested taggers
			var aTaggers = a.tagger;
			var bTaggers = b.tagger;
			var nesting = false;

			var aSubNode = a.node;
			while (aSubNode.type === 'tagger')
			{
				nesting = true;

				typeof aTaggers !== 'object'
					? aTaggers = [aTaggers, aSubNode.tagger]
					: aTaggers.push(aSubNode.tagger);

				aSubNode = aSubNode.node;
			}

			var bSubNode = b.node;
			while (bSubNode.type === 'tagger')
			{
				nesting = true;

				typeof bTaggers !== 'object'
					? bTaggers = [bTaggers, bSubNode.tagger]
					: bTaggers.push(bSubNode.tagger);

				bSubNode = bSubNode.node;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && aTaggers.length !== bTaggers.length)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !pairwiseRefEqual(aTaggers, bTaggers) : aTaggers !== bTaggers)
			{
				patches.push(makePatch('p-tagger', index, bTaggers));
			}

			// diff everything below the taggers
			diffHelp(aSubNode, bSubNode, patches, index + 1);
			return;

		case 'text':
			if (a.text !== b.text)
			{
				patches.push(makePatch('p-text', index, b.text));
				return;
			}

			return;

		case 'node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffChildren(a, b, patches, index);
			return;

		case 'keyed-node':
			// Bail if obvious indicators have changed. Implies more serious
			// structural changes such that it's not worth it to diff.
			if (a.tag !== b.tag || a.namespace !== b.namespace)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);

			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			diffKeyedChildren(a, b, patches, index);
			return;

		case 'custom':
			if (a.impl !== b.impl)
			{
				patches.push(makePatch('p-redraw', index, b));
				return;
			}

			var factsDiff = diffFacts(a.facts, b.facts);
			if (typeof factsDiff !== 'undefined')
			{
				patches.push(makePatch('p-facts', index, factsDiff));
			}

			var patch = b.impl.diff(a,b);
			if (patch)
			{
				patches.push(makePatch('p-custom', index, patch));
				return;
			}

			return;
	}
}


// assumes the incoming arrays are the same length
function pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function diffFacts(a, b, category)
{
	var diff;

	// look for changes and removals
	for (var aKey in a)
	{
		if (aKey === STYLE_KEY || aKey === EVENT_KEY || aKey === ATTR_KEY || aKey === ATTR_NS_KEY)
		{
			var subDiff = diffFacts(a[aKey], b[aKey] || {}, aKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[aKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(aKey in b))
		{
			diff = diff || {};
			diff[aKey] =
				(typeof category === 'undefined')
					? (typeof a[aKey] === 'string' ? '' : null)
					:
				(category === STYLE_KEY)
					? ''
					:
				(category === EVENT_KEY || category === ATTR_KEY)
					? undefined
					:
				{ namespace: a[aKey].namespace, value: undefined };

			continue;
		}

		var aValue = a[aKey];
		var bValue = b[aKey];

		// reference equal, so don't worry about it
		if (aValue === bValue && aKey !== 'value'
			|| category === EVENT_KEY && equalEvents(aValue, bValue))
		{
			continue;
		}

		diff = diff || {};
		diff[aKey] = bValue;
	}

	// add new stuff
	for (var bKey in b)
	{
		if (!(bKey in a))
		{
			diff = diff || {};
			diff[bKey] = b[bKey];
		}
	}

	return diff;
}


function diffChildren(aParent, bParent, patches, rootIndex)
{
	var aChildren = aParent.children;
	var bChildren = bParent.children;

	var aLen = aChildren.length;
	var bLen = bChildren.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (aLen > bLen)
	{
		patches.push(makePatch('p-remove-last', rootIndex, aLen - bLen));
	}
	else if (aLen < bLen)
	{
		patches.push(makePatch('p-append', rootIndex, bChildren.slice(aLen)));
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	var index = rootIndex;
	var minLen = aLen < bLen ? aLen : bLen;
	for (var i = 0; i < minLen; i++)
	{
		index++;
		var aChild = aChildren[i];
		diffHelp(aChild, bChildren[i], patches, index);
		index += aChild.descendantsCount || 0;
	}
}



////////////  KEYED DIFF  ////////////


function diffKeyedChildren(aParent, bParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var aChildren = aParent.children;
	var bChildren = bParent.children;
	var aLen = aChildren.length;
	var bLen = bChildren.length;
	var aIndex = 0;
	var bIndex = 0;

	var index = rootIndex;

	while (aIndex < aLen && bIndex < bLen)
	{
		var a = aChildren[aIndex];
		var b = bChildren[bIndex];

		var aKey = a._0;
		var bKey = b._0;
		var aNode = a._1;
		var bNode = b._1;

		// check if keys match

		if (aKey === bKey)
		{
			index++;
			diffHelp(aNode, bNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex++;
			bIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var aLookAhead = aIndex + 1 < aLen;
		var bLookAhead = bIndex + 1 < bLen;

		if (aLookAhead)
		{
			var aNext = aChildren[aIndex + 1];
			var aNextKey = aNext._0;
			var aNextNode = aNext._1;
			var oldMatch = bKey === aNextKey;
		}

		if (bLookAhead)
		{
			var bNext = bChildren[bIndex + 1];
			var bNextKey = bNext._0;
			var bNextNode = bNext._1;
			var newMatch = aKey === bNextKey;
		}


		// swap a and b
		if (aLookAhead && bLookAhead && newMatch && oldMatch)
		{
			index++;
			diffHelp(aNode, bNextNode, localPatches, index);
			insertNode(changes, localPatches, aKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			removeNode(changes, localPatches, aKey, aNextNode, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		// insert b
		if (bLookAhead && newMatch)
		{
			index++;
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			diffHelp(aNode, bNextNode, localPatches, index);
			index += aNode.descendantsCount || 0;

			aIndex += 1;
			bIndex += 2;
			continue;
		}

		// remove a
		if (aLookAhead && oldMatch)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 1;
			continue;
		}

		// remove a, insert b
		if (aLookAhead && bLookAhead && aNextKey === bNextKey)
		{
			index++;
			removeNode(changes, localPatches, aKey, aNode, index);
			insertNode(changes, localPatches, bKey, bNode, bIndex, inserts);
			index += aNode.descendantsCount || 0;

			index++;
			diffHelp(aNextNode, bNextNode, localPatches, index);
			index += aNextNode.descendantsCount || 0;

			aIndex += 2;
			bIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (aIndex < aLen)
	{
		index++;
		var a = aChildren[aIndex];
		var aNode = a._1;
		removeNode(changes, localPatches, a._0, aNode, index);
		index += aNode.descendantsCount || 0;
		aIndex++;
	}

	var endInserts;
	while (bIndex < bLen)
	{
		endInserts = endInserts || [];
		var b = bChildren[bIndex];
		insertNode(changes, localPatches, b._0, b._1, undefined, endInserts);
		bIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || typeof endInserts !== 'undefined')
	{
		patches.push(makePatch('p-reorder', rootIndex, {
			patches: localPatches,
			inserts: inserts,
			endInserts: endInserts
		}));
	}
}



////////////  CHANGES FROM KEYED DIFF  ////////////


var POSTFIX = '_elmW6BL';


function insertNode(changes, localPatches, key, vnode, bIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		entry = {
			tag: 'insert',
			vnode: vnode,
			index: bIndex,
			data: undefined
		};

		inserts.push({ index: bIndex, entry: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.tag === 'remove')
	{
		inserts.push({ index: bIndex, entry: entry });

		entry.tag = 'move';
		var subPatches = [];
		diffHelp(entry.vnode, vnode, subPatches, entry.index);
		entry.index = bIndex;
		entry.data.data = {
			patches: subPatches,
			entry: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	insertNode(changes, localPatches, key + POSTFIX, vnode, bIndex, inserts);
}


function removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (typeof entry === 'undefined')
	{
		var patch = makePatch('p-remove', index, undefined);
		localPatches.push(patch);

		changes[key] = {
			tag: 'remove',
			vnode: vnode,
			index: index,
			data: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.tag === 'insert')
	{
		entry.tag = 'move';
		var subPatches = [];
		diffHelp(vnode, entry.vnode, subPatches, index);

		var patch = makePatch('p-remove', index, {
			patches: subPatches,
			entry: entry
		});
		localPatches.push(patch);

		return;
	}

	// this key has already been removed or moved, a duplicate!
	removeNode(changes, localPatches, key + POSTFIX, vnode, index);
}



////////////  ADD DOM NODES  ////////////
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function addDomNodes(domNode, vNode, patches, eventNode)
{
	addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.descendantsCount, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.index;

	while (index === low)
	{
		var patchType = patch.type;

		if (patchType === 'p-thunk')
		{
			addDomNodes(domNode, vNode.node, patch.data, eventNode);
		}
		else if (patchType === 'p-reorder')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var subPatches = patch.data.patches;
			if (subPatches.length > 0)
			{
				addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 'p-remove')
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;

			var data = patch.data;
			if (typeof data !== 'undefined')
			{
				data.entry.data = domNode;
				var subPatches = data.patches;
				if (subPatches.length > 0)
				{
					addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.domNode = domNode;
			patch.eventNode = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.index) > high)
		{
			return i;
		}
	}

	switch (vNode.type)
	{
		case 'tagger':
			var subNode = vNode.node;

			while (subNode.type === "tagger")
			{
				subNode = subNode.node;
			}

			return addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);

		case 'node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j];
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'keyed-node':
			var vChildren = vNode.children;
			var childNodes = domNode.childNodes;
			for (var j = 0; j < vChildren.length; j++)
			{
				low++;
				var vChild = vChildren[j]._1;
				var nextLow = low + (vChild.descendantsCount || 0);
				if (low <= index && index <= nextLow)
				{
					i = addDomNodesHelp(childNodes[j], vChild, patches, i, low, nextLow, eventNode);
					if (!(patch = patches[i]) || (index = patch.index) > high)
					{
						return i;
					}
				}
				low = nextLow;
			}
			return i;

		case 'text':
		case 'thunk':
			throw new Error('should never traverse `text` or `thunk` nodes like this');
	}
}



////////////  APPLY PATCHES  ////////////


function applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return applyPatchesHelp(rootDomNode, patches);
}

function applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.domNode
		var newNode = applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function applyPatch(domNode, patch)
{
	switch (patch.type)
	{
		case 'p-redraw':
			return applyPatchRedraw(domNode, patch.data, patch.eventNode);

		case 'p-facts':
			applyFacts(domNode, patch.eventNode, patch.data);
			return domNode;

		case 'p-text':
			domNode.replaceData(0, domNode.length, patch.data);
			return domNode;

		case 'p-thunk':
			return applyPatchesHelp(domNode, patch.data);

		case 'p-tagger':
			if (typeof domNode.elm_event_node_ref !== 'undefined')
			{
				domNode.elm_event_node_ref.tagger = patch.data;
			}
			else
			{
				domNode.elm_event_node_ref = { tagger: patch.data, parent: patch.eventNode };
			}
			return domNode;

		case 'p-remove-last':
			var i = patch.data;
			while (i--)
			{
				domNode.removeChild(domNode.lastChild);
			}
			return domNode;

		case 'p-append':
			var newNodes = patch.data;
			for (var i = 0; i < newNodes.length; i++)
			{
				domNode.appendChild(render(newNodes[i], patch.eventNode));
			}
			return domNode;

		case 'p-remove':
			var data = patch.data;
			if (typeof data === 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.entry;
			if (typeof entry.index !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.data = applyPatchesHelp(domNode, data.patches);
			return domNode;

		case 'p-reorder':
			return applyPatchReorder(domNode, patch);

		case 'p-custom':
			var impl = patch.data;
			return impl.applyPatch(domNode, impl.data);

		default:
			throw new Error('Ran into an unknown patch!');
	}
}


function applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = render(vNode, eventNode);

	if (typeof newNode.elm_event_node_ref === 'undefined')
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function applyPatchReorder(domNode, patch)
{
	var data = patch.data;

	// remove end inserts
	var frag = applyPatchReorderEndInsertsHelp(data.endInserts, patch);

	// removals
	domNode = applyPatchesHelp(domNode, data.patches);

	// inserts
	var inserts = data.inserts;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.entry;
		var node = entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode);
		domNode.insertBefore(node, domNode.childNodes[insert.index]);
	}

	// add end inserts
	if (typeof frag !== 'undefined')
	{
		domNode.appendChild(frag);
	}

	return domNode;
}


function applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (typeof endInserts === 'undefined')
	{
		return;
	}

	var frag = localDoc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.entry;
		frag.appendChild(entry.tag === 'move'
			? entry.data
			: render(entry.vnode, patch.eventNode)
		);
	}
	return frag;
}


// PROGRAMS

var program = makeProgram(checkNoFlags);
var programWithFlags = makeProgram(checkYesFlags);

function makeProgram(flagChecker)
{
	return F2(function(debugWrap, impl)
	{
		return function(flagDecoder)
		{
			return function(object, moduleName, debugMetadata)
			{
				var checker = flagChecker(flagDecoder, moduleName);
				if (typeof debugMetadata === 'undefined')
				{
					normalSetup(impl, object, moduleName, checker);
				}
				else
				{
					debugSetup(A2(debugWrap, debugMetadata, impl), object, moduleName, checker);
				}
			};
		};
	});
}

function staticProgram(vNode)
{
	var nothing = _elm_lang$core$Native_Utils.Tuple2(
		_elm_lang$core$Native_Utils.Tuple0,
		_elm_lang$core$Platform_Cmd$none
	);
	return A2(program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, {
		init: nothing,
		view: function() { return vNode; },
		update: F2(function() { return nothing; }),
		subscriptions: function() { return _elm_lang$core$Platform_Sub$none; }
	})();
}


// FLAG CHECKERS

function checkNoFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flags === 'undefined')
		{
			return init;
		}

		var errorMessage =
			'The `' + moduleName + '` module does not need flags.\n'
			+ 'Initialize it with no arguments and you should be all set!';

		crash(errorMessage, domNode);
	};
}

function checkYesFlags(flagDecoder, moduleName)
{
	return function(init, flags, domNode)
	{
		if (typeof flagDecoder === 'undefined')
		{
			var errorMessage =
				'Are you trying to sneak a Never value into Elm? Trickster!\n'
				+ 'It looks like ' + moduleName + '.main is defined with `programWithFlags` but has type `Program Never`.\n'
				+ 'Use `program` instead if you do not want flags.'

			crash(errorMessage, domNode);
		}

		var result = A2(_elm_lang$core$Native_Json.run, flagDecoder, flags);
		if (result.ctor === 'Ok')
		{
			return init(result._0);
		}

		var errorMessage =
			'Trying to initialize the `' + moduleName + '` module with an unexpected flag.\n'
			+ 'I tried to convert it to an Elm value, but ran into this problem:\n\n'
			+ result._0;

		crash(errorMessage, domNode);
	};
}

function crash(errorMessage, domNode)
{
	if (domNode)
	{
		domNode.innerHTML =
			'<div style="padding-left:1em;">'
			+ '<h2 style="font-weight:normal;"><b>Oops!</b> Something went wrong when starting your Elm program.</h2>'
			+ '<pre style="padding-left:1em;">' + errorMessage + '</pre>'
			+ '</div>';
	}

	throw new Error(errorMessage);
}


//  NORMAL SETUP

function normalSetup(impl, object, moduleName, flagChecker)
{
	object['embed'] = function embed(node, flags)
	{
		while (node.lastChild)
		{
			node.removeChild(node.lastChild);
		}

		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update,
			impl.subscriptions,
			normalRenderer(node, impl.view)
		);
	};

	object['fullscreen'] = function fullscreen(flags)
	{
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update,
			impl.subscriptions,
			normalRenderer(document.body, impl.view)
		);
	};
}

function normalRenderer(parentNode, view)
{
	return function(tagger, initialModel)
	{
		var eventNode = { tagger: tagger, parent: undefined };
		var initialVirtualNode = view(initialModel);
		var domNode = render(initialVirtualNode, eventNode);
		parentNode.appendChild(domNode);
		return makeStepper(domNode, view, initialVirtualNode, eventNode);
	};
}


// STEPPER

var rAF =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { setTimeout(callback, 1000 / 60); };

function makeStepper(domNode, view, initialVirtualNode, eventNode)
{
	var state = 'NO_REQUEST';
	var currNode = initialVirtualNode;
	var nextModel;

	function updateIfNeeded()
	{
		switch (state)
		{
			case 'NO_REQUEST':
				throw new Error(
					'Unexpected draw callback.\n' +
					'Please report this to <https://github.com/elm-lang/virtual-dom/issues>.'
				);

			case 'PENDING_REQUEST':
				rAF(updateIfNeeded);
				state = 'EXTRA_REQUEST';

				var nextNode = view(nextModel);
				var patches = diff(currNode, nextNode);
				domNode = applyPatches(domNode, currNode, patches, eventNode);
				currNode = nextNode;

				return;

			case 'EXTRA_REQUEST':
				state = 'NO_REQUEST';
				return;
		}
	}

	return function stepper(model)
	{
		if (state === 'NO_REQUEST')
		{
			rAF(updateIfNeeded);
		}
		state = 'PENDING_REQUEST';
		nextModel = model;
	};
}


// DEBUG SETUP

function debugSetup(impl, object, moduleName, flagChecker)
{
	object['fullscreen'] = function fullscreen(flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, document.body),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, document.body, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};

	object['embed'] = function fullscreen(node, flags)
	{
		var popoutRef = { doc: undefined };
		return _elm_lang$core$Native_Platform.initialize(
			flagChecker(impl.init, flags, node),
			impl.update(scrollTask(popoutRef)),
			impl.subscriptions,
			debugRenderer(moduleName, node, popoutRef, impl.view, impl.viewIn, impl.viewOut)
		);
	};
}

function scrollTask(popoutRef)
{
	return _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)
	{
		var doc = popoutRef.doc;
		if (doc)
		{
			var msgs = doc.getElementsByClassName('debugger-sidebar-messages')[0];
			if (msgs)
			{
				msgs.scrollTop = msgs.scrollHeight;
			}
		}
		callback(_elm_lang$core$Native_Scheduler.succeed(_elm_lang$core$Native_Utils.Tuple0));
	});
}


function debugRenderer(moduleName, parentNode, popoutRef, view, viewIn, viewOut)
{
	return function(tagger, initialModel)
	{
		var appEventNode = { tagger: tagger, parent: undefined };
		var eventNode = { tagger: tagger, parent: undefined };

		// make normal stepper
		var appVirtualNode = view(initialModel);
		var appNode = render(appVirtualNode, appEventNode);
		parentNode.appendChild(appNode);
		var appStepper = makeStepper(appNode, view, appVirtualNode, appEventNode);

		// make overlay stepper
		var overVirtualNode = viewIn(initialModel)._1;
		var overNode = render(overVirtualNode, eventNode);
		parentNode.appendChild(overNode);
		var wrappedViewIn = wrapViewIn(appEventNode, overNode, viewIn);
		var overStepper = makeStepper(overNode, wrappedViewIn, overVirtualNode, eventNode);

		// make debugger stepper
		var debugStepper = makeDebugStepper(initialModel, viewOut, eventNode, parentNode, moduleName, popoutRef);

		return function stepper(model)
		{
			appStepper(model);
			overStepper(model);
			debugStepper(model);
		}
	};
}

function makeDebugStepper(initialModel, view, eventNode, parentNode, moduleName, popoutRef)
{
	var curr;
	var domNode;

	return function stepper(model)
	{
		if (!model.isDebuggerOpen)
		{
			return;
		}

		if (!popoutRef.doc)
		{
			curr = view(model);
			domNode = openDebugWindow(moduleName, popoutRef, curr, eventNode);
			return;
		}

		// switch to document of popout
		localDoc = popoutRef.doc;

		var next = view(model);
		var patches = diff(curr, next);
		domNode = applyPatches(domNode, curr, patches, eventNode);
		curr = next;

		// switch back to normal document
		localDoc = document;
	};
}

function openDebugWindow(moduleName, popoutRef, virtualNode, eventNode)
{
	var w = 900;
	var h = 360;
	var x = screen.width - w;
	var y = screen.height - h;
	var debugWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);

	// switch to window document
	localDoc = debugWindow.document;

	popoutRef.doc = localDoc;
	localDoc.title = 'Debugger - ' + moduleName;
	localDoc.body.style.margin = '0';
	localDoc.body.style.padding = '0';
	var domNode = render(virtualNode, eventNode);
	localDoc.body.appendChild(domNode);

	localDoc.addEventListener('keydown', function(event) {
		if (event.metaKey && event.which === 82)
		{
			window.location.reload();
		}
		if (event.which === 38)
		{
			eventNode.tagger({ ctor: 'Up' });
			event.preventDefault();
		}
		if (event.which === 40)
		{
			eventNode.tagger({ ctor: 'Down' });
			event.preventDefault();
		}
	});

	function close()
	{
		popoutRef.doc = undefined;
		debugWindow.close();
	}
	window.addEventListener('unload', close);
	debugWindow.addEventListener('unload', function() {
		popoutRef.doc = undefined;
		window.removeEventListener('unload', close);
		eventNode.tagger({ ctor: 'Close' });
	});

	// switch back to the normal document
	localDoc = document;

	return domNode;
}


// BLOCK EVENTS

function wrapViewIn(appEventNode, overlayNode, viewIn)
{
	var ignorer = makeIgnorer(overlayNode);
	var blocking = 'Normal';
	var overflow;

	var normalTagger = appEventNode.tagger;
	var blockTagger = function() {};

	return function(model)
	{
		var tuple = viewIn(model);
		var newBlocking = tuple._0.ctor;
		appEventNode.tagger = newBlocking === 'Normal' ? normalTagger : blockTagger;
		if (blocking !== newBlocking)
		{
			traverse('removeEventListener', ignorer, blocking);
			traverse('addEventListener', ignorer, newBlocking);

			if (blocking === 'Normal')
			{
				overflow = document.body.style.overflow;
				document.body.style.overflow = 'hidden';
			}

			if (newBlocking === 'Normal')
			{
				document.body.style.overflow = overflow;
			}

			blocking = newBlocking;
		}
		return tuple._1;
	}
}

function traverse(verbEventListener, ignorer, blocking)
{
	switch(blocking)
	{
		case 'Normal':
			return;

		case 'Pause':
			return traverseHelp(verbEventListener, ignorer, mostEvents);

		case 'Message':
			return traverseHelp(verbEventListener, ignorer, allEvents);
	}
}

function traverseHelp(verbEventListener, handler, eventNames)
{
	for (var i = 0; i < eventNames.length; i++)
	{
		document.body[verbEventListener](eventNames[i], handler, true);
	}
}

function makeIgnorer(overlayNode)
{
	return function(event)
	{
		if (event.type === 'keydown' && event.metaKey && event.which === 82)
		{
			return;
		}

		var isScroll = event.type === 'scroll' || event.type === 'wheel';

		var node = event.target;
		while (node !== null)
		{
			if (node.className === 'elm-overlay-message-details' && isScroll)
			{
				return;
			}

			if (node === overlayNode && !isScroll)
			{
				return;
			}
			node = node.parentNode;
		}

		event.stopPropagation();
		event.preventDefault();
	}
}

var mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var allEvents = mostEvents.concat('wheel', 'scroll');


return {
	node: node,
	text: text,
	custom: custom,
	map: F2(map),

	on: F3(on),
	style: style,
	property: F2(property),
	attribute: F2(attribute),
	attributeNS: F3(attributeNS),
	mapProperty: F2(mapProperty),

	lazy: F2(lazy),
	lazy2: F3(lazy2),
	lazy3: F4(lazy3),
	keyedNode: F3(keyedNode),

	program: program,
	programWithFlags: programWithFlags,
	staticProgram: staticProgram
};

}();

var _elm_lang$virtual_dom$VirtualDom$programWithFlags = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.programWithFlags, _elm_lang$virtual_dom$VirtualDom_Debug$wrapWithFlags, impl);
};
var _elm_lang$virtual_dom$VirtualDom$program = function (impl) {
	return A2(_elm_lang$virtual_dom$Native_VirtualDom.program, _elm_lang$virtual_dom$VirtualDom_Debug$wrap, impl);
};
var _elm_lang$virtual_dom$VirtualDom$keyedNode = _elm_lang$virtual_dom$Native_VirtualDom.keyedNode;
var _elm_lang$virtual_dom$VirtualDom$lazy3 = _elm_lang$virtual_dom$Native_VirtualDom.lazy3;
var _elm_lang$virtual_dom$VirtualDom$lazy2 = _elm_lang$virtual_dom$Native_VirtualDom.lazy2;
var _elm_lang$virtual_dom$VirtualDom$lazy = _elm_lang$virtual_dom$Native_VirtualDom.lazy;
var _elm_lang$virtual_dom$VirtualDom$defaultOptions = {stopPropagation: false, preventDefault: false};
var _elm_lang$virtual_dom$VirtualDom$onWithOptions = _elm_lang$virtual_dom$Native_VirtualDom.on;
var _elm_lang$virtual_dom$VirtualDom$on = F2(
	function (eventName, decoder) {
		return A3(_elm_lang$virtual_dom$VirtualDom$onWithOptions, eventName, _elm_lang$virtual_dom$VirtualDom$defaultOptions, decoder);
	});
var _elm_lang$virtual_dom$VirtualDom$style = _elm_lang$virtual_dom$Native_VirtualDom.style;
var _elm_lang$virtual_dom$VirtualDom$mapProperty = _elm_lang$virtual_dom$Native_VirtualDom.mapProperty;
var _elm_lang$virtual_dom$VirtualDom$attributeNS = _elm_lang$virtual_dom$Native_VirtualDom.attributeNS;
var _elm_lang$virtual_dom$VirtualDom$attribute = _elm_lang$virtual_dom$Native_VirtualDom.attribute;
var _elm_lang$virtual_dom$VirtualDom$property = _elm_lang$virtual_dom$Native_VirtualDom.property;
var _elm_lang$virtual_dom$VirtualDom$map = _elm_lang$virtual_dom$Native_VirtualDom.map;
var _elm_lang$virtual_dom$VirtualDom$text = _elm_lang$virtual_dom$Native_VirtualDom.text;
var _elm_lang$virtual_dom$VirtualDom$node = _elm_lang$virtual_dom$Native_VirtualDom.node;
var _elm_lang$virtual_dom$VirtualDom$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});
var _elm_lang$virtual_dom$VirtualDom$Node = {ctor: 'Node'};
var _elm_lang$virtual_dom$VirtualDom$Property = {ctor: 'Property'};

var _elm_lang$html$Html$programWithFlags = _elm_lang$virtual_dom$VirtualDom$programWithFlags;
var _elm_lang$html$Html$program = _elm_lang$virtual_dom$VirtualDom$program;
var _elm_lang$html$Html$beginnerProgram = function (_p0) {
	var _p1 = _p0;
	return _elm_lang$html$Html$program(
		{
			init: A2(
				_elm_lang$core$Platform_Cmd_ops['!'],
				_p1.model,
				{ctor: '[]'}),
			update: F2(
				function (msg, model) {
					return A2(
						_elm_lang$core$Platform_Cmd_ops['!'],
						A2(_p1.update, msg, model),
						{ctor: '[]'});
				}),
			view: _p1.view,
			subscriptions: function (_p2) {
				return _elm_lang$core$Platform_Sub$none;
			}
		});
};
var _elm_lang$html$Html$map = _elm_lang$virtual_dom$VirtualDom$map;
var _elm_lang$html$Html$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$html$Html$node = _elm_lang$virtual_dom$VirtualDom$node;
var _elm_lang$html$Html$body = _elm_lang$html$Html$node('body');
var _elm_lang$html$Html$section = _elm_lang$html$Html$node('section');
var _elm_lang$html$Html$nav = _elm_lang$html$Html$node('nav');
var _elm_lang$html$Html$article = _elm_lang$html$Html$node('article');
var _elm_lang$html$Html$aside = _elm_lang$html$Html$node('aside');
var _elm_lang$html$Html$h1 = _elm_lang$html$Html$node('h1');
var _elm_lang$html$Html$h2 = _elm_lang$html$Html$node('h2');
var _elm_lang$html$Html$h3 = _elm_lang$html$Html$node('h3');
var _elm_lang$html$Html$h4 = _elm_lang$html$Html$node('h4');
var _elm_lang$html$Html$h5 = _elm_lang$html$Html$node('h5');
var _elm_lang$html$Html$h6 = _elm_lang$html$Html$node('h6');
var _elm_lang$html$Html$header = _elm_lang$html$Html$node('header');
var _elm_lang$html$Html$footer = _elm_lang$html$Html$node('footer');
var _elm_lang$html$Html$address = _elm_lang$html$Html$node('address');
var _elm_lang$html$Html$main_ = _elm_lang$html$Html$node('main');
var _elm_lang$html$Html$p = _elm_lang$html$Html$node('p');
var _elm_lang$html$Html$hr = _elm_lang$html$Html$node('hr');
var _elm_lang$html$Html$pre = _elm_lang$html$Html$node('pre');
var _elm_lang$html$Html$blockquote = _elm_lang$html$Html$node('blockquote');
var _elm_lang$html$Html$ol = _elm_lang$html$Html$node('ol');
var _elm_lang$html$Html$ul = _elm_lang$html$Html$node('ul');
var _elm_lang$html$Html$li = _elm_lang$html$Html$node('li');
var _elm_lang$html$Html$dl = _elm_lang$html$Html$node('dl');
var _elm_lang$html$Html$dt = _elm_lang$html$Html$node('dt');
var _elm_lang$html$Html$dd = _elm_lang$html$Html$node('dd');
var _elm_lang$html$Html$figure = _elm_lang$html$Html$node('figure');
var _elm_lang$html$Html$figcaption = _elm_lang$html$Html$node('figcaption');
var _elm_lang$html$Html$div = _elm_lang$html$Html$node('div');
var _elm_lang$html$Html$a = _elm_lang$html$Html$node('a');
var _elm_lang$html$Html$em = _elm_lang$html$Html$node('em');
var _elm_lang$html$Html$strong = _elm_lang$html$Html$node('strong');
var _elm_lang$html$Html$small = _elm_lang$html$Html$node('small');
var _elm_lang$html$Html$s = _elm_lang$html$Html$node('s');
var _elm_lang$html$Html$cite = _elm_lang$html$Html$node('cite');
var _elm_lang$html$Html$q = _elm_lang$html$Html$node('q');
var _elm_lang$html$Html$dfn = _elm_lang$html$Html$node('dfn');
var _elm_lang$html$Html$abbr = _elm_lang$html$Html$node('abbr');
var _elm_lang$html$Html$time = _elm_lang$html$Html$node('time');
var _elm_lang$html$Html$code = _elm_lang$html$Html$node('code');
var _elm_lang$html$Html$var = _elm_lang$html$Html$node('var');
var _elm_lang$html$Html$samp = _elm_lang$html$Html$node('samp');
var _elm_lang$html$Html$kbd = _elm_lang$html$Html$node('kbd');
var _elm_lang$html$Html$sub = _elm_lang$html$Html$node('sub');
var _elm_lang$html$Html$sup = _elm_lang$html$Html$node('sup');
var _elm_lang$html$Html$i = _elm_lang$html$Html$node('i');
var _elm_lang$html$Html$b = _elm_lang$html$Html$node('b');
var _elm_lang$html$Html$u = _elm_lang$html$Html$node('u');
var _elm_lang$html$Html$mark = _elm_lang$html$Html$node('mark');
var _elm_lang$html$Html$ruby = _elm_lang$html$Html$node('ruby');
var _elm_lang$html$Html$rt = _elm_lang$html$Html$node('rt');
var _elm_lang$html$Html$rp = _elm_lang$html$Html$node('rp');
var _elm_lang$html$Html$bdi = _elm_lang$html$Html$node('bdi');
var _elm_lang$html$Html$bdo = _elm_lang$html$Html$node('bdo');
var _elm_lang$html$Html$span = _elm_lang$html$Html$node('span');
var _elm_lang$html$Html$br = _elm_lang$html$Html$node('br');
var _elm_lang$html$Html$wbr = _elm_lang$html$Html$node('wbr');
var _elm_lang$html$Html$ins = _elm_lang$html$Html$node('ins');
var _elm_lang$html$Html$del = _elm_lang$html$Html$node('del');
var _elm_lang$html$Html$img = _elm_lang$html$Html$node('img');
var _elm_lang$html$Html$iframe = _elm_lang$html$Html$node('iframe');
var _elm_lang$html$Html$embed = _elm_lang$html$Html$node('embed');
var _elm_lang$html$Html$object = _elm_lang$html$Html$node('object');
var _elm_lang$html$Html$param = _elm_lang$html$Html$node('param');
var _elm_lang$html$Html$video = _elm_lang$html$Html$node('video');
var _elm_lang$html$Html$audio = _elm_lang$html$Html$node('audio');
var _elm_lang$html$Html$source = _elm_lang$html$Html$node('source');
var _elm_lang$html$Html$track = _elm_lang$html$Html$node('track');
var _elm_lang$html$Html$canvas = _elm_lang$html$Html$node('canvas');
var _elm_lang$html$Html$math = _elm_lang$html$Html$node('math');
var _elm_lang$html$Html$table = _elm_lang$html$Html$node('table');
var _elm_lang$html$Html$caption = _elm_lang$html$Html$node('caption');
var _elm_lang$html$Html$colgroup = _elm_lang$html$Html$node('colgroup');
var _elm_lang$html$Html$col = _elm_lang$html$Html$node('col');
var _elm_lang$html$Html$tbody = _elm_lang$html$Html$node('tbody');
var _elm_lang$html$Html$thead = _elm_lang$html$Html$node('thead');
var _elm_lang$html$Html$tfoot = _elm_lang$html$Html$node('tfoot');
var _elm_lang$html$Html$tr = _elm_lang$html$Html$node('tr');
var _elm_lang$html$Html$td = _elm_lang$html$Html$node('td');
var _elm_lang$html$Html$th = _elm_lang$html$Html$node('th');
var _elm_lang$html$Html$form = _elm_lang$html$Html$node('form');
var _elm_lang$html$Html$fieldset = _elm_lang$html$Html$node('fieldset');
var _elm_lang$html$Html$legend = _elm_lang$html$Html$node('legend');
var _elm_lang$html$Html$label = _elm_lang$html$Html$node('label');
var _elm_lang$html$Html$input = _elm_lang$html$Html$node('input');
var _elm_lang$html$Html$button = _elm_lang$html$Html$node('button');
var _elm_lang$html$Html$select = _elm_lang$html$Html$node('select');
var _elm_lang$html$Html$datalist = _elm_lang$html$Html$node('datalist');
var _elm_lang$html$Html$optgroup = _elm_lang$html$Html$node('optgroup');
var _elm_lang$html$Html$option = _elm_lang$html$Html$node('option');
var _elm_lang$html$Html$textarea = _elm_lang$html$Html$node('textarea');
var _elm_lang$html$Html$keygen = _elm_lang$html$Html$node('keygen');
var _elm_lang$html$Html$output = _elm_lang$html$Html$node('output');
var _elm_lang$html$Html$progress = _elm_lang$html$Html$node('progress');
var _elm_lang$html$Html$meter = _elm_lang$html$Html$node('meter');
var _elm_lang$html$Html$details = _elm_lang$html$Html$node('details');
var _elm_lang$html$Html$summary = _elm_lang$html$Html$node('summary');
var _elm_lang$html$Html$menuitem = _elm_lang$html$Html$node('menuitem');
var _elm_lang$html$Html$menu = _elm_lang$html$Html$node('menu');

var _elm_lang$html$Html_Attributes$map = _elm_lang$virtual_dom$VirtualDom$mapProperty;
var _elm_lang$html$Html_Attributes$attribute = _elm_lang$virtual_dom$VirtualDom$attribute;
var _elm_lang$html$Html_Attributes$contextmenu = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'contextmenu', value);
};
var _elm_lang$html$Html_Attributes$draggable = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'draggable', value);
};
var _elm_lang$html$Html_Attributes$itemprop = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'itemprop', value);
};
var _elm_lang$html$Html_Attributes$tabindex = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'tabIndex',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$charset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'charset', value);
};
var _elm_lang$html$Html_Attributes$height = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'height',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$width = function (value) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'width',
		_elm_lang$core$Basics$toString(value));
};
var _elm_lang$html$Html_Attributes$formaction = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'formAction', value);
};
var _elm_lang$html$Html_Attributes$list = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'list', value);
};
var _elm_lang$html$Html_Attributes$minlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'minLength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$maxlength = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'maxlength',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$size = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'size',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$form = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'form', value);
};
var _elm_lang$html$Html_Attributes$cols = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'cols',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rows = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rows',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$challenge = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'challenge', value);
};
var _elm_lang$html$Html_Attributes$media = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'media', value);
};
var _elm_lang$html$Html_Attributes$rel = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'rel', value);
};
var _elm_lang$html$Html_Attributes$datetime = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'datetime', value);
};
var _elm_lang$html$Html_Attributes$pubdate = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'pubdate', value);
};
var _elm_lang$html$Html_Attributes$colspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'colspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$rowspan = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$attribute,
		'rowspan',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$manifest = function (value) {
	return A2(_elm_lang$html$Html_Attributes$attribute, 'manifest', value);
};
var _elm_lang$html$Html_Attributes$property = _elm_lang$virtual_dom$VirtualDom$property;
var _elm_lang$html$Html_Attributes$stringProperty = F2(
	function (name, string) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$string(string));
	});
var _elm_lang$html$Html_Attributes$class = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'className', name);
};
var _elm_lang$html$Html_Attributes$id = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'id', name);
};
var _elm_lang$html$Html_Attributes$title = function (name) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'title', name);
};
var _elm_lang$html$Html_Attributes$accesskey = function ($char) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'accessKey',
		_elm_lang$core$String$fromChar($char));
};
var _elm_lang$html$Html_Attributes$dir = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dir', value);
};
var _elm_lang$html$Html_Attributes$dropzone = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'dropzone', value);
};
var _elm_lang$html$Html_Attributes$lang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'lang', value);
};
var _elm_lang$html$Html_Attributes$content = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'content', value);
};
var _elm_lang$html$Html_Attributes$httpEquiv = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'httpEquiv', value);
};
var _elm_lang$html$Html_Attributes$language = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'language', value);
};
var _elm_lang$html$Html_Attributes$src = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'src', value);
};
var _elm_lang$html$Html_Attributes$alt = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'alt', value);
};
var _elm_lang$html$Html_Attributes$preload = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'preload', value);
};
var _elm_lang$html$Html_Attributes$poster = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'poster', value);
};
var _elm_lang$html$Html_Attributes$kind = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'kind', value);
};
var _elm_lang$html$Html_Attributes$srclang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srclang', value);
};
var _elm_lang$html$Html_Attributes$sandbox = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'sandbox', value);
};
var _elm_lang$html$Html_Attributes$srcdoc = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'srcdoc', value);
};
var _elm_lang$html$Html_Attributes$type_ = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'type', value);
};
var _elm_lang$html$Html_Attributes$value = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'value', value);
};
var _elm_lang$html$Html_Attributes$defaultValue = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'defaultValue', value);
};
var _elm_lang$html$Html_Attributes$placeholder = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'placeholder', value);
};
var _elm_lang$html$Html_Attributes$accept = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'accept', value);
};
var _elm_lang$html$Html_Attributes$acceptCharset = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'acceptCharset', value);
};
var _elm_lang$html$Html_Attributes$action = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'action', value);
};
var _elm_lang$html$Html_Attributes$autocomplete = function (bool) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'autocomplete',
		bool ? 'on' : 'off');
};
var _elm_lang$html$Html_Attributes$enctype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'enctype', value);
};
var _elm_lang$html$Html_Attributes$method = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'method', value);
};
var _elm_lang$html$Html_Attributes$name = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'name', value);
};
var _elm_lang$html$Html_Attributes$pattern = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'pattern', value);
};
var _elm_lang$html$Html_Attributes$for = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'htmlFor', value);
};
var _elm_lang$html$Html_Attributes$max = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'max', value);
};
var _elm_lang$html$Html_Attributes$min = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'min', value);
};
var _elm_lang$html$Html_Attributes$step = function (n) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'step', n);
};
var _elm_lang$html$Html_Attributes$wrap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'wrap', value);
};
var _elm_lang$html$Html_Attributes$usemap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'useMap', value);
};
var _elm_lang$html$Html_Attributes$shape = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'shape', value);
};
var _elm_lang$html$Html_Attributes$coords = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'coords', value);
};
var _elm_lang$html$Html_Attributes$keytype = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'keytype', value);
};
var _elm_lang$html$Html_Attributes$align = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'align', value);
};
var _elm_lang$html$Html_Attributes$cite = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'cite', value);
};
var _elm_lang$html$Html_Attributes$href = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'href', value);
};
var _elm_lang$html$Html_Attributes$target = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'target', value);
};
var _elm_lang$html$Html_Attributes$downloadAs = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'download', value);
};
var _elm_lang$html$Html_Attributes$hreflang = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'hreflang', value);
};
var _elm_lang$html$Html_Attributes$ping = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'ping', value);
};
var _elm_lang$html$Html_Attributes$start = function (n) {
	return A2(
		_elm_lang$html$Html_Attributes$stringProperty,
		'start',
		_elm_lang$core$Basics$toString(n));
};
var _elm_lang$html$Html_Attributes$headers = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'headers', value);
};
var _elm_lang$html$Html_Attributes$scope = function (value) {
	return A2(_elm_lang$html$Html_Attributes$stringProperty, 'scope', value);
};
var _elm_lang$html$Html_Attributes$boolProperty = F2(
	function (name, bool) {
		return A2(
			_elm_lang$html$Html_Attributes$property,
			name,
			_elm_lang$core$Json_Encode$bool(bool));
	});
var _elm_lang$html$Html_Attributes$hidden = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'hidden', bool);
};
var _elm_lang$html$Html_Attributes$contenteditable = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'contentEditable', bool);
};
var _elm_lang$html$Html_Attributes$spellcheck = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'spellcheck', bool);
};
var _elm_lang$html$Html_Attributes$async = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'async', bool);
};
var _elm_lang$html$Html_Attributes$defer = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'defer', bool);
};
var _elm_lang$html$Html_Attributes$scoped = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'scoped', bool);
};
var _elm_lang$html$Html_Attributes$autoplay = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autoplay', bool);
};
var _elm_lang$html$Html_Attributes$controls = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'controls', bool);
};
var _elm_lang$html$Html_Attributes$loop = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'loop', bool);
};
var _elm_lang$html$Html_Attributes$default = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'default', bool);
};
var _elm_lang$html$Html_Attributes$seamless = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'seamless', bool);
};
var _elm_lang$html$Html_Attributes$checked = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'checked', bool);
};
var _elm_lang$html$Html_Attributes$selected = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'selected', bool);
};
var _elm_lang$html$Html_Attributes$autofocus = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'autofocus', bool);
};
var _elm_lang$html$Html_Attributes$disabled = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'disabled', bool);
};
var _elm_lang$html$Html_Attributes$multiple = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'multiple', bool);
};
var _elm_lang$html$Html_Attributes$novalidate = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'noValidate', bool);
};
var _elm_lang$html$Html_Attributes$readonly = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'readOnly', bool);
};
var _elm_lang$html$Html_Attributes$required = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'required', bool);
};
var _elm_lang$html$Html_Attributes$ismap = function (value) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'isMap', value);
};
var _elm_lang$html$Html_Attributes$download = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'download', bool);
};
var _elm_lang$html$Html_Attributes$reversed = function (bool) {
	return A2(_elm_lang$html$Html_Attributes$boolProperty, 'reversed', bool);
};
var _elm_lang$html$Html_Attributes$classList = function (list) {
	return _elm_lang$html$Html_Attributes$class(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(
				_elm_lang$core$List$map,
				_elm_lang$core$Tuple$first,
				A2(_elm_lang$core$List$filter, _elm_lang$core$Tuple$second, list))));
};
var _elm_lang$html$Html_Attributes$style = _elm_lang$virtual_dom$VirtualDom$style;

var _elm_lang$html$Html_Events$keyCode = A2(_elm_lang$core$Json_Decode$field, 'keyCode', _elm_lang$core$Json_Decode$int);
var _elm_lang$html$Html_Events$targetChecked = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'checked',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$bool);
var _elm_lang$html$Html_Events$targetValue = A2(
	_elm_lang$core$Json_Decode$at,
	{
		ctor: '::',
		_0: 'target',
		_1: {
			ctor: '::',
			_0: 'value',
			_1: {ctor: '[]'}
		}
	},
	_elm_lang$core$Json_Decode$string);
var _elm_lang$html$Html_Events$defaultOptions = _elm_lang$virtual_dom$VirtualDom$defaultOptions;
var _elm_lang$html$Html_Events$onWithOptions = _elm_lang$virtual_dom$VirtualDom$onWithOptions;
var _elm_lang$html$Html_Events$on = _elm_lang$virtual_dom$VirtualDom$on;
var _elm_lang$html$Html_Events$onFocus = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'focus',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onBlur = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'blur',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onSubmitOptions = _elm_lang$core$Native_Utils.update(
	_elm_lang$html$Html_Events$defaultOptions,
	{preventDefault: true});
var _elm_lang$html$Html_Events$onSubmit = function (msg) {
	return A3(
		_elm_lang$html$Html_Events$onWithOptions,
		'submit',
		_elm_lang$html$Html_Events$onSubmitOptions,
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onCheck = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'change',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetChecked));
};
var _elm_lang$html$Html_Events$onInput = function (tagger) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'input',
		A2(_elm_lang$core$Json_Decode$map, tagger, _elm_lang$html$Html_Events$targetValue));
};
var _elm_lang$html$Html_Events$onMouseOut = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseout',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseOver = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseover',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseLeave = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseleave',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseEnter = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseenter',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseUp = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mouseup',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onMouseDown = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'mousedown',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onDoubleClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'dblclick',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$onClick = function (msg) {
	return A2(
		_elm_lang$html$Html_Events$on,
		'click',
		_elm_lang$core$Json_Decode$succeed(msg));
};
var _elm_lang$html$Html_Events$Options = F2(
	function (a, b) {
		return {stopPropagation: a, preventDefault: b};
	});

var _elm_lang$mouse$Mouse_ops = _elm_lang$mouse$Mouse_ops || {};
_elm_lang$mouse$Mouse_ops['&>'] = F2(
	function (t1, t2) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (_p0) {
				return t2;
			},
			t1);
	});
var _elm_lang$mouse$Mouse$onSelfMsg = F3(
	function (router, _p1, state) {
		var _p2 = _p1;
		var _p3 = A2(_elm_lang$core$Dict$get, _p2.category, state);
		if (_p3.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var send = function (tagger) {
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					tagger(_p2.position));
			};
			return A2(
				_elm_lang$mouse$Mouse_ops['&>'],
				_elm_lang$core$Task$sequence(
					A2(_elm_lang$core$List$map, send, _p3._0.taggers)),
				_elm_lang$core$Task$succeed(state));
		}
	});
var _elm_lang$mouse$Mouse$init = _elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty);
var _elm_lang$mouse$Mouse$categorizeHelpHelp = F2(
	function (value, maybeValues) {
		var _p4 = maybeValues;
		if (_p4.ctor === 'Nothing') {
			return _elm_lang$core$Maybe$Just(
				{
					ctor: '::',
					_0: value,
					_1: {ctor: '[]'}
				});
		} else {
			return _elm_lang$core$Maybe$Just(
				{ctor: '::', _0: value, _1: _p4._0});
		}
	});
var _elm_lang$mouse$Mouse$categorizeHelp = F2(
	function (subs, subDict) {
		categorizeHelp:
		while (true) {
			var _p5 = subs;
			if (_p5.ctor === '[]') {
				return subDict;
			} else {
				var _v4 = _p5._1,
					_v5 = A3(
					_elm_lang$core$Dict$update,
					_p5._0._0,
					_elm_lang$mouse$Mouse$categorizeHelpHelp(_p5._0._1),
					subDict);
				subs = _v4;
				subDict = _v5;
				continue categorizeHelp;
			}
		}
	});
var _elm_lang$mouse$Mouse$categorize = function (subs) {
	return A2(_elm_lang$mouse$Mouse$categorizeHelp, subs, _elm_lang$core$Dict$empty);
};
var _elm_lang$mouse$Mouse$subscription = _elm_lang$core$Native_Platform.leaf('Mouse');
var _elm_lang$mouse$Mouse$Position = F2(
	function (a, b) {
		return {x: a, y: b};
	});
var _elm_lang$mouse$Mouse$position = A3(
	_elm_lang$core$Json_Decode$map2,
	_elm_lang$mouse$Mouse$Position,
	A2(_elm_lang$core$Json_Decode$field, 'pageX', _elm_lang$core$Json_Decode$int),
	A2(_elm_lang$core$Json_Decode$field, 'pageY', _elm_lang$core$Json_Decode$int));
var _elm_lang$mouse$Mouse$Watcher = F2(
	function (a, b) {
		return {taggers: a, pid: b};
	});
var _elm_lang$mouse$Mouse$Msg = F2(
	function (a, b) {
		return {category: a, position: b};
	});
var _elm_lang$mouse$Mouse$onEffects = F3(
	function (router, newSubs, oldState) {
		var rightStep = F3(
			function (category, taggers, task) {
				var tracker = A3(
					_elm_lang$dom$Dom_LowLevel$onDocument,
					category,
					_elm_lang$mouse$Mouse$position,
					function (_p6) {
						return A2(
							_elm_lang$core$Platform$sendToSelf,
							router,
							A2(_elm_lang$mouse$Mouse$Msg, category, _p6));
					});
				return A2(
					_elm_lang$core$Task$andThen,
					function (state) {
						return A2(
							_elm_lang$core$Task$andThen,
							function (pid) {
								return _elm_lang$core$Task$succeed(
									A3(
										_elm_lang$core$Dict$insert,
										category,
										A2(_elm_lang$mouse$Mouse$Watcher, taggers, pid),
										state));
							},
							_elm_lang$core$Process$spawn(tracker));
					},
					task);
			});
		var bothStep = F4(
			function (category, _p7, taggers, task) {
				var _p8 = _p7;
				return A2(
					_elm_lang$core$Task$andThen,
					function (state) {
						return _elm_lang$core$Task$succeed(
							A3(
								_elm_lang$core$Dict$insert,
								category,
								A2(_elm_lang$mouse$Mouse$Watcher, taggers, _p8.pid),
								state));
					},
					task);
			});
		var leftStep = F3(
			function (category, _p9, task) {
				var _p10 = _p9;
				return A2(
					_elm_lang$mouse$Mouse_ops['&>'],
					_elm_lang$core$Process$kill(_p10.pid),
					task);
			});
		return A6(
			_elm_lang$core$Dict$merge,
			leftStep,
			bothStep,
			rightStep,
			oldState,
			_elm_lang$mouse$Mouse$categorize(newSubs),
			_elm_lang$core$Task$succeed(_elm_lang$core$Dict$empty));
	});
var _elm_lang$mouse$Mouse$MySub = F2(
	function (a, b) {
		return {ctor: 'MySub', _0: a, _1: b};
	});
var _elm_lang$mouse$Mouse$clicks = function (tagger) {
	return _elm_lang$mouse$Mouse$subscription(
		A2(_elm_lang$mouse$Mouse$MySub, 'click', tagger));
};
var _elm_lang$mouse$Mouse$moves = function (tagger) {
	return _elm_lang$mouse$Mouse$subscription(
		A2(_elm_lang$mouse$Mouse$MySub, 'mousemove', tagger));
};
var _elm_lang$mouse$Mouse$downs = function (tagger) {
	return _elm_lang$mouse$Mouse$subscription(
		A2(_elm_lang$mouse$Mouse$MySub, 'mousedown', tagger));
};
var _elm_lang$mouse$Mouse$ups = function (tagger) {
	return _elm_lang$mouse$Mouse$subscription(
		A2(_elm_lang$mouse$Mouse$MySub, 'mouseup', tagger));
};
var _elm_lang$mouse$Mouse$subMap = F2(
	function (func, _p11) {
		var _p12 = _p11;
		return A2(
			_elm_lang$mouse$Mouse$MySub,
			_p12._0,
			function (_p13) {
				return func(
					_p12._1(_p13));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Mouse'] = {pkg: 'elm-lang/mouse', init: _elm_lang$mouse$Mouse$init, onEffects: _elm_lang$mouse$Mouse$onEffects, onSelfMsg: _elm_lang$mouse$Mouse$onSelfMsg, tag: 'sub', subMap: _elm_lang$mouse$Mouse$subMap};

var _elm_lang$svg$Svg$map = _elm_lang$virtual_dom$VirtualDom$map;
var _elm_lang$svg$Svg$text = _elm_lang$virtual_dom$VirtualDom$text;
var _elm_lang$svg$Svg$svgNamespace = A2(
	_elm_lang$virtual_dom$VirtualDom$property,
	'namespace',
	_elm_lang$core$Json_Encode$string('http://www.w3.org/2000/svg'));
var _elm_lang$svg$Svg$node = F3(
	function (name, attributes, children) {
		return A3(
			_elm_lang$virtual_dom$VirtualDom$node,
			name,
			{ctor: '::', _0: _elm_lang$svg$Svg$svgNamespace, _1: attributes},
			children);
	});
var _elm_lang$svg$Svg$svg = _elm_lang$svg$Svg$node('svg');
var _elm_lang$svg$Svg$foreignObject = _elm_lang$svg$Svg$node('foreignObject');
var _elm_lang$svg$Svg$animate = _elm_lang$svg$Svg$node('animate');
var _elm_lang$svg$Svg$animateColor = _elm_lang$svg$Svg$node('animateColor');
var _elm_lang$svg$Svg$animateMotion = _elm_lang$svg$Svg$node('animateMotion');
var _elm_lang$svg$Svg$animateTransform = _elm_lang$svg$Svg$node('animateTransform');
var _elm_lang$svg$Svg$mpath = _elm_lang$svg$Svg$node('mpath');
var _elm_lang$svg$Svg$set = _elm_lang$svg$Svg$node('set');
var _elm_lang$svg$Svg$a = _elm_lang$svg$Svg$node('a');
var _elm_lang$svg$Svg$defs = _elm_lang$svg$Svg$node('defs');
var _elm_lang$svg$Svg$g = _elm_lang$svg$Svg$node('g');
var _elm_lang$svg$Svg$marker = _elm_lang$svg$Svg$node('marker');
var _elm_lang$svg$Svg$mask = _elm_lang$svg$Svg$node('mask');
var _elm_lang$svg$Svg$pattern = _elm_lang$svg$Svg$node('pattern');
var _elm_lang$svg$Svg$switch = _elm_lang$svg$Svg$node('switch');
var _elm_lang$svg$Svg$symbol = _elm_lang$svg$Svg$node('symbol');
var _elm_lang$svg$Svg$desc = _elm_lang$svg$Svg$node('desc');
var _elm_lang$svg$Svg$metadata = _elm_lang$svg$Svg$node('metadata');
var _elm_lang$svg$Svg$title = _elm_lang$svg$Svg$node('title');
var _elm_lang$svg$Svg$feBlend = _elm_lang$svg$Svg$node('feBlend');
var _elm_lang$svg$Svg$feColorMatrix = _elm_lang$svg$Svg$node('feColorMatrix');
var _elm_lang$svg$Svg$feComponentTransfer = _elm_lang$svg$Svg$node('feComponentTransfer');
var _elm_lang$svg$Svg$feComposite = _elm_lang$svg$Svg$node('feComposite');
var _elm_lang$svg$Svg$feConvolveMatrix = _elm_lang$svg$Svg$node('feConvolveMatrix');
var _elm_lang$svg$Svg$feDiffuseLighting = _elm_lang$svg$Svg$node('feDiffuseLighting');
var _elm_lang$svg$Svg$feDisplacementMap = _elm_lang$svg$Svg$node('feDisplacementMap');
var _elm_lang$svg$Svg$feFlood = _elm_lang$svg$Svg$node('feFlood');
var _elm_lang$svg$Svg$feFuncA = _elm_lang$svg$Svg$node('feFuncA');
var _elm_lang$svg$Svg$feFuncB = _elm_lang$svg$Svg$node('feFuncB');
var _elm_lang$svg$Svg$feFuncG = _elm_lang$svg$Svg$node('feFuncG');
var _elm_lang$svg$Svg$feFuncR = _elm_lang$svg$Svg$node('feFuncR');
var _elm_lang$svg$Svg$feGaussianBlur = _elm_lang$svg$Svg$node('feGaussianBlur');
var _elm_lang$svg$Svg$feImage = _elm_lang$svg$Svg$node('feImage');
var _elm_lang$svg$Svg$feMerge = _elm_lang$svg$Svg$node('feMerge');
var _elm_lang$svg$Svg$feMergeNode = _elm_lang$svg$Svg$node('feMergeNode');
var _elm_lang$svg$Svg$feMorphology = _elm_lang$svg$Svg$node('feMorphology');
var _elm_lang$svg$Svg$feOffset = _elm_lang$svg$Svg$node('feOffset');
var _elm_lang$svg$Svg$feSpecularLighting = _elm_lang$svg$Svg$node('feSpecularLighting');
var _elm_lang$svg$Svg$feTile = _elm_lang$svg$Svg$node('feTile');
var _elm_lang$svg$Svg$feTurbulence = _elm_lang$svg$Svg$node('feTurbulence');
var _elm_lang$svg$Svg$font = _elm_lang$svg$Svg$node('font');
var _elm_lang$svg$Svg$linearGradient = _elm_lang$svg$Svg$node('linearGradient');
var _elm_lang$svg$Svg$radialGradient = _elm_lang$svg$Svg$node('radialGradient');
var _elm_lang$svg$Svg$stop = _elm_lang$svg$Svg$node('stop');
var _elm_lang$svg$Svg$circle = _elm_lang$svg$Svg$node('circle');
var _elm_lang$svg$Svg$ellipse = _elm_lang$svg$Svg$node('ellipse');
var _elm_lang$svg$Svg$image = _elm_lang$svg$Svg$node('image');
var _elm_lang$svg$Svg$line = _elm_lang$svg$Svg$node('line');
var _elm_lang$svg$Svg$path = _elm_lang$svg$Svg$node('path');
var _elm_lang$svg$Svg$polygon = _elm_lang$svg$Svg$node('polygon');
var _elm_lang$svg$Svg$polyline = _elm_lang$svg$Svg$node('polyline');
var _elm_lang$svg$Svg$rect = _elm_lang$svg$Svg$node('rect');
var _elm_lang$svg$Svg$use = _elm_lang$svg$Svg$node('use');
var _elm_lang$svg$Svg$feDistantLight = _elm_lang$svg$Svg$node('feDistantLight');
var _elm_lang$svg$Svg$fePointLight = _elm_lang$svg$Svg$node('fePointLight');
var _elm_lang$svg$Svg$feSpotLight = _elm_lang$svg$Svg$node('feSpotLight');
var _elm_lang$svg$Svg$altGlyph = _elm_lang$svg$Svg$node('altGlyph');
var _elm_lang$svg$Svg$altGlyphDef = _elm_lang$svg$Svg$node('altGlyphDef');
var _elm_lang$svg$Svg$altGlyphItem = _elm_lang$svg$Svg$node('altGlyphItem');
var _elm_lang$svg$Svg$glyph = _elm_lang$svg$Svg$node('glyph');
var _elm_lang$svg$Svg$glyphRef = _elm_lang$svg$Svg$node('glyphRef');
var _elm_lang$svg$Svg$textPath = _elm_lang$svg$Svg$node('textPath');
var _elm_lang$svg$Svg$text_ = _elm_lang$svg$Svg$node('text');
var _elm_lang$svg$Svg$tref = _elm_lang$svg$Svg$node('tref');
var _elm_lang$svg$Svg$tspan = _elm_lang$svg$Svg$node('tspan');
var _elm_lang$svg$Svg$clipPath = _elm_lang$svg$Svg$node('clipPath');
var _elm_lang$svg$Svg$colorProfile = _elm_lang$svg$Svg$node('colorProfile');
var _elm_lang$svg$Svg$cursor = _elm_lang$svg$Svg$node('cursor');
var _elm_lang$svg$Svg$filter = _elm_lang$svg$Svg$node('filter');
var _elm_lang$svg$Svg$script = _elm_lang$svg$Svg$node('script');
var _elm_lang$svg$Svg$style = _elm_lang$svg$Svg$node('style');
var _elm_lang$svg$Svg$view = _elm_lang$svg$Svg$node('view');

var _elm_lang$svg$Svg_Attributes$writingMode = _elm_lang$virtual_dom$VirtualDom$attribute('writing-mode');
var _elm_lang$svg$Svg_Attributes$wordSpacing = _elm_lang$virtual_dom$VirtualDom$attribute('word-spacing');
var _elm_lang$svg$Svg_Attributes$visibility = _elm_lang$virtual_dom$VirtualDom$attribute('visibility');
var _elm_lang$svg$Svg_Attributes$unicodeBidi = _elm_lang$virtual_dom$VirtualDom$attribute('unicode-bidi');
var _elm_lang$svg$Svg_Attributes$textRendering = _elm_lang$virtual_dom$VirtualDom$attribute('text-rendering');
var _elm_lang$svg$Svg_Attributes$textDecoration = _elm_lang$virtual_dom$VirtualDom$attribute('text-decoration');
var _elm_lang$svg$Svg_Attributes$textAnchor = _elm_lang$virtual_dom$VirtualDom$attribute('text-anchor');
var _elm_lang$svg$Svg_Attributes$stroke = _elm_lang$virtual_dom$VirtualDom$attribute('stroke');
var _elm_lang$svg$Svg_Attributes$strokeWidth = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-width');
var _elm_lang$svg$Svg_Attributes$strokeOpacity = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-opacity');
var _elm_lang$svg$Svg_Attributes$strokeMiterlimit = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-miterlimit');
var _elm_lang$svg$Svg_Attributes$strokeLinejoin = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-linejoin');
var _elm_lang$svg$Svg_Attributes$strokeLinecap = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-linecap');
var _elm_lang$svg$Svg_Attributes$strokeDashoffset = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-dashoffset');
var _elm_lang$svg$Svg_Attributes$strokeDasharray = _elm_lang$virtual_dom$VirtualDom$attribute('stroke-dasharray');
var _elm_lang$svg$Svg_Attributes$stopOpacity = _elm_lang$virtual_dom$VirtualDom$attribute('stop-opacity');
var _elm_lang$svg$Svg_Attributes$stopColor = _elm_lang$virtual_dom$VirtualDom$attribute('stop-color');
var _elm_lang$svg$Svg_Attributes$shapeRendering = _elm_lang$virtual_dom$VirtualDom$attribute('shape-rendering');
var _elm_lang$svg$Svg_Attributes$pointerEvents = _elm_lang$virtual_dom$VirtualDom$attribute('pointer-events');
var _elm_lang$svg$Svg_Attributes$overflow = _elm_lang$virtual_dom$VirtualDom$attribute('overflow');
var _elm_lang$svg$Svg_Attributes$opacity = _elm_lang$virtual_dom$VirtualDom$attribute('opacity');
var _elm_lang$svg$Svg_Attributes$mask = _elm_lang$virtual_dom$VirtualDom$attribute('mask');
var _elm_lang$svg$Svg_Attributes$markerStart = _elm_lang$virtual_dom$VirtualDom$attribute('marker-start');
var _elm_lang$svg$Svg_Attributes$markerMid = _elm_lang$virtual_dom$VirtualDom$attribute('marker-mid');
var _elm_lang$svg$Svg_Attributes$markerEnd = _elm_lang$virtual_dom$VirtualDom$attribute('marker-end');
var _elm_lang$svg$Svg_Attributes$lightingColor = _elm_lang$virtual_dom$VirtualDom$attribute('lighting-color');
var _elm_lang$svg$Svg_Attributes$letterSpacing = _elm_lang$virtual_dom$VirtualDom$attribute('letter-spacing');
var _elm_lang$svg$Svg_Attributes$kerning = _elm_lang$virtual_dom$VirtualDom$attribute('kerning');
var _elm_lang$svg$Svg_Attributes$imageRendering = _elm_lang$virtual_dom$VirtualDom$attribute('image-rendering');
var _elm_lang$svg$Svg_Attributes$glyphOrientationVertical = _elm_lang$virtual_dom$VirtualDom$attribute('glyph-orientation-vertical');
var _elm_lang$svg$Svg_Attributes$glyphOrientationHorizontal = _elm_lang$virtual_dom$VirtualDom$attribute('glyph-orientation-horizontal');
var _elm_lang$svg$Svg_Attributes$fontWeight = _elm_lang$virtual_dom$VirtualDom$attribute('font-weight');
var _elm_lang$svg$Svg_Attributes$fontVariant = _elm_lang$virtual_dom$VirtualDom$attribute('font-variant');
var _elm_lang$svg$Svg_Attributes$fontStyle = _elm_lang$virtual_dom$VirtualDom$attribute('font-style');
var _elm_lang$svg$Svg_Attributes$fontStretch = _elm_lang$virtual_dom$VirtualDom$attribute('font-stretch');
var _elm_lang$svg$Svg_Attributes$fontSize = _elm_lang$virtual_dom$VirtualDom$attribute('font-size');
var _elm_lang$svg$Svg_Attributes$fontSizeAdjust = _elm_lang$virtual_dom$VirtualDom$attribute('font-size-adjust');
var _elm_lang$svg$Svg_Attributes$fontFamily = _elm_lang$virtual_dom$VirtualDom$attribute('font-family');
var _elm_lang$svg$Svg_Attributes$floodOpacity = _elm_lang$virtual_dom$VirtualDom$attribute('flood-opacity');
var _elm_lang$svg$Svg_Attributes$floodColor = _elm_lang$virtual_dom$VirtualDom$attribute('flood-color');
var _elm_lang$svg$Svg_Attributes$filter = _elm_lang$virtual_dom$VirtualDom$attribute('filter');
var _elm_lang$svg$Svg_Attributes$fill = _elm_lang$virtual_dom$VirtualDom$attribute('fill');
var _elm_lang$svg$Svg_Attributes$fillRule = _elm_lang$virtual_dom$VirtualDom$attribute('fill-rule');
var _elm_lang$svg$Svg_Attributes$fillOpacity = _elm_lang$virtual_dom$VirtualDom$attribute('fill-opacity');
var _elm_lang$svg$Svg_Attributes$enableBackground = _elm_lang$virtual_dom$VirtualDom$attribute('enable-background');
var _elm_lang$svg$Svg_Attributes$dominantBaseline = _elm_lang$virtual_dom$VirtualDom$attribute('dominant-baseline');
var _elm_lang$svg$Svg_Attributes$display = _elm_lang$virtual_dom$VirtualDom$attribute('display');
var _elm_lang$svg$Svg_Attributes$direction = _elm_lang$virtual_dom$VirtualDom$attribute('direction');
var _elm_lang$svg$Svg_Attributes$cursor = _elm_lang$virtual_dom$VirtualDom$attribute('cursor');
var _elm_lang$svg$Svg_Attributes$color = _elm_lang$virtual_dom$VirtualDom$attribute('color');
var _elm_lang$svg$Svg_Attributes$colorRendering = _elm_lang$virtual_dom$VirtualDom$attribute('color-rendering');
var _elm_lang$svg$Svg_Attributes$colorProfile = _elm_lang$virtual_dom$VirtualDom$attribute('color-profile');
var _elm_lang$svg$Svg_Attributes$colorInterpolation = _elm_lang$virtual_dom$VirtualDom$attribute('color-interpolation');
var _elm_lang$svg$Svg_Attributes$colorInterpolationFilters = _elm_lang$virtual_dom$VirtualDom$attribute('color-interpolation-filters');
var _elm_lang$svg$Svg_Attributes$clip = _elm_lang$virtual_dom$VirtualDom$attribute('clip');
var _elm_lang$svg$Svg_Attributes$clipRule = _elm_lang$virtual_dom$VirtualDom$attribute('clip-rule');
var _elm_lang$svg$Svg_Attributes$clipPath = _elm_lang$virtual_dom$VirtualDom$attribute('clip-path');
var _elm_lang$svg$Svg_Attributes$baselineShift = _elm_lang$virtual_dom$VirtualDom$attribute('baseline-shift');
var _elm_lang$svg$Svg_Attributes$alignmentBaseline = _elm_lang$virtual_dom$VirtualDom$attribute('alignment-baseline');
var _elm_lang$svg$Svg_Attributes$zoomAndPan = _elm_lang$virtual_dom$VirtualDom$attribute('zoomAndPan');
var _elm_lang$svg$Svg_Attributes$z = _elm_lang$virtual_dom$VirtualDom$attribute('z');
var _elm_lang$svg$Svg_Attributes$yChannelSelector = _elm_lang$virtual_dom$VirtualDom$attribute('yChannelSelector');
var _elm_lang$svg$Svg_Attributes$y2 = _elm_lang$virtual_dom$VirtualDom$attribute('y2');
var _elm_lang$svg$Svg_Attributes$y1 = _elm_lang$virtual_dom$VirtualDom$attribute('y1');
var _elm_lang$svg$Svg_Attributes$y = _elm_lang$virtual_dom$VirtualDom$attribute('y');
var _elm_lang$svg$Svg_Attributes$xmlSpace = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/XML/1998/namespace', 'xml:space');
var _elm_lang$svg$Svg_Attributes$xmlLang = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/XML/1998/namespace', 'xml:lang');
var _elm_lang$svg$Svg_Attributes$xmlBase = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/XML/1998/namespace', 'xml:base');
var _elm_lang$svg$Svg_Attributes$xlinkType = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:type');
var _elm_lang$svg$Svg_Attributes$xlinkTitle = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:title');
var _elm_lang$svg$Svg_Attributes$xlinkShow = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:show');
var _elm_lang$svg$Svg_Attributes$xlinkRole = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:role');
var _elm_lang$svg$Svg_Attributes$xlinkHref = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:href');
var _elm_lang$svg$Svg_Attributes$xlinkArcrole = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:arcrole');
var _elm_lang$svg$Svg_Attributes$xlinkActuate = A2(_elm_lang$virtual_dom$VirtualDom$attributeNS, 'http://www.w3.org/1999/xlink', 'xlink:actuate');
var _elm_lang$svg$Svg_Attributes$xChannelSelector = _elm_lang$virtual_dom$VirtualDom$attribute('xChannelSelector');
var _elm_lang$svg$Svg_Attributes$x2 = _elm_lang$virtual_dom$VirtualDom$attribute('x2');
var _elm_lang$svg$Svg_Attributes$x1 = _elm_lang$virtual_dom$VirtualDom$attribute('x1');
var _elm_lang$svg$Svg_Attributes$xHeight = _elm_lang$virtual_dom$VirtualDom$attribute('x-height');
var _elm_lang$svg$Svg_Attributes$x = _elm_lang$virtual_dom$VirtualDom$attribute('x');
var _elm_lang$svg$Svg_Attributes$widths = _elm_lang$virtual_dom$VirtualDom$attribute('widths');
var _elm_lang$svg$Svg_Attributes$width = _elm_lang$virtual_dom$VirtualDom$attribute('width');
var _elm_lang$svg$Svg_Attributes$viewTarget = _elm_lang$virtual_dom$VirtualDom$attribute('viewTarget');
var _elm_lang$svg$Svg_Attributes$viewBox = _elm_lang$virtual_dom$VirtualDom$attribute('viewBox');
var _elm_lang$svg$Svg_Attributes$vertOriginY = _elm_lang$virtual_dom$VirtualDom$attribute('vert-origin-y');
var _elm_lang$svg$Svg_Attributes$vertOriginX = _elm_lang$virtual_dom$VirtualDom$attribute('vert-origin-x');
var _elm_lang$svg$Svg_Attributes$vertAdvY = _elm_lang$virtual_dom$VirtualDom$attribute('vert-adv-y');
var _elm_lang$svg$Svg_Attributes$version = _elm_lang$virtual_dom$VirtualDom$attribute('version');
var _elm_lang$svg$Svg_Attributes$values = _elm_lang$virtual_dom$VirtualDom$attribute('values');
var _elm_lang$svg$Svg_Attributes$vMathematical = _elm_lang$virtual_dom$VirtualDom$attribute('v-mathematical');
var _elm_lang$svg$Svg_Attributes$vIdeographic = _elm_lang$virtual_dom$VirtualDom$attribute('v-ideographic');
var _elm_lang$svg$Svg_Attributes$vHanging = _elm_lang$virtual_dom$VirtualDom$attribute('v-hanging');
var _elm_lang$svg$Svg_Attributes$vAlphabetic = _elm_lang$virtual_dom$VirtualDom$attribute('v-alphabetic');
var _elm_lang$svg$Svg_Attributes$unitsPerEm = _elm_lang$virtual_dom$VirtualDom$attribute('units-per-em');
var _elm_lang$svg$Svg_Attributes$unicodeRange = _elm_lang$virtual_dom$VirtualDom$attribute('unicode-range');
var _elm_lang$svg$Svg_Attributes$unicode = _elm_lang$virtual_dom$VirtualDom$attribute('unicode');
var _elm_lang$svg$Svg_Attributes$underlineThickness = _elm_lang$virtual_dom$VirtualDom$attribute('underline-thickness');
var _elm_lang$svg$Svg_Attributes$underlinePosition = _elm_lang$virtual_dom$VirtualDom$attribute('underline-position');
var _elm_lang$svg$Svg_Attributes$u2 = _elm_lang$virtual_dom$VirtualDom$attribute('u2');
var _elm_lang$svg$Svg_Attributes$u1 = _elm_lang$virtual_dom$VirtualDom$attribute('u1');
var _elm_lang$svg$Svg_Attributes$type_ = _elm_lang$virtual_dom$VirtualDom$attribute('type');
var _elm_lang$svg$Svg_Attributes$transform = _elm_lang$virtual_dom$VirtualDom$attribute('transform');
var _elm_lang$svg$Svg_Attributes$to = _elm_lang$virtual_dom$VirtualDom$attribute('to');
var _elm_lang$svg$Svg_Attributes$title = _elm_lang$virtual_dom$VirtualDom$attribute('title');
var _elm_lang$svg$Svg_Attributes$textLength = _elm_lang$virtual_dom$VirtualDom$attribute('textLength');
var _elm_lang$svg$Svg_Attributes$targetY = _elm_lang$virtual_dom$VirtualDom$attribute('targetY');
var _elm_lang$svg$Svg_Attributes$targetX = _elm_lang$virtual_dom$VirtualDom$attribute('targetX');
var _elm_lang$svg$Svg_Attributes$target = _elm_lang$virtual_dom$VirtualDom$attribute('target');
var _elm_lang$svg$Svg_Attributes$tableValues = _elm_lang$virtual_dom$VirtualDom$attribute('tableValues');
var _elm_lang$svg$Svg_Attributes$systemLanguage = _elm_lang$virtual_dom$VirtualDom$attribute('systemLanguage');
var _elm_lang$svg$Svg_Attributes$surfaceScale = _elm_lang$virtual_dom$VirtualDom$attribute('surfaceScale');
var _elm_lang$svg$Svg_Attributes$style = _elm_lang$virtual_dom$VirtualDom$attribute('style');
var _elm_lang$svg$Svg_Attributes$string = _elm_lang$virtual_dom$VirtualDom$attribute('string');
var _elm_lang$svg$Svg_Attributes$strikethroughThickness = _elm_lang$virtual_dom$VirtualDom$attribute('strikethrough-thickness');
var _elm_lang$svg$Svg_Attributes$strikethroughPosition = _elm_lang$virtual_dom$VirtualDom$attribute('strikethrough-position');
var _elm_lang$svg$Svg_Attributes$stitchTiles = _elm_lang$virtual_dom$VirtualDom$attribute('stitchTiles');
var _elm_lang$svg$Svg_Attributes$stemv = _elm_lang$virtual_dom$VirtualDom$attribute('stemv');
var _elm_lang$svg$Svg_Attributes$stemh = _elm_lang$virtual_dom$VirtualDom$attribute('stemh');
var _elm_lang$svg$Svg_Attributes$stdDeviation = _elm_lang$virtual_dom$VirtualDom$attribute('stdDeviation');
var _elm_lang$svg$Svg_Attributes$startOffset = _elm_lang$virtual_dom$VirtualDom$attribute('startOffset');
var _elm_lang$svg$Svg_Attributes$spreadMethod = _elm_lang$virtual_dom$VirtualDom$attribute('spreadMethod');
var _elm_lang$svg$Svg_Attributes$speed = _elm_lang$virtual_dom$VirtualDom$attribute('speed');
var _elm_lang$svg$Svg_Attributes$specularExponent = _elm_lang$virtual_dom$VirtualDom$attribute('specularExponent');
var _elm_lang$svg$Svg_Attributes$specularConstant = _elm_lang$virtual_dom$VirtualDom$attribute('specularConstant');
var _elm_lang$svg$Svg_Attributes$spacing = _elm_lang$virtual_dom$VirtualDom$attribute('spacing');
var _elm_lang$svg$Svg_Attributes$slope = _elm_lang$virtual_dom$VirtualDom$attribute('slope');
var _elm_lang$svg$Svg_Attributes$seed = _elm_lang$virtual_dom$VirtualDom$attribute('seed');
var _elm_lang$svg$Svg_Attributes$scale = _elm_lang$virtual_dom$VirtualDom$attribute('scale');
var _elm_lang$svg$Svg_Attributes$ry = _elm_lang$virtual_dom$VirtualDom$attribute('ry');
var _elm_lang$svg$Svg_Attributes$rx = _elm_lang$virtual_dom$VirtualDom$attribute('rx');
var _elm_lang$svg$Svg_Attributes$rotate = _elm_lang$virtual_dom$VirtualDom$attribute('rotate');
var _elm_lang$svg$Svg_Attributes$result = _elm_lang$virtual_dom$VirtualDom$attribute('result');
var _elm_lang$svg$Svg_Attributes$restart = _elm_lang$virtual_dom$VirtualDom$attribute('restart');
var _elm_lang$svg$Svg_Attributes$requiredFeatures = _elm_lang$virtual_dom$VirtualDom$attribute('requiredFeatures');
var _elm_lang$svg$Svg_Attributes$requiredExtensions = _elm_lang$virtual_dom$VirtualDom$attribute('requiredExtensions');
var _elm_lang$svg$Svg_Attributes$repeatDur = _elm_lang$virtual_dom$VirtualDom$attribute('repeatDur');
var _elm_lang$svg$Svg_Attributes$repeatCount = _elm_lang$virtual_dom$VirtualDom$attribute('repeatCount');
var _elm_lang$svg$Svg_Attributes$renderingIntent = _elm_lang$virtual_dom$VirtualDom$attribute('rendering-intent');
var _elm_lang$svg$Svg_Attributes$refY = _elm_lang$virtual_dom$VirtualDom$attribute('refY');
var _elm_lang$svg$Svg_Attributes$refX = _elm_lang$virtual_dom$VirtualDom$attribute('refX');
var _elm_lang$svg$Svg_Attributes$radius = _elm_lang$virtual_dom$VirtualDom$attribute('radius');
var _elm_lang$svg$Svg_Attributes$r = _elm_lang$virtual_dom$VirtualDom$attribute('r');
var _elm_lang$svg$Svg_Attributes$primitiveUnits = _elm_lang$virtual_dom$VirtualDom$attribute('primitiveUnits');
var _elm_lang$svg$Svg_Attributes$preserveAspectRatio = _elm_lang$virtual_dom$VirtualDom$attribute('preserveAspectRatio');
var _elm_lang$svg$Svg_Attributes$preserveAlpha = _elm_lang$virtual_dom$VirtualDom$attribute('preserveAlpha');
var _elm_lang$svg$Svg_Attributes$pointsAtZ = _elm_lang$virtual_dom$VirtualDom$attribute('pointsAtZ');
var _elm_lang$svg$Svg_Attributes$pointsAtY = _elm_lang$virtual_dom$VirtualDom$attribute('pointsAtY');
var _elm_lang$svg$Svg_Attributes$pointsAtX = _elm_lang$virtual_dom$VirtualDom$attribute('pointsAtX');
var _elm_lang$svg$Svg_Attributes$points = _elm_lang$virtual_dom$VirtualDom$attribute('points');
var _elm_lang$svg$Svg_Attributes$pointOrder = _elm_lang$virtual_dom$VirtualDom$attribute('point-order');
var _elm_lang$svg$Svg_Attributes$patternUnits = _elm_lang$virtual_dom$VirtualDom$attribute('patternUnits');
var _elm_lang$svg$Svg_Attributes$patternTransform = _elm_lang$virtual_dom$VirtualDom$attribute('patternTransform');
var _elm_lang$svg$Svg_Attributes$patternContentUnits = _elm_lang$virtual_dom$VirtualDom$attribute('patternContentUnits');
var _elm_lang$svg$Svg_Attributes$pathLength = _elm_lang$virtual_dom$VirtualDom$attribute('pathLength');
var _elm_lang$svg$Svg_Attributes$path = _elm_lang$virtual_dom$VirtualDom$attribute('path');
var _elm_lang$svg$Svg_Attributes$panose1 = _elm_lang$virtual_dom$VirtualDom$attribute('panose-1');
var _elm_lang$svg$Svg_Attributes$overlineThickness = _elm_lang$virtual_dom$VirtualDom$attribute('overline-thickness');
var _elm_lang$svg$Svg_Attributes$overlinePosition = _elm_lang$virtual_dom$VirtualDom$attribute('overline-position');
var _elm_lang$svg$Svg_Attributes$origin = _elm_lang$virtual_dom$VirtualDom$attribute('origin');
var _elm_lang$svg$Svg_Attributes$orientation = _elm_lang$virtual_dom$VirtualDom$attribute('orientation');
var _elm_lang$svg$Svg_Attributes$orient = _elm_lang$virtual_dom$VirtualDom$attribute('orient');
var _elm_lang$svg$Svg_Attributes$order = _elm_lang$virtual_dom$VirtualDom$attribute('order');
var _elm_lang$svg$Svg_Attributes$operator = _elm_lang$virtual_dom$VirtualDom$attribute('operator');
var _elm_lang$svg$Svg_Attributes$offset = _elm_lang$virtual_dom$VirtualDom$attribute('offset');
var _elm_lang$svg$Svg_Attributes$numOctaves = _elm_lang$virtual_dom$VirtualDom$attribute('numOctaves');
var _elm_lang$svg$Svg_Attributes$name = _elm_lang$virtual_dom$VirtualDom$attribute('name');
var _elm_lang$svg$Svg_Attributes$mode = _elm_lang$virtual_dom$VirtualDom$attribute('mode');
var _elm_lang$svg$Svg_Attributes$min = _elm_lang$virtual_dom$VirtualDom$attribute('min');
var _elm_lang$svg$Svg_Attributes$method = _elm_lang$virtual_dom$VirtualDom$attribute('method');
var _elm_lang$svg$Svg_Attributes$media = _elm_lang$virtual_dom$VirtualDom$attribute('media');
var _elm_lang$svg$Svg_Attributes$max = _elm_lang$virtual_dom$VirtualDom$attribute('max');
var _elm_lang$svg$Svg_Attributes$mathematical = _elm_lang$virtual_dom$VirtualDom$attribute('mathematical');
var _elm_lang$svg$Svg_Attributes$maskUnits = _elm_lang$virtual_dom$VirtualDom$attribute('maskUnits');
var _elm_lang$svg$Svg_Attributes$maskContentUnits = _elm_lang$virtual_dom$VirtualDom$attribute('maskContentUnits');
var _elm_lang$svg$Svg_Attributes$markerWidth = _elm_lang$virtual_dom$VirtualDom$attribute('markerWidth');
var _elm_lang$svg$Svg_Attributes$markerUnits = _elm_lang$virtual_dom$VirtualDom$attribute('markerUnits');
var _elm_lang$svg$Svg_Attributes$markerHeight = _elm_lang$virtual_dom$VirtualDom$attribute('markerHeight');
var _elm_lang$svg$Svg_Attributes$local = _elm_lang$virtual_dom$VirtualDom$attribute('local');
var _elm_lang$svg$Svg_Attributes$limitingConeAngle = _elm_lang$virtual_dom$VirtualDom$attribute('limitingConeAngle');
var _elm_lang$svg$Svg_Attributes$lengthAdjust = _elm_lang$virtual_dom$VirtualDom$attribute('lengthAdjust');
var _elm_lang$svg$Svg_Attributes$lang = _elm_lang$virtual_dom$VirtualDom$attribute('lang');
var _elm_lang$svg$Svg_Attributes$keyTimes = _elm_lang$virtual_dom$VirtualDom$attribute('keyTimes');
var _elm_lang$svg$Svg_Attributes$keySplines = _elm_lang$virtual_dom$VirtualDom$attribute('keySplines');
var _elm_lang$svg$Svg_Attributes$keyPoints = _elm_lang$virtual_dom$VirtualDom$attribute('keyPoints');
var _elm_lang$svg$Svg_Attributes$kernelUnitLength = _elm_lang$virtual_dom$VirtualDom$attribute('kernelUnitLength');
var _elm_lang$svg$Svg_Attributes$kernelMatrix = _elm_lang$virtual_dom$VirtualDom$attribute('kernelMatrix');
var _elm_lang$svg$Svg_Attributes$k4 = _elm_lang$virtual_dom$VirtualDom$attribute('k4');
var _elm_lang$svg$Svg_Attributes$k3 = _elm_lang$virtual_dom$VirtualDom$attribute('k3');
var _elm_lang$svg$Svg_Attributes$k2 = _elm_lang$virtual_dom$VirtualDom$attribute('k2');
var _elm_lang$svg$Svg_Attributes$k1 = _elm_lang$virtual_dom$VirtualDom$attribute('k1');
var _elm_lang$svg$Svg_Attributes$k = _elm_lang$virtual_dom$VirtualDom$attribute('k');
var _elm_lang$svg$Svg_Attributes$intercept = _elm_lang$virtual_dom$VirtualDom$attribute('intercept');
var _elm_lang$svg$Svg_Attributes$in2 = _elm_lang$virtual_dom$VirtualDom$attribute('in2');
var _elm_lang$svg$Svg_Attributes$in_ = _elm_lang$virtual_dom$VirtualDom$attribute('in');
var _elm_lang$svg$Svg_Attributes$ideographic = _elm_lang$virtual_dom$VirtualDom$attribute('ideographic');
var _elm_lang$svg$Svg_Attributes$id = _elm_lang$virtual_dom$VirtualDom$attribute('id');
var _elm_lang$svg$Svg_Attributes$horizOriginY = _elm_lang$virtual_dom$VirtualDom$attribute('horiz-origin-y');
var _elm_lang$svg$Svg_Attributes$horizOriginX = _elm_lang$virtual_dom$VirtualDom$attribute('horiz-origin-x');
var _elm_lang$svg$Svg_Attributes$horizAdvX = _elm_lang$virtual_dom$VirtualDom$attribute('horiz-adv-x');
var _elm_lang$svg$Svg_Attributes$height = _elm_lang$virtual_dom$VirtualDom$attribute('height');
var _elm_lang$svg$Svg_Attributes$hanging = _elm_lang$virtual_dom$VirtualDom$attribute('hanging');
var _elm_lang$svg$Svg_Attributes$gradientUnits = _elm_lang$virtual_dom$VirtualDom$attribute('gradientUnits');
var _elm_lang$svg$Svg_Attributes$gradientTransform = _elm_lang$virtual_dom$VirtualDom$attribute('gradientTransform');
var _elm_lang$svg$Svg_Attributes$glyphRef = _elm_lang$virtual_dom$VirtualDom$attribute('glyphRef');
var _elm_lang$svg$Svg_Attributes$glyphName = _elm_lang$virtual_dom$VirtualDom$attribute('glyph-name');
var _elm_lang$svg$Svg_Attributes$g2 = _elm_lang$virtual_dom$VirtualDom$attribute('g2');
var _elm_lang$svg$Svg_Attributes$g1 = _elm_lang$virtual_dom$VirtualDom$attribute('g1');
var _elm_lang$svg$Svg_Attributes$fy = _elm_lang$virtual_dom$VirtualDom$attribute('fy');
var _elm_lang$svg$Svg_Attributes$fx = _elm_lang$virtual_dom$VirtualDom$attribute('fx');
var _elm_lang$svg$Svg_Attributes$from = _elm_lang$virtual_dom$VirtualDom$attribute('from');
var _elm_lang$svg$Svg_Attributes$format = _elm_lang$virtual_dom$VirtualDom$attribute('format');
var _elm_lang$svg$Svg_Attributes$filterUnits = _elm_lang$virtual_dom$VirtualDom$attribute('filterUnits');
var _elm_lang$svg$Svg_Attributes$filterRes = _elm_lang$virtual_dom$VirtualDom$attribute('filterRes');
var _elm_lang$svg$Svg_Attributes$externalResourcesRequired = _elm_lang$virtual_dom$VirtualDom$attribute('externalResourcesRequired');
var _elm_lang$svg$Svg_Attributes$exponent = _elm_lang$virtual_dom$VirtualDom$attribute('exponent');
var _elm_lang$svg$Svg_Attributes$end = _elm_lang$virtual_dom$VirtualDom$attribute('end');
var _elm_lang$svg$Svg_Attributes$elevation = _elm_lang$virtual_dom$VirtualDom$attribute('elevation');
var _elm_lang$svg$Svg_Attributes$edgeMode = _elm_lang$virtual_dom$VirtualDom$attribute('edgeMode');
var _elm_lang$svg$Svg_Attributes$dy = _elm_lang$virtual_dom$VirtualDom$attribute('dy');
var _elm_lang$svg$Svg_Attributes$dx = _elm_lang$virtual_dom$VirtualDom$attribute('dx');
var _elm_lang$svg$Svg_Attributes$dur = _elm_lang$virtual_dom$VirtualDom$attribute('dur');
var _elm_lang$svg$Svg_Attributes$divisor = _elm_lang$virtual_dom$VirtualDom$attribute('divisor');
var _elm_lang$svg$Svg_Attributes$diffuseConstant = _elm_lang$virtual_dom$VirtualDom$attribute('diffuseConstant');
var _elm_lang$svg$Svg_Attributes$descent = _elm_lang$virtual_dom$VirtualDom$attribute('descent');
var _elm_lang$svg$Svg_Attributes$decelerate = _elm_lang$virtual_dom$VirtualDom$attribute('decelerate');
var _elm_lang$svg$Svg_Attributes$d = _elm_lang$virtual_dom$VirtualDom$attribute('d');
var _elm_lang$svg$Svg_Attributes$cy = _elm_lang$virtual_dom$VirtualDom$attribute('cy');
var _elm_lang$svg$Svg_Attributes$cx = _elm_lang$virtual_dom$VirtualDom$attribute('cx');
var _elm_lang$svg$Svg_Attributes$contentStyleType = _elm_lang$virtual_dom$VirtualDom$attribute('contentStyleType');
var _elm_lang$svg$Svg_Attributes$contentScriptType = _elm_lang$virtual_dom$VirtualDom$attribute('contentScriptType');
var _elm_lang$svg$Svg_Attributes$clipPathUnits = _elm_lang$virtual_dom$VirtualDom$attribute('clipPathUnits');
var _elm_lang$svg$Svg_Attributes$class = _elm_lang$virtual_dom$VirtualDom$attribute('class');
var _elm_lang$svg$Svg_Attributes$capHeight = _elm_lang$virtual_dom$VirtualDom$attribute('cap-height');
var _elm_lang$svg$Svg_Attributes$calcMode = _elm_lang$virtual_dom$VirtualDom$attribute('calcMode');
var _elm_lang$svg$Svg_Attributes$by = _elm_lang$virtual_dom$VirtualDom$attribute('by');
var _elm_lang$svg$Svg_Attributes$bias = _elm_lang$virtual_dom$VirtualDom$attribute('bias');
var _elm_lang$svg$Svg_Attributes$begin = _elm_lang$virtual_dom$VirtualDom$attribute('begin');
var _elm_lang$svg$Svg_Attributes$bbox = _elm_lang$virtual_dom$VirtualDom$attribute('bbox');
var _elm_lang$svg$Svg_Attributes$baseProfile = _elm_lang$virtual_dom$VirtualDom$attribute('baseProfile');
var _elm_lang$svg$Svg_Attributes$baseFrequency = _elm_lang$virtual_dom$VirtualDom$attribute('baseFrequency');
var _elm_lang$svg$Svg_Attributes$azimuth = _elm_lang$virtual_dom$VirtualDom$attribute('azimuth');
var _elm_lang$svg$Svg_Attributes$autoReverse = _elm_lang$virtual_dom$VirtualDom$attribute('autoReverse');
var _elm_lang$svg$Svg_Attributes$attributeType = _elm_lang$virtual_dom$VirtualDom$attribute('attributeType');
var _elm_lang$svg$Svg_Attributes$attributeName = _elm_lang$virtual_dom$VirtualDom$attribute('attributeName');
var _elm_lang$svg$Svg_Attributes$ascent = _elm_lang$virtual_dom$VirtualDom$attribute('ascent');
var _elm_lang$svg$Svg_Attributes$arabicForm = _elm_lang$virtual_dom$VirtualDom$attribute('arabic-form');
var _elm_lang$svg$Svg_Attributes$amplitude = _elm_lang$virtual_dom$VirtualDom$attribute('amplitude');
var _elm_lang$svg$Svg_Attributes$allowReorder = _elm_lang$virtual_dom$VirtualDom$attribute('allowReorder');
var _elm_lang$svg$Svg_Attributes$alphabetic = _elm_lang$virtual_dom$VirtualDom$attribute('alphabetic');
var _elm_lang$svg$Svg_Attributes$additive = _elm_lang$virtual_dom$VirtualDom$attribute('additive');
var _elm_lang$svg$Svg_Attributes$accumulate = _elm_lang$virtual_dom$VirtualDom$attribute('accumulate');
var _elm_lang$svg$Svg_Attributes$accelerate = _elm_lang$virtual_dom$VirtualDom$attribute('accelerate');
var _elm_lang$svg$Svg_Attributes$accentHeight = _elm_lang$virtual_dom$VirtualDom$attribute('accent-height');

var _elm_lang$window$Native_Window = function()
{

var size = _elm_lang$core$Native_Scheduler.nativeBinding(function(callback)	{
	callback(_elm_lang$core$Native_Scheduler.succeed({
		width: window.innerWidth,
		height: window.innerHeight
	}));
});

return {
	size: size
};

}();
var _elm_lang$window$Window_ops = _elm_lang$window$Window_ops || {};
_elm_lang$window$Window_ops['&>'] = F2(
	function (task1, task2) {
		return A2(
			_elm_lang$core$Task$andThen,
			function (_p0) {
				return task2;
			},
			task1);
	});
var _elm_lang$window$Window$onSelfMsg = F3(
	function (router, dimensions, state) {
		var _p1 = state;
		if (_p1.ctor === 'Nothing') {
			return _elm_lang$core$Task$succeed(state);
		} else {
			var send = function (_p2) {
				var _p3 = _p2;
				return A2(
					_elm_lang$core$Platform$sendToApp,
					router,
					_p3._0(dimensions));
			};
			return A2(
				_elm_lang$window$Window_ops['&>'],
				_elm_lang$core$Task$sequence(
					A2(_elm_lang$core$List$map, send, _p1._0.subs)),
				_elm_lang$core$Task$succeed(state));
		}
	});
var _elm_lang$window$Window$init = _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
var _elm_lang$window$Window$size = _elm_lang$window$Native_Window.size;
var _elm_lang$window$Window$width = A2(
	_elm_lang$core$Task$map,
	function (_) {
		return _.width;
	},
	_elm_lang$window$Window$size);
var _elm_lang$window$Window$height = A2(
	_elm_lang$core$Task$map,
	function (_) {
		return _.height;
	},
	_elm_lang$window$Window$size);
var _elm_lang$window$Window$onEffects = F3(
	function (router, newSubs, oldState) {
		var _p4 = {ctor: '_Tuple2', _0: oldState, _1: newSubs};
		if (_p4._0.ctor === 'Nothing') {
			if (_p4._1.ctor === '[]') {
				return _elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing);
			} else {
				return A2(
					_elm_lang$core$Task$andThen,
					function (pid) {
						return _elm_lang$core$Task$succeed(
							_elm_lang$core$Maybe$Just(
								{subs: newSubs, pid: pid}));
					},
					_elm_lang$core$Process$spawn(
						A3(
							_elm_lang$dom$Dom_LowLevel$onWindow,
							'resize',
							_elm_lang$core$Json_Decode$succeed(
								{ctor: '_Tuple0'}),
							function (_p5) {
								return A2(
									_elm_lang$core$Task$andThen,
									_elm_lang$core$Platform$sendToSelf(router),
									_elm_lang$window$Window$size);
							})));
			}
		} else {
			if (_p4._1.ctor === '[]') {
				return A2(
					_elm_lang$window$Window_ops['&>'],
					_elm_lang$core$Process$kill(_p4._0._0.pid),
					_elm_lang$core$Task$succeed(_elm_lang$core$Maybe$Nothing));
			} else {
				return _elm_lang$core$Task$succeed(
					_elm_lang$core$Maybe$Just(
						{subs: newSubs, pid: _p4._0._0.pid}));
			}
		}
	});
var _elm_lang$window$Window$subscription = _elm_lang$core$Native_Platform.leaf('Window');
var _elm_lang$window$Window$Size = F2(
	function (a, b) {
		return {width: a, height: b};
	});
var _elm_lang$window$Window$MySub = function (a) {
	return {ctor: 'MySub', _0: a};
};
var _elm_lang$window$Window$resizes = function (tagger) {
	return _elm_lang$window$Window$subscription(
		_elm_lang$window$Window$MySub(tagger));
};
var _elm_lang$window$Window$subMap = F2(
	function (func, _p6) {
		var _p7 = _p6;
		return _elm_lang$window$Window$MySub(
			function (_p8) {
				return func(
					_p7._0(_p8));
			});
	});
_elm_lang$core$Native_Platform.effectManagers['Window'] = {pkg: 'elm-lang/window', init: _elm_lang$window$Window$init, onEffects: _elm_lang$window$Window$onEffects, onSelfMsg: _elm_lang$window$Window$onSelfMsg, tag: 'sub', subMap: _elm_lang$window$Window$subMap};

var _opensolid$geometry$OpenSolid_Geometry_Internal$Interval = function (a) {
	return {ctor: 'Interval', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$Vector2d = function (a) {
	return {ctor: 'Vector2d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$Vector3d = function (a) {
	return {ctor: 'Vector3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$Direction2d = function (a) {
	return {ctor: 'Direction2d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$Direction3d = function (a) {
	return {ctor: 'Direction3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$Point2d = function (a) {
	return {ctor: 'Point2d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$Point3d = function (a) {
	return {ctor: 'Point3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$Axis2d = function (a) {
	return {ctor: 'Axis2d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$Axis3d = function (a) {
	return {ctor: 'Axis3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$Plane3d = function (a) {
	return {ctor: 'Plane3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$Frame2d = function (a) {
	return {ctor: 'Frame2d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$Frame3d = function (a) {
	return {ctor: 'Frame3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$SketchPlane3d = function (a) {
	return {ctor: 'SketchPlane3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$LineSegment2d = function (a) {
	return {ctor: 'LineSegment2d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$LineSegment3d = function (a) {
	return {ctor: 'LineSegment3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$Triangle2d = function (a) {
	return {ctor: 'Triangle2d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$Triangle3d = function (a) {
	return {ctor: 'Triangle3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$BoundingBox2d = function (a) {
	return {ctor: 'BoundingBox2d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$BoundingBox3d = function (a) {
	return {ctor: 'BoundingBox3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$Rectangle2d = function (a) {
	return {ctor: 'Rectangle2d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$Rectangle3d = function (a) {
	return {ctor: 'Rectangle3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$Block3d = function (a) {
	return {ctor: 'Block3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$Polyline2d = function (a) {
	return {ctor: 'Polyline2d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$Polyline3d = function (a) {
	return {ctor: 'Polyline3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$Polygon2d = function (a) {
	return {ctor: 'Polygon2d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$Circle2d = function (a) {
	return {ctor: 'Circle2d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$Circle3d = function (a) {
	return {ctor: 'Circle3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$Ellipse2d = function (a) {
	return {ctor: 'Ellipse2d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$Sphere3d = function (a) {
	return {ctor: 'Sphere3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$Arc2d = function (a) {
	return {ctor: 'Arc2d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$Arc3d = function (a) {
	return {ctor: 'Arc3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$QuadraticSpline2d = function (a) {
	return {ctor: 'QuadraticSpline2d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$QuadraticSpline3d = function (a) {
	return {ctor: 'QuadraticSpline3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$CubicSpline2d = function (a) {
	return {ctor: 'CubicSpline2d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$CubicSpline3d = function (a) {
	return {ctor: 'CubicSpline3d', _0: a};
};
var _opensolid$geometry$OpenSolid_Geometry_Internal$EllipticalArc2d = function (a) {
	return {ctor: 'EllipticalArc2d', _0: a};
};

var _opensolid$geometry$OpenSolid_Bootstrap_Direction2d$components = function (_p0) {
	var _p1 = _p0;
	return _p1._0;
};
var _opensolid$geometry$OpenSolid_Bootstrap_Direction2d$unsafe = _opensolid$geometry$OpenSolid_Geometry_Internal$Direction2d;
var _opensolid$geometry$OpenSolid_Bootstrap_Direction2d$flip = function (direction) {
	var _p2 = _opensolid$geometry$OpenSolid_Bootstrap_Direction2d$components(direction);
	var x = _p2._0;
	var y = _p2._1;
	return _opensolid$geometry$OpenSolid_Bootstrap_Direction2d$unsafe(
		{ctor: '_Tuple2', _0: 0 - x, _1: 0 - y});
};
var _opensolid$geometry$OpenSolid_Bootstrap_Direction2d$perpendicularTo = function (direction) {
	var _p3 = _opensolid$geometry$OpenSolid_Bootstrap_Direction2d$components(direction);
	var x = _p3._0;
	var y = _p3._1;
	return _opensolid$geometry$OpenSolid_Bootstrap_Direction2d$unsafe(
		{ctor: '_Tuple2', _0: 0 - y, _1: x});
};

var _opensolid$geometry$OpenSolid_Bootstrap_Axis2d$direction = function (_p0) {
	var _p1 = _p0;
	return _p1._0.direction;
};
var _opensolid$geometry$OpenSolid_Bootstrap_Axis2d$originPoint = function (_p2) {
	var _p3 = _p2;
	return _p3._0.originPoint;
};

var _opensolid$geometry$OpenSolid_Bootstrap_Frame2d$yDirection = function (_p0) {
	var _p1 = _p0;
	return _p1._0.yDirection;
};
var _opensolid$geometry$OpenSolid_Bootstrap_Frame2d$xDirection = function (_p2) {
	var _p3 = _p2;
	return _p3._0.xDirection;
};
var _opensolid$geometry$OpenSolid_Bootstrap_Frame2d$originPoint = function (_p4) {
	var _p5 = _p4;
	return _p5._0.originPoint;
};

var _opensolid$geometry$OpenSolid_Bootstrap_Point2d$coordinates = function (_p0) {
	var _p1 = _p0;
	return _p1._0;
};
var _opensolid$geometry$OpenSolid_Bootstrap_Point2d$fromCoordinates = _opensolid$geometry$OpenSolid_Geometry_Internal$Point2d;

var _opensolid$geometry$OpenSolid_Scalar$hullOf = function (values) {
	var _p0 = values;
	if (_p0.ctor === '[]') {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		var _p2 = _p0._1;
		var _p1 = _p0._0;
		var maxValue = A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$max, _p1, _p2);
		var minValue = A3(_elm_lang$core$List$foldl, _elm_lang$core$Basics$min, _p1, _p2);
		var result = _opensolid$geometry$OpenSolid_Geometry_Internal$Interval(
			{minValue: minValue, maxValue: maxValue});
		return _elm_lang$core$Maybe$Just(result);
	}
};
var _opensolid$geometry$OpenSolid_Scalar$hull = F2(
	function (firstValue, secondValue) {
		return _opensolid$geometry$OpenSolid_Geometry_Internal$Interval(
			{
				minValue: A2(_elm_lang$core$Basics$min, firstValue, secondValue),
				maxValue: A2(_elm_lang$core$Basics$max, firstValue, secondValue)
			});
	});
var _opensolid$geometry$OpenSolid_Scalar$interpolateFrom = F3(
	function (start, end, parameter) {
		return (_elm_lang$core$Native_Utils.cmp(parameter, 0.5) < 1) ? (start + (parameter * (end - start))) : (end + ((1 - parameter) * (start - end)));
	});
var _opensolid$geometry$OpenSolid_Scalar$equalWithin = F3(
	function (tolerance, firstValue, secondValue) {
		return _elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$Basics$abs(secondValue - firstValue),
			tolerance) < 1;
	});

var _opensolid$geometry$OpenSolid_Vector2d$yComponent = function (_p0) {
	var _p1 = _p0;
	return _p1._0._1;
};
var _opensolid$geometry$OpenSolid_Vector2d$xComponent = function (_p2) {
	var _p3 = _p2;
	return _p3._0._0;
};
var _opensolid$geometry$OpenSolid_Vector2d$components = function (_p4) {
	var _p5 = _p4;
	return _p5._0;
};
var _opensolid$geometry$OpenSolid_Vector2d$componentIn = F2(
	function (direction, vector) {
		var _p6 = _opensolid$geometry$OpenSolid_Vector2d$components(vector);
		var vx = _p6._0;
		var vy = _p6._1;
		var _p7 = _opensolid$geometry$OpenSolid_Bootstrap_Direction2d$components(direction);
		var dx = _p7._0;
		var dy = _p7._1;
		return (vx * dx) + (vy * dy);
	});
var _opensolid$geometry$OpenSolid_Vector2d$polarComponents = function (vector) {
	return _elm_lang$core$Basics$toPolar(
		_opensolid$geometry$OpenSolid_Vector2d$components(vector));
};
var _opensolid$geometry$OpenSolid_Vector2d$squaredLength = function (vector) {
	var _p8 = _opensolid$geometry$OpenSolid_Vector2d$components(vector);
	var x = _p8._0;
	var y = _p8._1;
	return (x * x) + (y * y);
};
var _opensolid$geometry$OpenSolid_Vector2d$length = function (vector) {
	return _elm_lang$core$Basics$sqrt(
		_opensolid$geometry$OpenSolid_Vector2d$squaredLength(vector));
};
var _opensolid$geometry$OpenSolid_Vector2d$dotProduct = F2(
	function (firstVector, secondVector) {
		var _p9 = _opensolid$geometry$OpenSolid_Vector2d$components(secondVector);
		var x2 = _p9._0;
		var y2 = _p9._1;
		var _p10 = _opensolid$geometry$OpenSolid_Vector2d$components(firstVector);
		var x1 = _p10._0;
		var y1 = _p10._1;
		return (x1 * x2) + (y1 * y2);
	});
var _opensolid$geometry$OpenSolid_Vector2d$crossProduct = F2(
	function (firstVector, secondVector) {
		var _p11 = _opensolid$geometry$OpenSolid_Vector2d$components(secondVector);
		var x2 = _p11._0;
		var y2 = _p11._1;
		var _p12 = _opensolid$geometry$OpenSolid_Vector2d$components(firstVector);
		var x1 = _p12._0;
		var y1 = _p12._1;
		return (x1 * y2) - (y1 * x2);
	});
var _opensolid$geometry$OpenSolid_Vector2d$fromComponents = _opensolid$geometry$OpenSolid_Geometry_Internal$Vector2d;
var _opensolid$geometry$OpenSolid_Vector2d$fromPolarComponents = function (components) {
	return _opensolid$geometry$OpenSolid_Vector2d$fromComponents(
		_elm_lang$core$Basics$fromPolar(components));
};
var _opensolid$geometry$OpenSolid_Vector2d$from = F2(
	function (firstPoint, secondPoint) {
		var _p13 = _opensolid$geometry$OpenSolid_Bootstrap_Point2d$coordinates(secondPoint);
		var x2 = _p13._0;
		var y2 = _p13._1;
		var _p14 = _opensolid$geometry$OpenSolid_Bootstrap_Point2d$coordinates(firstPoint);
		var x1 = _p14._0;
		var y1 = _p14._1;
		return _opensolid$geometry$OpenSolid_Vector2d$fromComponents(
			{ctor: '_Tuple2', _0: x2 - x1, _1: y2 - y1});
	});
var _opensolid$geometry$OpenSolid_Vector2d$with = function (_p15) {
	var _p16 = _p15;
	var _p18 = _p16.length;
	var _p17 = _opensolid$geometry$OpenSolid_Bootstrap_Direction2d$components(_p16.direction);
	var dx = _p17._0;
	var dy = _p17._1;
	return _opensolid$geometry$OpenSolid_Vector2d$fromComponents(
		{ctor: '_Tuple2', _0: _p18 * dx, _1: _p18 * dy});
};
var _opensolid$geometry$OpenSolid_Vector2d$projectionIn = F2(
	function (direction, vector) {
		return _opensolid$geometry$OpenSolid_Vector2d$with(
			{
				direction: direction,
				length: A2(_opensolid$geometry$OpenSolid_Vector2d$componentIn, direction, vector)
			});
	});
var _opensolid$geometry$OpenSolid_Vector2d$projectOnto = F2(
	function (axis, vector) {
		return A2(
			_opensolid$geometry$OpenSolid_Vector2d$projectionIn,
			_opensolid$geometry$OpenSolid_Bootstrap_Axis2d$direction(axis),
			vector);
	});
var _opensolid$geometry$OpenSolid_Vector2d$perpendicularTo = function (vector) {
	var _p19 = _opensolid$geometry$OpenSolid_Vector2d$components(vector);
	var x = _p19._0;
	var y = _p19._1;
	return _opensolid$geometry$OpenSolid_Vector2d$fromComponents(
		{ctor: '_Tuple2', _0: 0 - y, _1: x});
};
var _opensolid$geometry$OpenSolid_Vector2d$interpolateFrom = F3(
	function (v1, v2, t) {
		var _p20 = _opensolid$geometry$OpenSolid_Vector2d$components(v2);
		var x2 = _p20._0;
		var y2 = _p20._1;
		var _p21 = _opensolid$geometry$OpenSolid_Vector2d$components(v1);
		var x1 = _p21._0;
		var y1 = _p21._1;
		return _opensolid$geometry$OpenSolid_Vector2d$fromComponents(
			{
				ctor: '_Tuple2',
				_0: A3(_opensolid$geometry$OpenSolid_Scalar$interpolateFrom, x1, x2, t),
				_1: A3(_opensolid$geometry$OpenSolid_Scalar$interpolateFrom, y1, y2, t)
			});
	});
var _opensolid$geometry$OpenSolid_Vector2d$sum = F2(
	function (firstVector, secondVector) {
		var _p22 = _opensolid$geometry$OpenSolid_Vector2d$components(secondVector);
		var x2 = _p22._0;
		var y2 = _p22._1;
		var _p23 = _opensolid$geometry$OpenSolid_Vector2d$components(firstVector);
		var x1 = _p23._0;
		var y1 = _p23._1;
		return _opensolid$geometry$OpenSolid_Vector2d$fromComponents(
			{ctor: '_Tuple2', _0: x1 + x2, _1: y1 + y2});
	});
var _opensolid$geometry$OpenSolid_Vector2d$difference = F2(
	function (firstVector, secondVector) {
		var _p24 = _opensolid$geometry$OpenSolid_Vector2d$components(secondVector);
		var x2 = _p24._0;
		var y2 = _p24._1;
		var _p25 = _opensolid$geometry$OpenSolid_Vector2d$components(firstVector);
		var x1 = _p25._0;
		var y1 = _p25._1;
		return _opensolid$geometry$OpenSolid_Vector2d$fromComponents(
			{ctor: '_Tuple2', _0: x1 - x2, _1: y1 - y2});
	});
var _opensolid$geometry$OpenSolid_Vector2d$equalWithin = F3(
	function (tolerance, firstVector, secondVector) {
		return _elm_lang$core$Native_Utils.cmp(
			_opensolid$geometry$OpenSolid_Vector2d$squaredLength(
				A2(_opensolid$geometry$OpenSolid_Vector2d$difference, firstVector, secondVector)),
			tolerance * tolerance) < 1;
	});
var _opensolid$geometry$OpenSolid_Vector2d$flip = function (vector) {
	var _p26 = _opensolid$geometry$OpenSolid_Vector2d$components(vector);
	var x = _p26._0;
	var y = _p26._1;
	return _opensolid$geometry$OpenSolid_Vector2d$fromComponents(
		{ctor: '_Tuple2', _0: 0 - x, _1: 0 - y});
};
var _opensolid$geometry$OpenSolid_Vector2d$scaleBy = F2(
	function (scale, vector) {
		var _p27 = _opensolid$geometry$OpenSolid_Vector2d$components(vector);
		var x = _p27._0;
		var y = _p27._1;
		return _opensolid$geometry$OpenSolid_Vector2d$fromComponents(
			{ctor: '_Tuple2', _0: x * scale, _1: y * scale});
	});
var _opensolid$geometry$OpenSolid_Vector2d$lengthAndDirection = function (vector) {
	var vectorLength = _opensolid$geometry$OpenSolid_Vector2d$length(vector);
	if (_elm_lang$core$Native_Utils.eq(vectorLength, 0.0)) {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		var normalizedVector = A2(_opensolid$geometry$OpenSolid_Vector2d$scaleBy, 1 / vectorLength, vector);
		var vectorDirection = _opensolid$geometry$OpenSolid_Bootstrap_Direction2d$unsafe(
			_opensolid$geometry$OpenSolid_Vector2d$components(normalizedVector));
		return _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple2', _0: vectorLength, _1: vectorDirection});
	}
};
var _opensolid$geometry$OpenSolid_Vector2d$rotateBy = function (angle) {
	var sine = _elm_lang$core$Basics$sin(angle);
	var cosine = _elm_lang$core$Basics$cos(angle);
	return function (vector) {
		var _p28 = _opensolid$geometry$OpenSolid_Vector2d$components(vector);
		var x = _p28._0;
		var y = _p28._1;
		return _opensolid$geometry$OpenSolid_Vector2d$fromComponents(
			{ctor: '_Tuple2', _0: (x * cosine) - (y * sine), _1: (y * cosine) + (x * sine)});
	};
};
var _opensolid$geometry$OpenSolid_Vector2d$mirrorAcross = function (axis) {
	var _p29 = _opensolid$geometry$OpenSolid_Bootstrap_Direction2d$components(
		_opensolid$geometry$OpenSolid_Bootstrap_Axis2d$direction(axis));
	var dx = _p29._0;
	var dy = _p29._1;
	var a = 1 - ((2 * dy) * dy);
	var b = (2 * dx) * dy;
	var c = 1 - ((2 * dx) * dx);
	return function (vector) {
		var _p30 = _opensolid$geometry$OpenSolid_Vector2d$components(vector);
		var vx = _p30._0;
		var vy = _p30._1;
		return _opensolid$geometry$OpenSolid_Vector2d$fromComponents(
			{ctor: '_Tuple2', _0: (a * vx) + (b * vy), _1: (c * vy) + (b * vx)});
	};
};
var _opensolid$geometry$OpenSolid_Vector2d$relativeTo = F2(
	function (frame, vector) {
		return _opensolid$geometry$OpenSolid_Vector2d$fromComponents(
			{
				ctor: '_Tuple2',
				_0: A2(
					_opensolid$geometry$OpenSolid_Vector2d$componentIn,
					_opensolid$geometry$OpenSolid_Bootstrap_Frame2d$xDirection(frame),
					vector),
				_1: A2(
					_opensolid$geometry$OpenSolid_Vector2d$componentIn,
					_opensolid$geometry$OpenSolid_Bootstrap_Frame2d$yDirection(frame),
					vector)
			});
	});
var _opensolid$geometry$OpenSolid_Vector2d$placeIn = function (frame) {
	var _p31 = _opensolid$geometry$OpenSolid_Bootstrap_Direction2d$components(
		_opensolid$geometry$OpenSolid_Bootstrap_Frame2d$yDirection(frame));
	var x2 = _p31._0;
	var y2 = _p31._1;
	var _p32 = _opensolid$geometry$OpenSolid_Bootstrap_Direction2d$components(
		_opensolid$geometry$OpenSolid_Bootstrap_Frame2d$xDirection(frame));
	var x1 = _p32._0;
	var y1 = _p32._1;
	return function (vector) {
		var _p33 = _opensolid$geometry$OpenSolid_Vector2d$components(vector);
		var x = _p33._0;
		var y = _p33._1;
		return _opensolid$geometry$OpenSolid_Vector2d$fromComponents(
			{ctor: '_Tuple2', _0: (x1 * x) + (x2 * y), _1: (y1 * x) + (y2 * y)});
	};
};
var _opensolid$geometry$OpenSolid_Vector2d$zero = _opensolid$geometry$OpenSolid_Vector2d$fromComponents(
	{ctor: '_Tuple2', _0: 0, _1: 0});
var _opensolid$geometry$OpenSolid_Vector2d$direction = function (vector) {
	if (_elm_lang$core$Native_Utils.eq(vector, _opensolid$geometry$OpenSolid_Vector2d$zero)) {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		var normalizedVector = A2(
			_opensolid$geometry$OpenSolid_Vector2d$scaleBy,
			1 / _opensolid$geometry$OpenSolid_Vector2d$length(vector),
			vector);
		return _elm_lang$core$Maybe$Just(
			_opensolid$geometry$OpenSolid_Bootstrap_Direction2d$unsafe(
				_opensolid$geometry$OpenSolid_Vector2d$components(normalizedVector)));
	}
};
var _opensolid$geometry$OpenSolid_Vector2d$normalize = function (vector) {
	return _elm_lang$core$Native_Utils.eq(vector, _opensolid$geometry$OpenSolid_Vector2d$zero) ? _opensolid$geometry$OpenSolid_Vector2d$zero : A2(
		_opensolid$geometry$OpenSolid_Vector2d$scaleBy,
		1 / _opensolid$geometry$OpenSolid_Vector2d$length(vector),
		vector);
};

var _opensolid$geometry$OpenSolid_Direction2d$flip = _opensolid$geometry$OpenSolid_Bootstrap_Direction2d$flip;
var _opensolid$geometry$OpenSolid_Direction2d$yComponent = function (_p0) {
	var _p1 = _p0;
	return _p1._0._1;
};
var _opensolid$geometry$OpenSolid_Direction2d$xComponent = function (_p2) {
	var _p3 = _p2;
	return _p3._0._0;
};
var _opensolid$geometry$OpenSolid_Direction2d$components = _opensolid$geometry$OpenSolid_Bootstrap_Direction2d$components;
var _opensolid$geometry$OpenSolid_Direction2d$toVector = function (direction) {
	return _opensolid$geometry$OpenSolid_Vector2d$fromComponents(
		_opensolid$geometry$OpenSolid_Direction2d$components(direction));
};
var _opensolid$geometry$OpenSolid_Direction2d$componentIn = F2(
	function (firstDirection, secondDirection) {
		return A2(
			_opensolid$geometry$OpenSolid_Vector2d$componentIn,
			firstDirection,
			_opensolid$geometry$OpenSolid_Direction2d$toVector(secondDirection));
	});
var _opensolid$geometry$OpenSolid_Direction2d$angleFrom = F2(
	function (firstDirection, secondDirection) {
		var secondVector = _opensolid$geometry$OpenSolid_Direction2d$toVector(secondDirection);
		var firstVector = _opensolid$geometry$OpenSolid_Direction2d$toVector(firstDirection);
		return A2(
			_elm_lang$core$Basics$atan2,
			A2(_opensolid$geometry$OpenSolid_Vector2d$crossProduct, firstVector, secondVector),
			A2(_opensolid$geometry$OpenSolid_Vector2d$dotProduct, firstVector, secondVector));
	});
var _opensolid$geometry$OpenSolid_Direction2d$equalWithin = F3(
	function (angle, firstDirection, secondDirection) {
		return _elm_lang$core$Native_Utils.cmp(
			_elm_lang$core$Basics$abs(
				A2(_opensolid$geometry$OpenSolid_Direction2d$angleFrom, firstDirection, secondDirection)),
			angle) < 1;
	});
var _opensolid$geometry$OpenSolid_Direction2d$angle = function (direction) {
	var _p4 = _opensolid$geometry$OpenSolid_Direction2d$components(direction);
	var x = _p4._0;
	var y = _p4._1;
	return A2(_elm_lang$core$Basics$atan2, y, x);
};
var _opensolid$geometry$OpenSolid_Direction2d$perpendicularTo = _opensolid$geometry$OpenSolid_Bootstrap_Direction2d$perpendicularTo;
var _opensolid$geometry$OpenSolid_Direction2d$orthonormalize = function (_p5) {
	var _p6 = _p5;
	return A2(
		_elm_lang$core$Maybe$andThen,
		function (xDirection) {
			var yDirection = _opensolid$geometry$OpenSolid_Direction2d$perpendicularTo(xDirection);
			var perpendicularComponent = A2(_opensolid$geometry$OpenSolid_Vector2d$componentIn, yDirection, _p6._1);
			return (_elm_lang$core$Native_Utils.cmp(perpendicularComponent, 0.0) > 0) ? _elm_lang$core$Maybe$Just(
				{ctor: '_Tuple2', _0: xDirection, _1: yDirection}) : ((_elm_lang$core$Native_Utils.cmp(perpendicularComponent, 0.0) < 0) ? _elm_lang$core$Maybe$Just(
				{
					ctor: '_Tuple2',
					_0: xDirection,
					_1: _opensolid$geometry$OpenSolid_Direction2d$flip(yDirection)
				}) : _elm_lang$core$Maybe$Nothing);
		},
		_opensolid$geometry$OpenSolid_Vector2d$direction(_p6._0));
};
var _opensolid$geometry$OpenSolid_Direction2d$orthogonalize = function (_p7) {
	var _p8 = _p7;
	return _opensolid$geometry$OpenSolid_Direction2d$orthonormalize(
		{
			ctor: '_Tuple2',
			_0: _opensolid$geometry$OpenSolid_Direction2d$toVector(_p8._0),
			_1: _opensolid$geometry$OpenSolid_Direction2d$toVector(_p8._1)
		});
};
var _opensolid$geometry$OpenSolid_Direction2d$from = F2(
	function (firstPoint, secondPoint) {
		return _opensolid$geometry$OpenSolid_Vector2d$direction(
			A2(_opensolid$geometry$OpenSolid_Vector2d$from, firstPoint, secondPoint));
	});
var _opensolid$geometry$OpenSolid_Direction2d$unsafe = _opensolid$geometry$OpenSolid_Geometry_Internal$Direction2d;
var _opensolid$geometry$OpenSolid_Direction2d$fromAngle = function (angle) {
	return _opensolid$geometry$OpenSolid_Direction2d$unsafe(
		{
			ctor: '_Tuple2',
			_0: _elm_lang$core$Basics$cos(angle),
			_1: _elm_lang$core$Basics$sin(angle)
		});
};
var _opensolid$geometry$OpenSolid_Direction2d$rotateClockwise = function (direction) {
	var _p9 = _opensolid$geometry$OpenSolid_Direction2d$components(direction);
	var x = _p9._0;
	var y = _p9._1;
	return _opensolid$geometry$OpenSolid_Direction2d$unsafe(
		{ctor: '_Tuple2', _0: y, _1: 0 - x});
};
var _opensolid$geometry$OpenSolid_Direction2d$rotateCounterclockwise = function (direction) {
	var _p10 = _opensolid$geometry$OpenSolid_Direction2d$components(direction);
	var x = _p10._0;
	var y = _p10._1;
	return _opensolid$geometry$OpenSolid_Direction2d$unsafe(
		{ctor: '_Tuple2', _0: 0 - y, _1: x});
};
var _opensolid$geometry$OpenSolid_Direction2d$negativeY = _opensolid$geometry$OpenSolid_Direction2d$unsafe(
	{ctor: '_Tuple2', _0: 0, _1: -1});
var _opensolid$geometry$OpenSolid_Direction2d$positiveY = _opensolid$geometry$OpenSolid_Direction2d$unsafe(
	{ctor: '_Tuple2', _0: 0, _1: 1});
var _opensolid$geometry$OpenSolid_Direction2d$negativeX = _opensolid$geometry$OpenSolid_Direction2d$unsafe(
	{ctor: '_Tuple2', _0: -1, _1: 0});
var _opensolid$geometry$OpenSolid_Direction2d$positiveX = _opensolid$geometry$OpenSolid_Direction2d$unsafe(
	{ctor: '_Tuple2', _0: 1, _1: 0});
var _opensolid$geometry$OpenSolid_Direction2d$y = _opensolid$geometry$OpenSolid_Direction2d$unsafe(
	{ctor: '_Tuple2', _0: 0, _1: 1});
var _opensolid$geometry$OpenSolid_Direction2d$x = _opensolid$geometry$OpenSolid_Direction2d$unsafe(
	{ctor: '_Tuple2', _0: 1, _1: 0});
var _opensolid$geometry$OpenSolid_Direction2d$toDirection = function (vector) {
	return _opensolid$geometry$OpenSolid_Direction2d$unsafe(
		_opensolid$geometry$OpenSolid_Vector2d$components(vector));
};
var _opensolid$geometry$OpenSolid_Direction2d$rotateBy = F2(
	function (angle, direction) {
		return _opensolid$geometry$OpenSolid_Direction2d$toDirection(
			A2(
				_opensolid$geometry$OpenSolid_Vector2d$rotateBy,
				angle,
				_opensolid$geometry$OpenSolid_Direction2d$toVector(direction)));
	});
var _opensolid$geometry$OpenSolid_Direction2d$mirrorAcross = F2(
	function (axis, direction) {
		return _opensolid$geometry$OpenSolid_Direction2d$toDirection(
			A2(
				_opensolid$geometry$OpenSolid_Vector2d$mirrorAcross,
				axis,
				_opensolid$geometry$OpenSolid_Direction2d$toVector(direction)));
	});
var _opensolid$geometry$OpenSolid_Direction2d$relativeTo = F2(
	function (frame, direction) {
		return _opensolid$geometry$OpenSolid_Direction2d$toDirection(
			A2(
				_opensolid$geometry$OpenSolid_Vector2d$relativeTo,
				frame,
				_opensolid$geometry$OpenSolid_Direction2d$toVector(direction)));
	});
var _opensolid$geometry$OpenSolid_Direction2d$placeIn = F2(
	function (frame, direction) {
		return _opensolid$geometry$OpenSolid_Direction2d$toDirection(
			A2(
				_opensolid$geometry$OpenSolid_Vector2d$placeIn,
				frame,
				_opensolid$geometry$OpenSolid_Direction2d$toVector(direction)));
	});

var _opensolid$geometry$OpenSolid_Bootstrap_BoundingBox2d$with = function (_p0) {
	var _p1 = _p0;
	var _p5 = _p1.minY;
	var _p4 = _p1.minX;
	var _p3 = _p1.maxY;
	var _p2 = _p1.maxX;
	return ((_elm_lang$core$Native_Utils.cmp(_p4, _p2) < 1) && (_elm_lang$core$Native_Utils.cmp(_p5, _p3) < 1)) ? _opensolid$geometry$OpenSolid_Geometry_Internal$BoundingBox2d(_p1) : _opensolid$geometry$OpenSolid_Geometry_Internal$BoundingBox2d(
		{
			minX: A2(_elm_lang$core$Basics$min, _p4, _p2),
			maxX: A2(_elm_lang$core$Basics$max, _p4, _p2),
			minY: A2(_elm_lang$core$Basics$min, _p5, _p3),
			maxY: A2(_elm_lang$core$Basics$max, _p5, _p3)
		});
};

var _opensolid$geometry$OpenSolid_BoundingBox2d$alwaysFalse = F2(
	function (firstBox, secondBox) {
		return false;
	});
var _opensolid$geometry$OpenSolid_BoundingBox2d$extrema = function (_p0) {
	var _p1 = _p0;
	return _p1._0;
};
var _opensolid$geometry$OpenSolid_BoundingBox2d$minX = function (boundingBox) {
	return _opensolid$geometry$OpenSolid_BoundingBox2d$extrema(boundingBox).minX;
};
var _opensolid$geometry$OpenSolid_BoundingBox2d$maxX = function (boundingBox) {
	return _opensolid$geometry$OpenSolid_BoundingBox2d$extrema(boundingBox).maxX;
};
var _opensolid$geometry$OpenSolid_BoundingBox2d$minY = function (boundingBox) {
	return _opensolid$geometry$OpenSolid_BoundingBox2d$extrema(boundingBox).minY;
};
var _opensolid$geometry$OpenSolid_BoundingBox2d$maxY = function (boundingBox) {
	return _opensolid$geometry$OpenSolid_BoundingBox2d$extrema(boundingBox).maxY;
};
var _opensolid$geometry$OpenSolid_BoundingBox2d$intersects = F2(
	function (other, boundingBox) {
		return (_elm_lang$core$Native_Utils.cmp(
			_opensolid$geometry$OpenSolid_BoundingBox2d$minX(boundingBox),
			_opensolid$geometry$OpenSolid_BoundingBox2d$maxX(other)) < 1) && ((_elm_lang$core$Native_Utils.cmp(
			_opensolid$geometry$OpenSolid_BoundingBox2d$maxX(boundingBox),
			_opensolid$geometry$OpenSolid_BoundingBox2d$minX(other)) > -1) && ((_elm_lang$core$Native_Utils.cmp(
			_opensolid$geometry$OpenSolid_BoundingBox2d$minY(boundingBox),
			_opensolid$geometry$OpenSolid_BoundingBox2d$maxY(other)) < 1) && (_elm_lang$core$Native_Utils.cmp(
			_opensolid$geometry$OpenSolid_BoundingBox2d$maxY(boundingBox),
			_opensolid$geometry$OpenSolid_BoundingBox2d$minY(other)) > -1)));
	});
var _opensolid$geometry$OpenSolid_BoundingBox2d$overlaps = _opensolid$geometry$OpenSolid_BoundingBox2d$intersects;
var _opensolid$geometry$OpenSolid_BoundingBox2d$overlapAmount = F2(
	function (firstBox, secondBox) {
		var yOverlap = A2(
			_elm_lang$core$Basics$min,
			_opensolid$geometry$OpenSolid_BoundingBox2d$maxY(firstBox),
			_opensolid$geometry$OpenSolid_BoundingBox2d$maxY(secondBox)) - A2(
			_elm_lang$core$Basics$max,
			_opensolid$geometry$OpenSolid_BoundingBox2d$minY(firstBox),
			_opensolid$geometry$OpenSolid_BoundingBox2d$minY(secondBox));
		var xOverlap = A2(
			_elm_lang$core$Basics$min,
			_opensolid$geometry$OpenSolid_BoundingBox2d$maxX(firstBox),
			_opensolid$geometry$OpenSolid_BoundingBox2d$maxX(secondBox)) - A2(
			_elm_lang$core$Basics$max,
			_opensolid$geometry$OpenSolid_BoundingBox2d$minX(firstBox),
			_opensolid$geometry$OpenSolid_BoundingBox2d$minX(secondBox));
		return ((_elm_lang$core$Native_Utils.cmp(xOverlap, 0) > -1) && (_elm_lang$core$Native_Utils.cmp(yOverlap, 0) > -1)) ? _elm_lang$core$Maybe$Just(
			A2(_elm_lang$core$Basics$min, xOverlap, yOverlap)) : _elm_lang$core$Maybe$Nothing;
	});
var _opensolid$geometry$OpenSolid_BoundingBox2d$overlappingBy = F2(
	function (order, tolerance) {
		var _p2 = order;
		switch (_p2.ctor) {
			case 'LT':
				return (_elm_lang$core$Native_Utils.cmp(tolerance, 0) > 0) ? F2(
					function (firstBox, secondBox) {
						var _p3 = A2(_opensolid$geometry$OpenSolid_BoundingBox2d$overlapAmount, firstBox, secondBox);
						if (_p3.ctor === 'Just') {
							return _elm_lang$core$Native_Utils.cmp(_p3._0, tolerance) < 0;
						} else {
							return true;
						}
					}) : (_elm_lang$core$Native_Utils.eq(tolerance, 0) ? F2(
					function (firstBox, secondBox) {
						return _elm_lang$core$Native_Utils.eq(
							A2(_opensolid$geometry$OpenSolid_BoundingBox2d$overlapAmount, firstBox, secondBox),
							_elm_lang$core$Maybe$Nothing);
					}) : _opensolid$geometry$OpenSolid_BoundingBox2d$alwaysFalse);
			case 'GT':
				return (_elm_lang$core$Native_Utils.cmp(tolerance, 0) > -1) ? F2(
					function (firstBox, secondBox) {
						var _p4 = A2(_opensolid$geometry$OpenSolid_BoundingBox2d$overlapAmount, firstBox, secondBox);
						if (_p4.ctor === 'Just') {
							return _elm_lang$core$Native_Utils.cmp(_p4._0, tolerance) > 0;
						} else {
							return false;
						}
					}) : F2(
					function (firstBox, secondBox) {
						return !_elm_lang$core$Native_Utils.eq(
							A2(_opensolid$geometry$OpenSolid_BoundingBox2d$overlapAmount, firstBox, secondBox),
							_elm_lang$core$Maybe$Nothing);
					});
			default:
				if (_elm_lang$core$Native_Utils.cmp(tolerance, 0) > -1) {
					var expected = _elm_lang$core$Maybe$Just(tolerance);
					return F2(
						function (firstBox, secondBox) {
							return _elm_lang$core$Native_Utils.eq(
								A2(_opensolid$geometry$OpenSolid_BoundingBox2d$overlapAmount, firstBox, secondBox),
								expected);
						});
				} else {
					return _opensolid$geometry$OpenSolid_BoundingBox2d$alwaysFalse;
				}
		}
	});
var _opensolid$geometry$OpenSolid_BoundingBox2d$squaredSeparationAmount = F2(
	function (firstBox, secondBox) {
		var ySeparation = A2(
			_elm_lang$core$Basics$max,
			_opensolid$geometry$OpenSolid_BoundingBox2d$minY(firstBox),
			_opensolid$geometry$OpenSolid_BoundingBox2d$minY(secondBox)) - A2(
			_elm_lang$core$Basics$min,
			_opensolid$geometry$OpenSolid_BoundingBox2d$maxY(firstBox),
			_opensolid$geometry$OpenSolid_BoundingBox2d$maxY(secondBox));
		var xSeparation = A2(
			_elm_lang$core$Basics$max,
			_opensolid$geometry$OpenSolid_BoundingBox2d$minX(firstBox),
			_opensolid$geometry$OpenSolid_BoundingBox2d$minX(secondBox)) - A2(
			_elm_lang$core$Basics$min,
			_opensolid$geometry$OpenSolid_BoundingBox2d$maxX(firstBox),
			_opensolid$geometry$OpenSolid_BoundingBox2d$maxX(secondBox));
		return ((_elm_lang$core$Native_Utils.cmp(xSeparation, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(ySeparation, 0) > 0)) ? _elm_lang$core$Maybe$Just((xSeparation * xSeparation) + (ySeparation * ySeparation)) : ((_elm_lang$core$Native_Utils.cmp(xSeparation, 0) > 0) ? _elm_lang$core$Maybe$Just(xSeparation * xSeparation) : ((_elm_lang$core$Native_Utils.cmp(ySeparation, 0) > 0) ? _elm_lang$core$Maybe$Just(ySeparation * ySeparation) : ((_elm_lang$core$Native_Utils.eq(xSeparation, 0) || _elm_lang$core$Native_Utils.eq(ySeparation, 0)) ? _elm_lang$core$Maybe$Just(0) : _elm_lang$core$Maybe$Nothing)));
	});
var _opensolid$geometry$OpenSolid_BoundingBox2d$separatedBy = F2(
	function (order, tolerance) {
		var _p5 = order;
		switch (_p5.ctor) {
			case 'LT':
				return (_elm_lang$core$Native_Utils.cmp(tolerance, 0) > 0) ? F2(
					function (firstBox, secondBox) {
						var _p6 = A2(_opensolid$geometry$OpenSolid_BoundingBox2d$squaredSeparationAmount, firstBox, secondBox);
						if (_p6.ctor === 'Just') {
							return _elm_lang$core$Native_Utils.cmp(_p6._0, tolerance * tolerance) < 0;
						} else {
							return true;
						}
					}) : (_elm_lang$core$Native_Utils.eq(tolerance, 0) ? F2(
					function (firstBox, secondBox) {
						return _elm_lang$core$Native_Utils.eq(
							A2(_opensolid$geometry$OpenSolid_BoundingBox2d$squaredSeparationAmount, firstBox, secondBox),
							_elm_lang$core$Maybe$Nothing);
					}) : _opensolid$geometry$OpenSolid_BoundingBox2d$alwaysFalse);
			case 'GT':
				return (_elm_lang$core$Native_Utils.cmp(tolerance, 0) > -1) ? F2(
					function (firstBox, secondBox) {
						var _p7 = A2(_opensolid$geometry$OpenSolid_BoundingBox2d$squaredSeparationAmount, firstBox, secondBox);
						if (_p7.ctor === 'Just') {
							return _elm_lang$core$Native_Utils.cmp(_p7._0, tolerance * tolerance) > 0;
						} else {
							return false;
						}
					}) : F2(
					function (firstBox, secondBox) {
						return !_elm_lang$core$Native_Utils.eq(
							A2(_opensolid$geometry$OpenSolid_BoundingBox2d$squaredSeparationAmount, firstBox, secondBox),
							_elm_lang$core$Maybe$Nothing);
					});
			default:
				if (_elm_lang$core$Native_Utils.cmp(tolerance, 0) > -1) {
					var expected = _elm_lang$core$Maybe$Just(tolerance * tolerance);
					return F2(
						function (firstBox, secondBox) {
							return _elm_lang$core$Native_Utils.eq(
								A2(_opensolid$geometry$OpenSolid_BoundingBox2d$squaredSeparationAmount, firstBox, secondBox),
								expected);
						});
				} else {
					return _opensolid$geometry$OpenSolid_BoundingBox2d$alwaysFalse;
				}
		}
	});
var _opensolid$geometry$OpenSolid_BoundingBox2d$isContainedIn = F2(
	function (other, boundingBox) {
		return ((_elm_lang$core$Native_Utils.cmp(
			_opensolid$geometry$OpenSolid_BoundingBox2d$minX(other),
			_opensolid$geometry$OpenSolid_BoundingBox2d$minX(boundingBox)) < 1) && (_elm_lang$core$Native_Utils.cmp(
			_opensolid$geometry$OpenSolid_BoundingBox2d$maxX(boundingBox),
			_opensolid$geometry$OpenSolid_BoundingBox2d$maxX(other)) < 1)) && ((_elm_lang$core$Native_Utils.cmp(
			_opensolid$geometry$OpenSolid_BoundingBox2d$minY(other),
			_opensolid$geometry$OpenSolid_BoundingBox2d$minY(boundingBox)) < 1) && (_elm_lang$core$Native_Utils.cmp(
			_opensolid$geometry$OpenSolid_BoundingBox2d$maxY(boundingBox),
			_opensolid$geometry$OpenSolid_BoundingBox2d$maxY(other)) < 1));
	});
var _opensolid$geometry$OpenSolid_BoundingBox2d$dimensions = function (boundingBox) {
	var _p8 = _opensolid$geometry$OpenSolid_BoundingBox2d$extrema(boundingBox);
	var minX = _p8.minX;
	var maxX = _p8.maxX;
	var minY = _p8.minY;
	var maxY = _p8.maxY;
	return {ctor: '_Tuple2', _0: maxX - minX, _1: maxY - minY};
};
var _opensolid$geometry$OpenSolid_BoundingBox2d$midX = function (boundingBox) {
	var _p9 = _opensolid$geometry$OpenSolid_BoundingBox2d$extrema(boundingBox);
	var minX = _p9.minX;
	var maxX = _p9.maxX;
	return minX + (0.5 * (maxX - minX));
};
var _opensolid$geometry$OpenSolid_BoundingBox2d$midY = function (boundingBox) {
	var _p10 = _opensolid$geometry$OpenSolid_BoundingBox2d$extrema(boundingBox);
	var minY = _p10.minY;
	var maxY = _p10.maxY;
	return minY + (0.5 * (maxY - minY));
};
var _opensolid$geometry$OpenSolid_BoundingBox2d$centroid = function (boundingBox) {
	return _opensolid$geometry$OpenSolid_Bootstrap_Point2d$fromCoordinates(
		{
			ctor: '_Tuple2',
			_0: _opensolid$geometry$OpenSolid_BoundingBox2d$midX(boundingBox),
			_1: _opensolid$geometry$OpenSolid_BoundingBox2d$midY(boundingBox)
		});
};
var _opensolid$geometry$OpenSolid_BoundingBox2d$contains = F2(
	function (point, boundingBox) {
		var _p11 = _opensolid$geometry$OpenSolid_BoundingBox2d$extrema(boundingBox);
		var minX = _p11.minX;
		var maxX = _p11.maxX;
		var minY = _p11.minY;
		var maxY = _p11.maxY;
		var _p12 = _opensolid$geometry$OpenSolid_Bootstrap_Point2d$coordinates(point);
		var x = _p12._0;
		var y = _p12._1;
		return ((_elm_lang$core$Native_Utils.cmp(minX, x) < 1) && (_elm_lang$core$Native_Utils.cmp(x, maxX) < 1)) && ((_elm_lang$core$Native_Utils.cmp(minY, y) < 1) && (_elm_lang$core$Native_Utils.cmp(y, maxY) < 1));
	});
var _opensolid$geometry$OpenSolid_BoundingBox2d$with = _opensolid$geometry$OpenSolid_Bootstrap_BoundingBox2d$with;
var _opensolid$geometry$OpenSolid_BoundingBox2d$singleton = function (point) {
	var _p13 = _opensolid$geometry$OpenSolid_Bootstrap_Point2d$coordinates(point);
	var x = _p13._0;
	var y = _p13._1;
	return _opensolid$geometry$OpenSolid_BoundingBox2d$with(
		{minX: x, maxX: x, minY: y, maxY: y});
};
var _opensolid$geometry$OpenSolid_BoundingBox2d$hull = F2(
	function (firstBox, secondBox) {
		return _opensolid$geometry$OpenSolid_BoundingBox2d$with(
			{
				minX: A2(
					_elm_lang$core$Basics$min,
					_opensolid$geometry$OpenSolid_BoundingBox2d$minX(firstBox),
					_opensolid$geometry$OpenSolid_BoundingBox2d$minX(secondBox)),
				maxX: A2(
					_elm_lang$core$Basics$max,
					_opensolid$geometry$OpenSolid_BoundingBox2d$maxX(firstBox),
					_opensolid$geometry$OpenSolid_BoundingBox2d$maxX(secondBox)),
				minY: A2(
					_elm_lang$core$Basics$min,
					_opensolid$geometry$OpenSolid_BoundingBox2d$minY(firstBox),
					_opensolid$geometry$OpenSolid_BoundingBox2d$minY(secondBox)),
				maxY: A2(
					_elm_lang$core$Basics$max,
					_opensolid$geometry$OpenSolid_BoundingBox2d$maxY(firstBox),
					_opensolid$geometry$OpenSolid_BoundingBox2d$maxY(secondBox))
			});
	});
var _opensolid$geometry$OpenSolid_BoundingBox2d$hullOf = function (boundingBoxes) {
	var _p14 = boundingBoxes;
	if (_p14.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _opensolid$geometry$OpenSolid_BoundingBox2d$hull, _p14._0, _p14._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _opensolid$geometry$OpenSolid_BoundingBox2d$intersection = F2(
	function (firstBox, secondBox) {
		return A2(_opensolid$geometry$OpenSolid_BoundingBox2d$intersects, firstBox, secondBox) ? _elm_lang$core$Maybe$Just(
			_opensolid$geometry$OpenSolid_BoundingBox2d$with(
				{
					minX: A2(
						_elm_lang$core$Basics$max,
						_opensolid$geometry$OpenSolid_BoundingBox2d$minX(firstBox),
						_opensolid$geometry$OpenSolid_BoundingBox2d$minX(secondBox)),
					maxX: A2(
						_elm_lang$core$Basics$min,
						_opensolid$geometry$OpenSolid_BoundingBox2d$maxX(firstBox),
						_opensolid$geometry$OpenSolid_BoundingBox2d$maxX(secondBox)),
					minY: A2(
						_elm_lang$core$Basics$max,
						_opensolid$geometry$OpenSolid_BoundingBox2d$minY(firstBox),
						_opensolid$geometry$OpenSolid_BoundingBox2d$minY(secondBox)),
					maxY: A2(
						_elm_lang$core$Basics$min,
						_opensolid$geometry$OpenSolid_BoundingBox2d$maxY(firstBox),
						_opensolid$geometry$OpenSolid_BoundingBox2d$maxY(secondBox))
				})) : _elm_lang$core$Maybe$Nothing;
	});
var _opensolid$geometry$OpenSolid_BoundingBox2d$scaleAbout = F3(
	function (point, scale, boundingBox) {
		var _p15 = _opensolid$geometry$OpenSolid_Bootstrap_Point2d$coordinates(point);
		var x0 = _p15._0;
		var y0 = _p15._1;
		var _p16 = _opensolid$geometry$OpenSolid_BoundingBox2d$extrema(boundingBox);
		var minX = _p16.minX;
		var minY = _p16.minY;
		var maxX = _p16.maxX;
		var maxY = _p16.maxY;
		return (_elm_lang$core$Native_Utils.cmp(scale, 0) > -1) ? _opensolid$geometry$OpenSolid_BoundingBox2d$with(
			{minX: x0 + (scale * (minX - x0)), maxX: x0 + (scale * (maxX - x0)), minY: y0 + (scale * (minY - y0)), maxY: y0 + (scale * (maxY - y0))}) : _opensolid$geometry$OpenSolid_BoundingBox2d$with(
			{minX: x0 + (scale * (maxX - x0)), maxX: x0 + (scale * (minX - x0)), minY: y0 + (scale * (maxY - y0)), maxY: y0 + (scale * (minY - y0))});
	});
var _opensolid$geometry$OpenSolid_BoundingBox2d$translateBy = F2(
	function (displacement, boundingBox) {
		var _p17 = _opensolid$geometry$OpenSolid_Vector2d$components(displacement);
		var dx = _p17._0;
		var dy = _p17._1;
		var _p18 = _opensolid$geometry$OpenSolid_BoundingBox2d$extrema(boundingBox);
		var minX = _p18.minX;
		var minY = _p18.minY;
		var maxX = _p18.maxX;
		var maxY = _p18.maxY;
		return _opensolid$geometry$OpenSolid_BoundingBox2d$with(
			{minX: minX + dx, maxX: maxX + dx, minY: minY + dy, maxY: maxY + dy});
	});

var _opensolid$geometry$OpenSolid_Point2d$hullOf = function (points) {
	return _opensolid$geometry$OpenSolid_BoundingBox2d$hullOf(
		A2(_elm_lang$core$List$map, _opensolid$geometry$OpenSolid_BoundingBox2d$singleton, points));
};
var _opensolid$geometry$OpenSolid_Point2d$signedDistanceFrom = F2(
	function (axis, point) {
		var displacementVector = A2(
			_opensolid$geometry$OpenSolid_Vector2d$from,
			_opensolid$geometry$OpenSolid_Bootstrap_Axis2d$originPoint(axis),
			point);
		var directionVector = _opensolid$geometry$OpenSolid_Direction2d$toVector(
			_opensolid$geometry$OpenSolid_Bootstrap_Axis2d$direction(axis));
		return A2(_opensolid$geometry$OpenSolid_Vector2d$crossProduct, directionVector, displacementVector);
	});
var _opensolid$geometry$OpenSolid_Point2d$signedDistanceAlong = F2(
	function (axis, point) {
		return A2(
			_opensolid$geometry$OpenSolid_Vector2d$componentIn,
			_opensolid$geometry$OpenSolid_Bootstrap_Axis2d$direction(axis),
			A2(
				_opensolid$geometry$OpenSolid_Vector2d$from,
				_opensolid$geometry$OpenSolid_Bootstrap_Axis2d$originPoint(axis),
				point));
	});
var _opensolid$geometry$OpenSolid_Point2d$distanceAlong = _opensolid$geometry$OpenSolid_Point2d$signedDistanceAlong;
var _opensolid$geometry$OpenSolid_Point2d$squaredDistanceFrom = F2(
	function (firstPoint, secondPoint) {
		return _opensolid$geometry$OpenSolid_Vector2d$squaredLength(
			A2(_opensolid$geometry$OpenSolid_Vector2d$from, firstPoint, secondPoint));
	});
var _opensolid$geometry$OpenSolid_Point2d$distanceFrom = F2(
	function (firstPoint, secondPoint) {
		return _elm_lang$core$Basics$sqrt(
			A2(_opensolid$geometry$OpenSolid_Point2d$squaredDistanceFrom, firstPoint, secondPoint));
	});
var _opensolid$geometry$OpenSolid_Point2d$equalWithin = F3(
	function (tolerance, firstPoint, secondPoint) {
		return _elm_lang$core$Native_Utils.cmp(
			A2(_opensolid$geometry$OpenSolid_Point2d$squaredDistanceFrom, firstPoint, secondPoint),
			tolerance * tolerance) < 1;
	});
var _opensolid$geometry$OpenSolid_Point2d$yCoordinate = function (_p0) {
	var _p1 = _p0;
	return _p1._0._1;
};
var _opensolid$geometry$OpenSolid_Point2d$xCoordinate = function (_p2) {
	var _p3 = _p2;
	return _p3._0._0;
};
var _opensolid$geometry$OpenSolid_Point2d$coordinates = function (_p4) {
	var _p5 = _p4;
	return _p5._0;
};
var _opensolid$geometry$OpenSolid_Point2d$polarCoordinates = function (point) {
	return _elm_lang$core$Basics$toPolar(
		_opensolid$geometry$OpenSolid_Point2d$coordinates(point));
};
var _opensolid$geometry$OpenSolid_Point2d$hull = F2(
	function (firstPoint, secondPoint) {
		var _p6 = _opensolid$geometry$OpenSolid_Point2d$coordinates(secondPoint);
		var x2 = _p6._0;
		var y2 = _p6._1;
		var _p7 = _opensolid$geometry$OpenSolid_Point2d$coordinates(firstPoint);
		var x1 = _p7._0;
		var y1 = _p7._1;
		return _opensolid$geometry$OpenSolid_BoundingBox2d$with(
			{
				minX: A2(_elm_lang$core$Basics$min, x1, x2),
				maxX: A2(_elm_lang$core$Basics$max, x1, x2),
				minY: A2(_elm_lang$core$Basics$min, y1, y2),
				maxY: A2(_elm_lang$core$Basics$max, y1, y2)
			});
	});
var _opensolid$geometry$OpenSolid_Point2d$fromCoordinates = _opensolid$geometry$OpenSolid_Geometry_Internal$Point2d;
var _opensolid$geometry$OpenSolid_Point2d$fromPolarCoordinates = function (coordinates) {
	return _opensolid$geometry$OpenSolid_Point2d$fromCoordinates(
		_elm_lang$core$Basics$fromPolar(coordinates));
};
var _opensolid$geometry$OpenSolid_Point2d$interpolateFrom = F3(
	function (p1, p2, t) {
		var _p8 = _opensolid$geometry$OpenSolid_Point2d$coordinates(p2);
		var x2 = _p8._0;
		var y2 = _p8._1;
		var _p9 = _opensolid$geometry$OpenSolid_Point2d$coordinates(p1);
		var x1 = _p9._0;
		var y1 = _p9._1;
		return _opensolid$geometry$OpenSolid_Point2d$fromCoordinates(
			{
				ctor: '_Tuple2',
				_0: A3(_opensolid$geometry$OpenSolid_Scalar$interpolateFrom, x1, x2, t),
				_1: A3(_opensolid$geometry$OpenSolid_Scalar$interpolateFrom, y1, y2, t)
			});
	});
var _opensolid$geometry$OpenSolid_Point2d$midpoint = F2(
	function (firstPoint, secondPoint) {
		return A3(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, firstPoint, secondPoint, 0.5);
	});
var _opensolid$geometry$OpenSolid_Point2d$circumcenter = function (_p10) {
	var _p11 = _p10;
	var _p17 = _p11._2;
	var _p16 = _p11._1;
	var _p15 = _p11._0;
	var c2 = A2(_opensolid$geometry$OpenSolid_Point2d$squaredDistanceFrom, _p17, _p15);
	var b2 = A2(_opensolid$geometry$OpenSolid_Point2d$squaredDistanceFrom, _p16, _p17);
	var a2 = A2(_opensolid$geometry$OpenSolid_Point2d$squaredDistanceFrom, _p15, _p16);
	var t1 = a2 * ((b2 + c2) - a2);
	var t2 = b2 * ((c2 + a2) - b2);
	var t3 = c2 * ((a2 + b2) - c2);
	var sum = (t1 + t2) + t3;
	if (_elm_lang$core$Native_Utils.eq(sum, 0)) {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		var _p12 = _opensolid$geometry$OpenSolid_Point2d$coordinates(_p17);
		var x3 = _p12._0;
		var y3 = _p12._1;
		var _p13 = _opensolid$geometry$OpenSolid_Point2d$coordinates(_p16);
		var x2 = _p13._0;
		var y2 = _p13._1;
		var _p14 = _opensolid$geometry$OpenSolid_Point2d$coordinates(_p15);
		var x1 = _p14._0;
		var y1 = _p14._1;
		var w3 = t3 / sum;
		var w2 = t2 / sum;
		var w1 = t1 / sum;
		return _elm_lang$core$Maybe$Just(
			_opensolid$geometry$OpenSolid_Point2d$fromCoordinates(
				{ctor: '_Tuple2', _0: ((w1 * x3) + (w2 * x1)) + (w3 * x2), _1: ((w1 * y3) + (w2 * y1)) + (w3 * y2)}));
	}
};
var _opensolid$geometry$OpenSolid_Point2d$translateBy = F2(
	function (vector, point) {
		var _p18 = _opensolid$geometry$OpenSolid_Point2d$coordinates(point);
		var px = _p18._0;
		var py = _p18._1;
		var _p19 = _opensolid$geometry$OpenSolid_Vector2d$components(vector);
		var vx = _p19._0;
		var vy = _p19._1;
		return _opensolid$geometry$OpenSolid_Point2d$fromCoordinates(
			{ctor: '_Tuple2', _0: px + vx, _1: py + vy});
	});
var _opensolid$geometry$OpenSolid_Point2d$along = F2(
	function (axis, distance) {
		return A2(
			_opensolid$geometry$OpenSolid_Point2d$translateBy,
			_opensolid$geometry$OpenSolid_Vector2d$with(
				{
					length: distance,
					direction: _opensolid$geometry$OpenSolid_Bootstrap_Axis2d$direction(axis)
				}),
			_opensolid$geometry$OpenSolid_Bootstrap_Axis2d$originPoint(axis));
	});
var _opensolid$geometry$OpenSolid_Point2d$relativeTo = F2(
	function (frame, point) {
		return _opensolid$geometry$OpenSolid_Point2d$fromCoordinates(
			_opensolid$geometry$OpenSolid_Vector2d$components(
				A2(
					_opensolid$geometry$OpenSolid_Vector2d$relativeTo,
					frame,
					A2(
						_opensolid$geometry$OpenSolid_Vector2d$from,
						_opensolid$geometry$OpenSolid_Bootstrap_Frame2d$originPoint(frame),
						point))));
	});
var _opensolid$geometry$OpenSolid_Point2d$origin = _opensolid$geometry$OpenSolid_Point2d$fromCoordinates(
	{ctor: '_Tuple2', _0: 0, _1: 0});
var _opensolid$geometry$OpenSolid_Point2d$addTo = F2(
	function (point, vector) {
		return A2(_opensolid$geometry$OpenSolid_Point2d$translateBy, vector, point);
	});
var _opensolid$geometry$OpenSolid_Point2d$scaleAbout = F3(
	function (centerPoint, scale, point) {
		return A2(
			_opensolid$geometry$OpenSolid_Point2d$addTo,
			centerPoint,
			A2(
				_opensolid$geometry$OpenSolid_Vector2d$scaleBy,
				scale,
				A2(_opensolid$geometry$OpenSolid_Vector2d$from, centerPoint, point)));
	});
var _opensolid$geometry$OpenSolid_Point2d$rotateAround = F2(
	function (centerPoint, angle) {
		return function (_p20) {
			return A2(
				_opensolid$geometry$OpenSolid_Point2d$addTo,
				centerPoint,
				A2(
					_opensolid$geometry$OpenSolid_Vector2d$rotateBy,
					angle,
					A2(_opensolid$geometry$OpenSolid_Vector2d$from, centerPoint, _p20)));
		};
	});
var _opensolid$geometry$OpenSolid_Point2d$mirrorAcross = function (axis) {
	return function (_p21) {
		return A2(
			_opensolid$geometry$OpenSolid_Point2d$addTo,
			_opensolid$geometry$OpenSolid_Bootstrap_Axis2d$originPoint(axis),
			A2(
				_opensolid$geometry$OpenSolid_Vector2d$mirrorAcross,
				axis,
				A2(
					_opensolid$geometry$OpenSolid_Vector2d$from,
					_opensolid$geometry$OpenSolid_Bootstrap_Axis2d$originPoint(axis),
					_p21)));
	};
};
var _opensolid$geometry$OpenSolid_Point2d$projectOnto = function (axis) {
	return function (_p22) {
		return A2(
			_opensolid$geometry$OpenSolid_Point2d$addTo,
			_opensolid$geometry$OpenSolid_Bootstrap_Axis2d$originPoint(axis),
			A2(
				_opensolid$geometry$OpenSolid_Vector2d$projectOnto,
				axis,
				A2(
					_opensolid$geometry$OpenSolid_Vector2d$from,
					_opensolid$geometry$OpenSolid_Bootstrap_Axis2d$originPoint(axis),
					_p22)));
	};
};
var _opensolid$geometry$OpenSolid_Point2d$placeIn = F2(
	function (frame, point) {
		return A2(
			_opensolid$geometry$OpenSolid_Point2d$addTo,
			_opensolid$geometry$OpenSolid_Bootstrap_Frame2d$originPoint(frame),
			A2(
				_opensolid$geometry$OpenSolid_Vector2d$placeIn,
				frame,
				_opensolid$geometry$OpenSolid_Vector2d$fromComponents(
					_opensolid$geometry$OpenSolid_Point2d$coordinates(point))));
	});
var _opensolid$geometry$OpenSolid_Point2d$in_ = F2(
	function (frame, coordinates) {
		return A2(
			_opensolid$geometry$OpenSolid_Point2d$placeIn,
			frame,
			_opensolid$geometry$OpenSolid_Point2d$fromCoordinates(coordinates));
	});

var _opensolid$geometry$OpenSolid_Axis2d$direction = function (_p0) {
	var _p1 = _p0;
	return _p1._0.direction;
};
var _opensolid$geometry$OpenSolid_Axis2d$originPoint = function (_p2) {
	var _p3 = _p2;
	return _p3._0.originPoint;
};
var _opensolid$geometry$OpenSolid_Axis2d$with = _opensolid$geometry$OpenSolid_Geometry_Internal$Axis2d;
var _opensolid$geometry$OpenSolid_Axis2d$flip = function (axis) {
	return _opensolid$geometry$OpenSolid_Axis2d$with(
		{
			originPoint: _opensolid$geometry$OpenSolid_Axis2d$originPoint(axis),
			direction: _opensolid$geometry$OpenSolid_Direction2d$flip(
				_opensolid$geometry$OpenSolid_Axis2d$direction(axis))
		});
};
var _opensolid$geometry$OpenSolid_Axis2d$moveTo = F2(
	function (newOrigin, axis) {
		return _opensolid$geometry$OpenSolid_Axis2d$with(
			{
				originPoint: newOrigin,
				direction: _opensolid$geometry$OpenSolid_Axis2d$direction(axis)
			});
	});
var _opensolid$geometry$OpenSolid_Axis2d$rotateAround = F2(
	function (centerPoint, angle) {
		var rotateDirection = _opensolid$geometry$OpenSolid_Direction2d$rotateBy(angle);
		var rotatePoint = A2(_opensolid$geometry$OpenSolid_Point2d$rotateAround, centerPoint, angle);
		return function (axis) {
			return _opensolid$geometry$OpenSolid_Axis2d$with(
				{
					originPoint: rotatePoint(
						_opensolid$geometry$OpenSolid_Axis2d$originPoint(axis)),
					direction: rotateDirection(
						_opensolid$geometry$OpenSolid_Axis2d$direction(axis))
				});
		};
	});
var _opensolid$geometry$OpenSolid_Axis2d$translateBy = F2(
	function (vector, axis) {
		return _opensolid$geometry$OpenSolid_Axis2d$with(
			{
				originPoint: A2(
					_opensolid$geometry$OpenSolid_Point2d$translateBy,
					vector,
					_opensolid$geometry$OpenSolid_Axis2d$originPoint(axis)),
				direction: _opensolid$geometry$OpenSolid_Axis2d$direction(axis)
			});
	});
var _opensolid$geometry$OpenSolid_Axis2d$mirrorAcross = function (otherAxis) {
	var mirrorDirection = _opensolid$geometry$OpenSolid_Direction2d$mirrorAcross(otherAxis);
	var mirrorPoint = _opensolid$geometry$OpenSolid_Point2d$mirrorAcross(otherAxis);
	return function (axis) {
		return _opensolid$geometry$OpenSolid_Axis2d$with(
			{
				originPoint: mirrorPoint(
					_opensolid$geometry$OpenSolid_Axis2d$originPoint(axis)),
				direction: mirrorDirection(
					_opensolid$geometry$OpenSolid_Axis2d$direction(axis))
			});
	};
};
var _opensolid$geometry$OpenSolid_Axis2d$relativeTo = function (frame) {
	var relativeDirection = _opensolid$geometry$OpenSolid_Direction2d$relativeTo(frame);
	var relativePoint = _opensolid$geometry$OpenSolid_Point2d$relativeTo(frame);
	return function (axis) {
		return _opensolid$geometry$OpenSolid_Axis2d$with(
			{
				originPoint: relativePoint(
					_opensolid$geometry$OpenSolid_Axis2d$originPoint(axis)),
				direction: relativeDirection(
					_opensolid$geometry$OpenSolid_Axis2d$direction(axis))
			});
	};
};
var _opensolid$geometry$OpenSolid_Axis2d$placeIn = function (frame) {
	var placeDirection = _opensolid$geometry$OpenSolid_Direction2d$placeIn(frame);
	var placePoint = _opensolid$geometry$OpenSolid_Point2d$placeIn(frame);
	return function (axis) {
		return _opensolid$geometry$OpenSolid_Axis2d$with(
			{
				originPoint: placePoint(
					_opensolid$geometry$OpenSolid_Axis2d$originPoint(axis)),
				direction: placeDirection(
					_opensolid$geometry$OpenSolid_Axis2d$direction(axis))
			});
	};
};
var _opensolid$geometry$OpenSolid_Axis2d$y = _opensolid$geometry$OpenSolid_Axis2d$with(
	{originPoint: _opensolid$geometry$OpenSolid_Point2d$origin, direction: _opensolid$geometry$OpenSolid_Direction2d$y});
var _opensolid$geometry$OpenSolid_Axis2d$x = _opensolid$geometry$OpenSolid_Axis2d$with(
	{originPoint: _opensolid$geometry$OpenSolid_Point2d$origin, direction: _opensolid$geometry$OpenSolid_Direction2d$x});

var _opensolid$geometry$OpenSolid_Frame2d$yDirection = function (_p0) {
	var _p1 = _p0;
	return _p1._0.yDirection;
};
var _opensolid$geometry$OpenSolid_Frame2d$xDirection = function (_p2) {
	var _p3 = _p2;
	return _p3._0.xDirection;
};
var _opensolid$geometry$OpenSolid_Frame2d$isRightHanded = function (frame) {
	var yVector = _opensolid$geometry$OpenSolid_Direction2d$toVector(
		_opensolid$geometry$OpenSolid_Frame2d$yDirection(frame));
	var xVector = _opensolid$geometry$OpenSolid_Direction2d$toVector(
		_opensolid$geometry$OpenSolid_Frame2d$xDirection(frame));
	return _elm_lang$core$Native_Utils.cmp(
		A2(_opensolid$geometry$OpenSolid_Vector2d$crossProduct, xVector, yVector),
		0) > 0;
};
var _opensolid$geometry$OpenSolid_Frame2d$originPoint = function (_p4) {
	var _p5 = _p4;
	return _p5._0.originPoint;
};
var _opensolid$geometry$OpenSolid_Frame2d$xAxis = function (frame) {
	return _opensolid$geometry$OpenSolid_Axis2d$with(
		{
			originPoint: _opensolid$geometry$OpenSolid_Frame2d$originPoint(frame),
			direction: _opensolid$geometry$OpenSolid_Frame2d$xDirection(frame)
		});
};
var _opensolid$geometry$OpenSolid_Frame2d$yAxis = function (frame) {
	return _opensolid$geometry$OpenSolid_Axis2d$with(
		{
			originPoint: _opensolid$geometry$OpenSolid_Frame2d$originPoint(frame),
			direction: _opensolid$geometry$OpenSolid_Frame2d$yDirection(frame)
		});
};
var _opensolid$geometry$OpenSolid_Frame2d$unsafe = _opensolid$geometry$OpenSolid_Geometry_Internal$Frame2d;
var _opensolid$geometry$OpenSolid_Frame2d$atPoint = function (point) {
	return _opensolid$geometry$OpenSolid_Frame2d$unsafe(
		{originPoint: point, xDirection: _opensolid$geometry$OpenSolid_Direction2d$x, yDirection: _opensolid$geometry$OpenSolid_Direction2d$y});
};
var _opensolid$geometry$OpenSolid_Frame2d$flipX = function (frame) {
	return _opensolid$geometry$OpenSolid_Frame2d$unsafe(
		{
			originPoint: _opensolid$geometry$OpenSolid_Frame2d$originPoint(frame),
			xDirection: _opensolid$geometry$OpenSolid_Direction2d$flip(
				_opensolid$geometry$OpenSolid_Frame2d$xDirection(frame)),
			yDirection: _opensolid$geometry$OpenSolid_Frame2d$yDirection(frame)
		});
};
var _opensolid$geometry$OpenSolid_Frame2d$flipY = function (frame) {
	return _opensolid$geometry$OpenSolid_Frame2d$unsafe(
		{
			originPoint: _opensolid$geometry$OpenSolid_Frame2d$originPoint(frame),
			xDirection: _opensolid$geometry$OpenSolid_Frame2d$xDirection(frame),
			yDirection: _opensolid$geometry$OpenSolid_Direction2d$flip(
				_opensolid$geometry$OpenSolid_Frame2d$yDirection(frame))
		});
};
var _opensolid$geometry$OpenSolid_Frame2d$moveTo = F2(
	function (newOrigin, frame) {
		return _opensolid$geometry$OpenSolid_Frame2d$unsafe(
			{
				originPoint: newOrigin,
				xDirection: _opensolid$geometry$OpenSolid_Frame2d$xDirection(frame),
				yDirection: _opensolid$geometry$OpenSolid_Frame2d$yDirection(frame)
			});
	});
var _opensolid$geometry$OpenSolid_Frame2d$rotateBy = F2(
	function (angle, frame) {
		var rotateDirection = _opensolid$geometry$OpenSolid_Direction2d$rotateBy(angle);
		return _opensolid$geometry$OpenSolid_Frame2d$unsafe(
			{
				originPoint: _opensolid$geometry$OpenSolid_Frame2d$originPoint(frame),
				xDirection: rotateDirection(
					_opensolid$geometry$OpenSolid_Frame2d$xDirection(frame)),
				yDirection: rotateDirection(
					_opensolid$geometry$OpenSolid_Frame2d$yDirection(frame))
			});
	});
var _opensolid$geometry$OpenSolid_Frame2d$rotateAround = F2(
	function (centerPoint, angle) {
		var rotateDirection = _opensolid$geometry$OpenSolid_Direction2d$rotateBy(angle);
		var rotatePoint = A2(_opensolid$geometry$OpenSolid_Point2d$rotateAround, centerPoint, angle);
		return function (frame) {
			return _opensolid$geometry$OpenSolid_Frame2d$unsafe(
				{
					originPoint: rotatePoint(
						_opensolid$geometry$OpenSolid_Frame2d$originPoint(frame)),
					xDirection: rotateDirection(
						_opensolid$geometry$OpenSolid_Frame2d$xDirection(frame)),
					yDirection: rotateDirection(
						_opensolid$geometry$OpenSolid_Frame2d$yDirection(frame))
				});
		};
	});
var _opensolid$geometry$OpenSolid_Frame2d$translateBy = F2(
	function (vector, frame) {
		return _opensolid$geometry$OpenSolid_Frame2d$unsafe(
			{
				originPoint: A2(
					_opensolid$geometry$OpenSolid_Point2d$translateBy,
					vector,
					_opensolid$geometry$OpenSolid_Frame2d$originPoint(frame)),
				xDirection: _opensolid$geometry$OpenSolid_Frame2d$xDirection(frame),
				yDirection: _opensolid$geometry$OpenSolid_Frame2d$yDirection(frame)
			});
	});
var _opensolid$geometry$OpenSolid_Frame2d$translateAlongOwn = F3(
	function (axis, distance, frame) {
		var displacement = _opensolid$geometry$OpenSolid_Vector2d$with(
			{
				length: distance,
				direction: _opensolid$geometry$OpenSolid_Axis2d$direction(
					axis(frame))
			});
		return A2(_opensolid$geometry$OpenSolid_Frame2d$translateBy, displacement, frame);
	});
var _opensolid$geometry$OpenSolid_Frame2d$mirrorAcross = function (axis) {
	var mirrorDirection = _opensolid$geometry$OpenSolid_Direction2d$mirrorAcross(axis);
	var mirrorPoint = _opensolid$geometry$OpenSolid_Point2d$mirrorAcross(axis);
	return function (frame) {
		return _opensolid$geometry$OpenSolid_Frame2d$unsafe(
			{
				originPoint: mirrorPoint(
					_opensolid$geometry$OpenSolid_Frame2d$originPoint(frame)),
				xDirection: mirrorDirection(
					_opensolid$geometry$OpenSolid_Frame2d$xDirection(frame)),
				yDirection: mirrorDirection(
					_opensolid$geometry$OpenSolid_Frame2d$yDirection(frame))
			});
	};
};
var _opensolid$geometry$OpenSolid_Frame2d$relativeTo = function (otherFrame) {
	var relativeDirection = _opensolid$geometry$OpenSolid_Direction2d$relativeTo(otherFrame);
	var relativePoint = _opensolid$geometry$OpenSolid_Point2d$relativeTo(otherFrame);
	return function (frame) {
		return _opensolid$geometry$OpenSolid_Frame2d$unsafe(
			{
				originPoint: relativePoint(
					_opensolid$geometry$OpenSolid_Frame2d$originPoint(frame)),
				xDirection: relativeDirection(
					_opensolid$geometry$OpenSolid_Frame2d$xDirection(frame)),
				yDirection: relativeDirection(
					_opensolid$geometry$OpenSolid_Frame2d$yDirection(frame))
			});
	};
};
var _opensolid$geometry$OpenSolid_Frame2d$placeIn = function (otherFrame) {
	var placeDirection = _opensolid$geometry$OpenSolid_Direction2d$placeIn(otherFrame);
	var placePoint = _opensolid$geometry$OpenSolid_Point2d$placeIn(otherFrame);
	return function (frame) {
		return _opensolid$geometry$OpenSolid_Frame2d$unsafe(
			{
				originPoint: placePoint(
					_opensolid$geometry$OpenSolid_Frame2d$originPoint(frame)),
				xDirection: placeDirection(
					_opensolid$geometry$OpenSolid_Frame2d$xDirection(frame)),
				yDirection: placeDirection(
					_opensolid$geometry$OpenSolid_Frame2d$yDirection(frame))
			});
	};
};
var _opensolid$geometry$OpenSolid_Frame2d$with = function (_p6) {
	var _p7 = _p6;
	var _p8 = _p7.xDirection;
	return _opensolid$geometry$OpenSolid_Frame2d$unsafe(
		{
			originPoint: _p7.originPoint,
			xDirection: _p8,
			yDirection: _opensolid$geometry$OpenSolid_Direction2d$perpendicularTo(_p8)
		});
};
var _opensolid$geometry$OpenSolid_Frame2d$xy = _opensolid$geometry$OpenSolid_Frame2d$atPoint(_opensolid$geometry$OpenSolid_Point2d$origin);

var _opensolid$geometry$OpenSolid_LineSegment2d$endpoints = function (_p0) {
	var _p1 = _p0;
	return _p1._0;
};
var _opensolid$geometry$OpenSolid_LineSegment2d$interpolate = function (lineSegment) {
	var _p2 = _opensolid$geometry$OpenSolid_LineSegment2d$endpoints(lineSegment);
	var start = _p2._0;
	var end = _p2._1;
	return A2(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, start, end);
};
var _opensolid$geometry$OpenSolid_LineSegment2d$midpoint = function (lineSegment) {
	return A2(_opensolid$geometry$OpenSolid_LineSegment2d$interpolate, lineSegment, 0.5);
};
var _opensolid$geometry$OpenSolid_LineSegment2d$vector = function (lineSegment) {
	var _p3 = _opensolid$geometry$OpenSolid_LineSegment2d$endpoints(lineSegment);
	var p1 = _p3._0;
	var p2 = _p3._1;
	return A2(_opensolid$geometry$OpenSolid_Vector2d$from, p1, p2);
};
var _opensolid$geometry$OpenSolid_LineSegment2d$length = function (_p4) {
	return _opensolid$geometry$OpenSolid_Vector2d$length(
		_opensolid$geometry$OpenSolid_LineSegment2d$vector(_p4));
};
var _opensolid$geometry$OpenSolid_LineSegment2d$squaredLength = function (_p5) {
	return _opensolid$geometry$OpenSolid_Vector2d$squaredLength(
		_opensolid$geometry$OpenSolid_LineSegment2d$vector(_p5));
};
var _opensolid$geometry$OpenSolid_LineSegment2d$direction = function (_p6) {
	return _opensolid$geometry$OpenSolid_Vector2d$direction(
		_opensolid$geometry$OpenSolid_LineSegment2d$vector(_p6));
};
var _opensolid$geometry$OpenSolid_LineSegment2d$normalDirection = function (_p7) {
	return _opensolid$geometry$OpenSolid_Vector2d$direction(
		_opensolid$geometry$OpenSolid_Vector2d$perpendicularTo(
			_opensolid$geometry$OpenSolid_LineSegment2d$vector(_p7)));
};
var _opensolid$geometry$OpenSolid_LineSegment2d$intersectionPoint = F2(
	function (lineSegment1, lineSegment2) {
		var _p8 = _opensolid$geometry$OpenSolid_LineSegment2d$endpoints(lineSegment2);
		var q = _p8._0;
		var q_ = _p8._1;
		var _p9 = _opensolid$geometry$OpenSolid_LineSegment2d$endpoints(lineSegment1);
		var p = _p9._0;
		var p_ = _p9._1;
		var _p10 = {
			ctor: '_Tuple5',
			_0: _opensolid$geometry$OpenSolid_LineSegment2d$vector(lineSegment1),
			_1: _opensolid$geometry$OpenSolid_LineSegment2d$vector(lineSegment2),
			_2: A2(_opensolid$geometry$OpenSolid_Vector2d$from, p, q),
			_3: A2(_opensolid$geometry$OpenSolid_Vector2d$from, p, q_),
			_4: A2(_opensolid$geometry$OpenSolid_Vector2d$from, q, p_)
		};
		var r = _p10._0;
		var s = _p10._1;
		var pq = _p10._2;
		var pq_ = _p10._3;
		var qp_ = _p10._4;
		var _p11 = {
			ctor: '_Tuple4',
			_0: A2(_opensolid$geometry$OpenSolid_Vector2d$crossProduct, pq, r),
			_1: A2(_opensolid$geometry$OpenSolid_Vector2d$crossProduct, pq, s),
			_2: A2(_opensolid$geometry$OpenSolid_Vector2d$crossProduct, s, qp_),
			_3: A2(_opensolid$geometry$OpenSolid_Vector2d$crossProduct, r, pq_)
		};
		var pqXr = _p11._0;
		var pqXs = _p11._1;
		var sXqp_ = _p11._2;
		var rXpq_ = _p11._3;
		var _p12 = {ctor: '_Tuple2', _0: pqXs - sXqp_, _1: pqXr + rXpq_};
		var tDenominator = _p12._0;
		var uDenominator = _p12._1;
		if (_elm_lang$core$Native_Utils.eq(tDenominator, 0) || _elm_lang$core$Native_Utils.eq(uDenominator, 0)) {
			return (_elm_lang$core$Native_Utils.cmp(
				A2(_opensolid$geometry$OpenSolid_Vector2d$dotProduct, r, s),
				0) < 0) ? (_elm_lang$core$Native_Utils.eq(p_, q_) ? _elm_lang$core$Maybe$Just(p_) : (_elm_lang$core$Native_Utils.eq(p, q) ? _elm_lang$core$Maybe$Just(p) : _elm_lang$core$Maybe$Nothing)) : (_elm_lang$core$Native_Utils.eq(p_, q) ? _elm_lang$core$Maybe$Just(p_) : (_elm_lang$core$Native_Utils.eq(p, q_) ? _elm_lang$core$Maybe$Just(p) : _elm_lang$core$Maybe$Nothing));
		} else {
			var _p13 = {ctor: '_Tuple2', _0: pqXs / tDenominator, _1: pqXr / uDenominator};
			var t = _p13._0;
			var u = _p13._1;
			if (((_elm_lang$core$Native_Utils.cmp(0, t) < 1) && (_elm_lang$core$Native_Utils.cmp(t, 1) < 1)) && ((_elm_lang$core$Native_Utils.cmp(0, u) < 1) && (_elm_lang$core$Native_Utils.cmp(u, 1) < 1))) {
				var intersection = (_elm_lang$core$Native_Utils.cmp(
					A2(_elm_lang$core$Basics$min, t, 1 - t),
					A2(_elm_lang$core$Basics$min, u, 1 - u)) < 1) ? A2(_opensolid$geometry$OpenSolid_LineSegment2d$interpolate, lineSegment1, t) : A2(_opensolid$geometry$OpenSolid_LineSegment2d$interpolate, lineSegment2, u);
				return _elm_lang$core$Maybe$Just(intersection);
			} else {
				return _elm_lang$core$Maybe$Nothing;
			}
		}
	});
var _opensolid$geometry$OpenSolid_LineSegment2d$boundingBox = function (lineSegment) {
	var _p14 = _opensolid$geometry$OpenSolid_LineSegment2d$endpoints(lineSegment);
	var p1 = _p14._0;
	var p2 = _p14._1;
	return A2(_opensolid$geometry$OpenSolid_Point2d$hull, p1, p2);
};
var _opensolid$geometry$OpenSolid_LineSegment2d$endPoint = function (_p15) {
	var _p16 = _p15;
	return _p16._0._1;
};
var _opensolid$geometry$OpenSolid_LineSegment2d$startPoint = function (_p17) {
	var _p18 = _p17;
	return _p18._0._0;
};
var _opensolid$geometry$OpenSolid_LineSegment2d$fromEndpoints = _opensolid$geometry$OpenSolid_Geometry_Internal$LineSegment2d;
var _opensolid$geometry$OpenSolid_LineSegment2d$from = F2(
	function (startPoint, endPoint) {
		return _opensolid$geometry$OpenSolid_LineSegment2d$fromEndpoints(
			{ctor: '_Tuple2', _0: startPoint, _1: endPoint});
	});
var _opensolid$geometry$OpenSolid_LineSegment2d$along = F3(
	function (axis, start, end) {
		return _opensolid$geometry$OpenSolid_LineSegment2d$fromEndpoints(
			{
				ctor: '_Tuple2',
				_0: A2(_opensolid$geometry$OpenSolid_Point2d$along, axis, start),
				_1: A2(_opensolid$geometry$OpenSolid_Point2d$along, axis, end)
			});
	});
var _opensolid$geometry$OpenSolid_LineSegment2d$reverse = function (lineSegment) {
	var _p19 = _opensolid$geometry$OpenSolid_LineSegment2d$endpoints(lineSegment);
	var p1 = _p19._0;
	var p2 = _p19._1;
	return _opensolid$geometry$OpenSolid_LineSegment2d$fromEndpoints(
		{ctor: '_Tuple2', _0: p2, _1: p1});
};
var _opensolid$geometry$OpenSolid_LineSegment2d$mapEndpoints = F2(
	function ($function, lineSegment) {
		var _p20 = _opensolid$geometry$OpenSolid_LineSegment2d$endpoints(lineSegment);
		var p1 = _p20._0;
		var p2 = _p20._1;
		return _opensolid$geometry$OpenSolid_LineSegment2d$fromEndpoints(
			{
				ctor: '_Tuple2',
				_0: $function(p1),
				_1: $function(p2)
			});
	});
var _opensolid$geometry$OpenSolid_LineSegment2d$scaleAbout = F2(
	function (point, scale) {
		return _opensolid$geometry$OpenSolid_LineSegment2d$mapEndpoints(
			A2(_opensolid$geometry$OpenSolid_Point2d$scaleAbout, point, scale));
	});
var _opensolid$geometry$OpenSolid_LineSegment2d$rotateAround = F2(
	function (centerPoint, angle) {
		return _opensolid$geometry$OpenSolid_LineSegment2d$mapEndpoints(
			A2(_opensolid$geometry$OpenSolid_Point2d$rotateAround, centerPoint, angle));
	});
var _opensolid$geometry$OpenSolid_LineSegment2d$translateBy = function (vector) {
	return _opensolid$geometry$OpenSolid_LineSegment2d$mapEndpoints(
		_opensolid$geometry$OpenSolid_Point2d$translateBy(vector));
};
var _opensolid$geometry$OpenSolid_LineSegment2d$mirrorAcross = function (axis) {
	return _opensolid$geometry$OpenSolid_LineSegment2d$mapEndpoints(
		_opensolid$geometry$OpenSolid_Point2d$mirrorAcross(axis));
};
var _opensolid$geometry$OpenSolid_LineSegment2d$projectOnto = function (axis) {
	return _opensolid$geometry$OpenSolid_LineSegment2d$mapEndpoints(
		_opensolid$geometry$OpenSolid_Point2d$projectOnto(axis));
};
var _opensolid$geometry$OpenSolid_LineSegment2d$relativeTo = function (frame) {
	return _opensolid$geometry$OpenSolid_LineSegment2d$mapEndpoints(
		_opensolid$geometry$OpenSolid_Point2d$relativeTo(frame));
};
var _opensolid$geometry$OpenSolid_LineSegment2d$placeIn = function (frame) {
	return _opensolid$geometry$OpenSolid_LineSegment2d$mapEndpoints(
		_opensolid$geometry$OpenSolid_Point2d$placeIn(frame));
};

var _opensolid$geometry$OpenSolid_Polyline2d$vertices = function (_p0) {
	var _p1 = _p0;
	return _p1._0;
};
var _opensolid$geometry$OpenSolid_Polyline2d$segments = function (polyline) {
	var _p2 = _opensolid$geometry$OpenSolid_Polyline2d$vertices(polyline);
	if (_p2.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		return A3(_elm_lang$core$List$map2, _opensolid$geometry$OpenSolid_LineSegment2d$from, _p2, _p2._1);
	}
};
var _opensolid$geometry$OpenSolid_Polyline2d$length = function (_p3) {
	return _elm_lang$core$List$sum(
		A2(
			_elm_lang$core$List$map,
			_opensolid$geometry$OpenSolid_LineSegment2d$length,
			_opensolid$geometry$OpenSolid_Polyline2d$segments(_p3)));
};
var _opensolid$geometry$OpenSolid_Polyline2d$boundingBox = function (polyline) {
	return _opensolid$geometry$OpenSolid_Point2d$hullOf(
		_opensolid$geometry$OpenSolid_Polyline2d$vertices(polyline));
};
var _opensolid$geometry$OpenSolid_Polyline2d$fromVertices = _opensolid$geometry$OpenSolid_Geometry_Internal$Polyline2d;
var _opensolid$geometry$OpenSolid_Polyline2d$mapVertices = function ($function) {
	return function (_p4) {
		return _opensolid$geometry$OpenSolid_Polyline2d$fromVertices(
			A2(
				_elm_lang$core$List$map,
				$function,
				_opensolid$geometry$OpenSolid_Polyline2d$vertices(_p4)));
	};
};
var _opensolid$geometry$OpenSolid_Polyline2d$scaleAbout = F2(
	function (point, scale) {
		return _opensolid$geometry$OpenSolid_Polyline2d$mapVertices(
			A2(_opensolid$geometry$OpenSolid_Point2d$scaleAbout, point, scale));
	});
var _opensolid$geometry$OpenSolid_Polyline2d$rotateAround = F2(
	function (point, angle) {
		return _opensolid$geometry$OpenSolid_Polyline2d$mapVertices(
			A2(_opensolid$geometry$OpenSolid_Point2d$rotateAround, point, angle));
	});
var _opensolid$geometry$OpenSolid_Polyline2d$translateBy = function (vector) {
	return _opensolid$geometry$OpenSolid_Polyline2d$mapVertices(
		_opensolid$geometry$OpenSolid_Point2d$translateBy(vector));
};
var _opensolid$geometry$OpenSolid_Polyline2d$mirrorAcross = function (axis) {
	return _opensolid$geometry$OpenSolid_Polyline2d$mapVertices(
		_opensolid$geometry$OpenSolid_Point2d$mirrorAcross(axis));
};
var _opensolid$geometry$OpenSolid_Polyline2d$projectOnto = function (axis) {
	return _opensolid$geometry$OpenSolid_Polyline2d$mapVertices(
		_opensolid$geometry$OpenSolid_Point2d$projectOnto(axis));
};
var _opensolid$geometry$OpenSolid_Polyline2d$relativeTo = function (frame) {
	return _opensolid$geometry$OpenSolid_Polyline2d$mapVertices(
		_opensolid$geometry$OpenSolid_Point2d$relativeTo(frame));
};
var _opensolid$geometry$OpenSolid_Polyline2d$placeIn = function (frame) {
	return _opensolid$geometry$OpenSolid_Polyline2d$mapVertices(
		_opensolid$geometry$OpenSolid_Point2d$placeIn(frame));
};

var _opensolid$geometry$OpenSolid_Arc2d$sweptAngle = function (_p0) {
	var _p1 = _p0;
	return _p1._0.sweptAngle;
};
var _opensolid$geometry$OpenSolid_Arc2d$startPoint = function (_p2) {
	var _p3 = _p2;
	return _p3._0.startPoint;
};
var _opensolid$geometry$OpenSolid_Arc2d$centerPoint = function (_p4) {
	var _p5 = _p4;
	return _p5._0.centerPoint;
};
var _opensolid$geometry$OpenSolid_Arc2d$radius = function (arc) {
	return A2(
		_opensolid$geometry$OpenSolid_Point2d$distanceFrom,
		_opensolid$geometry$OpenSolid_Arc2d$centerPoint(arc),
		_opensolid$geometry$OpenSolid_Arc2d$startPoint(arc));
};
var _opensolid$geometry$OpenSolid_Arc2d$numApproximationSegments = F2(
	function (tolerance, arc) {
		if ((_elm_lang$core$Native_Utils.cmp(0, tolerance) < 0) && (_elm_lang$core$Native_Utils.cmp(
			tolerance,
			_opensolid$geometry$OpenSolid_Arc2d$radius(arc)) < 0)) {
			var maxSegmentAngle = _elm_lang$core$Basics$sqrt(
				(8 * tolerance) / _opensolid$geometry$OpenSolid_Arc2d$radius(arc));
			return _elm_lang$core$Basics$ceiling(
				_elm_lang$core$Basics$abs(
					_opensolid$geometry$OpenSolid_Arc2d$sweptAngle(arc)) / maxSegmentAngle);
		} else {
			return 1;
		}
	});
var _opensolid$geometry$OpenSolid_Arc2d$endPoint = function (arc) {
	return A3(
		_opensolid$geometry$OpenSolid_Point2d$rotateAround,
		_opensolid$geometry$OpenSolid_Arc2d$centerPoint(arc),
		_opensolid$geometry$OpenSolid_Arc2d$sweptAngle(arc),
		_opensolid$geometry$OpenSolid_Arc2d$startPoint(arc));
};
var _opensolid$geometry$OpenSolid_Arc2d$pointOn = F2(
	function (arc, parameter) {
		var angle = parameter * _opensolid$geometry$OpenSolid_Arc2d$sweptAngle(arc);
		return A3(
			_opensolid$geometry$OpenSolid_Point2d$rotateAround,
			_opensolid$geometry$OpenSolid_Arc2d$centerPoint(arc),
			angle,
			_opensolid$geometry$OpenSolid_Arc2d$startPoint(arc));
	});
var _opensolid$geometry$OpenSolid_Arc2d$toPolyline = F2(
	function (tolerance, arc) {
		var numSegments = A2(_opensolid$geometry$OpenSolid_Arc2d$numApproximationSegments, tolerance, arc);
		var point = function (index) {
			return A2(
				_opensolid$geometry$OpenSolid_Arc2d$pointOn,
				arc,
				_elm_lang$core$Basics$toFloat(index) / _elm_lang$core$Basics$toFloat(numSegments));
		};
		var points = A2(
			_elm_lang$core$List$map,
			point,
			A2(_elm_lang$core$List$range, 0, numSegments));
		return _opensolid$geometry$OpenSolid_Polyline2d$fromVertices(points);
	});
var _opensolid$geometry$OpenSolid_Arc2d$derivative = F2(
	function (arc, parameter) {
		var startDerivative = A2(
			_opensolid$geometry$OpenSolid_Vector2d$scaleBy,
			_opensolid$geometry$OpenSolid_Arc2d$sweptAngle(arc),
			_opensolid$geometry$OpenSolid_Vector2d$perpendicularTo(
				A2(
					_opensolid$geometry$OpenSolid_Vector2d$from,
					_opensolid$geometry$OpenSolid_Arc2d$centerPoint(arc),
					_opensolid$geometry$OpenSolid_Arc2d$startPoint(arc))));
		var angle = parameter * _opensolid$geometry$OpenSolid_Arc2d$sweptAngle(arc);
		return A2(_opensolid$geometry$OpenSolid_Vector2d$rotateBy, angle, startDerivative);
	});
var _opensolid$geometry$OpenSolid_Arc2d$evaluate = function (arc) {
	var _p6 = A2(
		_opensolid$geometry$OpenSolid_Direction2d$from,
		_opensolid$geometry$OpenSolid_Arc2d$centerPoint(arc),
		_opensolid$geometry$OpenSolid_Arc2d$startPoint(arc));
	if (_p6.ctor === 'Just') {
		var arcSweptAngle = _opensolid$geometry$OpenSolid_Arc2d$sweptAngle(arc);
		var arcRadius = _opensolid$geometry$OpenSolid_Arc2d$radius(arc);
		var derivativeMagnitude = arcRadius * arcSweptAngle;
		var _p7 = _opensolid$geometry$OpenSolid_Point2d$coordinates(
			_opensolid$geometry$OpenSolid_Arc2d$centerPoint(arc));
		var centerX = _p7._0;
		var centerY = _p7._1;
		var startAngle = _opensolid$geometry$OpenSolid_Direction2d$angle(_p6._0);
		return function (t) {
			var angle = startAngle + (t * arcSweptAngle);
			var cosAngle = _elm_lang$core$Basics$cos(angle);
			var sinAngle = _elm_lang$core$Basics$sin(angle);
			return {
				ctor: '_Tuple2',
				_0: _opensolid$geometry$OpenSolid_Point2d$fromCoordinates(
					{ctor: '_Tuple2', _0: centerX + (arcRadius * cosAngle), _1: centerY + (arcRadius * sinAngle)}),
				_1: _opensolid$geometry$OpenSolid_Vector2d$fromComponents(
					{ctor: '_Tuple2', _0: (0 - derivativeMagnitude) * sinAngle, _1: derivativeMagnitude * cosAngle})
			};
		};
	} else {
		return _elm_lang$core$Basics$always(
			{
				ctor: '_Tuple2',
				_0: _opensolid$geometry$OpenSolid_Arc2d$centerPoint(arc),
				_1: _opensolid$geometry$OpenSolid_Vector2d$zero
			});
	}
};
var _opensolid$geometry$OpenSolid_Arc2d$with = _opensolid$geometry$OpenSolid_Geometry_Internal$Arc2d;
var _opensolid$geometry$OpenSolid_Arc2d$throughPoints = function (points) {
	return A2(
		_elm_lang$core$Maybe$andThen,
		function (centerPoint) {
			var _p8 = points;
			var firstPoint = _p8._0;
			var secondPoint = _p8._1;
			var thirdPoint = _p8._2;
			var firstVector = A2(_opensolid$geometry$OpenSolid_Vector2d$from, centerPoint, firstPoint);
			var secondVector = A2(_opensolid$geometry$OpenSolid_Vector2d$from, centerPoint, secondPoint);
			var thirdVector = A2(_opensolid$geometry$OpenSolid_Vector2d$from, centerPoint, thirdPoint);
			return A4(
				_elm_lang$core$Maybe$map3,
				F3(
					function (firstDirection, secondDirection, thirdDirection) {
						var full = A2(_opensolid$geometry$OpenSolid_Direction2d$angleFrom, firstDirection, thirdDirection);
						var partial = A2(_opensolid$geometry$OpenSolid_Direction2d$angleFrom, firstDirection, secondDirection);
						var sweptAngle = ((_elm_lang$core$Native_Utils.cmp(partial, 0) > -1) && (_elm_lang$core$Native_Utils.cmp(full, partial) > -1)) ? full : (((_elm_lang$core$Native_Utils.cmp(partial, 0) < 1) && (_elm_lang$core$Native_Utils.cmp(full, partial) < 1)) ? full : ((_elm_lang$core$Native_Utils.cmp(full, 0) > -1) ? (full - (2 * _elm_lang$core$Basics$pi)) : (full + (2 * _elm_lang$core$Basics$pi))));
						return _opensolid$geometry$OpenSolid_Arc2d$with(
							{centerPoint: centerPoint, startPoint: firstPoint, sweptAngle: sweptAngle});
					}),
				_opensolid$geometry$OpenSolid_Vector2d$direction(firstVector),
				_opensolid$geometry$OpenSolid_Vector2d$direction(secondVector),
				_opensolid$geometry$OpenSolid_Vector2d$direction(thirdVector));
		},
		_opensolid$geometry$OpenSolid_Point2d$circumcenter(points));
};
var _opensolid$geometry$OpenSolid_Arc2d$fromEndpoints = function (_p9) {
	var _p10 = _p9;
	var _p15 = _p10.sweptAngle;
	var _p14 = _p10.startPoint;
	var _p13 = _p10.radius;
	var squaredRadius = _p13 * _p13;
	var chord = A2(_opensolid$geometry$OpenSolid_LineSegment2d$from, _p14, _p10.endPoint);
	var squaredHalfLength = _opensolid$geometry$OpenSolid_LineSegment2d$squaredLength(chord) / 4;
	return (_elm_lang$core$Native_Utils.cmp(squaredRadius, squaredHalfLength) > -1) ? A2(
		_elm_lang$core$Maybe$map,
		function (offsetDirection) {
			var halfLength = _elm_lang$core$Basics$sqrt(squaredHalfLength);
			var shortAngle = 2 * _elm_lang$core$Basics$asin(halfLength / _p13);
			var sweptAngleInRadians = function () {
				var _p11 = _p15;
				switch (_p11.ctor) {
					case 'SmallPositive':
						return shortAngle;
					case 'SmallNegative':
						return 0 - shortAngle;
					case 'LargePositive':
						return (2 * _elm_lang$core$Basics$pi) - shortAngle;
					default:
						return shortAngle - (2 * _elm_lang$core$Basics$pi);
				}
			}();
			var midpoint = _opensolid$geometry$OpenSolid_LineSegment2d$midpoint(chord);
			var offsetMagnitude = _elm_lang$core$Basics$sqrt(squaredRadius - squaredHalfLength);
			var offsetDistance = function () {
				var _p12 = _p15;
				switch (_p12.ctor) {
					case 'SmallPositive':
						return offsetMagnitude;
					case 'SmallNegative':
						return 0 - offsetMagnitude;
					case 'LargeNegative':
						return offsetMagnitude;
					default:
						return 0 - offsetMagnitude;
				}
			}();
			var offset = _opensolid$geometry$OpenSolid_Vector2d$with(
				{length: offsetDistance, direction: offsetDirection});
			var centerPoint = A2(_opensolid$geometry$OpenSolid_Point2d$translateBy, offset, midpoint);
			return _opensolid$geometry$OpenSolid_Arc2d$with(
				{centerPoint: centerPoint, startPoint: _p14, sweptAngle: sweptAngleInRadians});
		},
		_opensolid$geometry$OpenSolid_LineSegment2d$normalDirection(chord)) : _elm_lang$core$Maybe$Nothing;
};
var _opensolid$geometry$OpenSolid_Arc2d$reverse = function (arc) {
	return _opensolid$geometry$OpenSolid_Arc2d$with(
		{
			startPoint: _opensolid$geometry$OpenSolid_Arc2d$endPoint(arc),
			centerPoint: _opensolid$geometry$OpenSolid_Arc2d$centerPoint(arc),
			sweptAngle: 0 - _opensolid$geometry$OpenSolid_Arc2d$sweptAngle(arc)
		});
};
var _opensolid$geometry$OpenSolid_Arc2d$scaleAbout = F3(
	function (point, scale, arc) {
		var scalePoint = A2(_opensolid$geometry$OpenSolid_Point2d$scaleAbout, point, scale);
		return _opensolid$geometry$OpenSolid_Arc2d$with(
			{
				centerPoint: scalePoint(
					_opensolid$geometry$OpenSolid_Arc2d$centerPoint(arc)),
				startPoint: scalePoint(
					_opensolid$geometry$OpenSolid_Arc2d$startPoint(arc)),
				sweptAngle: (_elm_lang$core$Native_Utils.cmp(scale, 0) > 0) ? _opensolid$geometry$OpenSolid_Arc2d$sweptAngle(arc) : (0 - _opensolid$geometry$OpenSolid_Arc2d$sweptAngle(arc))
			});
	});
var _opensolid$geometry$OpenSolid_Arc2d$rotateAround = F2(
	function (point, angle) {
		var rotatePoint = A2(_opensolid$geometry$OpenSolid_Point2d$rotateAround, point, angle);
		return function (arc) {
			return _opensolid$geometry$OpenSolid_Arc2d$with(
				{
					centerPoint: rotatePoint(
						_opensolid$geometry$OpenSolid_Arc2d$centerPoint(arc)),
					startPoint: rotatePoint(
						_opensolid$geometry$OpenSolid_Arc2d$startPoint(arc)),
					sweptAngle: _opensolid$geometry$OpenSolid_Arc2d$sweptAngle(arc)
				});
		};
	});
var _opensolid$geometry$OpenSolid_Arc2d$translateBy = F2(
	function (displacement, arc) {
		var translatePoint = _opensolid$geometry$OpenSolid_Point2d$translateBy(displacement);
		return _opensolid$geometry$OpenSolid_Arc2d$with(
			{
				centerPoint: translatePoint(
					_opensolid$geometry$OpenSolid_Arc2d$centerPoint(arc)),
				startPoint: translatePoint(
					_opensolid$geometry$OpenSolid_Arc2d$startPoint(arc)),
				sweptAngle: _opensolid$geometry$OpenSolid_Arc2d$sweptAngle(arc)
			});
	});
var _opensolid$geometry$OpenSolid_Arc2d$mirrorAcross = function (axis) {
	var mirrorPoint = _opensolid$geometry$OpenSolid_Point2d$mirrorAcross(axis);
	return function (arc) {
		return _opensolid$geometry$OpenSolid_Arc2d$with(
			{
				centerPoint: mirrorPoint(
					_opensolid$geometry$OpenSolid_Arc2d$centerPoint(arc)),
				startPoint: mirrorPoint(
					_opensolid$geometry$OpenSolid_Arc2d$startPoint(arc)),
				sweptAngle: 0 - _opensolid$geometry$OpenSolid_Arc2d$sweptAngle(arc)
			});
	};
};
var _opensolid$geometry$OpenSolid_Arc2d$relativeTo = F2(
	function (frame, arc) {
		var relativePoint = _opensolid$geometry$OpenSolid_Point2d$relativeTo(frame);
		return _opensolid$geometry$OpenSolid_Arc2d$with(
			{
				centerPoint: relativePoint(
					_opensolid$geometry$OpenSolid_Arc2d$centerPoint(arc)),
				startPoint: relativePoint(
					_opensolid$geometry$OpenSolid_Arc2d$startPoint(arc)),
				sweptAngle: _opensolid$geometry$OpenSolid_Frame2d$isRightHanded(frame) ? _opensolid$geometry$OpenSolid_Arc2d$sweptAngle(arc) : (0 - _opensolid$geometry$OpenSolid_Arc2d$sweptAngle(arc))
			});
	});
var _opensolid$geometry$OpenSolid_Arc2d$placeIn = F2(
	function (frame, arc) {
		var placePoint = _opensolid$geometry$OpenSolid_Point2d$placeIn(frame);
		return _opensolid$geometry$OpenSolid_Arc2d$with(
			{
				centerPoint: placePoint(
					_opensolid$geometry$OpenSolid_Arc2d$centerPoint(arc)),
				startPoint: placePoint(
					_opensolid$geometry$OpenSolid_Arc2d$startPoint(arc)),
				sweptAngle: _opensolid$geometry$OpenSolid_Frame2d$isRightHanded(frame) ? _opensolid$geometry$OpenSolid_Arc2d$sweptAngle(arc) : (0 - _opensolid$geometry$OpenSolid_Arc2d$sweptAngle(arc))
			});
	});
var _opensolid$geometry$OpenSolid_Arc2d$LargeNegative = {ctor: 'LargeNegative'};
var _opensolid$geometry$OpenSolid_Arc2d$largeNegative = _opensolid$geometry$OpenSolid_Arc2d$LargeNegative;
var _opensolid$geometry$OpenSolid_Arc2d$LargePositive = {ctor: 'LargePositive'};
var _opensolid$geometry$OpenSolid_Arc2d$largePositive = _opensolid$geometry$OpenSolid_Arc2d$LargePositive;
var _opensolid$geometry$OpenSolid_Arc2d$SmallNegative = {ctor: 'SmallNegative'};
var _opensolid$geometry$OpenSolid_Arc2d$smallNegative = _opensolid$geometry$OpenSolid_Arc2d$SmallNegative;
var _opensolid$geometry$OpenSolid_Arc2d$SmallPositive = {ctor: 'SmallPositive'};
var _opensolid$geometry$OpenSolid_Arc2d$smallPositive = _opensolid$geometry$OpenSolid_Arc2d$SmallPositive;

var _opensolid$geometry$OpenSolid_Bootstrap_SketchPlane3d$yDirection = function (_p0) {
	var _p1 = _p0;
	return _p1._0.yDirection;
};
var _opensolid$geometry$OpenSolid_Bootstrap_SketchPlane3d$xDirection = function (_p2) {
	var _p3 = _p2;
	return _p3._0.xDirection;
};
var _opensolid$geometry$OpenSolid_Bootstrap_SketchPlane3d$originPoint = function (_p4) {
	var _p5 = _p4;
	return _p5._0.originPoint;
};
var _opensolid$geometry$OpenSolid_Bootstrap_SketchPlane3d$unsafe = _opensolid$geometry$OpenSolid_Geometry_Internal$SketchPlane3d;

var _opensolid$geometry$OpenSolid_Bootstrap_Axis3d$direction = function (_p0) {
	var _p1 = _p0;
	return _p1._0.direction;
};
var _opensolid$geometry$OpenSolid_Bootstrap_Axis3d$originPoint = function (_p2) {
	var _p3 = _p2;
	return _p3._0.originPoint;
};
var _opensolid$geometry$OpenSolid_Bootstrap_Axis3d$with = _opensolid$geometry$OpenSolid_Geometry_Internal$Axis3d;

var _opensolid$geometry$OpenSolid_Bootstrap_Direction3d$components = function (_p0) {
	var _p1 = _p0;
	return _p1._0;
};
var _opensolid$geometry$OpenSolid_Bootstrap_Direction3d$unsafe = _opensolid$geometry$OpenSolid_Geometry_Internal$Direction3d;

var _opensolid$geometry$OpenSolid_Bootstrap_Frame3d$zDirection = function (_p0) {
	var _p1 = _p0;
	return _p1._0.zDirection;
};
var _opensolid$geometry$OpenSolid_Bootstrap_Frame3d$yDirection = function (_p2) {
	var _p3 = _p2;
	return _p3._0.yDirection;
};
var _opensolid$geometry$OpenSolid_Bootstrap_Frame3d$xDirection = function (_p4) {
	var _p5 = _p4;
	return _p5._0.xDirection;
};
var _opensolid$geometry$OpenSolid_Bootstrap_Frame3d$originPoint = function (_p6) {
	var _p7 = _p6;
	return _p7._0.originPoint;
};

var _opensolid$geometry$OpenSolid_Bootstrap_Plane3d$normalDirection = function (_p0) {
	var _p1 = _p0;
	return _p1._0.normalDirection;
};
var _opensolid$geometry$OpenSolid_Bootstrap_Plane3d$originPoint = function (_p2) {
	var _p3 = _p2;
	return _p3._0.originPoint;
};

var _opensolid$geometry$OpenSolid_Bootstrap_Point3d$coordinates = function (_p0) {
	var _p1 = _p0;
	return _p1._0;
};
var _opensolid$geometry$OpenSolid_Bootstrap_Point3d$fromCoordinates = _opensolid$geometry$OpenSolid_Geometry_Internal$Point3d;

var _opensolid$geometry$OpenSolid_Vector3d$zComponent = function (_p0) {
	var _p1 = _p0;
	return _p1._0._2;
};
var _opensolid$geometry$OpenSolid_Vector3d$yComponent = function (_p2) {
	var _p3 = _p2;
	return _p3._0._1;
};
var _opensolid$geometry$OpenSolid_Vector3d$xComponent = function (_p4) {
	var _p5 = _p4;
	return _p5._0._0;
};
var _opensolid$geometry$OpenSolid_Vector3d$components = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};
var _opensolid$geometry$OpenSolid_Vector3d$componentIn = F2(
	function (direction, vector) {
		var _p8 = _opensolid$geometry$OpenSolid_Vector3d$components(vector);
		var vx = _p8._0;
		var vy = _p8._1;
		var vz = _p8._2;
		var _p9 = _opensolid$geometry$OpenSolid_Bootstrap_Direction3d$components(direction);
		var dx = _p9._0;
		var dy = _p9._1;
		var dz = _p9._2;
		return ((vx * dx) + (vy * dy)) + (vz * dz);
	});
var _opensolid$geometry$OpenSolid_Vector3d$projectInto = F2(
	function (sketchPlane, vector) {
		return _opensolid$geometry$OpenSolid_Vector2d$fromComponents(
			{
				ctor: '_Tuple2',
				_0: A2(
					_opensolid$geometry$OpenSolid_Vector3d$componentIn,
					_opensolid$geometry$OpenSolid_Bootstrap_SketchPlane3d$xDirection(sketchPlane),
					vector),
				_1: A2(
					_opensolid$geometry$OpenSolid_Vector3d$componentIn,
					_opensolid$geometry$OpenSolid_Bootstrap_SketchPlane3d$yDirection(sketchPlane),
					vector)
			});
	});
var _opensolid$geometry$OpenSolid_Vector3d$squaredLength = function (vector) {
	var _p10 = _opensolid$geometry$OpenSolid_Vector3d$components(vector);
	var x = _p10._0;
	var y = _p10._1;
	var z = _p10._2;
	return ((x * x) + (y * y)) + (z * z);
};
var _opensolid$geometry$OpenSolid_Vector3d$length = function (vector) {
	return _elm_lang$core$Basics$sqrt(
		_opensolid$geometry$OpenSolid_Vector3d$squaredLength(vector));
};
var _opensolid$geometry$OpenSolid_Vector3d$dotProduct = F2(
	function (firstVector, secondVector) {
		var _p11 = _opensolid$geometry$OpenSolid_Vector3d$components(secondVector);
		var x2 = _p11._0;
		var y2 = _p11._1;
		var z2 = _p11._2;
		var _p12 = _opensolid$geometry$OpenSolid_Vector3d$components(firstVector);
		var x1 = _p12._0;
		var y1 = _p12._1;
		var z1 = _p12._2;
		return ((x1 * x2) + (y1 * y2)) + (z1 * z2);
	});
var _opensolid$geometry$OpenSolid_Vector3d$fromComponents = _opensolid$geometry$OpenSolid_Geometry_Internal$Vector3d;
var _opensolid$geometry$OpenSolid_Vector3d$from = F2(
	function (firstPoint, secondPoint) {
		var _p13 = _opensolid$geometry$OpenSolid_Bootstrap_Point3d$coordinates(secondPoint);
		var x2 = _p13._0;
		var y2 = _p13._1;
		var z2 = _p13._2;
		var _p14 = _opensolid$geometry$OpenSolid_Bootstrap_Point3d$coordinates(firstPoint);
		var x1 = _p14._0;
		var y1 = _p14._1;
		var z1 = _p14._2;
		return _opensolid$geometry$OpenSolid_Vector3d$fromComponents(
			{ctor: '_Tuple3', _0: x2 - x1, _1: y2 - y1, _2: z2 - z1});
	});
var _opensolid$geometry$OpenSolid_Vector3d$with = function (_p15) {
	var _p16 = _p15;
	var _p18 = _p16.length;
	var _p17 = _opensolid$geometry$OpenSolid_Bootstrap_Direction3d$components(_p16.direction);
	var dx = _p17._0;
	var dy = _p17._1;
	var dz = _p17._2;
	return _opensolid$geometry$OpenSolid_Vector3d$fromComponents(
		{ctor: '_Tuple3', _0: _p18 * dx, _1: _p18 * dy, _2: _p18 * dz});
};
var _opensolid$geometry$OpenSolid_Vector3d$projectionIn = F2(
	function (direction, vector) {
		return _opensolid$geometry$OpenSolid_Vector3d$with(
			{
				direction: direction,
				length: A2(_opensolid$geometry$OpenSolid_Vector3d$componentIn, direction, vector)
			});
	});
var _opensolid$geometry$OpenSolid_Vector3d$on = F2(
	function (sketchPlane, vector2d) {
		var _p19 = _opensolid$geometry$OpenSolid_Vector2d$components(vector2d);
		var x = _p19._0;
		var y = _p19._1;
		var _p20 = _opensolid$geometry$OpenSolid_Bootstrap_Direction3d$components(
			_opensolid$geometry$OpenSolid_Bootstrap_SketchPlane3d$yDirection(sketchPlane));
		var vx = _p20._0;
		var vy = _p20._1;
		var vz = _p20._2;
		var _p21 = _opensolid$geometry$OpenSolid_Bootstrap_Direction3d$components(
			_opensolid$geometry$OpenSolid_Bootstrap_SketchPlane3d$xDirection(sketchPlane));
		var ux = _p21._0;
		var uy = _p21._1;
		var uz = _p21._2;
		return _opensolid$geometry$OpenSolid_Vector3d$fromComponents(
			{ctor: '_Tuple3', _0: (x * ux) + (y * vx), _1: (x * uy) + (y * vy), _2: (x * uz) + (y * vz)});
	});
var _opensolid$geometry$OpenSolid_Vector3d$perpendicularTo = function (vector) {
	var _p22 = _opensolid$geometry$OpenSolid_Vector3d$components(vector);
	var x = _p22._0;
	var y = _p22._1;
	var z = _p22._2;
	var absX = _elm_lang$core$Basics$abs(x);
	var absY = _elm_lang$core$Basics$abs(y);
	var absZ = _elm_lang$core$Basics$abs(z);
	return (_elm_lang$core$Native_Utils.cmp(absX, absY) < 1) ? ((_elm_lang$core$Native_Utils.cmp(absX, absZ) < 1) ? _opensolid$geometry$OpenSolid_Vector3d$fromComponents(
		{ctor: '_Tuple3', _0: 0, _1: 0 - z, _2: y}) : _opensolid$geometry$OpenSolid_Vector3d$fromComponents(
		{ctor: '_Tuple3', _0: 0 - y, _1: x, _2: 0})) : ((_elm_lang$core$Native_Utils.cmp(absY, absZ) < 1) ? _opensolid$geometry$OpenSolid_Vector3d$fromComponents(
		{ctor: '_Tuple3', _0: z, _1: 0, _2: 0 - x}) : _opensolid$geometry$OpenSolid_Vector3d$fromComponents(
		{ctor: '_Tuple3', _0: 0 - y, _1: x, _2: 0}));
};
var _opensolid$geometry$OpenSolid_Vector3d$interpolateFrom = F3(
	function (v1, v2, t) {
		var _p23 = _opensolid$geometry$OpenSolid_Vector3d$components(v2);
		var x2 = _p23._0;
		var y2 = _p23._1;
		var z2 = _p23._2;
		var _p24 = _opensolid$geometry$OpenSolid_Vector3d$components(v1);
		var x1 = _p24._0;
		var y1 = _p24._1;
		var z1 = _p24._2;
		return _opensolid$geometry$OpenSolid_Vector3d$fromComponents(
			{
				ctor: '_Tuple3',
				_0: A3(_opensolid$geometry$OpenSolid_Scalar$interpolateFrom, x1, x2, t),
				_1: A3(_opensolid$geometry$OpenSolid_Scalar$interpolateFrom, y1, y2, t),
				_2: A3(_opensolid$geometry$OpenSolid_Scalar$interpolateFrom, z1, z2, t)
			});
	});
var _opensolid$geometry$OpenSolid_Vector3d$sum = F2(
	function (firstVector, secondVector) {
		var _p25 = _opensolid$geometry$OpenSolid_Vector3d$components(secondVector);
		var x2 = _p25._0;
		var y2 = _p25._1;
		var z2 = _p25._2;
		var _p26 = _opensolid$geometry$OpenSolid_Vector3d$components(firstVector);
		var x1 = _p26._0;
		var y1 = _p26._1;
		var z1 = _p26._2;
		return _opensolid$geometry$OpenSolid_Vector3d$fromComponents(
			{ctor: '_Tuple3', _0: x1 + x2, _1: y1 + y2, _2: z1 + z2});
	});
var _opensolid$geometry$OpenSolid_Vector3d$difference = F2(
	function (firstVector, secondVector) {
		var _p27 = _opensolid$geometry$OpenSolid_Vector3d$components(secondVector);
		var x2 = _p27._0;
		var y2 = _p27._1;
		var z2 = _p27._2;
		var _p28 = _opensolid$geometry$OpenSolid_Vector3d$components(firstVector);
		var x1 = _p28._0;
		var y1 = _p28._1;
		var z1 = _p28._2;
		return _opensolid$geometry$OpenSolid_Vector3d$fromComponents(
			{ctor: '_Tuple3', _0: x1 - x2, _1: y1 - y2, _2: z1 - z2});
	});
var _opensolid$geometry$OpenSolid_Vector3d$equalWithin = F3(
	function (tolerance, firstVector, secondVector) {
		return _elm_lang$core$Native_Utils.cmp(
			_opensolid$geometry$OpenSolid_Vector3d$squaredLength(
				A2(_opensolid$geometry$OpenSolid_Vector3d$difference, firstVector, secondVector)),
			tolerance * tolerance) < 1;
	});
var _opensolid$geometry$OpenSolid_Vector3d$projectOnto = F2(
	function (plane, vector) {
		return A2(
			_opensolid$geometry$OpenSolid_Vector3d$difference,
			vector,
			A2(
				_opensolid$geometry$OpenSolid_Vector3d$projectionIn,
				_opensolid$geometry$OpenSolid_Bootstrap_Plane3d$normalDirection(plane),
				vector));
	});
var _opensolid$geometry$OpenSolid_Vector3d$crossProduct = F2(
	function (firstVector, secondVector) {
		var _p29 = _opensolid$geometry$OpenSolid_Vector3d$components(secondVector);
		var x2 = _p29._0;
		var y2 = _p29._1;
		var z2 = _p29._2;
		var _p30 = _opensolid$geometry$OpenSolid_Vector3d$components(firstVector);
		var x1 = _p30._0;
		var y1 = _p30._1;
		var z1 = _p30._2;
		return _opensolid$geometry$OpenSolid_Vector3d$fromComponents(
			{ctor: '_Tuple3', _0: (y1 * z2) - (z1 * y2), _1: (z1 * x2) - (x1 * z2), _2: (x1 * y2) - (y1 * x2)});
	});
var _opensolid$geometry$OpenSolid_Vector3d$flip = function (vector) {
	var _p31 = _opensolid$geometry$OpenSolid_Vector3d$components(vector);
	var x = _p31._0;
	var y = _p31._1;
	var z = _p31._2;
	return _opensolid$geometry$OpenSolid_Vector3d$fromComponents(
		{ctor: '_Tuple3', _0: 0 - x, _1: 0 - y, _2: 0 - z});
};
var _opensolid$geometry$OpenSolid_Vector3d$scaleBy = F2(
	function (scale, vector) {
		var _p32 = _opensolid$geometry$OpenSolid_Vector3d$components(vector);
		var x = _p32._0;
		var y = _p32._1;
		var z = _p32._2;
		return _opensolid$geometry$OpenSolid_Vector3d$fromComponents(
			{ctor: '_Tuple3', _0: x * scale, _1: y * scale, _2: z * scale});
	});
var _opensolid$geometry$OpenSolid_Vector3d$lengthAndDirection = function (vector) {
	var vectorLength = _opensolid$geometry$OpenSolid_Vector3d$length(vector);
	if (_elm_lang$core$Native_Utils.eq(vectorLength, 0.0)) {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		var normalizedVector = A2(_opensolid$geometry$OpenSolid_Vector3d$scaleBy, 1 / vectorLength, vector);
		var vectorDirection = _opensolid$geometry$OpenSolid_Bootstrap_Direction3d$unsafe(
			_opensolid$geometry$OpenSolid_Vector3d$components(normalizedVector));
		return _elm_lang$core$Maybe$Just(
			{ctor: '_Tuple2', _0: vectorLength, _1: vectorDirection});
	}
};
var _opensolid$geometry$OpenSolid_Vector3d$rotateAround = F2(
	function (axis, angle) {
		var halfAngle = 0.5 * angle;
		var sinHalfAngle = _elm_lang$core$Basics$sin(halfAngle);
		var w = _elm_lang$core$Basics$cos(halfAngle);
		var _p33 = _opensolid$geometry$OpenSolid_Bootstrap_Direction3d$components(
			_opensolid$geometry$OpenSolid_Bootstrap_Axis3d$direction(axis));
		var dx = _p33._0;
		var dy = _p33._1;
		var dz = _p33._2;
		var x = dx * sinHalfAngle;
		var wx = w * x;
		var xx = x * x;
		var y = dy * sinHalfAngle;
		var wy = w * y;
		var xy = x * y;
		var yy = y * y;
		var a22 = 1 - (2 * (xx + yy));
		var z = dz * sinHalfAngle;
		var wz = w * z;
		var a10 = 2 * (xy + wz);
		var a01 = 2 * (xy - wz);
		var xz = x * z;
		var a20 = 2 * (xz - wy);
		var a02 = 2 * (xz + wy);
		var yz = y * z;
		var a21 = 2 * (yz + wx);
		var a12 = 2 * (yz - wx);
		var zz = z * z;
		var a00 = 1 - (2 * (yy + zz));
		var a11 = 1 - (2 * (xx + zz));
		return function (vector) {
			var _p34 = _opensolid$geometry$OpenSolid_Vector3d$components(vector);
			var x = _p34._0;
			var y = _p34._1;
			var z = _p34._2;
			return _opensolid$geometry$OpenSolid_Vector3d$fromComponents(
				{ctor: '_Tuple3', _0: ((a00 * x) + (a01 * y)) + (a02 * z), _1: ((a10 * x) + (a11 * y)) + (a12 * z), _2: ((a20 * x) + (a21 * y)) + (a22 * z)});
		};
	});
var _opensolid$geometry$OpenSolid_Vector3d$mirrorAcross = function (plane) {
	var _p35 = _opensolid$geometry$OpenSolid_Bootstrap_Direction3d$components(
		_opensolid$geometry$OpenSolid_Bootstrap_Plane3d$normalDirection(plane));
	var dx = _p35._0;
	var dy = _p35._1;
	var dz = _p35._2;
	var a = 1 - ((2 * dx) * dx);
	var b = 1 - ((2 * dy) * dy);
	var c = 1 - ((2 * dz) * dz);
	var d = (-2 * dy) * dz;
	var e = (-2 * dx) * dz;
	var f = (-2 * dx) * dy;
	return function (vector) {
		var _p36 = _opensolid$geometry$OpenSolid_Vector3d$components(vector);
		var x = _p36._0;
		var y = _p36._1;
		var z = _p36._2;
		return _opensolid$geometry$OpenSolid_Vector3d$fromComponents(
			{ctor: '_Tuple3', _0: ((a * x) + (f * y)) + (e * z), _1: ((f * x) + (b * y)) + (d * z), _2: ((e * x) + (d * y)) + (c * z)});
	};
};
var _opensolid$geometry$OpenSolid_Vector3d$relativeTo = F2(
	function (frame, vector) {
		return _opensolid$geometry$OpenSolid_Vector3d$fromComponents(
			{
				ctor: '_Tuple3',
				_0: A2(
					_opensolid$geometry$OpenSolid_Vector3d$componentIn,
					_opensolid$geometry$OpenSolid_Bootstrap_Frame3d$xDirection(frame),
					vector),
				_1: A2(
					_opensolid$geometry$OpenSolid_Vector3d$componentIn,
					_opensolid$geometry$OpenSolid_Bootstrap_Frame3d$yDirection(frame),
					vector),
				_2: A2(
					_opensolid$geometry$OpenSolid_Vector3d$componentIn,
					_opensolid$geometry$OpenSolid_Bootstrap_Frame3d$zDirection(frame),
					vector)
			});
	});
var _opensolid$geometry$OpenSolid_Vector3d$placeIn = F2(
	function (frame, vector) {
		var _p37 = _opensolid$geometry$OpenSolid_Vector3d$components(vector);
		var x = _p37._0;
		var y = _p37._1;
		var z = _p37._2;
		var _p38 = _opensolid$geometry$OpenSolid_Bootstrap_Direction3d$components(
			_opensolid$geometry$OpenSolid_Bootstrap_Frame3d$zDirection(frame));
		var x3 = _p38._0;
		var y3 = _p38._1;
		var z3 = _p38._2;
		var _p39 = _opensolid$geometry$OpenSolid_Bootstrap_Direction3d$components(
			_opensolid$geometry$OpenSolid_Bootstrap_Frame3d$yDirection(frame));
		var x2 = _p39._0;
		var y2 = _p39._1;
		var z2 = _p39._2;
		var _p40 = _opensolid$geometry$OpenSolid_Bootstrap_Direction3d$components(
			_opensolid$geometry$OpenSolid_Bootstrap_Frame3d$xDirection(frame));
		var x1 = _p40._0;
		var y1 = _p40._1;
		var z1 = _p40._2;
		return _opensolid$geometry$OpenSolid_Vector3d$fromComponents(
			{ctor: '_Tuple3', _0: ((x1 * x) + (x2 * y)) + (x3 * z), _1: ((y1 * x) + (y2 * y)) + (y3 * z), _2: ((z1 * x) + (z2 * y)) + (z3 * z)});
	});
var _opensolid$geometry$OpenSolid_Vector3d$zero = _opensolid$geometry$OpenSolid_Vector3d$fromComponents(
	{ctor: '_Tuple3', _0: 0, _1: 0, _2: 0});
var _opensolid$geometry$OpenSolid_Vector3d$direction = function (vector) {
	if (_elm_lang$core$Native_Utils.eq(vector, _opensolid$geometry$OpenSolid_Vector3d$zero)) {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		var normalizedVector = A2(
			_opensolid$geometry$OpenSolid_Vector3d$scaleBy,
			1 / _opensolid$geometry$OpenSolid_Vector3d$length(vector),
			vector);
		return _elm_lang$core$Maybe$Just(
			_opensolid$geometry$OpenSolid_Bootstrap_Direction3d$unsafe(
				_opensolid$geometry$OpenSolid_Vector3d$components(normalizedVector)));
	}
};
var _opensolid$geometry$OpenSolid_Vector3d$normalize = function (vector) {
	return _elm_lang$core$Native_Utils.eq(vector, _opensolid$geometry$OpenSolid_Vector3d$zero) ? _opensolid$geometry$OpenSolid_Vector3d$zero : A2(
		_opensolid$geometry$OpenSolid_Vector3d$scaleBy,
		1 / _opensolid$geometry$OpenSolid_Vector3d$length(vector),
		vector);
};

var _opensolid$geometry$OpenSolid_Direction3d$zComponent = function (_p0) {
	var _p1 = _p0;
	return _p1._0._2;
};
var _opensolid$geometry$OpenSolid_Direction3d$elevation = function (direction) {
	return _elm_lang$core$Basics$asin(
		_opensolid$geometry$OpenSolid_Direction3d$zComponent(direction));
};
var _opensolid$geometry$OpenSolid_Direction3d$yComponent = function (_p2) {
	var _p3 = _p2;
	return _p3._0._1;
};
var _opensolid$geometry$OpenSolid_Direction3d$xComponent = function (_p4) {
	var _p5 = _p4;
	return _p5._0._0;
};
var _opensolid$geometry$OpenSolid_Direction3d$azimuth = function (direction) {
	return A2(
		_elm_lang$core$Basics$atan2,
		_opensolid$geometry$OpenSolid_Direction3d$yComponent(direction),
		_opensolid$geometry$OpenSolid_Direction3d$xComponent(direction));
};
var _opensolid$geometry$OpenSolid_Direction3d$components = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};
var _opensolid$geometry$OpenSolid_Direction3d$toVector = function (direction) {
	return _opensolid$geometry$OpenSolid_Vector3d$fromComponents(
		_opensolid$geometry$OpenSolid_Direction3d$components(direction));
};
var _opensolid$geometry$OpenSolid_Direction3d$componentIn = F2(
	function (firstDirection, secondDirection) {
		return A2(
			_opensolid$geometry$OpenSolid_Vector3d$componentIn,
			firstDirection,
			_opensolid$geometry$OpenSolid_Direction3d$toVector(secondDirection));
	});
var _opensolid$geometry$OpenSolid_Direction3d$projectOnto = F2(
	function (plane, direction) {
		return _opensolid$geometry$OpenSolid_Vector3d$direction(
			A2(
				_opensolid$geometry$OpenSolid_Vector3d$projectOnto,
				plane,
				_opensolid$geometry$OpenSolid_Direction3d$toVector(direction)));
	});
var _opensolid$geometry$OpenSolid_Direction3d$projectInto = F2(
	function (sketchPlane, direction) {
		return _opensolid$geometry$OpenSolid_Vector2d$direction(
			A2(
				_opensolid$geometry$OpenSolid_Vector3d$projectInto,
				sketchPlane,
				_opensolid$geometry$OpenSolid_Direction3d$toVector(direction)));
	});
var _opensolid$geometry$OpenSolid_Direction3d$angleFrom = F2(
	function (firstDirection, secondDirection) {
		var _p8 = _opensolid$geometry$OpenSolid_Direction3d$components(secondDirection);
		var x2 = _p8._0;
		var y2 = _p8._1;
		var z2 = _p8._2;
		var _p9 = _opensolid$geometry$OpenSolid_Direction3d$components(firstDirection);
		var x1 = _p9._0;
		var y1 = _p9._1;
		var z1 = _p9._2;
		var x = ((x1 * x2) + (y1 * y2)) + (z1 * z2);
		var cx = (y1 * z2) - (z1 * y2);
		var cy = (z1 * x2) - (x1 * z2);
		var cz = (x1 * y2) - (y1 * x2);
		var y = _elm_lang$core$Basics$sqrt(((cx * cx) + (cy * cy)) + (cz * cz));
		return A2(_elm_lang$core$Basics$atan2, y, x);
	});
var _opensolid$geometry$OpenSolid_Direction3d$equalWithin = F3(
	function (angle, firstDirection, secondDirection) {
		return _elm_lang$core$Native_Utils.cmp(
			A2(_opensolid$geometry$OpenSolid_Direction3d$angleFrom, firstDirection, secondDirection),
			angle) < 1;
	});
var _opensolid$geometry$OpenSolid_Direction3d$orthonormalize = function (_p10) {
	var _p11 = _p10;
	var _p13 = _p11._2;
	var _p12 = _p11._1;
	return A2(
		_elm_lang$core$Maybe$andThen,
		function (xDirection) {
			var xProjection = A2(_opensolid$geometry$OpenSolid_Vector3d$projectionIn, xDirection, _p12);
			var yVector = A2(_opensolid$geometry$OpenSolid_Vector3d$difference, _p12, xProjection);
			return A2(
				_elm_lang$core$Maybe$andThen,
				function (yDirection) {
					var xProjection = A2(_opensolid$geometry$OpenSolid_Vector3d$projectionIn, xDirection, _p13);
					var yzVector = A2(_opensolid$geometry$OpenSolid_Vector3d$difference, _p13, xProjection);
					var yProjection = A2(_opensolid$geometry$OpenSolid_Vector3d$projectionIn, yDirection, yzVector);
					var zVector = A2(_opensolid$geometry$OpenSolid_Vector3d$difference, yzVector, yProjection);
					return A2(
						_elm_lang$core$Maybe$map,
						function (zDirection) {
							return {ctor: '_Tuple3', _0: xDirection, _1: yDirection, _2: zDirection};
						},
						_opensolid$geometry$OpenSolid_Vector3d$direction(zVector));
				},
				_opensolid$geometry$OpenSolid_Vector3d$direction(yVector));
		},
		_opensolid$geometry$OpenSolid_Vector3d$direction(_p11._0));
};
var _opensolid$geometry$OpenSolid_Direction3d$orthogonalize = function (_p14) {
	var _p15 = _p14;
	return _opensolid$geometry$OpenSolid_Direction3d$orthonormalize(
		{
			ctor: '_Tuple3',
			_0: _opensolid$geometry$OpenSolid_Direction3d$toVector(_p15._0),
			_1: _opensolid$geometry$OpenSolid_Direction3d$toVector(_p15._1),
			_2: _opensolid$geometry$OpenSolid_Direction3d$toVector(_p15._2)
		});
};
var _opensolid$geometry$OpenSolid_Direction3d$from = F2(
	function (firstPoint, secondPoint) {
		return _opensolid$geometry$OpenSolid_Vector3d$direction(
			A2(_opensolid$geometry$OpenSolid_Vector3d$from, firstPoint, secondPoint));
	});
var _opensolid$geometry$OpenSolid_Direction3d$unsafe = _opensolid$geometry$OpenSolid_Geometry_Internal$Direction3d;
var _opensolid$geometry$OpenSolid_Direction3d$on = F2(
	function (sketchPlane, direction2d) {
		var _p16 = _opensolid$geometry$OpenSolid_Direction3d$components(
			_opensolid$geometry$OpenSolid_Bootstrap_SketchPlane3d$yDirection(sketchPlane));
		var vx = _p16._0;
		var vy = _p16._1;
		var vz = _p16._2;
		var _p17 = _opensolid$geometry$OpenSolid_Direction3d$components(
			_opensolid$geometry$OpenSolid_Bootstrap_SketchPlane3d$xDirection(sketchPlane));
		var ux = _p17._0;
		var uy = _p17._1;
		var uz = _p17._2;
		var _p18 = _opensolid$geometry$OpenSolid_Direction2d$components(direction2d);
		var x = _p18._0;
		var y = _p18._1;
		return _opensolid$geometry$OpenSolid_Direction3d$unsafe(
			{ctor: '_Tuple3', _0: (x * ux) + (y * vx), _1: (x * uy) + (y * vy), _2: (x * uz) + (y * vz)});
	});
var _opensolid$geometry$OpenSolid_Direction3d$with = function (_p19) {
	var _p20 = _p19;
	var _p22 = _p20.elevation;
	var _p21 = _p20.azimuth;
	var cosElevation = _elm_lang$core$Basics$cos(_p22);
	return _opensolid$geometry$OpenSolid_Direction3d$unsafe(
		{
			ctor: '_Tuple3',
			_0: cosElevation * _elm_lang$core$Basics$cos(_p21),
			_1: cosElevation * _elm_lang$core$Basics$sin(_p21),
			_2: _elm_lang$core$Basics$sin(_p22)
		});
};
var _opensolid$geometry$OpenSolid_Direction3d$flip = function (direction) {
	var _p23 = _opensolid$geometry$OpenSolid_Direction3d$components(direction);
	var x = _p23._0;
	var y = _p23._1;
	var z = _p23._2;
	return _opensolid$geometry$OpenSolid_Direction3d$unsafe(
		{ctor: '_Tuple3', _0: 0 - x, _1: 0 - y, _2: 0 - z});
};
var _opensolid$geometry$OpenSolid_Direction3d$negativeZ = _opensolid$geometry$OpenSolid_Direction3d$unsafe(
	{ctor: '_Tuple3', _0: 0, _1: 0, _2: -1});
var _opensolid$geometry$OpenSolid_Direction3d$positiveZ = _opensolid$geometry$OpenSolid_Direction3d$unsafe(
	{ctor: '_Tuple3', _0: 0, _1: 0, _2: 1});
var _opensolid$geometry$OpenSolid_Direction3d$negativeY = _opensolid$geometry$OpenSolid_Direction3d$unsafe(
	{ctor: '_Tuple3', _0: 0, _1: -1, _2: 0});
var _opensolid$geometry$OpenSolid_Direction3d$positiveY = _opensolid$geometry$OpenSolid_Direction3d$unsafe(
	{ctor: '_Tuple3', _0: 0, _1: 1, _2: 0});
var _opensolid$geometry$OpenSolid_Direction3d$negativeX = _opensolid$geometry$OpenSolid_Direction3d$unsafe(
	{ctor: '_Tuple3', _0: -1, _1: 0, _2: 0});
var _opensolid$geometry$OpenSolid_Direction3d$positiveX = _opensolid$geometry$OpenSolid_Direction3d$unsafe(
	{ctor: '_Tuple3', _0: 1, _1: 0, _2: 0});
var _opensolid$geometry$OpenSolid_Direction3d$z = _opensolid$geometry$OpenSolid_Direction3d$unsafe(
	{ctor: '_Tuple3', _0: 0, _1: 0, _2: 1});
var _opensolid$geometry$OpenSolid_Direction3d$y = _opensolid$geometry$OpenSolid_Direction3d$unsafe(
	{ctor: '_Tuple3', _0: 0, _1: 1, _2: 0});
var _opensolid$geometry$OpenSolid_Direction3d$x = _opensolid$geometry$OpenSolid_Direction3d$unsafe(
	{ctor: '_Tuple3', _0: 1, _1: 0, _2: 0});
var _opensolid$geometry$OpenSolid_Direction3d$toDirection = function (vector) {
	return _opensolid$geometry$OpenSolid_Direction3d$unsafe(
		_opensolid$geometry$OpenSolid_Vector3d$components(vector));
};
var _opensolid$geometry$OpenSolid_Direction3d$perpendicularTo = function (direction) {
	var perpendicularVector = _opensolid$geometry$OpenSolid_Vector3d$perpendicularTo(
		_opensolid$geometry$OpenSolid_Direction3d$toVector(direction));
	var length = _opensolid$geometry$OpenSolid_Vector3d$length(perpendicularVector);
	var normalizedVector = A2(_opensolid$geometry$OpenSolid_Vector3d$scaleBy, 1 / length, perpendicularVector);
	return _opensolid$geometry$OpenSolid_Direction3d$toDirection(normalizedVector);
};
var _opensolid$geometry$OpenSolid_Direction3d$perpendicularBasis = function (direction) {
	var xDirection = _opensolid$geometry$OpenSolid_Direction3d$perpendicularTo(direction);
	var yDirection = _opensolid$geometry$OpenSolid_Direction3d$toDirection(
		A2(
			_opensolid$geometry$OpenSolid_Vector3d$crossProduct,
			_opensolid$geometry$OpenSolid_Direction3d$toVector(direction),
			_opensolid$geometry$OpenSolid_Direction3d$toVector(xDirection)));
	return {ctor: '_Tuple2', _0: xDirection, _1: yDirection};
};
var _opensolid$geometry$OpenSolid_Direction3d$rotateAround = F3(
	function (axis, angle, direction) {
		return _opensolid$geometry$OpenSolid_Direction3d$toDirection(
			A3(
				_opensolid$geometry$OpenSolid_Vector3d$rotateAround,
				axis,
				angle,
				_opensolid$geometry$OpenSolid_Direction3d$toVector(direction)));
	});
var _opensolid$geometry$OpenSolid_Direction3d$mirrorAcross = F2(
	function (plane, direction) {
		return _opensolid$geometry$OpenSolid_Direction3d$toDirection(
			A2(
				_opensolid$geometry$OpenSolid_Vector3d$mirrorAcross,
				plane,
				_opensolid$geometry$OpenSolid_Direction3d$toVector(direction)));
	});
var _opensolid$geometry$OpenSolid_Direction3d$relativeTo = F2(
	function (frame, direction) {
		return _opensolid$geometry$OpenSolid_Direction3d$toDirection(
			A2(
				_opensolid$geometry$OpenSolid_Vector3d$relativeTo,
				frame,
				_opensolid$geometry$OpenSolid_Direction3d$toVector(direction)));
	});
var _opensolid$geometry$OpenSolid_Direction3d$placeIn = F2(
	function (frame, direction) {
		return _opensolid$geometry$OpenSolid_Direction3d$toDirection(
			A2(
				_opensolid$geometry$OpenSolid_Vector3d$placeIn,
				frame,
				_opensolid$geometry$OpenSolid_Direction3d$toVector(direction)));
	});

var _opensolid$geometry$OpenSolid_Bootstrap_BoundingBox3d$with = function (_p0) {
	var _p1 = _p0;
	var _p7 = _p1.minZ;
	var _p6 = _p1.minY;
	var _p5 = _p1.minX;
	var _p4 = _p1.maxZ;
	var _p3 = _p1.maxY;
	var _p2 = _p1.maxX;
	return ((_elm_lang$core$Native_Utils.cmp(_p5, _p2) < 1) && ((_elm_lang$core$Native_Utils.cmp(_p6, _p3) < 1) && (_elm_lang$core$Native_Utils.cmp(_p7, _p4) < 1))) ? _opensolid$geometry$OpenSolid_Geometry_Internal$BoundingBox3d(_p1) : _opensolid$geometry$OpenSolid_Geometry_Internal$BoundingBox3d(
		{
			minX: A2(_elm_lang$core$Basics$min, _p5, _p2),
			maxX: A2(_elm_lang$core$Basics$max, _p5, _p2),
			minY: A2(_elm_lang$core$Basics$min, _p6, _p3),
			maxY: A2(_elm_lang$core$Basics$max, _p6, _p3),
			minZ: A2(_elm_lang$core$Basics$min, _p7, _p4),
			maxZ: A2(_elm_lang$core$Basics$max, _p7, _p4)
		});
};

var _opensolid$geometry$OpenSolid_BoundingBox3d$alwaysFalse = F2(
	function (firstBox, secondBox) {
		return false;
	});
var _opensolid$geometry$OpenSolid_BoundingBox3d$extrema = function (_p0) {
	var _p1 = _p0;
	return _p1._0;
};
var _opensolid$geometry$OpenSolid_BoundingBox3d$minX = function (boundingBox) {
	return _opensolid$geometry$OpenSolid_BoundingBox3d$extrema(boundingBox).minX;
};
var _opensolid$geometry$OpenSolid_BoundingBox3d$maxX = function (boundingBox) {
	return _opensolid$geometry$OpenSolid_BoundingBox3d$extrema(boundingBox).maxX;
};
var _opensolid$geometry$OpenSolid_BoundingBox3d$minY = function (boundingBox) {
	return _opensolid$geometry$OpenSolid_BoundingBox3d$extrema(boundingBox).minY;
};
var _opensolid$geometry$OpenSolid_BoundingBox3d$maxY = function (boundingBox) {
	return _opensolid$geometry$OpenSolid_BoundingBox3d$extrema(boundingBox).maxY;
};
var _opensolid$geometry$OpenSolid_BoundingBox3d$minZ = function (boundingBox) {
	return _opensolid$geometry$OpenSolid_BoundingBox3d$extrema(boundingBox).minZ;
};
var _opensolid$geometry$OpenSolid_BoundingBox3d$maxZ = function (boundingBox) {
	return _opensolid$geometry$OpenSolid_BoundingBox3d$extrema(boundingBox).maxZ;
};
var _opensolid$geometry$OpenSolid_BoundingBox3d$intersects = F2(
	function (other, boundingBox) {
		return (_elm_lang$core$Native_Utils.cmp(
			_opensolid$geometry$OpenSolid_BoundingBox3d$minX(boundingBox),
			_opensolid$geometry$OpenSolid_BoundingBox3d$maxX(other)) < 1) && ((_elm_lang$core$Native_Utils.cmp(
			_opensolid$geometry$OpenSolid_BoundingBox3d$maxX(boundingBox),
			_opensolid$geometry$OpenSolid_BoundingBox3d$minX(other)) > -1) && ((_elm_lang$core$Native_Utils.cmp(
			_opensolid$geometry$OpenSolid_BoundingBox3d$minY(boundingBox),
			_opensolid$geometry$OpenSolid_BoundingBox3d$maxY(other)) < 1) && ((_elm_lang$core$Native_Utils.cmp(
			_opensolid$geometry$OpenSolid_BoundingBox3d$maxY(boundingBox),
			_opensolid$geometry$OpenSolid_BoundingBox3d$minY(other)) > -1) && ((_elm_lang$core$Native_Utils.cmp(
			_opensolid$geometry$OpenSolid_BoundingBox3d$minZ(boundingBox),
			_opensolid$geometry$OpenSolid_BoundingBox3d$maxZ(other)) < 1) && (_elm_lang$core$Native_Utils.cmp(
			_opensolid$geometry$OpenSolid_BoundingBox3d$maxZ(boundingBox),
			_opensolid$geometry$OpenSolid_BoundingBox3d$minZ(other)) > -1)))));
	});
var _opensolid$geometry$OpenSolid_BoundingBox3d$overlaps = _opensolid$geometry$OpenSolid_BoundingBox3d$intersects;
var _opensolid$geometry$OpenSolid_BoundingBox3d$overlapAmount = F2(
	function (firstBox, secondBox) {
		var zOverlap = A2(
			_elm_lang$core$Basics$min,
			_opensolid$geometry$OpenSolid_BoundingBox3d$maxZ(firstBox),
			_opensolid$geometry$OpenSolid_BoundingBox3d$maxZ(secondBox)) - A2(
			_elm_lang$core$Basics$max,
			_opensolid$geometry$OpenSolid_BoundingBox3d$minZ(firstBox),
			_opensolid$geometry$OpenSolid_BoundingBox3d$minZ(secondBox));
		var yOverlap = A2(
			_elm_lang$core$Basics$min,
			_opensolid$geometry$OpenSolid_BoundingBox3d$maxY(firstBox),
			_opensolid$geometry$OpenSolid_BoundingBox3d$maxY(secondBox)) - A2(
			_elm_lang$core$Basics$max,
			_opensolid$geometry$OpenSolid_BoundingBox3d$minY(firstBox),
			_opensolid$geometry$OpenSolid_BoundingBox3d$minY(secondBox));
		var xOverlap = A2(
			_elm_lang$core$Basics$min,
			_opensolid$geometry$OpenSolid_BoundingBox3d$maxX(firstBox),
			_opensolid$geometry$OpenSolid_BoundingBox3d$maxX(secondBox)) - A2(
			_elm_lang$core$Basics$max,
			_opensolid$geometry$OpenSolid_BoundingBox3d$minX(firstBox),
			_opensolid$geometry$OpenSolid_BoundingBox3d$minX(secondBox));
		return ((_elm_lang$core$Native_Utils.cmp(xOverlap, 0) > -1) && ((_elm_lang$core$Native_Utils.cmp(yOverlap, 0) > -1) && (_elm_lang$core$Native_Utils.cmp(zOverlap, 0) > -1))) ? _elm_lang$core$Maybe$Just(
			A2(
				_elm_lang$core$Basics$min,
				xOverlap,
				A2(_elm_lang$core$Basics$min, yOverlap, zOverlap))) : _elm_lang$core$Maybe$Nothing;
	});
var _opensolid$geometry$OpenSolid_BoundingBox3d$overlappingBy = F2(
	function (order, tolerance) {
		var _p2 = order;
		switch (_p2.ctor) {
			case 'LT':
				return (_elm_lang$core$Native_Utils.cmp(tolerance, 0) > 0) ? F2(
					function (firstBox, secondBox) {
						var _p3 = A2(_opensolid$geometry$OpenSolid_BoundingBox3d$overlapAmount, firstBox, secondBox);
						if (_p3.ctor === 'Just') {
							return _elm_lang$core$Native_Utils.cmp(_p3._0, tolerance) < 0;
						} else {
							return true;
						}
					}) : (_elm_lang$core$Native_Utils.eq(tolerance, 0) ? F2(
					function (firstBox, secondBox) {
						return _elm_lang$core$Native_Utils.eq(
							A2(_opensolid$geometry$OpenSolid_BoundingBox3d$overlapAmount, firstBox, secondBox),
							_elm_lang$core$Maybe$Nothing);
					}) : _opensolid$geometry$OpenSolid_BoundingBox3d$alwaysFalse);
			case 'GT':
				return (_elm_lang$core$Native_Utils.cmp(tolerance, 0) > -1) ? F2(
					function (firstBox, secondBox) {
						var _p4 = A2(_opensolid$geometry$OpenSolid_BoundingBox3d$overlapAmount, firstBox, secondBox);
						if (_p4.ctor === 'Just') {
							return _elm_lang$core$Native_Utils.cmp(_p4._0, tolerance) > 0;
						} else {
							return false;
						}
					}) : F2(
					function (firstBox, secondBox) {
						return !_elm_lang$core$Native_Utils.eq(
							A2(_opensolid$geometry$OpenSolid_BoundingBox3d$overlapAmount, firstBox, secondBox),
							_elm_lang$core$Maybe$Nothing);
					});
			default:
				if (_elm_lang$core$Native_Utils.cmp(tolerance, 0) > -1) {
					var expected = _elm_lang$core$Maybe$Just(tolerance);
					return F2(
						function (firstBox, secondBox) {
							return _elm_lang$core$Native_Utils.eq(
								A2(_opensolid$geometry$OpenSolid_BoundingBox3d$overlapAmount, firstBox, secondBox),
								expected);
						});
				} else {
					return _opensolid$geometry$OpenSolid_BoundingBox3d$alwaysFalse;
				}
		}
	});
var _opensolid$geometry$OpenSolid_BoundingBox3d$squaredSeparationAmount = F2(
	function (firstBox, secondBox) {
		var zSeparation = A2(
			_elm_lang$core$Basics$max,
			_opensolid$geometry$OpenSolid_BoundingBox3d$minZ(firstBox),
			_opensolid$geometry$OpenSolid_BoundingBox3d$minZ(secondBox)) - A2(
			_elm_lang$core$Basics$min,
			_opensolid$geometry$OpenSolid_BoundingBox3d$maxZ(firstBox),
			_opensolid$geometry$OpenSolid_BoundingBox3d$maxZ(secondBox));
		var ySeparation = A2(
			_elm_lang$core$Basics$max,
			_opensolid$geometry$OpenSolid_BoundingBox3d$minY(firstBox),
			_opensolid$geometry$OpenSolid_BoundingBox3d$minY(secondBox)) - A2(
			_elm_lang$core$Basics$min,
			_opensolid$geometry$OpenSolid_BoundingBox3d$maxY(firstBox),
			_opensolid$geometry$OpenSolid_BoundingBox3d$maxY(secondBox));
		var xSeparation = A2(
			_elm_lang$core$Basics$max,
			_opensolid$geometry$OpenSolid_BoundingBox3d$minX(firstBox),
			_opensolid$geometry$OpenSolid_BoundingBox3d$minX(secondBox)) - A2(
			_elm_lang$core$Basics$min,
			_opensolid$geometry$OpenSolid_BoundingBox3d$maxX(firstBox),
			_opensolid$geometry$OpenSolid_BoundingBox3d$maxX(secondBox));
		if ((_elm_lang$core$Native_Utils.cmp(xSeparation, 0) > -1) || ((_elm_lang$core$Native_Utils.cmp(ySeparation, 0) > -1) || (_elm_lang$core$Native_Utils.cmp(zSeparation, 0) > -1))) {
			var dZ = A2(_elm_lang$core$Basics$max, zSeparation, 0);
			var dY = A2(_elm_lang$core$Basics$max, ySeparation, 0);
			var dX = A2(_elm_lang$core$Basics$max, xSeparation, 0);
			return _elm_lang$core$Maybe$Just(((dX * dX) + (dY * dY)) + (dZ * dZ));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	});
var _opensolid$geometry$OpenSolid_BoundingBox3d$separatedBy = F2(
	function (order, tolerance) {
		var _p5 = order;
		switch (_p5.ctor) {
			case 'LT':
				return (_elm_lang$core$Native_Utils.cmp(tolerance, 0) > 0) ? F2(
					function (firstBox, secondBox) {
						var _p6 = A2(_opensolid$geometry$OpenSolid_BoundingBox3d$squaredSeparationAmount, firstBox, secondBox);
						if (_p6.ctor === 'Just') {
							return _elm_lang$core$Native_Utils.cmp(_p6._0, tolerance * tolerance) < 0;
						} else {
							return true;
						}
					}) : (_elm_lang$core$Native_Utils.eq(tolerance, 0) ? F2(
					function (firstBox, secondBox) {
						return _elm_lang$core$Native_Utils.eq(
							A2(_opensolid$geometry$OpenSolid_BoundingBox3d$squaredSeparationAmount, firstBox, secondBox),
							_elm_lang$core$Maybe$Nothing);
					}) : _opensolid$geometry$OpenSolid_BoundingBox3d$alwaysFalse);
			case 'GT':
				return (_elm_lang$core$Native_Utils.cmp(tolerance, 0) > -1) ? F2(
					function (firstBox, secondBox) {
						var _p7 = A2(_opensolid$geometry$OpenSolid_BoundingBox3d$squaredSeparationAmount, firstBox, secondBox);
						if (_p7.ctor === 'Just') {
							return _elm_lang$core$Native_Utils.cmp(_p7._0, tolerance * tolerance) > 0;
						} else {
							return false;
						}
					}) : F2(
					function (firstBox, secondBox) {
						return !_elm_lang$core$Native_Utils.eq(
							A2(_opensolid$geometry$OpenSolid_BoundingBox3d$squaredSeparationAmount, firstBox, secondBox),
							_elm_lang$core$Maybe$Nothing);
					});
			default:
				if (_elm_lang$core$Native_Utils.cmp(tolerance, 0) > -1) {
					var expected = _elm_lang$core$Maybe$Just(tolerance * tolerance);
					return F2(
						function (firstBox, secondBox) {
							return _elm_lang$core$Native_Utils.eq(
								A2(_opensolid$geometry$OpenSolid_BoundingBox3d$squaredSeparationAmount, firstBox, secondBox),
								expected);
						});
				} else {
					return _opensolid$geometry$OpenSolid_BoundingBox3d$alwaysFalse;
				}
		}
	});
var _opensolid$geometry$OpenSolid_BoundingBox3d$isContainedIn = F2(
	function (other, boundingBox) {
		return ((_elm_lang$core$Native_Utils.cmp(
			_opensolid$geometry$OpenSolid_BoundingBox3d$minX(other),
			_opensolid$geometry$OpenSolid_BoundingBox3d$minX(boundingBox)) < 1) && (_elm_lang$core$Native_Utils.cmp(
			_opensolid$geometry$OpenSolid_BoundingBox3d$maxX(boundingBox),
			_opensolid$geometry$OpenSolid_BoundingBox3d$maxX(other)) < 1)) && (((_elm_lang$core$Native_Utils.cmp(
			_opensolid$geometry$OpenSolid_BoundingBox3d$minY(other),
			_opensolid$geometry$OpenSolid_BoundingBox3d$minY(boundingBox)) < 1) && (_elm_lang$core$Native_Utils.cmp(
			_opensolid$geometry$OpenSolid_BoundingBox3d$maxY(boundingBox),
			_opensolid$geometry$OpenSolid_BoundingBox3d$maxY(other)) < 1)) && ((_elm_lang$core$Native_Utils.cmp(
			_opensolid$geometry$OpenSolid_BoundingBox3d$minZ(other),
			_opensolid$geometry$OpenSolid_BoundingBox3d$minZ(boundingBox)) < 1) && (_elm_lang$core$Native_Utils.cmp(
			_opensolid$geometry$OpenSolid_BoundingBox3d$maxZ(boundingBox),
			_opensolid$geometry$OpenSolid_BoundingBox3d$maxZ(other)) < 1)));
	});
var _opensolid$geometry$OpenSolid_BoundingBox3d$dimensions = function (boundingBox) {
	var _p8 = _opensolid$geometry$OpenSolid_BoundingBox3d$extrema(boundingBox);
	var minX = _p8.minX;
	var maxX = _p8.maxX;
	var minY = _p8.minY;
	var maxY = _p8.maxY;
	var minZ = _p8.minZ;
	var maxZ = _p8.maxZ;
	return {ctor: '_Tuple3', _0: maxX - minX, _1: maxY - minY, _2: maxZ - minZ};
};
var _opensolid$geometry$OpenSolid_BoundingBox3d$midX = function (boundingBox) {
	var _p9 = _opensolid$geometry$OpenSolid_BoundingBox3d$extrema(boundingBox);
	var minX = _p9.minX;
	var maxX = _p9.maxX;
	return minX + (0.5 * (maxX - minX));
};
var _opensolid$geometry$OpenSolid_BoundingBox3d$midY = function (boundingBox) {
	var _p10 = _opensolid$geometry$OpenSolid_BoundingBox3d$extrema(boundingBox);
	var minY = _p10.minY;
	var maxY = _p10.maxY;
	return minY + (0.5 * (maxY - minY));
};
var _opensolid$geometry$OpenSolid_BoundingBox3d$midZ = function (boundingBox) {
	var _p11 = _opensolid$geometry$OpenSolid_BoundingBox3d$extrema(boundingBox);
	var minZ = _p11.minZ;
	var maxZ = _p11.maxZ;
	return minZ + (0.5 * (maxZ - minZ));
};
var _opensolid$geometry$OpenSolid_BoundingBox3d$centroid = function (boundingBox) {
	return _opensolid$geometry$OpenSolid_Bootstrap_Point3d$fromCoordinates(
		{
			ctor: '_Tuple3',
			_0: _opensolid$geometry$OpenSolid_BoundingBox3d$midX(boundingBox),
			_1: _opensolid$geometry$OpenSolid_BoundingBox3d$midY(boundingBox),
			_2: _opensolid$geometry$OpenSolid_BoundingBox3d$midZ(boundingBox)
		});
};
var _opensolid$geometry$OpenSolid_BoundingBox3d$contains = F2(
	function (point, boundingBox) {
		var _p12 = _opensolid$geometry$OpenSolid_BoundingBox3d$extrema(boundingBox);
		var minX = _p12.minX;
		var maxX = _p12.maxX;
		var minY = _p12.minY;
		var maxY = _p12.maxY;
		var minZ = _p12.minZ;
		var maxZ = _p12.maxZ;
		var _p13 = _opensolid$geometry$OpenSolid_Bootstrap_Point3d$coordinates(point);
		var x = _p13._0;
		var y = _p13._1;
		var z = _p13._2;
		return ((_elm_lang$core$Native_Utils.cmp(minX, x) < 1) && (_elm_lang$core$Native_Utils.cmp(x, maxX) < 1)) && (((_elm_lang$core$Native_Utils.cmp(minY, y) < 1) && (_elm_lang$core$Native_Utils.cmp(y, maxY) < 1)) && ((_elm_lang$core$Native_Utils.cmp(minZ, z) < 1) && (_elm_lang$core$Native_Utils.cmp(z, maxZ) < 1)));
	});
var _opensolid$geometry$OpenSolid_BoundingBox3d$with = _opensolid$geometry$OpenSolid_Bootstrap_BoundingBox3d$with;
var _opensolid$geometry$OpenSolid_BoundingBox3d$singleton = function (point) {
	var _p14 = _opensolid$geometry$OpenSolid_Bootstrap_Point3d$coordinates(point);
	var x = _p14._0;
	var y = _p14._1;
	var z = _p14._2;
	return _opensolid$geometry$OpenSolid_BoundingBox3d$with(
		{minX: x, maxX: x, minY: y, maxY: y, minZ: z, maxZ: z});
};
var _opensolid$geometry$OpenSolid_BoundingBox3d$hull = F2(
	function (firstBox, secondBox) {
		return _opensolid$geometry$OpenSolid_BoundingBox3d$with(
			{
				minX: A2(
					_elm_lang$core$Basics$min,
					_opensolid$geometry$OpenSolid_BoundingBox3d$minX(firstBox),
					_opensolid$geometry$OpenSolid_BoundingBox3d$minX(secondBox)),
				maxX: A2(
					_elm_lang$core$Basics$max,
					_opensolid$geometry$OpenSolid_BoundingBox3d$maxX(firstBox),
					_opensolid$geometry$OpenSolid_BoundingBox3d$maxX(secondBox)),
				minY: A2(
					_elm_lang$core$Basics$min,
					_opensolid$geometry$OpenSolid_BoundingBox3d$minY(firstBox),
					_opensolid$geometry$OpenSolid_BoundingBox3d$minY(secondBox)),
				maxY: A2(
					_elm_lang$core$Basics$max,
					_opensolid$geometry$OpenSolid_BoundingBox3d$maxY(firstBox),
					_opensolid$geometry$OpenSolid_BoundingBox3d$maxY(secondBox)),
				minZ: A2(
					_elm_lang$core$Basics$min,
					_opensolid$geometry$OpenSolid_BoundingBox3d$minZ(firstBox),
					_opensolid$geometry$OpenSolid_BoundingBox3d$minZ(secondBox)),
				maxZ: A2(
					_elm_lang$core$Basics$max,
					_opensolid$geometry$OpenSolid_BoundingBox3d$maxZ(firstBox),
					_opensolid$geometry$OpenSolid_BoundingBox3d$maxZ(secondBox))
			});
	});
var _opensolid$geometry$OpenSolid_BoundingBox3d$hullOf = function (boundingBoxes) {
	var _p15 = boundingBoxes;
	if (_p15.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _opensolid$geometry$OpenSolid_BoundingBox3d$hull, _p15._0, _p15._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _opensolid$geometry$OpenSolid_BoundingBox3d$intersection = F2(
	function (firstBox, secondBox) {
		return A2(_opensolid$geometry$OpenSolid_BoundingBox3d$intersects, firstBox, secondBox) ? _elm_lang$core$Maybe$Just(
			_opensolid$geometry$OpenSolid_BoundingBox3d$with(
				{
					minX: A2(
						_elm_lang$core$Basics$max,
						_opensolid$geometry$OpenSolid_BoundingBox3d$minX(firstBox),
						_opensolid$geometry$OpenSolid_BoundingBox3d$minX(secondBox)),
					maxX: A2(
						_elm_lang$core$Basics$min,
						_opensolid$geometry$OpenSolid_BoundingBox3d$maxX(firstBox),
						_opensolid$geometry$OpenSolid_BoundingBox3d$maxX(secondBox)),
					minY: A2(
						_elm_lang$core$Basics$max,
						_opensolid$geometry$OpenSolid_BoundingBox3d$minY(firstBox),
						_opensolid$geometry$OpenSolid_BoundingBox3d$minY(secondBox)),
					maxY: A2(
						_elm_lang$core$Basics$min,
						_opensolid$geometry$OpenSolid_BoundingBox3d$maxY(firstBox),
						_opensolid$geometry$OpenSolid_BoundingBox3d$maxY(secondBox)),
					minZ: A2(
						_elm_lang$core$Basics$max,
						_opensolid$geometry$OpenSolid_BoundingBox3d$minZ(firstBox),
						_opensolid$geometry$OpenSolid_BoundingBox3d$minZ(secondBox)),
					maxZ: A2(
						_elm_lang$core$Basics$min,
						_opensolid$geometry$OpenSolid_BoundingBox3d$maxZ(firstBox),
						_opensolid$geometry$OpenSolid_BoundingBox3d$maxZ(secondBox))
				})) : _elm_lang$core$Maybe$Nothing;
	});
var _opensolid$geometry$OpenSolid_BoundingBox3d$scaleAbout = F3(
	function (point, scale, boundingBox) {
		var _p16 = _opensolid$geometry$OpenSolid_Bootstrap_Point3d$coordinates(point);
		var x0 = _p16._0;
		var y0 = _p16._1;
		var z0 = _p16._2;
		var _p17 = _opensolid$geometry$OpenSolid_BoundingBox3d$extrema(boundingBox);
		var minX = _p17.minX;
		var minY = _p17.minY;
		var minZ = _p17.minZ;
		var maxX = _p17.maxX;
		var maxY = _p17.maxY;
		var maxZ = _p17.maxZ;
		return (_elm_lang$core$Native_Utils.cmp(scale, 0) > -1) ? _opensolid$geometry$OpenSolid_BoundingBox3d$with(
			{minX: x0 + (scale * (minX - x0)), maxX: x0 + (scale * (maxX - x0)), minY: y0 + (scale * (minY - y0)), maxY: y0 + (scale * (maxY - y0)), minZ: z0 + (scale * (minZ - z0)), maxZ: z0 + (scale * (maxZ - z0))}) : _opensolid$geometry$OpenSolid_BoundingBox3d$with(
			{minX: x0 + (scale * (maxX - x0)), maxX: x0 + (scale * (minX - x0)), minY: y0 + (scale * (maxY - y0)), maxY: y0 + (scale * (minY - y0)), minZ: z0 + (scale * (maxZ - z0)), maxZ: z0 + (scale * (minZ - z0))});
	});
var _opensolid$geometry$OpenSolid_BoundingBox3d$translateBy = F2(
	function (displacement, boundingBox) {
		var _p18 = _opensolid$geometry$OpenSolid_Vector3d$components(displacement);
		var dx = _p18._0;
		var dy = _p18._1;
		var dz = _p18._2;
		var _p19 = _opensolid$geometry$OpenSolid_BoundingBox3d$extrema(boundingBox);
		var minX = _p19.minX;
		var minY = _p19.minY;
		var minZ = _p19.minZ;
		var maxX = _p19.maxX;
		var maxY = _p19.maxY;
		var maxZ = _p19.maxZ;
		return _opensolid$geometry$OpenSolid_BoundingBox3d$with(
			{minX: minX + dx, maxX: maxX + dx, minY: minY + dy, maxY: maxY + dy, minZ: minZ + dz, maxZ: maxZ + dz});
	});

var _opensolid$geometry$OpenSolid_Point3d$hullOf = function (points) {
	return _opensolid$geometry$OpenSolid_BoundingBox3d$hullOf(
		A2(_elm_lang$core$List$map, _opensolid$geometry$OpenSolid_BoundingBox3d$singleton, points));
};
var _opensolid$geometry$OpenSolid_Point3d$squaredDistanceFromAxis = F2(
	function (axis, point) {
		return _opensolid$geometry$OpenSolid_Vector3d$squaredLength(
			A2(
				_opensolid$geometry$OpenSolid_Vector3d$crossProduct,
				_opensolid$geometry$OpenSolid_Direction3d$toVector(
					_opensolid$geometry$OpenSolid_Bootstrap_Axis3d$direction(axis)),
				A2(
					_opensolid$geometry$OpenSolid_Vector3d$from,
					_opensolid$geometry$OpenSolid_Bootstrap_Axis3d$originPoint(axis),
					point)));
	});
var _opensolid$geometry$OpenSolid_Point3d$distanceFromAxis = F2(
	function (axis, point) {
		return _elm_lang$core$Basics$sqrt(
			A2(_opensolid$geometry$OpenSolid_Point3d$squaredDistanceFromAxis, axis, point));
	});
var _opensolid$geometry$OpenSolid_Point3d$signedDistanceAlong = F2(
	function (axis, point) {
		return A2(
			_opensolid$geometry$OpenSolid_Vector3d$componentIn,
			_opensolid$geometry$OpenSolid_Bootstrap_Axis3d$direction(axis),
			A2(
				_opensolid$geometry$OpenSolid_Vector3d$from,
				_opensolid$geometry$OpenSolid_Bootstrap_Axis3d$originPoint(axis),
				point));
	});
var _opensolid$geometry$OpenSolid_Point3d$distanceAlong = _opensolid$geometry$OpenSolid_Point3d$signedDistanceAlong;
var _opensolid$geometry$OpenSolid_Point3d$squaredDistanceFrom = F2(
	function (firstPoint, secondPoint) {
		return _opensolid$geometry$OpenSolid_Vector3d$squaredLength(
			A2(_opensolid$geometry$OpenSolid_Vector3d$from, firstPoint, secondPoint));
	});
var _opensolid$geometry$OpenSolid_Point3d$distanceFrom = F2(
	function (firstPoint, secondPoint) {
		return _elm_lang$core$Basics$sqrt(
			A2(_opensolid$geometry$OpenSolid_Point3d$squaredDistanceFrom, firstPoint, secondPoint));
	});
var _opensolid$geometry$OpenSolid_Point3d$equalWithin = F3(
	function (tolerance, firstPoint, secondPoint) {
		return _elm_lang$core$Native_Utils.cmp(
			A2(_opensolid$geometry$OpenSolid_Point3d$squaredDistanceFrom, firstPoint, secondPoint),
			tolerance * tolerance) < 1;
	});
var _opensolid$geometry$OpenSolid_Point3d$zCoordinate = function (_p0) {
	var _p1 = _p0;
	return _p1._0._2;
};
var _opensolid$geometry$OpenSolid_Point3d$yCoordinate = function (_p2) {
	var _p3 = _p2;
	return _p3._0._1;
};
var _opensolid$geometry$OpenSolid_Point3d$xCoordinate = function (_p4) {
	var _p5 = _p4;
	return _p5._0._0;
};
var _opensolid$geometry$OpenSolid_Point3d$coordinates = function (_p6) {
	var _p7 = _p6;
	return _p7._0;
};
var _opensolid$geometry$OpenSolid_Point3d$signedDistanceFrom = F2(
	function (plane, point) {
		var _p8 = _opensolid$geometry$OpenSolid_Direction3d$components(
			_opensolid$geometry$OpenSolid_Bootstrap_Plane3d$normalDirection(plane));
		var nx = _p8._0;
		var ny = _p8._1;
		var nz = _p8._2;
		var _p9 = _opensolid$geometry$OpenSolid_Point3d$coordinates(
			_opensolid$geometry$OpenSolid_Bootstrap_Plane3d$originPoint(plane));
		var x0 = _p9._0;
		var y0 = _p9._1;
		var z0 = _p9._2;
		var _p10 = _opensolid$geometry$OpenSolid_Point3d$coordinates(point);
		var x = _p10._0;
		var y = _p10._1;
		var z = _p10._2;
		return (((x - x0) * nx) + ((y - y0) * ny)) + ((z - z0) * nz);
	});
var _opensolid$geometry$OpenSolid_Point3d$projectInto = F2(
	function (sketchPlane, point) {
		var _p11 = _opensolid$geometry$OpenSolid_Direction3d$components(
			_opensolid$geometry$OpenSolid_Bootstrap_SketchPlane3d$yDirection(sketchPlane));
		var vx = _p11._0;
		var vy = _p11._1;
		var vz = _p11._2;
		var _p12 = _opensolid$geometry$OpenSolid_Direction3d$components(
			_opensolid$geometry$OpenSolid_Bootstrap_SketchPlane3d$xDirection(sketchPlane));
		var ux = _p12._0;
		var uy = _p12._1;
		var uz = _p12._2;
		var _p13 = _opensolid$geometry$OpenSolid_Point3d$coordinates(
			_opensolid$geometry$OpenSolid_Bootstrap_SketchPlane3d$originPoint(sketchPlane));
		var x0 = _p13._0;
		var y0 = _p13._1;
		var z0 = _p13._2;
		var _p14 = _opensolid$geometry$OpenSolid_Point3d$coordinates(point);
		var x = _p14._0;
		var y = _p14._1;
		var z = _p14._2;
		var dx = x - x0;
		var dy = y - y0;
		var dz = z - z0;
		return _opensolid$geometry$OpenSolid_Point2d$fromCoordinates(
			{ctor: '_Tuple2', _0: ((dx * ux) + (dy * uy)) + (dz * uz), _1: ((dx * vx) + (dy * vy)) + (dz * vz)});
	});
var _opensolid$geometry$OpenSolid_Point3d$hull = F2(
	function (firstPoint, secondPoint) {
		var _p15 = _opensolid$geometry$OpenSolid_Point3d$coordinates(secondPoint);
		var x2 = _p15._0;
		var y2 = _p15._1;
		var z2 = _p15._2;
		var _p16 = _opensolid$geometry$OpenSolid_Point3d$coordinates(firstPoint);
		var x1 = _p16._0;
		var y1 = _p16._1;
		var z1 = _p16._2;
		return _opensolid$geometry$OpenSolid_BoundingBox3d$with(
			{
				minX: A2(_elm_lang$core$Basics$min, x1, x2),
				maxX: A2(_elm_lang$core$Basics$max, x1, x2),
				minY: A2(_elm_lang$core$Basics$min, y1, y2),
				maxY: A2(_elm_lang$core$Basics$max, y1, y2),
				minZ: A2(_elm_lang$core$Basics$min, z1, z2),
				maxZ: A2(_elm_lang$core$Basics$max, z1, z2)
			});
	});
var _opensolid$geometry$OpenSolid_Point3d$fromCoordinates = _opensolid$geometry$OpenSolid_Geometry_Internal$Point3d;
var _opensolid$geometry$OpenSolid_Point3d$interpolateFrom = F3(
	function (p1, p2, t) {
		var _p17 = _opensolid$geometry$OpenSolid_Point3d$coordinates(p2);
		var x2 = _p17._0;
		var y2 = _p17._1;
		var z2 = _p17._2;
		var _p18 = _opensolid$geometry$OpenSolid_Point3d$coordinates(p1);
		var x1 = _p18._0;
		var y1 = _p18._1;
		var z1 = _p18._2;
		return _opensolid$geometry$OpenSolid_Point3d$fromCoordinates(
			{
				ctor: '_Tuple3',
				_0: A3(_opensolid$geometry$OpenSolid_Scalar$interpolateFrom, x1, x2, t),
				_1: A3(_opensolid$geometry$OpenSolid_Scalar$interpolateFrom, y1, y2, t),
				_2: A3(_opensolid$geometry$OpenSolid_Scalar$interpolateFrom, z1, z2, t)
			});
	});
var _opensolid$geometry$OpenSolid_Point3d$midpoint = F2(
	function (firstPoint, secondPoint) {
		return A3(_opensolid$geometry$OpenSolid_Point3d$interpolateFrom, firstPoint, secondPoint, 0.5);
	});
var _opensolid$geometry$OpenSolid_Point3d$on = F2(
	function (sketchPlane, point2d) {
		var _p19 = _opensolid$geometry$OpenSolid_Point2d$coordinates(point2d);
		var x = _p19._0;
		var y = _p19._1;
		var _p20 = _opensolid$geometry$OpenSolid_Direction3d$components(
			_opensolid$geometry$OpenSolid_Bootstrap_SketchPlane3d$yDirection(sketchPlane));
		var vx = _p20._0;
		var vy = _p20._1;
		var vz = _p20._2;
		var _p21 = _opensolid$geometry$OpenSolid_Direction3d$components(
			_opensolid$geometry$OpenSolid_Bootstrap_SketchPlane3d$xDirection(sketchPlane));
		var ux = _p21._0;
		var uy = _p21._1;
		var uz = _p21._2;
		var _p22 = _opensolid$geometry$OpenSolid_Point3d$coordinates(
			_opensolid$geometry$OpenSolid_Bootstrap_SketchPlane3d$originPoint(sketchPlane));
		var x0 = _p22._0;
		var y0 = _p22._1;
		var z0 = _p22._2;
		return _opensolid$geometry$OpenSolid_Point3d$fromCoordinates(
			{ctor: '_Tuple3', _0: (x0 + (x * ux)) + (y * vx), _1: (y0 + (x * uy)) + (y * vy), _2: (z0 + (x * uz)) + (y * vz)});
	});
var _opensolid$geometry$OpenSolid_Point3d$circumcenter = function (_p23) {
	var _p24 = _p23;
	var _p30 = _p24._2;
	var _p29 = _p24._1;
	var _p28 = _p24._0;
	var c2 = A2(_opensolid$geometry$OpenSolid_Point3d$squaredDistanceFrom, _p30, _p28);
	var b2 = A2(_opensolid$geometry$OpenSolid_Point3d$squaredDistanceFrom, _p29, _p30);
	var a2 = A2(_opensolid$geometry$OpenSolid_Point3d$squaredDistanceFrom, _p28, _p29);
	var t1 = a2 * ((b2 + c2) - a2);
	var t2 = b2 * ((c2 + a2) - b2);
	var t3 = c2 * ((a2 + b2) - c2);
	var sum = (t1 + t2) + t3;
	if (_elm_lang$core$Native_Utils.eq(sum, 0)) {
		return _elm_lang$core$Maybe$Nothing;
	} else {
		var _p25 = _opensolid$geometry$OpenSolid_Point3d$coordinates(_p30);
		var x3 = _p25._0;
		var y3 = _p25._1;
		var z3 = _p25._2;
		var _p26 = _opensolid$geometry$OpenSolid_Point3d$coordinates(_p29);
		var x2 = _p26._0;
		var y2 = _p26._1;
		var z2 = _p26._2;
		var _p27 = _opensolid$geometry$OpenSolid_Point3d$coordinates(_p28);
		var x1 = _p27._0;
		var y1 = _p27._1;
		var z1 = _p27._2;
		var w3 = t3 / sum;
		var w2 = t2 / sum;
		var w1 = t1 / sum;
		return _elm_lang$core$Maybe$Just(
			_opensolid$geometry$OpenSolid_Point3d$fromCoordinates(
				{ctor: '_Tuple3', _0: ((w1 * x3) + (w2 * x1)) + (w3 * x2), _1: ((w1 * y3) + (w2 * y1)) + (w3 * y2), _2: ((w1 * z3) + (w2 * z1)) + (w3 * z2)}));
	}
};
var _opensolid$geometry$OpenSolid_Point3d$translateBy = F2(
	function (vector, point) {
		var _p31 = _opensolid$geometry$OpenSolid_Point3d$coordinates(point);
		var px = _p31._0;
		var py = _p31._1;
		var pz = _p31._2;
		var _p32 = _opensolid$geometry$OpenSolid_Vector3d$components(vector);
		var vx = _p32._0;
		var vy = _p32._1;
		var vz = _p32._2;
		return _opensolid$geometry$OpenSolid_Point3d$fromCoordinates(
			{ctor: '_Tuple3', _0: px + vx, _1: py + vy, _2: pz + vz});
	});
var _opensolid$geometry$OpenSolid_Point3d$along = F2(
	function (axis, distance) {
		return A2(
			_opensolid$geometry$OpenSolid_Point3d$translateBy,
			_opensolid$geometry$OpenSolid_Vector3d$with(
				{
					length: distance,
					direction: _opensolid$geometry$OpenSolid_Bootstrap_Axis3d$direction(axis)
				}),
			_opensolid$geometry$OpenSolid_Bootstrap_Axis3d$originPoint(axis));
	});
var _opensolid$geometry$OpenSolid_Point3d$projectOntoAxis = F2(
	function (axis, point) {
		return A2(
			_opensolid$geometry$OpenSolid_Point3d$along,
			axis,
			A2(_opensolid$geometry$OpenSolid_Point3d$signedDistanceAlong, axis, point));
	});
var _opensolid$geometry$OpenSolid_Point3d$projectOnto = F2(
	function (plane, point) {
		var displacement = _opensolid$geometry$OpenSolid_Vector3d$with(
			{
				length: 0 - A2(_opensolid$geometry$OpenSolid_Point3d$signedDistanceFrom, plane, point),
				direction: _opensolid$geometry$OpenSolid_Bootstrap_Plane3d$normalDirection(plane)
			});
		return A2(_opensolid$geometry$OpenSolid_Point3d$translateBy, displacement, point);
	});
var _opensolid$geometry$OpenSolid_Point3d$relativeTo = F2(
	function (frame, point) {
		return _opensolid$geometry$OpenSolid_Point3d$fromCoordinates(
			_opensolid$geometry$OpenSolid_Vector3d$components(
				A2(
					_opensolid$geometry$OpenSolid_Vector3d$relativeTo,
					frame,
					A2(
						_opensolid$geometry$OpenSolid_Vector3d$from,
						_opensolid$geometry$OpenSolid_Bootstrap_Frame3d$originPoint(frame),
						point))));
	});
var _opensolid$geometry$OpenSolid_Point3d$origin = _opensolid$geometry$OpenSolid_Point3d$fromCoordinates(
	{ctor: '_Tuple3', _0: 0, _1: 0, _2: 0});
var _opensolid$geometry$OpenSolid_Point3d$addTo = _elm_lang$core$Basics$flip(_opensolid$geometry$OpenSolid_Point3d$translateBy);
var _opensolid$geometry$OpenSolid_Point3d$scaleAbout = F3(
	function (centerPoint, scale, point) {
		return A2(
			_opensolid$geometry$OpenSolid_Point3d$addTo,
			centerPoint,
			A2(
				_opensolid$geometry$OpenSolid_Vector3d$scaleBy,
				scale,
				A2(_opensolid$geometry$OpenSolid_Vector3d$from, centerPoint, point)));
	});
var _opensolid$geometry$OpenSolid_Point3d$rotateAround = F3(
	function (axis, angle, point) {
		var originPoint = _opensolid$geometry$OpenSolid_Bootstrap_Axis3d$originPoint(axis);
		return A2(
			_opensolid$geometry$OpenSolid_Point3d$addTo,
			originPoint,
			A3(
				_opensolid$geometry$OpenSolid_Vector3d$rotateAround,
				axis,
				angle,
				A2(_opensolid$geometry$OpenSolid_Vector3d$from, originPoint, point)));
	});
var _opensolid$geometry$OpenSolid_Point3d$mirrorAcross = F2(
	function (plane, point) {
		var originPoint = _opensolid$geometry$OpenSolid_Bootstrap_Plane3d$originPoint(plane);
		return A2(
			_opensolid$geometry$OpenSolid_Point3d$addTo,
			originPoint,
			A2(
				_opensolid$geometry$OpenSolid_Vector3d$mirrorAcross,
				plane,
				A2(_opensolid$geometry$OpenSolid_Vector3d$from, originPoint, point)));
	});
var _opensolid$geometry$OpenSolid_Point3d$placeIn = F2(
	function (frame, point) {
		return A2(
			_opensolid$geometry$OpenSolid_Point3d$addTo,
			_opensolid$geometry$OpenSolid_Bootstrap_Frame3d$originPoint(frame),
			A2(
				_opensolid$geometry$OpenSolid_Vector3d$placeIn,
				frame,
				_opensolid$geometry$OpenSolid_Vector3d$fromComponents(
					_opensolid$geometry$OpenSolid_Point3d$coordinates(point))));
	});
var _opensolid$geometry$OpenSolid_Point3d$in_ = F2(
	function (frame, coordinates) {
		return A2(
			_opensolid$geometry$OpenSolid_Point3d$placeIn,
			frame,
			_opensolid$geometry$OpenSolid_Point3d$fromCoordinates(coordinates));
	});

var _opensolid$geometry$OpenSolid_Axis3d$direction = function (_p0) {
	var _p1 = _p0;
	return _p1._0.direction;
};
var _opensolid$geometry$OpenSolid_Axis3d$originPoint = function (_p2) {
	var _p3 = _p2;
	return _p3._0.originPoint;
};
var _opensolid$geometry$OpenSolid_Axis3d$projectInto = F2(
	function (sketchPlane, axis) {
		var projectedOrigin = A2(
			_opensolid$geometry$OpenSolid_Point3d$projectInto,
			sketchPlane,
			_opensolid$geometry$OpenSolid_Axis3d$originPoint(axis));
		var toAxis = function (direction) {
			return _opensolid$geometry$OpenSolid_Axis2d$with(
				{originPoint: projectedOrigin, direction: direction});
		};
		return A2(
			_elm_lang$core$Maybe$map,
			toAxis,
			A2(
				_opensolid$geometry$OpenSolid_Direction3d$projectInto,
				sketchPlane,
				_opensolid$geometry$OpenSolid_Axis3d$direction(axis)));
	});
var _opensolid$geometry$OpenSolid_Axis3d$with = _opensolid$geometry$OpenSolid_Geometry_Internal$Axis3d;
var _opensolid$geometry$OpenSolid_Axis3d$on = function (sketchPlane) {
	var placeDirection = _opensolid$geometry$OpenSolid_Direction3d$on(sketchPlane);
	var placePoint = _opensolid$geometry$OpenSolid_Point3d$on(sketchPlane);
	return function (axis2d) {
		return _opensolid$geometry$OpenSolid_Axis3d$with(
			{
				originPoint: placePoint(
					_opensolid$geometry$OpenSolid_Axis2d$originPoint(axis2d)),
				direction: placeDirection(
					_opensolid$geometry$OpenSolid_Axis2d$direction(axis2d))
			});
	};
};
var _opensolid$geometry$OpenSolid_Axis3d$flip = function (axis) {
	return _opensolid$geometry$OpenSolid_Axis3d$with(
		{
			originPoint: _opensolid$geometry$OpenSolid_Axis3d$originPoint(axis),
			direction: _opensolid$geometry$OpenSolid_Direction3d$flip(
				_opensolid$geometry$OpenSolid_Axis3d$direction(axis))
		});
};
var _opensolid$geometry$OpenSolid_Axis3d$moveTo = F2(
	function (newOrigin, axis) {
		return _opensolid$geometry$OpenSolid_Axis3d$with(
			{
				originPoint: newOrigin,
				direction: _opensolid$geometry$OpenSolid_Axis3d$direction(axis)
			});
	});
var _opensolid$geometry$OpenSolid_Axis3d$rotateAround = F2(
	function (otherAxis, angle) {
		var rotateDirection = A2(_opensolid$geometry$OpenSolid_Direction3d$rotateAround, otherAxis, angle);
		var rotatePoint = A2(_opensolid$geometry$OpenSolid_Point3d$rotateAround, otherAxis, angle);
		return function (axis) {
			return _opensolid$geometry$OpenSolid_Axis3d$with(
				{
					originPoint: rotatePoint(
						_opensolid$geometry$OpenSolid_Axis3d$originPoint(axis)),
					direction: rotateDirection(
						_opensolid$geometry$OpenSolid_Axis3d$direction(axis))
				});
		};
	});
var _opensolid$geometry$OpenSolid_Axis3d$translateBy = F2(
	function (vector, axis) {
		return _opensolid$geometry$OpenSolid_Axis3d$with(
			{
				originPoint: A2(
					_opensolid$geometry$OpenSolid_Point3d$translateBy,
					vector,
					_opensolid$geometry$OpenSolid_Axis3d$originPoint(axis)),
				direction: _opensolid$geometry$OpenSolid_Axis3d$direction(axis)
			});
	});
var _opensolid$geometry$OpenSolid_Axis3d$mirrorAcross = function (plane) {
	var mirrorDirection = _opensolid$geometry$OpenSolid_Direction3d$mirrorAcross(plane);
	var mirrorPoint = _opensolid$geometry$OpenSolid_Point3d$mirrorAcross(plane);
	return function (axis) {
		return _opensolid$geometry$OpenSolid_Axis3d$with(
			{
				originPoint: mirrorPoint(
					_opensolid$geometry$OpenSolid_Axis3d$originPoint(axis)),
				direction: mirrorDirection(
					_opensolid$geometry$OpenSolid_Axis3d$direction(axis))
			});
	};
};
var _opensolid$geometry$OpenSolid_Axis3d$projectOnto = F2(
	function (plane, axis) {
		var projectedOrigin = A2(
			_opensolid$geometry$OpenSolid_Point3d$projectOnto,
			plane,
			_opensolid$geometry$OpenSolid_Axis3d$originPoint(axis));
		var toAxis = function (direction) {
			return _opensolid$geometry$OpenSolid_Axis3d$with(
				{originPoint: projectedOrigin, direction: direction});
		};
		return A2(
			_elm_lang$core$Maybe$map,
			toAxis,
			A2(
				_opensolid$geometry$OpenSolid_Direction3d$projectOnto,
				plane,
				_opensolid$geometry$OpenSolid_Axis3d$direction(axis)));
	});
var _opensolid$geometry$OpenSolid_Axis3d$relativeTo = function (frame) {
	var relativeDirection = _opensolid$geometry$OpenSolid_Direction3d$relativeTo(frame);
	var relativePoint = _opensolid$geometry$OpenSolid_Point3d$relativeTo(frame);
	return function (axis) {
		return _opensolid$geometry$OpenSolid_Axis3d$with(
			{
				originPoint: relativePoint(
					_opensolid$geometry$OpenSolid_Axis3d$originPoint(axis)),
				direction: relativeDirection(
					_opensolid$geometry$OpenSolid_Axis3d$direction(axis))
			});
	};
};
var _opensolid$geometry$OpenSolid_Axis3d$placeIn = function (frame) {
	var placeDirection = _opensolid$geometry$OpenSolid_Direction3d$placeIn(frame);
	var placePoint = _opensolid$geometry$OpenSolid_Point3d$placeIn(frame);
	return function (axis) {
		return _opensolid$geometry$OpenSolid_Axis3d$with(
			{
				originPoint: placePoint(
					_opensolid$geometry$OpenSolid_Axis3d$originPoint(axis)),
				direction: placeDirection(
					_opensolid$geometry$OpenSolid_Axis3d$direction(axis))
			});
	};
};
var _opensolid$geometry$OpenSolid_Axis3d$z = _opensolid$geometry$OpenSolid_Axis3d$with(
	{originPoint: _opensolid$geometry$OpenSolid_Point3d$origin, direction: _opensolid$geometry$OpenSolid_Direction3d$z});
var _opensolid$geometry$OpenSolid_Axis3d$y = _opensolid$geometry$OpenSolid_Axis3d$with(
	{originPoint: _opensolid$geometry$OpenSolid_Point3d$origin, direction: _opensolid$geometry$OpenSolid_Direction3d$y});
var _opensolid$geometry$OpenSolid_Axis3d$x = _opensolid$geometry$OpenSolid_Axis3d$with(
	{originPoint: _opensolid$geometry$OpenSolid_Point3d$origin, direction: _opensolid$geometry$OpenSolid_Direction3d$x});

var _opensolid$geometry$OpenSolid_Plane3d$normalDirection = function (_p0) {
	var _p1 = _p0;
	return _p1._0.normalDirection;
};
var _opensolid$geometry$OpenSolid_Plane3d$originPoint = function (_p2) {
	var _p3 = _p2;
	return _p3._0.originPoint;
};
var _opensolid$geometry$OpenSolid_Plane3d$normalAxis = function (plane) {
	return _opensolid$geometry$OpenSolid_Axis3d$with(
		{
			originPoint: _opensolid$geometry$OpenSolid_Plane3d$originPoint(plane),
			direction: _opensolid$geometry$OpenSolid_Plane3d$normalDirection(plane)
		});
};
var _opensolid$geometry$OpenSolid_Plane3d$with = _opensolid$geometry$OpenSolid_Geometry_Internal$Plane3d;
var _opensolid$geometry$OpenSolid_Plane3d$throughPoints = function (_p4) {
	var _p5 = _p4;
	var _p7 = _p5._1;
	var _p6 = _p5._0;
	var secondVector = A2(_opensolid$geometry$OpenSolid_Vector3d$from, _p7, _p5._2);
	var firstVector = A2(_opensolid$geometry$OpenSolid_Vector3d$from, _p6, _p7);
	var crossProduct = A2(_opensolid$geometry$OpenSolid_Vector3d$crossProduct, firstVector, secondVector);
	return A2(
		_elm_lang$core$Maybe$map,
		function (normalDirection) {
			return _opensolid$geometry$OpenSolid_Plane3d$with(
				{originPoint: _p6, normalDirection: normalDirection});
		},
		_opensolid$geometry$OpenSolid_Vector3d$direction(crossProduct));
};
var _opensolid$geometry$OpenSolid_Plane3d$flip = function (plane) {
	return _opensolid$geometry$OpenSolid_Plane3d$with(
		{
			originPoint: _opensolid$geometry$OpenSolid_Plane3d$originPoint(plane),
			normalDirection: _opensolid$geometry$OpenSolid_Direction3d$flip(
				_opensolid$geometry$OpenSolid_Plane3d$normalDirection(plane))
		});
};
var _opensolid$geometry$OpenSolid_Plane3d$rotateAround = F2(
	function (axis, angle) {
		var rotateDirection = A2(_opensolid$geometry$OpenSolid_Direction3d$rotateAround, axis, angle);
		var rotatePoint = A2(_opensolid$geometry$OpenSolid_Point3d$rotateAround, axis, angle);
		return function (plane) {
			return _opensolid$geometry$OpenSolid_Plane3d$with(
				{
					originPoint: rotatePoint(
						_opensolid$geometry$OpenSolid_Plane3d$originPoint(plane)),
					normalDirection: rotateDirection(
						_opensolid$geometry$OpenSolid_Plane3d$normalDirection(plane))
				});
		};
	});
var _opensolid$geometry$OpenSolid_Plane3d$translateBy = F2(
	function (vector, plane) {
		return _opensolid$geometry$OpenSolid_Plane3d$with(
			{
				originPoint: A2(
					_opensolid$geometry$OpenSolid_Point3d$translateBy,
					vector,
					_opensolid$geometry$OpenSolid_Plane3d$originPoint(plane)),
				normalDirection: _opensolid$geometry$OpenSolid_Plane3d$normalDirection(plane)
			});
	});
var _opensolid$geometry$OpenSolid_Plane3d$offsetBy = F2(
	function (distance, plane) {
		var displacement = _opensolid$geometry$OpenSolid_Vector3d$with(
			{
				length: distance,
				direction: _opensolid$geometry$OpenSolid_Plane3d$normalDirection(plane)
			});
		return A2(_opensolid$geometry$OpenSolid_Plane3d$translateBy, displacement, plane);
	});
var _opensolid$geometry$OpenSolid_Plane3d$moveTo = F2(
	function (newOrigin, plane) {
		return _opensolid$geometry$OpenSolid_Plane3d$with(
			{
				originPoint: newOrigin,
				normalDirection: _opensolid$geometry$OpenSolid_Plane3d$normalDirection(plane)
			});
	});
var _opensolid$geometry$OpenSolid_Plane3d$mirrorAcross = function (otherPlane) {
	var mirrorDirection = _opensolid$geometry$OpenSolid_Direction3d$mirrorAcross(otherPlane);
	var mirrorPoint = _opensolid$geometry$OpenSolid_Point3d$mirrorAcross(otherPlane);
	return function (plane) {
		return _opensolid$geometry$OpenSolid_Plane3d$with(
			{
				originPoint: mirrorPoint(
					_opensolid$geometry$OpenSolid_Plane3d$originPoint(plane)),
				normalDirection: mirrorDirection(
					_opensolid$geometry$OpenSolid_Plane3d$normalDirection(plane))
			});
	};
};
var _opensolid$geometry$OpenSolid_Plane3d$relativeTo = function (frame) {
	var relativeDirection = _opensolid$geometry$OpenSolid_Direction3d$relativeTo(frame);
	var relativePoint = _opensolid$geometry$OpenSolid_Point3d$relativeTo(frame);
	return function (plane) {
		return _opensolid$geometry$OpenSolid_Plane3d$with(
			{
				originPoint: relativePoint(
					_opensolid$geometry$OpenSolid_Plane3d$originPoint(plane)),
				normalDirection: relativeDirection(
					_opensolid$geometry$OpenSolid_Plane3d$normalDirection(plane))
			});
	};
};
var _opensolid$geometry$OpenSolid_Plane3d$placeIn = function (frame) {
	var placeDirection = _opensolid$geometry$OpenSolid_Direction3d$placeIn(frame);
	var placePoint = _opensolid$geometry$OpenSolid_Point3d$placeIn(frame);
	return function (plane) {
		return _opensolid$geometry$OpenSolid_Plane3d$with(
			{
				originPoint: placePoint(
					_opensolid$geometry$OpenSolid_Plane3d$originPoint(plane)),
				normalDirection: placeDirection(
					_opensolid$geometry$OpenSolid_Plane3d$normalDirection(plane))
			});
	};
};
var _opensolid$geometry$OpenSolid_Plane3d$zx = _opensolid$geometry$OpenSolid_Plane3d$with(
	{originPoint: _opensolid$geometry$OpenSolid_Point3d$origin, normalDirection: _opensolid$geometry$OpenSolid_Direction3d$y});
var _opensolid$geometry$OpenSolid_Plane3d$yz = _opensolid$geometry$OpenSolid_Plane3d$with(
	{originPoint: _opensolid$geometry$OpenSolid_Point3d$origin, normalDirection: _opensolid$geometry$OpenSolid_Direction3d$x});
var _opensolid$geometry$OpenSolid_Plane3d$xy = _opensolid$geometry$OpenSolid_Plane3d$with(
	{originPoint: _opensolid$geometry$OpenSolid_Point3d$origin, normalDirection: _opensolid$geometry$OpenSolid_Direction3d$z});

var _opensolid$geometry$OpenSolid_SketchPlane3d$yDirection = function (_p0) {
	var _p1 = _p0;
	return _p1._0.yDirection;
};
var _opensolid$geometry$OpenSolid_SketchPlane3d$xDirection = function (_p2) {
	var _p3 = _p2;
	return _p3._0.xDirection;
};
var _opensolid$geometry$OpenSolid_SketchPlane3d$normalDirection = function (sketchPlane) {
	var normalVector = A2(
		_opensolid$geometry$OpenSolid_Vector3d$crossProduct,
		_opensolid$geometry$OpenSolid_Direction3d$toVector(
			_opensolid$geometry$OpenSolid_SketchPlane3d$xDirection(sketchPlane)),
		_opensolid$geometry$OpenSolid_Direction3d$toVector(
			_opensolid$geometry$OpenSolid_SketchPlane3d$yDirection(sketchPlane)));
	return _opensolid$geometry$OpenSolid_Direction3d$unsafe(
		_opensolid$geometry$OpenSolid_Vector3d$components(normalVector));
};
var _opensolid$geometry$OpenSolid_SketchPlane3d$originPoint = function (_p4) {
	var _p5 = _p4;
	return _p5._0.originPoint;
};
var _opensolid$geometry$OpenSolid_SketchPlane3d$xAxis = function (sketchPlane) {
	return _opensolid$geometry$OpenSolid_Axis3d$with(
		{
			originPoint: _opensolid$geometry$OpenSolid_SketchPlane3d$originPoint(sketchPlane),
			direction: _opensolid$geometry$OpenSolid_SketchPlane3d$xDirection(sketchPlane)
		});
};
var _opensolid$geometry$OpenSolid_SketchPlane3d$yAxis = function (sketchPlane) {
	return _opensolid$geometry$OpenSolid_Axis3d$with(
		{
			originPoint: _opensolid$geometry$OpenSolid_SketchPlane3d$originPoint(sketchPlane),
			direction: _opensolid$geometry$OpenSolid_SketchPlane3d$yDirection(sketchPlane)
		});
};
var _opensolid$geometry$OpenSolid_SketchPlane3d$normalAxis = function (sketchPlane) {
	return _opensolid$geometry$OpenSolid_Axis3d$with(
		{
			originPoint: _opensolid$geometry$OpenSolid_SketchPlane3d$originPoint(sketchPlane),
			direction: _opensolid$geometry$OpenSolid_SketchPlane3d$normalDirection(sketchPlane)
		});
};
var _opensolid$geometry$OpenSolid_SketchPlane3d$plane = function (sketchPlane) {
	return _opensolid$geometry$OpenSolid_Plane3d$with(
		{
			originPoint: _opensolid$geometry$OpenSolid_SketchPlane3d$originPoint(sketchPlane),
			normalDirection: _opensolid$geometry$OpenSolid_SketchPlane3d$normalDirection(sketchPlane)
		});
};
var _opensolid$geometry$OpenSolid_SketchPlane3d$unsafe = _opensolid$geometry$OpenSolid_Geometry_Internal$SketchPlane3d;
var _opensolid$geometry$OpenSolid_SketchPlane3d$throughPoints = function (_p6) {
	var _p7 = _p6;
	var _p10 = _p7._2;
	var _p9 = _p7._1;
	var _p8 = _p7._0;
	return A2(
		_elm_lang$core$Maybe$andThen,
		function (xDirection) {
			var xDirectionVector = _opensolid$geometry$OpenSolid_Direction3d$toVector(xDirection);
			var secondCandidate = A2(_opensolid$geometry$OpenSolid_Vector3d$from, _p9, _p10);
			var secondSquaredLength = _opensolid$geometry$OpenSolid_Vector3d$squaredLength(secondCandidate);
			var firstCandidate = A2(_opensolid$geometry$OpenSolid_Vector3d$from, _p8, _p10);
			var firstSquaredLength = _opensolid$geometry$OpenSolid_Vector3d$squaredLength(firstCandidate);
			var chosenVector = (_elm_lang$core$Native_Utils.cmp(firstSquaredLength, secondSquaredLength) < 1) ? firstCandidate : secondCandidate;
			var normalVector = A2(_opensolid$geometry$OpenSolid_Vector3d$crossProduct, xDirectionVector, chosenVector);
			var yVector = A2(_opensolid$geometry$OpenSolid_Vector3d$crossProduct, normalVector, xDirectionVector);
			return A2(
				_elm_lang$core$Maybe$map,
				function (yDirection) {
					return _opensolid$geometry$OpenSolid_SketchPlane3d$unsafe(
						{originPoint: _p8, xDirection: xDirection, yDirection: yDirection});
				},
				_opensolid$geometry$OpenSolid_Vector3d$direction(yVector));
		},
		A2(_opensolid$geometry$OpenSolid_Direction3d$from, _p8, _p9));
};
var _opensolid$geometry$OpenSolid_SketchPlane3d$flipX = function (sketchPlane) {
	return _opensolid$geometry$OpenSolid_SketchPlane3d$unsafe(
		{
			originPoint: _opensolid$geometry$OpenSolid_SketchPlane3d$originPoint(sketchPlane),
			xDirection: _opensolid$geometry$OpenSolid_Direction3d$flip(
				_opensolid$geometry$OpenSolid_SketchPlane3d$xDirection(sketchPlane)),
			yDirection: _opensolid$geometry$OpenSolid_SketchPlane3d$yDirection(sketchPlane)
		});
};
var _opensolid$geometry$OpenSolid_SketchPlane3d$flipY = function (sketchPlane) {
	return _opensolid$geometry$OpenSolid_SketchPlane3d$unsafe(
		{
			originPoint: _opensolid$geometry$OpenSolid_SketchPlane3d$originPoint(sketchPlane),
			xDirection: _opensolid$geometry$OpenSolid_SketchPlane3d$xDirection(sketchPlane),
			yDirection: _opensolid$geometry$OpenSolid_Direction3d$flip(
				_opensolid$geometry$OpenSolid_SketchPlane3d$yDirection(sketchPlane))
		});
};
var _opensolid$geometry$OpenSolid_SketchPlane3d$moveTo = F2(
	function (newOrigin, sketchPlane) {
		return _opensolid$geometry$OpenSolid_SketchPlane3d$unsafe(
			{
				originPoint: newOrigin,
				xDirection: _opensolid$geometry$OpenSolid_SketchPlane3d$xDirection(sketchPlane),
				yDirection: _opensolid$geometry$OpenSolid_SketchPlane3d$yDirection(sketchPlane)
			});
	});
var _opensolid$geometry$OpenSolid_SketchPlane3d$rotateAround = F2(
	function (axis, angle) {
		var rotateDirection = A2(_opensolid$geometry$OpenSolid_Direction3d$rotateAround, axis, angle);
		var rotatePoint = A2(_opensolid$geometry$OpenSolid_Point3d$rotateAround, axis, angle);
		return function (sketchPlane) {
			return _opensolid$geometry$OpenSolid_SketchPlane3d$unsafe(
				{
					originPoint: rotatePoint(
						_opensolid$geometry$OpenSolid_SketchPlane3d$originPoint(sketchPlane)),
					xDirection: rotateDirection(
						_opensolid$geometry$OpenSolid_SketchPlane3d$xDirection(sketchPlane)),
					yDirection: rotateDirection(
						_opensolid$geometry$OpenSolid_SketchPlane3d$yDirection(sketchPlane))
				});
		};
	});
var _opensolid$geometry$OpenSolid_SketchPlane3d$rotateAroundOwn = F3(
	function (axis, angle, sketchPlane) {
		return A3(
			_opensolid$geometry$OpenSolid_SketchPlane3d$rotateAround,
			axis(sketchPlane),
			angle,
			sketchPlane);
	});
var _opensolid$geometry$OpenSolid_SketchPlane3d$translateBy = F2(
	function (vector, sketchPlane) {
		return _opensolid$geometry$OpenSolid_SketchPlane3d$unsafe(
			{
				originPoint: A2(
					_opensolid$geometry$OpenSolid_Point3d$translateBy,
					vector,
					_opensolid$geometry$OpenSolid_SketchPlane3d$originPoint(sketchPlane)),
				xDirection: _opensolid$geometry$OpenSolid_SketchPlane3d$xDirection(sketchPlane),
				yDirection: _opensolid$geometry$OpenSolid_SketchPlane3d$yDirection(sketchPlane)
			});
	});
var _opensolid$geometry$OpenSolid_SketchPlane3d$offsetBy = F2(
	function (distance, sketchPlane) {
		var displacement = _opensolid$geometry$OpenSolid_Vector3d$with(
			{
				length: distance,
				direction: _opensolid$geometry$OpenSolid_SketchPlane3d$normalDirection(sketchPlane)
			});
		return A2(_opensolid$geometry$OpenSolid_SketchPlane3d$translateBy, displacement, sketchPlane);
	});
var _opensolid$geometry$OpenSolid_SketchPlane3d$translateAlongOwn = F3(
	function (axis, distance, frame) {
		var displacement = _opensolid$geometry$OpenSolid_Vector3d$with(
			{
				length: distance,
				direction: _opensolid$geometry$OpenSolid_Axis3d$direction(
					axis(frame))
			});
		return A2(_opensolid$geometry$OpenSolid_SketchPlane3d$translateBy, displacement, frame);
	});
var _opensolid$geometry$OpenSolid_SketchPlane3d$mirrorAcross = function (plane) {
	var mirrorDirection = _opensolid$geometry$OpenSolid_Direction3d$mirrorAcross(plane);
	var mirrorPoint = _opensolid$geometry$OpenSolid_Point3d$mirrorAcross(plane);
	return function (sketchPlane) {
		return _opensolid$geometry$OpenSolid_SketchPlane3d$unsafe(
			{
				originPoint: mirrorPoint(
					_opensolid$geometry$OpenSolid_SketchPlane3d$originPoint(sketchPlane)),
				xDirection: mirrorDirection(
					_opensolid$geometry$OpenSolid_SketchPlane3d$xDirection(sketchPlane)),
				yDirection: mirrorDirection(
					_opensolid$geometry$OpenSolid_SketchPlane3d$yDirection(sketchPlane))
			});
	};
};
var _opensolid$geometry$OpenSolid_SketchPlane3d$relativeTo = function (frame) {
	var relativeDirection = _opensolid$geometry$OpenSolid_Direction3d$relativeTo(frame);
	var relativePoint = _opensolid$geometry$OpenSolid_Point3d$relativeTo(frame);
	return function (sketchPlane) {
		return _opensolid$geometry$OpenSolid_SketchPlane3d$unsafe(
			{
				originPoint: relativePoint(
					_opensolid$geometry$OpenSolid_SketchPlane3d$originPoint(sketchPlane)),
				xDirection: relativeDirection(
					_opensolid$geometry$OpenSolid_SketchPlane3d$xDirection(sketchPlane)),
				yDirection: relativeDirection(
					_opensolid$geometry$OpenSolid_SketchPlane3d$yDirection(sketchPlane))
			});
	};
};
var _opensolid$geometry$OpenSolid_SketchPlane3d$placeIn = function (frame) {
	var placeDirection = _opensolid$geometry$OpenSolid_Direction3d$placeIn(frame);
	var placePoint = _opensolid$geometry$OpenSolid_Point3d$placeIn(frame);
	return function (sketchPlane) {
		return _opensolid$geometry$OpenSolid_SketchPlane3d$unsafe(
			{
				originPoint: placePoint(
					_opensolid$geometry$OpenSolid_SketchPlane3d$originPoint(sketchPlane)),
				xDirection: placeDirection(
					_opensolid$geometry$OpenSolid_SketchPlane3d$xDirection(sketchPlane)),
				yDirection: placeDirection(
					_opensolid$geometry$OpenSolid_SketchPlane3d$yDirection(sketchPlane))
			});
	};
};
var _opensolid$geometry$OpenSolid_SketchPlane3d$on = F2(
	function (sketchPlane, frame) {
		return _opensolid$geometry$OpenSolid_SketchPlane3d$unsafe(
			{
				originPoint: A2(
					_opensolid$geometry$OpenSolid_Point3d$on,
					sketchPlane,
					_opensolid$geometry$OpenSolid_Frame2d$originPoint(frame)),
				xDirection: A2(
					_opensolid$geometry$OpenSolid_Direction3d$on,
					sketchPlane,
					_opensolid$geometry$OpenSolid_Frame2d$xDirection(frame)),
				yDirection: A2(
					_opensolid$geometry$OpenSolid_Direction3d$on,
					sketchPlane,
					_opensolid$geometry$OpenSolid_Frame2d$yDirection(frame))
			});
	});
var _opensolid$geometry$OpenSolid_SketchPlane3d$with = function (_p11) {
	var _p12 = _p11;
	var _p13 = _opensolid$geometry$OpenSolid_Direction3d$perpendicularBasis(_p12.normalDirection);
	var xDirection = _p13._0;
	var yDirection = _p13._1;
	return _opensolid$geometry$OpenSolid_SketchPlane3d$unsafe(
		{originPoint: _p12.originPoint, xDirection: xDirection, yDirection: yDirection});
};
var _opensolid$geometry$OpenSolid_SketchPlane3d$fromPlane = function (plane) {
	return _opensolid$geometry$OpenSolid_SketchPlane3d$with(
		{
			originPoint: _opensolid$geometry$OpenSolid_Plane3d$originPoint(plane),
			normalDirection: _opensolid$geometry$OpenSolid_Plane3d$normalDirection(plane)
		});
};
var _opensolid$geometry$OpenSolid_SketchPlane3d$xz = _opensolid$geometry$OpenSolid_SketchPlane3d$unsafe(
	{originPoint: _opensolid$geometry$OpenSolid_Point3d$origin, xDirection: _opensolid$geometry$OpenSolid_Direction3d$x, yDirection: _opensolid$geometry$OpenSolid_Direction3d$z});
var _opensolid$geometry$OpenSolid_SketchPlane3d$zx = _opensolid$geometry$OpenSolid_SketchPlane3d$unsafe(
	{originPoint: _opensolid$geometry$OpenSolid_Point3d$origin, xDirection: _opensolid$geometry$OpenSolid_Direction3d$z, yDirection: _opensolid$geometry$OpenSolid_Direction3d$x});
var _opensolid$geometry$OpenSolid_SketchPlane3d$zy = _opensolid$geometry$OpenSolid_SketchPlane3d$unsafe(
	{originPoint: _opensolid$geometry$OpenSolid_Point3d$origin, xDirection: _opensolid$geometry$OpenSolid_Direction3d$z, yDirection: _opensolid$geometry$OpenSolid_Direction3d$y});
var _opensolid$geometry$OpenSolid_SketchPlane3d$yz = _opensolid$geometry$OpenSolid_SketchPlane3d$unsafe(
	{originPoint: _opensolid$geometry$OpenSolid_Point3d$origin, xDirection: _opensolid$geometry$OpenSolid_Direction3d$y, yDirection: _opensolid$geometry$OpenSolid_Direction3d$z});
var _opensolid$geometry$OpenSolid_SketchPlane3d$yx = _opensolid$geometry$OpenSolid_SketchPlane3d$unsafe(
	{originPoint: _opensolid$geometry$OpenSolid_Point3d$origin, xDirection: _opensolid$geometry$OpenSolid_Direction3d$y, yDirection: _opensolid$geometry$OpenSolid_Direction3d$x});
var _opensolid$geometry$OpenSolid_SketchPlane3d$xy = _opensolid$geometry$OpenSolid_SketchPlane3d$unsafe(
	{originPoint: _opensolid$geometry$OpenSolid_Point3d$origin, xDirection: _opensolid$geometry$OpenSolid_Direction3d$x, yDirection: _opensolid$geometry$OpenSolid_Direction3d$y});

var _opensolid$geometry$OpenSolid_Frame3d$zDirection = function (_p0) {
	var _p1 = _p0;
	return _p1._0.zDirection;
};
var _opensolid$geometry$OpenSolid_Frame3d$yDirection = function (_p2) {
	var _p3 = _p2;
	return _p3._0.yDirection;
};
var _opensolid$geometry$OpenSolid_Frame3d$xDirection = function (_p4) {
	var _p5 = _p4;
	return _p5._0.xDirection;
};
var _opensolid$geometry$OpenSolid_Frame3d$isRightHanded = function (frame) {
	var zVector = _opensolid$geometry$OpenSolid_Direction3d$toVector(
		_opensolid$geometry$OpenSolid_Frame3d$zDirection(frame));
	var yVector = _opensolid$geometry$OpenSolid_Direction3d$toVector(
		_opensolid$geometry$OpenSolid_Frame3d$yDirection(frame));
	var xVector = _opensolid$geometry$OpenSolid_Direction3d$toVector(
		_opensolid$geometry$OpenSolid_Frame3d$xDirection(frame));
	return _elm_lang$core$Native_Utils.cmp(
		A2(
			_opensolid$geometry$OpenSolid_Vector3d$dotProduct,
			zVector,
			A2(_opensolid$geometry$OpenSolid_Vector3d$crossProduct, xVector, yVector)),
		0) > 0;
};
var _opensolid$geometry$OpenSolid_Frame3d$originPoint = function (_p6) {
	var _p7 = _p6;
	return _p7._0.originPoint;
};
var _opensolid$geometry$OpenSolid_Frame3d$xAxis = function (frame) {
	return _opensolid$geometry$OpenSolid_Axis3d$with(
		{
			originPoint: _opensolid$geometry$OpenSolid_Frame3d$originPoint(frame),
			direction: _opensolid$geometry$OpenSolid_Frame3d$xDirection(frame)
		});
};
var _opensolid$geometry$OpenSolid_Frame3d$yAxis = function (frame) {
	return _opensolid$geometry$OpenSolid_Axis3d$with(
		{
			originPoint: _opensolid$geometry$OpenSolid_Frame3d$originPoint(frame),
			direction: _opensolid$geometry$OpenSolid_Frame3d$yDirection(frame)
		});
};
var _opensolid$geometry$OpenSolid_Frame3d$zAxis = function (frame) {
	return _opensolid$geometry$OpenSolid_Axis3d$with(
		{
			originPoint: _opensolid$geometry$OpenSolid_Frame3d$originPoint(frame),
			direction: _opensolid$geometry$OpenSolid_Frame3d$zDirection(frame)
		});
};
var _opensolid$geometry$OpenSolid_Frame3d$xyPlane = function (frame) {
	return _opensolid$geometry$OpenSolid_Plane3d$with(
		{
			originPoint: _opensolid$geometry$OpenSolid_Frame3d$originPoint(frame),
			normalDirection: _opensolid$geometry$OpenSolid_Frame3d$zDirection(frame)
		});
};
var _opensolid$geometry$OpenSolid_Frame3d$yxPlane = function (frame) {
	return _opensolid$geometry$OpenSolid_Plane3d$with(
		{
			originPoint: _opensolid$geometry$OpenSolid_Frame3d$originPoint(frame),
			normalDirection: _opensolid$geometry$OpenSolid_Direction3d$flip(
				_opensolid$geometry$OpenSolid_Frame3d$zDirection(frame))
		});
};
var _opensolid$geometry$OpenSolid_Frame3d$yzPlane = function (frame) {
	return _opensolid$geometry$OpenSolid_Plane3d$with(
		{
			originPoint: _opensolid$geometry$OpenSolid_Frame3d$originPoint(frame),
			normalDirection: _opensolid$geometry$OpenSolid_Frame3d$xDirection(frame)
		});
};
var _opensolid$geometry$OpenSolid_Frame3d$zyPlane = function (frame) {
	return _opensolid$geometry$OpenSolid_Plane3d$with(
		{
			originPoint: _opensolid$geometry$OpenSolid_Frame3d$originPoint(frame),
			normalDirection: _opensolid$geometry$OpenSolid_Direction3d$flip(
				_opensolid$geometry$OpenSolid_Frame3d$xDirection(frame))
		});
};
var _opensolid$geometry$OpenSolid_Frame3d$zxPlane = function (frame) {
	return _opensolid$geometry$OpenSolid_Plane3d$with(
		{
			originPoint: _opensolid$geometry$OpenSolid_Frame3d$originPoint(frame),
			normalDirection: _opensolid$geometry$OpenSolid_Frame3d$yDirection(frame)
		});
};
var _opensolid$geometry$OpenSolid_Frame3d$xzPlane = function (frame) {
	return _opensolid$geometry$OpenSolid_Plane3d$with(
		{
			originPoint: _opensolid$geometry$OpenSolid_Frame3d$originPoint(frame),
			normalDirection: _opensolid$geometry$OpenSolid_Direction3d$flip(
				_opensolid$geometry$OpenSolid_Frame3d$yDirection(frame))
		});
};
var _opensolid$geometry$OpenSolid_Frame3d$xySketchPlane = function (frame) {
	return _opensolid$geometry$OpenSolid_SketchPlane3d$unsafe(
		{
			originPoint: _opensolid$geometry$OpenSolid_Frame3d$originPoint(frame),
			xDirection: _opensolid$geometry$OpenSolid_Frame3d$xDirection(frame),
			yDirection: _opensolid$geometry$OpenSolid_Frame3d$yDirection(frame)
		});
};
var _opensolid$geometry$OpenSolid_Frame3d$yxSketchPlane = function (frame) {
	return _opensolid$geometry$OpenSolid_SketchPlane3d$unsafe(
		{
			originPoint: _opensolid$geometry$OpenSolid_Frame3d$originPoint(frame),
			xDirection: _opensolid$geometry$OpenSolid_Frame3d$yDirection(frame),
			yDirection: _opensolid$geometry$OpenSolid_Frame3d$xDirection(frame)
		});
};
var _opensolid$geometry$OpenSolid_Frame3d$yzSketchPlane = function (frame) {
	return _opensolid$geometry$OpenSolid_SketchPlane3d$unsafe(
		{
			originPoint: _opensolid$geometry$OpenSolid_Frame3d$originPoint(frame),
			xDirection: _opensolid$geometry$OpenSolid_Frame3d$yDirection(frame),
			yDirection: _opensolid$geometry$OpenSolid_Frame3d$zDirection(frame)
		});
};
var _opensolid$geometry$OpenSolid_Frame3d$zySketchPlane = function (frame) {
	return _opensolid$geometry$OpenSolid_SketchPlane3d$unsafe(
		{
			originPoint: _opensolid$geometry$OpenSolid_Frame3d$originPoint(frame),
			xDirection: _opensolid$geometry$OpenSolid_Frame3d$zDirection(frame),
			yDirection: _opensolid$geometry$OpenSolid_Frame3d$yDirection(frame)
		});
};
var _opensolid$geometry$OpenSolid_Frame3d$zxSketchPlane = function (frame) {
	return _opensolid$geometry$OpenSolid_SketchPlane3d$unsafe(
		{
			originPoint: _opensolid$geometry$OpenSolid_Frame3d$originPoint(frame),
			xDirection: _opensolid$geometry$OpenSolid_Frame3d$zDirection(frame),
			yDirection: _opensolid$geometry$OpenSolid_Frame3d$xDirection(frame)
		});
};
var _opensolid$geometry$OpenSolid_Frame3d$xzSketchPlane = function (frame) {
	return _opensolid$geometry$OpenSolid_SketchPlane3d$unsafe(
		{
			originPoint: _opensolid$geometry$OpenSolid_Frame3d$originPoint(frame),
			xDirection: _opensolid$geometry$OpenSolid_Frame3d$xDirection(frame),
			yDirection: _opensolid$geometry$OpenSolid_Frame3d$zDirection(frame)
		});
};
var _opensolid$geometry$OpenSolid_Frame3d$unsafe = _opensolid$geometry$OpenSolid_Geometry_Internal$Frame3d;
var _opensolid$geometry$OpenSolid_Frame3d$atPoint = function (point) {
	return _opensolid$geometry$OpenSolid_Frame3d$unsafe(
		{originPoint: point, xDirection: _opensolid$geometry$OpenSolid_Direction3d$x, yDirection: _opensolid$geometry$OpenSolid_Direction3d$y, zDirection: _opensolid$geometry$OpenSolid_Direction3d$z});
};
var _opensolid$geometry$OpenSolid_Frame3d$flipX = function (frame) {
	return _opensolid$geometry$OpenSolid_Frame3d$unsafe(
		{
			originPoint: _opensolid$geometry$OpenSolid_Frame3d$originPoint(frame),
			xDirection: _opensolid$geometry$OpenSolid_Direction3d$flip(
				_opensolid$geometry$OpenSolid_Frame3d$xDirection(frame)),
			yDirection: _opensolid$geometry$OpenSolid_Frame3d$yDirection(frame),
			zDirection: _opensolid$geometry$OpenSolid_Frame3d$zDirection(frame)
		});
};
var _opensolid$geometry$OpenSolid_Frame3d$flipY = function (frame) {
	return _opensolid$geometry$OpenSolid_Frame3d$unsafe(
		{
			originPoint: _opensolid$geometry$OpenSolid_Frame3d$originPoint(frame),
			xDirection: _opensolid$geometry$OpenSolid_Frame3d$xDirection(frame),
			yDirection: _opensolid$geometry$OpenSolid_Direction3d$flip(
				_opensolid$geometry$OpenSolid_Frame3d$yDirection(frame)),
			zDirection: _opensolid$geometry$OpenSolid_Frame3d$zDirection(frame)
		});
};
var _opensolid$geometry$OpenSolid_Frame3d$flipZ = function (frame) {
	return _opensolid$geometry$OpenSolid_Frame3d$unsafe(
		{
			originPoint: _opensolid$geometry$OpenSolid_Frame3d$originPoint(frame),
			xDirection: _opensolid$geometry$OpenSolid_Frame3d$xDirection(frame),
			yDirection: _opensolid$geometry$OpenSolid_Frame3d$yDirection(frame),
			zDirection: _opensolid$geometry$OpenSolid_Direction3d$flip(
				_opensolid$geometry$OpenSolid_Frame3d$zDirection(frame))
		});
};
var _opensolid$geometry$OpenSolid_Frame3d$moveTo = F2(
	function (newOrigin, frame) {
		return _opensolid$geometry$OpenSolid_Frame3d$unsafe(
			{
				originPoint: newOrigin,
				xDirection: _opensolid$geometry$OpenSolid_Frame3d$xDirection(frame),
				yDirection: _opensolid$geometry$OpenSolid_Frame3d$yDirection(frame),
				zDirection: _opensolid$geometry$OpenSolid_Frame3d$zDirection(frame)
			});
	});
var _opensolid$geometry$OpenSolid_Frame3d$rotateAround = F2(
	function (axis, angle) {
		var rotateDirection = A2(_opensolid$geometry$OpenSolid_Direction3d$rotateAround, axis, angle);
		var rotatePoint = A2(_opensolid$geometry$OpenSolid_Point3d$rotateAround, axis, angle);
		return function (frame) {
			return _opensolid$geometry$OpenSolid_Frame3d$unsafe(
				{
					originPoint: rotatePoint(
						_opensolid$geometry$OpenSolid_Frame3d$originPoint(frame)),
					xDirection: rotateDirection(
						_opensolid$geometry$OpenSolid_Frame3d$xDirection(frame)),
					yDirection: rotateDirection(
						_opensolid$geometry$OpenSolid_Frame3d$yDirection(frame)),
					zDirection: rotateDirection(
						_opensolid$geometry$OpenSolid_Frame3d$zDirection(frame))
				});
		};
	});
var _opensolid$geometry$OpenSolid_Frame3d$rotateAroundOwn = F3(
	function (axis, angle, frame) {
		return A3(
			_opensolid$geometry$OpenSolid_Frame3d$rotateAround,
			axis(frame),
			angle,
			frame);
	});
var _opensolid$geometry$OpenSolid_Frame3d$translateBy = F2(
	function (vector, frame) {
		return _opensolid$geometry$OpenSolid_Frame3d$unsafe(
			{
				originPoint: A2(
					_opensolid$geometry$OpenSolid_Point3d$translateBy,
					vector,
					_opensolid$geometry$OpenSolid_Frame3d$originPoint(frame)),
				xDirection: _opensolid$geometry$OpenSolid_Frame3d$xDirection(frame),
				yDirection: _opensolid$geometry$OpenSolid_Frame3d$yDirection(frame),
				zDirection: _opensolid$geometry$OpenSolid_Frame3d$zDirection(frame)
			});
	});
var _opensolid$geometry$OpenSolid_Frame3d$translateAlongOwn = F3(
	function (axis, distance, frame) {
		var displacement = _opensolid$geometry$OpenSolid_Vector3d$with(
			{
				length: distance,
				direction: _opensolid$geometry$OpenSolid_Axis3d$direction(
					axis(frame))
			});
		return A2(_opensolid$geometry$OpenSolid_Frame3d$translateBy, displacement, frame);
	});
var _opensolid$geometry$OpenSolid_Frame3d$mirrorAcross = function (plane) {
	var mirrorDirection = _opensolid$geometry$OpenSolid_Direction3d$mirrorAcross(plane);
	var mirrorPoint = _opensolid$geometry$OpenSolid_Point3d$mirrorAcross(plane);
	return function (frame) {
		return _opensolid$geometry$OpenSolid_Frame3d$unsafe(
			{
				originPoint: mirrorPoint(
					_opensolid$geometry$OpenSolid_Frame3d$originPoint(frame)),
				xDirection: mirrorDirection(
					_opensolid$geometry$OpenSolid_Frame3d$xDirection(frame)),
				yDirection: mirrorDirection(
					_opensolid$geometry$OpenSolid_Frame3d$yDirection(frame)),
				zDirection: mirrorDirection(
					_opensolid$geometry$OpenSolid_Frame3d$zDirection(frame))
			});
	};
};
var _opensolid$geometry$OpenSolid_Frame3d$relativeTo = function (otherFrame) {
	var relativeDirection = _opensolid$geometry$OpenSolid_Direction3d$relativeTo(otherFrame);
	var relativePoint = _opensolid$geometry$OpenSolid_Point3d$relativeTo(otherFrame);
	return function (frame) {
		return _opensolid$geometry$OpenSolid_Frame3d$unsafe(
			{
				originPoint: relativePoint(
					_opensolid$geometry$OpenSolid_Frame3d$originPoint(frame)),
				xDirection: relativeDirection(
					_opensolid$geometry$OpenSolid_Frame3d$xDirection(frame)),
				yDirection: relativeDirection(
					_opensolid$geometry$OpenSolid_Frame3d$yDirection(frame)),
				zDirection: relativeDirection(
					_opensolid$geometry$OpenSolid_Frame3d$zDirection(frame))
			});
	};
};
var _opensolid$geometry$OpenSolid_Frame3d$placeIn = function (otherFrame) {
	var placeDirection = _opensolid$geometry$OpenSolid_Direction3d$placeIn(otherFrame);
	var placePoint = _opensolid$geometry$OpenSolid_Point3d$placeIn(otherFrame);
	return function (frame) {
		return _opensolid$geometry$OpenSolid_Frame3d$unsafe(
			{
				originPoint: placePoint(
					_opensolid$geometry$OpenSolid_Frame3d$originPoint(frame)),
				xDirection: placeDirection(
					_opensolid$geometry$OpenSolid_Frame3d$xDirection(frame)),
				yDirection: placeDirection(
					_opensolid$geometry$OpenSolid_Frame3d$yDirection(frame)),
				zDirection: placeDirection(
					_opensolid$geometry$OpenSolid_Frame3d$zDirection(frame))
			});
	};
};
var _opensolid$geometry$OpenSolid_Frame3d$with = function (_p8) {
	var _p9 = _p8;
	var _p11 = _p9.zDirection;
	var _p10 = _opensolid$geometry$OpenSolid_Direction3d$perpendicularBasis(_p11);
	var xDirection = _p10._0;
	var yDirection = _p10._1;
	return _opensolid$geometry$OpenSolid_Frame3d$unsafe(
		{originPoint: _p9.originPoint, xDirection: xDirection, yDirection: yDirection, zDirection: _p11});
};
var _opensolid$geometry$OpenSolid_Frame3d$xyz = _opensolid$geometry$OpenSolid_Frame3d$atPoint(_opensolid$geometry$OpenSolid_Point3d$origin);

var _opensolid$geometry$OpenSolid_LineSegment3d$endpoints = function (_p0) {
	var _p1 = _p0;
	return _p1._0;
};
var _opensolid$geometry$OpenSolid_LineSegment3d$interpolate = function (lineSegment) {
	var _p2 = _opensolid$geometry$OpenSolid_LineSegment3d$endpoints(lineSegment);
	var start = _p2._0;
	var end = _p2._1;
	return A2(_opensolid$geometry$OpenSolid_Point3d$interpolateFrom, start, end);
};
var _opensolid$geometry$OpenSolid_LineSegment3d$midpoint = function (lineSegment) {
	return A2(_opensolid$geometry$OpenSolid_LineSegment3d$interpolate, lineSegment, 0.5);
};
var _opensolid$geometry$OpenSolid_LineSegment3d$vector = function (lineSegment) {
	var _p3 = _opensolid$geometry$OpenSolid_LineSegment3d$endpoints(lineSegment);
	var p1 = _p3._0;
	var p2 = _p3._1;
	return A2(_opensolid$geometry$OpenSolid_Vector3d$from, p1, p2);
};
var _opensolid$geometry$OpenSolid_LineSegment3d$length = function (_p4) {
	return _opensolid$geometry$OpenSolid_Vector3d$length(
		_opensolid$geometry$OpenSolid_LineSegment3d$vector(_p4));
};
var _opensolid$geometry$OpenSolid_LineSegment3d$squaredLength = function (_p5) {
	return _opensolid$geometry$OpenSolid_Vector3d$squaredLength(
		_opensolid$geometry$OpenSolid_LineSegment3d$vector(_p5));
};
var _opensolid$geometry$OpenSolid_LineSegment3d$direction = function (_p6) {
	return _opensolid$geometry$OpenSolid_Vector3d$direction(
		_opensolid$geometry$OpenSolid_LineSegment3d$vector(_p6));
};
var _opensolid$geometry$OpenSolid_LineSegment3d$normalDirection = function (_p7) {
	return _opensolid$geometry$OpenSolid_Vector3d$direction(
		_opensolid$geometry$OpenSolid_Vector3d$perpendicularTo(
			_opensolid$geometry$OpenSolid_LineSegment3d$vector(_p7)));
};
var _opensolid$geometry$OpenSolid_LineSegment3d$projectInto = F2(
	function (sketchPlane, lineSegment) {
		var project = _opensolid$geometry$OpenSolid_Point3d$projectInto(sketchPlane);
		var _p8 = _opensolid$geometry$OpenSolid_LineSegment3d$endpoints(lineSegment);
		var p1 = _p8._0;
		var p2 = _p8._1;
		return _opensolid$geometry$OpenSolid_LineSegment2d$fromEndpoints(
			{
				ctor: '_Tuple2',
				_0: project(p1),
				_1: project(p2)
			});
	});
var _opensolid$geometry$OpenSolid_LineSegment3d$boundingBox = function (lineSegment) {
	var _p9 = _opensolid$geometry$OpenSolid_LineSegment3d$endpoints(lineSegment);
	var p1 = _p9._0;
	var p2 = _p9._1;
	return A2(_opensolid$geometry$OpenSolid_Point3d$hull, p1, p2);
};
var _opensolid$geometry$OpenSolid_LineSegment3d$endPoint = function (_p10) {
	var _p11 = _p10;
	return _p11._0._1;
};
var _opensolid$geometry$OpenSolid_LineSegment3d$startPoint = function (_p12) {
	var _p13 = _p12;
	return _p13._0._0;
};
var _opensolid$geometry$OpenSolid_LineSegment3d$fromEndpoints = _opensolid$geometry$OpenSolid_Geometry_Internal$LineSegment3d;
var _opensolid$geometry$OpenSolid_LineSegment3d$from = F2(
	function (startPoint, endPoint) {
		return _opensolid$geometry$OpenSolid_LineSegment3d$fromEndpoints(
			{ctor: '_Tuple2', _0: startPoint, _1: endPoint});
	});
var _opensolid$geometry$OpenSolid_LineSegment3d$along = F3(
	function (axis, start, end) {
		return _opensolid$geometry$OpenSolid_LineSegment3d$fromEndpoints(
			{
				ctor: '_Tuple2',
				_0: A2(_opensolid$geometry$OpenSolid_Point3d$along, axis, start),
				_1: A2(_opensolid$geometry$OpenSolid_Point3d$along, axis, end)
			});
	});
var _opensolid$geometry$OpenSolid_LineSegment3d$on = F2(
	function (sketchPlane, lineSegment2d) {
		var _p14 = _opensolid$geometry$OpenSolid_LineSegment2d$endpoints(lineSegment2d);
		var p1 = _p14._0;
		var p2 = _p14._1;
		return _opensolid$geometry$OpenSolid_LineSegment3d$fromEndpoints(
			{
				ctor: '_Tuple2',
				_0: A2(_opensolid$geometry$OpenSolid_Point3d$on, sketchPlane, p1),
				_1: A2(_opensolid$geometry$OpenSolid_Point3d$on, sketchPlane, p2)
			});
	});
var _opensolid$geometry$OpenSolid_LineSegment3d$reverse = function (lineSegment) {
	var _p15 = _opensolid$geometry$OpenSolid_LineSegment3d$endpoints(lineSegment);
	var p1 = _p15._0;
	var p2 = _p15._1;
	return _opensolid$geometry$OpenSolid_LineSegment3d$fromEndpoints(
		{ctor: '_Tuple2', _0: p2, _1: p1});
};
var _opensolid$geometry$OpenSolid_LineSegment3d$mapEndpoints = F2(
	function ($function, lineSegment) {
		var _p16 = _opensolid$geometry$OpenSolid_LineSegment3d$endpoints(lineSegment);
		var p1 = _p16._0;
		var p2 = _p16._1;
		return _opensolid$geometry$OpenSolid_LineSegment3d$fromEndpoints(
			{
				ctor: '_Tuple2',
				_0: $function(p1),
				_1: $function(p2)
			});
	});
var _opensolid$geometry$OpenSolid_LineSegment3d$scaleAbout = F2(
	function (point, scale) {
		return _opensolid$geometry$OpenSolid_LineSegment3d$mapEndpoints(
			A2(_opensolid$geometry$OpenSolid_Point3d$scaleAbout, point, scale));
	});
var _opensolid$geometry$OpenSolid_LineSegment3d$rotateAround = F2(
	function (axis, angle) {
		return _opensolid$geometry$OpenSolid_LineSegment3d$mapEndpoints(
			A2(_opensolid$geometry$OpenSolid_Point3d$rotateAround, axis, angle));
	});
var _opensolid$geometry$OpenSolid_LineSegment3d$translateBy = function (vector) {
	return _opensolid$geometry$OpenSolid_LineSegment3d$mapEndpoints(
		_opensolid$geometry$OpenSolid_Point3d$translateBy(vector));
};
var _opensolid$geometry$OpenSolid_LineSegment3d$mirrorAcross = function (plane) {
	return _opensolid$geometry$OpenSolid_LineSegment3d$mapEndpoints(
		_opensolid$geometry$OpenSolid_Point3d$mirrorAcross(plane));
};
var _opensolid$geometry$OpenSolid_LineSegment3d$projectOnto = function (plane) {
	return _opensolid$geometry$OpenSolid_LineSegment3d$mapEndpoints(
		_opensolid$geometry$OpenSolid_Point3d$projectOnto(plane));
};
var _opensolid$geometry$OpenSolid_LineSegment3d$relativeTo = function (frame) {
	return _opensolid$geometry$OpenSolid_LineSegment3d$mapEndpoints(
		_opensolid$geometry$OpenSolid_Point3d$relativeTo(frame));
};
var _opensolid$geometry$OpenSolid_LineSegment3d$placeIn = function (frame) {
	return _opensolid$geometry$OpenSolid_LineSegment3d$mapEndpoints(
		_opensolid$geometry$OpenSolid_Point3d$placeIn(frame));
};

var _opensolid$geometry$OpenSolid_ArcLength$paramAtStart = function (tree) {
	var _p0 = tree;
	if (_p0.ctor === 'Node') {
		return _p0._0.paramAtStart;
	} else {
		return _p0._0.param0;
	}
};
var _opensolid$geometry$OpenSolid_ArcLength$unsafeFromParameterValue = F2(
	function (tree, t) {
		unsafeFromParameterValue:
		while (true) {
			var _p1 = tree;
			if (_p1.ctor === 'Leaf') {
				var _p16 = _p1._0.param7;
				var _p15 = _p1._0.param6;
				var _p14 = _p1._0.param5;
				var _p13 = _p1._0.param4;
				var _p12 = _p1._0.param3;
				var _p11 = _p1._0.param2;
				var _p10 = _p1._0.param1;
				var _p9 = _p1._0.param0;
				var _p8 = _p1._0.length7;
				var _p7 = _p1._0.length6;
				var _p6 = _p1._0.length5;
				var _p5 = _p1._0.length4;
				var _p4 = _p1._0.length3;
				var _p3 = _p1._0.length2;
				var _p2 = _p1._0.length1;
				if (_elm_lang$core$Native_Utils.cmp(t, _p13) < 1) {
					if (_elm_lang$core$Native_Utils.cmp(t, _p11) < 1) {
						if (_elm_lang$core$Native_Utils.cmp(t, _p10) < 1) {
							var paramFraction = (t - _p9) / (_p10 - _p9);
							return A3(_opensolid$geometry$OpenSolid_Scalar$interpolateFrom, _p1._0.length0, _p2, paramFraction);
						} else {
							var paramFraction = (t - _p10) / (_p11 - _p10);
							return A3(_opensolid$geometry$OpenSolid_Scalar$interpolateFrom, _p2, _p3, paramFraction);
						}
					} else {
						if (_elm_lang$core$Native_Utils.cmp(t, _p12) < 1) {
							var paramFraction = (t - _p11) / (_p12 - _p11);
							return A3(_opensolid$geometry$OpenSolid_Scalar$interpolateFrom, _p3, _p4, paramFraction);
						} else {
							var paramFraction = (t - _p12) / (_p13 - _p12);
							return A3(_opensolid$geometry$OpenSolid_Scalar$interpolateFrom, _p4, _p5, paramFraction);
						}
					}
				} else {
					if (_elm_lang$core$Native_Utils.cmp(t, _p15) < 1) {
						if (_elm_lang$core$Native_Utils.cmp(t, _p14) < 1) {
							var paramFraction = (t - _p13) / (_p14 - _p13);
							return A3(_opensolid$geometry$OpenSolid_Scalar$interpolateFrom, _p5, _p6, paramFraction);
						} else {
							var paramFraction = (t - _p14) / (_p15 - _p14);
							return A3(_opensolid$geometry$OpenSolid_Scalar$interpolateFrom, _p6, _p7, paramFraction);
						}
					} else {
						if (_elm_lang$core$Native_Utils.cmp(t, _p16) < 1) {
							var paramFraction = (t - _p15) / (_p16 - _p15);
							return A3(_opensolid$geometry$OpenSolid_Scalar$interpolateFrom, _p7, _p8, paramFraction);
						} else {
							var paramFraction = (t - _p16) / (_p1._0.param8 - _p16);
							return A3(_opensolid$geometry$OpenSolid_Scalar$interpolateFrom, _p8, _p1._0.length8, paramFraction);
						}
					}
				}
			} else {
				var _p17 = _p1._0.rightBranch;
				if (_elm_lang$core$Native_Utils.cmp(
					t,
					_opensolid$geometry$OpenSolid_ArcLength$paramAtStart(_p17)) < 0) {
					var _v2 = _p1._0.leftBranch,
						_v3 = t;
					tree = _v2;
					t = _v3;
					continue unsafeFromParameterValue;
				} else {
					var _v4 = _p17,
						_v5 = t;
					tree = _v4;
					t = _v5;
					continue unsafeFromParameterValue;
				}
			}
		}
	});
var _opensolid$geometry$OpenSolid_ArcLength$fromParameterValue = F2(
	function (_p18, t) {
		var _p19 = _p18;
		return ((_elm_lang$core$Native_Utils.cmp(t, 0) > -1) && (_elm_lang$core$Native_Utils.cmp(t, 1) < 1)) ? _elm_lang$core$Maybe$Just(
			A2(_opensolid$geometry$OpenSolid_ArcLength$unsafeFromParameterValue, _p19._0, t)) : _elm_lang$core$Maybe$Nothing;
	});
var _opensolid$geometry$OpenSolid_ArcLength$lengthAtEnd = function (tree) {
	var _p20 = tree;
	if (_p20.ctor === 'Node') {
		return _p20._0.lengthAtEnd;
	} else {
		return _p20._0.length8;
	}
};
var _opensolid$geometry$OpenSolid_ArcLength$fromParameterization = function (_p21) {
	var _p22 = _p21;
	return _opensolid$geometry$OpenSolid_ArcLength$lengthAtEnd(_p22._0);
};
var _opensolid$geometry$OpenSolid_ArcLength$lengthAtStart = function (tree) {
	var _p23 = tree;
	if (_p23.ctor === 'Node') {
		return _p23._0.lengthAtStart;
	} else {
		return _p23._0.length0;
	}
};
var _opensolid$geometry$OpenSolid_ArcLength$unsafeToParameterValue = F2(
	function (tree, s) {
		unsafeToParameterValue:
		while (true) {
			var _p24 = tree;
			if (_p24.ctor === 'Leaf') {
				var _p39 = _p24._0.param7;
				var _p38 = _p24._0.param6;
				var _p37 = _p24._0.param5;
				var _p36 = _p24._0.param4;
				var _p35 = _p24._0.param3;
				var _p34 = _p24._0.param2;
				var _p33 = _p24._0.param1;
				var _p32 = _p24._0.length7;
				var _p31 = _p24._0.length6;
				var _p30 = _p24._0.length5;
				var _p29 = _p24._0.length4;
				var _p28 = _p24._0.length3;
				var _p27 = _p24._0.length2;
				var _p26 = _p24._0.length1;
				var _p25 = _p24._0.length0;
				if (_elm_lang$core$Native_Utils.cmp(s, _p29) < 1) {
					if (_elm_lang$core$Native_Utils.cmp(s, _p27) < 1) {
						if (_elm_lang$core$Native_Utils.cmp(s, _p26) < 1) {
							var lengthFraction = (s - _p25) / (_p26 - _p25);
							return A3(_opensolid$geometry$OpenSolid_Scalar$interpolateFrom, _p24._0.param0, _p33, lengthFraction);
						} else {
							var lengthFraction = (s - _p26) / (_p27 - _p26);
							return A3(_opensolid$geometry$OpenSolid_Scalar$interpolateFrom, _p33, _p34, lengthFraction);
						}
					} else {
						if (_elm_lang$core$Native_Utils.cmp(s, _p28) < 1) {
							var lengthFraction = (s - _p27) / (_p28 - _p27);
							return A3(_opensolid$geometry$OpenSolid_Scalar$interpolateFrom, _p34, _p35, lengthFraction);
						} else {
							var lengthFraction = (s - _p28) / (_p29 - _p28);
							return A3(_opensolid$geometry$OpenSolid_Scalar$interpolateFrom, _p35, _p36, lengthFraction);
						}
					}
				} else {
					if (_elm_lang$core$Native_Utils.cmp(s, _p31) < 1) {
						if (_elm_lang$core$Native_Utils.cmp(s, _p30) < 1) {
							var lengthFraction = (s - _p29) / (_p30 - _p29);
							return A3(_opensolid$geometry$OpenSolid_Scalar$interpolateFrom, _p36, _p37, lengthFraction);
						} else {
							var lengthFraction = (s - _p30) / (_p31 - _p30);
							return A3(_opensolid$geometry$OpenSolid_Scalar$interpolateFrom, _p37, _p38, lengthFraction);
						}
					} else {
						if (_elm_lang$core$Native_Utils.cmp(s, _p32) < 1) {
							var lengthFraction = (s - _p31) / (_p32 - _p31);
							return A3(_opensolid$geometry$OpenSolid_Scalar$interpolateFrom, _p38, _p39, lengthFraction);
						} else {
							var lengthFraction = (s - _p32) / (_p24._0.length8 - _p32);
							return A3(_opensolid$geometry$OpenSolid_Scalar$interpolateFrom, _p39, _p24._0.param8, lengthFraction);
						}
					}
				}
			} else {
				var _p40 = _p24._0.rightBranch;
				if (_elm_lang$core$Native_Utils.cmp(
					s,
					_opensolid$geometry$OpenSolid_ArcLength$lengthAtStart(_p40)) < 0) {
					var _v11 = _p24._0.leftBranch,
						_v12 = s;
					tree = _v11;
					s = _v12;
					continue unsafeToParameterValue;
				} else {
					var _v13 = _p40,
						_v14 = s;
					tree = _v13;
					s = _v14;
					continue unsafeToParameterValue;
				}
			}
		}
	});
var _opensolid$geometry$OpenSolid_ArcLength$toParameterValue = F2(
	function (_p41, s) {
		var _p42 = _p41;
		var _p43 = _p42._0;
		return ((_elm_lang$core$Native_Utils.cmp(s, 0) > -1) && (_elm_lang$core$Native_Utils.cmp(
			s,
			_opensolid$geometry$OpenSolid_ArcLength$lengthAtEnd(_p43)) < 1)) ? _elm_lang$core$Maybe$Just(
			A2(_opensolid$geometry$OpenSolid_ArcLength$unsafeToParameterValue, _p43, s)) : _elm_lang$core$Maybe$Nothing;
	});
var _opensolid$geometry$OpenSolid_ArcLength$segmentsPerLeaf = 8;
var _opensolid$geometry$OpenSolid_ArcLength$Parameterization = function (a) {
	return {ctor: 'Parameterization', _0: a};
};
var _opensolid$geometry$OpenSolid_ArcLength$Leaf = function (a) {
	return {ctor: 'Leaf', _0: a};
};
var _opensolid$geometry$OpenSolid_ArcLength$Node = function (a) {
	return {ctor: 'Node', _0: a};
};
var _opensolid$geometry$OpenSolid_ArcLength$buildTree = F5(
	function (derivativeMagnitude, lengthAtStart, paramAtStart, paramAtEnd, height) {
		var paramDelta = paramAtEnd - paramAtStart;
		if (_elm_lang$core$Native_Utils.eq(height, 0)) {
			var length0 = lengthAtStart;
			var paramStep = 0.125 * paramDelta;
			var offset = 6.25e-2 * paramDelta;
			var param8 = paramAtEnd;
			var param7 = paramAtEnd - (0.125 * paramDelta);
			var param6 = paramAtEnd - (0.25 * paramDelta);
			var param5 = paramAtEnd - (0.375 * paramDelta);
			var param4 = paramAtStart + (0.5 * paramDelta);
			var param3 = paramAtStart + (0.375 * paramDelta);
			var param2 = paramAtStart + (0.25 * paramDelta);
			var param1 = paramAtStart + (0.125 * paramDelta);
			var param0 = paramAtStart;
			var length1 = length0 + (derivativeMagnitude(param0 + offset) * paramStep);
			var length2 = length1 + (derivativeMagnitude(param1 + offset) * paramStep);
			var length3 = length2 + (derivativeMagnitude(param2 + offset) * paramStep);
			var length4 = length3 + (derivativeMagnitude(param3 + offset) * paramStep);
			var length5 = length4 + (derivativeMagnitude(param4 + offset) * paramStep);
			var length6 = length5 + (derivativeMagnitude(param5 + offset) * paramStep);
			var length7 = length6 + (derivativeMagnitude(param6 + offset) * paramStep);
			var length8 = length7 + (derivativeMagnitude(param7 + offset) * paramStep);
			return _opensolid$geometry$OpenSolid_ArcLength$Leaf(
				{param0: param0, param1: param1, param2: param2, param3: param3, param4: param4, param5: param5, param6: param6, param7: param7, param8: param8, length0: length0, length1: length1, length2: length2, length3: length3, length4: length4, length5: length5, length6: length6, length7: length7, length8: length8});
		} else {
			var paramAtMid = paramAtStart + (0.5 * paramDelta);
			var branchHeight = height - 1;
			var leftBranch = A5(_opensolid$geometry$OpenSolid_ArcLength$buildTree, derivativeMagnitude, lengthAtStart, paramAtStart, paramAtMid, branchHeight);
			var lengthAtLeftEnd = _opensolid$geometry$OpenSolid_ArcLength$lengthAtEnd(leftBranch);
			var rightBranch = A5(_opensolid$geometry$OpenSolid_ArcLength$buildTree, derivativeMagnitude, lengthAtLeftEnd, paramAtMid, paramAtEnd, branchHeight);
			return _opensolid$geometry$OpenSolid_ArcLength$Node(
				{
					lengthAtStart: lengthAtStart,
					lengthAtEnd: _opensolid$geometry$OpenSolid_ArcLength$lengthAtEnd(rightBranch),
					paramAtStart: paramAtStart,
					leftBranch: leftBranch,
					rightBranch: rightBranch
				});
		}
	});
var _opensolid$geometry$OpenSolid_ArcLength$parameterization = function (config) {
	var _p44 = config;
	var tolerance = _p44.tolerance;
	var derivativeMagnitude = _p44.derivativeMagnitude;
	var maxSecondDerivativeMagnitude = _p44.maxSecondDerivativeMagnitude;
	var height = function () {
		if (_elm_lang$core$Native_Utils.cmp(tolerance, 0) < 1) {
			return 0;
		} else {
			var numSegments = maxSecondDerivativeMagnitude / (8 * tolerance);
			var numLeaves = numSegments / _elm_lang$core$Basics$toFloat(_opensolid$geometry$OpenSolid_ArcLength$segmentsPerLeaf);
			return A2(
				_elm_lang$core$Basics$max,
				0,
				_elm_lang$core$Basics$ceiling(
					A2(_elm_lang$core$Basics$logBase, 2, numLeaves)));
		}
	}();
	return _opensolid$geometry$OpenSolid_ArcLength$Parameterization(
		A5(_opensolid$geometry$OpenSolid_ArcLength$buildTree, derivativeMagnitude, 0, 0, 1, height));
};

var _opensolid$geometry$OpenSolid_Bootstrap_Arc2d$with = _opensolid$geometry$OpenSolid_Geometry_Internal$Arc2d;

var _opensolid$geometry$OpenSolid_Circle2d$toArc = function (_p0) {
	var _p1 = _p0;
	var _p3 = _p1._0.centerPoint;
	var _p2 = _opensolid$geometry$OpenSolid_Point2d$coordinates(_p3);
	var x0 = _p2._0;
	var y0 = _p2._1;
	return _opensolid$geometry$OpenSolid_Bootstrap_Arc2d$with(
		{
			centerPoint: _p3,
			startPoint: _opensolid$geometry$OpenSolid_Point2d$fromCoordinates(
				{ctor: '_Tuple2', _0: x0 + _p1._0.radius, _1: y0}),
			sweptAngle: 2 * _elm_lang$core$Basics$pi
		});
};
var _opensolid$geometry$OpenSolid_Circle2d$radius = function (_p4) {
	var _p5 = _p4;
	return _p5._0.radius;
};
var _opensolid$geometry$OpenSolid_Circle2d$diameter = function (circle) {
	return 2 * _opensolid$geometry$OpenSolid_Circle2d$radius(circle);
};
var _opensolid$geometry$OpenSolid_Circle2d$area = function (circle) {
	var r = _opensolid$geometry$OpenSolid_Circle2d$radius(circle);
	return (_elm_lang$core$Basics$pi * r) * r;
};
var _opensolid$geometry$OpenSolid_Circle2d$circumference = function (circle) {
	return (2 * _elm_lang$core$Basics$pi) * _opensolid$geometry$OpenSolid_Circle2d$radius(circle);
};
var _opensolid$geometry$OpenSolid_Circle2d$centerPoint = function (_p6) {
	var _p7 = _p6;
	return _p7._0.centerPoint;
};
var _opensolid$geometry$OpenSolid_Circle2d$contains = F2(
	function (point, circle) {
		var r = _opensolid$geometry$OpenSolid_Circle2d$radius(circle);
		return _elm_lang$core$Native_Utils.cmp(
			A2(
				_opensolid$geometry$OpenSolid_Point2d$squaredDistanceFrom,
				_opensolid$geometry$OpenSolid_Circle2d$centerPoint(circle),
				point),
			r * r) < 1;
	});
var _opensolid$geometry$OpenSolid_Circle2d$boundingBox = function (circle) {
	var r = _opensolid$geometry$OpenSolid_Circle2d$radius(circle);
	var _p8 = _opensolid$geometry$OpenSolid_Point2d$coordinates(
		_opensolid$geometry$OpenSolid_Circle2d$centerPoint(circle));
	var x = _p8._0;
	var y = _p8._1;
	return _opensolid$geometry$OpenSolid_BoundingBox2d$with(
		{minX: x - r, maxX: x + r, minY: y - r, maxY: y + r});
};
var _opensolid$geometry$OpenSolid_Circle2d$with = function (properties) {
	return _opensolid$geometry$OpenSolid_Geometry_Internal$Circle2d(
		_elm_lang$core$Native_Utils.update(
			properties,
			{
				radius: _elm_lang$core$Basics$abs(properties.radius)
			}));
};
var _opensolid$geometry$OpenSolid_Circle2d$unit = _opensolid$geometry$OpenSolid_Circle2d$with(
	{centerPoint: _opensolid$geometry$OpenSolid_Point2d$origin, radius: 1});
var _opensolid$geometry$OpenSolid_Circle2d$throughPoints = function (points) {
	return A2(
		_elm_lang$core$Maybe$map,
		function (p0) {
			var _p9 = points;
			var p1 = _p9._0;
			var p2 = _p9._1;
			var p3 = _p9._2;
			var r1 = A2(_opensolid$geometry$OpenSolid_Point2d$distanceFrom, p0, p1);
			var r2 = A2(_opensolid$geometry$OpenSolid_Point2d$distanceFrom, p0, p2);
			var r3 = A2(_opensolid$geometry$OpenSolid_Point2d$distanceFrom, p0, p3);
			return _opensolid$geometry$OpenSolid_Circle2d$with(
				{centerPoint: p0, radius: ((r1 + r2) + r3) / 3});
		},
		_opensolid$geometry$OpenSolid_Point2d$circumcenter(points));
};
var _opensolid$geometry$OpenSolid_Circle2d$scaleAbout = F2(
	function (point, scale) {
		var scalePoint = A2(_opensolid$geometry$OpenSolid_Point2d$scaleAbout, point, scale);
		return function (circle) {
			return _opensolid$geometry$OpenSolid_Circle2d$with(
				{
					centerPoint: scalePoint(
						_opensolid$geometry$OpenSolid_Circle2d$centerPoint(circle)),
					radius: scale * _opensolid$geometry$OpenSolid_Circle2d$radius(circle)
				});
		};
	});
var _opensolid$geometry$OpenSolid_Circle2d$rotateAround = F2(
	function (point, angle) {
		var rotatePoint = A2(_opensolid$geometry$OpenSolid_Point2d$rotateAround, point, angle);
		return function (circle) {
			return _opensolid$geometry$OpenSolid_Circle2d$with(
				{
					centerPoint: rotatePoint(
						_opensolid$geometry$OpenSolid_Circle2d$centerPoint(circle)),
					radius: _opensolid$geometry$OpenSolid_Circle2d$radius(circle)
				});
		};
	});
var _opensolid$geometry$OpenSolid_Circle2d$translateBy = function (displacement) {
	var translatePoint = _opensolid$geometry$OpenSolid_Point2d$translateBy(displacement);
	return function (circle) {
		return _opensolid$geometry$OpenSolid_Circle2d$with(
			{
				centerPoint: translatePoint(
					_opensolid$geometry$OpenSolid_Circle2d$centerPoint(circle)),
				radius: _opensolid$geometry$OpenSolid_Circle2d$radius(circle)
			});
	};
};
var _opensolid$geometry$OpenSolid_Circle2d$mirrorAcross = function (axis) {
	var mirrorPoint = _opensolid$geometry$OpenSolid_Point2d$mirrorAcross(axis);
	return function (circle) {
		return _opensolid$geometry$OpenSolid_Circle2d$with(
			{
				centerPoint: mirrorPoint(
					_opensolid$geometry$OpenSolid_Circle2d$centerPoint(circle)),
				radius: _opensolid$geometry$OpenSolid_Circle2d$radius(circle)
			});
	};
};
var _opensolid$geometry$OpenSolid_Circle2d$relativeTo = function (frame) {
	var relativePoint = _opensolid$geometry$OpenSolid_Point2d$relativeTo(frame);
	return function (circle) {
		return _opensolid$geometry$OpenSolid_Circle2d$with(
			{
				centerPoint: relativePoint(
					_opensolid$geometry$OpenSolid_Circle2d$centerPoint(circle)),
				radius: _opensolid$geometry$OpenSolid_Circle2d$radius(circle)
			});
	};
};
var _opensolid$geometry$OpenSolid_Circle2d$placeIn = function (frame) {
	var placePoint = _opensolid$geometry$OpenSolid_Point2d$placeIn(frame);
	return function (circle) {
		return _opensolid$geometry$OpenSolid_Circle2d$with(
			{
				centerPoint: placePoint(
					_opensolid$geometry$OpenSolid_Circle2d$centerPoint(circle)),
				radius: _opensolid$geometry$OpenSolid_Circle2d$radius(circle)
			});
	};
};

var _opensolid$geometry$OpenSolid_QuadraticSpline2d$parameterValueToArcLength = F2(
	function (_p0, t) {
		var _p1 = _p0;
		return A2(_opensolid$geometry$OpenSolid_ArcLength$fromParameterValue, _p1._1, t);
	});
var _opensolid$geometry$OpenSolid_QuadraticSpline2d$arcLengthToParameterValue = F2(
	function (_p2, s) {
		var _p3 = _p2;
		return A2(_opensolid$geometry$OpenSolid_ArcLength$toParameterValue, _p3._1, s);
	});
var _opensolid$geometry$OpenSolid_QuadraticSpline2d$arcLength = function (_p4) {
	var _p5 = _p4;
	return _opensolid$geometry$OpenSolid_ArcLength$fromParameterization(_p5._1);
};
var _opensolid$geometry$OpenSolid_QuadraticSpline2d$endPoint = function (_p6) {
	var _p7 = _p6;
	return _p7._0._2;
};
var _opensolid$geometry$OpenSolid_QuadraticSpline2d$startPoint = function (_p8) {
	var _p9 = _p8;
	return _p9._0._0;
};
var _opensolid$geometry$OpenSolid_QuadraticSpline2d$controlPoints = function (_p10) {
	var _p11 = _p10;
	return _p11._0;
};
var _opensolid$geometry$OpenSolid_QuadraticSpline2d$startDerivative = function (spline) {
	var _p12 = _opensolid$geometry$OpenSolid_QuadraticSpline2d$controlPoints(spline);
	var p1 = _p12._0;
	var p2 = _p12._1;
	return A2(
		_opensolid$geometry$OpenSolid_Vector2d$scaleBy,
		2,
		A2(_opensolid$geometry$OpenSolid_Vector2d$from, p1, p2));
};
var _opensolid$geometry$OpenSolid_QuadraticSpline2d$endDerivative = function (spline) {
	var _p13 = _opensolid$geometry$OpenSolid_QuadraticSpline2d$controlPoints(spline);
	var p2 = _p13._1;
	var p3 = _p13._2;
	return A2(
		_opensolid$geometry$OpenSolid_Vector2d$scaleBy,
		2,
		A2(_opensolid$geometry$OpenSolid_Vector2d$from, p2, p3));
};
var _opensolid$geometry$OpenSolid_QuadraticSpline2d$pointOn = F2(
	function (spline, t) {
		var _p14 = _opensolid$geometry$OpenSolid_QuadraticSpline2d$controlPoints(spline);
		var p1 = _p14._0;
		var p2 = _p14._1;
		var p3 = _p14._2;
		var q1 = A3(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, p1, p2, t);
		var q2 = A3(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, p2, p3, t);
		return A3(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, q1, q2, t);
	});
var _opensolid$geometry$OpenSolid_QuadraticSpline2d$pointAlong = F2(
	function (_p15, s) {
		var _p16 = _p15;
		return A2(
			_elm_lang$core$Maybe$map,
			_opensolid$geometry$OpenSolid_QuadraticSpline2d$pointOn(_p16._0),
			A2(_opensolid$geometry$OpenSolid_ArcLength$toParameterValue, _p16._1, s));
	});
var _opensolid$geometry$OpenSolid_QuadraticSpline2d$derivative = function (spline) {
	var _p17 = _opensolid$geometry$OpenSolid_QuadraticSpline2d$controlPoints(spline);
	var p1 = _p17._0;
	var p2 = _p17._1;
	var p3 = _p17._2;
	var v1 = A2(_opensolid$geometry$OpenSolid_Vector2d$from, p1, p2);
	var v2 = A2(_opensolid$geometry$OpenSolid_Vector2d$from, p2, p3);
	return function (t) {
		return A2(
			_opensolid$geometry$OpenSolid_Vector2d$scaleBy,
			2,
			A3(_opensolid$geometry$OpenSolid_Vector2d$interpolateFrom, v1, v2, t));
	};
};
var _opensolid$geometry$OpenSolid_QuadraticSpline2d$tangentAlong = F2(
	function (_p18, s) {
		var _p19 = _p18;
		return A2(
			_elm_lang$core$Maybe$andThen,
			_opensolid$geometry$OpenSolid_Vector2d$direction,
			A2(
				_elm_lang$core$Maybe$map,
				_opensolid$geometry$OpenSolid_QuadraticSpline2d$derivative(_p19._0),
				A2(_opensolid$geometry$OpenSolid_ArcLength$toParameterValue, _p19._1, s)));
	});
var _opensolid$geometry$OpenSolid_QuadraticSpline2d$derivativeMagnitude = function (spline) {
	var _p20 = _opensolid$geometry$OpenSolid_QuadraticSpline2d$controlPoints(spline);
	var p1 = _p20._0;
	var p2 = _p20._1;
	var p3 = _p20._2;
	var _p21 = _opensolid$geometry$OpenSolid_Point2d$coordinates(p1);
	var x1 = _p21._0;
	var y1 = _p21._1;
	var _p22 = _opensolid$geometry$OpenSolid_Point2d$coordinates(p2);
	var x2 = _p22._0;
	var y2 = _p22._1;
	var x12 = x2 - x1;
	var y12 = y2 - y1;
	var _p23 = _opensolid$geometry$OpenSolid_Point2d$coordinates(p3);
	var x3 = _p23._0;
	var y3 = _p23._1;
	var x23 = x3 - x2;
	var x123 = x23 - x12;
	var y23 = y3 - y2;
	var y123 = y23 - y12;
	return function (t) {
		var y13 = y12 + (t * y123);
		var x13 = x12 + (t * x123);
		return 2 * _elm_lang$core$Basics$sqrt((x13 * x13) + (y13 * y13));
	};
};
var _opensolid$geometry$OpenSolid_QuadraticSpline2d$evaluate = F2(
	function (spline, t) {
		var _p24 = _opensolid$geometry$OpenSolid_QuadraticSpline2d$controlPoints(spline);
		var p1 = _p24._0;
		var p2 = _p24._1;
		var p3 = _p24._2;
		var q1 = A3(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, p1, p2, t);
		var q2 = A3(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, p2, p3, t);
		return {
			ctor: '_Tuple2',
			_0: A3(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, q1, q2, t),
			_1: A2(
				_opensolid$geometry$OpenSolid_Vector2d$scaleBy,
				2,
				A2(_opensolid$geometry$OpenSolid_Vector2d$from, q1, q2))
		};
	});
var _opensolid$geometry$OpenSolid_QuadraticSpline2d$secondDerivative = function (spline) {
	var _p25 = _opensolid$geometry$OpenSolid_QuadraticSpline2d$controlPoints(spline);
	var p1 = _p25._0;
	var p2 = _p25._1;
	var p3 = _p25._2;
	var v1 = A2(_opensolid$geometry$OpenSolid_Vector2d$from, p1, p2);
	var v2 = A2(_opensolid$geometry$OpenSolid_Vector2d$from, p2, p3);
	return A2(
		_opensolid$geometry$OpenSolid_Vector2d$scaleBy,
		2,
		A2(_opensolid$geometry$OpenSolid_Vector2d$difference, v2, v1));
};
var _opensolid$geometry$OpenSolid_QuadraticSpline2d$fromControlPoints = _opensolid$geometry$OpenSolid_Geometry_Internal$QuadraticSpline2d;
var _opensolid$geometry$OpenSolid_QuadraticSpline2d$reverse = function (spline) {
	var _p26 = _opensolid$geometry$OpenSolid_QuadraticSpline2d$controlPoints(spline);
	var p1 = _p26._0;
	var p2 = _p26._1;
	var p3 = _p26._2;
	return _opensolid$geometry$OpenSolid_QuadraticSpline2d$fromControlPoints(
		{ctor: '_Tuple3', _0: p3, _1: p2, _2: p1});
};
var _opensolid$geometry$OpenSolid_QuadraticSpline2d$mapControlPoints = F2(
	function ($function, spline) {
		var _p27 = _opensolid$geometry$OpenSolid_QuadraticSpline2d$controlPoints(spline);
		var p1 = _p27._0;
		var p2 = _p27._1;
		var p3 = _p27._2;
		return _opensolid$geometry$OpenSolid_QuadraticSpline2d$fromControlPoints(
			{
				ctor: '_Tuple3',
				_0: $function(p1),
				_1: $function(p2),
				_2: $function(p3)
			});
	});
var _opensolid$geometry$OpenSolid_QuadraticSpline2d$scaleAbout = F2(
	function (point, scale) {
		return _opensolid$geometry$OpenSolid_QuadraticSpline2d$mapControlPoints(
			A2(_opensolid$geometry$OpenSolid_Point2d$scaleAbout, point, scale));
	});
var _opensolid$geometry$OpenSolid_QuadraticSpline2d$rotateAround = F2(
	function (point, angle) {
		return _opensolid$geometry$OpenSolid_QuadraticSpline2d$mapControlPoints(
			A2(_opensolid$geometry$OpenSolid_Point2d$rotateAround, point, angle));
	});
var _opensolid$geometry$OpenSolid_QuadraticSpline2d$translateBy = function (displacement) {
	return _opensolid$geometry$OpenSolid_QuadraticSpline2d$mapControlPoints(
		_opensolid$geometry$OpenSolid_Point2d$translateBy(displacement));
};
var _opensolid$geometry$OpenSolid_QuadraticSpline2d$mirrorAcross = function (axis) {
	return _opensolid$geometry$OpenSolid_QuadraticSpline2d$mapControlPoints(
		_opensolid$geometry$OpenSolid_Point2d$mirrorAcross(axis));
};
var _opensolid$geometry$OpenSolid_QuadraticSpline2d$relativeTo = function (frame) {
	return _opensolid$geometry$OpenSolid_QuadraticSpline2d$mapControlPoints(
		_opensolid$geometry$OpenSolid_Point2d$relativeTo(frame));
};
var _opensolid$geometry$OpenSolid_QuadraticSpline2d$placeIn = function (frame) {
	return _opensolid$geometry$OpenSolid_QuadraticSpline2d$mapControlPoints(
		_opensolid$geometry$OpenSolid_Point2d$placeIn(frame));
};
var _opensolid$geometry$OpenSolid_QuadraticSpline2d$splitAt = F2(
	function (t, spline) {
		var _p28 = _opensolid$geometry$OpenSolid_QuadraticSpline2d$controlPoints(spline);
		var p1 = _p28._0;
		var p2 = _p28._1;
		var p3 = _p28._2;
		var q1 = A3(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, p1, p2, t);
		var q2 = A3(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, p2, p3, t);
		var r = A3(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, q1, q2, t);
		return {
			ctor: '_Tuple2',
			_0: _opensolid$geometry$OpenSolid_QuadraticSpline2d$fromControlPoints(
				{ctor: '_Tuple3', _0: p1, _1: q1, _2: r}),
			_1: _opensolid$geometry$OpenSolid_QuadraticSpline2d$fromControlPoints(
				{ctor: '_Tuple3', _0: r, _1: q2, _2: p3})
		};
	});
var _opensolid$geometry$OpenSolid_QuadraticSpline2d$bisect = _opensolid$geometry$OpenSolid_QuadraticSpline2d$splitAt(0.5);
var _opensolid$geometry$OpenSolid_QuadraticSpline2d$ArcLengthParameterized = F2(
	function (a, b) {
		return {ctor: 'ArcLengthParameterized', _0: a, _1: b};
	});
var _opensolid$geometry$OpenSolid_QuadraticSpline2d$arcLengthParameterized = F2(
	function (tolerance, spline) {
		var maxSecondDerivativeMagnitude = _opensolid$geometry$OpenSolid_Vector2d$length(
			_opensolid$geometry$OpenSolid_QuadraticSpline2d$secondDerivative(spline));
		var parameterization = _opensolid$geometry$OpenSolid_ArcLength$parameterization(
			{
				tolerance: tolerance,
				derivativeMagnitude: _opensolid$geometry$OpenSolid_QuadraticSpline2d$derivativeMagnitude(spline),
				maxSecondDerivativeMagnitude: maxSecondDerivativeMagnitude
			});
		return A2(_opensolid$geometry$OpenSolid_QuadraticSpline2d$ArcLengthParameterized, spline, parameterization);
	});

var _opensolid$geometry$OpenSolid_CubicSpline2d$parameterValueToArcLength = F2(
	function (_p0, t) {
		var _p1 = _p0;
		return A2(_opensolid$geometry$OpenSolid_ArcLength$fromParameterValue, _p1._1, t);
	});
var _opensolid$geometry$OpenSolid_CubicSpline2d$arcLengthToParameterValue = F2(
	function (_p2, s) {
		var _p3 = _p2;
		return A2(_opensolid$geometry$OpenSolid_ArcLength$toParameterValue, _p3._1, s);
	});
var _opensolid$geometry$OpenSolid_CubicSpline2d$arcLength = function (_p4) {
	var _p5 = _p4;
	return _opensolid$geometry$OpenSolid_ArcLength$fromParameterization(_p5._1);
};
var _opensolid$geometry$OpenSolid_CubicSpline2d$endPoint = function (_p6) {
	var _p7 = _p6;
	return _p7._0._3;
};
var _opensolid$geometry$OpenSolid_CubicSpline2d$startPoint = function (_p8) {
	var _p9 = _p8;
	return _p9._0._0;
};
var _opensolid$geometry$OpenSolid_CubicSpline2d$controlPoints = function (_p10) {
	var _p11 = _p10;
	return _p11._0;
};
var _opensolid$geometry$OpenSolid_CubicSpline2d$startDerivative = function (spline) {
	var _p12 = _opensolid$geometry$OpenSolid_CubicSpline2d$controlPoints(spline);
	var p1 = _p12._0;
	var p2 = _p12._1;
	return A2(
		_opensolid$geometry$OpenSolid_Vector2d$scaleBy,
		3,
		A2(_opensolid$geometry$OpenSolid_Vector2d$from, p1, p2));
};
var _opensolid$geometry$OpenSolid_CubicSpline2d$endDerivative = function (spline) {
	var _p13 = _opensolid$geometry$OpenSolid_CubicSpline2d$controlPoints(spline);
	var p3 = _p13._2;
	var p4 = _p13._3;
	return A2(
		_opensolid$geometry$OpenSolid_Vector2d$scaleBy,
		3,
		A2(_opensolid$geometry$OpenSolid_Vector2d$from, p3, p4));
};
var _opensolid$geometry$OpenSolid_CubicSpline2d$pointOn = F2(
	function (spline, t) {
		var _p14 = _opensolid$geometry$OpenSolid_CubicSpline2d$controlPoints(spline);
		var p1 = _p14._0;
		var p2 = _p14._1;
		var p3 = _p14._2;
		var p4 = _p14._3;
		var q1 = A3(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, p1, p2, t);
		var q2 = A3(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, p2, p3, t);
		var r1 = A3(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, q1, q2, t);
		var q3 = A3(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, p3, p4, t);
		var r2 = A3(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, q2, q3, t);
		return A3(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, r1, r2, t);
	});
var _opensolid$geometry$OpenSolid_CubicSpline2d$pointAlong = F2(
	function (_p15, s) {
		var _p16 = _p15;
		return A2(
			_elm_lang$core$Maybe$map,
			_opensolid$geometry$OpenSolid_CubicSpline2d$pointOn(_p16._0),
			A2(_opensolid$geometry$OpenSolid_ArcLength$toParameterValue, _p16._1, s));
	});
var _opensolid$geometry$OpenSolid_CubicSpline2d$derivative = F2(
	function (spline, t) {
		var _p17 = _opensolid$geometry$OpenSolid_CubicSpline2d$controlPoints(spline);
		var p1 = _p17._0;
		var p2 = _p17._1;
		var p3 = _p17._2;
		var p4 = _p17._3;
		var _p18 = _opensolid$geometry$OpenSolid_Point2d$coordinates(p1);
		var x1 = _p18._0;
		var y1 = _p18._1;
		var _p19 = _opensolid$geometry$OpenSolid_Point2d$coordinates(p2);
		var x2 = _p19._0;
		var y2 = _p19._1;
		var vx1 = x2 - x1;
		var vy1 = y2 - y1;
		var _p20 = _opensolid$geometry$OpenSolid_Point2d$coordinates(p3);
		var x3 = _p20._0;
		var y3 = _p20._1;
		var vx2 = x3 - x2;
		var vy2 = y3 - y2;
		var _p21 = _opensolid$geometry$OpenSolid_Point2d$coordinates(p4);
		var x4 = _p21._0;
		var y4 = _p21._1;
		var vx3 = x4 - x3;
		var vy3 = y4 - y3;
		if (_elm_lang$core$Native_Utils.cmp(t, 0.5) < 1) {
			var wy2 = vy2 + (t * (vy3 - vy2));
			var wx2 = vx2 + (t * (vx3 - vx2));
			var wy1 = vy1 + (t * (vy2 - vy1));
			var wx1 = vx1 + (t * (vx2 - vx1));
			return _opensolid$geometry$OpenSolid_Vector2d$fromComponents(
				{ctor: '_Tuple2', _0: 3 * (wx1 + (t * (wx2 - wx1))), _1: 3 * (wy1 + (t * (wy2 - wy1)))});
		} else {
			var u = 1 - t;
			var wx1 = vx2 + (u * (vx1 - vx2));
			var wy1 = vy2 + (u * (vy1 - vy2));
			var wx2 = vx3 + (u * (vx2 - vx3));
			var wy2 = vy3 + (u * (vy2 - vy3));
			return _opensolid$geometry$OpenSolid_Vector2d$fromComponents(
				{ctor: '_Tuple2', _0: 3 * (wx2 + (u * (wx1 - wx2))), _1: 3 * (wy2 + (u * (wy1 - wy2)))});
		}
	});
var _opensolid$geometry$OpenSolid_CubicSpline2d$tangentAlong = F2(
	function (_p22, s) {
		var _p23 = _p22;
		return A2(
			_elm_lang$core$Maybe$andThen,
			_opensolid$geometry$OpenSolid_Vector2d$direction,
			A2(
				_elm_lang$core$Maybe$map,
				_opensolid$geometry$OpenSolid_CubicSpline2d$derivative(_p23._0),
				A2(_opensolid$geometry$OpenSolid_ArcLength$toParameterValue, _p23._1, s)));
	});
var _opensolid$geometry$OpenSolid_CubicSpline2d$derivativeMagnitude = function (spline) {
	var _p24 = _opensolid$geometry$OpenSolid_CubicSpline2d$controlPoints(spline);
	var p1 = _p24._0;
	var p2 = _p24._1;
	var p3 = _p24._2;
	var p4 = _p24._3;
	var _p25 = _opensolid$geometry$OpenSolid_Point2d$coordinates(p1);
	var x1 = _p25._0;
	var y1 = _p25._1;
	var _p26 = _opensolid$geometry$OpenSolid_Point2d$coordinates(p2);
	var x2 = _p26._0;
	var y2 = _p26._1;
	var x12 = x2 - x1;
	var y12 = y2 - y1;
	var _p27 = _opensolid$geometry$OpenSolid_Point2d$coordinates(p3);
	var x3 = _p27._0;
	var y3 = _p27._1;
	var x23 = x3 - x2;
	var x123 = x23 - x12;
	var y23 = y3 - y2;
	var y123 = y23 - y12;
	var _p28 = _opensolid$geometry$OpenSolid_Point2d$coordinates(p4);
	var x4 = _p28._0;
	var y4 = _p28._1;
	var x34 = x4 - x3;
	var x234 = x34 - x23;
	var y34 = y4 - y3;
	var y234 = y34 - y23;
	return function (t) {
		var y24 = y23 + (t * y234);
		var x24 = x23 + (t * x234);
		var y13 = y12 + (t * y123);
		var y14 = y13 + (t * (y24 - y13));
		var x13 = x12 + (t * x123);
		var x14 = x13 + (t * (x24 - x13));
		return 3 * _elm_lang$core$Basics$sqrt((x14 * x14) + (y14 * y14));
	};
};
var _opensolid$geometry$OpenSolid_CubicSpline2d$evaluate = F2(
	function (spline, t) {
		var _p29 = _opensolid$geometry$OpenSolid_CubicSpline2d$controlPoints(spline);
		var p1 = _p29._0;
		var p2 = _p29._1;
		var p3 = _p29._2;
		var p4 = _p29._3;
		var q1 = A3(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, p1, p2, t);
		var q2 = A3(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, p2, p3, t);
		var r1 = A3(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, q1, q2, t);
		var q3 = A3(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, p3, p4, t);
		var r2 = A3(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, q2, q3, t);
		return {
			ctor: '_Tuple2',
			_0: A3(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, r1, r2, t),
			_1: A2(
				_opensolid$geometry$OpenSolid_Vector2d$scaleBy,
				3,
				A2(_opensolid$geometry$OpenSolid_Vector2d$from, r1, r2))
		};
	});
var _opensolid$geometry$OpenSolid_CubicSpline2d$maxSecondDerivativeMagnitude = function (spline) {
	var _p30 = _opensolid$geometry$OpenSolid_CubicSpline2d$controlPoints(spline);
	var p1 = _p30._0;
	var p2 = _p30._1;
	var p3 = _p30._2;
	var p4 = _p30._3;
	var u1 = A2(_opensolid$geometry$OpenSolid_Vector2d$from, p1, p2);
	var u2 = A2(_opensolid$geometry$OpenSolid_Vector2d$from, p2, p3);
	var v1 = A2(_opensolid$geometry$OpenSolid_Vector2d$difference, u2, u1);
	var u3 = A2(_opensolid$geometry$OpenSolid_Vector2d$from, p3, p4);
	var v2 = A2(_opensolid$geometry$OpenSolid_Vector2d$difference, u3, u2);
	return 6 * A2(
		_elm_lang$core$Basics$max,
		_opensolid$geometry$OpenSolid_Vector2d$length(v1),
		_opensolid$geometry$OpenSolid_Vector2d$length(v2));
};
var _opensolid$geometry$OpenSolid_CubicSpline2d$fromControlPoints = _opensolid$geometry$OpenSolid_Geometry_Internal$CubicSpline2d;
var _opensolid$geometry$OpenSolid_CubicSpline2d$hermite = F2(
	function (_p32, _p31) {
		var _p33 = _p32;
		var _p36 = _p33._0;
		var _p34 = _p31;
		var _p35 = _p34._0;
		var endControlPoint = A2(
			_opensolid$geometry$OpenSolid_Point2d$translateBy,
			A2(_opensolid$geometry$OpenSolid_Vector2d$scaleBy, -1 / 3, _p34._1),
			_p35);
		var startControlPoint = A2(
			_opensolid$geometry$OpenSolid_Point2d$translateBy,
			A2(_opensolid$geometry$OpenSolid_Vector2d$scaleBy, 1 / 3, _p33._1),
			_p36);
		return _opensolid$geometry$OpenSolid_CubicSpline2d$fromControlPoints(
			{ctor: '_Tuple4', _0: _p36, _1: startControlPoint, _2: endControlPoint, _3: _p35});
	});
var _opensolid$geometry$OpenSolid_CubicSpline2d$fromQuadraticSpline = function (quadraticSpline) {
	var _p37 = _opensolid$geometry$OpenSolid_QuadraticSpline2d$controlPoints(quadraticSpline);
	var p1 = _p37._0;
	var p2 = _p37._1;
	var p3 = _p37._2;
	return _opensolid$geometry$OpenSolid_CubicSpline2d$fromControlPoints(
		{
			ctor: '_Tuple4',
			_0: p1,
			_1: A3(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, p1, p2, 2 / 3),
			_2: A3(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, p3, p2, 2 / 3),
			_3: p3
		});
};
var _opensolid$geometry$OpenSolid_CubicSpline2d$mapControlPoints = F2(
	function ($function, spline) {
		var _p38 = _opensolid$geometry$OpenSolid_CubicSpline2d$controlPoints(spline);
		var p1 = _p38._0;
		var p2 = _p38._1;
		var p3 = _p38._2;
		var p4 = _p38._3;
		return _opensolid$geometry$OpenSolid_CubicSpline2d$fromControlPoints(
			{
				ctor: '_Tuple4',
				_0: $function(p1),
				_1: $function(p2),
				_2: $function(p3),
				_3: $function(p4)
			});
	});
var _opensolid$geometry$OpenSolid_CubicSpline2d$scaleAbout = F2(
	function (point, scale) {
		return _opensolid$geometry$OpenSolid_CubicSpline2d$mapControlPoints(
			A2(_opensolid$geometry$OpenSolid_Point2d$scaleAbout, point, scale));
	});
var _opensolid$geometry$OpenSolid_CubicSpline2d$rotateAround = F2(
	function (point, angle) {
		return _opensolid$geometry$OpenSolid_CubicSpline2d$mapControlPoints(
			A2(_opensolid$geometry$OpenSolid_Point2d$rotateAround, point, angle));
	});
var _opensolid$geometry$OpenSolid_CubicSpline2d$translateBy = function (displacement) {
	return _opensolid$geometry$OpenSolid_CubicSpline2d$mapControlPoints(
		_opensolid$geometry$OpenSolid_Point2d$translateBy(displacement));
};
var _opensolid$geometry$OpenSolid_CubicSpline2d$mirrorAcross = function (axis) {
	return _opensolid$geometry$OpenSolid_CubicSpline2d$mapControlPoints(
		_opensolid$geometry$OpenSolid_Point2d$mirrorAcross(axis));
};
var _opensolid$geometry$OpenSolid_CubicSpline2d$relativeTo = function (frame) {
	return _opensolid$geometry$OpenSolid_CubicSpline2d$mapControlPoints(
		_opensolid$geometry$OpenSolid_Point2d$relativeTo(frame));
};
var _opensolid$geometry$OpenSolid_CubicSpline2d$placeIn = function (frame) {
	return _opensolid$geometry$OpenSolid_CubicSpline2d$mapControlPoints(
		_opensolid$geometry$OpenSolid_Point2d$placeIn(frame));
};
var _opensolid$geometry$OpenSolid_CubicSpline2d$reverse = function (spline) {
	var _p39 = _opensolid$geometry$OpenSolid_CubicSpline2d$controlPoints(spline);
	var p1 = _p39._0;
	var p2 = _p39._1;
	var p3 = _p39._2;
	var p4 = _p39._3;
	return _opensolid$geometry$OpenSolid_CubicSpline2d$fromControlPoints(
		{ctor: '_Tuple4', _0: p4, _1: p3, _2: p2, _3: p1});
};
var _opensolid$geometry$OpenSolid_CubicSpline2d$splitAt = F2(
	function (t, spline) {
		var _p40 = _opensolid$geometry$OpenSolid_CubicSpline2d$controlPoints(spline);
		var p1 = _p40._0;
		var p2 = _p40._1;
		var p3 = _p40._2;
		var p4 = _p40._3;
		var q1 = A3(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, p1, p2, t);
		var q2 = A3(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, p2, p3, t);
		var r1 = A3(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, q1, q2, t);
		var q3 = A3(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, p3, p4, t);
		var r2 = A3(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, q2, q3, t);
		var s = A3(_opensolid$geometry$OpenSolid_Point2d$interpolateFrom, r1, r2, t);
		return {
			ctor: '_Tuple2',
			_0: _opensolid$geometry$OpenSolid_CubicSpline2d$fromControlPoints(
				{ctor: '_Tuple4', _0: p1, _1: q1, _2: r1, _3: s}),
			_1: _opensolid$geometry$OpenSolid_CubicSpline2d$fromControlPoints(
				{ctor: '_Tuple4', _0: s, _1: r2, _2: q3, _3: p4})
		};
	});
var _opensolid$geometry$OpenSolid_CubicSpline2d$bisect = _opensolid$geometry$OpenSolid_CubicSpline2d$splitAt(0.5);
var _opensolid$geometry$OpenSolid_CubicSpline2d$ArcLengthParameterized = F2(
	function (a, b) {
		return {ctor: 'ArcLengthParameterized', _0: a, _1: b};
	});
var _opensolid$geometry$OpenSolid_CubicSpline2d$arcLengthParameterized = F2(
	function (tolerance, spline) {
		var parameterization = _opensolid$geometry$OpenSolid_ArcLength$parameterization(
			{
				tolerance: tolerance,
				derivativeMagnitude: _opensolid$geometry$OpenSolid_CubicSpline2d$derivativeMagnitude(spline),
				maxSecondDerivativeMagnitude: _opensolid$geometry$OpenSolid_CubicSpline2d$maxSecondDerivativeMagnitude(spline)
			});
		return A2(_opensolid$geometry$OpenSolid_CubicSpline2d$ArcLengthParameterized, spline, parameterization);
	});

var _opensolid$geometry$OpenSolid_Ellipse2d$transformBy = F2(
	function (axesTransformation, _p0) {
		var _p1 = _p0;
		var _p2 = _p1._0;
		return _opensolid$geometry$OpenSolid_Geometry_Internal$Ellipse2d(
			_elm_lang$core$Native_Utils.update(
				_p2,
				{
					axes: axesTransformation(_p2.axes)
				}));
	});
var _opensolid$geometry$OpenSolid_Ellipse2d$rotateAround = F2(
	function (point, angle) {
		return _opensolid$geometry$OpenSolid_Ellipse2d$transformBy(
			A2(_opensolid$geometry$OpenSolid_Frame2d$rotateAround, point, angle));
	});
var _opensolid$geometry$OpenSolid_Ellipse2d$translateBy = function (displacement) {
	return _opensolid$geometry$OpenSolid_Ellipse2d$transformBy(
		_opensolid$geometry$OpenSolid_Frame2d$translateBy(displacement));
};
var _opensolid$geometry$OpenSolid_Ellipse2d$mirrorAcross = function (axis) {
	return _opensolid$geometry$OpenSolid_Ellipse2d$transformBy(
		_opensolid$geometry$OpenSolid_Frame2d$mirrorAcross(axis));
};
var _opensolid$geometry$OpenSolid_Ellipse2d$relativeTo = function (frame) {
	return _opensolid$geometry$OpenSolid_Ellipse2d$transformBy(
		_opensolid$geometry$OpenSolid_Frame2d$relativeTo(frame));
};
var _opensolid$geometry$OpenSolid_Ellipse2d$placeIn = function (frame) {
	return _opensolid$geometry$OpenSolid_Ellipse2d$transformBy(
		_opensolid$geometry$OpenSolid_Frame2d$placeIn(frame));
};
var _opensolid$geometry$OpenSolid_Ellipse2d$yRadius = function (_p3) {
	var _p4 = _p3;
	return _p4._0.yRadius;
};
var _opensolid$geometry$OpenSolid_Ellipse2d$xRadius = function (_p5) {
	var _p6 = _p5;
	return _p6._0.xRadius;
};
var _opensolid$geometry$OpenSolid_Ellipse2d$area = function (ellipse) {
	return (_elm_lang$core$Basics$pi * _opensolid$geometry$OpenSolid_Ellipse2d$xRadius(ellipse)) * _opensolid$geometry$OpenSolid_Ellipse2d$yRadius(ellipse);
};
var _opensolid$geometry$OpenSolid_Ellipse2d$axes = function (_p7) {
	var _p8 = _p7;
	return _p8._0.axes;
};
var _opensolid$geometry$OpenSolid_Ellipse2d$xAxis = function (ellipse) {
	return _opensolid$geometry$OpenSolid_Frame2d$xAxis(
		_opensolid$geometry$OpenSolid_Ellipse2d$axes(ellipse));
};
var _opensolid$geometry$OpenSolid_Ellipse2d$yAxis = function (ellipse) {
	return _opensolid$geometry$OpenSolid_Frame2d$yAxis(
		_opensolid$geometry$OpenSolid_Ellipse2d$axes(ellipse));
};
var _opensolid$geometry$OpenSolid_Ellipse2d$xDirection = function (ellipse) {
	return _opensolid$geometry$OpenSolid_Frame2d$xDirection(
		_opensolid$geometry$OpenSolid_Ellipse2d$axes(ellipse));
};
var _opensolid$geometry$OpenSolid_Ellipse2d$yDirection = function (ellipse) {
	return _opensolid$geometry$OpenSolid_Frame2d$yDirection(
		_opensolid$geometry$OpenSolid_Ellipse2d$axes(ellipse));
};
var _opensolid$geometry$OpenSolid_Ellipse2d$centerPoint = function (ellipse) {
	return _opensolid$geometry$OpenSolid_Frame2d$originPoint(
		_opensolid$geometry$OpenSolid_Ellipse2d$axes(ellipse));
};
var _opensolid$geometry$OpenSolid_Ellipse2d$scaleAbout = F3(
	function (point, scale, ellipse) {
		var newCenterPoint = A3(
			_opensolid$geometry$OpenSolid_Point2d$scaleAbout,
			point,
			scale,
			_opensolid$geometry$OpenSolid_Ellipse2d$centerPoint(ellipse));
		var newAxes = (_elm_lang$core$Native_Utils.cmp(scale, 0) > -1) ? _opensolid$geometry$OpenSolid_Frame2d$unsafe(
			{
				originPoint: newCenterPoint,
				xDirection: _opensolid$geometry$OpenSolid_Ellipse2d$xDirection(ellipse),
				yDirection: _opensolid$geometry$OpenSolid_Ellipse2d$yDirection(ellipse)
			}) : _opensolid$geometry$OpenSolid_Frame2d$unsafe(
			{
				originPoint: newCenterPoint,
				xDirection: _opensolid$geometry$OpenSolid_Direction2d$flip(
					_opensolid$geometry$OpenSolid_Ellipse2d$xDirection(ellipse)),
				yDirection: _opensolid$geometry$OpenSolid_Direction2d$flip(
					_opensolid$geometry$OpenSolid_Ellipse2d$yDirection(ellipse))
			});
		return _opensolid$geometry$OpenSolid_Geometry_Internal$Ellipse2d(
			{
				axes: newAxes,
				xRadius: _elm_lang$core$Basics$abs(
					scale * _opensolid$geometry$OpenSolid_Ellipse2d$xRadius(ellipse)),
				yRadius: _elm_lang$core$Basics$abs(
					scale * _opensolid$geometry$OpenSolid_Ellipse2d$yRadius(ellipse))
			});
	});
var _opensolid$geometry$OpenSolid_Ellipse2d$with = function (_p9) {
	var _p10 = _p9;
	return _opensolid$geometry$OpenSolid_Geometry_Internal$Ellipse2d(
		{
			axes: _opensolid$geometry$OpenSolid_Frame2d$with(
				{originPoint: _p10.centerPoint, xDirection: _p10.xDirection}),
			xRadius: _elm_lang$core$Basics$abs(_p10.xRadius),
			yRadius: _elm_lang$core$Basics$abs(_p10.yRadius)
		});
};

var _opensolid$geometry$OpenSolid_Interval$cosIncludesMax = function (_p0) {
	var _p1 = _p0;
	var maxBranch = _elm_lang$core$Basics$floor(_p1._0.maxValue / (2 * _elm_lang$core$Basics$pi));
	var minBranch = _elm_lang$core$Basics$floor(_p1._0.minValue / (2 * _elm_lang$core$Basics$pi));
	return !_elm_lang$core$Native_Utils.eq(minBranch, maxBranch);
};
var _opensolid$geometry$OpenSolid_Interval$shiftBy = F2(
	function (delta, _p2) {
		var _p3 = _p2;
		return _opensolid$geometry$OpenSolid_Geometry_Internal$Interval(
			{minValue: _p3._0.minValue + delta, maxValue: _p3._0.maxValue + delta});
	});
var _opensolid$geometry$OpenSolid_Interval$cosIncludesMinMax = function (interval) {
	return {
		ctor: '_Tuple2',
		_0: _opensolid$geometry$OpenSolid_Interval$cosIncludesMax(
			A2(_opensolid$geometry$OpenSolid_Interval$shiftBy, _elm_lang$core$Basics$pi, interval)),
		_1: _opensolid$geometry$OpenSolid_Interval$cosIncludesMax(interval)
	};
};
var _opensolid$geometry$OpenSolid_Interval$sinIncludesMinMax = function (interval) {
	return _opensolid$geometry$OpenSolid_Interval$cosIncludesMinMax(
		A2(_opensolid$geometry$OpenSolid_Interval$shiftBy, (0 - _elm_lang$core$Basics$pi) / 2, interval));
};
var _opensolid$geometry$OpenSolid_Interval$isSingleton = function (_p4) {
	var _p5 = _p4;
	return _elm_lang$core$Native_Utils.eq(_p5._0.minValue, _p5._0.maxValue);
};
var _opensolid$geometry$OpenSolid_Interval$contains = F2(
	function (value, _p6) {
		var _p7 = _p6;
		return (_elm_lang$core$Native_Utils.cmp(_p7._0.minValue, value) < 1) && (_elm_lang$core$Native_Utils.cmp(value, _p7._0.maxValue) < 1);
	});
var _opensolid$geometry$OpenSolid_Interval$interpolate = F2(
	function (t, _p8) {
		var _p9 = _p8;
		return A3(_opensolid$geometry$OpenSolid_Scalar$interpolateFrom, _p9._0.minValue, _p9._0.maxValue, t);
	});
var _opensolid$geometry$OpenSolid_Interval$width = function (_p10) {
	var _p11 = _p10;
	return _p11._0.maxValue - _p11._0.minValue;
};
var _opensolid$geometry$OpenSolid_Interval$midpoint = function (_p12) {
	var _p13 = _p12;
	var _p14 = _p13._0.minValue;
	return _p14 + (0.5 * (_p13._0.maxValue - _p14));
};
var _opensolid$geometry$OpenSolid_Interval$maxValue = function (_p15) {
	var _p16 = _p15;
	return _p16._0.maxValue;
};
var _opensolid$geometry$OpenSolid_Interval$minValue = function (_p17) {
	var _p18 = _p17;
	return _p18._0.minValue;
};
var _opensolid$geometry$OpenSolid_Interval$intersects = F2(
	function (firstInterval, secondInterval) {
		return (_elm_lang$core$Native_Utils.cmp(
			_opensolid$geometry$OpenSolid_Interval$minValue(firstInterval),
			_opensolid$geometry$OpenSolid_Interval$maxValue(secondInterval)) < 1) && (_elm_lang$core$Native_Utils.cmp(
			_opensolid$geometry$OpenSolid_Interval$maxValue(firstInterval),
			_opensolid$geometry$OpenSolid_Interval$minValue(secondInterval)) > -1);
	});
var _opensolid$geometry$OpenSolid_Interval$isContainedIn = F2(
	function (firstInterval, secondInterval) {
		return (_elm_lang$core$Native_Utils.cmp(
			_opensolid$geometry$OpenSolid_Interval$minValue(secondInterval),
			_opensolid$geometry$OpenSolid_Interval$minValue(firstInterval)) > -1) && (_elm_lang$core$Native_Utils.cmp(
			_opensolid$geometry$OpenSolid_Interval$maxValue(secondInterval),
			_opensolid$geometry$OpenSolid_Interval$maxValue(firstInterval)) < 1);
	});
var _opensolid$geometry$OpenSolid_Interval$extrema = function (_p19) {
	var _p20 = _p19;
	return _p20._0;
};
var _opensolid$geometry$OpenSolid_Interval$intersection = F2(
	function (firstInterval, secondInterval) {
		var resultMax = A2(
			_elm_lang$core$Basics$min,
			_opensolid$geometry$OpenSolid_Interval$maxValue(firstInterval),
			_opensolid$geometry$OpenSolid_Interval$maxValue(secondInterval));
		var resultMin = A2(
			_elm_lang$core$Basics$max,
			_opensolid$geometry$OpenSolid_Interval$minValue(firstInterval),
			_opensolid$geometry$OpenSolid_Interval$minValue(secondInterval));
		return (_elm_lang$core$Native_Utils.cmp(resultMin, resultMax) < 1) ? _elm_lang$core$Maybe$Just(
			_opensolid$geometry$OpenSolid_Geometry_Internal$Interval(
				{minValue: resultMin, maxValue: resultMax})) : _elm_lang$core$Maybe$Nothing;
	});
var _opensolid$geometry$OpenSolid_Interval$hull = F2(
	function (firstInterval, secondInterval) {
		return _opensolid$geometry$OpenSolid_Geometry_Internal$Interval(
			{
				minValue: A2(
					_elm_lang$core$Basics$min,
					_opensolid$geometry$OpenSolid_Interval$minValue(firstInterval),
					_opensolid$geometry$OpenSolid_Interval$minValue(secondInterval)),
				maxValue: A2(
					_elm_lang$core$Basics$max,
					_opensolid$geometry$OpenSolid_Interval$maxValue(firstInterval),
					_opensolid$geometry$OpenSolid_Interval$maxValue(secondInterval))
			});
	});
var _opensolid$geometry$OpenSolid_Interval$hullOf = function (intervals) {
	var _p21 = intervals;
	if (_p21.ctor === '::') {
		return _elm_lang$core$Maybe$Just(
			A3(_elm_lang$core$List$foldl, _opensolid$geometry$OpenSolid_Interval$hull, _p21._0, _p21._1));
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _opensolid$geometry$OpenSolid_Interval$singleton = function (value) {
	return _opensolid$geometry$OpenSolid_Geometry_Internal$Interval(
		{minValue: value, maxValue: value});
};
var _opensolid$geometry$OpenSolid_Interval$sin = function (_p22) {
	var _p23 = _p22;
	var _p27 = _p23._0.minValue;
	var _p26 = _p23._0.maxValue;
	var _p25 = _p23;
	if (_opensolid$geometry$OpenSolid_Interval$isSingleton(_p25)) {
		return _opensolid$geometry$OpenSolid_Interval$singleton(
			_elm_lang$core$Basics$sin(_p27));
	} else {
		var _p24 = _opensolid$geometry$OpenSolid_Interval$sinIncludesMinMax(_p25);
		var includesMin = _p24._0;
		var includesMax = _p24._1;
		var newMin = includesMin ? -1 : A2(
			_elm_lang$core$Basics$min,
			_elm_lang$core$Basics$sin(_p27),
			_elm_lang$core$Basics$sin(_p26));
		var newMax = includesMax ? 1 : A2(
			_elm_lang$core$Basics$max,
			_elm_lang$core$Basics$sin(_p27),
			_elm_lang$core$Basics$sin(_p26));
		return _opensolid$geometry$OpenSolid_Geometry_Internal$Interval(
			{minValue: newMin, maxValue: newMax});
	}
};
var _opensolid$geometry$OpenSolid_Interval$cos = function (_p28) {
	var _p29 = _p28;
	var _p33 = _p29._0.minValue;
	var _p32 = _p29._0.maxValue;
	var _p31 = _p29;
	if (_opensolid$geometry$OpenSolid_Interval$isSingleton(_p31)) {
		return _opensolid$geometry$OpenSolid_Interval$singleton(
			_elm_lang$core$Basics$cos(_p33));
	} else {
		var _p30 = _opensolid$geometry$OpenSolid_Interval$cosIncludesMinMax(_p31);
		var includesMin = _p30._0;
		var includesMax = _p30._1;
		var newMin = includesMin ? -1 : A2(
			_elm_lang$core$Basics$min,
			_elm_lang$core$Basics$cos(_p33),
			_elm_lang$core$Basics$cos(_p32));
		var newMax = includesMax ? 1 : A2(
			_elm_lang$core$Basics$max,
			_elm_lang$core$Basics$cos(_p33),
			_elm_lang$core$Basics$cos(_p32));
		return _opensolid$geometry$OpenSolid_Geometry_Internal$Interval(
			{minValue: newMin, maxValue: newMax});
	}
};
var _opensolid$geometry$OpenSolid_Interval$with = function (extrema) {
	return (_elm_lang$core$Native_Utils.cmp(extrema.minValue, extrema.maxValue) < 1) ? _opensolid$geometry$OpenSolid_Geometry_Internal$Interval(extrema) : _opensolid$geometry$OpenSolid_Geometry_Internal$Interval(
		{minValue: extrema.maxValue, maxValue: extrema.minValue});
};

var _opensolid$geometry$OpenSolid_EllipticalArc2d$parameterValueToArcLength = F2(
	function (_p0, t) {
		var _p1 = _p0;
		return A2(_opensolid$geometry$OpenSolid_ArcLength$fromParameterValue, _p1._1, t);
	});
var _opensolid$geometry$OpenSolid_EllipticalArc2d$arcLengthToParameterValue = F2(
	function (_p2, s) {
		var _p3 = _p2;
		return A2(_opensolid$geometry$OpenSolid_ArcLength$toParameterValue, _p3._1, s);
	});
var _opensolid$geometry$OpenSolid_EllipticalArc2d$arcLength = function (_p4) {
	var _p5 = _p4;
	return _opensolid$geometry$OpenSolid_ArcLength$fromParameterization(_p5._1);
};
var _opensolid$geometry$OpenSolid_EllipticalArc2d$transformBy = F2(
	function (ellipseTransformation, _p6) {
		var _p7 = _p6;
		var _p8 = _p7._0;
		return _opensolid$geometry$OpenSolid_Geometry_Internal$EllipticalArc2d(
			_elm_lang$core$Native_Utils.update(
				_p8,
				{
					ellipse: ellipseTransformation(_p8.ellipse)
				}));
	});
var _opensolid$geometry$OpenSolid_EllipticalArc2d$scaleAbout = F2(
	function (point, scale) {
		return _opensolid$geometry$OpenSolid_EllipticalArc2d$transformBy(
			A2(_opensolid$geometry$OpenSolid_Ellipse2d$scaleAbout, point, scale));
	});
var _opensolid$geometry$OpenSolid_EllipticalArc2d$rotateAround = F2(
	function (point, angle) {
		return _opensolid$geometry$OpenSolid_EllipticalArc2d$transformBy(
			A2(_opensolid$geometry$OpenSolid_Ellipse2d$rotateAround, point, angle));
	});
var _opensolid$geometry$OpenSolid_EllipticalArc2d$translateBy = function (displacement) {
	return _opensolid$geometry$OpenSolid_EllipticalArc2d$transformBy(
		_opensolid$geometry$OpenSolid_Ellipse2d$translateBy(displacement));
};
var _opensolid$geometry$OpenSolid_EllipticalArc2d$mirrorAcross = function (axis) {
	return _opensolid$geometry$OpenSolid_EllipticalArc2d$transformBy(
		_opensolid$geometry$OpenSolid_Ellipse2d$mirrorAcross(axis));
};
var _opensolid$geometry$OpenSolid_EllipticalArc2d$relativeTo = function (frame) {
	return _opensolid$geometry$OpenSolid_EllipticalArc2d$transformBy(
		_opensolid$geometry$OpenSolid_Ellipse2d$relativeTo(frame));
};
var _opensolid$geometry$OpenSolid_EllipticalArc2d$placeIn = function (frame) {
	return _opensolid$geometry$OpenSolid_EllipticalArc2d$transformBy(
		_opensolid$geometry$OpenSolid_Ellipse2d$placeIn(frame));
};
var _opensolid$geometry$OpenSolid_EllipticalArc2d$reverse = function (_p9) {
	var _p10 = _p9;
	var _p11 = _p10._0;
	return _opensolid$geometry$OpenSolid_Geometry_Internal$EllipticalArc2d(
		_elm_lang$core$Native_Utils.update(
			_p11,
			{startAngle: _p11.startAngle + _p11.sweptAngle, sweptAngle: 0 - _p11.sweptAngle}));
};
var _opensolid$geometry$OpenSolid_EllipticalArc2d$sweptAngle = function (_p12) {
	var _p13 = _p12;
	return _p13._0.sweptAngle;
};
var _opensolid$geometry$OpenSolid_EllipticalArc2d$startAngle = function (_p14) {
	var _p15 = _p14;
	return _p15._0.startAngle;
};
var _opensolid$geometry$OpenSolid_EllipticalArc2d$yRadius = function (_p16) {
	var _p17 = _p16;
	return _opensolid$geometry$OpenSolid_Ellipse2d$yRadius(_p17._0.ellipse);
};
var _opensolid$geometry$OpenSolid_EllipticalArc2d$xRadius = function (_p18) {
	var _p19 = _p18;
	return _opensolid$geometry$OpenSolid_Ellipse2d$xRadius(_p19._0.ellipse);
};
var _opensolid$geometry$OpenSolid_EllipticalArc2d$maxSecondDerivativeMagnitude = function (arc) {
	var ry = _opensolid$geometry$OpenSolid_EllipticalArc2d$yRadius(arc);
	var rx = _opensolid$geometry$OpenSolid_EllipticalArc2d$xRadius(arc);
	var dTheta = _opensolid$geometry$OpenSolid_EllipticalArc2d$sweptAngle(arc);
	var dThetaSquared = dTheta * dTheta;
	var kx = dThetaSquared * rx;
	var ky = dThetaSquared * ry;
	var theta0 = _opensolid$geometry$OpenSolid_EllipticalArc2d$startAngle(arc);
	var theta1 = theta0 + dTheta;
	var thetaInterval = A2(_opensolid$geometry$OpenSolid_Scalar$hull, theta0, theta1);
	var sinThetaInterval = _opensolid$geometry$OpenSolid_Interval$sin(thetaInterval);
	var includeKx = A2(_opensolid$geometry$OpenSolid_Interval$contains, 0, sinThetaInterval);
	var includeKy = _elm_lang$core$Native_Utils.eq(
		_opensolid$geometry$OpenSolid_Interval$maxValue(sinThetaInterval),
		1) || _elm_lang$core$Native_Utils.eq(
		_opensolid$geometry$OpenSolid_Interval$minValue(sinThetaInterval),
		-1);
	if ((_elm_lang$core$Native_Utils.cmp(kx, ky) > -1) && includeKx) {
		return kx;
	} else {
		if ((_elm_lang$core$Native_Utils.cmp(ky, kx) > -1) && includeKy) {
			return ky;
		} else {
			var sinTheta1 = _elm_lang$core$Basics$sin(theta1);
			var cosTheta1 = _elm_lang$core$Basics$cos(theta1);
			var sinTheta0 = _elm_lang$core$Basics$sin(theta0);
			var cosTheta0 = _elm_lang$core$Basics$cos(theta0);
			var rySquared = ry * ry;
			var rxSquared = rx * rx;
			var d0 = ((rxSquared * cosTheta0) * cosTheta0) + ((rySquared * sinTheta0) * sinTheta0);
			var d1 = ((rxSquared * cosTheta1) * cosTheta1) + ((rySquared * sinTheta1) * sinTheta1);
			return dThetaSquared * _elm_lang$core$Basics$sqrt(
				A2(_elm_lang$core$Basics$max, d0, d1));
		}
	}
};
var _opensolid$geometry$OpenSolid_EllipticalArc2d$derivativeMagnitude = function (arc) {
	var dTheta = _opensolid$geometry$OpenSolid_EllipticalArc2d$sweptAngle(arc);
	var absDTheta = _elm_lang$core$Basics$abs(dTheta);
	var theta0 = _opensolid$geometry$OpenSolid_EllipticalArc2d$startAngle(arc);
	var ry = _opensolid$geometry$OpenSolid_EllipticalArc2d$yRadius(arc);
	var rx = _opensolid$geometry$OpenSolid_EllipticalArc2d$xRadius(arc);
	return function (t) {
		var theta = theta0 + (t * dTheta);
		var dx = rx * _elm_lang$core$Basics$sin(theta);
		var dy = ry * _elm_lang$core$Basics$cos(theta);
		return absDTheta * _elm_lang$core$Basics$sqrt((dx * dx) + (dy * dy));
	};
};
var _opensolid$geometry$OpenSolid_EllipticalArc2d$yAxis = function (_p20) {
	var _p21 = _p20;
	return _opensolid$geometry$OpenSolid_Ellipse2d$yAxis(_p21._0.ellipse);
};
var _opensolid$geometry$OpenSolid_EllipticalArc2d$xAxis = function (_p22) {
	var _p23 = _p22;
	return _opensolid$geometry$OpenSolid_Ellipse2d$xAxis(_p23._0.ellipse);
};
var _opensolid$geometry$OpenSolid_EllipticalArc2d$axes = function (_p24) {
	var _p25 = _p24;
	return _opensolid$geometry$OpenSolid_Ellipse2d$axes(_p25._0.ellipse);
};
var _opensolid$geometry$OpenSolid_EllipticalArc2d$pointOn = F2(
	function (arc, t) {
		var theta = _opensolid$geometry$OpenSolid_EllipticalArc2d$startAngle(arc) + (t * _opensolid$geometry$OpenSolid_EllipticalArc2d$sweptAngle(arc));
		return A2(
			_opensolid$geometry$OpenSolid_Point2d$placeIn,
			_opensolid$geometry$OpenSolid_EllipticalArc2d$axes(arc),
			_opensolid$geometry$OpenSolid_Point2d$fromCoordinates(
				{
					ctor: '_Tuple2',
					_0: _opensolid$geometry$OpenSolid_EllipticalArc2d$xRadius(arc) * _elm_lang$core$Basics$cos(theta),
					_1: _opensolid$geometry$OpenSolid_EllipticalArc2d$yRadius(arc) * _elm_lang$core$Basics$sin(theta)
				}));
	});
var _opensolid$geometry$OpenSolid_EllipticalArc2d$startPoint = function (arc) {
	return A2(_opensolid$geometry$OpenSolid_EllipticalArc2d$pointOn, arc, 0);
};
var _opensolid$geometry$OpenSolid_EllipticalArc2d$endPoint = function (arc) {
	return A2(_opensolid$geometry$OpenSolid_EllipticalArc2d$pointOn, arc, 1);
};
var _opensolid$geometry$OpenSolid_EllipticalArc2d$pointAlong = F2(
	function (_p26, s) {
		var _p27 = _p26;
		return A2(
			_elm_lang$core$Maybe$map,
			_opensolid$geometry$OpenSolid_EllipticalArc2d$pointOn(_p27._0),
			A2(_opensolid$geometry$OpenSolid_ArcLength$toParameterValue, _p27._1, s));
	});
var _opensolid$geometry$OpenSolid_EllipticalArc2d$derivative = F2(
	function (arc, t) {
		var deltaTheta = _opensolid$geometry$OpenSolid_EllipticalArc2d$sweptAngle(arc);
		var theta = _opensolid$geometry$OpenSolid_EllipticalArc2d$startAngle(arc) + (t * deltaTheta);
		return A2(
			_opensolid$geometry$OpenSolid_Vector2d$placeIn,
			_opensolid$geometry$OpenSolid_EllipticalArc2d$axes(arc),
			_opensolid$geometry$OpenSolid_Vector2d$fromComponents(
				{
					ctor: '_Tuple2',
					_0: ((0 - _opensolid$geometry$OpenSolid_EllipticalArc2d$xRadius(arc)) * deltaTheta) * _elm_lang$core$Basics$sin(theta),
					_1: (_opensolid$geometry$OpenSolid_EllipticalArc2d$yRadius(arc) * deltaTheta) * _elm_lang$core$Basics$cos(theta)
				}));
	});
var _opensolid$geometry$OpenSolid_EllipticalArc2d$tangentAlong = F2(
	function (_p28, s) {
		var _p29 = _p28;
		return A2(
			_elm_lang$core$Maybe$andThen,
			_opensolid$geometry$OpenSolid_Vector2d$direction,
			A2(
				_elm_lang$core$Maybe$map,
				_opensolid$geometry$OpenSolid_EllipticalArc2d$derivative(_p29._0),
				A2(_opensolid$geometry$OpenSolid_ArcLength$toParameterValue, _p29._1, s)));
	});
var _opensolid$geometry$OpenSolid_EllipticalArc2d$xDirection = function (arc) {
	return _opensolid$geometry$OpenSolid_Frame2d$xDirection(
		_opensolid$geometry$OpenSolid_EllipticalArc2d$axes(arc));
};
var _opensolid$geometry$OpenSolid_EllipticalArc2d$yDirection = function (arc) {
	return _opensolid$geometry$OpenSolid_Frame2d$yDirection(
		_opensolid$geometry$OpenSolid_EllipticalArc2d$axes(arc));
};
var _opensolid$geometry$OpenSolid_EllipticalArc2d$centerPoint = function (_p30) {
	var _p31 = _p30;
	return _opensolid$geometry$OpenSolid_Ellipse2d$centerPoint(_p31._0.ellipse);
};
var _opensolid$geometry$OpenSolid_EllipticalArc2d$with = function (_p32) {
	var _p33 = _p32;
	return _opensolid$geometry$OpenSolid_Geometry_Internal$EllipticalArc2d(
		{
			ellipse: _opensolid$geometry$OpenSolid_Ellipse2d$with(
				{centerPoint: _p33.centerPoint, xDirection: _p33.xDirection, xRadius: _p33.xRadius, yRadius: _p33.yRadius}),
			startAngle: _p33.startAngle,
			sweptAngle: _p33.sweptAngle
		});
};
var _opensolid$geometry$OpenSolid_EllipticalArc2d$fromEndpoints = function (_p34) {
	var _p35 = _p34;
	var _p41 = _p35.yRadius;
	var _p40 = _p35.xRadius;
	var _p39 = _p35.xDirection;
	if ((_elm_lang$core$Native_Utils.cmp(_p40, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(_p41, 0) > 0)) {
		var temporaryFrame = _opensolid$geometry$OpenSolid_Frame2d$with(
			{
				originPoint: A2(
					_opensolid$geometry$OpenSolid_Point2d$translateBy,
					_opensolid$geometry$OpenSolid_Vector2d$with(
						{direction: _p39, length: 0 - _p40}),
					_p35.startPoint),
				xDirection: _p39
			});
		var _p36 = _opensolid$geometry$OpenSolid_Point2d$coordinates(
			A2(_opensolid$geometry$OpenSolid_Point2d$relativeTo, temporaryFrame, _p35.endPoint));
		var x2Ellipse = _p36._0;
		var y2Ellipse = _p36._1;
		var x2 = x2Ellipse / _p40;
		var cx2 = x2 - 1;
		var y2 = y2Ellipse / _p41;
		var cy2 = y2;
		var d = _elm_lang$core$Basics$sqrt((cx2 * cx2) + (cy2 * cy2)) / 2;
		if ((_elm_lang$core$Native_Utils.cmp(d, 0) > 0) && (_elm_lang$core$Native_Utils.cmp(d, 1) < 0)) {
			var yDirection = _opensolid$geometry$OpenSolid_Direction2d$perpendicularTo(_p39);
			var offsetAngle = _elm_lang$core$Basics$acos(d);
			var midAngle = A2(_elm_lang$core$Basics$atan2, 0 - cy2, 0 - cx2);
			var _p37 = function () {
				var _p38 = _p35.sweptAngle;
				switch (_p38.ctor) {
					case 'SmallPositive':
						return {ctor: '_Tuple2', _0: midAngle + offsetAngle, _1: _elm_lang$core$Basics$pi - (2 * offsetAngle)};
					case 'SmallNegative':
						return {ctor: '_Tuple2', _0: midAngle - offsetAngle, _1: (0 - _elm_lang$core$Basics$pi) + (2 * offsetAngle)};
					case 'LargePositive':
						return {ctor: '_Tuple2', _0: midAngle - offsetAngle, _1: _elm_lang$core$Basics$pi + (2 * offsetAngle)};
					default:
						return {ctor: '_Tuple2', _0: midAngle + offsetAngle, _1: (0 - _elm_lang$core$Basics$pi) - (2 * offsetAngle)};
				}
			}();
			var startAngle = _p37._0;
			var sweptAngleInRadians = _p37._1;
			var centerPoint = A2(
				_opensolid$geometry$OpenSolid_Point2d$placeIn,
				temporaryFrame,
				_opensolid$geometry$OpenSolid_Point2d$fromCoordinates(
					{
						ctor: '_Tuple2',
						_0: _p40 - (_p40 * _elm_lang$core$Basics$cos(startAngle)),
						_1: (0 - _p41) * _elm_lang$core$Basics$sin(startAngle)
					}));
			return _elm_lang$core$Maybe$Just(
				_opensolid$geometry$OpenSolid_EllipticalArc2d$with(
					{
						centerPoint: centerPoint,
						xDirection: _p39,
						xRadius: _p40,
						yRadius: _p41,
						startAngle: (_elm_lang$core$Native_Utils.cmp(startAngle, _elm_lang$core$Basics$pi) > 0) ? (startAngle - (2 * _elm_lang$core$Basics$pi)) : ((_elm_lang$core$Native_Utils.cmp(startAngle, 0 - _elm_lang$core$Basics$pi) < 0) ? (startAngle + (2 * _elm_lang$core$Basics$pi)) : startAngle),
						sweptAngle: sweptAngleInRadians
					}));
		} else {
			return _elm_lang$core$Maybe$Nothing;
		}
	} else {
		return _elm_lang$core$Maybe$Nothing;
	}
};
var _opensolid$geometry$OpenSolid_EllipticalArc2d$LargeNegative = {ctor: 'LargeNegative'};
var _opensolid$geometry$OpenSolid_EllipticalArc2d$largeNegative = _opensolid$geometry$OpenSolid_EllipticalArc2d$LargeNegative;
var _opensolid$geometry$OpenSolid_EllipticalArc2d$LargePositive = {ctor: 'LargePositive'};
var _opensolid$geometry$OpenSolid_EllipticalArc2d$largePositive = _opensolid$geometry$OpenSolid_EllipticalArc2d$LargePositive;
var _opensolid$geometry$OpenSolid_EllipticalArc2d$SmallNegative = {ctor: 'SmallNegative'};
var _opensolid$geometry$OpenSolid_EllipticalArc2d$smallNegative = _opensolid$geometry$OpenSolid_EllipticalArc2d$SmallNegative;
var _opensolid$geometry$OpenSolid_EllipticalArc2d$SmallPositive = {ctor: 'SmallPositive'};
var _opensolid$geometry$OpenSolid_EllipticalArc2d$smallPositive = _opensolid$geometry$OpenSolid_EllipticalArc2d$SmallPositive;
var _opensolid$geometry$OpenSolid_EllipticalArc2d$ArcLengthParameterized = F2(
	function (a, b) {
		return {ctor: 'ArcLengthParameterized', _0: a, _1: b};
	});
var _opensolid$geometry$OpenSolid_EllipticalArc2d$arcLengthParameterized = F2(
	function (tolerance, arc) {
		var parameterization = _opensolid$geometry$OpenSolid_ArcLength$parameterization(
			{
				tolerance: tolerance,
				derivativeMagnitude: _opensolid$geometry$OpenSolid_EllipticalArc2d$derivativeMagnitude(arc),
				maxSecondDerivativeMagnitude: _opensolid$geometry$OpenSolid_EllipticalArc2d$maxSecondDerivativeMagnitude(arc)
			});
		return A2(_opensolid$geometry$OpenSolid_EllipticalArc2d$ArcLengthParameterized, arc, parameterization);
	});

var _opensolid$geometry$OpenSolid_Triangle2d$vertices = function (_p0) {
	var _p1 = _p0;
	return _p1._0;
};
var _opensolid$geometry$OpenSolid_Triangle2d$edges = function (triangle) {
	var _p2 = _opensolid$geometry$OpenSolid_Triangle2d$vertices(triangle);
	var p1 = _p2._0;
	var p2 = _p2._1;
	var p3 = _p2._2;
	return {
		ctor: '_Tuple3',
		_0: _opensolid$geometry$OpenSolid_LineSegment2d$fromEndpoints(
			{ctor: '_Tuple2', _0: p1, _1: p2}),
		_1: _opensolid$geometry$OpenSolid_LineSegment2d$fromEndpoints(
			{ctor: '_Tuple2', _0: p2, _1: p3}),
		_2: _opensolid$geometry$OpenSolid_LineSegment2d$fromEndpoints(
			{ctor: '_Tuple2', _0: p3, _1: p1})
	};
};
var _opensolid$geometry$OpenSolid_Triangle2d$centroid = function (triangle) {
	var _p3 = _opensolid$geometry$OpenSolid_Triangle2d$vertices(triangle);
	var p1 = _p3._0;
	var p2 = _p3._1;
	var p3 = _p3._2;
	var firstVector = A2(_opensolid$geometry$OpenSolid_Vector2d$from, p1, p2);
	var secondVector = A2(_opensolid$geometry$OpenSolid_Vector2d$from, p1, p3);
	var displacement = A2(
		_opensolid$geometry$OpenSolid_Vector2d$scaleBy,
		1.0 / 3.0,
		A2(_opensolid$geometry$OpenSolid_Vector2d$sum, firstVector, secondVector));
	return A2(_opensolid$geometry$OpenSolid_Point2d$translateBy, displacement, p1);
};
var _opensolid$geometry$OpenSolid_Triangle2d$contains = F2(
	function (point, triangle) {
		var crossProduct = F2(
			function (startVertex, endVertex) {
				var segmentVector = A2(_opensolid$geometry$OpenSolid_Vector2d$from, startVertex, endVertex);
				var vectorToPoint = A2(_opensolid$geometry$OpenSolid_Vector2d$from, startVertex, point);
				return A2(_opensolid$geometry$OpenSolid_Vector2d$crossProduct, segmentVector, vectorToPoint);
			});
		var _p4 = _opensolid$geometry$OpenSolid_Triangle2d$vertices(triangle);
		var p1 = _p4._0;
		var p2 = _p4._1;
		var p3 = _p4._2;
		var firstProduct = A2(crossProduct, p1, p2);
		var secondProduct = A2(crossProduct, p2, p3);
		var thirdProduct = A2(crossProduct, p3, p1);
		return ((_elm_lang$core$Native_Utils.cmp(firstProduct, 0) > -1) && ((_elm_lang$core$Native_Utils.cmp(secondProduct, 0) > -1) && (_elm_lang$core$Native_Utils.cmp(thirdProduct, 0) > -1))) || ((_elm_lang$core$Native_Utils.cmp(firstProduct, 0) < 1) && ((_elm_lang$core$Native_Utils.cmp(secondProduct, 0) < 1) && (_elm_lang$core$Native_Utils.cmp(thirdProduct, 0) < 1)));
	});
var _opensolid$geometry$OpenSolid_Triangle2d$counterclockwiseArea = function (triangle) {
	var _p5 = _opensolid$geometry$OpenSolid_Triangle2d$vertices(triangle);
	var p1 = _p5._0;
	var p2 = _p5._1;
	var p3 = _p5._2;
	var firstVector = A2(_opensolid$geometry$OpenSolid_Vector2d$from, p1, p2);
	var secondVector = A2(_opensolid$geometry$OpenSolid_Vector2d$from, p1, p3);
	return 0.5 * A2(_opensolid$geometry$OpenSolid_Vector2d$crossProduct, firstVector, secondVector);
};
var _opensolid$geometry$OpenSolid_Triangle2d$area = function (_p6) {
	return _elm_lang$core$Basics$abs(
		_opensolid$geometry$OpenSolid_Triangle2d$counterclockwiseArea(_p6));
};
var _opensolid$geometry$OpenSolid_Triangle2d$clockwiseArea = function (triangle) {
	return 0 - _opensolid$geometry$OpenSolid_Triangle2d$counterclockwiseArea(triangle);
};
var _opensolid$geometry$OpenSolid_Triangle2d$boundingBox = function (triangle) {
	var _p7 = _opensolid$geometry$OpenSolid_Triangle2d$vertices(triangle);
	var p1 = _p7._0;
	var p2 = _p7._1;
	var p3 = _p7._2;
	var _p8 = _opensolid$geometry$OpenSolid_Point2d$coordinates(p1);
	var x1 = _p8._0;
	var y1 = _p8._1;
	var _p9 = _opensolid$geometry$OpenSolid_Point2d$coordinates(p2);
	var x2 = _p9._0;
	var y2 = _p9._1;
	var _p10 = _opensolid$geometry$OpenSolid_Point2d$coordinates(p3);
	var x3 = _p10._0;
	var y3 = _p10._1;
	return _opensolid$geometry$OpenSolid_BoundingBox2d$with(
		{
			minX: A2(
				_elm_lang$core$Basics$min,
				x1,
				A2(_elm_lang$core$Basics$min, x2, x3)),
			maxX: A2(
				_elm_lang$core$Basics$max,
				x1,
				A2(_elm_lang$core$Basics$max, x2, x3)),
			minY: A2(
				_elm_lang$core$Basics$min,
				y1,
				A2(_elm_lang$core$Basics$min, y2, y3)),
			maxY: A2(
				_elm_lang$core$Basics$max,
				y1,
				A2(_elm_lang$core$Basics$max, y2, y3))
		});
};
var _opensolid$geometry$OpenSolid_Triangle2d$circumcircle = function (triangle) {
	return _opensolid$geometry$OpenSolid_Circle2d$throughPoints(
		_opensolid$geometry$OpenSolid_Triangle2d$vertices(triangle));
};
var _opensolid$geometry$OpenSolid_Triangle2d$fromVertices = _opensolid$geometry$OpenSolid_Geometry_Internal$Triangle2d;
var _opensolid$geometry$OpenSolid_Triangle2d$mapVertices = F2(
	function ($function, triangle) {
		var _p11 = _opensolid$geometry$OpenSolid_Triangle2d$vertices(triangle);
		var p1 = _p11._0;
		var p2 = _p11._1;
		var p3 = _p11._2;
		return _opensolid$geometry$OpenSolid_Triangle2d$fromVertices(
			{
				ctor: '_Tuple3',
				_0: $function(p1),
				_1: $function(p2),
				_2: $function(p3)
			});
	});
var _opensolid$geometry$OpenSolid_Triangle2d$scaleAbout = F2(
	function (point, scale) {
		return _opensolid$geometry$OpenSolid_Triangle2d$mapVertices(
			A2(_opensolid$geometry$OpenSolid_Point2d$scaleAbout, point, scale));
	});
var _opensolid$geometry$OpenSolid_Triangle2d$rotateAround = F2(
	function (centerPoint, angle) {
		return _opensolid$geometry$OpenSolid_Triangle2d$mapVertices(
			A2(_opensolid$geometry$OpenSolid_Point2d$rotateAround, centerPoint, angle));
	});
var _opensolid$geometry$OpenSolid_Triangle2d$translateBy = function (vector) {
	return _opensolid$geometry$OpenSolid_Triangle2d$mapVertices(
		_opensolid$geometry$OpenSolid_Point2d$translateBy(vector));
};
var _opensolid$geometry$OpenSolid_Triangle2d$mirrorAcross = function (axis) {
	return _opensolid$geometry$OpenSolid_Triangle2d$mapVertices(
		_opensolid$geometry$OpenSolid_Point2d$mirrorAcross(axis));
};
var _opensolid$geometry$OpenSolid_Triangle2d$relativeTo = function (frame) {
	return _opensolid$geometry$OpenSolid_Triangle2d$mapVertices(
		_opensolid$geometry$OpenSolid_Point2d$relativeTo(frame));
};
var _opensolid$geometry$OpenSolid_Triangle2d$placeIn = function (frame) {
	return _opensolid$geometry$OpenSolid_Triangle2d$mapVertices(
		_opensolid$geometry$OpenSolid_Point2d$placeIn(frame));
};

var _opensolid$geometry$OpenSolid_Polygon2d$vertices = function (_p0) {
	var _p1 = _p0;
	return _p1._0;
};
var _opensolid$geometry$OpenSolid_Polygon2d$edges = function (polygon) {
	var _p2 = _opensolid$geometry$OpenSolid_Polygon2d$vertices(polygon);
	if (_p2.ctor === '[]') {
		return {ctor: '[]'};
	} else {
		return A3(
			_elm_lang$core$List$map2,
			_opensolid$geometry$OpenSolid_LineSegment2d$from,
			_p2,
			A2(
				_elm_lang$core$Basics_ops['++'],
				_p2._1,
				{
					ctor: '::',
					_0: _p2._0,
					_1: {ctor: '[]'}
				}));
	}
};
var _opensolid$geometry$OpenSolid_Polygon2d$perimeter = function (_p3) {
	return _elm_lang$core$List$sum(
		A2(
			_elm_lang$core$List$map,
			_opensolid$geometry$OpenSolid_LineSegment2d$length,
			_opensolid$geometry$OpenSolid_Polygon2d$edges(_p3)));
};
var _opensolid$geometry$OpenSolid_Polygon2d$counterclockwiseArea = function (polygon) {
	var _p4 = _opensolid$geometry$OpenSolid_Polygon2d$vertices(polygon);
	if (_p4.ctor === '[]') {
		return 0;
	} else {
		if (_p4._1.ctor === '[]') {
			return 0;
		} else {
			if (_p4._1._1.ctor === '[]') {
				return 0;
			} else {
				var _p5 = _p4._1._1;
				var segmentArea = F2(
					function (start, end) {
						return _opensolid$geometry$OpenSolid_Triangle2d$counterclockwiseArea(
							_opensolid$geometry$OpenSolid_Triangle2d$fromVertices(
								{ctor: '_Tuple3', _0: _p4._0, _1: start, _2: end}));
					});
				var segmentAreas = A3(
					_elm_lang$core$List$map2,
					segmentArea,
					{ctor: '::', _0: _p4._1._0, _1: _p5},
					_p5);
				return _elm_lang$core$List$sum(segmentAreas);
			}
		}
	}
};
var _opensolid$geometry$OpenSolid_Polygon2d$area = function (_p6) {
	return _elm_lang$core$Basics$abs(
		_opensolid$geometry$OpenSolid_Polygon2d$counterclockwiseArea(_p6));
};
var _opensolid$geometry$OpenSolid_Polygon2d$clockwiseArea = function (polygon) {
	return 0 - _opensolid$geometry$OpenSolid_Polygon2d$counterclockwiseArea(polygon);
};
var _opensolid$geometry$OpenSolid_Polygon2d$boundingBox = function (polygon) {
	return _opensolid$geometry$OpenSolid_Point2d$hullOf(
		_opensolid$geometry$OpenSolid_Polygon2d$vertices(polygon));
};
var _opensolid$geometry$OpenSolid_Polygon2d$fromVertices = _opensolid$geometry$OpenSolid_Geometry_Internal$Polygon2d;
var _opensolid$geometry$OpenSolid_Polygon2d$mapVertices = function ($function) {
	return function (_p7) {
		return _opensolid$geometry$OpenSolid_Polygon2d$fromVertices(
			A2(
				_elm_lang$core$List$map,
				$function,
				_opensolid$geometry$OpenSolid_Polygon2d$vertices(_p7)));
	};
};
var _opensolid$geometry$OpenSolid_Polygon2d$scaleAbout = F2(
	function (point, scale) {
		return _opensolid$geometry$OpenSolid_Polygon2d$mapVertices(
			A2(_opensolid$geometry$OpenSolid_Point2d$scaleAbout, point, scale));
	});
var _opensolid$geometry$OpenSolid_Polygon2d$rotateAround = F2(
	function (point, angle) {
		return _opensolid$geometry$OpenSolid_Polygon2d$mapVertices(
			A2(_opensolid$geometry$OpenSolid_Point2d$rotateAround, point, angle));
	});
var _opensolid$geometry$OpenSolid_Polygon2d$translateBy = function (vector) {
	return _opensolid$geometry$OpenSolid_Polygon2d$mapVertices(
		_opensolid$geometry$OpenSolid_Point2d$translateBy(vector));
};
var _opensolid$geometry$OpenSolid_Polygon2d$mirrorAcross = function (axis) {
	return _opensolid$geometry$OpenSolid_Polygon2d$mapVertices(
		_opensolid$geometry$OpenSolid_Point2d$mirrorAcross(axis));
};
var _opensolid$geometry$OpenSolid_Polygon2d$relativeTo = function (frame) {
	return _opensolid$geometry$OpenSolid_Polygon2d$mapVertices(
		_opensolid$geometry$OpenSolid_Point2d$relativeTo(frame));
};
var _opensolid$geometry$OpenSolid_Polygon2d$placeIn = function (frame) {
	return _opensolid$geometry$OpenSolid_Polygon2d$mapVertices(
		_opensolid$geometry$OpenSolid_Point2d$placeIn(frame));
};

var _opensolid$linear_algebra_interop$OpenSolid_Interop_LinearAlgebra_Frame3d$toMat4 = function (frame) {
	var _p0 = _opensolid$geometry$OpenSolid_Point3d$coordinates(
		_opensolid$geometry$OpenSolid_Frame3d$originPoint(frame));
	var m14 = _p0._0;
	var m24 = _p0._1;
	var m34 = _p0._2;
	var _p1 = _opensolid$geometry$OpenSolid_Direction3d$components(
		_opensolid$geometry$OpenSolid_Frame3d$zDirection(frame));
	var m13 = _p1._0;
	var m23 = _p1._1;
	var m33 = _p1._2;
	var _p2 = _opensolid$geometry$OpenSolid_Direction3d$components(
		_opensolid$geometry$OpenSolid_Frame3d$yDirection(frame));
	var m12 = _p2._0;
	var m22 = _p2._1;
	var m32 = _p2._2;
	var _p3 = _opensolid$geometry$OpenSolid_Direction3d$components(
		_opensolid$geometry$OpenSolid_Frame3d$xDirection(frame));
	var m11 = _p3._0;
	var m21 = _p3._1;
	var m31 = _p3._2;
	return _elm_community$linear_algebra$Math_Matrix4$fromRecord(
		{m11: m11, m21: m21, m31: m31, m41: 0, m12: m12, m22: m22, m32: m32, m42: 0, m13: m13, m23: m23, m33: m33, m43: 0, m14: m14, m24: m24, m34: m34, m44: 1});
};

var _opensolid$svg$OpenSolid_Svg_Internal$tip = F4(
	function (_p0, basePoint, length, direction) {
		var _p1 = _p0;
		var _p3 = _p1.tipWidth;
		var _p2 = _p1.tipLength;
		var frame = _opensolid$geometry$OpenSolid_Frame2d$with(
			{originPoint: basePoint, xDirection: direction});
		var tipPoint = A2(
			_opensolid$geometry$OpenSolid_Point2d$in_,
			frame,
			{ctor: '_Tuple2', _0: length, _1: 0});
		var tipBasePoint = A2(
			_opensolid$geometry$OpenSolid_Point2d$in_,
			frame,
			{ctor: '_Tuple2', _0: length - _p2, _1: 0});
		var leftPoint = A2(
			_opensolid$geometry$OpenSolid_Point2d$in_,
			frame,
			{ctor: '_Tuple2', _0: length - _p2, _1: _p3 / 2});
		var rightPoint = A2(
			_opensolid$geometry$OpenSolid_Point2d$in_,
			frame,
			{ctor: '_Tuple2', _0: length - _p2, _1: (0 - _p3) / 2});
		return _opensolid$geometry$OpenSolid_Triangle2d$fromVertices(
			{ctor: '_Tuple3', _0: rightPoint, _1: tipPoint, _2: leftPoint});
	});

var _opensolid$svg$OpenSolid_Svg$placeIn = F2(
	function (frame, element) {
		var _p0 = _opensolid$geometry$OpenSolid_Direction2d$components(
			_opensolid$geometry$OpenSolid_Frame2d$yDirection(frame));
		var x2 = _p0._0;
		var y2 = _p0._1;
		var _p1 = _opensolid$geometry$OpenSolid_Direction2d$components(
			_opensolid$geometry$OpenSolid_Frame2d$xDirection(frame));
		var x1 = _p1._0;
		var y1 = _p1._1;
		var _p2 = _opensolid$geometry$OpenSolid_Point2d$coordinates(
			_opensolid$geometry$OpenSolid_Frame2d$originPoint(frame));
		var px = _p2._0;
		var py = _p2._1;
		var components = A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Basics$toString,
			{
				ctor: '::',
				_0: x1,
				_1: {
					ctor: '::',
					_0: y1,
					_1: {
						ctor: '::',
						_0: x2,
						_1: {
							ctor: '::',
							_0: y2,
							_1: {
								ctor: '::',
								_0: px,
								_1: {
									ctor: '::',
									_0: py,
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			});
		var transform = A2(
			_elm_lang$core$Basics_ops['++'],
			'matrix(',
			A2(
				_elm_lang$core$Basics_ops['++'],
				A2(_elm_lang$core$String$join, ' ', components),
				')'));
		return A2(
			_elm_lang$svg$Svg$g,
			{
				ctor: '::',
				_0: _elm_lang$svg$Svg_Attributes$transform(transform),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: element,
				_1: {ctor: '[]'}
			});
	});
var _opensolid$svg$OpenSolid_Svg$relativeTo = function (frame) {
	return _opensolid$svg$OpenSolid_Svg$placeIn(
		A2(_opensolid$geometry$OpenSolid_Frame2d$relativeTo, frame, _opensolid$geometry$OpenSolid_Frame2d$xy));
};
var _opensolid$svg$OpenSolid_Svg$mirrorAcross = function (axis) {
	return _opensolid$svg$OpenSolid_Svg$placeIn(
		A2(_opensolid$geometry$OpenSolid_Frame2d$mirrorAcross, axis, _opensolid$geometry$OpenSolid_Frame2d$xy));
};
var _opensolid$svg$OpenSolid_Svg$translateBy = F2(
	function (vector, element) {
		var _p3 = _opensolid$geometry$OpenSolid_Vector2d$components(vector);
		var x = _p3._0;
		var y = _p3._1;
		var translate = A2(
			_elm_lang$core$Basics_ops['++'],
			'translate(',
			A2(
				_elm_lang$core$Basics_ops['++'],
				_elm_lang$core$Basics$toString(x),
				A2(
					_elm_lang$core$Basics_ops['++'],
					' ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						_elm_lang$core$Basics$toString(y),
						')'))));
		return A2(
			_elm_lang$svg$Svg$g,
			{
				ctor: '::',
				_0: _elm_lang$svg$Svg_Attributes$transform(translate),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: element,
				_1: {ctor: '[]'}
			});
	});
var _opensolid$svg$OpenSolid_Svg$rotateAround = F3(
	function (point, angle, element) {
		var angleString = _elm_lang$core$Basics$toString(
			_elm_community$basics_extra$Basics_Extra$inDegrees(angle));
		var _p4 = _opensolid$geometry$OpenSolid_Point2d$coordinates(point);
		var x = _p4._0;
		var y = _p4._1;
		var xString = _elm_lang$core$Basics$toString(x);
		var yString = _elm_lang$core$Basics$toString(y);
		var rotate = A2(
			_elm_lang$core$Basics_ops['++'],
			'rotate(',
			A2(
				_elm_lang$core$Basics_ops['++'],
				angleString,
				A2(
					_elm_lang$core$Basics_ops['++'],
					' ',
					A2(
						_elm_lang$core$Basics_ops['++'],
						xString,
						A2(
							_elm_lang$core$Basics_ops['++'],
							' ',
							A2(_elm_lang$core$Basics_ops['++'], yString, ')'))))));
		return A2(
			_elm_lang$svg$Svg$g,
			{
				ctor: '::',
				_0: _elm_lang$svg$Svg_Attributes$transform(rotate),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: element,
				_1: {ctor: '[]'}
			});
	});
var _opensolid$svg$OpenSolid_Svg$scaleAbout = F3(
	function (point, scale, element) {
		var _p5 = _opensolid$geometry$OpenSolid_Point2d$coordinates(
			A3(_opensolid$geometry$OpenSolid_Point2d$scaleAbout, point, scale, _opensolid$geometry$OpenSolid_Point2d$origin));
		var px = _p5._0;
		var py = _p5._1;
		var components = A2(
			_elm_lang$core$List$map,
			_elm_lang$core$Basics$toString,
			{
				ctor: '::',
				_0: scale,
				_1: {
					ctor: '::',
					_0: 0,
					_1: {
						ctor: '::',
						_0: 0,
						_1: {
							ctor: '::',
							_0: scale,
							_1: {
								ctor: '::',
								_0: px,
								_1: {
									ctor: '::',
									_0: py,
									_1: {ctor: '[]'}
								}
							}
						}
					}
				}
			});
		var transform = A2(
			_elm_lang$core$Basics_ops['++'],
			'matrix(',
			A2(
				_elm_lang$core$Basics_ops['++'],
				A2(_elm_lang$core$String$join, ' ', components),
				')'));
		return A2(
			_elm_lang$svg$Svg$g,
			{
				ctor: '::',
				_0: _elm_lang$svg$Svg_Attributes$transform(transform),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: element,
				_1: {ctor: '[]'}
			});
	});
var _opensolid$svg$OpenSolid_Svg$text2d = F3(
	function (attributes, basePoint, text) {
		var mirrorAxis = _opensolid$geometry$OpenSolid_Axis2d$with(
			{originPoint: basePoint, direction: _opensolid$geometry$OpenSolid_Direction2d$x});
		var _p6 = _opensolid$geometry$OpenSolid_Point2d$coordinates(basePoint);
		var x = _p6._0;
		var y = _p6._1;
		var xAttribute = _elm_lang$svg$Svg_Attributes$x(
			_elm_lang$core$Basics$toString(x));
		var yAttribute = _elm_lang$svg$Svg_Attributes$y(
			_elm_lang$core$Basics$toString(y));
		return A2(
			_opensolid$svg$OpenSolid_Svg$mirrorAcross,
			mirrorAxis,
			A2(
				_elm_lang$svg$Svg$text_,
				{
					ctor: '::',
					_0: xAttribute,
					_1: {ctor: '::', _0: yAttribute, _1: attributes}
				},
				{
					ctor: '::',
					_0: _elm_lang$svg$Svg$text(text),
					_1: {ctor: '[]'}
				}));
	});
var _opensolid$svg$OpenSolid_Svg$boundingBox2d = F2(
	function (attributes, boundingBox) {
		var _p7 = _opensolid$geometry$OpenSolid_BoundingBox2d$extrema(boundingBox);
		var minX = _p7.minX;
		var minY = _p7.minY;
		var maxX = _p7.maxX;
		var maxY = _p7.maxY;
		var x = _elm_lang$svg$Svg_Attributes$x(
			_elm_lang$core$Basics$toString(minX));
		var y = _elm_lang$svg$Svg_Attributes$y(
			_elm_lang$core$Basics$toString(minY));
		var width = _elm_lang$svg$Svg_Attributes$width(
			_elm_lang$core$Basics$toString(maxX - minX));
		var height = _elm_lang$svg$Svg_Attributes$height(
			_elm_lang$core$Basics$toString(maxY - minY));
		return A2(
			_elm_lang$svg$Svg$rect,
			{
				ctor: '::',
				_0: x,
				_1: {
					ctor: '::',
					_0: y,
					_1: {
						ctor: '::',
						_0: width,
						_1: {ctor: '::', _0: height, _1: attributes}
					}
				}
			},
			{ctor: '[]'});
	});
var _opensolid$svg$OpenSolid_Svg$cubicSpline2d = F2(
	function (attributes, spline) {
		var _p8 = _opensolid$geometry$OpenSolid_CubicSpline2d$controlPoints(spline);
		var p1 = _p8._0;
		var p2 = _p8._1;
		var p3 = _p8._2;
		var p4 = _p8._3;
		var _p9 = _opensolid$geometry$OpenSolid_Point2d$coordinates(p1);
		var x1 = _p9._0;
		var y1 = _p9._1;
		var _p10 = _opensolid$geometry$OpenSolid_Point2d$coordinates(p2);
		var x2 = _p10._0;
		var y2 = _p10._1;
		var _p11 = _opensolid$geometry$OpenSolid_Point2d$coordinates(p3);
		var x3 = _p11._0;
		var y3 = _p11._1;
		var _p12 = _opensolid$geometry$OpenSolid_Point2d$coordinates(p4);
		var x4 = _p12._0;
		var y4 = _p12._1;
		var pathComponents = {
			ctor: '::',
			_0: 'M',
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Basics$toString(x1),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Basics$toString(y1),
					_1: {
						ctor: '::',
						_0: 'C',
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Basics$toString(x2),
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(y2),
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Basics$toString(x3),
									_1: {
										ctor: '::',
										_0: _elm_lang$core$Basics$toString(y3),
										_1: {
											ctor: '::',
											_0: _elm_lang$core$Basics$toString(x4),
											_1: {
												ctor: '::',
												_0: _elm_lang$core$Basics$toString(y4),
												_1: {ctor: '[]'}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		};
		var pathAttribute = _elm_lang$svg$Svg_Attributes$d(
			A2(_elm_lang$core$String$join, ' ', pathComponents));
		return A2(
			_elm_lang$svg$Svg$path,
			{ctor: '::', _0: pathAttribute, _1: attributes},
			{ctor: '[]'});
	});
var _opensolid$svg$OpenSolid_Svg$quadraticSpline2d = F2(
	function (attributes, spline) {
		var _p13 = _opensolid$geometry$OpenSolid_QuadraticSpline2d$controlPoints(spline);
		var p1 = _p13._0;
		var p2 = _p13._1;
		var p3 = _p13._2;
		var _p14 = _opensolid$geometry$OpenSolid_Point2d$coordinates(p1);
		var x1 = _p14._0;
		var y1 = _p14._1;
		var _p15 = _opensolid$geometry$OpenSolid_Point2d$coordinates(p2);
		var x2 = _p15._0;
		var y2 = _p15._1;
		var _p16 = _opensolid$geometry$OpenSolid_Point2d$coordinates(p3);
		var x3 = _p16._0;
		var y3 = _p16._1;
		var pathComponents = {
			ctor: '::',
			_0: 'M',
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Basics$toString(x1),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Basics$toString(y1),
					_1: {
						ctor: '::',
						_0: 'Q',
						_1: {
							ctor: '::',
							_0: _elm_lang$core$Basics$toString(x2),
							_1: {
								ctor: '::',
								_0: _elm_lang$core$Basics$toString(y2),
								_1: {
									ctor: '::',
									_0: _elm_lang$core$Basics$toString(x3),
									_1: {
										ctor: '::',
										_0: _elm_lang$core$Basics$toString(y3),
										_1: {ctor: '[]'}
									}
								}
							}
						}
					}
				}
			}
		};
		var pathAttribute = _elm_lang$svg$Svg_Attributes$d(
			A2(_elm_lang$core$String$join, ' ', pathComponents));
		return A2(
			_elm_lang$svg$Svg$path,
			{ctor: '::', _0: pathAttribute, _1: attributes},
			{ctor: '[]'});
	});
var _opensolid$svg$OpenSolid_Svg$ellipse2d = F2(
	function (attributes, ellipse) {
		var angle = _opensolid$geometry$OpenSolid_Direction2d$angle(
			_opensolid$geometry$OpenSolid_Ellipse2d$xDirection(ellipse));
		var ry = _elm_lang$svg$Svg_Attributes$ry(
			_elm_lang$core$Basics$toString(
				_opensolid$geometry$OpenSolid_Ellipse2d$yRadius(ellipse)));
		var rx = _elm_lang$svg$Svg_Attributes$rx(
			_elm_lang$core$Basics$toString(
				_opensolid$geometry$OpenSolid_Ellipse2d$xRadius(ellipse)));
		var centerPoint = _opensolid$geometry$OpenSolid_Ellipse2d$centerPoint(ellipse);
		var _p17 = _opensolid$geometry$OpenSolid_Point2d$coordinates(centerPoint);
		var x = _p17._0;
		var y = _p17._1;
		var cx = _elm_lang$svg$Svg_Attributes$cx(
			_elm_lang$core$Basics$toString(x));
		var cy = _elm_lang$svg$Svg_Attributes$cy(
			_elm_lang$core$Basics$toString(y));
		return A3(
			_opensolid$svg$OpenSolid_Svg$rotateAround,
			centerPoint,
			angle,
			A2(
				_elm_lang$svg$Svg$ellipse,
				{
					ctor: '::',
					_0: cx,
					_1: {
						ctor: '::',
						_0: cy,
						_1: {
							ctor: '::',
							_0: rx,
							_1: {ctor: '::', _0: ry, _1: attributes}
						}
					}
				},
				{ctor: '[]'}));
	});
var _opensolid$svg$OpenSolid_Svg$circle2d = F2(
	function (attributes, circle) {
		var r = _elm_lang$svg$Svg_Attributes$r(
			_elm_lang$core$Basics$toString(
				_opensolid$geometry$OpenSolid_Circle2d$radius(circle)));
		var _p18 = _opensolid$geometry$OpenSolid_Point2d$coordinates(
			_opensolid$geometry$OpenSolid_Circle2d$centerPoint(circle));
		var x = _p18._0;
		var y = _p18._1;
		var cx = _elm_lang$svg$Svg_Attributes$cx(
			_elm_lang$core$Basics$toString(x));
		var cy = _elm_lang$svg$Svg_Attributes$cy(
			_elm_lang$core$Basics$toString(y));
		return A2(
			_elm_lang$svg$Svg$circle,
			{
				ctor: '::',
				_0: cx,
				_1: {
					ctor: '::',
					_0: cy,
					_1: {ctor: '::', _0: r, _1: attributes}
				}
			},
			{ctor: '[]'});
	});
var _opensolid$svg$OpenSolid_Svg$ellipticalArc2d = F2(
	function (attributes, arc) {
		var xDirection = _opensolid$geometry$OpenSolid_EllipticalArc2d$xDirection(arc);
		var angleString = _elm_lang$core$Basics$toString(
			_elm_community$basics_extra$Basics_Extra$inDegrees(
				_opensolid$geometry$OpenSolid_Direction2d$angle(xDirection)));
		var yRadius = _opensolid$geometry$OpenSolid_EllipticalArc2d$yRadius(arc);
		var yRadiusString = _elm_lang$core$Basics$toString(yRadius);
		var xRadius = _opensolid$geometry$OpenSolid_EllipticalArc2d$xRadius(arc);
		var xRadiusString = _elm_lang$core$Basics$toString(xRadius);
		var _p19 = _opensolid$geometry$OpenSolid_Point2d$coordinates(
			_opensolid$geometry$OpenSolid_EllipticalArc2d$startPoint(arc));
		var x0 = _p19._0;
		var y0 = _p19._1;
		var moveCommand = {
			ctor: '::',
			_0: 'M',
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Basics$toString(x0),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Basics$toString(y0),
					_1: {ctor: '[]'}
				}
			}
		};
		var maxSegmentAngle = (2 * _elm_lang$core$Basics$pi) / 3;
		var sweptAngle = _opensolid$geometry$OpenSolid_EllipticalArc2d$sweptAngle(arc);
		var numSegments = 1 + _elm_lang$core$Basics$floor(
			_elm_lang$core$Basics$abs(sweptAngle) / maxSegmentAngle);
		var sweepFlag = (_elm_lang$core$Native_Utils.cmp(sweptAngle, 0) > -1) ? '1' : '0';
		var arcSegment = function (index) {
			var t = _elm_lang$core$Basics$toFloat(index) / _elm_lang$core$Basics$toFloat(numSegments);
			var _p20 = _opensolid$geometry$OpenSolid_Point2d$coordinates(
				A2(_opensolid$geometry$OpenSolid_EllipticalArc2d$pointOn, arc, t));
			var x = _p20._0;
			var y = _p20._1;
			return {
				ctor: '::',
				_0: 'A',
				_1: {
					ctor: '::',
					_0: xRadiusString,
					_1: {
						ctor: '::',
						_0: yRadiusString,
						_1: {
							ctor: '::',
							_0: angleString,
							_1: {
								ctor: '::',
								_0: '0',
								_1: {
									ctor: '::',
									_0: sweepFlag,
									_1: {
										ctor: '::',
										_0: _elm_lang$core$Basics$toString(x),
										_1: {
											ctor: '::',
											_0: _elm_lang$core$Basics$toString(y),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}
				}
			};
		};
		var arcSegments = A2(
			_elm_lang$core$List$map,
			arcSegment,
			A2(_elm_lang$core$List$range, 1, numSegments));
		var pathComponents = A2(
			_elm_lang$core$Basics_ops['++'],
			moveCommand,
			_elm_lang$core$List$concat(arcSegments));
		var pathAttribute = _elm_lang$svg$Svg_Attributes$d(
			A2(_elm_lang$core$String$join, ' ', pathComponents));
		return A2(
			_elm_lang$svg$Svg$path,
			{ctor: '::', _0: pathAttribute, _1: attributes},
			{ctor: '[]'});
	});
var _opensolid$svg$OpenSolid_Svg$arc2d = F2(
	function (attributes, arc) {
		var radius = _opensolid$geometry$OpenSolid_Arc2d$radius(arc);
		var radiusString = _elm_lang$core$Basics$toString(radius);
		var _p21 = _opensolid$geometry$OpenSolid_Point2d$coordinates(
			_opensolid$geometry$OpenSolid_Arc2d$startPoint(arc));
		var x0 = _p21._0;
		var y0 = _p21._1;
		var moveCommand = {
			ctor: '::',
			_0: 'M',
			_1: {
				ctor: '::',
				_0: _elm_lang$core$Basics$toString(x0),
				_1: {
					ctor: '::',
					_0: _elm_lang$core$Basics$toString(y0),
					_1: {ctor: '[]'}
				}
			}
		};
		var maxSegmentAngle = (2 * _elm_lang$core$Basics$pi) / 3;
		var sweptAngle = _opensolid$geometry$OpenSolid_Arc2d$sweptAngle(arc);
		var numSegments = 1 + _elm_lang$core$Basics$floor(
			_elm_lang$core$Basics$abs(sweptAngle) / maxSegmentAngle);
		var sweepFlag = (_elm_lang$core$Native_Utils.cmp(sweptAngle, 0) > -1) ? '1' : '0';
		var arcSegment = function (index) {
			var t = _elm_lang$core$Basics$toFloat(index) / _elm_lang$core$Basics$toFloat(numSegments);
			var _p22 = _opensolid$geometry$OpenSolid_Point2d$coordinates(
				A2(_opensolid$geometry$OpenSolid_Arc2d$pointOn, arc, t));
			var x = _p22._0;
			var y = _p22._1;
			return {
				ctor: '::',
				_0: 'A',
				_1: {
					ctor: '::',
					_0: radiusString,
					_1: {
						ctor: '::',
						_0: radiusString,
						_1: {
							ctor: '::',
							_0: '0',
							_1: {
								ctor: '::',
								_0: '0',
								_1: {
									ctor: '::',
									_0: sweepFlag,
									_1: {
										ctor: '::',
										_0: _elm_lang$core$Basics$toString(x),
										_1: {
											ctor: '::',
											_0: _elm_lang$core$Basics$toString(y),
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}
				}
			};
		};
		var arcSegments = A2(
			_elm_lang$core$List$map,
			arcSegment,
			A2(_elm_lang$core$List$range, 1, numSegments));
		var pathComponents = A2(
			_elm_lang$core$Basics_ops['++'],
			moveCommand,
			_elm_lang$core$List$concat(arcSegments));
		var pathAttribute = _elm_lang$svg$Svg_Attributes$d(
			A2(_elm_lang$core$String$join, ' ', pathComponents));
		return A2(
			_elm_lang$svg$Svg$path,
			{ctor: '::', _0: pathAttribute, _1: attributes},
			{ctor: '[]'});
	});
var _opensolid$svg$OpenSolid_Svg$point2dWith = F3(
	function (_p23, attributes, point) {
		var _p24 = _p23;
		return A2(
			_opensolid$svg$OpenSolid_Svg$circle2d,
			attributes,
			_opensolid$geometry$OpenSolid_Circle2d$with(
				{centerPoint: point, radius: _p24.radius}));
	});
var _opensolid$svg$OpenSolid_Svg$point2d = _opensolid$svg$OpenSolid_Svg$point2dWith(
	{radius: 3});
var _opensolid$svg$OpenSolid_Svg$coordinatesString = function (point) {
	var _p25 = _opensolid$geometry$OpenSolid_Point2d$coordinates(point);
	var x = _p25._0;
	var y = _p25._1;
	return A2(
		_elm_lang$core$Basics_ops['++'],
		_elm_lang$core$Basics$toString(x),
		A2(
			_elm_lang$core$Basics_ops['++'],
			',',
			_elm_lang$core$Basics$toString(y)));
};
var _opensolid$svg$OpenSolid_Svg$pointsAttribute = function (points) {
	return _elm_lang$svg$Svg_Attributes$points(
		A2(
			_elm_lang$core$String$join,
			' ',
			A2(_elm_lang$core$List$map, _opensolid$svg$OpenSolid_Svg$coordinatesString, points)));
};
var _opensolid$svg$OpenSolid_Svg$lineSegment2d = F2(
	function (attributes, lineSegment) {
		var _p26 = _opensolid$geometry$OpenSolid_LineSegment2d$endpoints(lineSegment);
		var p1 = _p26._0;
		var p2 = _p26._1;
		return A2(
			_elm_lang$svg$Svg$polyline,
			{
				ctor: '::',
				_0: _opensolid$svg$OpenSolid_Svg$pointsAttribute(
					{
						ctor: '::',
						_0: p1,
						_1: {
							ctor: '::',
							_0: p2,
							_1: {ctor: '[]'}
						}
					}),
				_1: attributes
			},
			{ctor: '[]'});
	});
var _opensolid$svg$OpenSolid_Svg$triangle2d = F2(
	function (attributes, triangle) {
		var _p27 = _opensolid$geometry$OpenSolid_Triangle2d$vertices(triangle);
		var p1 = _p27._0;
		var p2 = _p27._1;
		var p3 = _p27._2;
		return A2(
			_elm_lang$svg$Svg$polygon,
			{
				ctor: '::',
				_0: _opensolid$svg$OpenSolid_Svg$pointsAttribute(
					{
						ctor: '::',
						_0: p1,
						_1: {
							ctor: '::',
							_0: p2,
							_1: {
								ctor: '::',
								_0: p3,
								_1: {ctor: '[]'}
							}
						}
					}),
				_1: attributes
			},
			{ctor: '[]'});
	});
var _opensolid$svg$OpenSolid_Svg$vector2dWith = F4(
	function (options, attributes, basePoint, vector) {
		var _p28 = _opensolid$geometry$OpenSolid_Vector2d$lengthAndDirection(vector);
		if (_p28.ctor === 'Just') {
			var _p30 = _p28._0._0;
			var _p29 = _p28._0._1;
			var tip = A4(_opensolid$svg$OpenSolid_Svg_Internal$tip, options, basePoint, _p30, _p29);
			var frame = _opensolid$geometry$OpenSolid_Frame2d$with(
				{originPoint: basePoint, xDirection: _p29});
			var tipBasePoint = A2(
				_opensolid$geometry$OpenSolid_Point2d$in_,
				frame,
				{ctor: '_Tuple2', _0: _p30 - options.tipLength, _1: 0});
			var stem = A2(_opensolid$geometry$OpenSolid_LineSegment2d$from, basePoint, tipBasePoint);
			return A2(
				_elm_lang$svg$Svg$g,
				attributes,
				{
					ctor: '::',
					_0: A2(
						_opensolid$svg$OpenSolid_Svg$lineSegment2d,
						{ctor: '[]'},
						stem),
					_1: {
						ctor: '::',
						_0: A2(
							_opensolid$svg$OpenSolid_Svg$triangle2d,
							{ctor: '[]'},
							tip),
						_1: {ctor: '[]'}
					}
				});
		} else {
			return _elm_lang$svg$Svg$text('');
		}
	});
var _opensolid$svg$OpenSolid_Svg$vector2d = _opensolid$svg$OpenSolid_Svg$vector2dWith(
	{tipLength: 10, tipWidth: 8});
var _opensolid$svg$OpenSolid_Svg$direction2dWith = F4(
	function (options, attributes, basePoint, direction) {
		return A4(
			_opensolid$svg$OpenSolid_Svg$vector2dWith,
			{tipLength: options.tipLength, tipWidth: options.tipWidth},
			attributes,
			basePoint,
			_opensolid$geometry$OpenSolid_Vector2d$with(
				{length: options.length, direction: direction}));
	});
var _opensolid$svg$OpenSolid_Svg$direction2d = _opensolid$svg$OpenSolid_Svg$direction2dWith(
	{length: 50, tipLength: 9, tipWidth: 9});
var _opensolid$svg$OpenSolid_Svg$polyline2d = F2(
	function (attributes, polyline) {
		var vertices = _opensolid$geometry$OpenSolid_Polyline2d$vertices(polyline);
		return A2(
			_elm_lang$svg$Svg$polyline,
			{
				ctor: '::',
				_0: _opensolid$svg$OpenSolid_Svg$pointsAttribute(vertices),
				_1: attributes
			},
			{ctor: '[]'});
	});
var _opensolid$svg$OpenSolid_Svg$polygon2d = F2(
	function (attributes, polygon) {
		var vertices = _opensolid$geometry$OpenSolid_Polygon2d$vertices(polygon);
		return A2(
			_elm_lang$svg$Svg$polygon,
			{
				ctor: '::',
				_0: _opensolid$svg$OpenSolid_Svg$pointsAttribute(vertices),
				_1: attributes
			},
			{ctor: '[]'});
	});
var _opensolid$svg$OpenSolid_Svg$render2d = F2(
	function (boundingBox, svg) {
		var _p31 = _opensolid$geometry$OpenSolid_BoundingBox2d$dimensions(boundingBox);
		var width = _p31._0;
		var height = _p31._1;
		var _p32 = _opensolid$geometry$OpenSolid_BoundingBox2d$extrema(boundingBox);
		var minX = _p32.minX;
		var maxY = _p32.maxY;
		var topLeftFrame = _opensolid$geometry$OpenSolid_Frame2d$flipY(
			_opensolid$geometry$OpenSolid_Frame2d$atPoint(
				_opensolid$geometry$OpenSolid_Point2d$fromCoordinates(
					{ctor: '_Tuple2', _0: minX, _1: maxY})));
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$style(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'border', _1: '0'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'padding', _1: '0'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'margin', _1: '0'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'display', _1: 'inline-block'},
									_1: {ctor: '[]'}
								}
							}
						}
					}),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: A2(
					_elm_lang$svg$Svg$svg,
					{
						ctor: '::',
						_0: _elm_lang$svg$Svg_Attributes$width(
							_elm_lang$core$Basics$toString(width)),
						_1: {
							ctor: '::',
							_0: _elm_lang$svg$Svg_Attributes$height(
								_elm_lang$core$Basics$toString(height)),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$style(
									{
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'display', _1: 'block'},
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}
						}
					},
					{
						ctor: '::',
						_0: A2(_opensolid$svg$OpenSolid_Svg$relativeTo, topLeftFrame, svg),
						_1: {ctor: '[]'}
					}),
				_1: {ctor: '[]'}
			});
	});

var _w0rm$elm_font_dimensions$Structure$addDimension = F2(
	function (_p1, _p0) {
		var _p2 = _p1;
		var _p9 = _p2.number;
		var _p8 = _p2.distance;
		var _p7 = _p2.direction;
		var _p6 = _p2.color;
		var _p3 = _p0;
		var _p5 = _p3.points;
		var _p4 = _p3.lines;
		return {
			points: _elm_lang$core$List$concat(
				{
					ctor: '::',
					_0: A2(
						_elm_lang$core$List$map,
						function (point) {
							return {
								number: _p9,
								color: _p6,
								point: A2(
									_opensolid$geometry$OpenSolid_Point3d$translateBy,
									A2(_opensolid$geometry$OpenSolid_Vector3d$scaleBy, _p8, _p7),
									point.point)
							};
						},
						_p5),
					_1: {
						ctor: '::',
						_0: _p5,
						_1: {ctor: '[]'}
					}
				}),
			lines: _elm_lang$core$List$concat(
				{
					ctor: '::',
					_0: A2(
						_elm_lang$core$List$map,
						function (point) {
							return {
								number: _p9,
								color: _p6,
								line: A2(
									_opensolid$geometry$OpenSolid_LineSegment3d$from,
									point.point,
									A2(
										_opensolid$geometry$OpenSolid_Point3d$translateBy,
										A2(_opensolid$geometry$OpenSolid_Vector3d$scaleBy, _p8, _p7),
										point.point))
							};
						},
						_p5),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$core$List$map,
							function (line) {
								return _elm_lang$core$Native_Utils.update(
									line,
									{
										line: A2(
											_opensolid$geometry$OpenSolid_LineSegment3d$translateBy,
											A2(_opensolid$geometry$OpenSolid_Vector3d$scaleBy, _p8, _p7),
											line.line)
									});
							},
							_p4),
						_1: {
							ctor: '::',
							_0: _p4,
							_1: {ctor: '[]'}
						}
					}
				}),
			focalPoint: _p3.focalPoint,
			value: _p3.value,
			coordinates: _p3.coordinates
		};
	});
var _w0rm$elm_font_dimensions$Structure$structureHelp = F2(
	function (dimensions, structure) {
		structureHelp:
		while (true) {
			var _p10 = dimensions;
			if (_p10.ctor === '[]') {
				return structure;
			} else {
				var _v3 = _p10._1,
					_v4 = A2(_w0rm$elm_font_dimensions$Structure$addDimension, _p10._0, structure);
				dimensions = _v3;
				structure = _v4;
				continue structureHelp;
			}
		}
	});
var _w0rm$elm_font_dimensions$Structure$sortLinesByDistanceToPoint = function (point) {
	return _elm_lang$core$List$sortBy(
		function (_p11) {
			return A2(
				F2(
					function (x, y) {
						return x * y;
					}),
				-1,
				A2(
					_opensolid$geometry$OpenSolid_Point3d$distanceFrom,
					point,
					_opensolid$geometry$OpenSolid_LineSegment3d$midpoint(
						function (_) {
							return _.line;
						}(_p11))));
		});
};
var _w0rm$elm_font_dimensions$Structure$colors = _elm_lang$core$Array$fromList(
	{
		ctor: '::',
		_0: '#1a1919',
		_1: {
			ctor: '::',
			_0: '#d62631',
			_1: {
				ctor: '::',
				_0: '#00974c',
				_1: {
					ctor: '::',
					_0: '#00a4d8',
					_1: {
						ctor: '::',
						_0: '#dd5893',
						_1: {
							ctor: '::',
							_0: '#f1b13b',
							_1: {
								ctor: '::',
								_0: '#cccccc',
								_1: {
									ctor: '::',
									_0: '#e4e4e3',
									_1: {
										ctor: '::',
										_0: '#2a2929',
										_1: {
											ctor: '::',
											_0: '#e63641',
											_1: {
												ctor: '::',
												_0: '#10a75c',
												_1: {
													ctor: '::',
													_0: '#10b4e8',
													_1: {
														ctor: '::',
														_0: '#ed68a3',
														_1: {
															ctor: '::',
															_0: '#cccc00',
															_1: {
																ctor: '::',
																_0: '#00e4e3',
																_1: {ctor: '[]'}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _w0rm$elm_font_dimensions$Structure$initial = {
	points: {
		ctor: '::',
		_0: {
			number: 0,
			point: _opensolid$geometry$OpenSolid_Point3d$origin,
			color: A2(
				_elm_lang$core$Maybe$withDefault,
				'transparent',
				A2(_elm_lang$core$Array$get, 0, _w0rm$elm_font_dimensions$Structure$colors))
		},
		_1: {ctor: '[]'}
	},
	lines: {ctor: '[]'},
	coordinates: {ctor: '[]'},
	value: _opensolid$geometry$OpenSolid_Point3d$origin,
	focalPoint: _opensolid$geometry$OpenSolid_Point3d$origin
};
var _w0rm$elm_font_dimensions$Structure$structure = F2(
	function (dimensions, n) {
		var activeDimensions = A2(_elm_lang$core$List$take, n, dimensions);
		var newStructure = A2(_w0rm$elm_font_dimensions$Structure$structureHelp, activeDimensions, _w0rm$elm_font_dimensions$Structure$initial);
		var focalPoint = A3(
			_elm_lang$core$List$foldl,
			function (_p12) {
				var _p13 = _p12;
				return _opensolid$geometry$OpenSolid_Point3d$translateBy(
					A2(_opensolid$geometry$OpenSolid_Vector3d$scaleBy, _p13.distance * 0.5, _p13.direction));
			},
			newStructure.value,
			activeDimensions);
		var scale3d = A2(
			_elm_lang$core$Basics$min,
			1,
			A2(
				F2(
					function (x, y) {
						return x / y;
					}),
				0.45,
				A3(
					_elm_lang$core$List$foldl,
					function (_p14) {
						var _p15 = _p14;
						return _elm_lang$core$Basics$max(
							A2(_opensolid$geometry$OpenSolid_Point3d$distanceFrom, focalPoint, _p15.point));
					},
					0,
					newStructure.points)));
		var currentValue = A3(
			_elm_lang$core$List$foldl,
			function (_p16) {
				var _p17 = _p16;
				var _p18 = _p17.min;
				return _opensolid$geometry$OpenSolid_Point3d$translateBy(
					A2(_opensolid$geometry$OpenSolid_Vector3d$scaleBy, (_p17.distance * (_p17.value - _p18)) / (_p17.max - _p18), _p17.direction));
			},
			newStructure.value,
			activeDimensions);
		return _elm_lang$core$Native_Utils.update(
			newStructure,
			{
				focalPoint: focalPoint,
				value: A3(_opensolid$geometry$OpenSolid_Point3d$scaleAbout, focalPoint, scale3d, currentValue),
				points: A2(
					_elm_lang$core$List$map,
					function (point) {
						return _elm_lang$core$Native_Utils.update(
							point,
							{
								point: A3(_opensolid$geometry$OpenSolid_Point3d$scaleAbout, focalPoint, scale3d, point.point)
							});
					},
					newStructure.points),
				lines: A2(
					_elm_lang$core$List$map,
					function (line) {
						return _elm_lang$core$Native_Utils.update(
							line,
							{
								line: A3(_opensolid$geometry$OpenSolid_LineSegment3d$scaleAbout, focalPoint, scale3d, line.line)
							});
					},
					newStructure.lines),
				coordinates: A2(
					_elm_lang$core$List$map,
					function (_p19) {
						var _p20 = _p19;
						var _p21 = _p20.min;
						return {
							line: A3(
								_opensolid$geometry$OpenSolid_LineSegment3d$scaleAbout,
								focalPoint,
								scale3d,
								A2(
									_opensolid$geometry$OpenSolid_LineSegment3d$from,
									A2(
										_opensolid$geometry$OpenSolid_Point3d$translateBy,
										A2(_opensolid$geometry$OpenSolid_Vector3d$scaleBy, ((0 - _p20.distance) * (_p20.value - _p21)) / (_p20.max - _p21), _p20.direction),
										currentValue),
									currentValue)),
							number: _p20.number,
							color: _p20.color
						};
					},
					activeDimensions)
			});
	});
var _w0rm$elm_font_dimensions$Structure$directions = _elm_lang$core$Array$fromList(
	{
		ctor: '::',
		_0: _opensolid$geometry$OpenSolid_Vector3d$normalize(
			_opensolid$geometry$OpenSolid_Vector3d$fromComponents(
				{ctor: '_Tuple3', _0: -1, _1: 0, _2: 0})),
		_1: {
			ctor: '::',
			_0: _opensolid$geometry$OpenSolid_Vector3d$normalize(
				_opensolid$geometry$OpenSolid_Vector3d$fromComponents(
					{ctor: '_Tuple3', _0: 0, _1: 0, _2: -1})),
			_1: {
				ctor: '::',
				_0: _opensolid$geometry$OpenSolid_Vector3d$normalize(
					_opensolid$geometry$OpenSolid_Vector3d$fromComponents(
						{ctor: '_Tuple3', _0: 0, _1: 1, _2: 0})),
				_1: {
					ctor: '::',
					_0: _opensolid$geometry$OpenSolid_Vector3d$normalize(
						_opensolid$geometry$OpenSolid_Vector3d$fromComponents(
							{ctor: '_Tuple3', _0: -1, _1: 1, _2: 1})),
					_1: {
						ctor: '::',
						_0: _opensolid$geometry$OpenSolid_Vector3d$normalize(
							_opensolid$geometry$OpenSolid_Vector3d$fromComponents(
								{ctor: '_Tuple3', _0: 1, _1: 1, _2: 1})),
						_1: {
							ctor: '::',
							_0: _opensolid$geometry$OpenSolid_Vector3d$normalize(
								_opensolid$geometry$OpenSolid_Vector3d$fromComponents(
									{ctor: '_Tuple3', _0: 1, _1: -1, _2: 1})),
							_1: {
								ctor: '::',
								_0: _opensolid$geometry$OpenSolid_Vector3d$normalize(
									_opensolid$geometry$OpenSolid_Vector3d$fromComponents(
										{ctor: '_Tuple3', _0: 1, _1: 1, _2: -1})),
								_1: {
									ctor: '::',
									_0: _opensolid$geometry$OpenSolid_Vector3d$normalize(
										_opensolid$geometry$OpenSolid_Vector3d$fromComponents(
											{ctor: '_Tuple3', _0: -1, _1: -1, _2: -1})),
									_1: {
										ctor: '::',
										_0: _opensolid$geometry$OpenSolid_Vector3d$normalize(
											_opensolid$geometry$OpenSolid_Vector3d$fromComponents(
												{ctor: '_Tuple3', _0: 0, _1: 1, _2: 1})),
										_1: {
											ctor: '::',
											_0: _opensolid$geometry$OpenSolid_Vector3d$normalize(
												_opensolid$geometry$OpenSolid_Vector3d$fromComponents(
													{ctor: '_Tuple3', _0: 1, _1: 0, _2: 1})),
											_1: {
												ctor: '::',
												_0: _opensolid$geometry$OpenSolid_Vector3d$normalize(
													_opensolid$geometry$OpenSolid_Vector3d$fromComponents(
														{ctor: '_Tuple3', _0: 1, _1: 1, _2: 0})),
												_1: {
													ctor: '::',
													_0: _opensolid$geometry$OpenSolid_Vector3d$normalize(
														_opensolid$geometry$OpenSolid_Vector3d$fromComponents(
															{ctor: '_Tuple3', _0: 0, _1: 2, _2: 1})),
													_1: {
														ctor: '::',
														_0: _opensolid$geometry$OpenSolid_Vector3d$normalize(
															_opensolid$geometry$OpenSolid_Vector3d$fromComponents(
																{ctor: '_Tuple3', _0: 2, _1: 0, _2: 1})),
														_1: {
															ctor: '::',
															_0: _opensolid$geometry$OpenSolid_Vector3d$normalize(
																_opensolid$geometry$OpenSolid_Vector3d$fromComponents(
																	{ctor: '_Tuple3', _0: 2, _1: 1, _2: 0})),
															_1: {
																ctor: '::',
																_0: _opensolid$geometry$OpenSolid_Vector3d$normalize(
																	_opensolid$geometry$OpenSolid_Vector3d$fromComponents(
																		{ctor: '_Tuple3', _0: 0, _1: 1, _2: 2})),
																_1: {ctor: '[]'}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	});
var _w0rm$elm_font_dimensions$Structure$dimensions = _elm_lang$core$List$indexedMap(
	F2(
		function (number, _p22) {
			var _p23 = _p22;
			return {
				value: _p23.value,
				min: _p23.min,
				max: _p23.max,
				title: _p23.title,
				name: _p23.name,
				number: number,
				direction: A2(
					_elm_lang$core$Maybe$withDefault,
					_opensolid$geometry$OpenSolid_Vector3d$fromComponents(
						{ctor: '_Tuple3', _0: -1, _1: -1, _2: 1}),
					A2(_elm_lang$core$Array$get, number, _w0rm$elm_font_dimensions$Structure$directions)),
				color: A2(
					_elm_lang$core$Maybe$withDefault,
					'transparent',
					A2(_elm_lang$core$Array$get, number, _w0rm$elm_font_dimensions$Structure$colors)),
				distance: _elm_lang$core$Basics$toFloat(
					_elm_lang$core$Basics$round(
						Math.pow(
							1.618,
							_elm_lang$core$Basics$toFloat(number))) * 10) / 10,
				step: 1
			};
		}));
var _w0rm$elm_font_dimensions$Structure$Structure = F5(
	function (a, b, c, d, e) {
		return {points: a, lines: b, value: c, coordinates: d, focalPoint: e};
	});
var _w0rm$elm_font_dimensions$Structure$LoadedDimension = F5(
	function (a, b, c, d, e) {
		return {value: a, min: b, max: c, title: d, name: e};
	});
var _w0rm$elm_font_dimensions$Structure$Dimension = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return {direction: a, distance: b, value: c, number: d, name: e, title: f, min: g, max: h, step: i, color: j};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _w0rm$elm_font_dimensions$Structure$Point = F3(
	function (a, b, c) {
		return {number: a, color: b, point: c};
	});
var _w0rm$elm_font_dimensions$Structure$Line = F3(
	function (a, b, c) {
		return {number: a, color: b, line: c};
	});

var _w0rm$elm_font_dimensions$OpenSolid_Viewpoint$modelViewMatrix = F2(
	function (_p0, modelFrame) {
		var _p1 = _p0;
		return _opensolid$linear_algebra_interop$OpenSolid_Interop_LinearAlgebra_Frame3d$toMat4(
			A2(_opensolid$geometry$OpenSolid_Frame3d$relativeTo, _p1._0, modelFrame));
	});
var _w0rm$elm_font_dimensions$OpenSolid_Viewpoint$viewMatrix = function (_p2) {
	var _p3 = _p2;
	return _opensolid$linear_algebra_interop$OpenSolid_Interop_LinearAlgebra_Frame3d$toMat4(
		A2(_opensolid$geometry$OpenSolid_Frame3d$relativeTo, _p3._0, _opensolid$geometry$OpenSolid_Frame3d$xyz));
};
var _w0rm$elm_font_dimensions$OpenSolid_Viewpoint$yDirection = function (_p4) {
	var _p5 = _p4;
	return _opensolid$geometry$OpenSolid_Frame3d$yDirection(_p5._0);
};
var _w0rm$elm_font_dimensions$OpenSolid_Viewpoint$xDirection = function (_p6) {
	var _p7 = _p6;
	return _opensolid$geometry$OpenSolid_Frame3d$xDirection(_p7._0);
};
var _w0rm$elm_font_dimensions$OpenSolid_Viewpoint$viewPlane = function (_p8) {
	var _p9 = _p8;
	return _opensolid$geometry$OpenSolid_Frame3d$xySketchPlane(_p9._0);
};
var _w0rm$elm_font_dimensions$OpenSolid_Viewpoint$viewDirection = function (_p10) {
	var _p11 = _p10;
	return _opensolid$geometry$OpenSolid_Direction3d$flip(
		_opensolid$geometry$OpenSolid_Frame3d$zDirection(_p11._0));
};
var _w0rm$elm_font_dimensions$OpenSolid_Viewpoint$eyePoint = function (_p12) {
	var _p13 = _p12;
	return _opensolid$geometry$OpenSolid_Frame3d$originPoint(_p13._0);
};
var _w0rm$elm_font_dimensions$OpenSolid_Viewpoint$Viewpoint = function (a) {
	return {ctor: 'Viewpoint', _0: a};
};
var _w0rm$elm_font_dimensions$OpenSolid_Viewpoint$lookAt = function (_p14) {
	var _p15 = _p14;
	var _p20 = _p15.upDirection;
	var _p19 = _p15.eyePoint;
	var yVector = _opensolid$geometry$OpenSolid_Direction3d$toVector(_p20);
	var zVector = A2(_opensolid$geometry$OpenSolid_Vector3d$from, _p15.focalPoint, _p19);
	var xVector = A2(_opensolid$geometry$OpenSolid_Vector3d$crossProduct, yVector, zVector);
	var _p16 = _opensolid$geometry$OpenSolid_Direction3d$orthonormalize(
		{ctor: '_Tuple3', _0: zVector, _1: yVector, _2: xVector});
	if (_p16.ctor === 'Just') {
		return _w0rm$elm_font_dimensions$OpenSolid_Viewpoint$Viewpoint(
			_opensolid$geometry$OpenSolid_Frame3d$unsafe(
				{originPoint: _p19, xDirection: _p16._0._2, yDirection: _p16._0._1, zDirection: _p16._0._0}));
	} else {
		var _p17 = _opensolid$geometry$OpenSolid_Vector3d$direction(zVector);
		if (_p17.ctor === 'Just') {
			return _w0rm$elm_font_dimensions$OpenSolid_Viewpoint$Viewpoint(
				_opensolid$geometry$OpenSolid_Frame3d$with(
					{originPoint: _p19, zDirection: _p17._0}));
		} else {
			var _p18 = _opensolid$geometry$OpenSolid_Direction3d$perpendicularBasis(_p20);
			var zDirection = _p18._0;
			var xDirection = _p18._1;
			return _w0rm$elm_font_dimensions$OpenSolid_Viewpoint$Viewpoint(
				_opensolid$geometry$OpenSolid_Frame3d$unsafe(
					{originPoint: _p19, xDirection: xDirection, yDirection: _p20, zDirection: zDirection}));
		}
	}
};

var _w0rm$elm_font_dimensions$OpenSolid_Camera$projectionMatrix = function (_p0) {
	var _p1 = _p0;
	return _p1._0.projectionMatrix;
};
var _w0rm$elm_font_dimensions$OpenSolid_Camera$screenHeight = function (_p2) {
	var _p3 = _p2;
	return _p3._0.screenHeight;
};
var _w0rm$elm_font_dimensions$OpenSolid_Camera$screenWidth = function (_p4) {
	var _p5 = _p4;
	return _p5._0.screenWidth;
};
var _w0rm$elm_font_dimensions$OpenSolid_Camera$viewpoint = function (_p6) {
	var _p7 = _p6;
	return _p7._0.viewpoint;
};
var _w0rm$elm_font_dimensions$OpenSolid_Camera$viewMatrix = function (camera) {
	return _w0rm$elm_font_dimensions$OpenSolid_Viewpoint$viewMatrix(
		_w0rm$elm_font_dimensions$OpenSolid_Camera$viewpoint(camera));
};
var _w0rm$elm_font_dimensions$OpenSolid_Camera$modelViewMatrix = F2(
	function (camera, modelFrame) {
		return A2(
			_w0rm$elm_font_dimensions$OpenSolid_Viewpoint$modelViewMatrix,
			_w0rm$elm_font_dimensions$OpenSolid_Camera$viewpoint(camera),
			modelFrame);
	});
var _w0rm$elm_font_dimensions$OpenSolid_Camera$modelViewProjectionMatrix = F2(
	function (camera, modelFrame) {
		return A2(
			_elm_community$linear_algebra$Math_Matrix4$mul,
			_w0rm$elm_font_dimensions$OpenSolid_Camera$projectionMatrix(camera),
			A2(_w0rm$elm_font_dimensions$OpenSolid_Camera$modelViewMatrix, camera, modelFrame));
	});
var _w0rm$elm_font_dimensions$OpenSolid_Camera$Camera = function (a) {
	return {ctor: 'Camera', _0: a};
};
var _w0rm$elm_font_dimensions$OpenSolid_Camera$perspective = function (_p8) {
	var _p9 = _p8;
	var _p11 = _p9.screenWidth;
	var _p10 = _p9.screenHeight;
	var fovInDegrees = _elm_community$basics_extra$Basics_Extra$inDegrees(_p9.verticalFieldOfView);
	var aspectRatio = _p11 / _p10;
	var projectionMatrix = A4(_elm_community$linear_algebra$Math_Matrix4$makePerspective, fovInDegrees, aspectRatio, _p9.nearClipDistance, _p9.farClipDistance);
	return _w0rm$elm_font_dimensions$OpenSolid_Camera$Camera(
		{viewpoint: _p9.viewpoint, screenWidth: _p11, screenHeight: _p10, projectionMatrix: projectionMatrix});
};
var _w0rm$elm_font_dimensions$OpenSolid_Camera$orthographic = function (_p12) {
	var _p13 = _p12;
	var _p16 = _p13.viewportHeight;
	var _p15 = _p13.screenWidth;
	var _p14 = _p13.screenHeight;
	var top = _p16 / 2;
	var bottom = (0 - _p16) / 2;
	var aspectRatio = _p15 / _p14;
	var viewportWidth = aspectRatio * _p16;
	var left = (0 - viewportWidth) / 2;
	var right = viewportWidth / 2;
	var projectionMatrix = A6(_elm_community$linear_algebra$Math_Matrix4$makeOrtho, left, right, bottom, top, _p13.nearClipDistance, _p13.farClipDistance);
	return _w0rm$elm_font_dimensions$OpenSolid_Camera$Camera(
		{viewpoint: _p13.viewpoint, screenWidth: _p15, screenHeight: _p14, projectionMatrix: projectionMatrix});
};

var _w0rm$elm_font_dimensions$OpenSolid_Camera_Point3d$toScreenSpace = function (camera) {
	var halfHeight = 0.5 * _w0rm$elm_font_dimensions$OpenSolid_Camera$screenHeight(camera);
	var halfWidth = 0.5 * _w0rm$elm_font_dimensions$OpenSolid_Camera$screenWidth(camera);
	var viewMatrix = _w0rm$elm_font_dimensions$OpenSolid_Camera$viewMatrix(camera);
	var projectionMatrix = _w0rm$elm_font_dimensions$OpenSolid_Camera$projectionMatrix(camera);
	var viewProjectionMatrix = A2(_elm_community$linear_algebra$Math_Matrix4$mul, projectionMatrix, viewMatrix);
	var _p0 = _elm_community$linear_algebra$Math_Matrix4$toRecord(viewProjectionMatrix);
	var m11 = _p0.m11;
	var m12 = _p0.m12;
	var m13 = _p0.m13;
	var m14 = _p0.m14;
	var m21 = _p0.m21;
	var m22 = _p0.m22;
	var m23 = _p0.m23;
	var m24 = _p0.m24;
	var m41 = _p0.m41;
	var m42 = _p0.m42;
	var m43 = _p0.m43;
	var m44 = _p0.m44;
	return function (point) {
		var _p1 = _opensolid$geometry$OpenSolid_Point3d$coordinates(point);
		var x = _p1._0;
		var y = _p1._1;
		var z = _p1._2;
		var w = (((m41 * x) + (m42 * y)) + (m43 * z)) + m44;
		var ndcX = ((((m11 * x) + (m12 * y)) + (m13 * z)) + m14) / w;
		var ndcY = ((((m21 * x) + (m22 * y)) + (m23 * z)) + m24) / w;
		return _opensolid$geometry$OpenSolid_Point2d$fromCoordinates(
			{ctor: '_Tuple2', _0: halfWidth + (halfWidth * ndcX), _1: halfHeight + (halfHeight * ndcY)});
	};
};

var _w0rm$elm_font_dimensions$OpenSolid_Camera_LineSegment3d$toScreenSpace = function (camera) {
	var project = _w0rm$elm_font_dimensions$OpenSolid_Camera_Point3d$toScreenSpace(camera);
	return function (lineSegment) {
		var _p0 = _opensolid$geometry$OpenSolid_LineSegment3d$endpoints(lineSegment);
		var p1 = _p0._0;
		var p2 = _p0._1;
		return _opensolid$geometry$OpenSolid_LineSegment2d$fromEndpoints(
			{
				ctor: '_Tuple2',
				_0: project(p1),
				_1: project(p2)
			});
	};
};

var _w0rm$elm_font_dimensions$FontDimensions$viewStyle = function (url) {
	return A3(
		_elm_lang$html$Html$node,
		'style',
		{ctor: '[]'},
		{
			ctor: '::',
			_0: _elm_lang$html$Html$text(
				A2(
					_elm_lang$core$Basics_ops['++'],
					'\n\n        @font-face {\n            font-family: \'Voto Serif GX\';\n            src: url(\'',
					A2(_elm_lang$core$Basics_ops['++'], url, '\') format(\'truetype\');\n        }\n\n        body,\n        html {\n            margin: 0;\n            padding: 0\n        }\n\n        input[type=file] {\n            position: absolute;\n            left: 30px;\n            top: 20px;\n            margin: 0;\n            z-index: 1;\n        }\n\n        input[type=range] {\n            -webkit-appearance: none;\n            margin: 18px 0;\n            width: 100%;\n        }\n\n        input[type=range]:focus {\n            outline: none;\n        }\n\n        input[type=range]::-webkit-slider-runnable-track {\n            width: 100%;\n            height: 2px;\n            cursor: pointer;\n            background: currentColor;\n        }\n\n        input[type=range]::-webkit-slider-thumb {\n            height: 16px;\n            width: 16px;\n            border-radius: 8px;\n            background: currentColor;\n            cursor: pointer;\n            -webkit-appearance: none;\n            margin-top: -8px;\n        }\n\n        input[type=range]:focus::-webkit-slider-runnable-track {\n            background: currentColor;\n        }\n\n        input[type=range]::-moz-range-track {\n            width: 100%;\n            height: 2px;\n            cursor: pointer;\n            background: currentColor;\n        }\n\n        input[type=range]::-moz-range-thumb {\n            height: 16px;\n            width: 16px;\n            border-radius: 8px;\n            background: currentColor;\n            cursor: pointer;\n        }\n\n        input[type=range]::-ms-track {\n            width: 100%;\n            height: 2px;\n            cursor: pointer;\n            background: currentColor;\n            border-color: transparent;\n            border-width: 8px 0;\n            color: transparent;\n        }\n\n        input[type=range]::-ms-fill-lower {\n            background: transparent;\n        }\n\n        input[type=range]::-ms-fill-upper {\n            background: transparent;\n        }\n\n        input[type=range]::-ms-thumb {\n            height: 16px;\n            width: 16px;\n            border-radius: 8px;\n            background: currentColor;\n            cursor: pointer;\n        }\n\n        input[type=range]:focus::-ms-fill-lower {\n            background: transparent;\n        }\n\n        input[type=range]:focus::-ms-fill-upper {\n            background: transparent;\n        }\n'))),
			_1: {ctor: '[]'}
		});
};
var _w0rm$elm_font_dimensions$FontDimensions$viewStructure = function (model) {
	var strokeWidth = _elm_lang$svg$Svg_Attributes$strokeWidth(
		_elm_lang$core$Basics$toString(
			A2(
				_elm_lang$core$Basics$max,
				1,
				8 - _elm_lang$core$Basics$toFloat(model.dimensionsCount))));
	var screenCenter = _opensolid$geometry$OpenSolid_Point2d$fromCoordinates(
		{ctor: '_Tuple2', _0: model.width / 2, _1: model.height / 2});
	var upDirection = _opensolid$geometry$OpenSolid_SketchPlane3d$yDirection(model.sketchPlane);
	var distance = 10 - (model.perspective * 0.9);
	var eyePoint = _opensolid$geometry$OpenSolid_SketchPlane3d$originPoint(
		A2(
			_opensolid$geometry$OpenSolid_SketchPlane3d$offsetBy,
			0 - distance,
			A2(_opensolid$geometry$OpenSolid_SketchPlane3d$moveTo, model.structure.focalPoint, model.sketchPlane)));
	var viewpoint = _w0rm$elm_font_dimensions$OpenSolid_Viewpoint$lookAt(
		{eyePoint: eyePoint, focalPoint: model.structure.focalPoint, upDirection: upDirection});
	var camera = _w0rm$elm_font_dimensions$OpenSolid_Camera$perspective(
		{
			viewpoint: viewpoint,
			verticalFieldOfView: _elm_lang$core$Basics$degrees(30),
			nearClipDistance: 0.1,
			farClipDistance: 1000,
			screenWidth: model.width,
			screenHeight: model.height
		});
	var line3dToScreenSpace = _w0rm$elm_font_dimensions$OpenSolid_Camera_LineSegment3d$toScreenSpace(camera);
	var point3dToScreenSpace = _w0rm$elm_font_dimensions$OpenSolid_Camera_Point3d$toScreenSpace(camera);
	var scale2d = (distance * _elm_lang$core$Basics$tan(
		_elm_lang$core$Basics$degrees(15))) * 2;
	var mapLine = function (_p0) {
		var _p1 = _p0;
		return A2(
			_opensolid$svg$OpenSolid_Svg$lineSegment2d,
			{
				ctor: '::',
				_0: _elm_lang$svg$Svg_Attributes$stroke(_p1.color),
				_1: {
					ctor: '::',
					_0: strokeWidth,
					_1: {ctor: '[]'}
				}
			},
			A3(
				_opensolid$geometry$OpenSolid_LineSegment2d$scaleAbout,
				screenCenter,
				scale2d,
				line3dToScreenSpace(_p1.line)));
	};
	var mapCoordinate = function (_p2) {
		var _p3 = _p2;
		return A2(
			_opensolid$svg$OpenSolid_Svg$lineSegment2d,
			{
				ctor: '::',
				_0: _elm_lang$svg$Svg_Attributes$stroke(_p3.color),
				_1: {
					ctor: '::',
					_0: _elm_lang$svg$Svg_Attributes$strokeOpacity('0.5'),
					_1: {
						ctor: '::',
						_0: _elm_lang$svg$Svg_Attributes$strokeDasharray('10 10'),
						_1: {
							ctor: '::',
							_0: strokeWidth,
							_1: {ctor: '[]'}
						}
					}
				}
			},
			A3(
				_opensolid$geometry$OpenSolid_LineSegment2d$scaleAbout,
				screenCenter,
				scale2d,
				line3dToScreenSpace(_p3.line)));
	};
	var mapPoint = function (_p4) {
		var _p5 = _p4;
		return A3(
			_opensolid$svg$OpenSolid_Svg$point2dWith,
			{
				radius: 10 - _elm_lang$core$Basics$toFloat(model.dimensionsCount)
			},
			{
				ctor: '::',
				_0: _elm_lang$svg$Svg_Attributes$fill(_p5.color),
				_1: {ctor: '[]'}
			},
			A3(
				_opensolid$geometry$OpenSolid_Point2d$scaleAbout,
				screenCenter,
				scale2d,
				point3dToScreenSpace(_p5.point)));
	};
	var mapValue = function (point) {
		return A3(
			_opensolid$svg$OpenSolid_Svg$point2dWith,
			{
				radius: 10 - _elm_lang$core$Basics$toFloat(model.dimensionsCount)
			},
			{
				ctor: '::',
				_0: _elm_lang$svg$Svg_Attributes$fill('#fff'),
				_1: {
					ctor: '::',
					_0: _elm_lang$svg$Svg_Attributes$stroke('#000'),
					_1: {
						ctor: '::',
						_0: _elm_lang$svg$Svg_Attributes$strokeWidth('2'),
						_1: {ctor: '[]'}
					}
				}
			},
			A3(
				_opensolid$geometry$OpenSolid_Point2d$scaleAbout,
				screenCenter,
				scale2d,
				point3dToScreenSpace(point)));
	};
	return _elm_lang$core$List$concat(
		{
			ctor: '::',
			_0: A2(_elm_lang$core$List$map, mapCoordinate, model.structure.coordinates),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$core$List$map,
					mapLine,
					A2(_w0rm$elm_font_dimensions$Structure$sortLinesByDistanceToPoint, eyePoint, model.structure.lines)),
				_1: {
					ctor: '::',
					_0: A2(_elm_lang$core$List$map, mapPoint, model.structure.points),
					_1: {
						ctor: '::',
						_0: {
							ctor: '::',
							_0: mapValue(model.structure.value),
							_1: {ctor: '[]'}
						},
						_1: {ctor: '[]'}
					}
				}
			}
		});
};
var _w0rm$elm_font_dimensions$FontDimensions$update = F2(
	function (msg, model) {
		var _p6 = msg;
		switch (_p6.ctor) {
			case 'LoadFont':
				var _p7 = _p6._0;
				var dimensions = _w0rm$elm_font_dimensions$Structure$dimensions(_p7.dimensions);
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							url: _p7.url,
							title: _p7.title,
							dimensions: dimensions,
							dimensionsCount: _elm_lang$core$List$length(dimensions),
							structure: A2(
								_w0rm$elm_font_dimensions$Structure$structure,
								dimensions,
								_elm_lang$core$List$length(dimensions))
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'Noop':
				return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
			case 'ChangeValue':
				var newDimensions = A2(
					_elm_lang$core$List$map,
					function (dimension) {
						return _elm_lang$core$Native_Utils.eq(dimension.number, _p6._0) ? _elm_lang$core$Native_Utils.update(
							dimension,
							{value: _p6._1}) : dimension;
					},
					model.dimensions);
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							dimensions: newDimensions,
							structure: A2(_w0rm$elm_font_dimensions$Structure$structure, newDimensions, model.dimensionsCount)
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'ChangeDistance':
				var newDimensions = A2(
					_elm_lang$core$List$map,
					function (dimension) {
						return _elm_lang$core$Native_Utils.eq(dimension.number, _p6._0) ? _elm_lang$core$Native_Utils.update(
							dimension,
							{distance: _p6._1}) : dimension;
					},
					model.dimensions);
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							dimensions: newDimensions,
							structure: A2(_w0rm$elm_font_dimensions$Structure$structure, newDimensions, model.dimensionsCount)
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'ChangeDimensions':
				var _p8 = _p6._0;
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							dimensionsCount: _p8,
							structure: A2(_w0rm$elm_font_dimensions$Structure$structure, model.dimensions, _p8)
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'ChangeTab':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{tab: _p6._0}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'ChangePerspective':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{perspective: _p6._0}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'Resize':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							width: _elm_lang$core$Basics$toFloat(_p6._0.width),
							height: _elm_lang$core$Basics$toFloat(_p6._0.height)
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'MouseDown':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{
							mouse: _elm_lang$core$Maybe$Just(
								_opensolid$geometry$OpenSolid_Point2d$fromCoordinates(
									{
										ctor: '_Tuple2',
										_0: _elm_lang$core$Basics$toFloat(_p6._0.x),
										_1: _elm_lang$core$Basics$toFloat(_p6._0.y)
									}))
						}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			case 'MouseUp':
				return {
					ctor: '_Tuple2',
					_0: _elm_lang$core$Native_Utils.update(
						model,
						{mouse: _elm_lang$core$Maybe$Nothing}),
					_1: _elm_lang$core$Platform_Cmd$none
				};
			default:
				var _p9 = model.mouse;
				if (_p9.ctor === 'Just') {
					var _p10 = _p9._0;
					var deltaY = _elm_lang$core$Basics$toFloat(_p6._0.y) - _opensolid$geometry$OpenSolid_Point2d$yCoordinate(_p10);
					var deltaX = _elm_lang$core$Basics$toFloat(_p6._0.x) - _opensolid$geometry$OpenSolid_Point2d$xCoordinate(_p10);
					return {
						ctor: '_Tuple2',
						_0: _elm_lang$core$Native_Utils.update(
							model,
							{
								sketchPlane: A3(
									_opensolid$geometry$OpenSolid_SketchPlane3d$rotateAroundOwn,
									_opensolid$geometry$OpenSolid_SketchPlane3d$yAxis,
									-1.0e-4 * deltaX,
									A3(_opensolid$geometry$OpenSolid_SketchPlane3d$rotateAroundOwn, _opensolid$geometry$OpenSolid_SketchPlane3d$xAxis, -1.0e-4 * deltaY, model.sketchPlane))
							}),
						_1: _elm_lang$core$Platform_Cmd$none
					};
				} else {
					return {ctor: '_Tuple2', _0: model, _1: _elm_lang$core$Platform_Cmd$none};
				}
		}
	});
var _w0rm$elm_font_dimensions$FontDimensions$initialDimensions = _w0rm$elm_font_dimensions$Structure$dimensions(
	{
		ctor: '::',
		_0: {name: 'wght', title: 'Weight', min: 28, max: 194, value: 94},
		_1: {
			ctor: '::',
			_0: {name: 'wdth', title: 'Width', min: 50, max: 130, value: 100},
			_1: {
				ctor: '::',
				_0: {name: 'opsz', title: 'Optical Size', min: 12, max: 72, value: 12},
				_1: {ctor: '[]'}
			}
		}
	});
var _w0rm$elm_font_dimensions$FontDimensions$loadFont = _elm_lang$core$Native_Platform.incomingPort(
	'loadFont',
	A2(
		_elm_lang$core$Json_Decode$andThen,
		function (title) {
			return A2(
				_elm_lang$core$Json_Decode$andThen,
				function (url) {
					return A2(
						_elm_lang$core$Json_Decode$andThen,
						function (dimensions) {
							return _elm_lang$core$Json_Decode$succeed(
								{title: title, url: url, dimensions: dimensions});
						},
						A2(
							_elm_lang$core$Json_Decode$field,
							'dimensions',
							_elm_lang$core$Json_Decode$list(
								A2(
									_elm_lang$core$Json_Decode$andThen,
									function (value) {
										return A2(
											_elm_lang$core$Json_Decode$andThen,
											function (min) {
												return A2(
													_elm_lang$core$Json_Decode$andThen,
													function (max) {
														return A2(
															_elm_lang$core$Json_Decode$andThen,
															function (title) {
																return A2(
																	_elm_lang$core$Json_Decode$andThen,
																	function (name) {
																		return _elm_lang$core$Json_Decode$succeed(
																			{value: value, min: min, max: max, title: title, name: name});
																	},
																	A2(_elm_lang$core$Json_Decode$field, 'name', _elm_lang$core$Json_Decode$string));
															},
															A2(_elm_lang$core$Json_Decode$field, 'title', _elm_lang$core$Json_Decode$string));
													},
													A2(_elm_lang$core$Json_Decode$field, 'max', _elm_lang$core$Json_Decode$float));
											},
											A2(_elm_lang$core$Json_Decode$field, 'min', _elm_lang$core$Json_Decode$float));
									},
									A2(_elm_lang$core$Json_Decode$field, 'value', _elm_lang$core$Json_Decode$float)))));
				},
				A2(_elm_lang$core$Json_Decode$field, 'url', _elm_lang$core$Json_Decode$string));
		},
		A2(_elm_lang$core$Json_Decode$field, 'title', _elm_lang$core$Json_Decode$string)));
var _w0rm$elm_font_dimensions$FontDimensions$Model = function (a) {
	return function (b) {
		return function (c) {
			return function (d) {
				return function (e) {
					return function (f) {
						return function (g) {
							return function (h) {
								return function (i) {
									return function (j) {
										return function (k) {
											return function (l) {
												return {width: a, height: b, mouse: c, sketchPlane: d, structure: e, dimensionsCount: f, dimensions: g, perspective: h, url: i, text: j, tab: k, title: l};
											};
										};
									};
								};
							};
						};
					};
				};
			};
		};
	};
};
var _w0rm$elm_font_dimensions$FontDimensions$Scales = {ctor: 'Scales'};
var _w0rm$elm_font_dimensions$FontDimensions$Values = {ctor: 'Values'};
var _w0rm$elm_font_dimensions$FontDimensions$tabs = {
	ctor: '::',
	_0: {ctor: '_Tuple2', _0: 'Values', _1: _w0rm$elm_font_dimensions$FontDimensions$Values},
	_1: {
		ctor: '::',
		_0: {ctor: '_Tuple2', _0: 'Scales', _1: _w0rm$elm_font_dimensions$FontDimensions$Scales},
		_1: {ctor: '[]'}
	}
};
var _w0rm$elm_font_dimensions$FontDimensions$Noop = {ctor: 'Noop'};
var _w0rm$elm_font_dimensions$FontDimensions$viewLetter = F2(
	function (valuesAndScales, text) {
		var fontVariationSettings = A2(
			_elm_lang$core$String$join,
			', ',
			A2(
				_elm_lang$core$List$map,
				function (_p11) {
					var _p12 = _p11;
					return A2(
						_elm_lang$core$Basics_ops['++'],
						'\'',
						A2(
							_elm_lang$core$Basics_ops['++'],
							_p12.name,
							A2(
								_elm_lang$core$Basics_ops['++'],
								'\' ',
								_elm_lang$core$Basics$toString(_p12.value))));
				},
				valuesAndScales));
		return A2(
			_elm_lang$html$Html$div,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$style(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'position', _1: 'absolute'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'bottom', _1: '0'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'left', _1: '0'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'max-width', _1: '100%'},
									_1: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'max-height', _1: '100%'},
										_1: {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'box-sizing', _1: 'border-box'},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: 'padding', _1: '0 50px'},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: 'outline', _1: 'none'},
													_1: {
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: 'font-family', _1: '\'Voto Serif GX\''},
														_1: {
															ctor: '::',
															_0: {ctor: '_Tuple2', _0: 'font-size', _1: '200px'},
															_1: {
																ctor: '::',
																_0: {ctor: '_Tuple2', _0: 'line-height', _1: '1.5'},
																_1: {
																	ctor: '::',
																	_0: {ctor: '_Tuple2', _0: 'text-rendering', _1: 'optimizeLegibility'},
																	_1: {
																		ctor: '::',
																		_0: {ctor: '_Tuple2', _0: 'caret-color', _1: '#909090'},
																		_1: {
																			ctor: '::',
																			_0: {ctor: '_Tuple2', _0: 'font-variation-settings', _1: fontVariationSettings},
																			_1: {ctor: '[]'}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: A3(
						_elm_lang$html$Html_Events$onWithOptions,
						'mousedown',
						{stopPropagation: true, preventDefault: false},
						_elm_lang$core$Json_Decode$succeed(_w0rm$elm_font_dimensions$FontDimensions$Noop)),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$spellcheck(false),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$autocomplete(false),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$contenteditable(true),
								_1: {ctor: '[]'}
							}
						}
					}
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(text),
				_1: {ctor: '[]'}
			});
	});
var _w0rm$elm_font_dimensions$FontDimensions$LoadFont = function (a) {
	return {ctor: 'LoadFont', _0: a};
};
var _w0rm$elm_font_dimensions$FontDimensions$ChangeTab = function (a) {
	return {ctor: 'ChangeTab', _0: a};
};
var _w0rm$elm_font_dimensions$FontDimensions$viewTab = F2(
	function (activeTab, _p13) {
		var _p14 = _p13;
		var _p16 = _p14._0;
		var _p15 = _p14._1;
		return _elm_lang$core$Native_Utils.eq(activeTab, _p15) ? A2(
			_elm_lang$html$Html$span,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$style(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'border', _1: '1px solid #909090'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'border-bottom', _1: 'none'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'font', _1: 'inherit'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'display', _1: 'inline-block'},
									_1: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'padding', _1: '0 10px'},
										_1: {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'background', _1: '#fff'},
											_1: {ctor: '[]'}
										}
									}
								}
							}
						}
					}),
				_1: {ctor: '[]'}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(_p16),
				_1: {ctor: '[]'}
			}) : A2(
			_elm_lang$html$Html$button,
			{
				ctor: '::',
				_0: _elm_lang$html$Html_Attributes$style(
					{
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'border', _1: '1px solid transparent'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'border-bottom', _1: 'none'},
							_1: {
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'background', _1: 'transparent'},
								_1: {
									ctor: '::',
									_0: {ctor: '_Tuple2', _0: 'display', _1: 'inline-block'},
									_1: {
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'color', _1: '#909090'},
										_1: {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'outline', _1: 'none'},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: 'font', _1: 'inherit'},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: 'padding', _1: '0 10px'},
													_1: {
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: 'cursor', _1: 'pointer'},
														_1: {ctor: '[]'}
													}
												}
											}
										}
									}
								}
							}
						}
					}),
				_1: {
					ctor: '::',
					_0: _elm_lang$html$Html_Events$onClick(
						_w0rm$elm_font_dimensions$FontDimensions$ChangeTab(_p15)),
					_1: {ctor: '[]'}
				}
			},
			{
				ctor: '::',
				_0: _elm_lang$html$Html$text(_p16),
				_1: {ctor: '[]'}
			});
	});
var _w0rm$elm_font_dimensions$FontDimensions$ChangePerspective = function (a) {
	return {ctor: 'ChangePerspective', _0: a};
};
var _w0rm$elm_font_dimensions$FontDimensions$ChangeDistance = F2(
	function (a, b) {
		return {ctor: 'ChangeDistance', _0: a, _1: b};
	});
var _w0rm$elm_font_dimensions$FontDimensions$viewScaleSlider = function (_p17) {
	var _p18 = _p17;
	var _p22 = _p18.title;
	var _p21 = _p18.number;
	var _p20 = _p18.distance;
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$label,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$for(_p22),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$style(
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'display', _1: 'block'},
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text(
						A2(
							_elm_lang$core$Basics_ops['++'],
							'Axis ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p21 + 1),
								' '))),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$em,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(_p22),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html$text(
								A2(
									_elm_lang$core$Basics_ops['++'],
									' = ',
									_elm_lang$core$Basics$toString(
										_elm_lang$core$Basics$toFloat(
											_elm_lang$core$Basics$round(_p20 * 1000)) / 1000))),
							_1: {ctor: '[]'}
						}
					}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$input,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$id(_p22),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$type_('range'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$style(
									{
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'color', _1: _p18.color},
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Events$onInput(
										function (_p19) {
											return A2(
												_w0rm$elm_font_dimensions$FontDimensions$ChangeDistance,
												_p21,
												A2(
													_elm_lang$core$Result$withDefault,
													0,
													_elm_lang$core$String$toFloat(_p19)));
										}),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$min('0'),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$max('50'),
											_1: {
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$step('0.1'),
												_1: {
													ctor: '::',
													_0: _elm_lang$html$Html_Attributes$value(
														_elm_lang$core$Basics$toString(_p20)),
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					},
					{ctor: '[]'}),
				_1: {ctor: '[]'}
			}
		});
};
var _w0rm$elm_font_dimensions$FontDimensions$ChangeValue = F2(
	function (a, b) {
		return {ctor: 'ChangeValue', _0: a, _1: b};
	});
var _w0rm$elm_font_dimensions$FontDimensions$viewValueSlider = function (_p23) {
	var _p24 = _p23;
	var _p28 = _p24.value;
	var _p27 = _p24.title;
	var _p26 = _p24.number;
	return A2(
		_elm_lang$html$Html$div,
		{ctor: '[]'},
		{
			ctor: '::',
			_0: A2(
				_elm_lang$html$Html$label,
				{
					ctor: '::',
					_0: _elm_lang$html$Html_Attributes$for(_p27),
					_1: {
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$style(
							{
								ctor: '::',
								_0: {ctor: '_Tuple2', _0: 'display', _1: 'block'},
								_1: {ctor: '[]'}
							}),
						_1: {ctor: '[]'}
					}
				},
				{
					ctor: '::',
					_0: _elm_lang$html$Html$text(
						A2(
							_elm_lang$core$Basics_ops['++'],
							'Axis ',
							A2(
								_elm_lang$core$Basics_ops['++'],
								_elm_lang$core$Basics$toString(_p26 + 1),
								' '))),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$em,
							{ctor: '[]'},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(_p27),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html$text(
								A2(
									_elm_lang$core$Basics_ops['++'],
									' = ',
									_elm_lang$core$Basics$toString(
										_elm_lang$core$Basics$round(_p28)))),
							_1: {ctor: '[]'}
						}
					}
				}),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$html$Html$input,
					{
						ctor: '::',
						_0: _elm_lang$html$Html_Attributes$id(_p27),
						_1: {
							ctor: '::',
							_0: _elm_lang$html$Html_Attributes$type_('range'),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$style(
									{
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'color', _1: _p24.color},
										_1: {ctor: '[]'}
									}),
								_1: {
									ctor: '::',
									_0: _elm_lang$html$Html_Events$onInput(
										function (_p25) {
											return A2(
												_w0rm$elm_font_dimensions$FontDimensions$ChangeValue,
												_p26,
												A2(
													_elm_lang$core$Result$withDefault,
													0,
													_elm_lang$core$String$toFloat(_p25)));
										}),
									_1: {
										ctor: '::',
										_0: _elm_lang$html$Html_Attributes$min(
											_elm_lang$core$Basics$toString(_p24.min)),
										_1: {
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$max(
												_elm_lang$core$Basics$toString(_p24.max)),
											_1: {
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$step('1'),
												_1: {
													ctor: '::',
													_0: _elm_lang$html$Html_Attributes$value(
														_elm_lang$core$Basics$toString(_p28)),
													_1: {ctor: '[]'}
												}
											}
										}
									}
								}
							}
						}
					},
					{ctor: '[]'}),
				_1: {ctor: '[]'}
			}
		});
};
var _w0rm$elm_font_dimensions$FontDimensions$ChangeDimensions = function (a) {
	return {ctor: 'ChangeDimensions', _0: a};
};
var _w0rm$elm_font_dimensions$FontDimensions$view = function (model) {
	var centerFrame = _opensolid$geometry$OpenSolid_Frame2d$with(
		{
			originPoint: _opensolid$geometry$OpenSolid_Point2d$fromCoordinates(
				{ctor: '_Tuple2', _0: (0 - model.width) / 2, _1: (0 - model.height) / 2}),
			xDirection: _opensolid$geometry$OpenSolid_Direction2d$positiveX
		});
	return A2(
		_elm_lang$html$Html$div,
		{
			ctor: '::',
			_0: _elm_lang$html$Html_Attributes$style(
				{
					ctor: '::',
					_0: {ctor: '_Tuple2', _0: 'position', _1: 'absolute'},
					_1: {
						ctor: '::',
						_0: {ctor: '_Tuple2', _0: 'width', _1: '100%'},
						_1: {
							ctor: '::',
							_0: {ctor: '_Tuple2', _0: 'height', _1: '100%'},
							_1: {ctor: '[]'}
						}
					}
				}),
			_1: {ctor: '[]'}
		},
		{
			ctor: '::',
			_0: _w0rm$elm_font_dimensions$FontDimensions$viewStyle(model.url),
			_1: {
				ctor: '::',
				_0: A2(
					_elm_lang$svg$Svg$svg,
					{
						ctor: '::',
						_0: _elm_lang$svg$Svg_Attributes$width(
							_elm_lang$core$Basics$toString(model.width)),
						_1: {
							ctor: '::',
							_0: _elm_lang$svg$Svg_Attributes$height(
								_elm_lang$core$Basics$toString(model.height)),
							_1: {
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$style(
									{
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'display', _1: 'block'},
										_1: {ctor: '[]'}
									}),
								_1: {ctor: '[]'}
							}
						}
					},
					_w0rm$elm_font_dimensions$FontDimensions$viewStructure(model)),
				_1: {
					ctor: '::',
					_0: A2(_w0rm$elm_font_dimensions$FontDimensions$viewLetter, model.dimensions, model.text),
					_1: {
						ctor: '::',
						_0: A2(
							_elm_lang$html$Html$div,
							{
								ctor: '::',
								_0: _elm_lang$html$Html_Attributes$style(
									{
										ctor: '::',
										_0: {ctor: '_Tuple2', _0: 'position', _1: 'absolute'},
										_1: {
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'left', _1: '30px'},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: 'top', _1: '60px'},
												_1: {ctor: '[]'}
											}
										}
									}),
								_1: {ctor: '[]'}
							},
							{
								ctor: '::',
								_0: _elm_lang$html$Html$text(model.title),
								_1: {ctor: '[]'}
							}),
						_1: {
							ctor: '::',
							_0: A2(
								_elm_lang$html$Html$div,
								{
									ctor: '::',
									_0: _elm_lang$html$Html_Attributes$style(
										{
											ctor: '::',
											_0: {ctor: '_Tuple2', _0: 'position', _1: 'absolute'},
											_1: {
												ctor: '::',
												_0: {ctor: '_Tuple2', _0: 'right', _1: '30px'},
												_1: {
													ctor: '::',
													_0: {ctor: '_Tuple2', _0: 'width', _1: '200px'},
													_1: {
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: 'top', _1: '30px'},
														_1: {ctor: '[]'}
													}
												}
											}
										}),
									_1: {
										ctor: '::',
										_0: A3(
											_elm_lang$html$Html_Events$onWithOptions,
											'mousedown',
											{stopPropagation: true, preventDefault: false},
											_elm_lang$core$Json_Decode$succeed(_w0rm$elm_font_dimensions$FontDimensions$Noop)),
										_1: {ctor: '[]'}
									}
								},
								{
									ctor: '::',
									_0: A2(
										_elm_lang$html$Html$label,
										{
											ctor: '::',
											_0: _elm_lang$html$Html_Attributes$for('dimensions'),
											_1: {
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$style(
													{
														ctor: '::',
														_0: {ctor: '_Tuple2', _0: 'display', _1: 'block'},
														_1: {ctor: '[]'}
													}),
												_1: {ctor: '[]'}
											}
										},
										{
											ctor: '::',
											_0: _elm_lang$html$Html$text(
												A2(
													_elm_lang$core$Basics_ops['++'],
													'Dimensions: ',
													_elm_lang$core$Basics$toString(model.dimensionsCount))),
											_1: {ctor: '[]'}
										}),
									_1: {
										ctor: '::',
										_0: A2(
											_elm_lang$html$Html$input,
											{
												ctor: '::',
												_0: _elm_lang$html$Html_Attributes$id('dimensions'),
												_1: {
													ctor: '::',
													_0: _elm_lang$html$Html_Attributes$type_('range'),
													_1: {
														ctor: '::',
														_0: _elm_lang$html$Html_Attributes$style(
															{
																ctor: '::',
																_0: {ctor: '_Tuple2', _0: 'color', _1: '#909090'},
																_1: {ctor: '[]'}
															}),
														_1: {
															ctor: '::',
															_0: _elm_lang$html$Html_Events$onInput(
																function (_p29) {
																	return _w0rm$elm_font_dimensions$FontDimensions$ChangeDimensions(
																		A2(
																			_elm_lang$core$Result$withDefault,
																			0,
																			_elm_lang$core$String$toInt(_p29)));
																}),
															_1: {
																ctor: '::',
																_0: _elm_lang$html$Html_Attributes$min('0'),
																_1: {
																	ctor: '::',
																	_0: _elm_lang$html$Html_Attributes$max(
																		_elm_lang$core$Basics$toString(
																			_elm_lang$core$List$length(model.dimensions))),
																	_1: {
																		ctor: '::',
																		_0: _elm_lang$html$Html_Attributes$step('1'),
																		_1: {
																			ctor: '::',
																			_0: _elm_lang$html$Html_Attributes$value(
																				_elm_lang$core$Basics$toString(model.dimensionsCount)),
																			_1: {ctor: '[]'}
																		}
																	}
																}
															}
														}
													}
												}
											},
											{ctor: '[]'}),
										_1: {
											ctor: '::',
											_0: A2(
												_elm_lang$html$Html$label,
												{
													ctor: '::',
													_0: _elm_lang$html$Html_Attributes$for('perspective'),
													_1: {
														ctor: '::',
														_0: _elm_lang$html$Html_Attributes$style(
															{
																ctor: '::',
																_0: {ctor: '_Tuple2', _0: 'display', _1: 'block'},
																_1: {ctor: '[]'}
															}),
														_1: {ctor: '[]'}
													}
												},
												{
													ctor: '::',
													_0: _elm_lang$html$Html$text('Perspective'),
													_1: {ctor: '[]'}
												}),
											_1: {
												ctor: '::',
												_0: A2(
													_elm_lang$html$Html$input,
													{
														ctor: '::',
														_0: _elm_lang$html$Html_Attributes$id('perspective'),
														_1: {
															ctor: '::',
															_0: _elm_lang$html$Html_Attributes$type_('range'),
															_1: {
																ctor: '::',
																_0: _elm_lang$html$Html_Attributes$style(
																	{
																		ctor: '::',
																		_0: {ctor: '_Tuple2', _0: 'color', _1: '#909090'},
																		_1: {ctor: '[]'}
																	}),
																_1: {
																	ctor: '::',
																	_0: _elm_lang$html$Html_Events$onInput(
																		function (_p30) {
																			return _w0rm$elm_font_dimensions$FontDimensions$ChangePerspective(
																				A2(
																					_elm_lang$core$Result$withDefault,
																					0,
																					_elm_lang$core$String$toFloat(_p30)));
																		}),
																	_1: {
																		ctor: '::',
																		_0: _elm_lang$html$Html_Attributes$min('0'),
																		_1: {
																			ctor: '::',
																			_0: _elm_lang$html$Html_Attributes$max('10'),
																			_1: {
																				ctor: '::',
																				_0: _elm_lang$html$Html_Attributes$step('0.5'),
																				_1: {
																					ctor: '::',
																					_0: _elm_lang$html$Html_Attributes$value(
																						_elm_lang$core$Basics$toString(model.perspective)),
																					_1: {ctor: '[]'}
																				}
																			}
																		}
																	}
																}
															}
														}
													},
													{ctor: '[]'}),
												_1: {
													ctor: '::',
													_0: A2(
														_elm_lang$html$Html$div,
														{
															ctor: '::',
															_0: _elm_lang$html$Html_Attributes$style(
																{
																	ctor: '::',
																	_0: {ctor: '_Tuple2', _0: 'border-bottom', _1: '1px solid #909090'},
																	_1: {
																		ctor: '::',
																		_0: {ctor: '_Tuple2', _0: 'height', _1: '35px'},
																		_1: {
																			ctor: '::',
																			_0: {ctor: '_Tuple2', _0: 'line-height', _1: '35px'},
																			_1: {
																				ctor: '::',
																				_0: {ctor: '_Tuple2', _0: 'margin', _1: '10px 0'},
																				_1: {
																					ctor: '::',
																					_0: {
																						ctor: '_Tuple2',
																						_0: 'display',
																						_1: _elm_lang$core$Native_Utils.eq(model.dimensionsCount, 0) ? 'none' : 'block'
																					},
																					_1: {ctor: '[]'}
																				}
																			}
																		}
																	}
																}),
															_1: {ctor: '[]'}
														},
														A2(
															_elm_lang$core$List$map,
															_w0rm$elm_font_dimensions$FontDimensions$viewTab(model.tab),
															_w0rm$elm_font_dimensions$FontDimensions$tabs)),
													_1: {
														ctor: '::',
														_0: A2(
															_elm_lang$html$Html$div,
															{ctor: '[]'},
															A2(
																_elm_lang$core$List$map,
																function () {
																	var _p31 = model.tab;
																	if (_p31.ctor === 'Values') {
																		return _w0rm$elm_font_dimensions$FontDimensions$viewValueSlider;
																	} else {
																		return _w0rm$elm_font_dimensions$FontDimensions$viewScaleSlider;
																	}
																}(),
																A2(_elm_lang$core$List$take, model.dimensionsCount, model.dimensions))),
														_1: {ctor: '[]'}
													}
												}
											}
										}
									}
								}),
							_1: {ctor: '[]'}
						}
					}
				}
			}
		});
};
var _w0rm$elm_font_dimensions$FontDimensions$MouseMove = function (a) {
	return {ctor: 'MouseMove', _0: a};
};
var _w0rm$elm_font_dimensions$FontDimensions$MouseUp = function (a) {
	return {ctor: 'MouseUp', _0: a};
};
var _w0rm$elm_font_dimensions$FontDimensions$MouseDown = function (a) {
	return {ctor: 'MouseDown', _0: a};
};
var _w0rm$elm_font_dimensions$FontDimensions$Resize = function (a) {
	return {ctor: 'Resize', _0: a};
};
var _w0rm$elm_font_dimensions$FontDimensions$init = {
	ctor: '_Tuple2',
	_0: {
		width: 1,
		height: 1,
		mouse: _elm_lang$core$Maybe$Nothing,
		sketchPlane: A3(
			_opensolid$geometry$OpenSolid_SketchPlane3d$rotateAroundOwn,
			_opensolid$geometry$OpenSolid_SketchPlane3d$yAxis,
			(0 - _elm_lang$core$Basics$pi) / 13,
			A3(_opensolid$geometry$OpenSolid_SketchPlane3d$rotateAroundOwn, _opensolid$geometry$OpenSolid_SketchPlane3d$xAxis, (0 - _elm_lang$core$Basics$pi) / 8, _opensolid$geometry$OpenSolid_SketchPlane3d$xy)),
		structure: A2(
			_w0rm$elm_font_dimensions$Structure$structure,
			_w0rm$elm_font_dimensions$FontDimensions$initialDimensions,
			_elm_lang$core$List$length(_w0rm$elm_font_dimensions$FontDimensions$initialDimensions)),
		dimensionsCount: _elm_lang$core$List$length(_w0rm$elm_font_dimensions$FontDimensions$initialDimensions),
		dimensions: _w0rm$elm_font_dimensions$FontDimensions$initialDimensions,
		perspective: 0,
		text: 'Afg',
		tab: _w0rm$elm_font_dimensions$FontDimensions$Values,
		url: 'assets/VotoSerifGX.latin1.ttf',
		title: 'VotoSerifGX.latin1.ttf'
	},
	_1: A2(_elm_lang$core$Task$perform, _w0rm$elm_font_dimensions$FontDimensions$Resize, _elm_lang$window$Window$size)
};
var _w0rm$elm_font_dimensions$FontDimensions$subscriptions = function (model) {
	return _elm_lang$core$Platform_Sub$batch(
		{
			ctor: '::',
			_0: _elm_lang$window$Window$resizes(_w0rm$elm_font_dimensions$FontDimensions$Resize),
			_1: {
				ctor: '::',
				_0: _elm_lang$mouse$Mouse$downs(_w0rm$elm_font_dimensions$FontDimensions$MouseDown),
				_1: {
					ctor: '::',
					_0: A2(
						_elm_lang$core$Maybe$withDefault,
						_elm_lang$core$Platform_Sub$none,
						A2(
							_elm_lang$core$Maybe$map,
							_elm_lang$core$Basics$always(
								_elm_lang$mouse$Mouse$moves(_w0rm$elm_font_dimensions$FontDimensions$MouseMove)),
							model.mouse)),
					_1: {
						ctor: '::',
						_0: _elm_lang$mouse$Mouse$ups(_w0rm$elm_font_dimensions$FontDimensions$MouseUp),
						_1: {
							ctor: '::',
							_0: _w0rm$elm_font_dimensions$FontDimensions$loadFont(_w0rm$elm_font_dimensions$FontDimensions$LoadFont),
							_1: {ctor: '[]'}
						}
					}
				}
			}
		});
};
var _w0rm$elm_font_dimensions$FontDimensions$main = _elm_lang$html$Html$program(
	{init: _w0rm$elm_font_dimensions$FontDimensions$init, view: _w0rm$elm_font_dimensions$FontDimensions$view, update: _w0rm$elm_font_dimensions$FontDimensions$update, subscriptions: _w0rm$elm_font_dimensions$FontDimensions$subscriptions})();

var Elm = {};
Elm['FontDimensions'] = Elm['FontDimensions'] || {};
if (typeof _w0rm$elm_font_dimensions$FontDimensions$main !== 'undefined') {
    _w0rm$elm_font_dimensions$FontDimensions$main(Elm['FontDimensions'], 'FontDimensions', undefined);
}

if (typeof define === "function" && define['amd'])
{
  define([], function() { return Elm; });
  return;
}

if (typeof module === "object")
{
  module['exports'] = Elm;
  return;
}

var globalElm = this['Elm'];
if (typeof globalElm === "undefined")
{
  this['Elm'] = Elm;
  return;
}

for (var publicModule in Elm)
{
  if (publicModule in globalElm)
  {
    throw new Error('There are two Elm modules called `' + publicModule + '` on this page! Rename one of them.');
  }
  globalElm[publicModule] = Elm[publicModule];
}

}).call(this);

