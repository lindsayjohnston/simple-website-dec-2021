import "./SectionLandscapeCentered.css";

const sectionLandscapeCentered = (props) =>{

    return(
        <div className="sectionLandscapeCentered">
            <div className="sectionHeadingDiv">
                <div className="anchorLinkDiv" id="ANCHOR"></div>
                <h1>Title</h1>
            </div>
            <div className="content">
                <div className="left">
                    Image Goes Here
                </div>
                <div className="right">
                    <div className="content1Div"> Content 1</div>
                    <div className="content2Div"> Content 2</div>

                </div>
                
            </div>
        </div>
    )

}

export default sectionLandscapeCentered;