import React from 'react';
import { Draggable } from 'react-beautiful-dnd';



export default function Card({ card, index }) {


  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}{...provided.dragHandleProps} {...provided.draggableProps}> 
        <div style={{height:"auto",borderRadius:"3px",border:"1px solid white",margin:"12px" ,padding:"15px",backgroundColor:"white"}}>
          {card.title}
          </div>
        </div>
      )}
    </Draggable>
  );
}