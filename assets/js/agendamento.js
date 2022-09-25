var section = document.querySelector(".listagem");
var horaEntrada = document.querySelector("#horaEntrada");
const itens = JSON.parse(localStorage.getItem("itens")) || [];



horaEntrada.addEventListener("focus", function () {
    horaEntrada.value =
        new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
});

var previsaoEntrega = document.querySelector("#prevEntrega");

previsaoEntrega.addEventListener("focus", function () {
    var tempo = new Date();

    if (tempo.getHours() + 2 > 24) {
        var tempoTmp = new Date();
        tempoTmp.setHours(tempo.getHours() + 2);
        previsaoEntrega.value =
            tempoTmp.toLocaleDateString() + " " + tempoTmp.toLocaleTimeString();
    } else {
        tempo.setHours(tempo.getHours() + 2);
        previsaoEntrega.value =
            tempo.toLocaleDateString() + " " + tempo.toLocaleTimeString();
    }
});

var periodo = document.querySelector("#agendaPeriodo");
periodo.textContent = "Agendamento: " + new Date().toLocaleDateString();

var botaoIncluir = document
    .querySelector("#incluir-servico")
    .addEventListener("click", function (event) {
        event.preventDefault();
        var formAgendamento = document.querySelector("#form-inclusao");
        var marca = formAgendamento.marca.value;
        var modelo = formAgendamento.modelo.value;
        var placa = formAgendamento.placa.value;
        var cliente = formAgendamento.nomeCliente.value;
        var contato = formAgendamento.foneContato.value;
        var email = formAgendamento.email.value;
        var dtEntrada = formAgendamento.horaEntrada.value;
        var prevEntrega = formAgendamento.prevEntrega.value;
        var servicos = formAgendamento.servicosExecutar.value;
        var observacao = formAgendamento.observacoes.value;



        var tabela = document.querySelector(".tabela");

        var listagemAgenda = document.createElement("tr");

        
        var marcaTd = document.createElement("td");
        var modeloTd = document.createElement("td");
        var placaTd = document.createElement("td");
        var clienteTd = document.createElement("td");
        var contatoTd = document.createElement("td");
        var emailTd = document.createElement("td");
        var dtEntradaTd = document.createElement("td");
        var prevEntregaTd = document.createElement("td");
        var servicosTd = document.createElement("td");
        var observacaoTd = document.createElement("td");

        marcaTd.textContent = marca;
        modeloTd.textContent = modelo;
        placaTd.textContent = placa;
        clienteTd.textContent = cliente.toUpperCase();
        contatoTd.textContent = contato;
        emailTd.textContent = email.toLowerCase();
        dtEntradaTd.textContent = dtEntrada;
        prevEntregaTd.textContent = prevEntrega;
        servicosTd.textContent = servicos.toUpperCase();
        observacaoTd.textContent = observacao.toUpperCase();

        const itemAtual = {
            marca: marca,
            modelo: modelo,
            placa: placa.toUpperCase(),
            cliente: cliente.toUpperCase(),
            foneContato: contato,
            email: email,
            horaEntrada: dtEntrada,
            previsaoEntrega: prevEntrega,
            servicos: servicos.toUpperCase(),
            observacoes: observacao.toLowerCase(),
        };
    
        itens.push(itemAtual);

        localStorage.setItem("itens", JSON.stringify(itens));

        listagemAgenda.appendChild(marcaTd);
        listagemAgenda.appendChild(modeloTd);
        listagemAgenda.appendChild(placaTd);
        listagemAgenda.appendChild(clienteTd);
        listagemAgenda.appendChild(contatoTd);
        listagemAgenda.appendChild(emailTd);
        listagemAgenda.appendChild(dtEntradaTd);
        listagemAgenda.appendChild(prevEntregaTd);
        listagemAgenda.appendChild(servicosTd);
        listagemAgenda.appendChild(observacaoTd);

        tabela.appendChild(listagemAgenda);
        section.appendChild(tabela);
        // formAgendamento.clear();

        var modelos = document.querySelector("#modelo");
        var limparModelos = document.querySelectorAll(".modelos");
        for (i = 0; i < limparModelos.length; i++) {
            modelos.removeChild(document.querySelector(".modelos"));
        }
    });


