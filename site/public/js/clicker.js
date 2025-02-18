    //quantidade de pontos o jogador tem e quantos pontos por segundo
    var pontos = 0;
    var porClique = 1

    //quantidade de vezes o jogador clicou e total de upgrades
    var cliques = 0;
    var totalCompras = 1;

    //níveis e custos de cada upgrade, do primeiro (1) ao quinto (5)
    var nvlUp1 = 1;
    var custoUp1 = 50;

    var nvlUp2 = 0;
    var custoUp2 = 15;

    var nvlUp3 = 0;
    var custoUp3 = 150;

    var nvlUp4 = 0;
    var custoUp4 = 450;

    var nvlUp5 = 0;
    var custoUp5 = 5000;

    //valor dos pontos atribuidos ao jogador por segundo.
    var porSegundo = 0;



    //Botão de clicar
    function clicker() {
        pontos += porClique;
        cliques += 1;
        b_pontos.innerHTML = pontos.toFixed(2);
    }

    //Upgrade 1: aumenta a quantidade de pontos recebidos por cada clique.
    function upgrd1() {
        if (pontos >= custoUp1) {
            pontos -= custoUp1;
            porClique += 1;
            totalCompras += 1;

            nvlUp1 += 1;
            custoUp1 *= 1.2;

            b_pontos.innerHTML = pontos.toFixed(2);
            b_upgrd1.innerHTML = nvlUp1;
            b_custoUpgrd1.innerHTML = custoUp1.toFixed(2);
        } else {
            alert(`Você precisa de mais ${(custoUp1 - pontos).toFixed(2)} para comprar esse upgrade.`);
        }
    }

    function upgrd2() {
        if (pontos >= custoUp2) {
            pontos -= custoUp2;
            porSegundo += 0.10;
            totalCompras += 1;

            nvlUp2 += 1;
            custoUp2 *= 1.1;

            b_pontos.innerHTML = pontos.toFixed(2);
            b_upgrd2.innerHTML = nvlUp2;
            b_custoUpgrd2.innerHTML = custoUp2.toFixed(2);
        } else {
            alert(`Você precisa de mais ${(custoUp2 - pontos).toFixed(2)} para comprar esse upgrade.`);
        }
    }

    function upgrd3() {
        if (pontos >= custoUp3) {
            pontos -= custoUp3;
            porSegundo += 2;
            totalCompras += 1;

            nvlUp3 += 1;
            custoUp3 *= 1.4;

            b_pontos.innerHTML = pontos.toFixed(2);
            b_upgrd3.innerHTML = nvlUp3;
            b_custoUpgrd3.innerHTML = custoUp3.toFixed(2);
        } else {
            alert(`Você precisa de mais ${(custoUp3 - pontos).toFixed(2)} para comprar esse upgrade.`);
        }
    }

    function upgrd4() {
        if (pontos >= custoUp4) {
            pontos -= custoUp4;
            porSegundo += 5;
            totalCompras += 1;

            nvlUp4 += 1;
            custoUp4 *= 1.8;

            b_pontos.innerHTML = pontos.toFixed(2);
            b_upgrd4.innerHTML = nvlUp4;
            b_custoUpgrd4.innerHTML = custoUp4.toFixed(2);
        } else {
            alert(`Você precisa de mais ${(custoUp4 - pontos).toFixed(2)} para comprar esse upgrade.`);
        }
    }

    function upgrd5() {
        if (pontos >= custoUp5) {
            pontos -= custoUp5;
            porSegundo += 1.2 * (nvlUp1 + nvlUp2 + nvlUp3 + nvlUp4 + nvlUp5);
            totalCompras += 1;

            nvlUp5 += 1;
            custoUp5 *= 1.9;

            b_pontos.innerHTML = pontos.toFixed(2);
            b_upgrd5.innerHTML = nvlUp5;
            b_custoUpgrd5.innerHTML = custoUp5.toFixed(2);
        } else {
            alert(`Você precisa de mais ${(custoUp5 - pontos).toFixed(2)} para comprar esse upgrade.`);
        }
    }

    var segundosTimer = 300;    //segundos para acabar o jogo
    var intervaloSegundos = setInterval(function () {   //setInterval para contar pontos por segundo e contar o timer do jogo
        pontos += porSegundo;
        segundosTimer--;

        b_pontos.innerHTML = pontos.toFixed(2);
        timerJogo.innerHTML = segundosTimer;
        if (segundosTimer == 0) {
            alert("O jogo acabou.");
            clearInterval(intervaloSegundos);   //zera o setInterval com o id dele.
            var botoesOnclicks = document.querySelectorAll("[onclick]");    //seleciona todos os elementos da página que possuem 'onclick'
            var btn_sair = document.getElementById("botaoSair");
            console.log(botoesOnclicks[1] == btn_sair)
            console.log(btn_sair)
            for (var contadorDeOnclicks = 0; contadorDeOnclicks < botoesOnclicks.length; contadorDeOnclicks++) {
                if (botoesOnclicks[contadorDeOnclicks] != btn_sair) {
                    botoesOnclicks[contadorDeOnclicks].onclick = function (pararOnclick) {
                        pararOnclick.preventDefault();  //impede que o comportamento padrão do elemento 'onclick' seja executado
                    }
                } else {
                    console.log(contadorDeOnclicks)
                }
            }

            console.log("Pontos adquiridos: ", pontos);
            console.log("Total de upgrades comprados: ", totalCompras);



        }
    }, 1000);


    cliques += onclick;

    function salvarSair() {
        console.log('Saindo...')
        if (pontos > 10 || totalCompras > 1) {
            fetch("/usuarios/clicker", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    pontosServer: pontos,
                    totalComprasServer: totalCompras,
                    idUsuarioServer: sessionStorage.idUsuario
                }),
            })
                .then(function (resposta) {
                    console.log("resposta: ", resposta);

                    if (resposta.ok) {
                        console.log("Dados enviados!");
                        sessionStorage.setItem('pontos', pontos.toFixed(2));
                        sessionStorage.setItem('totalCompras', totalCompras);

                        setTimeout(() => {
                            window.location = "perfil.html";
                        }, 700);
                    } else {
                        console.log("Houve um erro na inserção de dados.");
                    }
                })
                .catch(function (resposta) {
                    console.log(`#ERRO: ${resposta}`);
                });
        }
    }


    //descrição dos upgrades.
    botao_upgrd1.addEventListener("mouseover", function (event) {
        var x = event.clientX;
        var y = event.clientY;

        desc_upgrd1.style.width = '200px';
        desc_upgrd1.style.height = 'fit-content';
        desc_upgrd1.style.left = "-220px";
        desc_upgrd1.style.opacity = 0.5;
    });

    botao_upgrd1.addEventListener("mouseout", function () {
        desc_upgrd1.style.width = 0;
        desc_upgrd1.style.height = 0;
        desc_upgrd1.style.overflow = 'hidden';
        desc_upgrd1.style.left = 0 + "px";
        desc_upgrd1.style.opacity = 0;
        desc_upgrd1.style.opacity = 0;
    });


    botao_upgrd2.addEventListener("mouseover", function (event) {
        var x = event.clientX;
        var y = event.clientY;

        desc_upgrd2.style.width = '200px';
        desc_upgrd2.style.height = 'fit-content';
        desc_upgrd2.style.left = "-220px";
        desc_upgrd2.style.opacity = 0.5;
    });

    botao_upgrd2.addEventListener("mouseout", function () {
        desc_upgrd2.style.width = 0;
        desc_upgrd2.style.height = 0;
        desc_upgrd2.style.overflow = 'hidden';
        desc_upgrd2.style.left = 0 + "px";
        desc_upgrd2.style.opacity = 0;
        desc_upgrd2.style.opacity = 0;
    });


    botao_upgrd3.addEventListener("mouseover", function (event) {
        var x = event.clientX;
        var y = event.clientY;

        desc_upgrd3.style.width = '200px';
        desc_upgrd3.style.height = 'fit-content';
        desc_upgrd3.style.left = "-220px";
        desc_upgrd3.style.opacity = 0.5;
    });

    botao_upgrd3.addEventListener("mouseout", function () {
        desc_upgrd3.style.width = 0;
        desc_upgrd3.style.height = 0;
        desc_upgrd3.style.overflow = 'hidden';
        desc_upgrd3.style.left = 0 + "px";
        desc_upgrd3.style.opacity = 0;
        desc_upgrd3.style.opacity = 0;
    });


    botao_upgrd4.addEventListener("mouseover", function (event) {
        var x = event.clientX;
        var y = event.clientY;

        desc_upgrd4.style.width = '200px';
        desc_upgrd4.style.height = 'fit-content';
        desc_upgrd4.style.left = "-220px";
        desc_upgrd4.style.opacity = 0.5;
    });

    botao_upgrd4.addEventListener("mouseout", function () {
        desc_upgrd4.style.width = 0;
        desc_upgrd4.style.height = 0;
        desc_upgrd4.style.overflow = 'hidden';
        desc_upgrd4.style.left = 0 + "px";
        desc_upgrd4.style.opacity = 0;
        desc_upgrd4.style.opacity = 0;
    });


    botao_upgrd5.addEventListener("mouseover", function (event) {
        var x = event.clientX;
        var y = event.clientY;

        desc_upgrd5.style.width = '200px';
        desc_upgrd5.style.height = 'fit-content';
        desc_upgrd5.style.left = "-220px";
        desc_upgrd5.style.opacity = 0.5;
    });

    botao_upgrd5.addEventListener("mouseout", function () {
        desc_upgrd5.style.width = 0;
        desc_upgrd5.style.height = 0;
        desc_upgrd5.style.overflow = 'hidden';
        desc_upgrd5.style.left = 0 + "px";
        desc_upgrd5.style.opacity = 0;
        desc_upgrd5.style.opacity = 0;
    });