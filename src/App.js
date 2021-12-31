import React from 'react';
import './App.css';
import MainBodyLandscape from '../src/components/landscape/MainBodyLandscape/MainBodyLandscape';
import MainBodyPortrait from '../src/components/portrait/MainBodyPortrait/MainBodyPortrait';
import topImage from '../src/media/logos/bocaloud_first_logo_.png';
import workImage from '../src/media/images/computer-lady-hands.png';
import aboutImage from '../src/media/images/lindsay-glasses.JPG';
import contactImage from '../src/media/images/red-phone.jpg';



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
      { id: "top",
        title: null,
        image: topImage,
        content1: 
          <div>
            <h1>Info about the business.</h1>
            <p>Text goes here.</p>
          </div>,
        content2:null
        },
        { id: "work",
        title: "Our Work",
        image: workImage,
        content1: 
          <div>
            <p>Text goes here.</p>
          </div>,
        content2: null
        },
        { id: "about",
        title: "About",
        image: aboutImage,
        content1: 
          <div>
            <h2>Lindsay Johnston</h2>
            <h3>Small Business owner.</h3>
          </div>,
        content2:
          <p>Thanks for visiting my website! For over a decade I have worked in the non-profit and small businesss sector. I've seen a great need for affordable websites in this area and I'm here to meet that need!</p>
        },
        { id: "contact",
        title: "Contact",
        image: contactImage,
        content1: 
          <div>
            <h3>E-mail:</h3>
            <a href="mailto:bocaloud@gmail.com" >bocaloud@gmail.com</a>
            <h3>Social:</h3>
            <a href="https://www.instagram.com/bocaloud/" target="_blank" rel="noreferrer" >Instagram</a>
          </div>
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
                  menuClick = {this.sectionShownHandler}
                  sectionShown= {this.state.sectionShown} 
                  sections={this.state.sections} />;
      appClasses= "appLandscape";
    } else {
      appBody = <MainBodyPortrait 
                  menuClick = {this.sectionShownHandler}
                  barsClick= {this.menuModalOpenHandler}
                  closeModalClick={this.menuModalCloseHandler}
                  menuModalShown= {this.state.menuModalShown}
                  sectionShown= {this.state.sectionShown} 
                  sections={this.state.sections}
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
