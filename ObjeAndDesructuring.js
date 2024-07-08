//Object/Array Destructuring (obje/dizilerin parçalarına bölünüp değişkenlere atanması)

const kullanici = {
    isim: "Mehmet",
    yas: 25,
    adres: 'Istanbul',
    memleket: 'Ankara',
    meslek: 'Mühendis'
};

// const { isim, ...kalanlar } = kullanici;
// //rest operatörü

// console.log(kalanlar);


function kullaniciGoster({ isim, yas }) {
    return `${isim} isimli kullanici ${yas} yaşindadir.`
}

const sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [bir, iki, ...geriyeKalanlar] = sayilar;

console.log(geriyeKalanlar);



