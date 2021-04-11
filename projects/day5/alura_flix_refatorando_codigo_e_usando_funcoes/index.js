function addMovie() {
    let inputAddFavoriteMovie = document.querySelector(".input-movie");
    let favoriteMovie = inputAddFavoriteMovie.value;
    let i;

    if(favoriteMovie.endsWith(`.jpg`) || favoriteMovie.endsWith(`.svg`)) {

        //Se inputAddFavoriteMovie retorna true para "terminaCom": .jpg -> chame a função!

        // if(favoriteMovie.length[i] == `.jpg` || `.svg` || `.jpeg`) < funciona, porem não entra no else caso seja false

        /* showOnWindowListMovies(favoriteMovie); */

        let guardaNaMemoria = [];
        guardaNaMemoria.push(addMovie()); // verificar

        console.log(guardaNaMemoria);

        /* document.write(`<img src="${inputAddFavoriteMovie}">`); ,- primeiro usamos o document.write para mostra na tela. */
    } else {
        alert(`A url da imagem adicionada precisa terminar com .jpg`)
    }

    inputAddFavoriteMovie.value = "";

}

function showOnWindowListMovies(movie) {
    let listMovies = document.querySelector(".movies-list");
    let elementMovie = `<img src="${movie}">`;
    listMovies.innerHTML += elementMovie;
}

let buttonAddMovie = document.querySelector(".add-movie-button");

buttonAddMovie.onclick = addMovie;