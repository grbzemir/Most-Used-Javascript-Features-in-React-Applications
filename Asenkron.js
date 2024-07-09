// //Promises and async/await


// //Promises sonucu olumlu veya olumsuz gelecekte belli olacak bir işlemi ifade eder.

// const veriGetir = new Promise((basarili, basarisiz) => {

//     const veriGeldiMi = true;

//     if (veriGeldiMi) {
//         basarili("Veri geldi");
//     }

//     else {
//         basarisiz("Veri gelmedi");
//     }
// });


// veriGetir
//     .then((cevap) => console.log("gelen Cevap:", cevap))
//     .catch((hata) => console.log("Hata", hata));


// import axios from 'axios';

const axios = require('axios');

// console.log("axios")

// https://restcountries.eu/rest/v2/all

async function ulkeGetir() {
    axios.get("https://restcountries.eu/rest/v2/all")
        .then((response) => console.log(response.data))
        .catch(err => console.log(err));

    const ulkeListesi = await axios.get("https://restcountries.eu/rest/v2/all");
    console.log(ulkeListesi.data[0]);

}

ulkeGetir();

//Repos
//Eyg
