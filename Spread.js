//Rest Toparlama Spreead yayma işlemi
//Spread operatörü, bir objenin veya bir dizinin elemanlarını başka bir obje veya diziye yaymamızı sağlar.


let kullanici = { isim: "Mehmet", yas: 25, sehir: "Istanbul" };

// kullanici.sehir = "Ankara"; // objeye yeni bir eleman ekledik.  
// console.log(kullanici);


// kullanici = { ...kullanici, sehir: "Ankara" };

// console.log(kullanici);

INITIAL_STATE = {
    yukleniyor: false,
    hataMesaji: "",
    arabalar: ["Mercedes", "BMW", "Audi"],
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ARABA_EKLE":
            return { ...state, arabalar: [...state.arabalar, action.payload] };
        default:
            return state;
    }
};

state.arabalar.push("Fiat");

// 0001 < - { yukleniyor, hataMesaji, arabalar }
// 0002 < - { yukleniyor, hataMesaji, arabalar: ["Mercedes", "BMW", "Audi"] }