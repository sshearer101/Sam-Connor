import './App.css';
import './index.css';
import React, { useState, useEffect } from "react";
import FinanceForm from './components/FinanceForm';
import FinanceList from './components/FinanceList';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {

    const [data, setData] = useState([])
    // const [comments, setComments] = useState("")

    useEffect(() => {
        fetch("http://localhost:3000/Information")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])



    function addProfile(dataProfile) {
        setData([...data, dataProfile])
    }


    // function handleSubmit(comment){
    //   setComments([...comments, comment])
    // }


    return (
        <Router>
            <div className="FormPage">        
                <header className="app-header">
                    <Link to="/">Create Account</Link>
                    |
                    <Link to="/financeform">Form</Link>
                    |
                    <Link to="/financelist">List</Link>
                </header>
                <main>
                <Switch>
                    <Route exact path="/">
                        < Header />
                    </Route>
                    <Route path="/financeform">
                        < FinanceForm addProfile={addProfile} />
                    </Route>
                    <Route path="/financelist">
                        < FinanceList data={data} />
                    </Route>
                </Switch>
                </main>
            </div>
        </Router>
    );
}

export default App;