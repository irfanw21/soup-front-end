import ImageNavbar from "../../assets/image-navbar-logo.png"
import imageTitle from "../../assets/title-bg.png"
import interludeBg from "../../assets/interlude-bg.png"
import tomyum from "../../assets/tomyum.png"
import chococookies from "../../assets/chococookies.png"
import greenteacheesecake from "../../assets/green-tea-cheesecake.png"
import sotobanjar from "../../assets/soto-banjar.png"
import strawfloat from "../../assets/strawberry-float.png"
import bolognese from "../../assets/spaghetti-bolognese.png"
import catasian from "../../assets/cat-asian.png"
import catwestern from "../../assets/cat-western.png"
import catjunkfood from "../../assets/cat-junkfood.png"
import cathotdrink from "../../assets/cat-hot-drink.png"
import cateastern from "../../assets/cat-eastern.png"
import catdessert from "../../assets/cat-dessert.png"
import catcookies from "../../assets/cat-cookies.png"
import catcolddrink from "../../assets/cat-cold-drink.png"
import logotelp from "../../assets/logo-telp.png"
import logomail from "../../assets/logo-mail.png"
import logotele from "../../assets/logo-telegram.png"
import logoyt from "../../assets/logo-youtube.png"
import logoinsta from "../../assets/logo-insta.png"
import keranjang from "../../assets/keranjang.png"
import user from "../../assets/user.png"
import logout from "../../assets/logout.png"

import { useState } from "react"
import {Box, TextField, Container, Button} from '@mui/material'
import styled from "styled-components"
import '@fontsource/Montserrat/300.css';
import '@fontsource/Montserrat/400.css';
import '@fontsource/Montserrat/500.css';
import '@fontsource/Montserrat/700.css';

const DetailClass = () => {

    const handleClick = () => {
    
    }

    return (
        <Container>
         <div className="navbar-landing">
    <div className="flex flex-space-between items-center">
        <div style={{ marginRight: '10px' }}><img src={ImageNavbar} /></div>
        <div className="flex">
            <div style={{ marginRight: '10px' }}><img src={keranjang} /></div>
            <Button
                variant="outlined"
                sx={[{ '&:hover': { backgroundColor: 'white', border: '1px solid #5B4947' }, width: '140px', borderRadius: '8px', marginRight: '10', backgroundColor: 'white', color: '#5B4947', border: 'none', fontFamily: 'Montserrat, sans-serif' }]}>
                MyClass
            </Button>
            <Button
                variant="outlined"
                sx={[{ '&:hover': { backgroundColor: 'white', border: '1px solid #5B4947' }, width: '140px', borderRadius: '8px', marginRight: '10', backgroundColor: 'white', color: '#5B4947', border: 'none', fontFamily: 'Montserrat, sans-serif' }]}>
                Invoice
            </Button>
            <div style={{ border: '1px solid black', height: '20px', width: '0px', marginLeft: '10px' }}></div>
            <div className="flex items-center"> {/* Kontainer untuk elemen keranjang, user, dan logout */}
                <div style={{ marginRight: '20px' , marginLeft:'30px' }}><img src={user} /></div>
                <div style={{ marginRight: '5px' }}><img src={logout} /></div>
            </div>
        </div>
    </div>
</div>
<Box>
<div className="flex" style={{alignItems: 'flex-start'}}>
    <div>
        <img src={tomyum} style={{ marginRight: '50px'  }}></img>
    </div>
    <div>
        <div style={{fontSize: '40px'}}>
        Tom yum thailand <br/>idr 450.000 <br/>
        </div>
        <select id="tanggal" name="tanggal" style={{marginTop: '40px', padding: '10px, 20px'}}>
            <option value="1">rabu, 27 juli 2022</option>
            <option value="2">selasa, 6 juni 2023</option>
            <option value="3">jumat, 10 oktober 2023</option>
        </select>
        <div style={{marginTop: '30px'}}>
        <Button 
                            variant="outlined"
                            sx={[{ '&:hover': { 
                                    backgroundColor: 'white', 
                                    border: '1px solid #5B4947' }, 
                                borderRadius: '8px', 
                                marginRight: '40px', 
                                backgroundColor: 'white', 
                                border: '1px solid #5B4947', 
                                color: '#5B4947', 
                                width: '233.5px',
                                fontFamily: 'Montserrat, sans-serif' }]}>
                                    Addtocart
                        </Button>
                        <Button 
                            variant="contained" 
                            onClick={handleClick} 
                            sx={[{ '&:hover': { 
                                    backgroundColor: '#EA9E1F' }, 
                                width: '140px', 
                                borderRadius: '8px', 
                                backgroundColor: '#EA9E1F', 
                                color: '#5B4947', 
                                width: '233.5px',
                                fontFamily: 'Montserrat, sans-serif'}]}>
                                    Buynow
                        </Button>
        </div>
    </div>
</div>
</Box>

           <Box
                sx={{
                    display: 'column',
                    padding: '46px 70px 46px 70px',
                    alignContent: 'center',
                    fontFamily: 'Montserrat'
                }}
            >
                <div
                    style={{
                        fontWeight: 600,
                        fontSize: '16px',
                        marginBottom: '16px'
                    }}
                >Description</div>

                <div
                    style={{
                        fontWeight: 400,
                        fontSize: '16px',
                        textAlign: 'justify',
                        color: '#333333'
                    }}
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </Box>
            <div style={{
                marginTop: '56px',
                marginBottom: '80px',
                color: '#5B4947',
                fontSize: '32px',
                fontWeight: 600,
                fontFamily: 'Montserrat',
                justifyContent: 'center',
                textAlign: 'center'
            }}>
                Another menu in this class
            </div>

            <Box
                sx={{
                    justifyContent: 'space-between',
                    gap: '24px',
                    display: 'grid',
                    gridTemplateColumns: 'auto auto auto',
                    alignContent: 'center',
                    justifyItems: 'center',
                    fontFamily: 'Montserrat',
                    marginTop: '60px'
                }}
            >
                <div><img src={tomyum}/>
                    <div
                        style={{
                            padding: '16px'
                        }}
                    >   

                        <div style={{
                            width: '318px',
                            height: '94px'
                        }}>
                            <div style={{
                                fontWeight: 400,
                                fontSize: '16px',
                                color: '#828282'
                            }}>Asian</div>

                            <div style={{
                                fontWeight: 600,
                                fontSize: '20px',
                                color: '#5B4947'
                            }}>Sushi Salmon with Mentai</div>
                        </div>

                        <div style={{
                            fontWeight: 600,
                            fontSize: '20px',
                            color: '#FABC1D'
                        }}>IDR 200.000</div>

                    </div>
                </div>

                <div><img src={tomyum}/>
                    <div
                        style={{
                            padding: '16px'
                        }}
                    >   

                        <div style={{
                            width: '318px',
                            height: '94px'
                        }}>
                            <div style={{
                                fontWeight: 400,
                                fontSize: '16px',
                                color: '#828282'
                            }}>Asian</div>

                            <div style={{
                                fontWeight: 600,
                                fontSize: '20px',
                                color: '#5B4947'
                            }}>Ichiraku Ramen</div>
                        </div>

                        <div style={{
                            fontWeight: 600,
                            fontSize: '20px',
                            color: '#FABC1D'
                        }}>IDR 300.000</div>

                    </div>
                </div>

                <div><img src={tomyum}/>
                    <div
                        style={{
                            padding: '16px'
                        }}
                    >   

                        <div style={{
                            width: '318px',
                            height: '94px'
                        }}>
                            <div style={{
                                fontWeight: 400,
                                fontSize: '16px',
                                color: '#828282'
                            }}>Asian</div>

                            <div style={{
                                fontWeight: 600,
                                fontSize: '20px',
                                color: '#5B4947'
                            }}>Rendang</div>
                        </div>

                        <div style={{
                            fontWeight: 600,
                            fontSize: '20px',
                            color: '#FABC1D'
                        }}>IDR 200.000</div>

                    </div>
                </div>

                <div><img src={tomyum}/>
                    <div
                        style={{
                            padding: '16px'
                        }}
                    >   

                        <div style={{
                            width: '318px',
                            height: '94px'
                        }}>
                            <div style={{
                                fontWeight: 400,
                                fontSize: '16px',
                                color: '#828282'
                            }}>Asian</div>

                            <div style={{
                                fontWeight: 600,
                                fontSize: '20px',
                                color: '#5B4947'
                            }}>[Complit Package] Pempek Palembang</div>
                        </div>

                        <div style={{
                            fontWeight: 600,
                            fontSize: '20px',
                            color: '#FABC1D'
                        }}>IDR 600.000</div>

                    </div>
                </div>

                <div><img src={sotobanjar}/>
                    <div
                        style={{
                            padding: '16px'
                        }}
                    >   

                        <div style={{
                            width: '318px',
                            height: '94px'
                        }}>
                            <div style={{
                                fontWeight: 400,
                                fontSize: '16px',
                                color: '#828282'
                            }}>Asian</div>

                            <div style={{
                                fontWeight: 600,
                                fontSize: '20px',
                                color: '#5B4947'
                            }}>Soto Banjar</div>
                        </div>

                        <div style={{
                            fontWeight: 600,
                            fontSize: '20px',
                            color: '#FABC1D'
                        }}>IDR 150.000</div>

                    </div>
                </div>

                <div><img src={tomyum}/>
                    <div
                        style={{
                            padding: '16px'
                        }}
                    >   

                        <div style={{
                            width: '318px',
                            height: '94px'
                        }}>
                            <div style={{
                                fontWeight: 400,
                                fontSize: '16px',
                                color: '#828282'
                            }}>Asian</div>

                            <div style={{
                                fontWeight: 600,
                                fontSize: '20px',
                                color: '#5B4947'
                            }}>Tom Yum Thailand</div>
                        </div>

                        <div style={{
                            fontWeight: 600,
                            fontSize: '20px',
                            color: '#FABC1D'
                        }}>IDR 450.000</div>

                    </div>
                </div>

                <div><img src={tomyum}/>
                    <div
                        style={{
                            padding: '16px'
                        }}
                    >   

                        <div style={{
                            width: '318px',
                            height: '94px'
                        }}>
                            <div style={{
                                fontWeight: 400,
                                fontSize: '16px',
                                color: '#828282'
                            }}>Asian</div>

                            <div style={{
                                fontWeight: 600,
                                fontSize: '20px',
                                color: '#5B4947'
                            }}>Takoyaki Octopus</div>
                        </div>

                        <div style={{
                            fontWeight: 600,
                            fontSize: '20px',
                            color: '#FABC1D'
                        }}>IDR 150.000</div>

                    </div>
                </div>

                <div><img src={tomyum}/>
                    <div
                        style={{
                            padding: '16px'
                        }}
                    >   

                        <div style={{
                            width: '318px',
                            height: '94px'
                        }}>
                            <div style={{
                                fontWeight: 400,
                                fontSize: '16px',
                                color: '#828282'
                            }}>Asian</div>

                            <div style={{
                                fontWeight: 600,
                                fontSize: '20px',
                                color: '#5B4947'
                            }}>Jajangmeyon</div>
                        </div>

                        <div style={{
                            fontWeight: 600,
                            fontSize: '20px',
                            color: '#FABC1D'
                        }}>IDR 250.000</div>

                    </div>
                </div>
            </Box>
        </Container>
        
    )
}

export default DetailClass