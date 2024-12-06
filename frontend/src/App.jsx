import "@mantine/core/styles.css";
import { MantineProvider, Container } from "@mantine/core";

import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <MantineProvider>
        <Navbar />
        <Container>
          <Outlet />
        </Container>
      </MantineProvider>
    </>
  );
}

export default App;
