import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setResults, setError } from "../redux/querySlice";
import { Button, TextField, Box } from "@mui/material";

function QueryInput() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (!query.trim()) {
      dispatch(setError("Query cannot be empty!"));
      return;
    }

    // Simulating AI Query Response
    const mockResults = [
      { name: "Category A", value: Math.random() * 100 },
      { name: "Category B", value: Math.random() * 100 },
      { name: "Category C", value: Math.random() * 100 },
    ];

    dispatch(setResults(mockResults));
  };

  return (
    <Box display="flex" gap={2} mt={3}>
      <TextField
        label="Enter your query"
        variant="outlined"
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
}

export default QueryInput;
