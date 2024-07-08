//Array methods (dizi metodlari)

//.find() .some() .every()

//.find() metodu kendisin döndürür

const urunler = [
    { id: 1, name: 'Acer Laptop', price: 5000 },
    { id: 2, name: 'Asus Laptop', price: 6000 },
    { id: 3, name: 'Hp Laptop', price: 7000 },
    { id: 4, name: 'Dell Laptop', price: 8000 },
    { id: 5, name: 'Casper Laptop', price: 9000 },
];


console.log(urunler.find(urun => urun.id > 3));


//.some() metodu true false döner

console.log(urunler.some(urun => urun.price < 8000));


//.every() metodu Her bir elemanın koşulu sağlaması durumunda true döner


console.log(urunler.every(urun => urun.price < 7000));