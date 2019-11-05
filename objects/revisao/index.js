function Professor(name, sobrenome, materia){
    this.name = name
    this.sobrenome = sobrenome
    this.materia = materia
}
Professor.prototype.dizMateria = function(){
    return `A materia é: ${this.materia}`
}

const js3 = new Professor ("deniza", "fontineles", "ads")
console.log(js3.dizMateria())

