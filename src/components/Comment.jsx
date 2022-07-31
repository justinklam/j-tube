import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled.span`
  font-size: 13px;
  font-weight 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
`;

const Text = styled.span``;

const Comment = () => {
  return (
    <Container>
      <Avatar src="https://images.pexels.com/photos/2071881/pexels-photo-2071881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <Details>
        <Name>
          J1<Date>1 Day Ago</Date>
        </Name>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
