import React from 'react';
import Plant from './plant.jsx';
import './plantStyle.scss';
import {Container, Stack} from '@mui/material';
import { useDrop } from 'react-dnd';


export default function PlantContainer(props){
  const { selectedPlants, updateSelectedPlants } = props;
  console.log('selectedPlants', selectedPlants);
    //array of objects in the form of selected plants
    const plantArray = [];
    let i = 0;
    selectedPlants.forEach((el)=>{
        plantArray.push(<Plant key={i++} draggable details={el}/>)
    })
    console.log("num of plants", selectedPlants);

    return (
        <Stack direction="row" spacing={2} 
        alignItems="center"
        justifyContent="center"
        sx={{overflowY: "auto", overflowX: "auto", marginBotton: "10px", maxHeight: 280,  display: 'inline-flex' }} 
        p={2} 
        useFlexGap flexWrap="wrap">
            {plantArray}
        </Stack>
    )
    //set the dimensions of the plant container
    //increase the sizes of the plant cards
    //make it so that the plant cards wrap around the plant container
    //with an overflow y scroll bar
}