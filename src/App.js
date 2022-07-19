import "./App.css";
import styled from "styled-components";

// Components
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

const Container = styled.div``;

const Main = styled.div``;

function App() {
  return (
    <Container>
      <Menu />
      <Main>
        <Navbar />
      </Main>
    </Container>
  );
}

export default App;
