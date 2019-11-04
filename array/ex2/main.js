const nomesNoRole =['Adriana',
'Adrielly',
'Aline',
'Ana',
'Angelica',
'Ba',
'Babs',
'Carolzinha',
'Carolzona',
'Cecilia',
'Daiana',
'Emanuelle',
'Jackeline',
'Jennifer',
'Josiane',
'Lia',
'Marcela',
'Monique',
'Priscilla Roiz Garcia',
'Priscilla Soares Alves',
'Raissa',
'Raquel',
'Romênia',
'Rosana',
'Simara',
'Simone',
'Talita',
'Telma',
'Thaís',
'Valdeniza']

const formulario = document.querySelector('#form-do-role')
const input = document.querySelector('#nome')
const div = document.querySelector("#status")

formulario.addEventListener('submit', procuraNome)

function procuraNome(e){
    e.preventDefault()
    let valorInput = input.value
    
    if (nomesNoRole.find( procura => procura === valorInput)) {
        div.innerHTML = `
        <p>${valorInput} Está no rolê!!!</p>
        `
    }else{
        div.innerHTML = `
        <p>${valorInput}Não está no rolê!!!</p>
        `
    }   
}