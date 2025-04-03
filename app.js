// app.js

const body = document.body; // Body elementini seçirik
const newBox = document.getElementById("newBox"); // 'newBox' elementini seçirik
const newBox22 = document.getElementById("newBox22"); // 'newBox22' elementini seçirik
const newBox3 = document.getElementById("newBox3"); // 'newBox3' elementini seçirik
let indek = 0
function newBox2() {
    // Düymələrin fon rəngini təyin edirik
    if (body.style.backgroundColor === "") { // başlanğıcda ağ
        body.style.backgroundColor = "blue"; // 'newBox' mavi fon
    } else if (body.style.backgroundColor === "blue") { 
        body.style.backgroundColor = "red"; // 'newBox22' qırmızı fon
    } else if (body.style.backgroundColor === "red") {
        body.style.backgroundColor = "green"; // 'newBox3' yaşıl fon
    } else {
        body.style.backgroundColor = "blue"; // Yenidən mavi fon
    }
    if(indek >= a)
}

