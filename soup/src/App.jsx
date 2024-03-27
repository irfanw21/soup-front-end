import './App.css'
import Homepage from './pages/homepage'
import EmailConfirmation from "./pages/email-confirmation"
import Detail from "./pages/detail/detail"
import Register from './pages/register'
import CreatePassword from './pages/create-password'
import LandingPage from './pages/landing'
import ListMenuKelas from './pages/list-menu-kelas'
import DetailProduk from './pages/detail-produk'
import Checkout from './pages/checkout'
import { Routes, Route } from 'react-router-dom'
import Layout from "./layouts"
import Login from './pages/login'
import CustomizedTables from './pages/invoice'
import DetailClass from './pages/detail-class'
import AfterClass from './pages/after-class'
import ForgotPassword from './pages/reset-password'
import PaymentSuccess from './pages/payment-success'

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
            // <Checkout/>

    // </>
    <Routes>
          <Route index element={<Homepage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/paymentsuccess' element={<PaymentSuccess/>} />
          <Route path='/email-confirmation' element={<EmailConfirmation />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/create-password' element={<CreatePassword />} />
          <Route path='/detail-produk' element={<DetailProduk />} />
          <Route path='/landing' element={<LandingPage/>} />
          <Route path='/list-menu-kelas' element={<ListMenuKelas/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/invoice' element={<CustomizedTables/>} />
          <Route path='/detail-class' element={<DetailClass/>} />
          <Route path='/after-class' element={<AfterClass/>} />
          <Route path='/reset-password' element={<ForgotPassword/>} />
          <Route path='/payment-success' element={<PaymentSuccess/>} />
      </Routes>
  )
}

export default App
