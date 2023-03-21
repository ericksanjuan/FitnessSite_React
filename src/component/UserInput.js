import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function UserInput({bodyPartDD, setBodyPart, bodyPart, label}) {
  

  const handleChange = (event) => {
    setBodyPart(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="bodyPart">{label}</InputLabel>
        <Select
          labelId="bodyPart"
          id="bodyPart"
          value= {bodyPart}
          label="bodyPart"
          onChange={handleChange}
        >  
         {/* {renderMenuItems}
          <MenuItem value={bodyPartDD[0]}>Waist</MenuItem> */}
          {[...bodyPartDD].map((value) => <MenuItem key={value} value={value}>{value}</MenuItem> )}
        </Select>
      </FormControl>
    </Box>
    
  );
}


export default UserInput;



// {/* <form>   
//             <div clasName="dropdown-container">
//                 <select onChange={onChange} defaultValue = {filter.character}>
//                        {options.map((option) => (
//                             <option value={option.value}>{option.lable}</option>
//                             ))}
//                 </select>
//                 <div>
//         </div>
//         <button id="selectCharacter" onClick={(e) => onSubmit(e)}>Filter Authors</button>
//             </div>
//         </form> cd */}