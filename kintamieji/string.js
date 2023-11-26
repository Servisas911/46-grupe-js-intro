/*
STRING

Iniciavimas kabutemis: "", '', `` (backtick)

Teksto ilgis: kintamasis.length
Teksto ilgis: 'labas'.length
*/

console.clear();

const txt1 = "tekstas 1";
console.log(txt1);

const txt2 = 'tekstas 2';
console.log(txt2);

// Vienguba kabute (').
const kabute1 = "Vienguba kabute (').";
console.log(kabute1);

// Dvyguba kabute (").
const kabute2 = 'Dvyguba kabute (").';
console.log(kabute2);

// Vienguba (') ir dvyguba (") kabutes.
const kabute121 = 'Vienguba (\') ir dvyguba (") kabutes.';
console.log(kabute121);

const kabute122 = "Vienguba (') ir dvyguba (\") kabutes.";
console.log(kabute122);

const kabute123 = 'Vienguba (\') ir dvyguba (\") kabutes.';
console.log(kabute123);

const kabute124 = "Vienguba (\') ir dvyguba (\") kabutes.";
console.log(kabute124);

const back = '\\\\';
console.log(back);

// \n = new line (nusileidzia zemyn)
// \r = return (grizta i eilutes pradzia)
const formatuotasTekstas = "Labas\n\rrytas, \n\rLietuva!";
console.log(formatuotasTekstas);

/* \n
Labas
     rytas
          Lietuva
*/

/* \r
Labas\rrytas\rLietuva
Lietuva
*/

const gg = 'gggggggggggggggggggg\raaa\rbbbbb\rxx';
console.log(gg);

// aaaggggggggggggggggg

const lrl = "Labas\n\r\
rytas,\n\r\
Lietuva!";
console.log(lrl);

const backtick = `Labas
rytas
Lietuva`;
console.log(backtick);

console.clear();

const vardas = 'Chuck';
console.log(vardas, '=', vardas.length, 'simboliai');
console.log(vardas, vardas.lenght);

const pavarde = 'Norris';

const pilnasVardas = 'Chuck Norris';
console.log(pilnasVardas, pilnasVardas.length);

const fullname = vardas + ' ' + pavarde;
console.log(fullname);

// Labas rytas, Lietuva!
const labas = 'Labas';
const parosMetas = 'vakaras';
const valstybe = 'Latvija';

const lrl2 = labas + ' ' + parosMetas + ", " + valstybe + '!';
console.log(lrl2);

const lrl3 = `${labas} ${parosMetas}, ${valstybe}!`;
console.log(lrl3);

console.clear();

const n1 = 5 + 7;
console.log(n1);

const n2 = 5 + '7';
console.log(n2);

const n3 = '5' + 7;
console.log(n3);

const n4 = '5' + '7';
console.log(n4);

const n5 = 7 % 5;
console.log(n5);

const n6 = '7' % 5;
console.log(n6);

const n7 = 7 % '5';
console.log(n7);

const n8 = '7' % '5';
console.log(n8);

const ll = 'labas' % 'l';
console.log(ll);