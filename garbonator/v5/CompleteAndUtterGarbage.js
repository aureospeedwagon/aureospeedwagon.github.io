function val(n) {
    if (n === 0 || n === '0') {
        return '(+[])';
    }
    if (n < 10) {
        return '(' + '+!+[]'.repeat(n) + ')';
    }

    return '(' + [...n.toString()].map((x, i) => {
        return i ? `${val(x)}` : `${val(x)}+[]`;
    }).join('+') + ')';

}

const _1 = `(${val(1)}+[])`
const _2 = `(${val(2)}+[])`
const _3 = `(${val(3)}+[])`
const _4 = `(${val(4)}+[])`
const _5 = `(${val(5)}+[])`
const _6 = `(${val(6)}+[])`
const _7 = `(${val(7)}+[])`
const _8 = `(${val(8)}+[])`
const _9 = `(${val(9)}+[])`
const _0 = `(${val(0)}+[])`


const trueString = '(!![]+[])';
const falseString = '(![]+[])';
const undefinedString = '([][[]]+[])';
const emptyString = '([]+[])'

const a = `${falseString}[${val(1)}]`;
const d = `${undefinedString}[${val(2)}]`;
const e = `${trueString}[${val(3)}]`;
const f = `${falseString}[${val(0)}]`;
const i = `${undefinedString}[${val(5)}]`;
const l = `${falseString}[${val(2)}]`;
const n = `${undefinedString}[${val(1)}]`;
const r = `${trueString}[${val(1)}]`;
const s = `${falseString}[${val(3)}]`;
const t = `${trueString}[${val(0)}]`;
const u = `${undefinedString}[${val(0)}]`;

const atString = [a, t].join('+');

// "function at() { [native code] }"
const atFunctionString = `([][${atString}]+[])`
const c = `${atFunctionString}[${val(3)}]`;
const v = `${atFunctionString}[${val(21)}]`;
const _openParen = `${atFunctionString}[${val(11)}]`;
const _closeParen = `${atFunctionString}[${val(12)}]`;
const _openCurly = `${atFunctionString}[${val(14)}]`;
const _closeCurly = `${atFunctionString}[${val(30)}]`;

// by adding true to the start, we can make a net gain by reducing the cost of the index
// "truefunction at() { [native code] }"
const trueAtFunctionString = [trueString, atFunctionString].join('+')
const o = `(${trueAtFunctionString})[${val(10)}]`; 
const _space = `(${trueAtFunctionString})[${val(12)}]`; 
const _openSquare = `(${trueAtFunctionString})[${val(20)}]`;
const _closeSquare = `(${trueAtFunctionString})[${val(32)}]`;

// "italics"
const italicsString = [i, t, a, l, i, c, s].join('+');
// "<i></i>"
const italicsStringString = `(${emptyString}[${italicsString}]())`;
const _lessthan = `${italicsStringString}[${val(0)}]`;
const _greaterthan = `${italicsStringString}[${val(2)}]`;
const _forwardSlash = `${italicsStringString}[${val(4)}]`;

// "fontcolor"
const fontcolorString = [f, o, n, t, c, o, l, o, r].join('+');
// "<font color="undefined"></font>"
const fontcolorStringString = `(${emptyString}[${fontcolorString}]())`;
const _doubleQuote = `${fontcolorStringString}[${val(12)}]`;
const _equals = `${fontcolorStringString}[${val(11)}]`;

// "constructor"
const constructorString = [c, o, n, s, t, r, u, c, t, o, r].join('+');

// "function String() { [native code] }"
const stringConstructorString = `(${emptyString}[${constructorString}]+[])`;
const g = `${stringConstructorString}[${val(14)}]`;
// "truefunction String() { [native code] }"
const trueStringConstructorString = [trueString, stringConstructorString].join('+');
const S = `(${trueStringConstructorString})[${val(13)}]`; 

// "function Array() { [native code] }"
const arrayConstructorString = `([][${constructorString}]+[])`;
const y = `${arrayConstructorString}[${val(13)}]`;
// "truefunction Array() { [native code] }"
const trueArrayConstructorString = [trueString, arrayConstructorString].join('+');
const A = `(${trueArrayConstructorString})[${val(13)}]`; 

// "function Number() { [native code] }"
const numberConstructorString = `((+[])[${constructorString}]+[])`;
const b = `${numberConstructorString}[${val(12)}]`;
const m = `${numberConstructorString}[${val(11)}]`;
// "truefunction Number() { [native code] }"
const trueNumberConstructorString = [trueString, numberConstructorString].join('+');
const N = `(${trueNumberConstructorString})[${val(13)}]`;


// "function Boolean() { [native code] }"
const booleanConstructorString = `((![])[${constructorString}]+[])`;
// "truefunction Boolean() { [native code] }"
const trueBooleanConstructorString = [trueString, booleanConstructorString].join('+');
const B = `(${trueBooleanConstructorString})[${val(13)}]`;

// "function Function() { [native code] }"
const functionConstructorString = `([][${atString}][${constructorString}]+[])`;
// "truefunction Function() { [native code] }"
const trueFunctionConstructorString = [trueString, functionConstructorString].join('+');
const F = `(${trueFunctionConstructorString})[${val(13)}]`;


// `function anonymous(
//     ) {
//
//     }`
const anonymousFunctionString = `(([])[${atString}][${constructorString}]()+[])`;
// There are multiple instances of the newline character in that string.
// It saves several characters to take newline at 23 instead of 19 due to cheaper index
const _newLine = `${anonymousFunctionString}[${val(23)}]`;


const entriesString = [e, n, t, r, i, e, s].join('+');
// "[object Array Iterator]"
const objectArrayIteratorString = `([][${entriesString}]()+[])`;
const j = `${objectArrayIteratorString}[${val(3)}]`;
const I = `${objectArrayIteratorString}[${val(14)}]`;


const object = `([][${entriesString}]()[${constructorString}]())`;

// "[object Object]"
const objectObjectString = `(${object}+[])`;
const O = `${objectObjectString}[${val(8)}]`;

// "concat"
const concatString = [c, o, n, c, a, t].join('+');
// ",0"
const zeroCommaZeroString = `([[]][${concatString}](+[])+[])`
const _comma = `${zeroCommaZeroString}[${val(0)}]`;


// "return"
const returnString = [r, e, t, u, r, n].join('+');

const functionMaker = (func) =>
    `([])[${atString}][${constructorString}](${func})()`;

// "atob"
const atobString = [a, t, o, b].join('+');
// "return atob"
const returnAtobString = `(${returnString}+${_space}+${atobString})`;
const atobFunction = `(${functionMaker(returnAtobString)})`;

// "btoa"
const btoaString = [b, t, o, a].join('+');
// "return btoa"
const returnBtoaString = `(${returnString}+${_space}+${btoaString})`;
const btoaFunction = `(${functionMaker(returnBtoaString)})`;

// --------------------------

// "dHJ1ZQ=="
const dHJ1ZQequalString = `${btoaFunction}(${trueString})`;
const H = `${dHJ1ZQequalString}[${val(1)}]`;
const J = `${dHJ1ZQequalString}[${val(2)}]`;

// "ZmFsc2U="
const ZmFsc2UequalString = `${btoaFunction}(${falseString})`;
const Z = `${ZmFsc2UequalString}[${val(0)}]`;
const U = `${ZmFsc2UequalString}[${val(6)}]`;

// "dW5kZWZpbmVk"
const dW5kZWZpbmVkString = `${btoaFunction}(${undefinedString})`
const W = `${dW5kZWZpbmVkString}[${val(1)}]`;
const k = `${dW5kZWZpbmVkString}[${val(3)}]`;
const V = `${dW5kZWZpbmVkString}[${val(10)}]`;

// "truedW5kZWZpbmVk"
const truedW5kZWZpbmVkString = [trueString, dW5kZWZpbmVkString].join('+'); // add true to reduce cost of index
const p = `(${truedW5kZWZpbmVkString})[${val(11)}]`;

// "trueFalse"
const trueFalseString = [trueString, falseString].join('+');
// "dHJ1ZWZhbHNl"
const dHJ1ZWZhbHNlString = `${btoaFunction}(${trueFalseString})`;
// "truedHJ1ZWZhbHNl"
const truedHJ1ZWZhbHNlString = [trueString, dHJ1ZWZhbHNlString].join('+'); // add true to reduce cost of index
const h = `(${truedHJ1ZWZhbHNlString})[${val(11)}]`;

// "truetrue"
const trueTrueString = [trueString, trueString].join('+');
// "dHJ1ZXRydWU="
const dHJ1ZXRydWUequalString = `${btoaFunction}(${trueTrueString})`;
const R = `${dHJ1ZXRydWUequalString}[${val(6)}]`;

// "MQ=="
const MQequalsString = `${btoaFunction}(${val(1)})`;
const M = `${MQequalsString}[${val(0)}]`;

// "1true"
const oneTrueString = [val(1), trueString].join('+');
// "MXQ="
const MXQequalString = `${btoaFunction}(${oneTrueString})`;
const X = `${MXQequalString}[${val(1)}]`;

// "ca"
const caString = [c, a].join('+');
const q = `${atobFunction}(${caString})`;

// "Mw=="
const MwequalsString = `${btoaFunction}(${val(3)})`;
const w = `${MwequalsString}[${val(1)}]`;

// "f31"
const f31String = [f, val(3), val(1)].join('+');
// "ZjMx"
const ZjMxString = `${btoaFunction}(${f31String})`;
const x = `${ZjMxString}[${val(3)}]`;

// "en"
const enString = [e, n].join('+');
const z = `${atobFunction}(${enString})`;

// "t("
const tOpenParenString = [t, _openParen].join('+');
// "dCg="
const dCgequalString = `${btoaFunction}(${tOpenParenString})`;
const C = `${dCgequalString}[${val(1)}]`;

// "MTE="
const MTEequalsString = `${btoaFunction}(${val(11)})`;
const E = `${MTEequalsString}[${val(2)}]`;

// "tf"
const tfString = [t, f].join('+');
// "dGY="
const dGYequalString = `${btoaFunction}(${tfString})`;
const G = `${dGYequalString}[${val(1)}]`;

// "KQ=="
const KQequalsString = `${btoaFunction}(${_openParen})`;
const K = `${KQequalsString}[${val(0)}]`;


// "PA=="
const PAqualsString = `${btoaFunction}(${_lessthan})`;
const P = `${PAqualsString}[${val(0)}]`;


// "MTA="
const MTAequalsString = `${btoaFunction}(${val(10)})`;
const T = `${MTAequalsString}[${val(1)}]`;


// "YQ=="
const YQequalsString = `${btoaFunction}(${a})`;
const Y = `${YQequalsString}[${val(0)}]`;
const Q = `${YQequalsString}[${val(1)}]`;

// 
const documentString = [d, o, c, u, m, e, n, t].join('+');
// "return document"
const returnDocumentString = `(${returnString}+${_space}+${documentString})`;
const documentObject = `(${functionMaker(returnDocumentString)})`;
// "function HTMLDocument() { [native code] }"
const documentObjectString = `(${documentObject}+[])`;
const L = `${documentObjectString}[${val(11)}]`;

// "t0"
const t0String = [t, val(0)].join('+');
// "dDA="
const dDAequalsString = `${btoaFunction}(${t0String})`;
const D = `${dDAequalsString}[${val(1)}]`;

// "fiN"
const fiNString = [f, i, N].join('+');
// "~#"
const tildePoundString = `${atobFunction}(${fiNString})`;
const _pound = `${tildePoundString}[${val(1)}]`;

// "fjr"
const fjrString = [f, j, r].join('+');
// "~:"
const tildeColonString = `${atobFunction}(${fjrString})`;
const _colon = `${tildeColonString}[${val(1)}]`;

// "fj8"
const fj8String = [f, j, val(8)].join('+');
// "~?"
const tildeQuestionString = `${atobFunction}(${fj8String})`;
const _question = `${tildeQuestionString}[${val(1)}]`;

// "fic"
const ficString = [f, i, c].join('+');
// "~'"
const tildeSingleQuoteString = `${atobFunction}(${ficString})`;
const _singleQuote = `${tildeSingleQuoteString}[${val(1)}]`;

// "fia"
const fiaString = [f, i, a].join('+');
// "~&"
const tildeAmpersandString = `${atobFunction}(${fiaString})`;
const _ampersand = `${tildeAmpersandString}[${val(1)}]`;

// "fi0"
const fi0String = [f, i, val(0)].join('+');
// "~-"
const tildeMinusString = `${atobFunction}(${fi0String})`;
const _minus = `${tildeMinusString}[${val(1)}]`;

// "fit"
const fitString = [f, i, t].join('+');
// "~+"
const tildePlusString = `${atobFunction}(${fitString})`;
const _plus = `${tildePlusString}[${val(1)}]`;

// "fir"
const firString = [f, i, r].join('+');
// "~*"
const tildeStarString = `${atobFunction}(${firString})`;
const _asterisk = `${tildeStarString}[${val(1)}]`;


// "1/2"
const halfString = [val(1), _forwardSlash, val(2)].join('+');
// "return 1/2"
const returnHalfString = `(${returnString}+${_space}+${halfString})`;
const zeroPointFive = `(${functionMaker(returnHalfString)})`;
const zeroPointFiveString = `(${zeroPointFive}+[])`;
const _period = `${zeroPointFiveString}[${val(1)}]`;

//===========================================================



const garboMap = new Map();
garboMap.set('a', a);
garboMap.set('b', b);
garboMap.set('c', c);
garboMap.set('d', d);
garboMap.set('e', e);
garboMap.set('f', f);
garboMap.set('g', g);
garboMap.set('h', h);
garboMap.set('i', i);
garboMap.set('j', j);
garboMap.set('k', k);
garboMap.set('l', l);
garboMap.set('m', m);
garboMap.set('n', n);
garboMap.set('o', o);
garboMap.set('p', p);
garboMap.set('q', q);
garboMap.set('r', r);
garboMap.set('s', s);
garboMap.set('t', t);
garboMap.set('u', u);
garboMap.set('v', v);
garboMap.set('w', w);
garboMap.set('x', x);
garboMap.set('y', y);
garboMap.set('z', z);
garboMap.set('A', A);
garboMap.set('B', B);
garboMap.set('C', C);
garboMap.set('D', D);
garboMap.set('E', E);
garboMap.set('F', F);
garboMap.set('G', G);
garboMap.set('H', H);
garboMap.set('I', I);
garboMap.set('J', J);
garboMap.set('K', K);
garboMap.set('L', L);
garboMap.set('M', M);
garboMap.set('N', N);
garboMap.set('O', O);
garboMap.set('P', P);
garboMap.set('Q', Q);
garboMap.set('R', R);
garboMap.set('S', S);
garboMap.set('T', T);
garboMap.set('U', U);
garboMap.set('V', V);
garboMap.set('W', W);
garboMap.set('X', X);
garboMap.set('Y', Y);
garboMap.set('Z', Z);

garboMap.set('1', _1);
garboMap.set('2', _2);
garboMap.set('3', _3);
garboMap.set('4', _4);
garboMap.set('5', _5);
garboMap.set('6', _6);
garboMap.set('7', _7);
garboMap.set('8', _8);
garboMap.set('9', _9);
garboMap.set('0', _0);

garboMap.set(" ", _space);
garboMap.set("(", _openParen);
garboMap.set(")", _closeParen);
garboMap.set("{", _openCurly);
garboMap.set("}", _closeCurly);
garboMap.set("[", _openSquare);
garboMap.set("]", _closeSquare);
garboMap.set("<", _lessthan);
garboMap.set(">", _greaterthan);
garboMap.set("/", _forwardSlash);
garboMap.set("=", _equals);
garboMap.set('"', _doubleQuote);
garboMap.set('.', _period);
garboMap.set("'", _singleQuote);
garboMap.set(',', _comma);
garboMap.set('#', _pound);
garboMap.set('?', _question);
garboMap.set(':', _colon);
garboMap.set('&', _ampersand);
garboMap.set('-', _minus);
garboMap.set('*', _asterisk);
garboMap.set('+', _plus);

garboMap.set(`
`, _newLine);

//=================================

// "name"
const nameString = [n,a,m,e].join('+');
// "String"
const StringString = `${emptyString}[${constructorString}][${nameString}]`;
// String["fromCodePoint"]
const fromCodePointFunction =
    [
        StringString,
        _openSquare, _doubleQuote,
        f, r, o, m, C, o, d, e, P, o, i, n, t,
        _doubleQuote, _closeSquare
    ].join('+');

const returnFromCodePointFunction = `(${returnString}+${_space}+${fromCodePointFunction})`;

function convertText(val) {
    return [...val]
        .map(x => garboMap.get(x) || getCodePoint(x))
        .join`+`;
}


function getCodePoint(x) {
    const codepointString = x.codePointAt(0) + [];
    const convertedPointString = convertText(codepointString);
    return `(${functionMaker(returnFromCodePointFunction)})(${convertedPointString})`;
}

function convertCode(text) {
    return functionMaker(convertText(`${text}`))
}

// TODO: make simpler?
function convertFile(dataUrl) {
    const fileFunction = `
    const f = window.open();
    f.document.body.innerHTML = '<iframe src="${dataUrl}" style="border:none "width="100vw" height="100vh"></iframe>';
    `;
    return functionMaker(convertText(`${fileFunction}`));
}


// diagonstics ======================================================================================
const sizeMap = [];
garboMap.forEach((v, k) => sizeMap.push([k, v.length]));
sizeMap.push(['@', convertText('@').length]);

const testString1 = 'abcdefghijklmnopqrstuvwxyz';
const testString2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const testString3 = '1234567890';
const testString4 = ` (){}[]<>/=".',#?:&-*`;

const test1 = eval(convertText(testString1)) === testString1;
const test2 = eval(convertText(testString2)) === testString2;
const test3 = eval(convertText(testString3)) === testString3;
const test4 = eval(convertText(testString4)) === testString4;
const test5 = eval(convertText('@')) === '@';
const testAll = test1 && test2 && test3 && test4 && test5;

console.log(sizeMap);
// console.log(sizeMap.sort((a,b)=>(b[1]-a[1])));
console.log('tests pass: ', testAll);

// ==================================================================================================

// HTML/CSS

async function garbonate() {
    const inp = document.getElementById('i');
    const out = document.getElementById('o');
    const modes = document.getElementsByName('mode');
    mode = Array.from(modes).find(t => t.checked).value;

    if (mode === 'code') {
        out.innerText = convertCode(inp.value)
    } else if (mode === 'file') {
        const dataUrl = await getDataUrl();
        out.innerText = convertFile(dataUrl);
    } else {
        out.innerText = convertText(inp.value)
    }
};

document.body.style.background = 'black';
document.body.style.fontFamily = 'Consolas';

const hr = document.createElement('div');
hr.style.display = 'flex';
hr.style.flexDirection = 'row';

const hm = document.createElement('div');
hm.style.width = '100px';

const ht = document.createElement('textarea');
ht.id = 'i';
ht.style.width = "calc(100vw - 420px)";
ht.style.height = '70px';
ht.style.background = 'black';
ht.style.color = '#00beef';
ht.style.border = '1px solid ' + '#00beef';
ht.style.borderImage = 'none';
ht.style.resize = 'none';

const ho = document.createElement('p');
ho.id = 'o';
ho.style.width = '100%';
ho.style.height = '80%';
ho.style.color = '#00beef';
ho.style.fontSize = '14px';
ho.style.fontFamily = 'Consolas';



const hf = document.createElement('input');
hf.type = 'file';

async function readFileAsDataURL(file) {
    let result_base64 = await new Promise((resolve) => {
        let fileReader = new FileReader();
        fileReader.onload = (e) => resolve(fileReader.result);
        fileReader.readAsDataURL(file);
    });
    return result_base64;
}

async function getDataUrl() {
    const fileThing = hf.files.item(0);
    return await readFileAsDataURL(fileThing);
}

const hm1 = document.createElement('input');
hm1.type = 'radio';
hm1.name = 'mode'
hm1.value = 'text';
hm1.checked = true;

const hm1l = document.createElement('label');
hm1l.for = 'text';
hm1l.innerHTML = 'Text';
hm1l.style.color = '#00beef';
hm1l.style.fontSize = '12px';

const hm2 = document.createElement('input');
hm2.type = 'radio';
hm2.name = 'mode';
hm2.value = 'code';

const hm2l = document.createElement('label');
hm2l.for = 'code';
hm2l.innerHTML = 'Code';
hm2l.style.color = '#00beef';
hm2l.style.fontSize = '12px';

const hm3 = document.createElement('input');
hm3.type = 'radio';
hm3.name = 'mode';
hm3.value = 'file';

const hm3l = document.createElement('label');
hm3l.for = 'file';
hm3l.innerHTML = 'File (Exp)';
hm3l.style.color = '#00beef';
hm3l.style.fontSize = '12px';

const hmb = document.createElement('br');

hm.appendChild(hm1);
hm.appendChild(hm1l);
hm.appendChild(hmb);
hm.appendChild(hm2);
hm.appendChild(hm2l);
hm.appendChild(hmb);
// hm.appendChild(hm3);
// hm.appendChild(hm3l);
// hm.appendChild(hf);


const hb = document.createElement('button');
hb.onclick = garbonate;
hb.style.background = '#00beef';
hb.style.border = 'none';
hb.style.fontFamily = 'fantasy';
hb.style.fontSize = '45px';
hb.style.width = '320px';
hb.style.cursor = 'pointer';
hb.innerText = 'GARBONATE';
hb.style.display = 'flex';
hb.style.flexDirection = 'row';
hb.style.justifyContent = 'space-around';

const hg = document.createElement('div');
hg.style.flexDirection = 'column';
hg.style.width = '50px';
hg.style.paddingLeft = '10px';

const hh = document.createElement('div');
hh.style.flex = '0 1 5%';
hh.style.background = 'black';
hh.style.width = '30%';
hh.style.borderTopLeftRadius = '5px';
hh.style.borderTopRightRadius = '5px';
hh.style.left = '50%';
hh.style.transform = 'translateX(-50%)';
hh.style.height = '5px';
hh.style.position = 'relative';
hh.style.top = '1px';

const hl = document.createElement('div');
hl.style.flex = '0 1 10%';
hl.style.background = 'black';
hl.style.width = '100%';
hl.style.borderTopLeftRadius = '5px';
hl.style.borderTopRightRadius = '5px';
hl.style.height = '10px';
hl.style.borderBottom = '2px solid ' + '#00beef';

const hc = document.createElement('div');
hc.style.display = 'flex';
hc.style.flexDirection = 'row';
hc.style.justifyContent = 'space-around';
hc.style.background = 'black';
hc.style.width = '95%';
hc.style.left = '50%';
hc.style.transform = 'translateX(-50%)';
hc.style.flex = '0 1 85%';
hc.style.borderBottomLeftRadius = '5px';
hc.style.borderBottomRightRadius = '5px';
hc.style.position = 'relative';

const hv1 = document.createElement('div');
hv1.style.height = '29px';
hv1.style.width = '5%';
hv1.style.borderRadius = '5px';
hv1.style.background = '#00beef';
hv1.style.marginTop = '5px';
hv1.style.marginBottom = '5px';

hv2 = hv1.cloneNode();
hv3 = hv1.cloneNode();

hc.appendChild(hv1);
hc.appendChild(hv2);
hc.appendChild(hv3);
hg.appendChild(hh);
hg.appendChild(hl);
hg.appendChild(hc);
hb.appendChild(hg);

hr.appendChild(hm);
hr.appendChild(ht);
hr.appendChild(hb);
document.body.appendChild(hr);
document.body.appendChild(ho);
