import React from 'react';
import Title from './Title';
import Card from '../Card';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import Input from '../Input/Input';

export default function List({ list, index }) {
 
  return (
   
  
  
    <Draggable draggableId={list.id} index={index}>
     
      {(provided) => (
        <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
           
           <div style={{ display: "flex", flexDirection: "column" }} >

           <div style={{ margin: "12px", background: "#deede5", borderRadius: "2px",width:"400px",}}>
           <Title title={list.title} listId={list.id} />
           
            <Droppable droppableId={list.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}>
                  {list.cards.map((card, index) => (
                    <Card key={card.id} card={card} index={index} />
                  ))}
                  {provided.placeholder}
                 
                </div>
              )}
            </Droppable>
            <Input listId={list.id}  />
     </div>
         </div> 
        </div>
      )}
    </Draggable>
   
   
  );
}