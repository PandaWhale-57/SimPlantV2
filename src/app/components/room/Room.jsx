import React from 'react';
import './roomContainerStyle.scss';
import Plant from '../plants/plant.jsx';
import Card from '@mui/material/Card';
import { CardContent, Container, Stack } from '@mui/material';



export default function Room() {
  
  return (
    <Container maxWidth="md">
      <Stack direction="column" spacing={3}>
        DRAG HERE
        <Card>
          <CardContent>
            HELLO
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
}
