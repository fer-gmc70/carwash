const lavagem = document.querySelector("#servicos__lavagem")
const higienizacaoBancos = document.querySelector("#servicos__higienizacaoBancos")
const higienizacaoInterna = document.querySelector("#servicos__higienizacaoInterna")
const cristalizacao = document.querySelector("#servicos__cristalizacao")
const polimento = document.querySelector("#servicos__polimento")


lavagem.addEventListener('mouseover',()=>{
    document.querySelector("#descricao__servicos--lavagem").style.visibility = "visible"
    document.querySelector("#descricao__servicos--higienizacaoBancos").style.visibility = "hidden"
    document.querySelector("#descricao__servicos--higienizacaoInterna").style.visibility = "hidden"
    document.querySelector("#descricao__servicos--cristalizacao").style.visibility = "hidden"
    document.querySelector("#descricao__servicos--polimento").style.visibility = "hidden"
})

higienizacaoBancos.addEventListener('mouseover',()=>{
    document.querySelector("#descricao__servicos--lavagem").style.visibility = "hidden"
    document.querySelector("#descricao__servicos--higienizacaoBancos").style.visibility = "visible"
    document.querySelector("#descricao__servicos--higienizacaoInterna").style.visibility = "hidden"
    document.querySelector("#descricao__servicos--cristalizacao").style.visibility = "hidden"
})

higienizacaoInterna.addEventListener('mouseover',()=>{
    document.querySelector("#descricao__servicos--lavagem").style.visibility = "hidden"
    document.querySelector("#descricao__servicos--higienizacaoBancos").style.visibility = "hidden"
    document.querySelector("#descricao__servicos--higienizacaoInterna").style.visibility = "visible"
    document.querySelector("#descricao__servicos--cristalizacao").style.visibility = "hidden"
    document.querySelector("#descricao__servicos--polimento").style.visibility = "hidden"
})

cristalizacao.addEventListener('mouseover',()=>{
    document.querySelector("#descricao__servicos--lavagem").style.visibility = "hidden"
    document.querySelector("#descricao__servicos--higienizacaoBancos").style.visibility = "hidden"
    document.querySelector("#descricao__servicos--higienizacaoInterna").style.visibility = "hidden"
    document.querySelector("#descricao__servicos--cristalizacao").style.visibility = "visible"
    document.querySelector("#descricao__servicos--polimento").style.visibility = "hidden"
})

polimento.addEventListener('mouseover',()=>{
    document.querySelector("#descricao__servicos--lavagem").style.visibility = "hidden"
    document.querySelector("#descricao__servicos--higienizacaoBancos").style.visibility = "hidden"
    document.querySelector("#descricao__servicos--higienizacaoInterna").style.visibility = "hidden"
    document.querySelector("#descricao__servicos--cristalizacao").style.visibility = "hidden"
    document.querySelector("#descricao__servicos--polimento").style.visibility = "visible"
})