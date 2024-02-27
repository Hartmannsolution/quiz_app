import {useState, useEffect} from 'react'
import LoggedIn from './LoggedIn'
import LoginForm from './LoginForm'
import './login.css'

export default function LoginContainer({facade, setUserContext}) {
    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUserLocally] = useState(null)

    const login = async (user, pass) => {
        await facade.login(user, pass);
        const token = await facade.readJwtToken(facade.getToken());
        const userObj = await {username: token.username, roles: token.roles};
        await  setUserContext(userObj);
        await  setUserLocally(userObj);
        await setLoggedIn(true);
    }
    const logout = () => {
        facade.logout();
        setUserContext(null);
        setUserLocally(null);
        setLoggedIn(false);
    }


  return (
    <div className="logincontainer">
     {!loggedIn ? (<LoginForm login={login} />) :
        (<div>
          <LoggedIn user={user} logout={logout} />
        </div>)}
    </div>
  )
}
