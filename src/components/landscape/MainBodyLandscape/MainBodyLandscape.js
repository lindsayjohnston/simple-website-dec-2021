import './MainBodyLandscape.css';
import MenuLandscape from '../MenuLandscape/MenuLandscape';
import SectionLandscapeTop from "../SectionLandscapeTop/SectionLandscapeTop";
import SectionLandscapeCentered from "../SectionLandscapeCentered/SectionLandscapeCentered";
import SectionLandscapeTitleRight from "../SectionLandscapeTitleRight/SectionLandscapeTitleRight";
import SectionLandscapeTitleLeft from "../SectionLandscapeTitleLeft/SectionLandscapeTitleLeft";


const mainBodyLandscape = (props) =>{
  //if stuff
  
  return(
      <div className="mainBodyLandscape">
           <MenuLandscape/>
           <SectionLandscapeTop/>
           <SectionLandscapeCentered/>
           <SectionLandscapeTitleRight/>
           <SectionLandscapeTitleLeft/>
      </div>
  )
};

export default mainBodyLandscape;