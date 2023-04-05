var xhttp = new XMLHttpRequest;
let input = document.getElementById('input');
let item = [];

xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var response = JSON.parse(xhttp.responseText);

        var regioni = response.regioni;

        for(let i = 0; i < regioni.length; i++){
            /*item += `<li id="regioniItem">${regioni[i].nome} </li>`*/
            item.push(regioni[i].nome)
        }

        /*document.getElementById('regioni').innerHTML = item;*/
        console.log(item);
    }
};

xhttp.open("GET", "data/regioni.json", true);
xhttp.send();

let sortedRegioni = item.sort();

input.addEventListener("keyup", (e) =>{
    
    removeElements();

    for(let i of sortedRegioni) {
        if(i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value !=""){
            let listItem = document.createElement("li");
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "displayRegioni('" + i + "')");

            let word = "<b>" + i.substr(0, input.value.length) + "</b>";
            word += i.substr(input.value.length);
            listItem.innerHTML = word;
            document.querySelector(".list").appendChild(listItem);
        }
    }
});

function displayRegioni (value){
    input.value = value;
    removeElements();
}


function removeElements(){
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
        item.remove();
        
    });
}


/* ------  sezione provincie --------- */

var xhttpP = new XMLHttpRequest;
let inputProvincie = document.getElementById('inputP');
let itemProvincie = [];

xhttpP.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var responseP = JSON.parse(xhttpP.responseText);

        var provincie = responseP.provincie;

        for(let i = 0; i < provincie.length; i++){
            itemProvincie.push(provincie[i].nome)
        }

        console.log(itemProvincie);
    }
};

xhttpP.open("GET", "data/provincie.json", true);
xhttpP.send();

let sortedProvincie = itemProvincie;

inputProvincie.addEventListener("keyup", (e) =>{
    
    removeElementsP();

    for(let i of sortedProvincie) {
        if(i.toLowerCase().startsWith(inputProvincie.value.toLowerCase()) && inputProvincie.value !=""){
            let listItemP = document.createElement("li");
            listItemP.classList.add("listP-items");
            listItemP.style.cursor = "pointer";
            listItemP.setAttribute("onclick", "displayProvincie('" + i + "')");

            let wordP = "<b>" + i.substr(0, inputProvincie.value.length) + "</b>";
            wordP += i.substr(inputProvincie.value.length);
            listItemP.innerHTML = wordP;
            document.querySelector(".listP").appendChild(listItemP);
        }
    }
});

function displayProvincie (value){
    inputProvincie.value = value;
    removeElementsP();
}


function removeElementsP(){
    let itemsProvincie = document.querySelectorAll(".listP-items");
    itemsProvincie.forEach((itemProvincie)=>{
        itemProvincie.remove();
    });
}


