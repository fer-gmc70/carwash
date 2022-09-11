var Marca = document.querySelector("#marca");
var modelos = document.querySelector("#modelo");



Marca.addEventListener("change", function () {
    
    var listaModelos = modeloMarca.filter(
        (modeloMarca) => modeloMarca["Marca"] === Marca.value
    );
    console.log(listaModelos);
    console.log(typeof listaModelos);

    var limparModelos = document.querySelectorAll(".modelos")
    for (i = 0; i < limparModelos.length; i++) {
        modelos.removeChild(document.querySelector(".modelos"));
    };

    for (i = 0; i < listaModelos.length; i++) {
        console.log(listaModelos[i]["Modelo"]);
        var opcao1 = document.createElement('option');
        opcao1.classList.add("modelos");
        opcao1.textContent = listaModelos[i]["Modelo"];
        console.log(opcao1);
        modelos.appendChild(opcao1);
    }
});

document.querySelector("#marca").onchange =  function () {
    
};
