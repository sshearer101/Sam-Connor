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

  const headers = {
    Accepts: 'application/json',
    'Content-type': 'application/json',
  };

  const [data, setData] = useState([])
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/Information")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  function addProfile(dataProfile) {
    setData([...data, dataProfile])
  }

  // function addComment(comment) {
  //   fetch("http://localhost:3000/Information", {
  //     method: 'POST',
  //     body: JSON.stringify(comment),
  //     headers,
  //   })
  //     .then((res) => res.json())
  //     .then((json) => setComments([...comments, json]));
  // }
  // function addComment(id){
  //   setComments(comments.map(comment => comment.id === id))
  // }

  function addComment(comment){
    console.log(comment, "in App")
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
            < FinanceList data={data} addComment={addComment} />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
