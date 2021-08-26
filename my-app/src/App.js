import './App.css';
import './index.css';
import React, { useState, useEffect } from "react";
import FinanceForm from './components/FinanceForm';
import FinanceList from './components/FinanceList';
import Header from './components/Header';


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
      <div className="FormList">
        < Header />
        < FinanceForm addProfile={addProfile}  />
        < FinanceList data={data}/>
      </div>
  );
}

export default App;
