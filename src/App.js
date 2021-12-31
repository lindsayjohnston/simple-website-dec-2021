import React from 'react';
import './App.css';
import MainBodyLandscape from '../src/components/landscape/MainBodyLandscape/MainBodyLandscape';
import MainBodyPortrait from '../src/components/portrait/MainBodyPortrait/MainBodyPortrait';



let screenOrientation= null;
if((window.innerHeight / window.innerWidth) < .87){
  screenOrientation= "landscape";
} else {
  screenOrientation= "portrait";
};

class App extends React.Component {
  
  state= {
    sectionShown:'top',
    menuModalShown: false,
    screenOrientation:screenOrientation,
    sections: [
      { id: 1,
        title: "top",
        }
    ]

      //state goes here
  }

  constructor(props) {
    super(props);
    this.checkScreenOrientation = this.checkScreenOrientation.bind(this);
    this.setScreenOrientation = this.setScreenOrientation.bind(this);
    this.sectionShownHandler.bind(this);
    this.menuModalCloseHandler.bind(this);
    this.menuModalOpenHandler.bind(this);
  }

  checkScreenOrientation = () => {
    let newOrientation= null;

    if((window.innerHeight/ window.innerWidth) < .87){
      newOrientation= "landscape";
    } else {
      newOrientation= "portrait";
    } 

    if(newOrientation !== this.state.screenOrientation){
      this.setScreenOrientation(newOrientation);
    }
  }

  setScreenOrientation= (newOrientation)=>{
    this.setState({
      screenOrientation: newOrientation
    })
  }

  sectionShownHandler = (sectionId) =>{
    this.setState ({
      sectionShown : sectionId
    })
  }

  menuModalCloseHandler = () =>{
    this.setState ({
      menuModalShown: false
    })
  }

  menuModalOpenHandler = () =>{
    this.setState ({
      menuModalShown: true
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.checkScreenOrientation);
    window.addEventListener("orientationchange", this.checkScreenOrientation);
  }

  render(){
    let appBody = null;
    let appClasses= "";
 
    if (this.state.screenOrientation === "landscape") {
      appBody = <MainBodyLandscape 
                  menuClick = {this.pageShownHandler}
                  pageShown= {this.state.pageShown} 
                  pages={this.state.pages} />;
      appClasses= "appLandscape";
    } else {
      appBody = <MainBodyPortrait 
                  menuClick = {this.pageShownHandler}
                  barsClick= {this.menuModalOpenHandler}
                  closeModalClick={this.menuModalCloseHandler}
                  menuModalShown= {this.state.menuModalShown}
                  pageShown= {this.state.pageShown} 
                  pages={this.state.pages}
                />;
      appClasses= "appPortrait";
    }

    return (
      <div className={appClasses}>
        {appBody}
      </div>
    );

  }
  
}

export default App;
