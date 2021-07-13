import React, { useState, useContext } from 'react';



import StoreApi from '../../utils/StoreApi';


export default function Input({ setOpen, listId, type }) {
 
  const { addMoreCard } = useContext(StoreApi);
  const [title, setTitle] = useState('');

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };
  const handleBtnConfirm = () => {
      addMoreCard(title, listId);
      setTitle('');
      setOpen(false);
  };

  return (
    <div>
      <div >
        <input style={{height:"30px",margin:"20px",borderColor:"white",outline:"none"}} type="text" onChange={handleOnChange}  value={title}
            placeholder="Add a Card"
          
        />
        </div>
     
       
      </div>
  
  );
}