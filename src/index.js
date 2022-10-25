import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cari from './Cari';
import Hasil from './Hasil';
import Detail from './Detail';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route exact path="/" element={<App />}/>
          <Route exact path="/cari">
            <Route path="" element={<Cari />}/>
            <Route path=":q" element={<Cari />}/>
          </Route>
          <Route exact path="/hasil">
            <Route path="" element={<Hasil />}/>
            <Route path=":q" element={<Hasil />}/>
          </Route>
          <Route exact path="/detail/:id" element={<Detail />}/>
        </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
