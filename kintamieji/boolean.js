/*
BOOLEAN - logine reiksme

Galimos reiksmes: true (1) / false (0);

Operacijos:
- && (and) visi turi buti "true", jog gauti "true"
- || (or) bent vienas turi buti "true", jog gauti "true"
*/

console.clear();

const arPilnametis = true;
const arLyja = false;

const isSunnyDay = true;
const isNight = false;

console.log(isSunnyDay);
console.log(isNight);

const count = false + false + true + true + true + false + true;
console.log('>>>', count);

const count2 = (false + true + true) * (true + true + true);
console.log(count2);

const a = true && true && true && true && true && true;
console.log('a:', a);

const b = true || true || true || true || true || true;
console.log('b:', b);

const c = true || false || false || false || false || false;
console.log('c:', c);

const d = true && true && true && false && true && true;
console.log('d:', d);

const e = true && (false || true);
// const e = true && (true);
// const e = true && true;
// const e = true;
console.log(e);

const f = true && false || true;
// const f = false || true;
// const f = true;
console.log(f);
