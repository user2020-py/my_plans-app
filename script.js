var body = document.getElementById("list");
var submitButton = document.querySelector("#submit");

// Click Event - Add
submitButton.addEventListener("click", createItem);

function removeItem(Order) {
    var item = document.getElementById(`i${Order}`);
    item.remove();
    if (document.getElementsByTagName("li").length === 14) {
        document.getElementById("text").style.height = "330px";
    }
    if (document.getElementsByTagName("li").length === 0) {
            document.querySelector("#text h1").style.display = "block";
        }
}

var itemIndex = 0;
function createItem() {
    var input = document.getElementById("msg-input").value;
    if(!input){
        body.innerHTML += `<li class='list-item' id='i${itemIndex}'>——<button onclick='removeItem(${itemIndex})'>X</button></li>`;
    } else {
        body.innerHTML += `<li class='list-item' id='i${itemIndex}'>${input}<button onclick='removeItem(${itemIndex})'>X</button></li>`;
    }
    itemIndex++;
    if (document.getElementsByTagName("li").length === 15) {
        document.getElementById("text").style.height = "auto";
    } else if (document.getElementsByTagName("li").length >= 1) {
        document.querySelector("#text h1").style.display = "none";
    }
    document.getElementById("msg-input").value = "";
}