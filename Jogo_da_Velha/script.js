function iniciarjogo(){

    let tabuleiro = document.getElementById("tabuleiro");

    tabuleiro.innerHTML = "";

    for(let linha = 1; linha <= 3; linha++){
        for(let coluna = 1; coluna <= 3; coluna++){

            let casa = document.createElement("div");

            casa.classList.add("casa");
            casa.innerHTML = "";

            casa.onclick = function(){
                let casas = document.querySelectorAll(".casa");

                casas.forEach(function(c){
                    c.classList.remove("selecionada");
                });
                
                casa.classList.add("selecionada");

                document.getElementById("mensagem").innerHTML = "Linha: " + linha + " | Coluna:" + coluna; 
            };

            tabuleiro.appendChild(casa);

        };

    }
}
/////////////////////
///Jogadores
/////////////////////

let jogadorAtual = "X";
let casas = [];

function iniciarjogo(){

    jogadorAtual = "X";

    let tabuleiro = document.getElementById("tabuleiro");

    tabuleiro.innerHTML = "";

    casas = [];

    for(let linha = 1; linha <= 3; linha++){
        for(let coluna = 1; coluna <= 3; coluna++){

            let casa = document.createElement("div");

            casa.classList.add("casa");
            casa.innerHTML = "";

            casa.onclick = function(){

                if(casa.innerHTML == ""){

                    casa.innerHTML = jogadorAtual;

                    verificarVitoria();
                    
                    if(jogadorAtual == "X"){
                        jogadorAtual = "O";
                    } else {
                        jogadorAtual = "X";
                    }
                  
                }

                casas.forEach(function(c){
                    c.classList.remove("selecionada");
                });

                casa.classList.add("selecionada");

                document.getElementById("mensagem").innerHTML = "Vez de Jogador " + jogadorAtual;

            };

            tabuleiro.appendChild(casa);

            casas.push(casa);
        };
    }
}

///////////
//// Condicao de Vitoria
//////

function verificarVitoria(){

    let vencedor = false;

    //VERIFICA AS LINHAS
    if(
        casas[0].innerHTML != "" &&

        casas[0].innerHTML == casas[1].innerHTML &&

        casas[1].innerHTML == casas[2].innerHTML
    ){ 

        vencedor = true;

        alert(
            "vitória do jogador " + casas[0].innerHTML
        );

        setTimeout(function(){
            iniciarjogo();
        }, 100);
    } 

    else if(
        casas[3].innerHTML != "" &&

        casas[3].innerHTML == casas[4].innerHTML &&

        casas[4].innerHTML == casas[5].innerHTML
    ){ 

        vencedor = true;

        alert(
            "vitória do jogador " + casas[3].innerHTML
        );

        setTimeout(function(){
            iniciarjogo();
        }, 100);
    } 

    else if(
        casas[6].innerHTML != "" &&

        casas[6].innerHTML == casas[7].innerHTML &&

        casas[7].innerHTML == casas[8].innerHTML
    ){ 

        vencedor = true;

        alert(
            "vitória do jogador " + casas[6].innerHTML
        );

        setTimeout(function(){
            iniciarjogo();
        }, 100);
    } 

    //VERIFICA AS DIAGONAIS
    else if(
        casas[0].innerHTML != "" &&

        casas[0].innerHTML == casas[4].innerHTML &&

        casas[4].innerHTML == casas[8].innerHTML
    ){

        vencedor = true;

        alert(
            "vitória do jogador " + casas[0].innerHTML
        );

        setTimeout(function(){
            iniciarjogo();
        }, 100);
    }

    else if(
        casas[2].innerHTML != "" &&

        casas[2].innerHTML == casas[4].innerHTML &&

        casas[4].innerHTML == casas[6].innerHTML
    ){

        vencedor = true;

        alert(
            "vitória do jogador " + casas[2].innerHTML
        );

        setTimeout(function(){
            iniciarjogo();
        }, 100);
    }

    //VERIFICA AS COLUNAS
    else if(
        casas[0].innerHTML != "" &&

        casas[0].innerHTML == casas[3].innerHTML &&

        casas[3].innerHTML == casas[6].innerHTML
    ){

        vencedor = true;

        alert(
            "vitória do jogador " + casas[0].innerHTML
        );

        setTimeout(function(){
            iniciarjogo();
        }, 100);
    }

    else if(
        casas[1].innerHTML != "" &&

        casas[1].innerHTML == casas[4].innerHTML &&

        casas[4].innerHTML == casas[7].innerHTML
    ){

        vencedor = true;

        alert(
            "vitória do jogador " + casas[1].innerHTML
        );

        setTimeout(function(){
            iniciarjogo();
        }, 100);
    }

    else if(
        casas[2].innerHTML != "" &&

        casas[2].innerHTML == casas[5].innerHTML &&

        casas[5].innerHTML == casas[8].innerHTML
    ){

        vencedor = true;

        alert(
            "vitória do jogador " + casas[2].innerHTML
        );

        setTimeout(function(){
            iniciarjogo();
        }, 100);
    }

    //EMPATE
    if(vencedor == false){

        let empate = true;

        casas.forEach(function(casa){

            if(casa.innerHTML == ""){
                empate = false;
            }

        });

        if(empate){

            alert("Empate!");

            setTimeout(function(){
                iniciarjogo();
            }, 100);
        }
    }
}