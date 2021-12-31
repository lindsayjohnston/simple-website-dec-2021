import "./SectionPortraitTop.css";

const sectionPortraitTop = (props) =>{

    return(
        <div className="sectionPortraitTop">
            <div className="sectionHeadingDiv">
                <div className="anchorLinkDiv" id="top"></div>
                <h1>NO TITLE</h1>
            </div>
            <div className="content">
                <div> 
                    Image goes here
                </div>
                <div>
                    <h1>Info about the business.</h1>
                    <div>
                        Text goes here
                    </div>
                </div>
            </div>
        </div>
    )

}

export default sectionPortraitTop;