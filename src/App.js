import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectListPage from "./components/project/pages/listPage/ProjectListPage";
import ProjectPageDetails from "./components/project/pages/detailsPage/ProjectDetailsPage";
import MainMenu from "./components/menu/MainMenu";
import MainHeader from "./components/header/MainHeader";
import UserProfileDetails from './components/aboutMe/pages/ProfileDetails/UserProfileDetails';
import VerticalLinkList from './components/contact/VerticalLinkList';

function App() {
  return (
    <Router>
      <div className="App">
        <MainHeader />
        <div className="app-main-container">
          <MainMenu />
          <Routes>
            <Route path="/" element={<ProjectListPage />} />
            <Route path="/sobre mi" element={<UserProfileDetails />} />
            <Route path="/contacto" element={<VerticalLinkList />} />
            <Route path="/details/:id" element={<ProjectPageDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
