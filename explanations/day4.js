// let = única variável;
// array = lista de variaveis (pode receber uma lista);
// .push() (empurra) para dentro da nossa lista;
// .length (tamanho do array);
// os índices nos array sempre começam de 0, ou seja, se o nosso array tiver 4 elementos, seu índice será de 0 a 3, ou seja, 0, 1, 2 e 3 = 4 elementos;

let movies = ["Batman e o Cavaleiro das Trevas", "Matrix", "Interstellar"];
//                  0           1           2
movies.push("Forest Gump");
//              3
console.log(movies);
console.log(movies.length);
console.log(movies[4]);

/* 
let indice = 0

 while (indice < movies.length) {
    
    console.log(movies[indice]);
    indice++
} 
*/

for(let indice = 0; indice < movies.length; indice++) {
    console.log(movies[indice]);
}
