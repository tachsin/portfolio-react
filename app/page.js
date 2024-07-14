import React from 'react';
import './App.css';
import Home from './components/home';
import GradientPage from './components/transition1';
import AboutPage from './components/about';
import ExperiencesPage from './components/experiences';
import ProjectsPage from './components/projects';
import Designs from './components/designs';
import CertificatesPage from './components/certificates';
import Hobbies from './components/hobbies';
import Connect from './components/connect';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Home />
                <GradientPage className="1" />
                <AboutPage />
                <GradientPage className="2" />
                <ExperiencesPage />
                <GradientPage className="3" />
                <ProjectsPage />
                <GradientPage className="4" />
                <Designs />
                <GradientPage className="5" />
                <CertificatesPage />
                <GradientPage className="6" />
                <Hobbies />
                <GradientPage className="7" />
                <Connect />
            </header>
        </div>
    );
}

export default App;
