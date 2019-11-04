let btn = document.querySelector("#btn")
let input = document.querySelector("#input")
let frutas = ["banana", "morango", "bacurí", "laranja"];

btn.addEventListener("click", procuraNome)

function procuraNome(e) {
    e.preventDefault()
    let valorInput = input.value

    if (frutas.find(percorre => percorre === valorInput)) {
        console.log("PARABÉNS ACERTOU!!!!")
    } else {
        console.log("ERROOUUU!!!")
    }
}

// ============== EXEMPLO FILTER =============

btn.addEventListener("click", procuraNome)

function procuraNome(e) {
    let arrAchou = frutas.filter(fruta => fruta === input.value)

    if (arrAchou > 0) {
        console.log("PARABÉNS ACERTOU!!!!")
    } else {
        console.log("ERROOUUU!!!")
    }
}

// =========== EXEMPLO FIND ============
