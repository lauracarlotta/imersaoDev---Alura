let moviesListImage = [];
let moviesListLink = [];
let moviesListName = [];
let btnSearchMovie = document.querySelector(".search-button");
let btnAddMovie = document.querySelector(".add-button");
let btnDeleteMovie = document.querySelector(".delete-button");
let showMovies = document.querySelector(".show-movie");

moviesListImage.push("https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg");
moviesListLink.push("https://www.imdb.com/title/tt0468569/?ref_=nv_sr_srsg_0");
moviesListName.push("Batman e o Cavaleiro das Trevas");

moviesListImage.push("https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg");
moviesListLink.push("https://www.imdb.com/title/tt0133093/?ref_=nv_sr_srsg_2");
moviesListName.push("Matrix");

moviesListImage.push("https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg");
moviesListLink.push("https://www.imdb.com/title/tt0816692/?ref_=nv_sr_srsg_0");
moviesListName.push("Interestelar");
 
moviesListImage.push("https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY268_CR1,0,182,268_AL_.jpg");
moviesListLink.push("https://www.imdb.com/title/tt0109830/?ref_=nv_sr_srsg_1");
moviesListName.push("Forest Gump");

moviesListImage.push("https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg");
moviesListLink.push("https://www.imdb.com/title/tt0108052/?ref_=nv_sr_srsg_0");
moviesListName.push("A Lista de Schindler");

moviesListImage.push("https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtNWMwNS00NmFlLWI0YTEtZmI3YjIzZWUyY2Y3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg");
moviesListLink.push("https://www.imdb.com/title/tt0180093/?ref_=nv_sr_srsg_0");
moviesListName.push("Requiem for a Dream");

moviesListImage.push("https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg");
moviesListLink.push("https://www.imdb.com/title/tt1375666/?ref_=nv_sr_srsg_0");
moviesListName.push("A Origem");

moviesListImage.push("https://m.media-amazon.com/images/M/MV5BOTJiNDEzOWYtMTVjOC00ZjlmLWE0NGMtZmE1OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg");
moviesListLink.push("https://www.imdb.com/title/tt0361748/?ref_=nv_sr_srsg_0");
moviesListName.push("Bastardos Inglórios");

console.log(moviesListImage);
console.log(moviesListLink);
console.log(moviesListName);

for (let i = 0; i < moviesListImage.length; i++) {
    showMovies.innerHTML += `<div class="show-movie"><a href="${moviesListLink[i]}" target="_blank"><img src = "${moviesListImage[i]}" title="${moviesListName[i]}"></a></div>`;
}

/* let searchMovie = prompt(""); */

// Todas as Infos sobre os filmes foram retiradas do site https://www.imdb.com/?ref_=nv_home.

// moviesListImage.push("");
// moviesListLink.push("");
// moviesListName.push("");
