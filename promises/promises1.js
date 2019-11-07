function falarDepoisDE(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(segundos > 1){
                reject('muito tempo000
                ')
            }
            setTimeout(() => {
                resolve(frase)
            }, segundos * 1000);
        })
    })
}
falarDepoisDE(3, "hum, esperei").then(frase => console.log(frase)).catch( e => console.log(e))