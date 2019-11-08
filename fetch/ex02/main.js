const cepInput = document.getElementById("cep")
const logradouroInput = document.getElementById("logradouro")
const complementoInput = document.getElementById("complemento")
const bairroInput = document.getElementById("bairro")
const localidadeoInput = document.getElementById("localidade")
const ufInput = document.getElementById("uf")

//... continuem a pegar os inputs do index.html para preencher depois com o valor da api

cepInput.addEventListener("blur", () => {
    if (cepInput.value) {
        fetch(`https://viacep.com.br/ws/${cepInput.value}/json`).then(response => {
            return response.json()
        }).then(json => {
            ///façam aparecer os valores nos inputs
            preencheInputs(json)        
        })
        
        
    }
})


preencheInputs = objeto =>{
    logradouroInput.value = json.logradouro
    complementoInput.value = json.complemento
    bairroInput.value = json.bairro
    localidadeoInput.value = json.localidade
    ufInput.value = json.uf
}
