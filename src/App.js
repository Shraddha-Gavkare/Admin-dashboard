// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';      // Import Tasks component
import Reports from './pages/Reports';  // Import Reports component
import Settings from './pages/Settings';// Import Settings component
import { Box } from '@mui/material';

function App() {
  return (
    <Router>
      <Navbar />
      <Box display="flex">
        <Sidebar />
        <Box component="main" flexGrow={1} p={3}>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/tasks" component={Tasks} />       {/* Route for Tasks page */}
            <Route path="/reports" component={Reports} />   {/* Route for Reports page */}
            <Route path="/settings" component={Settings} /> {/* Route for Settings page */}
          </Switch>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
