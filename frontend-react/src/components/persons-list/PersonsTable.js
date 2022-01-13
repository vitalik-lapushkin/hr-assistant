import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';

export default function BasicTable() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios(`http://${process.env.REACT_APP_BACKEND_HOST || 'localhost'}:${process.env.REACT_APP_BACKEND_PORT || '8080'}/rest/person`)
      .then(response => setData(response.data))
  }, []);

  return (
    <div>
      {data && data.length > 0
        ? <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Last name</TableCell>
                <TableCell>First name</TableCell>
                <TableCell>Middle name</TableCell>
                <TableCell>Date of birth</TableCell>
                <TableCell>Post</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.firstName}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                  {row.lastName}
                </TableCell>
                  <TableCell component="th" scope="row">
                    {row.firstName}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.middleName}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.dateOfBirth}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.post}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        : <CircularProgress/>
      }
    </div>
  );
}