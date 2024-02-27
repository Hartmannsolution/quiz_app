import React, { useState,useEffect } from "react"
function LoggedIn({user, logout}){
    
  
    return (
      <>
          {user && user.username}{" "}
          <button onClick={logout}>Logout</button>
      </>
    )
  }
export default LoggedIn;