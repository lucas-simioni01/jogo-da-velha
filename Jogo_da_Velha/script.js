///////////////////
 //// Jogadores ////
///////////////////

let jogadorAtual = "X";
let casas = [];
let jogoFinalizado = false;

function iniciarjogo(){

    jogadorAtual = "X";
    jogoFinalizado = false; // Jogo não está finalizado

    let mensagem = document.getElementById("mensagem");

    mensagem.innerHTML = "Vez de Jogador X";

    mensagem.classList.remove("vitoria");
    mensagem.classList.remove("empate");

    let tabuleiro = document.getElementById("tabuleiro");

    tabuleiro.innerHTML = "";

    casas = [];

    for(let linha = 1; linha <= 3; linha++){
        for(let coluna = 1; coluna <= 3; coluna++){

            let casa = document.createElement("div");

            casa.classList.add("casa");
            casa.innerHTML = "";

            casa.onclick = function(){

                if(jogoFinalizado){
        return;
    }

    if(casa.innerHTML == ""){

        casa.innerHTML = jogadorAtual;

        verificarVitoria(); 

        if(!jogoFinalizado){ // Continua o jogo caso não há vitória

            if(jogadorAtual == "X"){
                jogadorAtual = "O";
            }
            else{
                jogadorAtual = "X";
            }

            document.getElementById("mensagem").innerHTML =
            "Vez de Jogador " + jogadorAtual;
        }
    }

    casas.forEach(function(c){
        c.classList.remove("selecionada"); // remove a borda vermelha quando o jogador seleciona outra casa.
    });

    casa.classList.add("selecionada"); // selecionada indica a casa que o jogador clicou com a borda vermelha.

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
            jogoFinalizado = true; // Finaliza o jogo.

           let mensagem = document.getElementById("mensagem");

            mensagem.innerHTML =
            "Vitória do Jogador " + casas[a].innerHTML + "!";
            mensagem.classList.add("vitoria");

            casas[a].classList.add("ganhador");
            casas[b].classList.add("ganhador"); // Adiciona Cor.
            casas[c].classList.add("ganhador");

            setTimeout(function(){ 
                iniciarjogo();  // Renicia o jogo a cada vitória.
            }, 2000);

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

            jogoFinalizado = true; // Finaliza o jogo.

            // Mensagem de empate.
            let mensagem = document.getElementById("mensagem");

            mensagem.innerHTML = "Empate!";  

            mensagem.classList.add("empate");

            setTimeout(function(){
                iniciarjogo();
            }, 2000);
        }
    }
}