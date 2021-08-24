import './App.css';
import React, { useState, useEffect } from "react";
import FormList from './components/FormList';
import FormCard from './components/FormCard';

function App() {

const [data, setData] = useState([])

useEffect(() => {
  fetch("http://localhost:3000/Information")
  .then (res => res.json())
  .then (setData)
}, [])

const formData = data.map(information => {
  return (
    <FormCard 
      key={information.id}
      name ={information.name}
      age={information.age}
      income={information.income}
      rent={information.rent}
      living_expenses={information.living_expenses}
      bills={information.bills}
      entertainment={information.entertainment}
    />
  )
});

function addProfile(dataProfile){
  setData([...data, dataProfile])
}


  return (
    <div className="FormList">
      < FormList addProfile={addProfile}/>
      <main>{formData}</main>
    </div>
  );
}

export default App;
