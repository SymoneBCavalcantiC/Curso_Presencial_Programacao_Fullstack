import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from '../../api'

const CostumerList = () => {

    const [costumers, setCostumers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('/costumers')
        .then(response => {
            setCostumers(response.data)
        })
        .catch(error => console.error("Houve um erro: ", error))
    }, []);

    const fetchCostumers = () => {
        axios.get('/costumers')
        .then(response => {
            setCostumers(response.data)
        })
        .catch(error => console.error("Houve um erro: ", error))
    }

    function deleteCostumer(id) {
        axios.delete(`/costumers/${id}`)
        .then(() => {
            alert("Cliente excluído com sucesso!")
            fetchCostumers()
        })
        .catch(error => console.error("Houve um erro: ", error))
    }

  return (

    <div className='container mt-5'>
        <h2 className='mb-4'>Lista de Clientes</h2>
        <button onClick={() => navigate('/add-cliente')} className='btn btn-primary mb-2'>Adicionar Cliente</button>

        <table className='table'>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>E-mail</th>
                    <th>CEP</th>
                    <th>Rua/Avenida/Logradouro</th>
                    <th>Número</th>
                    <th>Bairro</th>
                    <th>Município</th>
                    <th>Estado</th>
                    <th>País</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    costumers.map(costumer => (
                        <tr key={costumer.id}>
                            <td>{costumer.name}</td>
                            <td>{costumer.cpf}</td>
                            <td>{costumer.email}</td>
                            <td>{costumer.zipcode}</td>
                            <td>{costumer.street}</td>
                            <td>{costumer.number}</td>
                            <td>{costumer.neighborhood}</td>
                            <td>{costumer.city}</td>
                            <td>{costumer.state}</td>
                            <td>{costumer.country}</td>
                            <td>
                                <button className='btn btn-sm btn-warning mr-2' onClick={() => navigate(`/editar-cliente/${costumer.id}`)}>Editar</button>
                                <button onClick={() => deleteCostumer(costumer.id)} className='btn btn-sm btn-danger'>Excluir</button>
                            
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        
    </div>
    




  )
}

export default CostumerList