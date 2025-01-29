interface Funcionario {
  nome: string
  salario: number
  cargo: string
  ativo: boolean
}

function criarFuncionario(
  nome: string,
  salario: number,
  cargo: string
): Funcionario {
  const result: Funcionario = {
    nome,
    salario,
    cargo,
    ativo: true,
  }
  return result
}

// function mostrarFuncionarios(listaFuncionarios: Array<Funcionario>) {
// Recebe um array de tipos Funcionários
function mostrarFuncionarios(listaFuncionarios: Funcionario[]) {
  listaFuncionarios.forEach((item: Funcionario) => {
    console.log(
      `O funcionário ${item.nome}, possui um salário de ${item.salario}!`
    )
  })
}

{
  const funcionario1 = criarFuncionario("Lucas", 15.0, "Desenvolvedor")
  const funcionario2 = criarFuncionario("Maria", 12.0, "Design")
  const funcionario3 = criarFuncionario("Joao", 14.0, "QA")
  const funcionario4 = criarFuncionario("Tiago", 15.0, "Contador")
  mostrarFuncionarios([funcionario2, funcionario1, funcionario3, funcionario4])
}
