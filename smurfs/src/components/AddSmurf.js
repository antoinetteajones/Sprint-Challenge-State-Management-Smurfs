  
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSmurf } from '../actions';

const AddSmurf = () => {
  const [smurf, setSmurf] = useState({
    name: "",
    height: null,
    age: null
  });

  const dispatch = useDispatch();

  const handleChange = e => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    const newSmurf = {
      ...smurf,
    };
    dispatch(addSmurf(newSmurf));
    setSmurf({
      name: "",
      height: null,
      age: null
    });
  };

  return (
    <form onSubmit={submitForm}>

      <input
        type="text"
        name="name"
        value={smurf.name}
        placeholder="Enter Name"
        onChange={handleChange}
      />

      <input
        type="text"
        name="height"
        placeholder="Height"
        onChange={handleChange}
      />

      <input 
        type="text" 
        name="age" 
        placeholder="Age" 
        onChange={handleChange} 
      />

      <button type="submit">Add Smurf</button>
      
    </form>
  );
}

export default AddSmurf;