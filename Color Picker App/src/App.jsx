import React from 'react'
const { useState } = React;

export const ColorPicker = () => {

const [picker,setPicker]=useState('#ffffff');

const handleColorChanger=(e)=>{
  setPicker(e.target.value);
}

  return(
<div 
  id='color-picker-container'
  style={{backgroundColor:picker}}
>
  <input 
    type='color' 
    value={picker}
    id='color-input'
    onChange={handleColorChanger}
  >
  </input>

</div>
)};