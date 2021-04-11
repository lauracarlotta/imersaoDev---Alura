var pessoas = [
    {nome:'roberto', idade: 40},
    {nome:'leticia', idade: 21},
    {nome:'josefa', idade: 54, verTV: function(){}}
]

console.log(maisVelho().nome)

function maisVelho() {
    let maisVelho;

    for (let i =0; i<pessoas.length; i++) {
        if (pessoas[i].idade > maisVelho.idade)
            maisVelho=pessoas[i]
    }
    return maisVelho
}