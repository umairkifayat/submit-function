// const input = document.querySelector("#input");
// const ol = document.querySelector("ol");

// let arr = [];

// function todo(e) {
//     e.preventDefault();
//     ol.innerHTML = " ";
//     // console.log(input.value);
//     arr.push(input.value);
//     // console.log(arr);
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i]);
//         ol.innerHTML += `<li class = "li">${arr[i]}</li>
//     <button class = "delete-button" onclick = "deletetext(${i})">delete</button>
//     <button onclick = "edittext(${i})">edit</button>`


//     }

//     input.value = " ";
// }

// function deletetext(index) {
//     ol.innerHTML = "";
//     arr.splice(index, 1);
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i]);
//         ol.innerHTML += `<li class = "li">${arr[i]}</li>
//         <button class = "delete-button" onclick = "deletetext(${i})">delete</button>
//         <button onclick = "edittext(${i})">edit</button>`
//     }
// }

// function edittext(index) {
//     ol.innerHTML = " ";
//     let uservalue = prompt("enter your edit value");
//     arr.splice(index, 1, uservalue)
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i]);
//         ol.innerHTML += `<li class = "li">${arr[i]}</li>
//         <button class = "delete-button" onclick = "deletetext(${i})">delete</button>
//         <button onclick = "edittext(${i})">edit</button>`
//     }
// }    




const input = document.querySelector("#input");
const ol = document.querySelector("ol");
let arr = [];
function todo(e) {
    e.preventDefault();
    ol.innerHTML = " ";
    // console.log(input.value);
   arr.push(input.value);
//    console.log(arr);
for (let i = 0; i < arr.length; i++){
ol.innerHTML += `<li>${arr[i]}</li>
<button onclick = "deletetext()">Delete</button>
<button onclick = "Edittext()">Edit</button>`

}

    input.value = " "; 
}

    function deletetext(index) {
    ol.innerHTML = " ";
    arr.splice(index, 1);
    for (let i = 0; i < arr.length; i++){
        ol.innerHTML += `<li>${arr[i]}</li>
        <button onclick = "deletetext()">Delete</button>
        <button onclick = "Edittext()">Edit</button>`

        }
}
function Edittext(index) {
    ol.innerHTML= " ";
   let uservalue = prompt("Enter your edit todo");
    arr.splice(index, 1, uservalue);
    for (let i = 0; i < arr.length; i++){
        ol.innerHTML += `<li>${arr[i]}</li>
        <button onclick = "deletetext()">Delete</button>
        <button onclick = "Edittext()">Edit</button>`

        }
}


