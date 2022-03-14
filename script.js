const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const toDoList = document.querySelector(".list");




btn.addEventListener('click', function(){
    console.log("kaj kore vai");

    const newRow = document.createElement("div");

    const inputText = document.createElement("h3");
    inputText.innerHTML = input.value;
    newRow.appendChild(inputText);






    toDoList.appendChild(newRow);
})