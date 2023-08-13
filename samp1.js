let countel = document.getElementById("count_el")
//pass in arg...
let savel = document.getElementById("save_el")
//pass in arg...
// console.log(countel)
console.log("PREVIOUS HISTORIES:")


let count_e = 0


function increment(){
    count_e = count_e + 1
    countel.innerText=count_e
    // or u can use textContent
    // console.log("Button is Clicked...")
    // console.log(count_e)
}


function save(){
    let count1 = " " + count_e + " ="
    savel.innerText += count1
    console.log(count_e)
    countel.innerText = 0
    count_e = 0
}


// let countel = document.getElementById("count_el")
// countel.innerText = 5
// count = countel.innerText
// console.log(count)
// console.log("HELLO MY NAME IS ABC")