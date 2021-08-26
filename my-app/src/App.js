import './App.css';
import './index.css';
import React, { useState, useEffect } from "react";
import FinanceForm from './components/FinanceForm';
import FinanceCard from './components/FinanceCard';
import Header from './components/Header';


function App() {

  const [data, setData] = useState([])
  // const [comments, setComments] = useState("")

  useEffect(() => {
    fetch("http://localhost:3000/Information")
      .then(res => res.json())
      .then(data => setData(data))
  }, [])



  const formData = data.map(formInfo => {
    return (
      <FinanceCard
        key={formInfo.id}
        name={formInfo.name}
        age={formInfo.age}
        income={formInfo.income}
        occupation={formInfo.occupation}
        interests={formInfo.interests}
        profile_pic={formInfo.profile_pic}
      />
    )
  });

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
        {/* < FinanceCard onCommentSubmit={handleSubmit}/> */}
       <main>{formData}</main>
      </div>
  );
}

export default App;
