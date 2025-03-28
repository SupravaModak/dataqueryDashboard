import React from 'react';
import { useSelector } from 'react-redux';
import { List, ListItem, ListItemText, Typography, Paper } from '@mui/material';

const QueryHistory = () => {
  const history = useSelector((state) => state.query.queryHistory);

  return (
    <Paper sx={{ mt: 3, p: 2 }}>
      <Typography variant="h6">Query History</Typography>
      <List>
        {Array.isArray(history) && history.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default QueryHistory;
