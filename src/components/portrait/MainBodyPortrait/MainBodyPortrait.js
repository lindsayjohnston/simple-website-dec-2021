import './MainBodyPortrait.css';
import MenuPortrait from '../MenuPortrait/MenuPortrait';
import SectionPortraitTop from "../SectionPortraitTop/SectionPortraitTop";
import SectionPortrait from "../SectionPortrait/SectionPortrait";


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
            <SectionPortrait fontClass="fontColorLight" bgClass="bgColorMain" />
            <SectionPortrait fontClass="fontColorDark" bgClass="bgColorLight"/>
            <SectionPortrait fontClass="fontColorLight" bgClass="bgColorDark" />
        </div>
    )
  };
  
  export default mainBodyPortrait;