import "./SectionLandscapeTitleLeft.css";

const sectionLandscapeTitleLeft = (props) =>{

    return(
        <div className="sectionLandscapeTitleLeft">
            <div className="sectionHeadingDiv">
                <div className="anchorLinkDiv" id="ANCHOR1"></div>
            </div>
            <div className="content">
                <div className="left">
                    <h1>Title</h1>
                    <div className="content1Div"> Content 1</div>
                    <div className="content2Div"> Content 2</div>
                </div>
                <div className="right"> 
                    Image goes here
                </div>
            </div>

        </div>
    )

}

export default sectionLandscapeTitleLeft;