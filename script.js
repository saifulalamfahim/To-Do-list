const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const toDoList = document.querySelector(".list");




btn.addEventListener('click', function(){
    console.log("kaj kore vai");
if (input.value == '') {
    alert("vai kisu lekh age");
}else{
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


    // remove button
    removeBtn.addEventListener('click', function(){
        console.log("idea kaj kortase");
        newRow.style.display = "none";
    });
    // complete button
    completeBtn.addEventListener('click', function(){
        console.log("shob thik thak");
        inputText.style.textDecoration = "line-through";
    })
}
})