import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material'
import HeaderSignIn from "../../components/Header-signed-in"
import Footer from "../../components/Footer"

<div style={{
                               fontWeight: 400,
                                fontSize: '16px',
                                color: '#828282'
                            }}>Home Invoice <br/> menu invoice</div>

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#5b4947',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const rows = [
  { id: '1', noInvoice: 'SOU00003', date:'12 July 2022', totalcourse: 1, totalprice: 'IDR 450.000' },
  { id: '2', noInvoice: 'SOU00002', date:'05 Februari 2022', totalcourse: 2, totalprice: 'IDR 900.000'  },
  { id: '3', noInvoice: 'SOU00001', date:'30 August 2021', totalcourse: 1, totalprice: 'IDR 600.000'},
];

const CustomizedTables = () => {
  return (
    <Container>
    <HeaderSignIn/>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell align="center">No. Invoice</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Total Course</StyledTableCell>
            <StyledTableCell align="center">Total Price</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                  {row.id}
              </StyledTableCell>
              <StyledTableCell align="center">{row.noInvoice}</StyledTableCell>
              <StyledTableCell align="center">{row.date}</StyledTableCell>
              <StyledTableCell align="center">{row.totalcourse}</StyledTableCell>
              <StyledTableCell align="center">{row.totalprice}</StyledTableCell>
              <StyledTableCell align="center"><button style={{border: 'none',backgroundColor: '#FABC1D', width: '180px', height: '37px', borderRadius: '8px'}}>Details</button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Footer/>
    </Container>
  );
}

export default CustomizedTables