import React, { useEffect} from 'react';
import './roomContainerStyle.scss';
import Plant from '../plants/plant.jsx';
import Card from '@mui/material/Card';
import { CardContent, Container, Stack } from '@mui/material';
import { useDrop } from 'react-dnd';



export default function Room(props) {
  const { roomPlants, updateRoomPlants, selectedPlants } = props;
  const [{ isOver }, dropRef] = useDrop({
    accept: 'pid',
    drop: (item) => {
      console.log('drop item: ', item);
      addPlantToBoard(item.pid)
      // updateRoomPlants((roomPlants) => !roomPlants.includes(item) ? [...roomPlants, item] : roomPlants)
    },
    collect: (monitor) => ({
        isOver: monitor.isOver()
    })
});

  const addPlantToBoard = id => {
    const plantList = selectedPlants.filter(plant => id === plant.pid)
    updateRoomPlants((roomPlants) => {
      const newState = [...roomPlants, plantList[0]];
      console.log("updated state", newState);
      return newState;
    }
      )
  }
  
  useEffect(()=>{
    console.log('isOver: ', isOver);
  },[isOver]);

  // console.log("roomPlant", roomPlants);
  // const plantsInRoom = []
  // roomPlants.forEach(plant => {
  //  plantsInRoom.push(<Plant key={plant.pid} draggable details={plant} />)  
  // })
  
  const makeRoomArr = (roomPlants) => {
    let displayInRoom = roomPlants.map(plant => {
       console.log('current plant:', plant);
       return <Plant key={plant.pid} draggable details={plant} />;
    });
    return displayInRoom;
 }
 const roomArr = makeRoomArr(roomPlants);

  return (
    <Container sx={{minHeight: "400px", bgcolor: '#d1cdcf', borderRadius: 4, boxShadow: 2}} >
    DRAG HERE
    {/* <div ref={dropRef} > */}
      <Stack direction="row" minHeight="200px" spacing={3} 
      sx={{overflowX: 'auto', overflowY: 'auto'}}
      useFlexGap flexWrap="wrap"
      ref={dropRef} 
      >
        {roomArr}
        {isOver && <div>Drop here</div>}
      </Stack>
      {/* </div> */}
    </Container>
  );
}
