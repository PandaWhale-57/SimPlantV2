import React, { useEffect} from 'react';
import './roomContainerStyle.scss';
import Plant from '../plants/plant.jsx';
import Card from '@mui/material/Card';
import { CardContent, Container, Stack, Typography, AppBar, Toolbar } from '@mui/material';
import { useDrop, useDrag } from 'react-dnd';


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
  
  const makeRoomArr = (roomPlants) => {
    let displayInRoom = roomPlants.map(plant => {
       console.log('current plant:', plant);
       return <Plant key={plant.pid} draggable details={plant} />;
    });
    return displayInRoom;
 }
 const roomArr = makeRoomArr(roomPlants);

  return (
    <>
      <Container sx={{minHeight: "400px", width: "90vw", bgcolor: '#d1cdcf', marginTop:"30px", borderRadius: 4, boxShadow: 2}} p={2}>
          <div className="header" style={{marginTop: "10px"}}>
            <Typography variant="h5">Living Room</Typography>
          </div>
        {roomPlants.length === 0 && <div><Typography variant="body1">Drag here!</Typography></div>}
        <Stack direction="row" minHeight="200px" maxHeight="500px" spacing={3} 
        p={2}
        sx={{overflowX: 'auto', overflowY: 'auto', marginBottom:'30px'}}
        useFlexGap flexWrap="wrap"
        ref={dropRef} 
        >
          {roomArr}
        </Stack>
        
      </Container>
    </>
  );
}
