import "./App.css";
import styled from "styled-components";

// Components
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
`;
const Wrapper = styled.div``;

function App() {
  return (
    <Container>
      <Menu />
      <Main>
        <Navbar />
        <Wrapper>
          <h1>Placeholder</h1>
        </Wrapper>
      </Main>
    </Container>
  );
}

export default App;
