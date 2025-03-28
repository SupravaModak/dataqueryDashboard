import React from "react";
import QueryInput from "./components/QueryInput";
import QueryHistory from "./components/QueryHistory";
import ResultsDisplay from "./components/ResultsDisplay";
import { Container, Typography } from "@mui/material";

function App() {
  return (
    <Container>
      <Typography variant="h4" align="center" gutterBottom>
        Data Query Dashboard
      </Typography>
      <QueryInput />
      <QueryHistory></QueryHistory>
      <ResultsDisplay />
    </Container>
  );
}

export default App;  // ✅ Ensure this line exists
