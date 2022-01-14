import { useState } from 'react'; 
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import TextField from '@mui/material/TextField';
import StaticApi from '../../api/StaticApi';

const Input = styled('input')({
  display: 'none',
});

const AddPersonRow = ({ onSavePerson, onCancel }) => {
  const [data, setData] = useState({});

  const changeData = (field, event) => {
    const newValue = event.target.value;
    setData({
      ...data,
      [field]: newValue,
    });
  }

  const onFileChange = async (event) => {
    const file = event?.target?.files[0];
    await StaticApi.uploadFile(file);
    setData({
      ...data,
      linkToPhoto: `http://localhost:8080/static/${file.name}`,
    });
  }

  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        <TextField id="last name" label="last name" variant="outlined" required color="primary" onChange={(event) => changeData('lastName', event)}/>
      </TableCell>
      <TableCell component="th" scope="row">
        <TextField id="first name" label="first name" variant="outlined" required color="primary" onChange={(event) => changeData('firstName', event)}/>
      </TableCell>
      <TableCell component="th" scope="row">
        <TextField id="middle name" label="middle name" variant="outlined" required color="primary" onChange={(event) => changeData('middleName', event)}/>
      </TableCell>
      <TableCell component="th" scope="row">
        <TextField id="date of birth" label="date of birth" variant="outlined" required color="primary" onChange={(event) => changeData('dateOfBirth', event)}/>
      </TableCell>
      <TableCell component="th" scope="row">
        <TextField id="post" label="post" variant="outlined" required color="primary" onChange={(event) => changeData('post', event)}/>
      </TableCell>
      <TableCell component="th" scope="row">
        <label htmlFor="icon-button-file">
          <Input accept="image/*" id="icon-button-file" type="file" onChange={onFileChange}/>
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PhotoCameraIcon />
          </IconButton>
        </label>
      </TableCell>
      <TableCell component="th" scope="row" align="center">
        <IconButton color="primary" aria-label="confirm save" component="span" onClick={() => onSavePerson(data)}>
          <SaveIcon/>
        </IconButton>
        <IconButton color="primary" aria-label="confirm save" component="span" onClick={onCancel}>
          <CancelIcon/>
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default AddPersonRow;
