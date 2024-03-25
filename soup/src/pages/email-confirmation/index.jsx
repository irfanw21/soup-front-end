import './style.css'
import { Container } from '@mui/material'
import ImageNavbar from "../../assets/image-navbar-logo.png"
import ImageBody from "../../assets/image-body-confirm.png"

const EmailConfirmation = () => {
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
                    <div className='mt-40 text-24 font-500 text-brown'>Email Confirmation Success</div>
                    <div className='mt-8 text-16 text-gray-light'>Congratulations! your email has already used.</div>
                    <div className='mt-40'>
                        <button className='px-24 py-16 bg-yellow text-brown border-none rounded-6 font-600'>Login Here</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default EmailConfirmation