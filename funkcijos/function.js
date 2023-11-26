/*
FUNCTION - funkcija

perpanaudojamas logikos blokas
*/

console.clear();

function tuscia() {
    // tuscias logikos blokas
    // return undefined;
}

console.log(tuscia());
console.log(tuscia());

function tuscia2() {
    return undefined;
}

console.log(tuscia2());
console.log(tuscia2());

function tuscia3() {
    return;
}

console.log(tuscia3());
console.log(tuscia3());

function duokPenkis() {
    // graziname penkis
    return 5;
}

console.log(duokPenkis());
console.log(duokPenkis());
console.log(duokPenkis());
console.log(duokPenkis());
console.log(duokPenkis());

function arVedes() {
    return true;
}

console.log(arVedes());
console.log(arVedes());
console.log(arVedes());

function labasRytas() {
    return 'Labas rytas, Lietuva!';
}

console.log(labasRytas());
console.log(labasRytas());
console.log(labasRytas());

console.clear();
// 1) ############

const userName1 = 'Jonas';
const userAge1 = 99;

// Jonas turejo 9 jubilieju/-s!
const user1Jubiliejai = (userAge1 - userAge1 % 10) / 10;
const user1Str = `${userName1} turejo ${user1Jubiliejai} jubilieju/-s!`;
console.log(user1Str);


// 2) ############

const userName2 = 'Maryte';
const userAge2 = 88;

// Maryte turejo 8 jubilieju/-s!
const user2Jubiliejai = (userAge2 - userAge2 % 10) / 10;
const user2Str = `${userName2} turejo ${user2Jubiliejai} jubilieju/-s!`;
console.log(user2Str);


// 3) ############

const userName3 = 'Petras';
const userAge3 = 55;

// Petras turejo 5 jubilieju/-s!
const user3Jubiliejai = (userAge3 - userAge3 % 10) / 10;
const user3Str = `${userName3} turejo ${user3Jubiliejai} jubilieju/-s!`;
console.log(user3Str);


// 4) ############

const userName4 = 'Ona';
const userAge4 = 44;

// Ona turejo 4 jubilieju/-s!
const user4Jubiliejai = (userAge4 - userAge4 % 10) / 10;
const user4Str = `${userName4} turejo ${user4Jubiliejai} jubilieju/-s!`;
console.log(user4Str);

console.clear();

function jubiliejai(username, age) {
    const count = (age - age % 10) / 10;
    return `${username} turejo ${count} jubilieju/-s!`;
}

console.log(jubiliejai('Jonas', 99));
console.log(jubiliejai('Maryte', 88));
console.log(jubiliejai('Petras', 55));
console.log(jubiliejai('Ona', 44));

console.log(jubiliejai(666, 'Demon'));

console.clear();

function studentAverage(name, marks) {
    let totalSum = 0;
    let i = 0;
    totalSum += marks[i++];
    totalSum += marks[i++];
    totalSum += marks[i++];
    totalSum += marks[i++];
    totalSum += marks[i++];

    const average = totalSum / marks.length;
    return `${name}: pazymiu vidurkis yra ${average}.`;
}

console.log(studentAverage('Jonas', [10, 2, 8, 4, 6]));
console.log(studentAverage('Maryte', [10, 9, 8, 7, 6]));
console.log(studentAverage('Petras', [5, 6, 7, 8, 9]));
console.log(studentAverage('Ona', [9, 9, 9, 9, 9]));