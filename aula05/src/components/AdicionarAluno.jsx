import React from 'react'
import axios from 'axios'

const AdicionarAluno = () => {

    const addAluno = async () => {
        const response = await axios.post('http://localhost:3000/alunos', 
        {
            nome: "Priscila",
            email: "priscila@hotmail.com"
        }
        );
        console.log(`Foi adicionado o aluno: ${response.data}`)
        alert("Aluno cadastrado com sucesso");
    }


  return (
    <div>
        <button onClick={addAluno}>Adicionar Priscila</button>
    </div>
  )
}

export default AdicionarAluno