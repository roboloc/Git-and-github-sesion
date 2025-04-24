//primitive data types : yang sudah disediakan dari JavaScript
//Didirikan bedasarkan existing Javascipt data type

/*Primitive
String  : untuk data yang berbentuk paragraf. dengan contoh paragraf, nomer telphone dengan +62
Number & BigInt : 
Boolean :  contohnya fungsi digunakan pada login dan loading screen
Null   :  secara intentional ingin mengosongkan
Undefined : undifined berarti belum dikosongkan
*/

/*
Non Primitive
Object
Array
*/

//Javascript dinamis mengikuti type data tidak perlu di declare satu-satu
// Typescript perlu di dclare satu satu

//Primitive data types
/* --------------------------------- STRING --------------------------------- */

let message = "!@$$%&*()";
let anotherMessage = "!@$$%&*()";
let phoneNumber = "+6281318845555";

/* --------------------------------- NUMBER --------------------------------- */

let age = 70;
let score = 100;
let points = 50;

/* --------------------------------- BOOLEAN -------------------------------- */
let isLoading = true;
let isLogin = false;

/* ---------------------------------- NULL ---------------------------------- */
let address = null;
let gender = null;

/* -------------------------------- UNDIFINED ------------------------------- */
let fullName;
fullName = undefined;

/* -------------------------------------------------------------------------- */
/*                                NON PRIMITIVE                               */
/* -------------------------------------------------------------------------- */

/* --------------------------------- OBJECT --------------------------------- */
// 1.Menyimpan data yang saling berkaitan dengan contoh User profile
// 2.harus dibungkus dengan {}
// 3. Setiap property-nya harus ada key dan value
// 4. memisahkan dalam property dalam object harus menggunakan (,) ... bukan (;)
// harus menggunakan data yang primitive dapat dicontoh misalnya UserProfile memiliki tipe data primitive string
// Name : john, dll
let name = "John";
console.log(name);
let street = "Jl. Setiabudi";
console.log(street);
let city = "Jakarta Selatan";
console.log(city);
let email = "rafif1103@gmail.com";
console.log(email);

let userProfile = {
  name: "John", // property 1 -> key: value dengan contoh key(name) dan value(John)
  street: "Jl. Setiabudi", // property 2
  city: "Jakarta Selatan", // property 3
  email: "rafif1103@gmail.com", // property 4
};
console.log(userProfile);
console.log(userProfile.street);

/* ---------------------------------- ARRAY --------------------------------- */
//1. Menyimpan banyak data yang berurutan dengan contoh : playlist
//2. Harus dibungkus dengan []
//3.

let playlist = ["Stelan Cuek", "Nenekku Pahlawanku", "Indonesia Raya"];
console.log(playlist);
console.log(playlist[2]);
console.log(playlist[3]);

let scores = [10, 20, 50, 100, 30];
console.log(scores[2]);

// untuk random array index ke-lima dan jika ingin mengakses array dalam array maka harus menggunakan [][]
let randomArray = [10, "Rafif", null, undefined, {}, [1, 2, 3]];
console.log(randomArray[5][2]);

// property dalam length adalah bawaaan dari Javascript
let userList = [
  { name: "Rafif" },
  { name: "Walter" },
  { name: "White" },
  { name: "Jesse" },
];
console.log(userList.length);

//Array lebih medalam https://www.w3schools.com/js/js_array_methods.asp
