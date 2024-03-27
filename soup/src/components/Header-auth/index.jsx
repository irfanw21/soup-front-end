import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/image-navbar-logo.png'
import keranjang from '../../assets/keranjang.png'
import user from '../../assets/user.png'
import logout from '../../assets/logout.png'
import { Box, Button } from '@mui/material'
import './index.css'

const HeaderAuth = () => {
    return (
      <header>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingRight: '50px',
            paddingLeft: '50px'
        }}>
            <div style={{marginRight: '10px'}}>
                <img src={logo} alt="Logo" />
            </div>
            <Box>
                <Link to="/login">
                    <Button 
                        variant="outlined"
                        sx={[{ '&:hover': { 
                                backgroundColor: 'white', 
                                border: '1px solid #5B4947' }, 
                            width: '140px', borderRadius: '8px', 
                            marginRight: '40px', 
                            backgroundColor: 'white', 
                            border: '1px solid #5B4947', 
                            color: '#5B4947', 
                            fontFamily: 'Montserrat, sans-serif' }]}>
                                Login
                        </Button>
                </Link>
                <Link to="/register">
                    <Button 
                        variant="contained" 
                        sx={[{ '&:hover': { 
                                backgroundColor: '#EA9E1F' }, 
                            width: '140px', 
                            borderRadius: '8px', 
                            backgroundColor: '#EA9E1F', 
                            color: '#5B4947', 
                            fontFamily: 'Montserrat, sans-serif'}]}>
                                Register
                    </Button>
                </Link>

                
            </Box>
        </div>
      </header>
    );
  }
  
  export default HeaderAuth;