import { useState } from 'react';
import { TextField } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import CreateIcon from '@mui/icons-material/Create';


export default function TodoForm ({ addTodo }) {
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(text)
        setText('')
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (
        <div>
         {/* <ListItem>
            <TextField 
            id="filled-basic"
            label="Todo"
            variant="filled"
            onChange={handleChange}
            value={text}
            />
         </ListItem> */}
         <ListItem>
         <form onSubmit={handleSubmit}>
         <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Add Todo</InputLabel>
          <Input
            id="standard-adornment-password"
            onChange={handleChange}
            value={text}
           // type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  type="submit"
                  aria-label="toggle password visibility"
                 //  onClick={handleClickShowPassword}
                 //  onMouseDown={handleMouseDownPassword}
                >
                <CreateIcon 
                     fontSize="small"
                     style={{fontSize: ".9rem"}}
                />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        </form>
        </ListItem>
        </div>
    )
}