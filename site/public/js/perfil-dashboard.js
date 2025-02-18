    //dashboard
    const graficoAlbum = document.getElementById('canvas_graficoAlbum');    //criando variáveis para criar os gráficos
    const graficoAcertosQuiz = document.getElementById('canvas_graficoAcertosQuiz');
    const graficoSegundosQuiz = document.getElementById('canvas_graficoSegundosQuiz');
    const graficoPontosClicker = document.getElementById('canvas_graficoPontosClicker');
    const graficoUpgradesClicker = document.getElementById('canvas_graficoUpgradesClicker');


    var dataAlbum = [];     //vetores que vão guardar os valores das linhas do SELECT do banco de dados
    var labelAlbum = [];
    var graficoAlbumVar = new Chart(graficoAlbum, {
        type: 'pie',
        data: {
            labels: labelAlbum,
            datasets: [{
                label: 'Álbuns preferidos',
                data: dataAlbum,
                backgroundColor: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff9900"],
                hoverOffset: 4
            }]
        }
    });
    function mostrarGraficoAlbum() {
        fetch(`/dashboard_routes/album`, {      //fetch para chamar os dados dos gráficos
            method: "GET"
        })
            .then(function (resposta) {
                console.log("Entrou no .then!")

                if (resposta.status == 200) {   //status(200) = OK, o valor pode entrar no cache/sessionStorage
                    console.log(resposta);

                    resposta.json().then(dashAlbum => { //converte resposta.json() de JSON -> javascript \\\ dashAlbum => {} recebe os dados JSON analisados com dashAlbum como parâmetro
                        sessionStorage.dashboardAlbuns = JSON.stringify(dashAlbum); //armazena um sessionStorage dashboardAlbuns
                    })  //JSON.stringify converte javascript em JSON antes de armazenar em sessionStorage
                    setTimeout(() => {
                        var obterDadosSessionStorageAlbum = JSON.parse(sessionStorage.dashboardAlbuns)
                        atualizarGrafico(obterDadosSessionStorageAlbum);
                    }, 500)

                } else if (resposta.status != 200) {
                    console.log("Houve um erro ao buscar os dados!");

                    resposta.text().then(texto => {
                        console.error(texto);
                    })
                };

            })
            .catch(function (erro) {
                console.log(erro);
            })
    };
    function atualizarGrafico(obterDadosSessionStorageAlbum) {
        obterDadosSessionStorageAlbum.forEach(element => {
            dataAlbum.push(element.qtd);
            labelAlbum.push(element.albumPreferido);
        });
        graficoAlbumVar.update();
    };



    var labelNomes = [];
    var dataAcertos = [];
    var dataTempo = [];

    var graficoAcertos = new Chart(graficoAcertosQuiz, {
        type: 'bar',
        data: {
            labels: labelNomes,
            datasets: [{
                label: 'Acertos no quiz',
                data: dataAcertos,
                hoverOffset: 4
            }]
        },
        options: {
            maintainAspectRatio: false,
        }
    });
    var graficoSegundosVar = new Chart(graficoSegundosQuiz, {
        type: 'bar',
        data: {
            labels: labelNomes,
            datasets: [{
                label: 'Menos tempo no Quiz',
                data: dataTempo,
                hoverOffset: 4
            }]
        },
        options: {
            maintainAspectRatio: false,
        }
    });
    function mostrartGraficoQuiz() {
        fetch("/dashboard_routes/acertos", {
            method: "GET"
        })
            .then(function (resposta) {
                console.log("gráfico de acertos entrou no .then");

                if (resposta.status == 200) {
                    console.log(resposta);

                    resposta.json().then(dashQuiz => {
                        sessionStorage.dashboardQuiz = JSON.stringify(dashQuiz);
                    })
                    setTimeout(() => {
                        var obterAcertos = JSON.parse(sessionStorage.dashboardQuiz);
                        atualizarQuiz(obterAcertos);
                    }, 500)

                } else if (resposta.status != 200) {
                    console.log("Erro na busca de dados de acertos!");

                    resposta.text().then(texto => {
                        console.error(texto);
                    })
                }
            })
            .catch(function (erro) {
                console.log(erro);
            })
    };
    function atualizarQuiz(obterAcertos) {
        obterAcertos.forEach(element => {
            dataAcertos.push(element.acertos);
            dataTempo.push(element.tempo);
            labelNomes.push(element.nome);
        });
        graficoAcertos.update();
        graficoSegundosVar.update();
    };




    var labelNomesClicker = [];
    var dataPontos = [];
    var dataUpgrades = [];

    var graficoPontosClickerVar = new Chart(graficoPontosClicker, {
        type: 'bar',
        data: {
            labels: labelNomesClicker,
            datasets: [{
                label: 'Recorde de pontos',
                data: dataPontos,
                hoverOffset: 4
            }]
        },
        options: {
            maintainAspectRatio: false,
        }
    });
    var graficoUpgradesClickerVar = new Chart(graficoUpgradesClicker, {
        type: 'bar',
        data: {
            labels: labelNomesClicker,
            datasets: [{
                label: 'Upgrades comprados na partida record',
                data: dataUpgrades,
                hoverOffset: 4
            }]
        },
        options: {
            maintainAspectRatio: false,
        }
    });
    
    function mostrarGraficoClicker() {
        fetch("/dashboard_routes/pontos", {
            method: "GET"
        })
            .then(function (resposta) {
                console.log("Gráfico do Clicker entrou no .then");

                if (resposta.status == 200) {
                    console.log(resposta);

                    resposta.json().then(dashClicker => {
                        sessionStorage.dashboardClicker = JSON.stringify(dashClicker);
                    })
                    setTimeout(() => {
                        var obterPontos = JSON.parse(sessionStorage.dashboardClicker);
                        atualizarClicker(obterPontos);
                    }, 500)
                } else if (resposta.status != 200) {
                    console.log("Erro na busca de dados do Clicker!");

                    console.error(resposta);
                }

            })
            .catch(function (erro) {
                console.log(erro);
            })
    };
    function atualizarClicker(obterPontos) {
        obterPontos.forEach(element => {
            labelNomesClicker.push(element.nome);
            dataPontos.push(element.pontos);
            dataUpgrades.push(element.upgrades);
        });
        graficoUpgradesClickerVar.update();
        graficoPontosClickerVar.update();
    };
