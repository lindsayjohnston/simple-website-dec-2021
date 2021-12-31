import './MainBodyPortrait.css';
import MenuPortrait from '../MenuPortrait/MenuPortrait';
import SectionPortraitTop from "../SectionPortraitTop/SectionPortraitTop";
import SectionPortraitCentered from "../SectionPortraitCentered/SectionPortraitCentered";

const mainBodyPortrait = (props) =>{
    //if stuff
    
    return(
        <div className="mainBodyPortrait">
            <MenuPortrait 
                barsClick={()=> props.barsClick()}
                menuModalShown= {props.menuModalShown}
                closeModalClick= {() =>{props.closeModalClick()}}
            />
            <SectionPortraitTop />
            <SectionPortraitCentered fontClass="fontColorLight" bgClass="bgColorMain" />
            <SectionPortraitCentered fontClass="fontColorDark" bgClass="bgColorLight"/>
            <SectionPortraitCentered fontClass="fontColorLight" bgClass="bgColorDark" />
        </div>
    )
  };
  
  export default mainBodyPortrait;