import { useRef } from 'react';
import './App.css';


function App() {
  const userNameRef = useRef();
  const userPassword =useRef();

  const Texthandaler = (e)=>{
     e.preventDefault();
     
      console.log(e);
     const username = userNameRef.current.value;
     const Password = userPassword.current.value;

     const result=`
      username: ${username}
      password: ${Password}
      `
      alert(result);

  }




  return (
    <div className='main-container'>
      <form onSubmit={(e) => Texthandaler(e)} className="from-container">
        <h3>Wellcome! Login Here</h3>
        <div>
        <label htmlFor='username'>UserName:</label>
        <input 
        id='username'
        ref={userNameRef}
        type="text" 
        placeholder='Enter Your Username'
        />
        </div>

          <br />

        <div>
        <label htmlFor="password">Password:</label>
        <input 
        type="password"
        id='password'
        ref={userPassword}
        placeholder='Enter Your Password'
         />
        </div>

        <button type="submit">Log in</button>
      </form>
    </div>
  );
}

export default App;
