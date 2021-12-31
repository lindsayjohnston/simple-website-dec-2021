import './MenuLandscape.css';

const menuLandscape = (props) =>{
  const sectionsInfo= props.sections;

  
  return(
      <div className="menuLandscape">
            <div className="title">
                <h1>bocaloud</h1>
            </div>
            <div className="sectionLinks">
                {sectionsInfo.map( section =>(
                  <a href={section.id}>{section.title}</a>
                ))}
            </div>
      </div>
  )
};

export default menuLandscape;