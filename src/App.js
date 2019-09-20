import React from 'react';
import './App.scss';
import logo from './logo.png';
import Page from './components/Page/Page';

function App() {
  return (
    <div className="App h-100">
      <nav className="navbar navbar-expand-lg navbar-light u8-navbar">
        <div className='row'>
          <div className='col-12 col-md-3 col-lg-2'>
        <a className="navbar-brand" href="localhost">
          <img src={logo} height="60" className="d-inline-block align-top" alt="logo" />
        </a>
        </div>
        <div className='col-12 col-md-9 col-lg-10'>
          <h1 className='u8-navbar-title'>Система управления знаниями</h1>
        </div>
        </div>
      </nav>
      <Page />
      {/* <footer className='u8-footer'>
        Created by Endovitskiy Fedor (C) 2019
      </footer> */}
    </div>
  );
}

export default App;
