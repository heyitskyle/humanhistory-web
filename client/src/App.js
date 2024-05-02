import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AppView from './components/AppView.jsx';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" />
        <link href="https://use.typekit.net/ldw1cki.css" rel="stylesheet" />
      </Helmet>

      <Header />
      <AppView />
      <Footer />
    </div>
  );
}

export default App;