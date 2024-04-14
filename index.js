var fullname = "Trieu Vy"; // ?? string
var age = 14; // ?? number
var isVietnamese = true // ?? Boolean
var buttonClickme = document.getElementById("button");

// ?? Array
var list = ["Vy", "Binh", "Minh", "Thinh"]
console.log(list[0]);
console.log(list.lenght);

console.log(fullname + age);
console.log(buttonClickme);

function onclick(){
   console.log("clicked me");
}


function showMessage(){
    alert('Sự kiện click xảy ra!');
}


buttonClickme.addEventListener("click", onclick)

