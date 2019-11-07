// fetch('rainbows.jpg').then(response => {
//     console.log(response.ok)
//     return response.blob()
// }).then(blob =>{
//     console.log(blob);
//     document.getElementById('rainbow').src =
//     URL.createObjectURL(blob)
// })

// ====================== AWAIT ================================================

async function pegaImagem(){
    const response
     = await fetch('rainbow.jpg')
    const blob = await response.blob()
    console.log(response);
    document.getElementById('rainbow').src =
    URL.createObjectURL(blob)
}
pegaImagem().then(() => console.log("carregou!!!!!!!!!!")).catch(()=> "não carregou!!" )