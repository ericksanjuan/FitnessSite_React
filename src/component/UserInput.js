import React from "react";

function UserInput() {

    return (
        <form className='form'>
            <input></input>
        </form>
    )
}



export default UserInput;



{/* <form>   
            <div clasName="dropdown-container">
                <select onChange={onChange} defaultValue = {filter.character}>
                       {options.map((option) => (
                            <option value={option.value}>{option.lable}</option>
                            ))}
                </select>
                <div>
        </div>
        <button id="selectCharacter" onClick={(e) => onSubmit(e)}>Filter Authors</button>
            </div>
        </form> cd */}