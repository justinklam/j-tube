import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const NewComment = styled.div``;

const Avatar = styled.img``;

const Input = styled.input``;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src="https://images.pexels.com/photos/2071881/pexels-photo-2071881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <Input placeholder="Add a comment..."></Input>
      </NewComment>
    </Container>
  );
};

export default Comments;
