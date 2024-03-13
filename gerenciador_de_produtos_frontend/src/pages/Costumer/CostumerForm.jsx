import React, { useState, useEffect} from 'react'
import axios from '../../api'
import { useNavigate, useParams } from 'react-router-dom'

const CostumerForm = () => {

    const [costumer, setCostumer] = useState({name: '', cpf: '', email: '', zipcode: '', street: '', number: '', neighborhood: '', city: '', state: '', country: ''})
    const navigate = useNavigate()
    const { id } = useParams()
    const [cepLoading, setCepLoading] = useState(false)

    useEffect(() => {

        if (id) {
            axios.get(`/costumers/${id}`)
            .then(response => {
                setCostumer(response.data)
            })
            .catch(error => console.error('Erro ao buscar cliente', error))
        } else {
            setCostumer({ name: '', cpf: '', email: '', zipcode: '', street: '', number: '', neighborhood: '', city: '', state: '', country: ''})
        }
    }, [id])


    function handleChange(event) {
        const { name, value } = event.target
        setCostumer(prevState => ({ ...prevState, [name]: value }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        const method = id ? 'put' : 'post'
        const url = id ? `/costumers/${id}` : '/costumers'

        axios[method](url, costumer)
        .then(() => {
            alert(`Cliente ${id ? 'atualizado' : 'adicionado'} com sucesso!`)
            navigate("/listar-clientes")
        })
        .catch(error => console.error("Ocorreu um erro: ", error))
    }

    function handleCepBlur(event) {
        //Vai consultar a API dos Correios 
        const cep = event.target.value.replace(/\D/g, '')
        if (cep.length !== 8) {
            alert("CEP deve contém 8 dígitos. Redigite")
            return
        }

        setCepLoading(true)

        axios.get(`http://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
            if (response.data.erro) {
                alert("CEP não localizado")
                setCepLoading(false)
                return
            }

            setCostumer(prevState => ({
                ...prevState,
                street: response.data.logradouro,
                neighborhood: response.data.bairro,
                city: response.data.localidade,
                state: response.data.uf,
                country: 'Brasil'
            }))

            setCepLoading(false)
        })

        .catch(error => {
            console.log("Erro ao buscar o CEP: ", error)
            setCepLoading(false)
        })
    }




  return (
    <div className='container mt-5'>
        <h2>{id ? 'Editar' : 'Adicionar'} Cliente</h2>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor="name">Nome/Razão Social</label>
                <input type='text' className='form-control' id='name' name='name' value={costumer.name} onChange={handleChange} required />
            </div>

            <div className='form-group'>
                <label htmlFor="cpf">CPF/CNPJ</label>
                <input type='text' className='form-control' id='cpf' name='cpf' value={costumer.cpf} onChange={handleChange} required />
            </div>

            <div className='form-group'>
                <label htmlFor="email">E-mail</label>
                <input type='text' className='form-control' id='email' name='email' value={costumer.email} onChange={handleChange} required />
            </div>

            <div className='form-group'>
                <label htmlFor="zipcode">CEP</label>
                <input type='text' className='form-control' id='zipcode' name='zipcode' value={costumer.zipcode} onChange={handleChange} onBlur={handleCepBlur}required />
                {cepLoading && <p>Buscando CEP...</p>}
            </div>

            <div className='form-group'>
                <label htmlFor="street">Rua/Avenida</label>
                <input type='text' className='form-control' id='street' name='street' value={costumer.street} onChange={handleChange} required />
            </div>

            <div className='form-group'>
                <label htmlFor="number">Número</label>
                <input type='text' className='form-control' id='number' name='number' value={costumer.number} onChange={handleChange} required />
            </div>

            <div className='form-group'>
                <label htmlFor="neighborhood">Bairro</label>
                <input type='text' className='form-control' id='neighborhood' name='neighborhood' value={costumer.neighborhood} onChange={handleChange} required />
            </div>

            <div className='form-group'>
                <label htmlFor="city">Cidade</label>
                <input type='text' className='form-control' id='city' name='city' value={costumer.city} onChange={handleChange} required />
            </div>

            <div className='form-group'>
                <label htmlFor="state">Estado</label>
                <input type='text' className='form-control' id='state' name='state' value={costumer.state} onChange={handleChange} required />
            </div>

            <div className='form-group'>
                <label htmlFor="country">País</label>
                <input type='text' className='form-control' id='country' name='country' value={costumer.country} onChange={handleChange} required />
            </div>

            <button type="submit" className="btn btn-success">{id ? 'Atualizar' : 'Adicionar'}</button>
        </form>
        
    </div>
  )
}

export default CostumerForm