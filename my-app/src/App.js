import './App.css';
import './index.css';
import React, { useState, useEffect } from "react";
import FinanceForm from './components/FinanceForm';
import FinanceCard from './components/FinanceCard';
import Header from './components/Header';


function App() {

  const [data, setData] = useState([])

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
        housing={formInfo.housing}
        living_expenses={formInfo.living_expenses}
        bills={formInfo.bills}
        entertainment={formInfo.entertainment}
      />
    )
  });


  function addProfile(dataProfile) {
    setData([...data, dataProfile])
  }



  return (
      <div className="FormList">
        < Header />
        < FinanceForm addProfile={addProfile}  />
       <main>{formData}</main>
      </div>
  );
}

export default App;
