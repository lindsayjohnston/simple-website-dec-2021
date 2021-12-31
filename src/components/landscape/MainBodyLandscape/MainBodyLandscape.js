import './MainBodyLandscape.css';
import MenuLandscape from '../MenuLandscape/MenuLandscape';
import SectionLandscapeCentered from "../SectionLandscapeCentered/SectionLandscapeCentered";

const mainBodyLandscape = (props) =>{
  //if stuff
  
  return(
      <div className="mainBodyLandscape">
           <MenuLandscape/>
           <SectionLandscapeCentered/>
      </div>
  )
};

export default mainBodyLandscape;