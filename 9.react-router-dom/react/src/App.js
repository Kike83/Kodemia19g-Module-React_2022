import { useState } from 'react'
import './App.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'
import { Link, Routes, Route } from 'react-router-dom'
import Publicaciones from './Pages/Publicaciones'
import NuevaPublicacion from './Pages/NuevaPublicacion'
import Products from './Pages/Products'
import ProductDetail from './Pages/ProductDetail'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedRoute, setSelectedRoute] = useState('')
  const toggle = () => setIsOpen(!isOpen)

  const linkHandler = event => {
    const route = event.target.name
    setSelectedRoute(route)
    console.log(route)
  }

  return (
    <div className='App'>
      <Navbar expand='md' color='dark' container='xl' dark>
        <NavbarBrand href='./'>Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='me-auto' navbar>
            <NavItem>
              <Link to='./Publicaciones' className='nav-link'>
                Publicaciones
              </Link>
            </NavItem>
            <NavItem>
              <Link to='./Nueva-Publicacion' className='nav-link'>
                Nueva Publicación
              </Link>
            </NavItem>
            <NavItem>
              <Link to='./Products' className='nav-link'>
                Productos
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-3'>
            <h1>aside 1</h1>
          </div>
          <div className='col-6'>
            <Routes>
              <Route path='/' element={<h1>Landing page
                <br />
                react-router-dom</h1>} />
              <Route path='/publicaciones' element={<Publicaciones />} />
              <Route path='/nueva-publicacion' element={<NuevaPublicacion />} />
              <Route path='/products' element={<Products />} />
              <Route path='/product-detail/:id' element={<ProductDetail />} />
            </Routes>
          </div>
          <div className='col-3'>
            <h1>aside 2</h1>
          </div>

        </div>

      </div>

    </div>
  )
}

export default App

