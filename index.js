// document.getElementById("count").innerText = 5

let countEl = document.getElementById("count-el") // pass in argument
let count = 0

function increment() {
    count += 1
    countEl.innerText = count
    //document.getElementById("pep-el").innerText = "Here are the number of People Entered"
    console.log(count);
}
let saveEl = document.getElementById("save-el") // pass in argument
let countSave = "None"
//let countOut = "None"


function save() {

    let countSave = count + " - "
    saveEl.textContent += countSave
    countEl.innerText = 0
    count = 0
    // if (countOut = "") {
    //     console.log(countOut);
    //     countSave =  count 
    // countOut =  countSave 
    // console.log(countSave);
    // console.log(countOut);
    // count = 0
    // countEl.innerText = count
    // }
    
    // else {
    //     console.log(countSave);
    //     console.log(countOut);
    //     console.log(count);
    //     countSave =  count 
    // countOut = countOut + "-m" + countSave 
    // console.log(countOut);
    // console.log(countSave);
    // count = 0
    // countEl.innerText = count
    // }
    
}


 console.log(count);



