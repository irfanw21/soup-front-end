import './App.css'
import Homepage from './pages/homepage'
import EmailConfirmation from "./pages/email-confirmation"
import Detail from "./pages/detail/detail"
import Register from './pages/register'
import CreatePassword from './pages/create-password'
import LandingPage from './pages/landing'
import ListMenuKelas from './pages/list-menu-kelas'
import DetailProduk from './pages/detail-produk'
import HeaderAuth from './components/Header-auth'
import { Routes, Route } from 'react-router-dom'
import Layout from "./layouts"
import HeaderSignIn from './components/Header-signed-in'
import Login from './pages/login'
import Footer from './components/Footer'

function App() {


  return (
    // <>
    //     {/* <Register/> */}
    //     {/* <CreatePassword/> */}
    //     {/* <Detail/> */}
    //     {/* <LandingPage/> */}
    //     {/* <ListMenuKelas/> */}
    //     {/* <HeaderAuth/> */}
    //     {/* <HeaderSignIn/> */}
    //     {/* <Login/> */}
    //     {/* <Footer/> */}

    // </>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/email-confirmation' element={<EmailConfirmation />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/create-password' element={<CreatePassword />} />
          <Route path='/detail-product' element={<DetailProduk />} />
          <Route path='/landing' element={<LandingPage/>} />
          <Route path='/list-menu-kelas' element={<ListMenuKelas/>} />
        </Route>
      </Routes>
  )
}

export default App
