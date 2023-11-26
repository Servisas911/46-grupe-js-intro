console.clear();

const skaiciai = [10, 2, 8, 4, 6, 4];

// VIDURKIS
let suma = 0;

for (const skaicius of skaiciai) {
    suma += skaicius;
}

const vidurkis = suma / skaiciai.length;
console.log('Vidurkis:', vidurkis);

// MEDIANA
skaiciai.sort((a, b) => a - b);
const middleIndex = Math.floor(skaiciai.length / 2);
const mediana = skaiciai.length % 2 ? skaiciai[middleIndex] : ((skaiciai[middleIndex - 1] + skaiciai[middleIndex]) / 2);

console.log('Mediana:', mediana);