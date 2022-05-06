/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

   console.log ("Seja bem vindo(a) ao jogo de Blackjack!")

    if (confirm ("Quer iniciar uma nova rodada?")) {
       const primeiraCartaUsuario = comprarCarta()
       const segundaCartaUsuario = comprarCarta()
       const primeiraCartaPc = comprarCarta()
       const segundaCartaPc = comprarCarta()
       let pontosUsuario= primeiraCartaUsuario.valor + segundaCartaUsuario.valor
       let pontosPc= primeiraCartaPc.valor + segundaCartaPc.valor

       console.log(`Usuário - cartas: ${primeiraCartaUsuario.texto} ${segundaCartaUsuario.texto} - pontuação ${pontosUsuario}  
Computador - cartas: ${primeiraCartaPc.texto} ${segundaCartaPc.texto} - pontuação ${pontosPc}`);
      if (pontosUsuario > pontosPc ){
      console.log("O usuário ganhou!")
}     else if(pontosPc > pontosUsuario ){
      console.log("O computador ganhou!")
}     else if(pontosUsuario === pontosPc){
      console.log("Empate!")
}
 
}     else console.log("O jogo acabou!")

