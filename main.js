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