// //event bubbling:
// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function(){
//     console.log("div was clicked");
// });

// ul.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// for(li of lis){
//     li.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("li was clicked");
// });
// }

//ToDo Activity:
let task = document.querySelector("#task");
let ul = document.querySelector("ul");
let btn = document.querySelector("button");


btn.addEventListener("click", function(){
    console.log(task.value);
    let item = document.createElement("li");
    item.innerText = task.value;
    ul.appendChild(item);
    task.value = "";

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});
