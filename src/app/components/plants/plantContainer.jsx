import React from 'react';
import Plant from './plant.jsx';
import './plantStyle.scss';
import {Container, Stack} from '@mui/material';

export default function PlantContainer(props){
  const { selectedPlants, updateSelectedPlants } = props;
  console.log('selectedPlants', selectedPlants);
    //array of objects in the form of selected plants
    const plantArray = [];
    let i = 0;
    selectedPlants.forEach((el)=>{
        plantArray.push(<Plant key={i++}details={el}/>)
    })
    console.log("num of plants", selectedPlants);
    return (
      <div className='plantContainer'>
        <Stack direction="row" spacing={2} sx={{
          overflowY: "scroll", marginBotton: "10px"}} >{plantArray}</Stack>
      </div>
    )
    //set the dimensions of the plant container
    //increase the sizes of the plant cards
    //make it so that the plant cards wrap around the plant container
    //with an overflow y scroll bar
}