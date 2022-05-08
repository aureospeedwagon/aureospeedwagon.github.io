function val(n) {
    if (n === 0 || n === '0') {
        return '(+[])';
    }
    if (n < 10) {
        return '(' + '+!+[]'.repeat(n) + ')';
    }

    return '(' + [...n.toString()].map(x => `(${val(x)}+[])`).join('+') + ')';

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

const a = `(${falseString}[${val(1)}])`;
const d = `(${undefinedString}[${val(2)}])`;
const e = `(${trueString}[${val(3)}])`;
const f = `(${falseString}[${val(0)}])`;
const i = `(${undefinedString}[${val(5)}])`;
const l = `(${falseString}[${val(2)}])`;
const n = `(${undefinedString}[${val(1)}])`;
const r = `(${trueString}[${val(1)}])`;
const s = `(${falseString}[${val(3)}])`;
const t = `(${trueString}[${val(0)}])`;
const u = `(${undefinedString}[${val(0)}])`;

const flatString = [f, l, a, t].join('+');

// "function flat() { [native code] }"
const flatFunctionString = `([][${flatString}]+[])`
const c = `(${flatFunctionString}[${val(3)}])`;
const o = `(${flatFunctionString}[${val(6)}])`;
const v = `(${flatFunctionString}[${val(23)}])`;

const _space = `(${flatFunctionString}[${val(8)}])`;
const _openParen = `(${flatFunctionString}[${val(13)}])`;
const _closeParen = `(${flatFunctionString}[${val(14)}])`;
const _openCurly = `(${flatFunctionString}[${val(16)}])`;
const _closeCurly = `(${flatFunctionString}[${val(32)}])`;
const _openSquare = `(${flatFunctionString}[${val(18)}])`;
const _closeSquare = `(${flatFunctionString}[${val(30)}])`;


// "fontcolor"
const fontcolorString = [f, o, n, t, c, o, l, o, r].join('+');
// "<font color="undefined"></font>"
const fontcolorStringString = `(${emptyString}[${fontcolorString}]())`;
const _doubleQuote = `(${fontcolorStringString}[${val(12)}])`;
const _equals = `(${fontcolorStringString}[${val(11)}])`;
const _lessthan = `(${fontcolorStringString}[${val(0)}])`;
const _greaterthan = `(${fontcolorStringString}[${val(23)}])`;
const _forwardSlash = `(${fontcolorStringString}[${val(25)}])`;


const constructorString = [c, o, n, s, t, r, u, c, t, o, r].join('+');

// "function String() { [native code] }"
const stringConstructorString = `(${emptyString}[${constructorString}]+[])`;
const g = `(${stringConstructorString}[${val(14)}])`;
const S = `(${stringConstructorString}[${val(9)}])`;

// "function Array() { [native code] }"
const arrayConstructorString = `([][${constructorString}]+[])`;
const y = `(${arrayConstructorString}[${val(13)}])`;
const A = `(${arrayConstructorString}[${val(9)}])`;

// "function Number() { [native code] }"
const numberConstructorString = `((+[])[${constructorString}]+[])`;
const b = `(${numberConstructorString}[${val(12)}])`;
const m = `(${numberConstructorString}[${val(11)}])`;
const N = `(${numberConstructorString}[${val(9)}])`;

// "function Boolean() { [native code] }"
const booleanConstructorString = `((![])[${constructorString}]+[])`;
const B = `(${booleanConstructorString}[${val(9)}])`;

// "function Function() { [native code] }"
const functionConstructorString = `([][${flatString}][${constructorString}]+[])`;
const F = `(${functionConstructorString}[${val(9)}])`;

// `function anonymous(
//     ) {
//
//     }`
const anonymousFunctionString
    = `(([])[${flatString}][${constructorString}]()+[])`;
const _newLine = `(${anonymousFunctionString}[${val(19)}])`;


const entriesString = [e, n, t, r, i, e, s].join('+');
// "[object Array Iterator]"
const objectArrayIteratorString = `([][${entriesString}]()+[])`;
const j = `(${objectArrayIteratorString}[${val(3)}])`;
const I = `(${objectArrayIteratorString}[${val(14)}])`;


const object = `([][${entriesString}]()[${constructorString}]())`;

// "[object Object]"
const objectObjectString = `(${object}+[])`;
const O = `(${objectObjectString}[${val(8)}])`;


// "concat"
const concatString = [c,o,n,c,a,t].join('+');
// "0,0"
const zeroCommaZeroString = `([+[]][${concatString}](+[])+[])`
const _comma = `(${zeroCommaZeroString}[${val(1)}])`;


const returnString = [r, e, t, u, r, n].join('+');

const functionMaker = (func) =>
    `([])[${flatString}][${constructorString}](${func})()`;

const atobString = [a, t, o, b].join('+');
// "return atob"
const returnAtobString = `(${returnString}+${_space}+${atobString})`;
const atobFunction = `(${functionMaker(returnAtobString)})`;

const btoaString = [b, t, o, a].join('+');
// "return btoa"
const returnBtoaString = `(${returnString}+${_space}+${btoaString})`;
const btoaFunction = `(${functionMaker(returnBtoaString)})`;

// --------------------------


// "d2to"
const d2toString = [d, val(2), t, o].join('+');
// "wkh"
const wkhString = `${atobFunction}(${d2toString})`;
const h = `(${wkhString}[${val(2)}])`;

// "fi"
const fiString = [f, i].join('+');
// "Zmk="
const ZmkequalsString = `${btoaFunction}(${fiString})`;
const k = `(${ZmkequalsString}[${val(2)}])`;

// "ffi"
const ffiString = [f, f, i].join('+');
// "ZmZp"
const ZmZpString = `${btoaFunction}(${ffiString})`;
const p = `(${ZmZpString}[${val(3)}])`

// "ca"
const caString = [c, a].join('+');
const q = `${atobFunction}(${caString})`;

// "cw=="
const cwequalsString = `${btoaFunction}(${s})`;
const w = `(${cwequalsString}[${val(1)}])`;

// "f31"
const f31String = [f,_3,_1].join('+');
// "ZjMx"
const ZjMxString = `${btoaFunction}(${f31String})`;
const x = `(${ZjMxString}[${val(3)}])`;

// "en"
const enString = [e, n].join('+');
const z = `${atobFunction}(${enString})`;


// "  "
const spaceSpaceString = [_space, _space].join('+');
// "ICAg"
const ICAgString = `${btoaFunction}(${spaceSpaceString})`;
const C = `(${ICAgString}[${val(1)}])`;

// "MTE="
const MTEequalsString = `${btoaFunction}(${val(11)})`;
const E = `(${MTEequalsString}[${val(2)}])`;

// "tf"
const teString = [t, f].join('+');
// "dGY="
const dGYequalString = `${btoaFunction}(${teString})`;
const G = `(${dGYequalString}[${val(1)}])`;

// "tt"
const ttString = [t, t].join('+');
// "dHQ="
const dHQequalString = `${btoaFunction}(${ttString})`;
const H = `(${dHQequalString}[${val(1)}])`;

// "KQ=="
const KQequalsString = `${btoaFunction}(${_openParen})`;
const K = `(${KQequalsString}[${val(0)}])`;

// "MQ=="
const MQequalsString = `${btoaFunction}(${val(1)})`;
const M = `(${MQequalsString}[${val(0)}])`;

// "PA=="
const PAqualsString = `${btoaFunction}(${_lessthan})`;
const P = `(${PAqualsString}[${val(0)}])`;

// "ttf"
const ttfString = [t, t, f].join('+');
// "dHRm"
const dHRmString = `${btoaFunction}(${ttfString})`;
const R = `(${dHRmString}[${val(2)}])`;

// "rrf"
const rrfString = [r, r, f].join('+');
// "cnJm"
const cnJmString = `${btoaFunction}(${rrfString})`;
const J = `(${cnJmString}[${val(2)}])`;

// "MTA="
const MTAequalsString = `${btoaFunction}(${val(10)})`;
const T = `(${MTAequalsString}[${val(1)}])`;

// "fu"
const fuString = [f, u].join('+');
// "ZnU="
const ZnUequalString = `${btoaFunction}(${fuString})`;
const U = `(${ZnUequalString}[${val(2)}])`;

// "uuu"
const uuuString = [u, u, u].join('+');
// "dXV1"
const dxV1String = `${btoaFunction}(${uuuString})`;
const V = `(${dxV1String}[${val(2)}])`;

// "af"
const afString = [a, f].join('+');
// "YWY="
const YWYequalString = `${btoaFunction}(${afString})`;
const W = `(${YWYequalString}[${val(1)}])`;

// "ut"
const utString = [u, t].join('+');
// "dXQ="
const dXQequalString = `${btoaFunction}(${utString})`;
const X = `(${dXQequalString}[${val(1)}])`;

// "YQ=="
const YQequalsString = `${btoaFunction}(${a})`;
const Y = `(${YQequalsString}[${val(0)}])`;
const Q = `(${YQequalsString}[${val(1)}])`;

// "Zg=="
const ZgequalsString = `${btoaFunction}(${f})`;
const Z = `(${ZgequalsString}[${val(0)}])`;


const documentString = [d, o, c, u, m, e, n, t].join('+');
// "return document"
const returnDocumentString = `(${returnString}+${_space}+${documentString})`;
const documentObject = `(${functionMaker(returnDocumentString)})`;
// "function HTMLDocument() { [native code] }"
const documentObjectString = `(${documentObject}+[])`;
const L = `(${documentObjectString}[${val(11)}])`;
const D = `(${documentObjectString}[${val(12)}])`;

// "ciN"
const ciNString = [c, i, N].join('+');
// "r#"
const rPoundString = `${atobFunction}(${ciNString})`;
const _pound = `(${rPoundString}[${val(1)}])`;

// "cjr"
const cjrString = [c, j, r].join('+');
// "r:"
const rColonString = `${atobFunction}(${cjrString})`;
const _colon = `(${rColonString}[${val(1)}])`;

// "cj8"
const cj8String = [c, j, _8].join('+');
// "r?"
const rQuestionString = `${atobFunction}(${cj8String})`;
const _question = `(${rQuestionString}[${val(1)}])`;

// "cic"
const cicString = [c, i, c].join('+');
// "r'"
const rSingleQuoteString = `${atobFunction}(${cicString})`;
const _singleQuote = `(${rSingleQuoteString}[${val(1)}])`;

// "cia"
const ciaString = [c, i, a].join('+');
// "r&"
const rAmpersandString = `${atobFunction}(${ciaString})`;
const _ampersand = `(${rAmpersandString}[${val(1)}])`;

// "ci0"
const ci0String = [c, i, _0].join('+');
// "r-"
const rMinusString = `${atobFunction}(${ci0String})`;
const _minus = `(${rMinusString}[${val(1)}])`;

// "cit"
const cisString = [c, i, s].join('+');
// "r+"
const rPlusString = `${atobFunction}(${cisString})`;
const _plus = `(${rPlusString}[${val(1)}])`;

// "cir"
const cirString = [c, i, r].join('+');
// "r*"
const rStarString = `${atobFunction}(${cirString})`;
const _asterisk = `(${rStarString}[${val(1)}])`;


// "1/2"
const halfString = [val(1), _forwardSlash, val(2)].join('+');
// "return 1/2"
const returnHalfString = `(${returnString}+${_space}+${halfString})`;
const zeroPointFive = `(${functionMaker(returnHalfString)})`;
const zeroPointFiveString = `(${zeroPointFive}+[])`;
const _period = `(${zeroPointFiveString}[${val(1)}])`;

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

const fromCodePointFunction =
    [
        S, t, r, i, n, g,
        _openSquare, _doubleQuote,
        f, r, o, m, C, o, d, e, P, o, i, n, t,
        _doubleQuote, _closeSquare
    ].join('+');

const returnFromCodePointFunction = `(${returnString}+${_space}+${fromCodePointFunction})`;

function convertText(val) {
    return [...val]
        .map(x => garboMap.get(x) || codePoint(x))
        .join`+`;
}


function codePoint(x) {
    const codepointString = x.codePointAt(0) + [];
    const convertedPointString = convertText(codepointString);
    return `(${functionMaker(returnFromCodePointFunction)})(${convertedPointString})`;
}

function convertCode(text) {
    return functionMaker(convertText(`${text}`))
}

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
sizeMap.push(['@', codePoint('@').length]);


const testString1 = 'abcdefghijklmnopqrstuvwxyz';
const testString2 = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
const testString3 = '1234567890';
const testString4 = ` (){}[]<>/=".',#?:&-*`;

const test1 = eval(convertText(testString1)) === testString1;
const test2 = eval(convertText(testString2)) === testString2;
const test3 = eval(convertText(testString3)) === testString3;
const test4 = eval(convertText(testString4)) === testString4;
const testAll = test1 && test2 && test3 && test4;

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
hm.appendChild(hm3);
hm.appendChild(hm3l);
hm.appendChild(hf);


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
