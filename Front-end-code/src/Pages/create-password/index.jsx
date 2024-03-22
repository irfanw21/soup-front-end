import { Container } from '@mui/material'
import ImageNavbar from "../../assets/image-navbar-logo.png"
import { useState } from "react"
import TextField from '@mui/material/TextField'
import styled from "styled-components"
import './style.css'

const Input = styled.input `
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #ccc;
    margin-bottom: 20px
`

const CreatePassword = () => {
    const [state, setState] = useState(0)
    const [data, setData] = useState({
        password: '123456',
        newpassword: '7891011'
    })
    const gap = false

    const handleClick = () => {
        
    }

    const handleInput = (e) => {
        const value = e.target?.value
        const name = e.target?.name

        setData({
            ...data, // spread operator supaya ngetrack apa yang diubah
            [name]: value
            // nama: value
        })
    }

    console.log(data)

    return (
        <Container>
            <div className = "register">
                <div className='flex flex-space-between'>
                    <div className='mr-10'><img src={ImageNavbar} /></div>
                    <div>
                        <button style={{marginRight: '40px'}} className='button-standard px-20 py-10 bg-white text-brown border-black rounded-6 font-500 fontsize-15' onClick={handleClick}>Log In</button>
                        <button className='button-standard px-20 py-10 bg-yellow text-brown border-none rounded-6 font-500 fontsize-15' onClick={handleClick}>Register</button>
                    </div>
                </div>

                <div className='body-register'>
                    <div className='flex flex-col items-center'>
                        <div style={{fontWeight: 500, fontSize: '24px'}}>Create Password</div>

                        <div style={{ marginTop: gap ? '10px' : '24px' }}>
                            <div style={{marginBottom: '24px'}}>
                                <input name="password" onChange={(e) => handleInput(e)} placeholder='New Password' />
                            </div>

                            <div style={{marginBottom: '24px'}}>
                            <input name="newpassword" onChange={(e) => handleInput(e)} placeholder='Confirm Password'/>
                            </div>

                        </div>

                        <div style={{marginTop: '40px'}}>
                            <button style={{marginRight: '24px'}} className='button-confirmation px-20 py-10 bg-white text-brown border-black rounded-8 font-500 fontsize-15' onClick={handleClick}>Cancel</button>
                            <button  className='button-confirmation px-10 py-10 bg-yellow text-brown border-none rounded-8 font-500 fontsize-15'>Submit</button>
                        </div>
                    </div>
                
                </div>

            </div>
        </Container>
    );
}

export default CreatePassword