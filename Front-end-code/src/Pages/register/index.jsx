import { useState } from "react"
import styled from "styled-components"
import './index.css'

const Input = styled.input `
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #ccc;
    margin-bottom: 20px
`

const Register = () => {
    const [state, setState] = useState(0)
    const [data, setData] = useState({
        nama: "Andi",
        email: "andi@coding.id",
        password: "123456",
        confirm: "123456"
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
        <div className = "register"> 
            <h1>Are you ready to become professional cheff?</h1>

            <button onClick={handleClick}>Log In</button>
            <button onClick={handleClick}>Register</button>

            <h2>Please register first</h2>

            <div style={{ marginTop: gap ? '10px' : '24px' }}>
                <div>Name</div>
                <input name="nama" onChange={(e) => handleInput(e)} />

                <div>Email</div>
                <input name="email" onChange={(e) => handleInput(e)} />

                <div>Password</div>
                <input name="password" onChange={(e) => handleInput(e)} />

                <div>Confirm Password</div>
                <input name="confirm" onChange={(e) => handleInput(e)} />
            </div>

            <button onClick={handleClick}>Sign Up</button>

            <div>Have an account? Log In</div>
            
            
        </div>
    );
}

export default Register