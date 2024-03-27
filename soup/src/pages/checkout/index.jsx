import React, { useState } from 'react';
import { Checkbox, FormGroup, FormControlLabel, Box, Container, Grid, Paper, Typography, IconButton, Button} from '@mui/material';
import { Card, CardContent } from '@mui/material';
import Popover from '@mui/material';
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

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

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
                        <Card sx={{ borderBottom: "2px solid rgba(0,0,0,0.2)"}}>
                            <CardContent>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                        checked={selectedClass.includes(proClass.id)}
                                        onChange={() => handleToggle(proClass.id)}
                                        />
                                    }
                                    label={<>
                                        <div><img src={proClass.img} alt={proClass.name} /> </div>
                                        <Box
                                            sx={{
                                                alignItems: 'center',
                                                paddingLeft: '24px',
                                                paddingRight: '100px'
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
                                                alignItems: 'center'
                                            }}
                                        > <img src={trash} /></Box>
                                        
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
                    aria-describedby={id}
                    sx={[{ '&:hover': { 
                        backgroundColor: '#EA9E1F' }, 
                    width: '140px', 
                    borderRadius: '8px', 
                    backgroundColor: '#EA9E1F', 
                    color: '#5B4947', 
                    fontFamily: 'Montserrat, sans-serif'}]}
                    onClick={handleClick}
                >
                    Pay Now 
                </Button>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'center',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'center',
                      }}
                >
                    <Box p={2}>
                        <Typography variant="h6" gutterBottom>
                            Select Payment Method
                        </Typography>
                        <List>
                            <ListItem button>
                            <ListItemText primary="Credit Card" />
                            </ListItem>
                            <ListItem button>
                            <ListItemText primary="PayPal" />
                            </ListItem>
                            <ListItem button>
                            <ListItemText primary="Google Pay" />
                            </ListItem>
                        </List>
                        <Divider />
                        <Box display="flex" justifyContent="flex-end">
                            <Button color="secondary" onClick={handleClose} style={{ marginRight: 10 }}>
                            Cancel
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleClose}>
                            Proceed
                            </Button>
                        </Box>
                    </Box>
                </Popover>
            </footer>
        </Container>
    )
}

export default Checkout