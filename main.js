const nuczappi = [
    {
        id: 1,
        nombre: "Napolitana",
        ingredientes: "tomate y anchoas",
        precio: 400
    },
    {
        id: 2,
        nombre: "Ananá",
        ingredientes: "Rodajas de ananá y almibar",
        precio: 500
    },
    {
        id: 3,
        nombre: "Ranchera",
        ingredientes: "Bacon, tomate cherry y cheddar",
        precio: 600
    },
    {
        id: 4,
        nombre: "Brasilera",
        ingredientes: "Rodajas de banana y carne deshilachada",
        precio: 700
    },
    {
        id: 5,
        nombre: "Mexicana",
        ingredientes: "Contiene encima el relleno de burrito",
        precio: 800
    },
    {
        id: 6,
        nombre: "Colombiana",
        ingredientes: "Masa hojaldrada, salame y verdeo",
        precio: 500
    },
];

const idImpar = nuczappi.filter(x => x.id % 2 === 1);
console.log ('Los id impares son:', idImpar);

const menorPrecio = nuczappi.filter((menorPrecio) => { return menorPrecio.precio < 600 })

console.log('Las Nuczappis que valen menos de $600 son:', menorPrecio)

nuczappi.forEach(({nombre, precio}) => {
    console.log('Pizza:', nombre, 'Tiene un costo de:', precio)
})

nuczappi.forEach(({nombre, ingredientes}) => {
    console.log('Pizza:', nombre)
    console.log('Ingredientes de la Nuczappi:', ingredientes)
})