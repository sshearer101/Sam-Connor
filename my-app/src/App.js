import './App.css';
import './index.css';
import React, { useState, useEffect } from "react";
import FinanceForm from './components/FinanceForm';
import FinanceList from './components/FinanceList';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from 'react-router-dom';


function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/Information")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  function addProfile(dataProfile) {
    setData([...data, dataProfile])
  }

  return (
    <Router className="router">
      <div className="FormList">

          
          <Link to="./Header">Create Account</Link>
          |
          <Link to="/Form">Access Form</Link>
          |
          <Link to="/List">See Profiles</Link>

          <Switch>

          <Route path="/Header">
          < Header />
          </Route>

          <Route path="/Form">
            < FinanceForm addProfile={addProfile} />
          </Route>

          <Route path="/List">
            < FinanceList data={data} />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
