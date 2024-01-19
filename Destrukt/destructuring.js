// 1. Feladat
let car = ['Ford', 'Mustang', 2022, 'blue'];
let [brand, model, year, color] = car;

console.log(brand, year, color, model);
// bármilyen nevet; fontos a sorrend

// 2. Feladat
let book = {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    publicationYear: 2008,
    language: 'English'
};
let { title, publicationYear, bookAuthor, language } = book;
console.log(title, bookAuthor, publicationYear, language);
// Ugyanolyan változónév kell, mint az objektumban; nem fontos a sorrend

// 3. Feladat
let student = {
    name: 'John Doe',
    age: 20,
    grade: 'B',
    subjects: ['Math', 'English', 'History']
};

function printStudentInfo({name, age, grade, subjects}) {
    console.log(`${name}, ${age}, ${grade}, ${subjects}`);
}
printStudentInfo(student);
