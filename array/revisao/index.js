const comidas = ['Lasanha', 'Batata', 'Bacon']
console.log(comidas[2])

comidas.forEach((comida, posicao)=> {
    console.log(`Na posição ${posicao} temos a comida: ${comida}`)
})

let outrasComidas = comidas.concat('Jilo')
console.log('comidas', comidas);
console.log('outras comidas', outrasComidas);

//join sempre retorna string


let stringDoArray = comidas.join(', ')
console.log(stringDoArray);

// shift tira o primeiro valor do array e retorna o valor que ele tirou 
console.log(comidas.shift());
console.log(comidas)


console.log(comidas.pop());
console.log(comidas);

//Adiciona um item na primeira posição do array
//modifica permanentemente no array

comidas.unshift('Macarrão')
console.log(comidas);

//Adiciona um item na ultima posição do array
// nodifica permanentemente o array

comidas.push('Strogonoff')
console.log(comidas)

//inverte Array
comidas.reverse()
console.log(comidas)

//cópia simples delimitando o começo  e o final da parte que eu quero
//slice (começo, final)

let cortaAlimentos = comidas.slice(1, 2)
console.log(cortaAlimentos);
console.log(comidas);


//Pode remover e adicionar valores utilizando posição, indice de apagar SUBSTITUI
comidas.splice(2, 2, 'Alface')
console.log(comidas);


//colocar array na ordem alfabética
comidas.sort()
console.log(comidas)


comidas.unshift()
// pedir para encontrar o primeiro que ele encontra não importa se tem outro igual
console.log(comidas.indexOf('Batata'));
// do final do começo, ele percorre e conta todos ele e diz que posição está e começa do final
console.log(comidas.lastIndexOf('Batata'));

//Quando não tem o item
console.log(comidas.indexOf('Brocolis'))

// map cria um cópia e processa o mesmo valor retornando um novo array
// processa cada valor com o array novo
let mapArray = comidas.map((comida) => `${comida} Gostosa`)
console.log(mapArray)

//retorna array com valores encontrados
let arrayProcura = comidas.filter((comida) => comida === 'Batata')
console.log(arrayProcura)

//processa todos os valores em um só
let juntaComida = comidas.reduce((esq, dir) =>{
    return `${esq} & ${dir}`
})
console.log(juntaComida);

