import './App.css';
import React from 'react'

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './components/Header/Header';
import SearchPage from './components/SearchPage/SearchPage';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
       <Router>
           <Header />
           <Switch>
               <Route path="/search">
                  <SearchPage />
               </Route>
               <Route path="/">
                  <Home />
               </Route>
           </Switch>
          <Footer /> 
       </Router>
    </div>
  );
}

export default App;
