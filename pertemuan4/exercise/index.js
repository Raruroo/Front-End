//Mini exercise
//Modifikasi mini ecercise terakhir ttg menghitung BMI
//dengan menggunakan function dimana berat dan tinggi
//sebagai argument (input) dan BMI sebagai output

function BMI(berat, tinggi) {
return berat / (tinggi ** 2)
}

let outputBMI = BMI(70, 4); //kg dan meter
console.log("BMI Anda adalah: " + outputBMI)