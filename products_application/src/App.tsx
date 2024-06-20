import './App.css'
import { Routes , Route} from 'react-router-dom'
import Home from './components/pages/Home/Home'
import About from './components/pages/About/About'
import Error from './components/pages/Error/Error'
import Product from './components/pages/Products/Product'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Home></Home> }>
          <Route path='about' element={ <About></About> }></Route>
          <Route path='products' element={ <Product></Product> }></Route>
          <Route path='*' element={ <Error></Error> }></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
