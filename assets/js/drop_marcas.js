var marca = document.querySelector("#marca")

marca.addEventListener("click",function () {
   
    for (i=0; i< marcas.length; i++){
        console.log(marcas[i]);
        var opcao1 = document.createElement('option');
            opcao1.classList.add("marcas");
            opcao1.textContent = marcas[i];
            console.log(opcao1);
            marca.appendChild(opcao1);

}})
