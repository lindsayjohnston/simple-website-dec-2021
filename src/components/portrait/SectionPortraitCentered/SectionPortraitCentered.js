import "./SectionPortraitCentered.css";

const sectionPortraitCentered = (props) =>{
    const sectionClasses= "sectionPortraitCentered " + props.fontClass + " " + props.bgClass;

    return(
        <div className={sectionClasses}>
            <div className="sectionHeadingDiv">
                <div className="anchorLinkDiv" id="top"></div>
                <h1>TITLE</h1>
            </div>
            <div className="content">
                <div> 
                    Image goes here
                </div>
                <div>
                    <div>
                        Text goes here
                    </div>
                </div>
            </div>
        </div>
    )

}

export default sectionPortraitCentered;