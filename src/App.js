import React from 'react';
import './App.css';
import MainBodyLandscape from '../src/components/landscape/MainBodyLandscape/MainBodyLandscape';
import MainBodyPortrait from '../src/components/portrait/MainBodyPortrait/MainBodyPortrait';
import Footer from '../src/components/footer/footer';
import topImage from '../src/media/logos/bocaloud_first_logo_.png';
import workImage from '../src/media/images/computer-lady-hands.png';
import aboutImage from '../src/media/images/lindsay-glasses.png';
import contactImage from '../src/media/images/red-phone.jpg';


let screenOrientation= null;
if((window.innerHeight / window.innerWidth) < .87){
  screenOrientation= "landscape";
} else {
  screenOrientation= "portrait";
};

const sections = [
  { id: "top",
    title: null,
    image: topImage,
    content1: 
      <a className="linkButton" href="https://forms.gle/bZXqjd5rsD8wwTm5A" target="_blank" rel="noreferrer">Click to Get a Website By Next Week!</a> 
   , 
    content2:
      <div>
        <h1>Get an affordable website - fast!</h1>
        <p>Let's get you online.</p>
      </div>,
    },
    { id: "work",
    title: "Our Work",
    image: workImage,
    content1: 
      <div>
        <ul>
        <li>
            <a href="https://master.d3psjk7ty1d27s.amplifyapp.com/" target="_blank" rel="noreferrer">
              Flower Farm Website</a>
          </li>
          <li>
            <a href="https://master.d3euk1bu830ig4.amplifyapp.com/" target="_blank" rel="noreferrer">
              Bait & Tackle Website</a>
          </li>
          <li>
            <a href="https://www.micahclay.us/" target="_blank" rel="noreferrer">
              Micah Clay - Musician Website</a>
          </li>
          <li>
            <a href="https://www.vannaoh.com/" target="_blank" rel="noreferrer">
              Vanna Oh! - Musician Website</a>
          </li>
        </ul> 
      </div>
      
      ,
    content2: null
    },
    { id: "about",
    title: "About",
    image: aboutImage,
    content1: 
      <div>
        <h2>L.J.</h2>
        <h3>Small Business Owner - Tri-Cities Native</h3>
      </div>,
    content2:
      <p>Hi! I'm the founder of Bocaloud. For over a decade I've worked in the nonprofit and small businesss sectors. There are so many incredible organizations in need of sleek and affordable websites. I'm here to fill that need!</p>
    },
    { id: "contact",
    title: "Contact",
    image: contactImage,
    content1: 
      <div>
        <h3>E-mail:</h3>
        <a href="mailto:bocaloudcontact@gmail.com" >bocaloudcontact@gmail.com</a>
        <h3>Social:</h3>
        <a href="https://www.instagram.com/bocaloud/" target="_blank" rel="noreferrer" >Instagram</a>
      </div>
    },

];

class App extends React.Component {
  
  state= {
    sectionShown:'top',
    menuModalShown: false,
    screenOrientation:screenOrientation,
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
                  sections={sections} />;
      appClasses= "appLandscape";
    } else {
      appBody = <MainBodyPortrait 
                  // menuClick = {this.sectionShownHandler}
                  barsClick= {this.menuModalOpenHandler}
                  closeModalClick={this.menuModalCloseHandler}
                  menuModalShown= {this.state.menuModalShown}
                  sectionShown= {this.state.sectionShown} 
                  sections={sections}
                />;
      appClasses= "appPortrait";
    }

    return (
      <div className={appClasses}>
        {appBody}
        <Footer />
      </div>
    );

  }
  
}

export default App;
