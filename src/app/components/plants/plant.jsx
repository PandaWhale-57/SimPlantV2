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
    image_url
  } = details;

  const [{ isDragging }, dragRef] = useDrag({
    type: 'pid',
    item: { pid, 
      watering_frequency_per_week, 
      min_light_lux,
      image_url
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  return(
    <div ref={dragRef}>
    <Card sx={{ minHeight: 275, minWidth: 100, maxWidth: 300, overflowY: scroll, borderRadius: 2 }} >
      <CardMedia component='img' image={image_url} sx={{maxHeight: 150}}/>
      <CardContent>
      <Typography variant="subtitle1" gutterBottom> {pid} </Typography>
      <Typography variant="body2" color="text.secondary">Light needed (lux): {min_light_lux}</Typography>
      <Typography variant="body2" color="text.secondary">Watering frequency per week: {watering_frequency_per_week}</Typography>
      </CardContent>
      {isDragging}
    </Card> 
    </div>
  );
}

export default Plant;