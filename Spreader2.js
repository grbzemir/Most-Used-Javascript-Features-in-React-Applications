
function topla(sayi1, sayi2, sayi3) {
    return sayi1 + sayi2 + sayi3;
}

// const sayilar = [5, 10, 15];

// console.log(topla(...sayilar)); // 30

const sayilar = [5, 10, 15, 20, 25, 30];
const sayilar1 = [35, 40, 45, 50];

const birlesmisDizi = [...sayilar, ...sayilar1];

console.log(birlesmisDizi);


const kullanici = {
    isim: "Mehmet",
    yas: 25,
    adres: 'Istanbul',
    memleket: 'Ankara',
    meslek: 'Mühendis'
};

const adres = { il: 'Istanbul', ilce: 'Kadiköy' };

const birlesmisDizi1 = { ...kullanici, ...adres };

console.log(birlesmisDizi1);













// function topla([s1, s2, s3]) { return s1 + s2 + s3; }

// let sayilar = [1, 2, 3];
// topla(sayilar); // 6
// topla([1, 2, 3, 4, 5]); // 6
// topla([3, 4]); // NaN

