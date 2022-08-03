import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid: ${({ theme }) => theme.bgSoft};
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  border: none;
  border-radius: 3px;
  padding; 10px;
  background-color: transparent;
`;

const Button = styled.button``;

const More = styled.div``;

const Links = styled.div``;

const Link = styled.span``;

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <SubTitle>to continue to J-Tube</SubTitle>
        <Input placeholder="username" />
        <Input type="password" placeholder="password" />
        <Button>Sign In</Button>

        <Title>or</Title>
        <Input placeholder="username" />
        <Input type="email" placeholder="email" />
        <Input type="password" placeholder="password" />
        <Button>Sign Up</Button>
      </Wrapper>
      <More>
        English
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;
