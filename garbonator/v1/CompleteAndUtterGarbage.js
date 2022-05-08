
// Helper words ---------------------------------------------------------

// generates 'constructor'
const constructorText = '({}+[])[!+[]+!+[]+!+[]+!+[]+!+[]]+({}+[])[+!+[]]+(!+[]/![]+[])[+!+[]]+(![]+[])[+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+(([][+[]])+[])[+[]]+({}+[])[!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+({}+[])[+!+[]]+(!![]+[])[+!+[]]';

// generates 'indexOf'
const indexOfText = '(!+[]/![]+[])[!+[]+!+[]+!+[]]+(!+[]/![]+[])[+!+[]]+(([][+[]])+[])[+!+[]+!+[]]+(!![]+[])[+!+[]+!+[]+!+[]]+((/[]/)[({}+[])[!+[]+!+[]+!+[]+!+[]+!+[]]+({}+[])[+!+[]]+(!+[]/![]+[])[+!+[]]+(![]+[])[+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+(([][+[]])+[])[+[]]+({}+[])[!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+({}+[])[+!+[]]+(!![]+[])[+!+[]]]+[])[((!+[]+!+[]+!+[])<<(!+[]+!+[]))+!+[]]+({}+[])[((!+[])<<(!+[]+!+[]+!+[]))]+(![]+[])[+[]]';

// generates 'sub'
const subText = '(![]+[])[+!+[]+!+[]+!+[]]+(([][+[]])+[])[+[]]+({}+[])[!+[]+!+[]]';

// generates 'prototype'
const prototypeText = '((/[]/)[({}+[])[!+[]+!+[]+!+[]+!+[]+!+[]]+({}+[])[+!+[]]+(!+[]/![]+[])[+!+[]]+(![]+[])[+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+(([][+[]])+[])[+[]]+({}+[])[!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+({}+[])[+!+[]]+(!![]+[])[+!+[]]]+[])[((!+[]+!+[]+!+[])<<(!+[]+!+[]))+!+[]+!+[]]+(!![]+[])[+!+[]]+({}+[])[+!+[]]+(!![]+[])[+[]]+({}+[])[+!+[]]+(!![]+[])[+[]]+(((!+[])/(+[]))+[])[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]+((/[]/)[({}+[])[!+[]+!+[]+!+[]+!+[]+!+[]]+({}+[])[+!+[]]+(!+[]/![]+[])[+!+[]]+(![]+[])[+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+(([][+[]])+[])[+[]]+({}+[])[!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+({}+[])[+!+[]]+(!![]+[])[+!+[]]]+[])[((!+[]+!+[]+!+[])<<(!+[]+!+[]))+!+[]+!+[]]+(!![]+[])[+!+[]+!+[]+!+[]]';

// generates 'return '
const returnText = '(!![]+[])[+!+[]]+(!![]+[])[+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(([][+[]])+[])[+[]]+(!![]+[])[+!+[]]+(!+[]/![]+[])[+!+[]]+({}+[])[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]';

// generate 'Audio'
const AudioText = '([]['+ constructorText + ']+[])[((!+[])<<(!+[]+!+[]+!+[]))+!+[]]+(([][+[]])+[])[+[]]+(([][+[]])+[])[+!+[]+!+[]]+(!+[]/![]+[])[!+[]+!+[]+!+[]]+({}+[])[+!+[]]'

// creates function Audio
const audioFunction = '([]+[])['+ subText +'][' + constructorText + '](' + returnText + '+' + AudioText + ')()';

// generates 'atob'
const atobText = '(![]+[])[+!+[]]+(!![]+[])[+[]]+({}+[])[+!+[]]+({}+[])[!+[]+!+[]]';

// creates function atob
const atobfunction = '([]+[])['+ subText +'][' + constructorText + '](' + returnText + '+' + atobText + ')()';

// generates 'btoa'
btoaText = '({}+[])[!+[]+!+[]]+(!![]+[])[+[]]+({}+[])[+!+[]]+(![]+[])[+!+[]]';

// creates function btoa
const btoafunction = '([]+[])['+ subText +'][' + constructorText + '](' + returnText + '+' + btoaText + ')()';

// generates 'enEi'
const enEi = '(!![]+[])[+!+[]+!+[]+!+[]]+(!+[]/![]+[])[+!+[]]+((/[]/)[' + constructorText +']+[])[((!+[]+!+[]+!+[])<<(!+[]+!+[]))]+(!+[]/![]+[])[!+[]+!+[]+!+[]]'

// generates 'document'
const documentText = '(([][+[]])+[])[+!+[]+!+[]]+({}+[])[+!+[]]+({}+[])[!+[]+!+[]+!+[]+!+[]+!+[]]+(([][+[]])+[])[+[]]+(((!+[])/(+[]))[({}+[])[!+[]+!+[]+!+[]+!+[]+!+[]]+({}+[])[+!+[]]+(!+[]/![]+[])[+!+[]]+(![]+[])[+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+(!![]+[])[+!+[]]+(([][+[]])+[])[+[]]+({}+[])[!+[]+!+[]+!+[]+!+[]+!+[]]+(!![]+[])[+[]]+({}+[])[+!+[]]+(!![]+[])[+!+[]]]+[])[((!+[])<<(!+[]+!+[]+!+[]))+!+[]+!+[]+!+[]]+(!![]+[])[+!+[]+!+[]+!+[]]+(!+[]/![]+[])[+!+[]]+(!![]+[])[+[]]';

// return document
const documentfunction = '([]+[])['+ subText +'][' + constructorText + '](' + returnText + '+' + documentText + ')()';

// generates 'fromCodePoint'
fromCodePointText = '(![]+[])[+[]]+(!![]+[])[+!+[]]+({}+[])[+!+[]]+(((!+[])/(+[]))[' + constructorText + ']+[])[((!+[])<<(!+[]+!+[]+!+[]))+!+[]+!+[]+!+[]]+' + btoafunction + '((/</+[])[+!+[]]+(/!/+[])[+!+[]])[+!+[]]+({}+[])[+!+[]]+(([][+[]])+[])[+!+[]+!+[]]+(!![]+[])[+!+[]+!+[]+!+[]]+' + btoafunction + '((/</+[])[+!+[]]+(/!/+[])[+!+[]])[+[]]+({}+[])[+!+[]]+(!+[]/![]+[])[!+[]+!+[]+!+[]]+(!+[]/![]+[])[+!+[]]+(!![]+[])[+[]]';

//  
fromCodePointFunctionStart = '([]+[])[' + constructorText + '][' + fromCodePointText + ']('


// Map Assignment ----------------------------------------------

let mapping = new Map();

// uses Array.constructor
mapping.set('A', '([]['+ constructorText + ']+[])[((!+[])<<(!+[]+!+[]+!+[]))+!+[]]');

// uses false
mapping.set('a', '(![]+[])[+!+[]]');

// uses Boolean.constructor
mapping.set('B', '((![])[' + constructorText + ']+[])[((!+[])<<(!+[]+!+[]+!+[]))+!+[]]');

// uses [object Object]
mapping.set('b', '({}+[])[!+[]+!+[]]');

// uses function 'return btoa', '<!' to get "PCE="
mapping.set('C', btoafunction + '((/</+[])[+!+[]]+(/!/+[])[+!+[]])[+!+[]]');

// uses [object Object]
mapping.set('c', '({}+[])[!+[]+!+[]+!+[]+!+[]+!+[]]');

// uses function "return document"
mapping.set('D', '(' + documentfunction + '+[])[((!+[]+!+[]+!+[])<<(!+[]+!+[]))]');

// uses undefined
mapping.set('d', '(([][+[]])+[])[+!+[]+!+[]]');

// uses RegExp.constructor
mapping.set('E', '((/[]/)[' + constructorText +']+[])[((!+[]+!+[]+!+[])<<(!+[]+!+[]))]');

// uses true
mapping.set('e', '(!![]+[])[+!+[]+!+[]+!+[]]');

// uses String.sub.constructor to get Function
mapping.set('F', '((([]+[])[' + subText + '])[' + constructorText + ']+[])[((!+[])<<(!+[]+!+[]+!+[]))+!+[]]');

// uses false
mapping.set('f', '(![]+[])[+[]]');

// uses function "return btoa", "ddI", to get "ZGRJ"
mapping.set('G', btoafunction + '((([][+[]])+[])[+!+[]+!+[]]+(([][+[]])+[])[+!+[]+!+[]]+(!+[]/![]+[])[+[]])[+!+[]]');

// uses String.constructor
mapping.set('g', '(([]+[])[' + constructorText + ']+[])[((!+[]+!+[]+!+[])<<(!+[]+!+[]))+!+[]+!+[]]')

// uses function "return Audio", prototype
mapping.set('H', '('+ audioFunction + '[' + prototypeText + ']+[])' + '[((!+[])<<(!+[]+!+[]+!+[]))]');

// uses function "return atob", "d2to" to get "wkh'
mapping.set('h', atobfunction + '((([][+[]])+[])[+!+[]+!+[]]+(!+[]+!+[]+[])+(!![]+[])[+[]]+({}+[])[+!+[]])[!+[]+!+[]]');

// uses Infinity
mapping.set('I', '(!+[]/![]+[])[+[]]');

// uses Infinity
mapping.set('i', '(!+[]/![]+[])[!+[]+!+[]+!+[]]');

// uses function "return btoa", "ddI", to get "ZGRJ"
mapping.set('J', btoafunction + '((([][+[]])+[])[+!+[]+!+[]]+(([][+[]])+[])[+!+[]+!+[]]+(!+[]/![]+[])[+[]])[!+[]+!+[]+!+[]]');

// uses [object Object]
mapping.set('j', '({}+[])[!+[]+!+[]+!+[]]');

// uses function 'return btoa', ')e' to get 'KWU='
mapping.set('K', btoafunction + '((/()/+[])[!+[]+!+[]]+(!![]+[])[+!+[]+!+[]+!+[]])[+[]]');

// uses function "return atob", "d2to" to get "wkh'
mapping.set('k', atobfunction + '((([][+[]])+[])[+!+[]+!+[]]+(!+[]+!+[]+[])+(!![]+[])[+[]]+({}+[])[+!+[]])[+!+[]]');

// uses function "return Audio", prototype
mapping.set('L', '('+ audioFunction + '[' + prototypeText + ']+[])' + '[((!+[])<<(!+[]+!+[]+!+[]))+!+[]+!+[]+!+[]]');

// uses false
mapping.set('l', '(![]+[])[!+[]+!+[]]');

// uses function "return Audio", prototype
mapping.set('M', '('+ audioFunction + '[' + prototypeText + ']+[])' + '[((!+[])<<(!+[]+!+[]+!+[]))+!+[]+!+[]]');

// uses Infinity.constructor to get Number
mapping.set('m', '(((!+[])/(+[]))[' + constructorText + ']+[])[((!+[])<<(!+[]+!+[]+!+[]))+!+[]+!+[]+!+[]]');

// uses NaN
mapping.set('N', '([]/[]+[])[+[]]');

// uses Infinity
mapping.set('n', '(!+[]/![]+[])[+!+[]]');

// uses [object Object]
mapping.set('O', '({}+[])[((!+[])<<(!+[]+!+[]+!+[]))]');

// uses [object Object]
mapping.set('o', '({}+[])[+!+[]]');

// uses function 'return btoa', '<!' to get "PCE="
mapping.set('P', btoafunction + '((/</+[])[+!+[]]+(/!/+[])[+!+[]])[+[]]');

// uses RegExp.constructor
mapping.set('p', '((/[]/)[' + constructorText + ']+[])[((!+[]+!+[]+!+[])<<(!+[]+!+[]))+!+[]+!+[]]');

// uses function "return btoa", "a" to get "YQ=="
mapping.set('Q', btoafunction + '((![]+[])[+!+[]])[+!+[]]');

// uses function "return atob", "enEi" to get 'zq"'
mapping.set('q', atobfunction + '(' + enEi + ')[+!+[]]');

// uses RegExp.constructor
mapping.set('R', '((/[]/)[' + constructorText + ']+[])[((!+[])<<(!+[]+!+[]+!+[]))+!+[]]');

// uses true
mapping.set('r', '(!![]+[])[+!+[]]');

// uses String.constructor
mapping.set('S', '(([]+[])[' + constructorText + ']+[])[((!+[])<<(!+[]+!+[]+!+[]))+!+[]]');

// uses false
mapping.set('s', '(![]+[])[+!+[]+!+[]+!+[]]');

// uses function "return Audio", prototype
mapping.set('T', '('+ audioFunction + '[' + prototypeText + ']+[])' + '[((!+[])<<(!+[]+!+[]+!+[]))+!+[]]');

// uses true
mapping.set('t', '(!![]+[])[+[]]');

// uses function 'return btoa', ')e' to get 'KWU='
mapping.set('U', btoafunction + '((/()/+[])[!+[]+!+[]]+(!![]+[])[+!+[]+!+[]+!+[]])[!+[]+!+[]]');

// uses undefined
mapping.set('u', '(([][+[]])+[])[+[]]');

// uses function "return btoa", "]S' to get 'XVM='
mapping.set('V', btoafunction + '((/[]/+[])[+!+[]+!+[]]+(([]+[])[' + constructorText + ']+[])[((!+[])<<(!+[]+!+[]+!+[]))+!+[]])[+!+[]]');

// uses String.sub to get [native code]
mapping.set('v', '(([]+[])[' + subText + ']+[])[((!+[])<<(!+[]+!+[]+!+[]+!+[]))+((!+[]+!+[]+!+[])<<(!+[]))]');

// uses function 'return btoa', ')e' to get 'KWU='
mapping.set('W', btoafunction + '((/()/+[])[!+[]+!+[]]+(!![]+[])[+!+[]+!+[]+!+[]])[+!+[]]');

// uses function "return atob", "d2to" to get "wkh'
mapping.set('w', atobfunction + '((([][+[]])+[])[+!+[]+!+[]]+(!+[]+!+[]+[])+(!![]+[])[+[]]+({}+[])[+!+[]])[+![]]');

// uses function "return btoa", "]S' to get 'XVM='
mapping.set('X', btoafunction + '((/[]/+[])[+!+[]+!+[]]+(([]+[])[' + constructorText + ']+[])[((!+[])<<(!+[]+!+[]+!+[]))+!+[]])[+[]]');

// uses RegExp.constructor
mapping.set('x', '((/[]/)[' + constructorText + ']+[])[((!+[]+!+[]+!+[])<<(!+[]+!+[]))+!+[]]');

// uses function "return btoa", "a" to get "YQ=="
mapping.set('Y', btoafunction + '((![]+[])[+!+[]])[+[]]');

// uses Infinity
mapping.set('y', '(((!+[])/(+[]))+[])[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]');

// uses function "return btoa", "ddI", to get "ZGRJ"
mapping.set('Z', btoafunction + '((([][+[]])+[])[+!+[]+!+[]]+(([][+[]])+[])[+!+[]+!+[]]+(!+[]/![]+[])[+[]])[+[]]');

// uses function "return atob", "enEi"
mapping.set('z', atobfunction + '(' + enEi + ')[+[]]');

mapping.set('0', '(+[]+[])');
mapping.set('1', '(+!+[]+[])');
mapping.set('2', '(!+[]+!+[]+[])');
mapping.set('3', '(!+[]+!+[]+!+[]+[])');
mapping.set('4', '(!+[]+!+[]+!+[]+!+[]+[])');
mapping.set('5', '(!+[]+!+[]+!+[]+!+[]+!+[]+[])');
mapping.set('6', '(((!+[]+!+[]+!+[])<<(!+[]))+[])');
mapping.set('7', '(((!+[]+!+[]+!+[])<<(!+[]))+!+[]+[])');
mapping.set('8', '(((!+[])<<(!+[]+!+[]+!+[]))+[])');
mapping.set('9', '(((!+[])<<(!+[]+!+[]+!+[]))+!+[]+[])');


// uses array.concat to form [1,1]
mapping.set(',', '([(+!+[])][({}+[])[!+[]+!+[]+!+[]+!+[]+!+[]]+({}+[])[+!+[]]+(!+[]/![]+[])[+!+[]]+({}+[])[!+[]+!+[]+!+[]+!+[]+!+[]]+(![]+[])[+!+[]]+(!![]+[])[+[]]]([+!+[]])+[])[+!+[]]')

// uses RegExp constructor to get /(?:)/
mapping.set('?', '((/[]/)['+ constructorText +']()+[])[!+[]+!+[]]');

// uses RegExp constructor to get /(?:)/
mapping.set(':', '((/[]/)['+ constructorText +']()+[])[!+[]+!+[]+!+[]]');

// makes RegEx with character and gets character. :P
mapping.set('!', '(/!/+[])[+!+[]]');

// uses [object Object]
mapping.set(' ', '({}+[])[!+[]+!+[]+!+[]+!+[]+!+[]+!+[]+!+[]]');

// uses string.sub.constructor to get Function
mapping.set(`
`, '(([]+[])[' + subText + '][' + constructorText + ']()+[])[((!+[])<<(!+[]+!+[]+!+[]+!+[]))+!+[]+!+[]+!+[]]');

// uses .5
mapping.set('.', '((!+[])/(!+[]+!+[])+[])[+!+[]]');

// makes RegEx with character and gets character. :P
mapping.set('/', '(/[]/+[])[+[]]');
mapping.set('[', '(/[]/+[])[+!+[]]');
mapping.set(']', '(/[]/+[])[+!+[]+!+[]]');
mapping.set('{', '(/{}/+[])[+!+[]]');
mapping.set('}', '(/{}/+[])[+!+[]+!+[]]');
mapping.set('(', '(/()/+[])[+!+[]]');
mapping.set(')', '(/()/+[])[!+[]+!+[]]');
mapping.set('<', '(/</+[])[+!+[]]');
mapping.set('+', '(/[]+/+[])[!+[]+!+[]+!+[]]');

// uses 'indexOf' on empty array to get -1
mapping.set('-', '(([][' + indexOfText + '](+[]))+[])[+[]]');

// uses function "return btoa", "a" to get "YQ=="
mapping.set('=', btoafunction + '((![]+[])[+!+[]])[!+[]+!+[]]');

// uses function 'return atob', 'enEi' to get 'zq"'
mapping.set('"', atobfunction + '(' + enEi + ')[!+[]+!+[]]');

// uses function "return atob", "fion" to get "~*'"
mapping.set("'", atobfunction + '((![]+[])[+[]]+(!+[]/![]+[])[!+[]+!+[]+!+[]]+({}+[])[+!+[]]+(!+[]/![]+[])[+!+[]])[!+[]+!+[]]');

// uses function "return atob", "fion" to get "~*'"
mapping.set('~', atobfunction + '((![]+[])[+[]]+(!+[]/![]+[])[!+[]+!+[]+!+[]]+({}+[])[+!+[]]+(!+[]/![]+[])[+!+[]])[+[]]');

// uses function "return atob", "fion" to get "~*'"
mapping.set('*', atobfunction + '((![]+[])[+[]]+(!+[]/![]+[])[!+[]+!+[]+!+[]]+({}+[])[+!+[]]+(!+[]/![]+[])[+!+[]])[+!+[]]');

// uses function "return atob", "I19g" to get "#_`"
mapping.set('#', atobfunction + '((!+[]/![]+[])[+[]]+(+!+[]+[])+(((!+[])<<(!+[]+!+[]+!+[]))+!+[]+[])+(([]+[])[' + constructorText + ']+[])[((!+[]+!+[]+!+[])<<(!+[]+!+[]))+!+[]+!+[]])[+[]]');

// uses function "return atob", "I19g" to get "#_`"
mapping.set('_', atobfunction + '((!+[]/![]+[])[+[]]+(+!+[]+[])+(((!+[])<<(!+[]+!+[]+!+[]))+!+[]+[])+(([]+[])[' + constructorText + ']+[])[((!+[]+!+[]+!+[])<<(!+[]+!+[]))+!+[]+!+[]])[+!+[]]');

// uses function "return atob", "I19g" to get "#_`"
mapping.set('`', atobfunction + '((!+[]/![]+[])[+[]]+(+!+[]+[])+(((!+[])<<(!+[]+!+[]+!+[]))+!+[]+[])+(([]+[])[' + constructorText + ']+[])[((!+[]+!+[]+!+[])<<(!+[]+!+[]))+!+[]+!+[]])[!+[]+!+[]]');

// uses function "return atob", "O14l" to get ";^%"
mapping.set(';', atobfunction + '(({}+[])[((!+[])<<(!+[]+!+[]+!+[]))]+(+!+[]+[])+(!+[]+!+[]+!+[]+!+[]+[])+(![]+[])[!+[]+!+[]])[+[]]');

// uses function "return atob", "O14l" to get ";^%"
mapping.set('^', atobfunction + '(({}+[])[((!+[])<<(!+[]+!+[]+!+[]))]+(+!+[]+[])+(!+[]+!+[]+!+[]+!+[]+[])+(![]+[])[!+[]+!+[]])[+!+[]]');

// uses function "return atob", "O14l" to get ";^%"
mapping.set('%', atobfunction + '(({}+[])[((!+[])<<(!+[]+!+[]+!+[]))]+(+!+[]+[])+(!+[]+!+[]+!+[]+!+[]+[])+(![]+[])[!+[]+!+[]])[!+[]+!+[]]');

// uses function "return atob", "e0Am" to get "{@&"
mapping.set("@", atobfunction + '((!![]+[])[+!+[]+!+[]+!+[]]+(+[]+[])+([]['+ constructorText + ']+[])[((!+[])<<(!+[]+!+[]+!+[]))+!+[]]+(((!+[])/(+[]))[' + constructorText + ']+[])[((!+[])<<(!+[]+!+[]+!+[]))+!+[]+!+[]+!+[]])[+!+[]]');

// uses function "return atob", "e0Am" to get "{@&"
mapping.set("&", atobfunction + '((!![]+[])[+!+[]+!+[]+!+[]]+(+[]+[])+([]['+ constructorText + ']+[])[((!+[])<<(!+[]+!+[]+!+[]))+!+[]]+(((!+[])/(+[]))[' + constructorText + ']+[])[((!+[])<<(!+[]+!+[]+!+[]))+!+[]+!+[]+!+[]])[!+[]+!+[]]');

// uses function "return atob", "Oj58" to get ":>|"
mapping.set(">", atobfunction + '(({}+[])[((!+[])<<(!+[]+!+[]+!+[]))]+({}+[])[!+[]+!+[]+!+[]]+(!+[]+!+[]+!+[]+!+[]+!+[]+[])+(((!+[])<<(!+[]+!+[]+!+[]))+[]))[+!+[]]');

// uses function "return atob", "Oj58" to get ":>|"
mapping.set("|", atobfunction + '(({}+[])[((!+[])<<(!+[]+!+[]+!+[]))]+({}+[])[!+[]+!+[]+!+[]]+(!+[]+!+[]+!+[]+!+[]+!+[]+[])+(((!+[])<<(!+[]+!+[]+!+[]))+[]))[!+[]+!+[]]');

// uses function "return atob", "alxl" to get "j\e"
mapping.set("\\", atobfunction + '((![]+[])[+!+[]]+(![]+[])[!+[]+!+[]]+((/[]/)[' + constructorText + ']+[])[((!+[]+!+[]+!+[])<<(!+[]+!+[]))+!+[]]+(![]+[])[!+[]+!+[]])[+!+[]]');


// functions ---------------------------------------------------------------------

function convert(val) {
	let arr = val.split``;
	let output = ''
	arr.forEach((x,index) => {
		let plus = (index === arr.length - 1) ? '' : '+';
		let merp = mapping.get(x) ? mapping.get(x) : codePoint(x);
		output += merp + plus;
		});
	return output;
	}

function codePoint(x) {
	const codepointString = x.codePointAt(0) + [];
	const convertedPointString = convert(codepointString);
	return fromCodePointFunctionStart + convertedPointString + ')';
}

function change() {
	const a = document.getElementById('in');
	const b = document.getElementById('out');
	b.innerText = convert(a.value);
	};

function supported() {
	const array = Array.from(mapping);
	const mapped = array.map(x=> x[0]);
	const strings = [];
	let temp = [];
	mapped.forEach((s) => {
	    if (temp.length === 26) {
	    	strings.push(temp.join(''));
	        temp = [];
	    }
	    temp.push(s);
	});
	strings.push(temp.join(''));
	const joined = strings.join('\n')
	console.log('Supported Characters: \n' + joined);
	return joined;
	};

// verifies produces correct output using only appropriate characters.
function verify() {
	const support = supported();
	const garbonated = convert(support);
	const evaluated = eval(garbonated);
	console.log("Same Output? ", support === evaluated);

	const checked = garbonated
	    		.split('[').join('')
	    		.split(']').join('')
	    		.split('(').join('')
	    		.split(')').join('')
	    		.split('{').join('')
	    		.split('}').join('')
	    		.split('!').join('')
	    		.split('+').join('')
	    		.split('/').join('')
	    		.split('<').join('');
	if (checked.length === 0) {
	    console.log("Used only valid inputs");
	} else {
	    console.log("Used invalid inputs: ", checked);
	}
	};
