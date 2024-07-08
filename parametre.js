
function topla(sayi1, sayi2 = 10) {
    return sayi1 + sayi2;
}

console.log(topla(5)); // 15


const STATE_BASLANGICI = { yukleniyor: false, yazilar: [] };

const reducer = (state = STATE_BASLANGICI, action) => {
    // burada state değerine başlangıç olarak STATE_BASLANGICI değeri atadık.
    // reducer detayları
    return state;

}
