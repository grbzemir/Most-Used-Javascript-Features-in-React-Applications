//Arrow Function(oklu fonksiyon)

// console.log(topla(5, 10));

// function topla(sayi1, sayi2) {
//     return sayi1 + sayi2;
// }

// topla(3, 5); // ReferenceError: Cannot access 'topla' before initialization at <anonymous>:1:1

// const topla = (sayi1, sayi2) => {
//     return sayi1 + sayi2;
// };


const topla = (sayi1, sayi2) => sayi1 + sayi2;

console.log(topla(5, 10));