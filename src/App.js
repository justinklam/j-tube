import { useState } from "react";
import "./App.css";

// Styling
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Theme";

// Components
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
`;
const Wrapper = styled.div``;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Wrapper>
            <h1>Placeholder</h1>
          </Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
