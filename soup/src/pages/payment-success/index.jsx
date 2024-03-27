import './index.css'
import { Container } from '@mui/material'
import ImageNavbar from "../../assets/image-navbar-logo.png"
import ImageBody from "../../assets/image-body-confirm.png"
import {Link} from "react-router-dom"
import rumah from "../../assets/Rumah.png"
import arrow from "../../assets/arrow_forward.png"

const PaymentSuccess = () => {
    return (
        <Container>
            <div className="navbar-email-confirmation">
                <div className='flex items-center'>
                    <div className='mr-10'><img src={ImageNavbar} /></div>
                </div>
            </div>

            <div className="body-email-confirmation">
                <div className='flex flex-col items-center'>
                    <div ><img src={ImageBody} /></div>
                    <div className='mt-40 text-24 font-500 text-brown'>Purchase Successfully</div>
                    <div className='mt-8 text-16 text-gray-light'>Horay!! Let’s cook and become a professional cheff</div>
                    <div className='mt-40'>
                    <Link to="/after-class">
                            <button className='px-24 py-16 bg-yellow text-brown border-none rounded-6 font-600' style={{marginRight: '10px', width:'182px', height:'50px'}}>
                                <img style={{marginRight:"10px"}} src={rumah}/>Back to Home
                            </button>
                        </Link>
                        <Link to="/invoice">
                            <button className='px-24 py-16 bg-yellow text-brown border-none rounded-6 font-600' style={{width: "182px", height:"50px"}}>
                                <img style={{marginRight:"10px"}} src={arrow}/>Open Invoice
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default PaymentSuccess