import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './Dashboard.js';
// import { Machine } from './components/Dashboard/machine';
import { ThemeProvider } from '@mui/material/styles';
import NotFound from './404.js';
import { theme } from './theme';
import MachineInfo from './pages/machines/machineId.js';


function App() {
  return (
   <ThemeProvider theme={theme}>
     <Router>
      <Routes>
        <Route path="/" exact element={<Dashboard/>} />
        <Route path="/machines/:ID" element={<MachineInfo/>}/>
        <Route path="/*" element={<NotFound/>} />
      </Routes>
    </Router>
   </ThemeProvider> 
  );
}

export default App;