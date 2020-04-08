import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
// import {Greet} from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Stylesheets from './components/Stylesheets'
import Inline from './components/Inline'
import './AppStyle.css';
import styles from './AppStyle.module.css';
import Form from './components/Form'
import FragmentDemo from './components/FragmentDemo'


function App() {
  return (
    <div className="App">
      <FragmentDemo />
      {/*<Form />*/}
      {/*<h1 className='error'>Styles</h1>*/}
      {/*<h1 className={styles.success}>Styles</h1>*/}
      {/*<Inline />*/}
      {/*<Stylesheets primary="true" />*/}
      {/*<NameList />*/}
    	{/*<UserGreeting />*/}
    	{/*<ClassClick />*/}
    	{/*<Counter />*/}
    	{/*<Message />*/}
      {/*<Greet name="JC" schoolName="DHVSU">
				<p>I am so cool</p>
      </Greet>*/}
      {/*<Greet name="Mikha" schoolName="GNC" />*/}
      {/*<Greet name="Jhonel" schoolName="SCA" />*/}
      {/*<Welcome name="JC" schoolName="DHVSU">
				<p>I am so cool</p>
      </Welcome>*/}
      {/*<Welcome name="Mikha" schoolName="GNC" />*/}
      {/*<Welcome name="Jhonel" schoolName="SCA" />*/}
      {/*<Hello />*/}
    </div>
  );
}

export default App;
