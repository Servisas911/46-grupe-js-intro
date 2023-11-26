/*
IF - palyginimo sakinys/salyga

Palyginimo operatoriai:
- visi: >, <, ==, ===, >=, <=, !=, !==
- naudotini: >, <, ===, >=, <=, !==
- nenaudotini: ==, !=

Loginiai operatoriai:
&&, ||, !

Kodo sablonai:
if () {}
if () {} else {}
if () {} else if() {}
if () {} ... else if() {}
if () {} ... else if() {} ... else {}
*/

console.clear();

if (4 > 2) {
    console.log('4 yra daugiau uz 2');
}

if (5 < 0) {
    console.log('5 yra maziau uz 0');
}

if (true) {
    console.log(true);
}

if (false) {
    console.log(false);
}


const a = 7;
const b = 5;

if (a > b) {
    console.log('A yra daugiau uz B');
} else {
    console.log('A nera daugiau uz B');
}

const day = 1;

if (day % 7 == 1) {
    console.log('Pirmadienis');
} else if (day % 7 == 2) {
    console.log('Antradienis');
} else if (day % 7 == 3) {
    console.log('Treciadienis');
} else if (day % 7 == 4) {
    console.log('Ketvirtadienis');
} else if (day % 7 == 5) {
    console.log('Penktadienis');
} else if (day % 7 == 6) {
    console.log('Sestadienis');
} else if (day % 7 == 0) {
    console.log('Sekmadienis');
} else {
    console.log('Tokia diena neegzistuoja!');
}

console.clear();

// Kodo nestinimas

const diena = 8;

if (diena === 1) {
    console.log('Pirmadienis');
} else {
    if (diena === 2) {
        console.log('Antradienis');
    } else {
        if (diena === 3) {
            console.log('Treciadienis');
        } else {
            if (diena === 4) {
                console.log('Ketvirtadienis');
            } else {
                if (diena === 5) {
                    console.log('Penktadienis');
                } else {
                    if (diena === 6) {
                        console.log('Sestadienis');
                    } else {
                        if (diena === 7) {
                            console.log('Sekmadienis');
                        } else {
                            console.log('Tokia diena neegzistuoja!');
                        }
                    }
                }
            }
        }
    }
}

/*
Gali buti:
- diena/naktis
- lyja/nelyja
*/

const parosMetas = 'naktis';
const arLyja = false;
const temp = 25;
const kadaSilta = 20;
const arAsSuStriuke = true;

if (parosMetas === 'diena' && arLyja && temp >= kadaSilta) {
    console.log('Einam sokti lietuje! 😏');
} else if (parosMetas === 'diena' && arLyja && temp < kadaSilta) {
    console.log('Saltas lietus... niekur neisiu sokti... 💧');
} else if (parosMetas === 'diena' && !arLyja && temp >= kadaSilta) {
    console.log('Eiline diena rojuje ✌');
} else if (parosMetas === 'diena' && !arLyja && temp < kadaSilta) {
    console.log('Eiline diena rojuje.. nors ir nelabai silta.. ✌');
} else if (parosMetas === 'naktis' && arLyja && temp >= kadaSilta) {
    console.log('Sedim namie, bet gal ir galima butu iseiti 👀');
} else if (parosMetas === 'naktis' && arLyja && temp < kadaSilta) {
    console.log('Sedim namie!!! 👀');
} else if (parosMetas === 'naktis' && !arLyja && temp >= kadaSilta) {
    console.log('Galim eiti paziureti zvaigzdiu ⭐');
} else if (parosMetas === 'naktis' && !arLyja && temp < kadaSilta) {
    console.log('Gal eisiu miegoti ⭐');
}

if (parosMetas === 'diena') {
    if (arLyja) {
        if (temp >= kadaSilta) {
            console.log('Einam sokti lietuje! 😏');
        } else {
            console.log('Einam sokti lietuje! 😏');
        }
    } else {
        if (temp >= kadaSilta) {
            console.log('Eiline diena rojuje ✌');
        } else {
            console.log('Eiline diena rojuje ✌');
        }
    }
} else {
    if (arLyja) {
        if (temp >= kadaSilta) {
            console.log('Sedim namie 👀');
        } else {
            console.log('Sedim namie 👀');
        }
    } else {
        if (temp >= kadaSilta) {
            console.log('Galim eiti paziureti zvaigzdiu ⭐');
        } else {
            console.log('Galim eiti paziureti zvaigzdiu ⭐');
        }
    }
}

console.clear();

const g = 7;
const h = 5;

if (g !== h) {
    console.log('Ne lygu');
} else {
    console.log('Lygu');
}

console.clear();

// !== vs !=
// === vs ==

if (7 === 7) {
    console.log('aaaaaaaa');
} else {
    console.log('bbbbbbbbb');
}

const w = 'aaaaaaaaaa';
const e = 'abba';

if (w > e) {
    console.log(`"${w}" yra daugiau uz "${e}"`);
} else {
    console.log(`"${w}" yra maziau arba lygu uz "${e}"`);
}

// !true
// !false
if (!true) {
    console.log('gg');
} else {
    console.log('fail...');
}