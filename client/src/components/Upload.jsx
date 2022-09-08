import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div``;

const Close = styled.div``;

const Title = styled.h1``;

const Upload = ({ setOpen }) => {
  return (
    <Container>
      <Wrapper>
        <Close>X</Close>
        <Title>Upload a New Video</Title>
      </Wrapper>
    </Container>
  );
};

export default Upload;
