// Exercise 1
// Buat program untuk menghitung BMI dngan menggunakan
// IIFE & Callback Function yang memiliki parameter & return nilai

// Fungsi untuk menghitung BMI
function hitungBMI(berat, tinggi) {
    return berat / (tinggi ** 2);
}

// IIFE untuk memanggil fungsi hitungBMI dengan callback
(function(berat, tinggi, callback) {
    let hasil = callback(berat, tinggi);
    console.log("BMI Anda adalah: " + hasil);
})(70, 1.75, hitungBMI);