import React from 'react'
import Aluno from './components/Aluno'

const App = () => {
  const aluno1 = {
    nome: "Joao",
    email: "joao@gmail.com",
    curso: "Sistemas para Internet"
  }

  const aluno2 = {
    nome: "Maria",
    email: "maria@gmail.com",
    curso: "Curso Presencial Fullstack"
  }

  const aluno3 = {
    nome: "Symone",
    email: "symone@gmail.com",
    curso: "Sistemas de Informação"
  }

  const alunos = [{aluno1, aluno2, aluno3}];


  return (
    <div>
      {
        alunos.map((aluno) => (
          <Aluno nome={aluno.nome} email={aluno.email} curso={aluno.curso} />
        ))
      }
      
    </div>
  )
}

export default App
