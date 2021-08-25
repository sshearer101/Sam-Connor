import './App.css';
import './index.css';
import React, { useState, useEffect } from "react";
import FinanceForm from './components/FinanceForm';
import FinanceCard from './components/FinanceCard';
import Header from './components/Header';

function App() {

  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/information")
      .then(res => res.json())
      //.then(data => console.log(setData(data)))
      .then(data => setData(data))
  }, [])

  function handleAddUser(newUser) {
    const newUserArray = [newUser, ...data];
    setUser(newUserArray);
  }

  const formData = data.map(formInfo => {
    return (
      <FinanceForm
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

  // function addProfile(dataProfile) {
  //   setData([...data, dataProfile])
  // }


  return (
    <>
      <Header />
      <FinanceForm  />
      <FinanceCard />
      <main>{formData}</main>
    </>
  );
}

// return (
//   <div>
//     <Header />
//     <CreateUser />
//     <FinanceForm />
//     <FinanceCard />
//   </div>
// );



export default App;