import './App.css';
import './index.css';
import React, { useState, useEffect } from "react";
import FinanceForm from './components/FinanceForm';
import FinanceCard from './components/FinanceCard';
import Header from './components/Header';
// import Login from './components/Login';

function App() {

  const [userInfo, setUserInfo] = useState([]);
  // const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/information")
      .then(res => res.json())
      //.then(data => console.log(setData(data)))
      .then(data => setUserInfo(data))
  }, [])

  function handleAddProfile(newUser) {
    const newUserArray = [newUser, ...userInfo];
    setUserInfo(newUserArray);
  }

  function handleAddProfile(newProfile) {
    const newProfileArray = [newProfile, ...userInfo];
    setUserInfo([...userInfo, newProfile])
    //setUserInfo(newProfileArray);
  }

  return (
    <>
      <Header />
      {/* <CreateUser /> */}
      <FinanceForm  userInfo={userInfo} onAddProfile={handleAddProfile}/>
      {/* <FinanceForm /> */}
      <FinanceCard userInfo={userInfo} onAddProfile={handleAddProfile}/>
      {/* <FinanceCard /> */}
      {/* <main>{formData}</main> */}
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