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
  ///////////////////
 //// Jogadores ////
//////////////////

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

  /////////////////////////////
 //// Condicao de Vitoria ////
/////////////////////////////

function verificarVitoria(){

    let vencedor = false;

    let combinacoes = [

        // COMBINAÇÃO DAS LINHAS DE VITÓRIA.
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        // COMBINAÇÃO DAS COLUNAS DE VITÓRIA.
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        // COMBINAÇÃO DAS DIAGONAIS DE VITÓRIA.
        [0, 4, 8],
        [2, 4, 6]

    ];

    for(let i = 0; i < combinacoes.length; i++){ // .lenght pega todas as combinações da array "combinacoes".
        
        let a = combinacoes[i][0];
        let b = combinacoes[i][1]; // Percorre as posições das combinações de vitória.
        let c = combinacoes[i][2];
    
        if(

            casas[a].innerHTML != "" &&

            casas[a].innerHTML == casas[b].innerHTML && // Compara as combinações de vitória nas casas do jogador X ou O.

            casas[b].innerHTML == casas[c].innerHTML

        ){

            vencedor = true;

            alert( "Vitória do Jogador " + casas[a].innerHTML ); // Mensagem de vitória.

            setTimeout(function(){ 
                iniciarjogo();  // Renicia o jogo a cada vitória.
            }, 100);

            return;
        }
    }   
    
    // VERIFICA CONDIÇÃO DE EMPATE.
    if(vencedor == false){ 

            let empate = true; 

            casas.forEach(function(casa){

                if(casa.innerHTML == ""){
                    empate = false; // Impede que o jogo empata com as casas vazias.
                }
            });

        if(empate){

            alert("Empate"); // Mensagem de empate.

            setTimeout(function(){
                iniciarjogo();
            }, 100);

        }

    }

}