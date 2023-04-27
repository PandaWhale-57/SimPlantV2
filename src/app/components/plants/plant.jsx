import React from 'react';
// import './plantStyle.scss';
import Card from '@mui/material/Card';
import { CardContent, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

const Plant = (props) => {
//   if (props){    
//     console.log("props: ", props)
//     const { pid, 
//             watering_frequency_per_week, 
//             min_light_lux,
//             image_url
//           } = props.details;
// }
  const { details } = props
  const { pid, 
    watering_frequency_per_week, 
    min_light_lux,
    image_url
  } = details;
  return(
    <Card sx={{ minWidth: 275, maxWidth: 300, overflowY: scroll, borderRadius: 2 }}>
      <CardMedia component='img' image={image_url} sx={{maxHeight: 150}}/>
      <CardContent>
      <Typography variant="subtitle1" gutterBottom> {pid} </Typography>
      <Typography variant="body2" color="text.secondary">Light needed (lux): {min_light_lux}</Typography>
      <Typography variant="body2" color="text.secondary">Watering frequency per week: {watering_frequency_per_week}</Typography>
        
      </CardContent>
    </Card> 
    // <div className='plat'>
    //   <p className="species">Species: {pid}</p>
    //   <img className= "plant-img" src={image_url} ></img>
    //   <p>Water {watering_frequency_per_week} x per week</p>
    //   <p>Light: {min_light_lux}/10</p>
    // </div>
  );
}

export default Plant;