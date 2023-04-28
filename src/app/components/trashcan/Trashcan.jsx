import React from 'react';
import { DndProvider, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { CardContent, Container, Stack, Typography } from '@mui/material';
import RecyclingIcon from '@mui/icons-material/Recycling';


export default function TrashCan(props) {
  //
  const { roomPlants, updateRoomPlants } = props;

  const [{ isOver }, dropRef] = useDrop(
    {
      accept: 'pid',
      drop: (item) => {
        //declare an empty array labeld cache
        const cache = [];
        //iterate over the roomPlants array
        roomPlants.forEach((el, i, arr) => {
          //if the current element pid sproperty does not equal the item.pid 
          if(el.pid !== item.pid) {
            //push the element into the cache
            cache.push(el);
          }
        })
        // *** end forEach loop - cache is populated ****

        //updateRoomPlants with cache
        updateRoomPlants(cache);
      },
        
      collect: (monitor) => ({
          isOver: monitor.isOver()
      })
    }
  );

  return (
    <Container ref={dropRef} maxWidth="xs" sx={{borderRadius: '50%', minHeight: "50px", width: "20vw", bgcolor: '#d1cdcf', marginTop:"30px", borderRadius: 4, boxShadow: 2, display: "flex", shrink: .1}}>
      <RecyclingIcon
      style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
      }}/>
    </Container>
  )
}