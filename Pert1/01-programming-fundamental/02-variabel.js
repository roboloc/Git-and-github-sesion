let message; //untuk membuat(deklare) suatu variabel (tempat)
console.log(message); // undefined
// message = 'I am hungry';
message = "I am hungry";
console.log(message); // keluar output (I am hungry)

/* -------------------------------------------------------------------------- */
/*                                let vs const                                */
/* -------------------------------------------------------------------------- */
// shift + alt + x

/* ------------------------------ let vs const ------------------------------ */
// alt +  x

let fullName;
fullName = "Ahmad Dhani";
fullName = "Mulan Jameela";
console.log(fullName); // console log selalu melihat yang terakhir

//variabel harus unique tidak bolh sama
//const harus langsung diclare

// const adress;
const address = "Sudirman, Jakarta barat";
address = "Palmerah, Jakarta Barat";
console.log(address);

/*
1. Const tidak boleh dikosongi ketika pertama kali dibuat (fakta == mutlak)
2. Const tidak boleh diganti isinya (mutlak). let boleh digunakan berkali-kali
*/

/* -------------------------------------------------------------------------- */
/*                   var  vs const               Variable                                  */
/* -------------------------------------------------------------------------- */

/*Variable naming hanya boleh menggunakan angka, huruf, dan symbol yang boleh hanya "$" and "_"
boleh dikombinasikan dengan angka dengan huruf
*/
// LKarakter pertama tidak boleh angka
// Case-sensitive
// tidak boleh menggunakan kata yang sudah ada pada Java

//let n4me! = "Faiz"; // tidak boleh menggunakan symbol lain seliainn $ dan _
//let 4ddress = "Tangsel"; // error tidak boleh diawali angka

/*
Case sensitif
let student = "Rafif";
let Student = "Zaky";
*/

//let typeof = "my Type" // typeof sudah digunakan sebagai reserved keyword oleh bahasa javascript seperti (const dan let)

/* -------------------------------------------------------------------------- */
/*                                    CASES                                   */
/* -------------------------------------------------------------------------- */
// camelCase
let studentProfile;

// PascalCase
let StudentProfile;

// snake_case
let student_profile;
