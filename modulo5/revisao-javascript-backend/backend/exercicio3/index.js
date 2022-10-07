console.log("exercicio 3");

const contas = [
	{
		email: "astrodev@labenu.com",
		password: "abc123"
	},
	{
		email: "bananinha@gmail.com",
		password: "bananinha"
	}
]

const novaConta = (email = "", senha = "") => {

    const validaEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
    const validaSenha = /.{6,}/

    if(validaEmail.test(email) === false && validaSenha.test(senha) === false){
        console.log("E-mail inválido e senha deve possuir no mínimo 6 caracteres.")
    } if(validaEmail.test(email) === false && validaSenha.test(senha) === true){
        console.log("E-mail inválido.")
    } if (validaEmail.test(email) === true && validaSenha.test(senha) === false){
        console.log("Sua senha deve possuir no mínimo 6 caracteres.")
    } else if(validaEmail.test(email) === true && validaSenha.test(senha) === true){
        console.log("Login com sucesso!")
    }
}

novaConta("morcelli@gmail.com","223344") 
novaConta("jota.com", "2267")
novaConta("tata.com", "556677")
novaConta("tutu@gmail.com","256")