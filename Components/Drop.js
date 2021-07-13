import React, { useState } from "react";
import './Drop.css';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function Drop(){

   

const [data,SetData]=(useState);
function handleOnDragEnd(result){
    if(!result.destination) return;
    const items=Array.from(data);
    const[data]=items.splice(result.source.index,1);
    items.splice(result.destination.index,0,data);
    SetData(items);
}
return(
  <DragDropContext onDragEnd={handleOnDragEnd}>   
  
         <Droppable droppableId="char">
             {(provided)=>(
    
            <div class="container">
       <ul  {...provided.droppableProps} ref={provided.innerRef}>
       {data.tasks.map(({id,title,cards},index)=>{
            return(
            <Draggable key={id} draggableId={id} index={index}>
            {(provided)=>(
            <li {...provided.draggableProps}{...provided.dragHandleProps} ref={provided.innerRef}>
            <div class="title">{title}</div>
            </li>
       )}
            </Draggable>  
   );
  })}
  {provided.placeholder}
  </ul>     
</div>
)}
</Droppable> 
</DragDropContext> 
);


}
export default Drop;