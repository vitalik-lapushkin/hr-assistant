import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import AddPersonRow from './AddPersonRow';
import PersonApi from '../../api/PersonApi';

export default function BasicTable() {

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isAdding, setAdding] = useState(false);

  useEffect(() => {
    setLoading(true);
    PersonApi.getList().then(response => { setData(response.data); setLoading(false); });
  }, []);

  const handleDeleteUser = async (id) => {
    await PersonApi.delete(id);
    setData([]);
    setLoading(true);
    PersonApi.getList().then(response => { setData(response.data); setLoading(false); });
  }

  const onCancel = () => {
    setAdding(false);
  }

  const onSavePerson = async (data) => {
    try {
      await PersonApi.create(data);
      setLoading(true);
      PersonApi.getList().then(response => { setData(response.data); setLoading(false); });
    } finally {
      setAdding(false);
    }
  }

  const addingPerson = () => {
    if (isAdding) {
      return (<AddPersonRow onCancel={onCancel} onSavePerson={onSavePerson}/>);
    }
    return null;
  }

  return (
    <div>
      {isLoading
        ? <CircularProgress/>
        : <div>
          <IconButton color="primary" aria-label="delete person" component="span" onClick={() => setAdding(true)}>
            <AddIcon/>
          </IconButton>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Last name</TableCell>
                  <TableCell>First name</TableCell>
                  <TableCell>Middle name</TableCell>
                  <TableCell>Date of birth</TableCell>
                  <TableCell>Post</TableCell>
                  <TableCell>Photo</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {addingPerson()}
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
                    <TableCell component="th" scope="row" align="">
                      <Avatar
                        alt="Remy Sharp"
                        src={row.linkToPhoto}
                        sx={{ width: 56, height: 56 }}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row"  align="center">
                      <IconButton color="primary" aria-label="delete person" component="span" onClick={() => handleDeleteUser(row.id)}>
                        <DeleteIcon/>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </div>
      }
    </div>
  );
}