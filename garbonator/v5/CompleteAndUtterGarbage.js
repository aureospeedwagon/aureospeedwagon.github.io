// use for when strings are being concatenated and parens are needed for clarity
function safeValue(n) {
    return `(${val(n)})`
}

function val(n) {
    if (n === 0 || n === '0') {
        return '+[]';
    }
    if (n < 10) {
        return '+!![]'.repeat(n);
    }

    return '[]+'
        + [...n.toString()]
            .map(x => `(${val(x)})`)
            .join('+');
}

const _1 = `(${val(1)}+[])`;
const _2 = `(${val(2)}+[])`;
const _3 = `(${val(3)}+[])`;
const _4 = `(${val(4)}+[])`;
const _5 = `(${val(5)}+[])`;
const _6 = `(${val(6)}+[])`;
const _7 = `(${val(7)}+[])`;
const _8 = `(${val(8)}+[])`;
const _9 = `(${val(9)}+[])`;
const _0 = `(${val(0)}+[])`;

const FALSE = '![]';
const TRUE = '!![]';
const UNDEFINED = '[][[]]';
const NAN = `+${UNDEFINED}`;

const true_String = `(${TRUE}+[])`;
const false_String = `(${FALSE}+[])`;
const undefined_String = `(${UNDEFINED}+[])`;
const empty_String = '([]+[])'
const NaN_String = `(${NAN}+[])`;


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

const N = `${NaN_String}[${val(0)}]`;

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
const _openSquare = `(${true_AtFunction_String})[${val(20)}]`;

// by adding NaN to the start, we can make a net gain by reducing the cost of the index
// "NaNfunction at() { [native code] }"
const nan_AtFunction_String = [NAN, atFunction_String].join('+')
const _space = `(${nan_AtFunction_String})[${val(11)}]`;
const _closeSquare = `(${nan_AtFunction_String})[${val(31)}]`;


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

// "function String() { [native code] }"
const stringConstructor_String = `(${empty_String}[${constructor_String}]+[])`;
const g = `${stringConstructor_String}[${val(14)}]`;
// "NaNfunction String() { [native code] }"
const NaN_StringConstructor_String = [NAN, stringConstructor_String].join('+');
const S = `(${NaN_StringConstructor_String})[${val(12)}]`;

// "function Array() { [native code] }"
const arrayConstructor_String = `([][${constructor_String}]+[])`;
const y = `${arrayConstructor_String}[${val(13)}]`;
// "NaNfunction Array() { [native code] }"
const NaN_ArrayConstructor_String = [NAN, arrayConstructor_String].join('+');
const A = `(${NaN_ArrayConstructor_String})[${val(12)}]`;

// "function Number() { [native code] }"
const numberConstructor_String = `((+[])[${constructor_String}]+[])`;
const m = `${numberConstructor_String}[${val(11)}]`;

// "1e100"
const googolString = [safeValue(1), e, safeValue(1), safeValue(0), safeValue(0)].join('+');
// "1e+100"
const googolNumberString = `((+[])[${constructor_String}](${googolString})+[])`;
const _plus = `${googolNumberString}[${val(2)}]`;


// "function Boolean() { [native code] }"
const booleanConstructor_String = `((![])[${constructor_String}]+[])`;
// "NaNfunction Boolean() { [native code] }"
const NaN_BooleanConstructor_String = [NAN, booleanConstructor_String].join('+');
const B = `(${NaN_BooleanConstructor_String})[${val(12)}]`;

// "function Function() { [native code] }"
const functionConstructor_String = `([][${at_String}][${constructor_String}]+[])`;
// "NaNfunction Function() { [native code] }"
const NaN_FunctionConstructor_String = [NAN, functionConstructor_String].join('+');
const F = `(${NaN_FunctionConstructor_String})[${val(12)}]`;


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
const b = `${objectArrayIterator_String}[${val(2)}]`;
const j = `${objectArrayIterator_String}[${val(3)}]`;
const I = `${objectArrayIterator_String}[${val(14)}]`;

const object = `([][${entries_String}]()[${constructor_String}]())`;
//"function Object() { [native code] }"
const objectConstructor_String = `([][${entries_String}]()[${constructor_String}]+[])`;
// "NaNfunction Object() { [native code] }"
const NaN_ObjectConstructor_String = [NAN, objectConstructor_String].join('+');
const O = `(${NaN_ObjectConstructor_String})[${val(12)}]`;

// "concat"
const concat_String = [c, o, n, c, a, t].join('+');
const _comma = `([[]][${concat_String}]([[]])+[])`;


// "return"
const return_String = [r, e, t, u, r, n].join('+');
const functionMaker = (func) => `[][${at_String}][${constructor_String}](${func})()`;

// --------------------------

// "self"
const self_String = [s, e, l, f].join('+');
// "return self"
const returnSelf_String = `(${return_String}+${_space}+${self_String})`;
const selfFunction = `${functionMaker(returnSelf_String)}`;

// "[object Window]"
const windowObjectString = `${selfFunction}+[]`;
const w = `(${windowObjectString})[${val(13)}]`;
const NaN_windowObjectString = `${NAN}+${selfFunction}+[]`;
const W = `(${NaN_windowObjectString})[${val(11)}]`;


// --------------------------

// "statusbar"
const statusbar_String = [s, t, a, t, u, s, b, a, r].join('+');
// "return statusbar"
const returnStatusbar_String = `(${return_String}+${_space}+${statusbar_String})`;
const statusbarFunction = `${functionMaker(returnStatusbar_String)}`;

// "[object BarProp]"
const barpropObjectString = `${statusbarFunction}+[]`;
const P = `(${barpropObjectString})[${val(11)}]`;

// --------------------------

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

// "PA=="
// const PAqualsString = `${btoaFunction}(${_lessthan})`;
// const P2 = `(${PAqualsString}[${val(0)}])`;


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
const k = `${dW5kZWZpbmVk_String}[${val(3)}]`;
const V = `${dW5kZWZpbmVk_String}[${val(10)}]`;


// TODO: maybe if can find k cheaper. Need to reduce cost of k (or others) by about 95
// // "link"
// const link_String = [l, i, n, k].join('+');
// // "<a href=\"undefined\"></a>"
// const link_String_String = `(${empty_String}[${link_String}]())`;
// const h2 = `${link_String_String}[${val(3)}]`;


// "truedW5kZWZpbmVk"
const true_dW5kZWZpbmVk_String = [TRUE, dW5kZWZpbmVk_String].join('+'); // add true to reduce cost of index
const p = `(${true_dW5kZWZpbmVk_String})[${val(11)}]`;

// "aNaN"
const aNaN_String = `${a}+(${NAN})`;
// "hÖ"
const hOStuff_String = `${atobFunction}(${aNaN_String})`;
const h = `${hOStuff_String}[${val(0)}]`;


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

// "f31"
const f31_String = [f, safeValue(3), safeValue(1)].join('+');
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

// "TmFO"
const TmFO_String = `${btoaFunction}(${NAN})`;
const T = `${TmFO_String}[${val(0)}]`;

// "YQ=="
const YQequals_String = `${btoaFunction}(${a})`;
const Y = `${YQequals_String}[${val(0)}]`;
const Q = `${YQequals_String}[${val(1)}]`;

// "document"
const document_String = [d, o, c, u, m, e, n, t].join('+');
// "return document"
const returnDocument_String = `(${return_String}+${_space}+${document_String})`;
const documentObject = `(${functionMaker(returnDocument_String)})`;
// "[object HTMLDocument]"
const documentObject_String = `(${documentObject}+[])`;
const L = `${documentObject_String}[${val(11)}]`;

// "t0"
const t0_String = [t, safeValue(0)].join('+');
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
const fj8_String = [f, j, safeValue(8)].join('+');
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

// "fir"
const fir_String = [f, i, r].join('+');
// "~*"
const tildeStar_String = `${atobFunction}(${fir_String})`;
const _asterisk = `${tildeStar_String}[${val(1)}]`;


// "true/2" (equivalent to "1/2")
const half_String = [TRUE, _forwardSlash, safeValue(2)].join('+');
// "return true/2"
const returnHalf_String = `${return_String}+${_space}+${half_String}`;
const zeroPointFive = `${functionMaker(returnHalf_String)}`;
const zeroPointFive_String = `(${zeroPointFive}+[])`;
const _period = `${zeroPointFive_String}[${val(1)}]`;

// "true/1e10" (equivalent to "1e-10")
const tenBillionth_String = [TRUE, _forwardSlash, safeValue(1), e, safeValue(10)].join('+');
// "return true/1e10"
const returnTenBillionth_String = `${return_String}+${_space}+${tenBillionth_String}`;
const tenBillionth = `${functionMaker(returnTenBillionth_String)}`;
// "1e-10"
const oneEMinus10_String = `(${tenBillionth}+[])`;
const _minus = `${oneEMinus10_String}[${val(2)}]`;

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

// "fromCodePoint"
const fromCodePoint_String = [f, r, o, m, C, o, d, e, P, o, i, n, t].join('+');
// String.fromCodePoint
const fromCodePointFunction = `([]+[])[${constructor_String}][${fromCodePoint_String}]`;

// "split"
const split_String = [s, p, l, i, t].join('+');
// "reduce"
const reduce_String = [r,e,d,u,c,e].join('+');

// =================================================

function convertText(value) {

    const noncomp = convertTextNonCompressed(value);
    const comp = convertTextCompressed(value);

    if (comp.length < noncomp.length) {
        console.log('~', 100 - Math.floor(100 * (comp.length / noncomp.length)) + '% compression');
        return comp;
    } else {
        return noncomp;
    }
}

function convertTextNonCompressed(value) {
    return [...value]
        .map(x => garboMap.get(x) || getCodePoint(x))
        .join`+`;
}

const decompressFunctionCode = convertCode(`return(t,f)=>t+String.fromCodePoint(f)`, false);
const decompressionOverhead = `[${split_String}](${f})` // convert back to array
        + `[${reduce_String}](${decompressFunctionCode})` //convert back to proper characters and join to string

function compressionFunction(x) {
    return x.codePointAt(0);
}


function convertTextCompressed(value) {
    if (!value.length) {
        return '';
    }
    const valArray = [...value]; // convert to array of characters
    const nValArray = valArray.map(compressionFunction); // convert to numbers
    const garbo = convertTextNonCompressed('f'+nValArray.join('f')); //join with cheap f's
    const compressed = `(${garbo})` + decompressionOverhead;

    return compressed;
}


function getCodePoint(x) {
    const codepoint = x.codePointAt(0);
    const convertedPoint_String = val(codepoint);
    return `${fromCodePointFunction}(${convertedPoint_String})`;
}

function convertCode(text, allowCompression = true) {
    if (allowCompression) {
        return functionMaker(convertText(`${text}`))
    }
    return functionMaker(convertTextNonCompressed(`${text}`))
}

// TODO: make simpler?
function convertFile(dataUrl) {
    const fileFunction = `const f = window.open();f.document.body.innerHTML = '<iframe src="${dataUrl}" style="border:none "width="100vw" height="100vh"></iframe>';`;
    const converted = convertText(fileFunction);
    return functionMaker(converted);
}


// diagonstics ======================================================================================
function tests() {
    const testString1 = 'abcdefghijklmnopqrstuvwxyz';
    const testString2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const testString3 = '1234567890';
    const testString4 = ` (){}[]<>/=".',#?:&-*`;

    const test1 = eval(convertTextNonCompressed(testString1)) === testString1;
    const test2 = eval(convertTextNonCompressed(testString2)) === testString2;
    const test3 = eval(convertTextNonCompressed(testString3)) === testString3;
    const test4 = eval(convertTextNonCompressed(testString4)) === testString4;
    const test5 = eval(convertTextNonCompressed('@')) === '@';
    const test1b = eval(convertTextCompressed(testString1)) === testString1;
    const test2b = eval(convertTextCompressed(testString2)) === testString2;
    const test3b = eval(convertTextCompressed(testString3)) === testString3;
    const test4b = eval(convertTextCompressed(testString4)) === testString4;
    const test5b = eval(convertTextCompressed('@')) === '@';
    const testAll = test1 && test2 && test3 && test4 && test5
        && test1b && test2b && test3b && test4b && test5b;

    console.log('tests pass: ', testAll);
    if (!testAll) {
        console.log('test1', test1);
        console.log('test2', test2);
        console.log('test3', test3);
        console.log('test4', test4);
        console.log('test5', test5);
        console.log('test1b', test1b);
        console.log('test2b', test2b);
        console.log('test3b', test3b);
        console.log('test4b', test4b);
        console.log('test5b', test5b);
    }
}

function diagnostics() {
    const sizeMap = new Map();
    garboMap.forEach((v, k) => sizeMap.set(k, v.length));
    sizeMap.set('@', convertText('@').length);

    const compressionMap = new Map();
    sizeMap.forEach((v, k) => {
        numberValue = k.codePointAt(0).toString();
        garboValue = convertTextNonCompressed(numberValue);
        compressionMap.set(k, garboValue.length);
    });

    const savingsMap = new Map();
    sizeMap.forEach((v, k) => {
        numberValue = k.codePointAt(0).toString();
        garboValue = convertTextNonCompressed(numberValue);
        savingsMap.set(k, garboValue.length - v);
    });


    // statistics
    console.log(Array.from(sizeMap.entries()));
    // console.log(Array.from(savingsMap.entries()));

    const statText1 = `open('https://youtu.be/dQw4w9WgXcQ')`;
    const stat1 = convertCode(statText1);
    console.log('nggyu', stat1.length, stat1.length / 1024 + 'kb');

    console.log('approximate compression/decompression overhead:', decompressionOverhead.length, "+ ~" + f.length + " per character");

    const stat2 = convertCode('');
    console.log('approximate code overhead', stat2.length);
}

tests();
diagnostics();


// ==================================================================================================

// functions

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


async function readFileAsDataURL(file) {
    let result_base64 = await new Promise((resolve) => {
        let fileReader = new FileReader();
        fileReader.onload = (e) => resolve(fileReader.result);
        fileReader.readAsDataURL(file);
    });
    return result_base64;
}

async function getDataUrl() {
    const fileThing = fileInput.files.item(0);
    return await readFileAsDataURL(fileThing);
}

// HTML --------------------------------------

document.body.style.background = 'black';
document.body.style.fontFamily = 'Consolas';

const mainArea = document.createElement('div');
mainArea.style.display = 'flex';
mainArea.style.flexDirection = 'row';

const modeArea = document.createElement('div');
modeArea.style.width = '100px';

const textArea = document.createElement('textarea');
textArea.id = 'i';
textArea.style.width = "calc(100vw - 420px)";
textArea.style.height = '70px';
textArea.style.background = 'black';
textArea.style.color = '#00beef';
textArea.style.border = '1px solid ' + '#00beef';
textArea.style.borderImage = 'none';
textArea.style.resize = 'none';

const outputArea = document.createElement('p');
outputArea.id = 'o';
outputArea.style.width = '100%';
outputArea.style.height = '80%';
outputArea.style.color = '#00beef';
outputArea.style.fontSize = '14px';
outputArea.style.fontFamily = 'Consolas';



const fileInput = document.createElement('input');
fileInput.type = 'file';

const textModeRadio = document.createElement('input');
textModeRadio.type = 'radio';
textModeRadio.name = 'mode'
textModeRadio.value = 'text';
textModeRadio.checked = true;

const textModeLabel = document.createElement('label');
textModeLabel.for = 'text';
textModeLabel.innerHTML = 'Text';
textModeLabel.style.color = '#00beef';
textModeLabel.style.fontSize = '12px';

const codeModeRadio = document.createElement('input');
codeModeRadio.type = 'radio';
codeModeRadio.name = 'mode';
codeModeRadio.value = 'code';

const codeModeLabel = document.createElement('label');
codeModeLabel.for = 'code';
codeModeLabel.innerHTML = 'Code';
codeModeLabel.style.color = '#00beef';
codeModeLabel.style.fontSize = '12px';

const fileModeRadio = document.createElement('input');
fileModeRadio.type = 'radio';
fileModeRadio.name = 'mode';
fileModeRadio.value = 'file';

const fileModeLabel = document.createElement('label');
fileModeLabel.for = 'file';
fileModeLabel.innerHTML = 'Image (Exp)';
fileModeLabel.style.color = '#00beef';
fileModeLabel.style.fontSize = '12px';


modeArea.appendChild(textModeRadio);
modeArea.appendChild(textModeLabel);
modeArea.appendChild(document.createElement('br'));
modeArea.appendChild(codeModeRadio);
modeArea.appendChild(codeModeLabel);
modeArea.appendChild(document.createElement('br'));
// modeArea.appendChild(fileModeRadio);
// modeArea.appendChild(fileModeLabel);
// modeArea.appendChild(fileInput);
// modeArea.appendChild(document.createElement('br'));


const garboButton = document.createElement('button');
garboButton.className = "garbobutton";
garboButton.onclick = garbonate;
garboButton.style.background = '#00beef';
garboButton.style.border = 'none';
garboButton.style.fontFamily = 'fantasy';
garboButton.style.fontSize = '45px';
garboButton.style.width = '320px';
garboButton.style.cursor = 'pointer';
garboButton.innerText = 'GARBONATE';
garboButton.style.display = 'flex';
garboButton.style.flexDirection = 'row';
garboButton.style.justifyContent = 'space-around';

const trash = document.createElement('div');
trash.className = "hg";
trash.style.flexDirection = 'column';
trash.style.width = '50px';
trash.style.paddingLeft = '10px';

const trashHandle = document.createElement('div');
trashHandle.style.flex = '0 1 5%';
trashHandle.style.background = 'black';
trashHandle.style.width = '30%';
trashHandle.style.borderTopLeftRadius = '5px';
trashHandle.style.borderTopRightRadius = '5px';
trashHandle.style.left = '50%';
trashHandle.style.transform = 'translateX(-50%)';
trashHandle.style.height = '5px';
trashHandle.style.position = 'relative';
trashHandle.style.top = '1px';

const trashLid = document.createElement('div');
trashLid.style.flex = '0 1 10%';
trashLid.style.background = 'black';
trashLid.style.width = '100%';
trashLid.style.borderTopLeftRadius = '5px';
trashLid.style.borderTopRightRadius = '5px';
trashLid.style.height = '10px';
trashLid.style.borderBottom = '2px solid ' + '#00beef';

const trashCan = document.createElement('div');
trashCan.style.display = 'flex';
trashCan.style.flexDirection = 'row';
trashCan.style.justifyContent = 'space-around';
trashCan.style.background = 'black';
trashCan.style.width = '95%';
trashCan.style.left = '50%';
trashCan.style.transform = 'translateX(-50%)';
trashCan.style.flex = '0 1 85%';
trashCan.style.borderBottomLeftRadius = '5px';
trashCan.style.borderBottomRightRadius = '5px';
trashCan.style.position = 'relative';

const trashBar1 = document.createElement('div');
trashBar1.style.height = '29px';
trashBar1.style.width = '5%';
trashBar1.style.borderRadius = '5px';
trashBar1.style.background = '#00beef';
trashBar1.style.marginTop = '5px';
trashBar1.style.marginBottom = '5px';

const trashBar2 = trashBar1.cloneNode();
const trashBar3 = trashBar1.cloneNode();

trashCan.appendChild(trashBar1);
trashCan.appendChild(trashBar2);
trashCan.appendChild(trashBar3);
trash.appendChild(trashHandle);
trash.appendChild(trashLid);
trash.appendChild(trashCan);
garboButton.appendChild(trash);

mainArea.appendChild(modeArea);
mainArea.appendChild(textArea);
mainArea.appendChild(garboButton);
document.body.appendChild(mainArea);
document.body.appendChild(outputArea);
