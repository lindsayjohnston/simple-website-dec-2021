import React from 'react';
import './App.css';

//Adjust viewport height for mobile browser
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', ()=>{
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
})

let screenOrientation= null;
if((window.innerHeight / window.innerWidth) < .87){
  screenOrientation= "landscape";
} else {
  screenOrientation= "portrait";
};

class App extends React.Component {
  
  state= {

      //state goes here
  }

  constructor(props){
    super(props);
    //all methods
  }

  render(){
    //if stuff and functions

    return (
      <div className="App">
        This will be the app.
       
      </div>
    );

  }
  
}

export default App;
