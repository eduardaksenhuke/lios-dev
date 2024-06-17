const { pid } = require('process')
const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let funcionarios = []

exibirMenu()

function exibirMenu() {
	console.log(`
	Menu:
	1. Cadastrar funcionário
	2. Listar todos os funcionários
	3. Exibir funcionário com maior salário
	4.
	5. Sair
	`)

	rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarFuncionario()
				break
			case '2':
				listarFuncionarios()
				break
			case '3':
				exibirMaiorSalario()
				break
			case '4':
				rl.close()
				break
			default:
				console.log('Opção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

function cadastrarFuncionario() {
	rl.question('Digite o nome do funcionário: ', (nome) => {
		rl.question('Digite o cargo do funcionário: ', (cargo) => {
			rl.question('Digite o salário do funcionário: ', (salario) => {
				funcionarios.push({ nome: nome, cargo: cargo, salario: parseFloat(salario) })
				console.log('Funcionário cadastrado com sucesso!')
				exibirMenu()
			})
		})
	})
}

function listarFuncionarios(){
	if(funcionarios.length == 0) {
		console.log('Ainda não tem funcionários cadastrados')
	}
	else{
		rl.question('qual elemento voce deseja editar',([i]))=>{
			if(numero > 0 &&)
		}
		for(let i = 0; i < funcionarios.length; i ++) {
			console.log(`Nome: ${funcionarios[i].nome}; Cargo: ${funcionarios[i].cargo}; Salário: ${funcionarios[i].salario}`)
		}
	}
	exibirMenu()
}

function exibirMaiorSalario() {

	let maior = funcionarios[0].salario
	let posicao = 0

	if(funcionarios.length == 0) {
		console.log('Não há funcionários com salário')
		exibirMenu()
	}
	else{
		for(let i = 0; i < funcionarios.length; i ++) {
			if(funcionarios[i].salario > maior){
				maior = funcionarios[i].salario
				posicao=i
				
			}
		}
	}
	console.log(`Nome: ${funcionarios[posicao].nome}; Cargo: ${funcionarios[posicao].cargo}; Salário: ${funcionarios[posicao].salario}`)
	exibirMenu()
	
}