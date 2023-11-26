/*
OBJECT - objektas
*/

console.clear();

// vartotojas: vardas, amzius, ar vedes

// key: value

const jonas = {
    isMarried: true,
    age: 99,
    name: 'Jonas',
};

console.log(jonas);
console.log(jonas['name'], jonas.name);
console.log(jonas['age'], jonas.age);
console.log(jonas['isMarried'], jonas.isMarried);

jonas.age++;
console.log(jonas);

jonas.isMarried = false;
console.log(jonas);

jonas.name = 'John';
console.log(jonas);

// jonas = {};




const arr = [1, 2, 3, 4];
console.log(arr);

arr[0] = 111;
console.log(arr);

// arr = [];

console.clear();



let a = 1;
let b = a;
console.log('a:', a, 'b:', b);

a = 2;
console.log('a:', a, 'b:', b);

b = 3;
console.log('a:', a, 'b:', b);


const c = [1, 2];
const d = c;
console.log('c:', c, 'd:', d);

c[0] = 111;
console.log('c:', c, 'd:', d);

c[1] = 222;
console.log('c:', c, 'd:', d);

d[0] = 333;
console.log('c:', c, 'd:', d);

d[1] = 444;
console.log('c:', c, 'd:', d);


const e = { name: 'Edgaras', age: 99 };
const f = e;
console.log('e:', e);
console.log('f:', f);

e.name = 'Fiona';
console.log('e:', e);
console.log('f:', f);

f.age = 30;
console.log('e:', e);
console.log('f:', f);



const user = {
    name: 'Jonas',
    age: 99,
    'is married': true,
}

user['is married'];