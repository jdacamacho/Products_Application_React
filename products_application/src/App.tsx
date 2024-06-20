import './App.css'
import { Routes , Route} from 'react-router-dom'
import Home from './components/pages/Home/Home'
import About from './components/pages/About/About'
import Error from './components/pages/Error/Error'
import Product from './components/pages/Products/Product'
import Layout from './components/common/Layout/Layout'
import Header from './components/common/Header/Header'
import BreadCrumb from './components/common/BreadCrumb/BreadCrumb'
import Footer from './components/common/Footer/Footer'
import SideBar from './components/common/SideBar/SideBar'

function App() {

  return (
    <>
      <Routes>
        <Route path='/'>
          <Route path='/' element={ 
            <Layout 
              header={<Header/>}
              breadCrumb={<BreadCrumb/>}
              sideBar={<SideBar/>}
              content={<Home/>} 
              footer={<Footer/>} /> }>
          </Route>
          <Route path='about' element={ <About/> }></Route>
          <Route path='products' element={ <Product/> }></Route>
          <Route path='*' element={ <Error/> }></Route>
        </Route>
      </Routes>
    </>
  )
}

/*<Layout
        header={<Header />}
        sideBar={<SideBar />}
        content={<Content />}
        footer={<Footer />}
      /> */
export default App
