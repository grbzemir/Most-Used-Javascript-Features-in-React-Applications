//İncludes .toLowerCase

// const isim = "Mehmet";

// const kontrol = "Mehmet";

// console.log(isim.toLowerCase().includes("met")); // true
// console.log(isim.toLowerCase().includes(kontrol.toLowerCase())); // false büyük küçük harf duyarlılığı


// const yeniIsim = isim.toLowerCase();


// console.log(yeniIsim);


const urunler = [

    { id: 1, name: "Samsung S8", price: 3000 },

    { id: 2, name: "Samsung S7", price: 2000 },

    { id: 3, name: "Samsung S6", price: 1000 },

    { id: 4, name: "Samsung S5", price: 500 }

];


const arama = "KALEM";

console.log(urunler.filter((urun) => urun.name.includes("Kalem")));