import React from 'react';
// import './plantStyle.scss';
import Card from '@mui/material/Card';
import { CardContent, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { useDrag } from 'react-dnd';

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
    min_temp,
    image_url
  } = details;

  const [{ isDragging }, dragRef] = useDrag({
    type: 'pid',
    item: { pid, 
      watering_frequency_per_week, 
      min_light_lux,
      min_temp,
      image_url
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  return(
    <div ref={dragRef}>
    <Card sx={{ minHeight: 300, maxHeight: 300, maxWidth: 200, minWidth: 200, overflowY: scroll, borderRadius: 2 }} >
      <CardMedia component='img' image={image_url} sx={{maxHeight: 150, maxWidth:250}}/>
      <CardContent>
      <Typography variant="subtitle1" gutterBottom sx={{fontSize: 14, fontWeight: 600}}> {pid} </Typography>
      <Typography variant="body2" color="text.secondary" sx={{fontSize: 13}}>Light needed (lux): {min_light_lux}</Typography>
      <Typography variant="body2" color="text.secondary" sx={{fontSize: 13}}>Mininum Temp: {min_temp}°C</Typography>
      <Typography variant="body2" color="text.secondary" sx={{fontSize: 13}}>Watering: {watering_frequency_per_week}x per week</Typography>
      </CardContent>
      {isDragging}
    </Card> 
    </div>
  );
}

export default Plant;