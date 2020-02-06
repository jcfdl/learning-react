import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
// import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
    	{/*<Counter />*/}
    	{/*<Message />*/}
      {/*<Greet name="JC" schoolName="DHVSU">
				<p>I am so cool</p>
      </Greet>*/}
      <Greet name="Mikha" schoolName="GNC" />
      {/*<Greet name="Jhonel" schoolName="SCA" />*/}
      {/*<Welcome name="JC" schoolName="DHVSU">
				<p>I am so cool</p>
      </Welcome>*/}
      <Welcome name="Mikha" schoolName="GNC" />
      {/*<Welcome name="Jhonel" schoolName="SCA" />*/}
      {/*<Hello />*/}
    </div>
  );
}

export default App;
