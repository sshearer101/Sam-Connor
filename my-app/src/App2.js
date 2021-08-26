import './App.css';
import './index.css';
import React, { useState, useEffect } from "react";
// import { Route, Switch } from 'react-router-dom';
import FinanceForm from './components/FinanceForm';
import FinanceCard from './components/FinanceCard';
import Header from './components/Header';
// import Login from './components/Login';

function App() {

  const [userInfo, setUserInfo] = useState([]);
  const [user, setUser] = useState(null);

  const API = "http://localhost:3000/information";

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setUserInfo(data))
    //.then(data => console.log(data))
  }, [])

  function handleAddProfile(newUser) {
    const newUserArray = [newUser, ...userInfo];
    // console.log(newUserArray);
    setUserInfo(newUserArray);
  }

  //test function from study
  //add POST here from Form for userObj (inverse flow)
  //passed down by passing down a prop of a cb function
  // function addUser(userObj) {
  //   console.log(userObj)
  //   setUserInfo([...userInfo, userObj])
  // }

  const formData = userInfo.map(formInfo => {
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

  return (
    <>
      <Header user={user} setUser={setUser} />
      {user ? <p>Welcome, {user.username}</p> : <em>Please log in!</em>}
      {/* <FinanceForm addUser={addUser} /> */}
      <FinanceForm userInfo={userInfo} onAddProfile={handleAddProfile} />
      <FinanceCard
        userInfo={userInfo}
        // {<main>{formData}</main>}
    />
      {<main>{formData}</main>}

    {/* <FinanceCard userInfo={userInfo} addUser={addUser} onAddProfile={handleAddProfile} /> */ }
      {/* <FinanceCard userCards={userCards} /> */ }
  {/* <FinanceCard userInfo={userInfo.filter(user => user.enlisted)} userInfo={userInfo} onAddProfile={handleAddProfile} /> */ }

    </>
  );
}

export default App;
















  // const formData = data.map(formInfo => {
  //   return (
  //     <FinanceForm
  //       key={formInfo.id}
  //       name={formInfo.name}
  //       age={formInfo.age}
  //       income={formInfo.income}
  //       housing={formInfo.housing}
  //       living_expenses={formInfo.living_expenses}
  //       bills={formInfo.bills}
  //       entertainment={formInfo.entertainment}
  //     />
  //   )
  // });