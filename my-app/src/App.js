import './App.css';
import React, { useState, useEffect } from "react";
import FormList from './components/FormList';
import FormCard from './components/FormCard';
import Header from './components/Header';

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/Information")
      .then(res => res.json())
      .then(data => console.log(setData(data)))
  }, [])

  const getNextId = ((id) => () => ++id)(2)


  const formData = data.map(formInfo => {
    return (
      <FormCard
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
      < FormList addProfile={addProfile} getNextId={getNextId} />
      <main>{formData}</main>
    </div>
  );
}

export default App;