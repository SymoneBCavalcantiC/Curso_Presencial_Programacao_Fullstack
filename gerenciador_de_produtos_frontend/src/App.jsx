import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import SupplierList from './pages/Supplier/SupplierList';
import SupplierForm from './pages/Supplier/SupplierForm';
import './App.css'
import ProductList from './pages/Product/ProductList';
import ProductForm from './pages/Product/ProductForm';
import CostumerForm from './pages/Costumer/CostumerForm';
import CostumerList from './pages/Costumer/CostumerList';


const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<SupplierList />} />
        <Route path="/add-fornecedor" element={<SupplierForm />} />
        <Route path="/listar-fornecedores" element={<SupplierList />} />
        <Route path="/editar-fornecedor/:id" element={<SupplierForm />} />
        <Route path="/add-produto" element={<ProductForm />} />
        <Route path="/listar-produtos" element={<ProductList />} />
        <Route path="/editar-produto/:id" element={<ProductForm />} />
        <Route path="/add-cliente" element={<CostumerForm />} />
        <Route path="/listar-clientes" element={<CostumerList />} />
        <Route path="/editar-cliente/:id" element={<CostumerForm />} />
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App