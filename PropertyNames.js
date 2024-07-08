//Shorted Property Names (kısayol obje anahatarları)


const isim = "Mehmet";

const yas = 25;

const kullanici_objesi = { isim, yas };
//Bir obje içine koyduk!

console.log(kullanici_objesi);



//React ' da kullanımı

function Sayac({ baslangicDegeri, adim }) {
    const [sayac, setSayac] = useCounter({ baslangicDegeri, adim });

    return <button onClick={setSatac}>{sayac}</button>
}






