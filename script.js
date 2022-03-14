const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const toDoList = document.querySelector(".list");




btn.addEventListener('click', function(){
    console.log("kaj kore vai");
// for div
    const newRow = document.createElement("div");
// for h3
    const inputText = document.createElement("h3");
    inputText.innerHTML = input.value;
    newRow.appendChild(inputText);
// complete button
    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = "Complete";
    newRow.appendChild(completeBtn);

// remove button
    const removeBtn = document.createElement("button");
    removeBtn.innerHTML = "Remove";
    newRow.appendChild(removeBtn);


    
    toDoList.appendChild(newRow);
})