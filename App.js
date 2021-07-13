import React, { useState } from 'react';

import List from './Components/List/List';
import store from './utils/store';
import StoreApi from './utils/StoreApi';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Input from './Components/Input/Input';


export default function App() {
  const [data, setData] = useState(store);
 




  const onDragEnd = (result) => {
    const { destination, source } = result;
   

    if (!destination) {
      return;
    }
   

    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
  
    if (source.droppableId === destination.droppableId) {
      const [draggingCard]= sourceList.cards.splice(source.index, 1);
     destinationList.cards.splice(destination.index, 0, draggingCard);
      const newSate = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };
      setData(newSate);
    } 
    else {
      const [draggingCard]=sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0,draggingCard );

      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      };
      setData(newState);
    }
  };

  return (
    <StoreApi.Provider value={{  }}>
    <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="app" type="list" >
            {(provided) => (
              <div style={{ display: "flex", justifyContent:"center", marginTop: "10px", }}
                
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                
                {data.listIds.map((listId, index) => {
                  const list = data.lists[listId];
                  
                  return <List list={list} key={listId} index={index} />;
                 
                })}
              
                {provided.placeholder}
                
              </div>
               
            )}
          </Droppable>
          
        </DragDropContext>
       
   
    </StoreApi.Provider>
  );
}
