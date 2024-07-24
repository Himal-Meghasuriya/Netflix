import React from 'react';
import "./two.css";
import TextAreaDiv from "./TextAreaDiv";
import ImageAreaDiv from "./ImageAreaDiv";
import { Container } from "@mui/material";

const Two = () => {
  return (

    <div className='two-main-wrapper'>

      <Container>

        <div className='two-main'>
          <TextAreaDiv />
          <ImageAreaDiv />
        </div>

      </Container>

    </div>
        

  )
}

export default Two
