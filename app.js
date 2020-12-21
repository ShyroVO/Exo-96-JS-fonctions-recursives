let contenue = document.getElementById('contenue');
let chiffre = 1;


function recursive (){
    if (chiffre < 10){
        let enfantDiv = document.createElement('div');
        contenue.appendChild(enfantDiv);
        enfantDiv.innerHTML = chiffre;
        chiffre++;

        recursive();
    }
}

recursive();
