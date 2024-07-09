
const urunler = [

    { id: 1, name: 'Kalem', fiyat: 5 },
    { id: 2, name: 'Defter', fiyat: 10 },
    { id: 3, name: 'Silgi', fiyat: 2 },
    { id: 4, name: 'Kalemtraş', fiyat: 7 }

];

const urunOlusturucu = (urun) => {
    return `${urun.name} fiyati ${urun.fiyati} liradir`;
}

console.log(urunler.map(urunOlusturucu));


// console.log(urunler.map((urun) => `${urun.name} fiyati ${urun.fiyati} liradir`));

function UrunGoster({ urunListesi }) {
    return urunListesi.map((urun) => <li key={urun.id}>{urun.name}</li>);
}