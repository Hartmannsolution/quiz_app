const BACKEND_URL = "https://api.cphbusinessapps.dk/api/";
import properties from "./properties";

// function handleHttpErrors(res) {
//  if (!res.ok) {
//    return Promise.reject({ status: res.status, fullError: res.json() })
//  }
//  return res.json();
// }

function apiFacade() {
 /* Insert utility-methods from a later step (d) here (REMEMBER to uncomment in the returned object when you do)*/
 
const login = (user:string, password:string) => {
    // console.log("login");
    // const options = makeOptions("POST", true,{username: user, password: password });
    // return fetch(`${BACKEND_URL}auth/login`, options)
    //   .then(handleHttpErrors)
    //   .then(res => {setToken(res.token.split(" ")[1]) }) // remove the Bearer part of the token
    fetchAny(`auth/login`
    , (data:{token:string})=>setToken(data.token)
    , (err:string)=>console.log(err)
    , "POST"
    , {username: user, password: password }
    , false);
}
async function fetchAny(url:string, handleData:any , handleError:any, method:string, body:object, withToken:boolean) {
  if (properties && properties.backendURL)
    url = `${properties.backendURL}${url}`;
  try {
    const options = makeOptions(method, withToken, body);
    const response = await fetch(url, options);
    const json = await handleHttpErrors(response);
    console.log("fetchAny", json);
    handleData(json);
  } catch (error: any) {
    if(error.status){
      const message = await error.fullError;
      //console.log("ERROR:",error.status, message.message);
      handleError(message.message);
    } else {
      handleError("Network error");
    }
  }
  interface Options {
    method: string;
    headers: {
      "Content-type"?: string;
      "Accept": string;
      "Authorization"?: string;
    };
    body?: string;
  }
  
  function makeOptions(method:string, withToken:boolean, body:object) {
    method = method ? method : 'GET';
    var opts: Options = {
      method: method,
      headers: {
        ...(['PUT', 'POST'].includes(method) && { //using spread operator to conditionally add member to headers object.
          "Content-type": "application/json"
        }),
        "Accept": "application/json"
      }
    }
    if (withToken && loggedIn()) {
      opts.headers["Authorization"] = `Bearer ${getToken()}`;
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  }

  function handleHttpErrors(res:Response) {
    if (!res.ok) {
      return Promise.reject({ status: res.status, fullError: res.json() })
    }
    return res.json();
  }
}
// const makeOptions= (method, addToken, body) =>{
//    var opts = {
//      method: method,
//      headers: {
//        "Content-type": "application/json",
//        "Accept": "application/json",
//      }
//    }
//    if (addToken && loggedIn()) {
//      opts.headers["Authorization"] = `Bearer ${getToken()}`;
//    }
//    if (body) {
//      opts.body = JSON.stringify(body);
//    }
//    return opts;
//  }
 const setToken = (token:string) => {
    localStorage.setItem('jwtToken', token)
  }
const getToken = () => {
  return localStorage.getItem('jwtToken')
}
const loggedIn = () => {
  const loggedIn = getToken() != null;
  return loggedIn;
}
const logout = () => {
  localStorage.removeItem("jwtToken");
}
function readJwtToken (token:string | null) {
    // console.log('TOKEN: ',token);
    // console.log('TOKEN opened with atob: ',window.atob(token));
    if(token === null && token !== undefined)
        return null;
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    // console.log(base64);
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    //console.log(jsonPayload);
    return JSON.parse(jsonPayload);
}

 return {
     setToken,
     getToken,
     loggedIn,
     login,
     logout,
     fetchAny,
     readJwtToken,
 }
}
const facade = apiFacade();
export default facade;
