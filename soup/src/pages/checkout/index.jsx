import React, { useState } from 'react';
import { Checkbox, FormGroup, FormControlLabel, Box, Container, Grid, Button} from '@mui/material';
import { Card, CardContent } from '@mui/material';
import ramen from "../../assets/ichiraku-ramen.png"
import tomyum from "../../assets/tomyum.png"
import bolognese from "../../assets/spaghetti-bolognese.png"
import trash from "../../assets/delete.png"
import '@fontsource/Montserrat/300.css';
import '@fontsource/Montserrat/400.css';
import '@fontsource/Montserrat/500.css';
import '@fontsource/Montserrat/600.css';
import '@fontsource/Montserrat/700.css';
import HeaderSignIn from "../../components/Header-signed-in"

const Checkout = () => {

    const [selectedClass, setSelectedClass] = useState([]);

    const proClass = [
        { id: 1, category: "Asian", name: "Tom Yum Thailand", schedule: "Wednesday, 27 July 2022", price: "IDR 450.000", img: tomyum },
        { id: 2, category: "Asian", name: "Ichiraku Ramen", schedule: "Sunday, 24 July 2022", price: "IDR 300.000", img: ramen },
        { id: 3, category: "Eastern", name: "Italian Spaghetti Bolognese", schedule: "Monday, 25 July 2022", price: "IDR 450.000",img: bolognese }
    ]

    const handleToggle = (id) => {
        const currentIndex = selectedClass.indexOf(id);
        const newChecked = [...selectedClass];
    
        if (currentIndex === -1) {
        newChecked.push(id);
        } else {
        newChecked.splice(currentIndex, 1);
        }
        setSelectedClass(newChecked);
    };

    const handleSelectAll = (event) => {
        if (event.target.checked) {
          const allClassIds = proClass.map(proClass => proClass.id);
          setSelectedClass(allClassIds);
        } else {
          setSelectedClass([]);
        }
    };

    return (
        <Container>
            <HeaderSignIn/>

            <div>
                <FormGroup sx={{ borderBottom: "2px solid rgba(0,0,0,0.2)"}}>
                <FormControlLabel
                    control={
                    <Checkbox
                        checked={selectedClass.length === proClass.length}
                        onChange={handleSelectAll}
                        indeterminate={selectedClass.length > 0 && selectedClass.length < proClass.length}
                    />
                    }
                    label="Select All"
                />
                </FormGroup>
                <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'column'}} >
                    {proClass.map((proClass) => (
                    <Grid item xs={12} sm={6} md={4} key={proClass.id}  >
                        <Card sx={{ borderBottom: "2px solid rgba(0,0,0,0.2)", width: '1140px'}}>
                            <CardContent>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                        checked={selectedClass.includes(proClass.id)}
                                        onChange={() => handleToggle(proClass.id)}
                                        />
                                    }
                                    label={<>
                                        <Box sx={{ display:'flex' , justifyContent: 'space-between'}}>
                                            <div><img src={proClass.img} alt={proClass.name} style={{width: '100%'}} /> </div>
                                            <Box
                                                sx={{
                                                    padding: '10px 100px 10px 24px',
                                                    width: '500px'
                                                }}
                                            >
                                                <div style={{
                                                    fontWeight: 400,
                                                    fontSize: '16px',
                                                    color: '#828282'
                                                }}> {proClass.category}</div>

                                                <div style={{
                                                    fontWeight: 600,
                                                    fontSize: '20px',
                                                    color: '#5B4947'
                                                }}>{proClass.name}</div>

                                                <div style={{
                                                    fontWeight: 400,
                                                    fontSize: '16px',
                                                    color: '#828282'
                                                }}> {proClass.schedule}</div>
                                                
                                                <div style={{
                                                    fontWeight: 600,
                                                    fontSize: '20px',
                                                    color: '#FABC1D'
                                                }}> {proClass.price}</div>
                                            </Box>

                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'end'
                                                }}
                                            > <img src={trash} /></Box>
                                        </Box>
                                    </>}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </div>

            <footer style={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingRight: '70px',
            paddingLeft: '70px',
            paddingTop: '30px',
            paddingBottom: '30px',
            border: '1px solid #BDBDBD 1px 0px 0px 0px'
            }}> 
                <div style={{ display: 'flex', justifyContent:'space-between', alignItems: 'center'}}>
                    <div
                        style={{
                            fontFamily: 'Montserrat',
                            fontWeight: 400,
                            fontSize: '18px'
                        }}
                    > Total Price
                    </div>
                    <div
                        style={{
                            fontFamily: 'Montserrat',
                            fontWeight: 600,
                            fontSize: '24px',
                            color: '#FABC1D',
                            marginLeft: '24px'
                        }}
                    > IDR 11.500.000
                    </div>
                </div>
                <Button 
                    variant="outlined"
                    sx={[{ '&:hover': { 
                        backgroundColor: '#EA9E1F' }, 
                    width: '140px', 
                    borderRadius: '8px', 
                    backgroundColor: '#EA9E1F', 
                    color: '#5B4947', 
                    fontFamily: 'Montserrat, sans-serif'}]}
                >
                    Pay Now 
                </Button>
                
            </footer>
        </Container>
    )
}

export default Checkout