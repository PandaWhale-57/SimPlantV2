import React, { useRef } from 'react';
import './formContainerStyle.scss';
import { Stack, Container } from '@mui/material';


export default function FormContainer(props) {
  const { queryPlantFamily, updateSearchPlant } = props;
  const typedPlantFamily = useRef(null);
  // console.log(`queryPlantFamily(was the prop drilled?): ${queryPlantFamily}`)
  return (
    <Container maxWidth="md" p={2} sx={{marginBotton:"50px", marginTop: "50px"}}>
      <Stack direction="column" sx={{marginBotton:"50px"}} style={{paddingBottom: "50px"}}>
      <form className="plantForm" onSubmit={ queryPlantFamily } >
        <div className="formTitle">ADD PLANT</div>
        <input
          // name="plantSpecies"
          type="text"
          placeholder="Plant Family"
          // ref={typedPlantFamily}
          required onChange={ (e) => {updateSearchPlant(e.target.value)} }
        ></input>
      </form>
      </Stack>
    </Container>
  );
}

