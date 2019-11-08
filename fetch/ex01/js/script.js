const cardSection = document.getElementById('cards-section')
const erroSection = document.getElementById('error')


const placeholderCard = {
    nome: 'Carta não carregada',
    tipo: 'Arcano Maior',
    descricao: 'Sen descrição',
    imagem: 'http://via.placeholder.com/250X500',
    link: 'https://www.astrolink.com.br/'
}


renderizaCard = carta => {
    const novaCarta = new Card(carta).render()
    cardSection.innerHTML = novaCarta
}

// fetch('tarot.json').then((reponse) => {
//     return reponse.json()
// }).then(json => {
//     renderizaCard(selecionaCarta(json))
// })

selecionaCarta = cartas => {
    const cartaAleatoria = Math.floor(Math.random() * cartas.length)
    return cartas[cartaAleatoria]
}

async function carregaCarta(){
    try{
        const response = await fetch('tart.json')
        if(response.ok) throw {

        }
        const json = await response.json()
        renderizaCard(selecionaCarta(json))
    }catch(e){
        renderizaCard(placeholderCard)
            erroSection.innerHTML = `A requisição não deu certo ${e}`
    }
}

carregaCarta()

novaCarta = () =>{
    carregaCarta()
}