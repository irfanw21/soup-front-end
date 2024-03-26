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
import { useState } from "react"
import {Box, TextField, Container, Button} from '@mui/material'
import styled from "styled-components"
import '@fontsource/Montserrat/300.css';
import '@fontsource/Montserrat/400.css';
import '@fontsource/Montserrat/500.css';
import '@fontsource/Montserrat/600.css';
import '@fontsource/Montserrat/700.css';

const LandingPage = () => {

    const handleClick = () => {
    
    }

    return (
        <Container>
            <div className = "navbar-landing">
                <div className='flex flex-space-between'>
                    <div style={{marginRight: '10px'}}><img src={ImageNavbar} /></div>
                    <div>
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
                        <Button 
                            variant="contained" 
                            onClick={handleClick} 
                            sx={[{ '&:hover': { 
                                    backgroundColor: '#EA9E1F' }, 
                                width: '140px', 
                                borderRadius: '8px', 
                                backgroundColor: '#EA9E1F', 
                                color: '#5B4947', 
                                fontFamily: 'Montserrat, sans-serif'}]}>
                                    Register
                        </Button>
                    </div>
                </div>
            </div>

            <Box
                sx={{
                    display: 'flex',
                    height: '274px',
                    justifyContent: 'center',
                    backgroundImage: `url(${imageTitle})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    alignItems: 'center', 
                    fontFamily: 'Montserrat'
                }}
            >
                <Box
                    sx={{
                        color: 'white',
                        textAlign: 'center'
                    }}
                >
                    <Box 
                        sx={{
                            marginBottom: '27px',
                            fontSize: '32px',
                            fontWeight: 600
                        }}
                    >
                        Be the next great chef
                    </Box>
                    <Box
                        sx={{
                            fontSize: '24px',
                            fontWeight: 400
                        }}
                    >
                        We are able to awaken your cooking skills to become a classy chef and<br/> ready to dive into the professional world
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    justifyContent: 'space-between',
                    gap: '40px',
                    display: 'grid',
                    gridTemplateColumns: 'auto auto auto',
                    alignContent: 'center',
                    justifyItems: 'center',
                    fontFamily: 'Montserrat',
                    marginTop: '60px'
                }}
            >
                <div style={{
                    width: '324px',
                    height: '207px',
                    borderRadius: '20px',
                    padding: '16px',
                    border: '1px solid #BDBDBD',
                    gap: '31px'
                }}>
                    <div style={{
                        fontSize: '48px',
                        fontWeight: '600px',
                        color: '#FABC1D',
                        textAlign: 'center'
                    }}>
                        200+
                    </div>

                    <div style={{
                        fontSize: '16px',
                        fontWeight: '500px',
                        color: '#5B4947',
                        textAlign: 'center',
                        marginTop: '31px'
                    }}>
                        Various cuisines available in<br/>professional class
                    </div>

                </div>

                <div style={{
                    width: '324px',
                    height: '207px',
                    borderRadius: '20px',
                    padding: '16px',
                    border: '1px solid #BDBDBD',
                    gap: '31px'
                }}>
                    <div style={{
                        fontSize: '48px',
                        fontWeight: '600px',
                        color: '#FABC1D',
                        textAlign: 'center'
                    }}>
                        50+
                    </div>

                    <div style={{
                        fontSize: '16px',
                        fontWeight: '500px',
                        color: '#5B4947',
                        textAlign: 'center',
                        marginTop: '31px'
                    }}>
                        A chef who is reliable and has his<br/> own characteristics in cooking
                    </div>

                </div>

                <div style={{
                    width: '324px',
                    height: '207px',
                    borderRadius: '20px',
                    padding: '16px',
                    border: '1px solid #BDBDBD',
                    gap: '31px'
                }}>
                    <div style={{
                        fontSize: '48px',
                        fontWeight: '600px',
                        color: '#FABC1D',
                        textAlign: 'center'
                    }}>
                        30+
                    </div>

                    <div style={{
                        fontSize: '16px',
                        fontWeight: '500px',
                        color: '#5B4947',
                        textAlign: 'center',
                        marginTop: '31px'
                    }}>
                        Cooperate with trusted and upscale <br/>restaurants
                    </div>

                </div>
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
                More professional class
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
                            }}>Tom Yum Thailand</div>
                        </div>

                        <div style={{
                            fontWeight: 600,
                            fontSize: '20px',
                            color: '#FABC1D'
                        }}>IDR 450.000</div>

                    </div>
                </div>

                <div><img src={strawfloat}/>
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
                            }}>Cold Drink</div>

                            <div style={{
                                fontWeight: 600,
                                fontSize: '20px',
                                color: '#5B4947'
                            }}>Strawberry Float</div>
                        </div>

                        <div style={{
                            fontWeight: 600,
                            fontSize: '20px',
                            color: '#FABC1D'
                        }}>IDR 150.000</div>

                    </div>
                </div>

                <div><img src={chococookies}/>
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
                            }}>Cookies</div>

                            <div style={{
                                fontWeight: 600,
                                fontSize: '20px',
                                color: '#5B4947'
                            }}>Chocolate Cookies</div>
                        </div>

                        <div style={{
                            fontWeight: 600,
                            fontSize: '20px',
                            color: '#FABC1D'
                        }}>IDR 200.000</div>

                    </div>
                </div>

                <div><img src={greenteacheesecake}/>
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
                            }}>Dessert</div>

                            <div style={{
                                fontWeight: 600,
                                fontSize: '20px',
                                color: '#5B4947'
                            }}>Green Tea Cheesecake</div>
                        </div>

                        <div style={{
                            fontWeight: 600,
                            fontSize: '20px',
                            color: '#FABC1D'
                        }}>IDR 400.000</div>

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

                <div><img src={bolognese}/>
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
                            }}>Western</div>

                            <div style={{
                                fontWeight: 600,
                                fontSize: '20px',
                                color: '#5B4947'
                            }}>Italian Spaghetti Bolognese</div>
                        </div>

                        <div style={{
                            fontWeight: 600,
                            fontSize: '20px',
                            color: '#FABC1D'
                        }}>IDR 450.000</div>

                    </div>
                </div>

            </Box>

            <Box
                sx={{
                    display: 'flex',
                    height: '233px',
                    backgroundImage: `url(${interludeBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontFamily: 'Montserrat',
                    marginTop: '133.33px',
                    padding: '40px 80px 40px 80px'
                }}
            >
                <Box
                    sx={{
                        color: 'white'
                    }}
                >
                    <Box 
                        sx={{
                            marginBottom: '27px',
                            fontSize: '40px',
                            fontWeight: 600
                        }}
                    >
                        Gets your best benefit
                    </Box>
                    <Box
                        sx={{
                            fontSize: '16px',
                            fontWeight: 500
                        }}
                    >
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.
                    </Box>
                </Box>
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
                More food type as you can choose
            </div>

            <Box
                sx={{
                    justifyContent: 'space-around',
                    gap: '24px',
                    display: 'grid',
                    gridTemplateColumns: '24px 24px 24px 24px',
                    alignItems: 'center',
                    alignContent: 'center',
                    justifyItems: 'center',
                    fontFamily: 'Montserrat',
                    marginTop: '80px'
                }}
            >
                <div><img  style={{
                    border: '1px solid #BDBDBD',
                    borderRadius: '8px'
                }} src={catasian}/>
                    <div
                        style={{
                            padding: '16px'
                        }}
                    >   

                        <div>
                            <div style={{
                                fontWeight: 400,
                                fontSize: '24px',
                                color: 'black',
                                textAlign: 'center'
                            }}>Asian</div>

                        </div>
                    </div>
                </div>

                <div><img style={{
                    border: '1px solid #BDBDBD',
                    borderRadius: '8px'
                }} src={catcolddrink}/>
                    <div
                        style={{
                            padding: '16px'
                        }}
                    >   

                        <div>
                            <div style={{
                                fontWeight: 400,
                                fontSize: '24px',
                                color: 'black',
                                textAlign: 'center'
                            }}>Cold Drink</div>
                        </div>
                    </div>
                </div>

                <div><img style={{
                    border: '1px solid #BDBDBD',
                    borderRadius: '8px'
                }} src={catcookies}/>
                    <div
                        style={{
                            padding: '16px'
                        }}
                    >   

                        <div>
                            <div style={{
                                fontWeight: 400,
                                fontSize: '24px',
                                color: 'black',
                                textAlign: 'center'
                            }}>Cookies</div>
                        </div>
                    </div>
                </div>

                <div><img  style={{
                    border: '1px solid #BDBDBD',
                    borderRadius: '8px'
                }} src={catdessert}/>
                    <div
                        style={{
                            padding: '16px'
                        }}
                    >   

                        <div>
                            <div style={{
                                fontWeight: 400,
                                fontSize: '24px',
                                color: 'black',
                                textAlign: 'center'
                            }}>Dessert</div>
                        </div>
                    </div>
                </div>

                <div><img style={{
                    border: '1px solid #BDBDBD',
                    borderRadius: '8px'
                }} src={cateastern}/>
                    <div
                        style={{
                            padding: '16px'
                        }}
                    >   

                        <div>
                            <div style={{
                                fontWeight: 400,
                                fontSize: '24px',
                                color: 'black',
                                textAlign: 'center'
                            }}>Eastern</div>

                        </div>
                    </div>
                </div>

                <div><img  style={{
                    border: '1px solid #BDBDBD',
                    borderRadius: '8px'
                }} src={cathotdrink}/>
                    <div
                        style={{
                            padding: '16px'
                        }}
                    >   

                        <div>
                            <div style={{
                                fontWeight: 400,
                                fontSize: '24px',
                                color: 'black',
                                textAlign: 'center'
                            }}>Hot Drink</div>

                        </div>
                    </div>
                </div>

                <div><img  style={{
                    border: '1px solid #BDBDBD',
                    borderRadius: '8px'
                }} src={catjunkfood}/>
                    <div
                        style={{
                            padding: '16px'
                        }}
                    >   

                        <div>
                            <div style={{
                                fontWeight: 400,
                                fontSize: '24px',
                                color: 'black',
                                textAlign: 'center'
                            }}>Junkfood</div>

                        </div>
                    </div>
                </div>

                <div><img  style={{
                    border: '1px solid #BDBDBD',
                    borderRadius: '8px'
                }} src={catwestern}/>
                    <div
                        style={{
                            padding: '16px'
                        }}
                    >   

                        <div>
                            <div style={{
                                fontWeight: 400,
                                fontSize: '24px',
                                color: 'black',
                                textAlign: 'center'
                            }}>Western</div>

                        </div>
                    </div>
                </div>

            </Box>

            <div
                style={{
                    display: 'flex',
                    background: '#5B4947',
                    backgroundPosition: 'center',
                    alignItems: 'center', 
                    fontFamily: 'Montserrat',
                    marginTop: '147px'
                }}
            >
                <Box
                    sx={{
                        justifyContent: 'space-around',
                        gap: '80px',
                        display: 'grid',
                        gridTemplateColumns: 'auto auto auto',
                        alignItems: 'center',
                        alignContent: 'center',
                        justifyItems: 'center',
                        fontFamily: 'Montserrat',
                        paddingTop: '24px',
                        paddingLeft: '95px',
                        paddingRight: '95px',
                        paddingBottom: '24px'
                    }}
                >
                    <div
                        style={{
                            alignContent: 'center'
                        }}    
                    >
                        <div
                            style={{
                                fontWeight: 500,
                                fontSize: '16px',
                                color: '#FABC1D'
                            }}
                        >About Us</div>

                        <div
                            style={{
                                fontWeight: 400,
                                fontSize: '14px',
                                textAlign: 'justify'
                            }}
                        >
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                        </div>
                    </div>

                    <div
                        style={{
                            alignContent: 'center'
                        }}    
                    >
                        <div
                            style={{
                                fontWeight: 500,
                                fontSize: '16px',
                                color: '#FABC1D'
                            }}
                        >Product</div>

                        <div
                            style={{
                                fontWeight: 400,
                                fontSize: '14px',
                                textAlign: 'justify'
                            }}
                        >
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                        </div>
                    </div>

                    <div
                        style={{
                            alignContent: 'center'
                        }}    
                    >
                        <div
                            style={{
                                fontWeight: 500,
                                fontSize: '16px',
                                color: '#FABC1D'
                            }}
                        >Address</div>

                        <div
                            style={{
                                fontWeight: 400,
                                fontSize: '14px',
                                textAlign: 'justify'
                            }}
                        >
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
                        </div>

                        <div
                            style={{
                                fontWeight: 500,
                                fontSize: '16px',
                                color: '#FABC1D',
                                marginTop: '16px'
                            }}
                        >Contact Us</div>

                        <Box
                            sx={{
                                display: "flex",
                                gap: '16px',
                                marginTop: '8px'
                            }}
                        >
                            <div><img src={logotelp}/></div>
                            <div><img src={logoinsta}/></div>
                            <div><img src={logoyt}/></div>
                            <div><img src={logotele}/></div>
                            <div><img src={logomail}/></div>
                            
                        </Box>

                    </div>

                    
                </Box>
            </div>
        </Container>
        
    )
}

export default LandingPage