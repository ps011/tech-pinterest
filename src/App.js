import { Grommet } from "grommet";
import theme from "./theme";
import React from "react";
import Header from "./components/Header";
import Routes from "./routes";

function App() {
  return (
    <Grommet theme={theme} themeMode="dark">
      <Header></Header>
      <Routes></Routes>
    </Grommet>
  );
}

export default App;
