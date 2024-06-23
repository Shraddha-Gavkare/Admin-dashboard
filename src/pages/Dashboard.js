import React from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Chart from '../components/Chart';
import Table from '../components/Table';
import Calendar from '../components/Calendar';
import KanbanBoard from '../components/KanbanBoard';

const Dashboard = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper>
            <Chart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
            <Table />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <Calendar />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper>
            <KanbanBoard />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
