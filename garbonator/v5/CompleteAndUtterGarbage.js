function val(n) {
    if (n === 0 || n === '0') {
        return '(+[])';
    }
    if (n < 10) {
        return '(' + '+!![]'.repeat(n) + ')';
    }

    return '([]+'
        + [...n.toString()]
            .map(x => `${val(x)}`)
            .join('+')
        + ')';
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

const FALSE = '![]';
const TRUE = '!![]';
const UNDEFINED = '[][[]]';

const true_String = `(${TRUE}+[])`;
const false_String = `(${FALSE}+[])`;
const undefined_String = `(${UNDEFINED}+[])`;
const empty_String = '([]+[])'

const a = `${false_String}[${val(1)}]`;
const d = `${undefined_String}[${val(2)}]`;
const e = `${true_String}[${val(3)}]`;
const f = `${false_String}[${val(0)}]`;
const l = `${false_String}[${val(2)}]`;
const n = `${undefined_String}[${val(1)}]`;
const r = `${true_String}[${val(1)}]`;
const s = `${false_String}[${val(3)}]`;
const t = `${true_String}[${val(0)}]`;
const u = `${undefined_String}[${val(0)}]`;

// "falseundefined", cheaper to get the 10th rather than the 5th
const falseUndefined_String = `(${FALSE}+[]+${UNDEFINED})`;
const i = `(${falseUndefined_String})[${val(10)}]`;

// "at"
const at_String = [a, t].join('+');
// "function at() { [native code] }"
const atFunction_String = `([][${at_String}]+[])`
const c = `${atFunction_String}[${val(3)}]`;
const v = `${atFunction_String}[${val(21)}]`;
const _openParen = `${atFunction_String}[${val(11)}]`;
const _closeParen = `${atFunction_String}[${val(12)}]`;
const _openCurly = `${atFunction_String}[${val(14)}]`;
const _closeCurly = `${atFunction_String}[${val(30)}]`;

// by adding true to the start, we can make a net gain by reducing the cost of the index
// "truefunction at() { [native code] }"
const true_AtFunction_String = [TRUE, atFunction_String].join('+')
const o = `(${true_AtFunction_String})[${val(10)}]`;
const _space = `(${true_AtFunction_String})[${val(12)}]`;
const _openSquare = `(${true_AtFunction_String})[${val(20)}]`;
const _closeSquare = `(${true_AtFunction_String})[${val(32)}]`;

// "italics"
const italics_String = [i, t, a, l, i, c, s].join('+');
// "<i></i>"
const italics_String_String = `(${empty_String}[${italics_String}]())`;
const _lessthan = `${italics_String_String}[${val(0)}]`;
const _greaterthan = `${italics_String_String}[${val(2)}]`;
const _forwardSlash = `${italics_String_String}[${val(4)}]`;

// "fontcolor"
const fontcolor_String = [f, o, n, t, c, o, l, o, r].join('+');
// "<font color="undefined"></font>"
const fontcolor_String_String = `(${empty_String}[${fontcolor_String}]())`;
const _doubleQuote = `${fontcolor_String_String}[${val(12)}]`;
const _equals = `${fontcolor_String_String}[${val(11)}]`;

// "constructor"
const constructor_String = [c, o, n, s, t, r, u, c, t, o, r].join('+');

// "function _String() { [native code] }"
const stringConstructor_String = `(${empty_String}[${constructor_String}]+[])`;
const g = `${stringConstructor_String}[${val(14)}]`;
// "truefunction _String() { [native code] }"
const true_StringConstructor_String = [TRUE, stringConstructor_String].join('+');
const S = `(${true_StringConstructor_String})[${val(13)}]`;

// "function Array() { [native code] }"
const arrayConstructor_String = `([][${constructor_String}]+[])`;
const y = `${arrayConstructor_String}[${val(13)}]`;
// "truefunction Array() { [native code] }"
const true_ArrayConstructor_String = [TRUE, arrayConstructor_String].join('+');
const A = `(${true_ArrayConstructor_String})[${val(13)}]`;

// "function Number() { [native code] }"
const numberConstructor_String = `((+[])[${constructor_String}]+[])`;
const b = `${numberConstructor_String}[${val(12)}]`;
const m = `${numberConstructor_String}[${val(11)}]`;
// "truefunction Number() { [native code] }"
const true_NumberConstructor_String = [TRUE, numberConstructor_String].join('+');
const N = `(${true_NumberConstructor_String})[${val(13)}]`;


// "function Boolean() { [native code] }"
const booleanConstructor_String = `((![])[${constructor_String}]+[])`;
// "truefunction Boolean() { [native code] }"
const true_BooleanConstructor_String = [TRUE, booleanConstructor_String].join('+');
const B = `(${true_BooleanConstructor_String})[${val(13)}]`;

// "function Function() { [native code] }"
const functionConstructor_String = `([][${at_String}][${constructor_String}]+[])`;
// "truefunction Function() { [native code] }"
const true_FunctionConstructor_String = [TRUE, functionConstructor_String].join('+');
const F = `(${true_FunctionConstructor_String})[${val(13)}]`;


// `function anonymous(
//     ) {
//
//     }`
const anonymousFunction_String = `(([])[${at_String}][${constructor_String}]()+[])`;
// There are multiple instances of the newline character in that _string.
// It saves several characters to take newline at 23 instead of 19 due to cheaper index
const _newLine = `${anonymousFunction_String}[${val(23)}]`;


const entries_String = [e, n, t, r, i, e, s].join('+');
// "[object Array Iterator]"
const objectArrayIterator_String = `([][${entries_String}]()+[])`;
const j = `${objectArrayIterator_String}[${val(3)}]`;
const I = `${objectArrayIterator_String}[${val(14)}]`;

const object = `([][${entries_String}]()[${constructor_String}]())`;
//"function Object() { [native code] }"
const objectConstructor_String = `([][${entries_String}]()[${constructor_String}]+[])`;
// "truefunction Object() { [native code] }"
const true_ObjectConstructor_String = [TRUE, objectConstructor_String].join('+');
const O = `(${true_ObjectConstructor_String})[${val(13)}]`;

// "concat"
const concat_String = [c, o, n, c, a, t].join('+');
const _comma = `([[]][${concat_String}]([[]])+[])`;


// "return"
const return_String = [r, e, t, u, r, n].join('+');

const functionMaker = (func) =>
    `([])[${at_String}][${constructor_String}](${func})()`;

// "atob"
const atob_String = [a, t, o, b].join('+');
// "return atob"
const returnAtob_String = `(${return_String}+${_space}+${atob_String})`;
const atobFunction = `(${functionMaker(returnAtob_String)})`;

// "btoa"
const btoa_String = [b, t, o, a].join('+');
// "return btoa"
const returnBtoa_String = `(${return_String}+${_space}+${btoa_String})`;
const btoaFunction = `(${functionMaker(returnBtoa_String)})`;

// --------------------------

// "dHJ1ZQ=="
const dHJ1ZQequal_String = `${btoaFunction}(${TRUE})`;
const H = `${dHJ1ZQequal_String}[${val(1)}]`;
const J = `${dHJ1ZQequal_String}[${val(2)}]`;

// "ZmFsc2U="
const ZmFsc2Uequal_String = `${btoaFunction}(${FALSE})`;
const Z = `${ZmFsc2Uequal_String}[${val(0)}]`;
const U = `${ZmFsc2Uequal_String}[${val(6)}]`;

// "dW5kZWZpbmVk"
const dW5kZWZpbmVk_String = `${btoaFunction}(${UNDEFINED})`
const W = `${dW5kZWZpbmVk_String}[${val(1)}]`;
const k = `${dW5kZWZpbmVk_String}[${val(3)}]`;
const V = `${dW5kZWZpbmVk_String}[${val(10)}]`;

// "truedW5kZWZpbmVk"
const true_dW5kZWZpbmVk_String = [TRUE, dW5kZWZpbmVk_String].join('+'); // add true to reduce cost of index
const p = `(${true_dW5kZWZpbmVk_String})[${val(11)}]`;

// "truefalse"
const truefalse_String = `${TRUE}+[]+${FALSE}`;
// "dHJ1ZWZhbHNl"
const dHJ1ZWZhbHNl_String = `${btoaFunction}(${truefalse_String})`;
// "truedHJ1ZWZhbHNl"
const true_dHJ1ZWZhbHNl_String = [TRUE, dHJ1ZWZhbHNl_String].join('+'); // add true to reduce cost of index
const h = `(${true_dHJ1ZWZhbHNl_String})[${val(11)}]`;

// "truetrue"
const truetrue_String = `${TRUE}+[]+${TRUE}`;
// "dHJ1ZXRydWU="
const dHJ1ZXRydWUequal_String = `${btoaFunction}(${truetrue_String})`;
const true_dHJ1ZXRydWUequal_String = [TRUE, dHJ1ZXRydWUequal_String].join('+'); // add true to reduce cost of index
const R = `(${true_dHJ1ZXRydWUequal_String})[${val(10)}]`;

// "MQ=="
const MQequals_String = `${btoaFunction}(${val(1)})`;
const M = `${MQequals_String}[${val(0)}]`;

// "1true"
// can't use TRUE in since it would evaluate to 2 instead of "1true"
const _1true_String = `${val(1)}+[]+${TRUE}`;
// "MXQ="
const MXQequal_String = `${btoaFunction}(${_1true_String})`;
const X = `${MXQequal_String}[${val(1)}]`;

// "ca"
const ca_String = [c, a].join('+');
const q = `${atobFunction}(${ca_String})`;

// "Mw=="
const Mwequals_String = `${btoaFunction}(${val(3)})`;
const w = `${Mwequals_String}[${val(1)}]`;

// "f31"
const f31_String = [f, val(3), val(1)].join('+');
// "ZjMx"
const ZjMx_String = `${btoaFunction}(${f31_String})`;
const x = `${ZjMx_String}[${val(3)}]`;

// "en"
const en_String = [e, n].join('+');
const z = `${atobFunction}(${en_String})`;

// "t("
const tOpenParen_String = [t, _openParen].join('+');
// "dCg="
const dCgequal_String = `${btoaFunction}(${tOpenParen_String})`;
const C = `${dCgequal_String}[${val(1)}]`;

// "MTE="
const MTEequals_String = `${btoaFunction}(${val(11)})`;
const E = `${MTEequals_String}[${val(2)}]`;

// "tf"
const tf_String = [t, f].join('+');
// "dGY="
const dGYequal_String = `${btoaFunction}(${tf_String})`;
const G = `${dGYequal_String}[${val(1)}]`;

// "KQ=="
const KQequals_String = `${btoaFunction}(${_openParen})`;
const K = `${KQequals_String}[${val(0)}]`;


// "PA=="
const PAquals_String = `${btoaFunction}(${_lessthan})`;
const P = `${PAquals_String}[${val(0)}]`;


// "MTA="
const MTAequals_String = `${btoaFunction}(${val(10)})`;
const T = `${MTAequals_String}[${val(1)}]`;


// "YQ=="
const YQequals_String = `${btoaFunction}(${a})`;
const Y = `${YQequals_String}[${val(0)}]`;
const Q = `${YQequals_String}[${val(1)}]`;

// "document"
const document_String = [d, o, c, u, m, e, n, t].join('+');
// "return document"
const returnDocument_String = `(${return_String}+${_space}+${document_String})`;
const documentObject = `(${functionMaker(returnDocument_String)})`;
// "function HTMLDocument() { [native code] }"
const documentObject_String = `(${documentObject}+[])`;
const L = `${documentObject_String}[${val(11)}]`;

// "t0"
const t0_String = [t, val(0)].join('+');
// "dDA="
const dDAequals_String = `${btoaFunction}(${t0_String})`;
const D = `${dDAequals_String}[${val(1)}]`;

// "fiN"
const fiN_String = [f, i, N].join('+');
// "~#"
const tildePound_String = `${atobFunction}(${fiN_String})`;
const _pound = `${tildePound_String}[${val(1)}]`;

// "fjr"
const fjr_String = [f, j, r].join('+');
// "~:"
const tildeColon_String = `${atobFunction}(${fjr_String})`;
const _colon = `${tildeColon_String}[${val(1)}]`;

// "fj8"
const fj8_String = [f, j, val(8)].join('+');
// "~?"
const tildeQuestion_String = `${atobFunction}(${fj8_String})`;
const _question = `${tildeQuestion_String}[${val(1)}]`;

// "fic"
const fic_String = [f, i, c].join('+');
// "~'"
const tildeSingleQuote_String = `${atobFunction}(${fic_String})`;
const _singleQuote = `${tildeSingleQuote_String}[${val(1)}]`;

// "fia"
const fia_String = [f, i, a].join('+');
// "~&"
const tildeAmpersand_String = `${atobFunction}(${fia_String})`;
const _ampersand = `${tildeAmpersand_String}[${val(1)}]`;

// "fi0"
const fi0_String = [f, i, val(0)].join('+');
// "~-"
const tildeMinus_String = `${atobFunction}(${fi0_String})`;
const _minus = `${tildeMinus_String}[${val(1)}]`;

// "fit"
const fit_String = [f, i, t].join('+');
// "~+"
const tildePlus_String = `${atobFunction}(${fit_String})`;
const _plus = `${tildePlus_String}[${val(1)}]`;

// "fir"
const fir_String = [f, i, r].join('+');
// "~*"
const tildeStar_String = `${atobFunction}(${fir_String})`;
const _asterisk = `${tildeStar_String}[${val(1)}]`;


// "1/2"
const half_String = [val(1), _forwardSlash, val(2)].join('+');
// "return 1/2"
const returnHalf_String = `(${return_String}+${_space}+${half_String})`;
const zeroPointFive = `(${functionMaker(returnHalf_String)})`;
const zeroPointFive_String = `(${zeroPointFive}+[])`;
const _period = `${zeroPointFive_String}[${val(1)}]`;

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
const name_String = [n, a, m, e].join('+');
// "String"
const String_String = `${empty_String}[${constructor_String}][${name_String}]`;
// String["fromCodePoint"]
const fromCodePointFunction =
    [
        String_String,
        _openSquare, _doubleQuote,
        f, r, o, m, C, o, d, e, P, o, i, n, t,
        _doubleQuote, _closeSquare
    ].join('+');

const returnFromCodePointFunction = `(${return_String}+${_space}+${fromCodePointFunction})`;

function convertText(val) {
    return [...val]
        .map(x => garboMap.get(x) || getCodePoint(x))
        .join`+`;
}


function getCodePoint(x) {
    const codepoint_String = x.codePointAt(0) + [];
    const convertedPoint_String = convertText(codepoint_String);
    return `(${functionMaker(returnFromCodePointFunction)})(${convertedPoint_String})`;
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

const test_String1 = 'abcdefghijklmnopqrstuvwxyz';
const test_String2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const test_String3 = '1234567890';
const test_String4 = ` (){}[]<>/=".',#?:&-*`;

const test1 = eval(convertText(test_String1)) === test_String1;
const test2 = eval(convertText(test_String2)) === test_String2;
const test3 = eval(convertText(test_String3)) === test_String3;
const test4 = eval(convertText(test_String4)) === test_String4;
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
