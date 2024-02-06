import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import facade from './apiFacade'

function App() {
  const [userContext, setUserContext] = useState(null)

  return (
    <>
      <Header facade={facade} setUserContext={setUserContext}/>
     <Outlet/>
    </>
  )
}

export default App

const SecretComponent = ({facade, userContext}) => {
  const [dataFromServer, setDataFromServer] = useState("Loading...");
  const [error, setError] = useState(null);
  useEffect(() => {
    facade.fetchAny('protected/user_demo', (data)=>setDataFromServer(data.msg), 
    (err)=>{err?setError("Error: " + err.message):''}, "GET", null, true);
  })
  return (
    <>
    Data from server when logged in as {userContext && userContext.username}: {dataFromServer}
    </>
  )
}