var xhttp = new XMLHttpRequest;
let input = document.getElementById('input');

xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        var response = JSON.parse(xhttp.responseText);

        var regioni = response.regioni;

        for(let i = 0; i < regioni.length; i++){
            item += `<li id="regioniItem">${regioni[i].nome} </li>`
        }

        document.getElementById('regioni').innerHTML = item;
    }
};

xhttp.open("GET", "data/regioni.json", true);
xhttp.send();