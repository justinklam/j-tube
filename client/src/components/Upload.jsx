import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
`;

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
