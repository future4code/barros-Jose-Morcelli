console.log("Exercício 3");

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Filme = {
    nomeDoFilme: string,
    anoDeLancamento: number,
    generoDoFilme: GENERO,
    pontuacao?: number
}

function dadosDoFilme (nomeDoFilme: string, anoDeLancamento: number, generoDoFilme: GENERO, pontuacao?:number): Filme {
    if (typeof pontuacao !== "undefined") {
        return ({
             nomeDoFilme: nomeDoFilme,
             anoDeLancamento: anoDeLancamento,
             generoDoFilme: generoDoFilme,
             pontuacao: pontuacao
            })
   } else {
        return ({
            nomeDoFilme: nomeDoFilme,
            anoDeLancamento: anoDeLancamento,
            generoDoFilme: generoDoFilme
        })
    }
}

console.table(dadosDoFilme("Esposa de Mentirinha",2011, GENERO.COMEDIA, 79));
console.table(dadosDoFilme("Mad Max",2015, GENERO.ACAO));

