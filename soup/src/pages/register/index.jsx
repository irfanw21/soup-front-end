import {Box, TextField, Container, Button} from '@mui/material'
import ImageNavbar from "../../assets/image-navbar-logo.png"
import { useState } from "react"
import styled from "styled-components"
import './index.css'
import '@fontsource/Montserrat/300.css';
import '@fontsource/Montserrat/400.css';
import '@fontsource/Montserrat/500.css';
import '@fontsource/Montserrat/700.css';

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
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const gap = false

    const [error, setError] = useState({
        name: '',
        email: '',
		password: '',
		confirmPassword: ''
	})

    const handleInput = (e) => {
        const value = e.target.value
        const name = e.target.name

        setData({
            ...data, // spread operator supaya ngetrack apa yang diubah
            [name]: value
            // nama: value
        })
    }

    // const [state, setState] = useState(0)

    const handleReset = () => {
		setError({
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
		})
	}

    const handleClick = () => {
		handleReset();
		// if(!data.password && !data.confirmPassword) {
		// 	setError({
		// 		password: 'This Field Cannot Be Empty',
		// 		confirmPassword: 'Confirm Password tidak boleh kosong'
		// 	})
		// } else if(!data.password){
		// 	setError({
		// 		password: 'Password tidak boleh kosong'
		// 	})
		// } else if(!data.confirmPassword) {
		// 	setError({
		// 		confirmPassword: 'Confirm Password tidak boleh kosong'
		// 	})
		// }

        switch (true) {
            case !data.name && !data.email && !data.password && !data.confirmPassword:
                setError({
                    name: 'This Field Cannot Be Empty',
                    email: 'This Field Cannot Be Empty',
                    password: 'This Field Cannot Be Empty',
                    confirmPassword: 'This Field Cannot Be Empty'
                });
                break;

            case !data.name && !data.email && !data.password: // hanya confirm password terisi
                setError({
                    name: 'This Field Cannot Be Empty',
                    email: 'This Field Cannot Be Empty',
                    password: 'This Field Cannot Be Empty',
                });
                break;

            case !data.name && !data.email && !data.confirmPassword: // hanya password terisi
                    setError({
                      name: 'This Field Cannot Be Empty',
                      email: 'This Field Cannot Be Empty',
                      confirmPassword: 'This Field Cannot Be Empty'
                    });
                    break;

            case !data.name && !data.password && !data.confirmPassword: //hanya email terisi
                setError({
                    name: 'This Field Cannot Be Empty',
                    password: 'This Field Cannot Be Empty',
                    confirmPassword: 'This Field Cannot Be Empty'
                });
                break;

            case !data.email && !data.password && !data.confirmPassword: // hanya nama terisi
                setError({
                    email: 'This Field Cannot Be Empty',
                    password: 'This Field Cannot Be Empty',
                    confirmPassword: 'This Field Cannot Be Empty'
                });
                break;

            case !data.name && !data.email:
                setError({
                    name: 'This Field Cannot Be Empty',
                    email: 'This Field Cannot Be Empty'
                });
                break;

            case !data.name && !data.password:
                setError({
                    name: 'This Field Cannot Be Empty',
                    password: 'This Field Cannot Be Empty'
                });
                break;

            case !data.name && !data.confirmPassword:
                setError({
                    name: 'This Field Cannot Be Empty',
                    confirmPassword: 'This Field Cannot Be Empty'
                });
                break;
            
            case !data.email && !data.password:
                setError({
                    email: 'This Field Cannot Be Empty',
                    password: 'This Field Cannot Be Empty'
                });
                break;

            case !data.email && !data.confirmPassword:
                setError({
                    email: 'This Field Cannot Be Empty',
                    confirmPassword: 'This Field Cannot Be Empty'
                });
                break;

            case !data.password && !data.confirmPassword:
                setError({
                    password: 'This Field Cannot Be Empty',
                    confirmPassword: 'This Field Cannot Be Empty'
                });
                break;

            case !data.name:
                setError({
                    name: 'This Field Cannot Be Empty'
                });
            break;
            
            case !data.email:
                setError({
                    email: 'This Field Cannot Be Empty',
                });
                break;

            case !data.password:
                setError({
                    password: 'This Field Cannot Be Empty'
                });
                break;

            case !data.confirmPassword:
                setError({
                    confirmPassword: 'This Field Cannot Be Empty'
                });
                break;

            default:
              // Default case
          }
	}


    console.log(data)

    return (
        <Container>
            <div className = "register">
            <div className='flex flex-space-between'>
                    <div className='mr-10'><img src={ImageNavbar} /></div>
                    <div>
                        <Button variant="outlined" sx={[{ '&:hover': { backgroundColor: 'white', border: '1px solid #5B4947' }, width: '140px', borderRadius: '8px', marginRight: '40px', backgroundColor: 'white', border: '1px solid #5B4947', color: '#5B4947', fontFamily: 'Montserrat, sans-serif' }]}>Login</Button>
                        <Button variant="contained" onClick={handleClick} sx={[{ '&:hover': { backgroundColor: '#EA9E1F' }, width: '140px', borderRadius: '8px', backgroundColor: '#EA9E1F', color: '#5B4947', fontFamily: 'Montserrat, sans-serif'}]}>Register</Button>
                    </div>
                </div>

                <Box
                display={'flex'}
                justifyContent={'center'}
                marginTop={'60px'}
                fontFamily= {'Montserrat, sans-serif'}
                >
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                        width={'50%'}
                    >
                        <div style={{fontWeight: 500, fontSize: '24px'}}>Are you ready to become professional cheff?</div>

                        <div style={{fontWeight: 400, fontSize: '16px',marginTop: '16px', marginBottom: '40px'}}>Please register first</div>

                        
                            <TextField name='name' error={error.name}  onChange={handleInput} variant='outlined' label='Name'  helperText={error.name} sx={{ marginBottom: '24px', fontFamily: 'Montserrat, sans-serif'}} />

                            <TextField name='email' error={error.email}  onChange={handleInput} variant='outlined' label='Email'  helperText={error.email} sx={{ marginBottom: '24px', fontFamily: 'Montserrat, sans-serif'}} />

                            <TextField name='password' error={error.password}  onChange={handleInput} variant='outlined' label='Password'  helperText={error.password} sx={{ marginBottom: '24px', fontFamily: 'Montserrat, sans-serif'}} />

                            <TextField name='confirmPassword' error={error.confirmPassword}  onChange={handleInput} variant='outlined' label='Confirm Password'  helperText={error.confirmPassword} sx={{ marginBottom: '24px', fontFamily: 'Montserrat, sans-serif'}} />
                        

                        <Box
							marginTop={'40px'}
							display={'flex'}
							justifyContent={'end'}
							gap={'24px'}
                            fontFamily= {'Montserrat, sans-serif'}
						>
                            <Button variant="contained" onClick={handleClick} sx={[{ '&:hover': { backgroundColor: '#EA9E1F' }, width: '140px', borderRadius: '8px', backgroundColor: '#EA9E1F', color: '#5B4947', fontFamily: 'Montserrat, sans-serif'}]}>Sign Up</Button>
                        </Box>
                        <Box
							marginTop={'40px'}
							display={'flex'}
							justifyContent={'center'}
                            gap={'3px'}
                            fontFamily= {'Montserrat, sans-serif'}
						>
                            Have an account? 
                            <a href="/login" style={{ color: 'blue', textDecoration: 'none', cursor: 'pointer'}}>
                            Log In Here
                            </a>
                        </Box>
                    </Box>
                
                </Box>

            </div>
        </Container>
    );
}

export default Register