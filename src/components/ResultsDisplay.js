import React from "react";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";
import { Card, CardContent, Typography, Box } from "@mui/material";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

function ResultsDisplay() {
  const results = useSelector((state) => state.query.results);
  const error = useSelector((state) => state.query.error);

  if (error) {
    return (
      <Typography color="error" mt={2}>
        {error}
      </Typography>
    );
  }

  if (!results) {
    return <Typography mt={2}>No results yet. Enter a query to see data.</Typography>;
  }

  const data = {
    labels: results.map((item) => item.name),
    datasets: [
      {
        label: "Query Results",
        data: results.map((item) => item.value),
        backgroundColor: ["#4CAF50", "#FFC107", "#FF5722"],
      },
    ],
  };

  return (
    <Card sx={{ mt: 3 }}>
      <CardContent>
        <Typography variant="h6">Results</Typography>
        <Box mt={2}>
          <Bar data={data} />
        </Box>
      </CardContent>
    </Card>
  );
}

export default ResultsDisplay;
