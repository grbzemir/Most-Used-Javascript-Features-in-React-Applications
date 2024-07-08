//Ternary Operations

// koşul ? doğruysa : yanlişsa

// if (koşul) {
//     doğruysa
// }
// else {
//     yanlişsa
// }

const koprununDurumu = "kapali";

koprununDurumu === "acik"
    ? console.log("Kopru acik")
    : koprununDurumu === "kapali"
        ? console.log("Kopru kapali")
        : console.log(koprununDurumu);



const sayi = 5;

sayi ? console.log("Sayi var") : console.log("Sayi yok");


