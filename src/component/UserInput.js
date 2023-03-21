import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function UserInput({bodyPartDD, setBodyPart, bodyPart}) {
  
// there was a typo here that I also corrected on setBodyPart(we had it originally as setBodyParts)
  const handleChange = (event) => {
    setBodyPart(event.target.value);
  };

//   const renderMenuItems = bodyPartDD.map(item => {
//     <MenuItem value={item.}
//   })

  // function renderMenuItems (bodyPartDD) {
  //   for (const entry of bodyPartDD) {
  //       <MenuItem value={entry}>{entry.stringify}</MenuItem>
       
  //     }
      
  // }
  // Bob changed this last night. Making the bodypartDD an array allowed the use of map functions. 
  function renderMenuItems(bodyPartDD) {
    console.log('renderMenuItems called with', bodyPartDD);
    const bodyPartArray = Array.from(bodyPartDD)
  return [ <MenuItem key="empty" value=""></MenuItem>, // Add empty value
  ...bodyPartArray.map((entry, index) => (
    <MenuItem key={index} value={entry}>{entry}</MenuItem>
  ))
];
}

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="bodyPart">Body Part</InputLabel>
        <Select
          labelId="bodyPart"
          id="bodyPart"
          value= {bodyPart}
          label="Body Part"
          onChange={handleChange}
        >  
         {renderMenuItems(bodyPartDD)}
        {/* <MenuItem value={bodyPartDD[0]}>Waist</MenuItem> */}
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