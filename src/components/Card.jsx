import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`;

const Card = () => {
  return (
    <Container>
      <Image src="https://i.ytimg.com/vi/IjMESxJdWkg/hq720_live.jpg?sqp=CKz--pYG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAyQzog-iBzUmBVIP5l7wqAqErk4A" />
    </Container>
  );
};

export default Card;
