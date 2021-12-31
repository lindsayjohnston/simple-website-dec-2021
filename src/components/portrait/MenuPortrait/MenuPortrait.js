import './MenuPortrait.css';

const menuPortrait = (props) =>{
  //if stuff
  let menuModalClasses= "menuModal"
  if (!props.menuModalShown){
    menuModalClasses+= " hidden";
  } 
  
  return(
      <div className="menuPortrait">
            <div className="title">
                <h1>bocaloud</h1>
            </div>
            <div className="hamburgerMenuDiv">
              <i 
                onClick= {() => {props.barsClick()}}
                class="fas fa-bars fa-2x"></i>
            </div>
            <div className={menuModalClasses}>
                <div className="menuModalHeader">
                    <i onClick={() =>{props.closeModalClick()}} class="fas fa-times fa-2x"></i>
                </div>
                <div className="menuModalLinks">
                    <a href="#ANCHOR1">
                        Link
                    </a>
                    <a href="#ANCHOR1">
                        Link
                    </a>
                    <a href="#ANCHOR1">
                        Link
                    </a>

                </div>
            </div>
      </div>
  )
};

export default menuPortrait;