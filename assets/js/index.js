const lavagem = document.querySelector("#lavagem");
const cristalizacao = document.querySelector("#cristalizacao");
const higienizacao = document.querySelector("#higienizacao");
const polimento = document.querySelector("#polimento");



// function mensagem() {
    
let servicos = document.querySelector(".container");
let h1 = document.createElement("h1");
let p = document.createElement("p");
let section = document.createElement("section");



lavagem.addEventListener('mouseover', function(){
    servicos.appendChild(section);
    h1.textContent = "Lavagem";
    
    p.textContent =
    "Serviço de lavagem com cera que dá brilho e protege a sua pintura contra os efeitos da natureza";
    
})

cristalizacao.addEventListener('mouseover', function(){
    servicos.appendChild(section);
    h1.textContent = "Cristalização";
    
    p.textContent =
    "Serviço de cristalização de pintura onde é aplicado uma camada de resina que protege e revitaliza a pintura do veículo.";
    
})

higienizacao.addEventListener('mouseover', function(){
    h1.textContent = "Higienização";
    
    p.textContent =
    "A higienização é uma limpeza profunda feita no interior e exterior do carro. Seu principal objetivo é impedir que alguns fungos e germes possam surgir dentro do seu veículo. Neste processo, são aplicados produtos com propriedade para eliminar agentes nocivos fazendo uma limpeza profunda no veículo.";
    
})

polimento.addEventListener('mouseover', function(){
    servicos.appendChild(section);
    h1.textContent = "Polimento";
    
    p.textContent =
    "O polimento automotivo é um procedimento que ajuda na estética do veículo. Ele remove a tinta danificada do automóvel para outro processo de pintura.";
})

    
section.appendChild(h1);
section.appendChild(p);
section.classList.add("servicos__descritivo");