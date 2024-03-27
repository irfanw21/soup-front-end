import ImageNavbar from "../../assets/image-navbar-logo.png"
import { useState } from "react"
import {Box, TextField, Container, Button} from '@mui/material'
import styled from "styled-components"

import './style.css'
import '@fontsource/Montserrat/300.css';
import '@fontsource/Montserrat/400.css';
import '@fontsource/Montserrat/500.css';
import '@fontsource/Montserrat/700.css';
import HeaderAuth from "../../components/Header-auth"

const Input = styled.input `
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #ccc;
    margin-bottom: 20px
`

const CreatePassword = () => {
    
    const [data, setData] = useState({
        password: '',
        confirmPassword: ''
    })

    const [error, setError] = useState({
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
			password: '',
			confirmPassword: ''
		})
	}

    const handleClick = () => {
		handleReset();
		// if(!data.password && !data.confirmPassword) {
		// 	setError({
		// 		password: 'Password tidak boleh kosong',
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
            case !data.password && !data.confirmPassword:
                setError({
                    password: 'This field cannot be empty',
                    confirmPassword: 'This field cannot be empty'
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



    return (
        <Container>

            <HeaderAuth/>

            <div className = "register">
               

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
                        <div style={{fontWeight: 500, fontSize: '24px', marginBottom: '60px'}}>Create Password</div>
                        <TextField name='password' error={error.password}  onChange={handleInput} variant='outlined' label='New Password'  helperText={error.password} sx={{ marginBottom: '24px', fontFamily: 'Montserrat, sans-serif'}} />
						<TextField name='confirmPassword' error={error.confirmPassword} onChange={handleInput} variant='outlined' label='Confirm New Password' helperText={error.confirmPassword} sx={{fontFamily: 'Montserrat, sans-serif'}}/>
                        <Box
							marginTop={'40px'}
							display={'flex'}
							justifyContent={'end'}
							gap={'24px'}
						>
                            <Button variant="outlined" sx={[{ '&:hover': { backgroundColor: 'white', border: '1px solid #5B4947' }, width: '140px', borderRadius: '8px', backgroundColor: 'white', border: '1px solid #5B4947', color: '#5B4947', fontFamily: 'Montserrat, sans-serif'  }]}>Cancel</Button>
                            <Button variant="contained" onClick={handleClick} sx={[{ '&:hover': { backgroundColor: '#EA9E1F' }, width: '140px', borderRadius: '8px', backgroundColor: '#EA9E1F', color: '#5B4947', fontFamily: 'Montserrat, sans-serif'}]}>Submit</Button>
                        </Box>
                    </Box>
                
                </Box>

            </div>
        </Container>
    );
}

export default CreatePassword