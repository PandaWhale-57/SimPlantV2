import React, { useState } from 'react';
import './mainPageStyle.scss';
import '../formContainer/formContainerStyle.scss';
import RoomMenu from '../roomMenu/roomMenu.jsx';
import LowerContainer from '../lowerContainer/lowerContainer.jsx';
import FormContainer from '../formContainer/formContainer.jsx';
import PlantContainer from '../plants/plantContainer.jsx';
import TrashCan from '..//trashcan/Trashcan.jsx';
import Room from '../room/Room.jsx';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDrop } from 'react-dnd';
import { CardContent, Container, Stack } from '@mui/material';


//main container page acts as parent component

//render drop down menu to navigate btwn rooms -roomMenu
//render lowerContainer to hold room and input forms
//render room component
//render form container componenet



function MainPage() {
  // plant container state
  const [ selectedPlants, updateSelectedPlants ] = useState([]);
  // room state
  const [ roomPlants, updateRoomPlants ] = useState( [] );
  // plant search state
  const [ searchPlant, updateSearchPlant ] = useState('');

  async function queryPlantFamily(e) {
    e.preventDefault()
    console.log('searchPlant', searchPlant)
    const response = await fetch(`http://localhost:3000/api/plantFamily/${searchPlant}`)
    const result = await response.json()
    console.log('result', result)
    updateSelectedPlants([ ...result ]);
  }


  
  
  return (
    <div className="page">
      {/* <RoomMenu /> */}
      <FormContainer queryPlantFamily={queryPlantFamily} updateSearchPlant={ updateSearchPlant } />
      <DndProvider backend={HTML5Backend}>
        <PlantContainer selectedPlants={selectedPlants} updateSelectedPlants={ updateSelectedPlants } /> 
        <Container maxWidth="lg">
          <Stack display="flex" justifyContent="center" direction="row" sx={{gap: '10px'}}>
            <TrashCan updateRoomPlants={updateRoomPlants} roomPlants={roomPlants} />
            <Room roomPlants={roomPlants} updateRoomPlants={updateRoomPlants} selectedPlants={selectedPlants}/>
          </Stack>
        </Container>

      </DndProvider>
    </div>
  );
}

export default MainPage;

