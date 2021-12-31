import "./SectionPortrait.css";

const sectionPortrait = (props) =>{
    const sectionClasses= "sectionPortrait " + props.fontClass + " " + props.bgClass;

    return(
        <div className={sectionClasses}>
            <div className="sectionHeadingDiv">
                <div className="anchorLinkDiv" id="top"></div>
                <h1>TITLE</h1>
            </div>
            <div className="content">
                <div className="content1Div">
                    Content 1 goes here.
                </div>
                <div>
                    Image goes here
                </div>
                <div className="content2Div">
                    Content 2 goes here.
                </div>
            </div>
        </div>
    )

}

export default sectionPortrait;