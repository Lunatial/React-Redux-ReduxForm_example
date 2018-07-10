import React from 'react';
import './App.css';
import Content from './Content'
import Header from './Header';
import ContactPage from './ContactPage';

const App = () => (
    <div className="App">
        <Header title="Színes cím componens"/>
        <Content/>
        <ContactPage/>
    </div>
);

export default App;