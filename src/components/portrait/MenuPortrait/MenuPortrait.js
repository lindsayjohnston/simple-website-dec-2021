import './MenuPortrait.css';

const menuPortrait = (props) =>{
  
  let menuModalClasses= "menuModal"
  if (!props.menuModalShown){
    menuModalClasses+= " hidden";
  } 

  const sectionsInfo= props.sections;
  
  return(
      <div className="menuPortrait">
            <div className="title">
                <h1>bocaloud</h1>
            </div>
            <div className="hamburgerMenuDiv">
              <i
                  onClick={() => { props.barsClick() }}
                  class="fas fa-bars fa-2x"></i>
          </div>
          <div className={menuModalClasses}>
              <div className="menuModalHeader">
                  <i onClick={() => { props.closeModalClick() }} class="fas fa-times fa-2x"></i>
              </div>
              <div className="menuModalLinks">
                  {sectionsInfo.map(section => (
                      <a href={section.id}>
                          {section.title}
                          {/* need to add click handler to links */}
                      </a>
                  ))}

              </div>
          </div>
      </div>
  )
};

export default menuPortrait;