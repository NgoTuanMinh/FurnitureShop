import React from 'react';
import './app.scss';
import Footer from './container/Footer';
import Header from './container/Header';
import MainPage from './container/MainPage';

function App() {
  return (
    <div style={{margin: '0 auto'}}>
      <Header/>
      <MainPage/>
      <Footer/>

    </div>
  );
}

export default App;
