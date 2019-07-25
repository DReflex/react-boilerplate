import React, {useContext} from 'react';
import {UserContext} from '../stateProvider';
import {BunContext} from '../stateProvider'

const Home =() => {

    const [user, setUser] = useContext(UserContext);
    const [buns, setBuns] = useContext(BunContext);
    const apiEndpoint = 'http://localhost:3000/api/user/my%20User';
    const productEndpoint = 'http://localhost:3000/product/buns';
    
    function userRequest (url){
        fetch(url).then(res => res.json()).then(data => {
            setUser({
              ...user,
              username: data.username,
              email: data.email

            })
           
        })
    }
    function bunRequest (url){
      fetch(url).then(res => res.json()).then(data => {
        
        
         setBuns(
            
           data.data
           
         )
      })
  }
  console.info(buns)
  return (
    <div>
        {
          
              (user.username) ?( <p>User logged in with name: <b>{user.username}</b> and email: <b>{user.email}</b> </p>) : <p>please Login</p>
            
        }
        {
          (buns.length )? (buns.map((bun, key) =>{return <p key={key}> hello {bun.name}</p>}
          )): ''
        }
        
      <button onClick={() => userRequest(apiEndpoint)}>
        Login
      </button>
      <button onClick={() => bunRequest(productEndpoint)}>
        log bun
      </button>
    </div>
  );
}

export default Home;