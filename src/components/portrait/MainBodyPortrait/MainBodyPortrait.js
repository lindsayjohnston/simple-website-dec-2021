import './MainBodyPortrait.css';
import MenuPortrait from '../MenuPortrait/MenuPortrait';

const mainBodyPortrait = (props) =>{
    //if stuff
    
    return(
        <div className="mainBodyPortrait">
            <MenuPortrait 
                barsClick={()=> props.barsClick()}
                menuModalShown= {props.menuModalShown}
                closeModalClick= {() =>{props.closeModalClick()}}
            />
        </div>
    )
  };
  
  export default mainBodyPortrait;