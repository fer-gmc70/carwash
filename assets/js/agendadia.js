const section = document.querySelector(".listagem");

const periodo = document.querySelector("#agendaPeriodo");
periodo.textContent = "Agendamento do dia: " + new Date().toLocaleDateString();

const tabela = document.querySelector(".tabela");

const agendaDia = JSON.parse(localStorage.getItem("itens"));

tempoTmp = new Date(Date.now());

let Atraso =
    tempoTmp.toLocaleDateString("pt-BR") +
    " " +
    tempoTmp.toLocaleTimeString("pt-BR");

// agendaItens = [];
agendaDia.forEach((elemento, idx) => {
    if (
        elemento.previsaoEntrega.slice(0, 10) >=
        tempoTmp.toLocaleDateString("pt-BR")
    ) {
        const listagemAgenda = document.createElement("tr");

        const marcaTd = document.createElement("td");
        const modeloTd = document.createElement("td");
        const placaTd = document.createElement("td");
        const clienteTd = document.createElement("td");
        const contatoTd = document.createElement("td");
        const emailTd = document.createElement("td");
        const dtEntradaTd = document.createElement("td");
        const prevEntregaTd = document.createElement("td");
        const servicosTd = document.createElement("td");
        const observacaoTd = document.createElement("td");
        const legenda = document.createElement("h3")
        const marca = elemento.marca;
        const modelo = elemento.modelo;
        const placa = elemento.placa;
        const cliente = elemento.cliente;
        const contato = elemento.foneContato;
        const email = elemento.email;
        const dtEntrada = elemento.horaEntrada;
        const prevEntrega = elemento.previsaoEntrega;
        const servicos = elemento.servicos;
        const observacao = elemento.observacoes;

        marcaTd.textContent = marca;
        modeloTd.textContent = modelo;
        placaTd.textContent = placa;
        clienteTd.textContent = cliente;
        contatoTd.textContent = contato;
        emailTd.textContent = email;
        dtEntradaTd.textContent = dtEntrada;
        prevEntregaTd.textContent = prevEntrega;
        servicosTd.textContent = servicos;
        observacaoTd.textContent = observacao;
        listagemAgenda.appendChild(marcaTd);
        marcaTd.classList.add("marca");
        listagemAgenda.appendChild(modeloTd);
        modeloTd.classList.add("modelo");
        listagemAgenda.appendChild(placaTd);
        listagemAgenda.appendChild(clienteTd);
        listagemAgenda.appendChild(contatoTd);
        listagemAgenda.appendChild(emailTd);
        listagemAgenda.appendChild(dtEntradaTd);
        listagemAgenda.appendChild(prevEntregaTd);
        prevEntregaTd.classList.add("previsao");
        listagemAgenda.appendChild(servicosTd);
        listagemAgenda.appendChild(observacaoTd);

        tabela.appendChild(listagemAgenda);
        section.appendChild(tabela);
    }
});

const linhasAgenda = document.querySelectorAll("tr");
linhasAgenda.forEach((elem) => {
    elem.querySelectorAll(".previsao").forEach((data) => {
        let partesData = data.textContent.slice(0, 10).split("/");
        let DataHora = data.textContent.slice(11).split(":");
        let dataprevista = partesData.concat(DataHora);
        let dataPrevista = new Date(
            dataprevista[2],
            dataprevista[1] - 1,
            dataprevista[0],
            dataprevista[3],
            dataprevista[4],
            dataprevista[5]
        );
        if(dataPrevista<tempoTmp){
            elem.classList.add("atraso")
            elem.addEventListener("mouseover",()=>{
    
                let legenda = document.querySelector('.legendaAtraso')
                legenda.classList.add('legenda')
                legenda.innerHTML = '<span><img src="../pics/meteorito.png alt=""></span> Item em atraso'
            })   
            elem.addEventListener("mouseout",()=>{
                document.querySelector('.legendaAtraso').innerHTML = ""
            })   
        }
            
        
    });
});

