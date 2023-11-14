const myArr = [
    {a:1, b:2},
    {c:3, d:4},
    {e:5, d:6}
];


localStorage.setItem('myArr', JSON.stringify(myArr));

const JSONfromLocalStorage = localStorage.getItem('myArr');
const myConvertionArray = JSON.parse(JSONfromLocalStorage);

console.log(myConvertionArray);