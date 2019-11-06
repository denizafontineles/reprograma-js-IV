let resultados = [
    {
        titulo: "Ginger Champagne",
        ingredientes: "champagne, ginger, ice, vodka",
        imagem: "http://img.recipepuppy.com/1.jpg"
    },
    {
        titulo: "Potato and Cheese Frittata",
        ingredientes: "cheddar cheese, eggs, olive oil, onions, potato, salt",
        imagem: "http://img.recipepuppy.com/2.jpg"
    },
    {
        titulo: "Eggnog Thumbprints",
        ingredientes: "brown sugar, butter, butter, powdered sugar, eggs, flour, nutmeg, rum, salt, vanilla extract, sugar",
        imagem: "http://img.recipepuppy.com/3.jpg"
    },
    {
        titulo: "Succulent Pork Roast",
        ingredientes: "brown sugar, garlic, pork chops, water",
        imagem: "http://img.recipepuppy.com/4.jpg"
    },
    {
        titulo: "Irish Champ",
        ingredientes: "black pepper, butter, green onion, milk, potato, salt",
        imagem: "http://img.recipepuppy.com/5.jpg"
    }
];

class Card{
    constructor(receita){
        this.receita = receita
    }

    render(){

        // const {
        //     imagem,
        //     titulo,
        //     ingredientes
        // } = this.receita

        const card = `
        <div class="card">
        <img class="imagem" src="${this.receita.imagem}"/>
        <h2>${this.receita.titulo}"</h2>
        <p class="ingredientes">${this.receita.ingredientes}</p>
        `
        document.querySelector('.cards').insertAdjacentHTML('beforeend', card)
    }
}


resultados.map((cardapio) => {
    new Card(cardapio).render()
  }) 
