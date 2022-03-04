import './App.css';
//import { useState } from 'react';
import Foco from './components/Foco';

function App() {

  // const [ message, setMessage ] = useState("Mensaje por defecto");
  
  // const changeMessage = () => {
  //   console.log ("Cambio el mensajito uwu");
  //   if (message === "Mensaje por defecto") {
  //     setMessage("Nuevo mensaje");
  //   }else {
  //     setMessage("Mensaje por defecto")
  //   }
    //const name = document.getElementById ("name");
    //name.textContent = "Lizbeth"
  //}
//////////////////////////////////////////////////////////////////////////
  // const [ isVisible, setIsVisible ] = useState (false)

  // const togglePassword = () => {
  //   console.log ("Mamalonche")
  //   setIsVisible(!isVisible)
  // }
  return (
    <div className="App">
      {/* {/* <h2>{message}</h2>
      <button onClick={changeMessage}>Change Name</button> 
      /* //////////////////////////////////////////////// 
      <label htmlFor="password">Coloca tu contraseña</label>
      <input type={isVisible ? "text" : "password"} id='password'/>

      /* Alternativa para el onClick 
      /* <button onClick={() => setIsVisible (!isVisible)}>{ isVisible ? "Ocultar contraseña" : "Mostrar contraseña" }</button> 
      
      <button onClick={togglePassword}> { isVisible ? "Ocultar contraseña" : "Mostrar contraseña" } </button>
      */}
      <Foco/>
    </div>
  );
}

export default App;
