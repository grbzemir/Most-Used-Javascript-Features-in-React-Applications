
const urunler = [

    { id: 1, name: 'Kalem', fiyat: 5 },
    { id: 2, name: 'Defter', fiyat: 10 },
    { id: 3, name: 'Silgi', fiyat: 2 },
    { id: 4, name: 'Kalemtraş', fiyat: 7 }

];


// const toplamUrunFiyati = urunler.reduce((toplam, urun) => toplam = toplam + urun.fiyat, 0);

// console.log({ toplamUrunFiyati });

// const toplamString = urunler.reduce((toplam, urun) => (toplam = `${toplam} ${urun.name}`), `urun isimleri`);



// const toplamDizi = urunler.reduce((toplam, urun) => (toplam = [...toplam, urun.name]),
//     []);

// console.log({ toplamDizi });


const toplamDizi = urunler.map((urun) => `${urun.name} ${urun.fiyat}`);

console.log({ toplamDizi });