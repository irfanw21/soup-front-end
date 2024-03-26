import ImageNavbar from "../../assets/image-navbar-logo.png"
import keranjang from "../../assets/keranjang.png"
import user from "../../assets/user.png"
import logout from "../../assets/logout.png"
import tomyum from "../../assets/tomyum.png"
import sotobanjar from "../../assets/soto-banjar.png"
import sushi from "../../assets/sushi-mentai.png"
import ramen from "../../assets/ichiraku-ramen.png"
import rendang from "../../assets/rendang.png"
import pempek from "../../assets/pempek.png"
import takoyaki from "../../assets/takoyaki.png"
import jajangmeyon from "../../assets/jajangmeyon.png"
import satepadang from "../../assets/sate-padang.png"
import menuheader from "../../assets/list-menu-header.png"
import logotelp from "../../assets/logo-telp.png"
import logomail from "../../assets/logo-mail.png"
import logotele from "../../assets/logo-telegram.png"
import logoyt from "../../assets/logo-youtube.png"
import logoinsta from "../../assets/logo-insta.png"
import {Box, Container, Button} from '@mui/material'
import '@fontsource/Montserrat/300.css';
import '@fontsource/Montserrat/400.css';
import '@fontsource/Montserrat/500.css';
import '@fontsource/Montserrat/600.css';
import '@fontsource/Montserrat/700.css';

const ListMenuKelas = () => {
    return(
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    justifyItems: 'center',
                    alignItems: "center",
                    padding: '8px 50px 8px 50px'
                }}
            >
                <div><img src={ImageNavbar} /></div>
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{
                        marginRight: '30px'
                    }}><img src={keranjang} /></div>
                    <Button
                        variant="outlined"
                        sx={[{ '&:hover': { backgroundColor: 'white', border: '1px solid #5B4947' }, width: '140px', borderRadius: '8px', marginRight: '10', backgroundColor: 'white', color: '#5B4947', border: 'none', fontFamily: 'Montserrat, sans-serif' }]}>
                        My Class
                    </Button>
                    
                    <Button
                        variant="outlined"
                        sx={[{ '&:hover': { backgroundColor: 'white', border: '1px solid #5B4947' }, width: '140px', borderRadius: '8px', marginRight: '10', backgroundColor: 'white', color: '#5B4947', border: 'none', fontFamily: 'Montserrat, sans-serif' }]}>
                        Invoice
                    </Button>

                    <div style={{ border: '1px solid black', height: '30px', width: '0px', marginLeft: '10px', marginRight: '40px' }}></div>

                    <div className="flex items-center"> {/* Kontainer untuk elemen keranjang, user, dan logout */}
                        <div style={{ marginRight: '40px'}}><img src={user} /></div>
                        <div style={{ marginRight: '5px' }}><img src={logout} /></div>
                    </div>
                </div>
            </Box>

            <div 
                style={{
                    display: 'flex', 
                    justifyContent: 'center'
                }}
            ><img src={menuheader} style={{justifySelf: 'center'}}/></div>

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
                >Asian</div>

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
                <div><img src={sushi}/>
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

                <div><img src={ramen}/>
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

                <div><img src={rendang}/>
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

                <div><img src={pempek}/>
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

                <div><img src={takoyaki}/>
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

                <div><img src={jajangmeyon}/>
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

                <div><img src={satepadang}/>
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
                            }}>Sate Padang</div>
                        </div>

                        <div style={{
                            fontWeight: 600,
                            fontSize: '20px',
                            color: '#FABC1D'
                        }}>IDR 300.000</div>

                    </div>
                </div>

            </Box>

        </Container>
    )

}

export default ListMenuKelas