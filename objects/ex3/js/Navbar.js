class Navbar{
    render(){

        const fazerNav = `
        <img class="navbar__logo" src="./imgs/logo.png" alt="Logo" />
        <div class="group__input">
        <button class="button__search" onclick="search()"> Search </button>
        <input class="input__search"  type="search" placeholder="Search" aria-label="Search">
        </div>
        ` 
        
        document.querySelector('.navbar').innerHTML = fazerNav
    }
}


const renderNav =  new Navbar
renderNav.render()
// onKeyUp="limpar(this.value)"


let btn = document.querySelector('.button__search')

btn.addEventListener('click', function(){
    let inputValue = document.querySelector('.input__search').value
    let achados = resultados.filter(receita => {
        return receita.titulo.includes(inputValue)
    })
    console.log(achados)
})
