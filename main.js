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

let sortedRegioni = item;

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
}


function removeElements(){
    let items = document.querySelectorAll(".list-items");
    items.forEach((item)=>{
        item.remove();
    });
}