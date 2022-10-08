/* 1. Guardar la información localmente(api.js) */
/* console.log(beers) */
/* 2. Generar una funcion que reciba como parametro el array de cervezas y
un valor de alcohol (numero). La funcion debe devolver un nuevo array con
las cervezas que no excedan el nivel etílico. Cada elemento del nuevo array
debe ser un objeto que tenga sólo las propiedades name, (alcohol) abv y ("amargor") ibu */
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
function topAbvFilter(array){
   const abvTopBeers = array.slice()
    abvTopBeers.sort((el1, el2) =>{
        if(el1.abv > el2.abv){
            return -1
        }else if(el1.abv < el2.abv){
            return 1
        }else{
            return 0
        }
    })
    abvTopBeers.length = 10
    return abvTopBeers
}
/* console.log(topAbvFilter(beers)) */
/* 4. Generar una función que reciba como parámetro un array
de cervezas y devuelva un nuevo array con las 10 cervezas menos amargas */
function minIbuFilter(array){
    const ibuMinBeers = array.slice()
    ibuMinBeers.sort((el1, el2) => {
        if(el1.ibu < el2.ibu){
            return -1
        }else if(el1.ibu > el2.ibu){
            return 1
        }else{
            return 0
        }
    })
    ibuMinBeers.length = 10
    return ibuMinBeers
}
/* console.log(minIbuFilter(beers)) */
/* 5. Generar una función que reciba como parámetro un array de cervezas
un nombre de propiedad y un valor booleano. Debe devolver un nuevo array
con 10 cervezas ordenadas por la propiedad ingresada como segundo argumento
de manera ascendente si el tercero es true o descendente si es false */
function ascPropFilter(array, prop, boolean){
    const propBeers = array.slice()
    if(boolean){
        propBeers.sort((el1, el2) => {
            if(el1[prop] < el2[prop]){
                return -1
            }else if(el1[prop] > el2[prop]){
                return 1
            }else{
                return 0
            }})
    } else{
        propBeers.sort((el1, el2) => {
            if(el1[prop] > el2[prop]){
                return -1
            }else if(el1[prop] < el2[prop]){
                return 1
            }else{
                return 0
            }})
    }
    propBeers.length = 10
    return propBeers
}
console.log(ascPropFilter(beers, "ph", false))