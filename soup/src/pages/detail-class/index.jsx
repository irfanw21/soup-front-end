import tomyum from "../../assets/tomyum.png"
import sotobanjar from "../../assets/soto-banjar.png"
import sushi from "../../assets/sushi-mentai.png"
import ramen from "../../assets/ichiraku-ramen.png"
import rendang from "../../assets/rendang.png"
import pempek from "../../assets/pempek.png"
import takoyaki from "../../assets/takoyaki.png"
import jajangmeyon from "../../assets/jajangmeyon.png"
import satepadang from "../../assets/sate-padang.png"
import {Box, Container, Grid, Paper, Button} from '@mui/material'
import '@fontsource/Montserrat/300.css';
import '@fontsource/Montserrat/400.css';
import '@fontsource/Montserrat/500.css';
import '@fontsource/Montserrat/600.css';
import '@fontsource/Montserrat/700.css';
import HeaderSignIn from "../../components/Header-signed-in"
import Footer from "../../components/Footer"

const DetailClass = () => {

    const handleClick = () => {
    
    }

    const proClass = [
        {
            id: 1,
            category: 'Asian',
            name: 'Sushi Salmon with Mentai',
            price: 'IDR 200.000',
            img: sushi
        },
        {
            id: 2,
            category: 'Asian',
            name: 'Ichiraku Ramen',
            price: 'IDR 200.000',
            img: ramen
        },
        {
            id: 3,
            category: 'Asian',
            name: 'Rendang Sapi',
            price: 'IDR 200.000',
            img: rendang
        },
        {
            id: 4,
            category: 'Asian',
            name: '[Complit Package] Pempek Palembang',
            price: 'IDR 600.000',
            img: pempek
        },
        {
            id: 5,
            category: 'Asian',
            name: 'Soto Banjar Limau Kuit',
            price: 'IDR 150.000',
            img: sotobanjar
        },
        {
            id: 6,
            category: 'Asian',
            name: 'Takoyaki Octopus',
            price: 'IDR 450.000',
            img: takoyaki
            
        },
        {
            id: 7,
            category: 'Asian',
            name: 'Jajangmeyon',
            price: 'IDR 250.000',
            img: jajangmeyon
        },
        {
            id: 8,
            category: 'Asian',
            name: 'Sate Padang',
            price: 'IDR 300.000',
            img: satepadang
        }
    ]

    return (
        <Container>
        <HeaderSignIn/>
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

            <Grid container spacing={2} fontFamily={'Montserrat'}
            >
                {proClass.map((data) => (
                    <Grid item key={data.id} xs={12} sm={6} md={4}>
                        <Paper elevation={0} style={{ padding: 0 }}>
                            <div> <img src={data.img}/> </div>
                            <div style={{
                                    fontWeight: 400,
                                    fontSize: '16px',
                                    color: '#828282'
                                }}
                            > {data.category} </div>
                            <div style={{
                                    fontWeight: 600,
                                    width: '320px',
                                    height: '70px',
                                    fontSize: '20px',
                                    color: '#5B4947'
                                }}> {data.name} </div>
                            <div style={{
                                fontWeight: 600,
                                fontSize: '20px',
                                color: '#FABC1D',
                                marginBottom: '24px'
                            }}> {data.price} </div>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
            <Footer/>
        </Container>
        
    )
}

export default DetailClass