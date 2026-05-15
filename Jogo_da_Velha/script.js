function iniciarjogo(){

    let tabuleiro = document.getElementById("tabuleiro");

    tabuleiro.innerHTML = "";

    for(let linha = 1; linha <= 3; linha++){
        for(let coluna = 1; coluna <= 3; coluna++){

            let casa = document.createElement("div");

            casa.classList.add("casa");
            casa.innerHTML = "-";
            casa.onclick = function(){
                alert("linha: " + linha + " | coluna: " + coluna);
            };

            tabuleiro.appendChild(casa);

        };

    }
}