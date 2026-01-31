import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectListPage from "./components/project/pages/listPage/ProjectListPage";
import ProjectPageDetails from "./components/project/pages/detailsPage/ProjectDetailsPage";
//import MainMenu from "./components/menu/MainMenu";
import MainHeader from "./components/header/MainHeader";
import UserProfileDetails from './components/aboutMe/pages/ProfileDetails/UserProfileDetails';
import VerticalLinkList from './components/contact/VerticalLinkList';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const theme = createTheme({
  palette: {
    primary: {
      main: '#6366f1', 
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});
  return (
    <ThemeProvider theme={theme}>
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <MainHeader />
        <div className="app-main-container">
          <Routes >
            <Route path="/" element={<ProjectListPage />} />
            <Route path="/sobre mi" element={<UserProfileDetails />} />
            <Route path="/contacto" element={<VerticalLinkList />} />
            <Route path="/details/:id" element={<ProjectPageDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
