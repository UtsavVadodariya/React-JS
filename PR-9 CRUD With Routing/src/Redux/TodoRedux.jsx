import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData, deleteData, updateData } from '../feature/TodoSlice';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function TodoRedux() {
  const [name, setname] = useState('');
  const [sub, setsub] = useState('');
  const [editindex, setEditindex] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const count = useSelector((state) => state.todokey);
  const dispatch = useDispatch();

  const addRecord = () => {
    if (!name || !sub || !selectedOption) {
      setSnackbarMessage('All fields are required!');
      setSnackbarOpen(true);
      return;
    }

    if (editindex == null) {
      dispatch(addData({ id: Date.now(), name, sub,  selectedOption }));
    } else {
      dispatch(updateData({ id: editindex, name, sub,  selectedOption }));
      setEditindex(null);
    }

    setname('');
    setsub('');
    setSelectedOption('');
  };

  const deleteRecord = (id) => {
    dispatch(deleteData(id));
    
    setname('');
    setsub('');
    setSelectedOption('');
    setSnackbarMessage('Todo deleted successfully!');
    setSnackbarOpen(true);
  };

  const editReord = (id) => {
    let singledata = count.Students.find((item) => item.id === id);
    setname(singledata.name);
    setsub(singledata.sub);
    setSelectedOption(singledata.selectedOption);
    setEditindex(id);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className='main'>
      <div className="main1">
      <h1>ReduxTodo</h1>

      <TextField label="Enter Name" placeholder="Enter Name" value={name} onChange={(e) => setname(e.target.value)} margin="normal" />
      <TextField label="Enter Subject" placeholder="Enter Subject" value={sub} onChange={(e) => setsub(e.target.value)} margin="normal" />

      <FormControl margin="normal">
        <InputLabel>Select Hobby</InputLabel>
        <Select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)} >
          <MenuItem value="Music">Music</MenuItem>
          <MenuItem value="Travel">Travel</MenuItem>
          <MenuItem value="Drawing">Drawing</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      </FormControl>

      <div>
        <label>
          <input type="checkbox" checked={selectedOption === 'Music'} onChange={() => setSelectedOption(selectedOption === 'Music' ? '' : 'Music')} />
          Music
        </label>
        <label>
          <input type="checkbox" checked={selectedOption === 'Travel'}  onChange={() => setSelectedOption(selectedOption === 'Travel' ? '' : 'Travel')} />
          Travel
        </label>
        <label>
          <input type="checkbox" checked={selectedOption === 'Drawing'}  onChange={() => setSelectedOption(selectedOption === 'Drawing' ? '' : 'Drawing')} />
          Drawing
        </label>
        <label>
          <input type="checkbox" checked={selectedOption === 'Other'}  onChange={() => setSelectedOption(selectedOption === 'Other' ? '' : 'Other')} />
          Other
        </label>
      </div>

      <Button variant="contained" startIcon={<CloudUploadIcon />} onClick={addRecord} style={{ marginTop: '10px' }} >
        {editindex ? 'Update Data' : 'Add Data'}
      </Button>

      {count ? (
        count.Students.map((e) => (
          <ul key={e.id}>
            <li>{e.name} - {e.sub} - {e.selectedOption}</li>
            <Button variant="outlined" startIcon={<EditIcon />} onClick={() => editReord(e.id)} style={{ marginRight: '5px' }}>
              Edit
            </Button>
            <Button variant="outlined" startIcon={<DeleteIcon />} onClick={() => deleteRecord(e.id)}>
              Delete
            </Button>
          </ul>
        ))
      ) : (
        <p>No Data</p>
      )}

      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}  anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >
        <Alert onClose={handleSnackbarClose} severity="error">
          {snackbarMessage}
        </Alert>
      </Snackbar>
      </div>
    </div>
  );
}
