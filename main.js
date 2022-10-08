/* console.log(beers) */
function abvFilter(array, abvLimit){
    const abvLimitedBeers = []
    for(beer of array){
        if(beer.abv <= abvLimit){
            let abvLimitBeer = {
                name: beer.name,
                abv: beer.abv,
                ibu: beer.ibu
            }
            abvLimitedBeers.push(abvLimitBeer)
        }
    }
    return abvLimitedBeers
}
/* console.log(abvFilter(beers, 5)) */


/* 3) Generar una función que reciba como parámetro un array de cervezas
y devuelva un nuevo array con las 10 cervezas más alcohólicas */
