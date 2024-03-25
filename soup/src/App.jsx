import './App.css'
import Homepage from './pages/homepage'
import EmailConfirmation from "./pages/email-confirmation"
import Detail from "./pages/detail/detail"
import Register from './pages/register'
import CreatePassword from './pages/create-password'
import LandingPage from './pages/landing'
import DetailProduk from './pages/detail-produk'
import { Routes, Route } from 'react-router-dom'
import Layout from "./layouts"

function App() {


  return (
    // <>
    //     {/* <Register/> */}
    //     {/* <CreatePassword/> */}
    //     {/* <Detail/> */}
        // <LandingPage/>

    // </>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='/register' element={<Register />} />
          <Route path='/email-confirmation' element={<EmailConfirmation />} />
          <Route path='/detail' element={<Detail />} />
          <Route path='/create-password' element={<CreatePassword />} />
          <Route path='/landing' element={<LandingPage/>} />
          <Route path='/detail-produk' element={<DetailProduk/>} />
        </Route>
      </Routes>
  )
}

export default App
