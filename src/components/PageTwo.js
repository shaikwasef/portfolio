import React , {useState} from 'react'
import Button from "./Button"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import profile from "../assets/profile_photo.jpg"
import "./PageTwo.css"
import ComputerTwoToneIcon from '@material-ui/icons/ComputerTwoTone';
import netflixlogo from "../assets/netflix_logo.png"
import PageTwo_click_snip from  "./PageTwo_click_snip"

const PageTwo = ({title,onClickScrollDown ,first}) => {
    const [showlogo , setShowLogo] = useState(true);

    const onhandleLogo = () => {
        setShowLogo(false);
    }

    const offhandleLogo = () => {
        setShowLogo(true);
    }

    return (
        <div  className = "item" style = {{
            backgroundColor : "#828282"
        }}>
            <div className = "item_container">
                <div className = "item_text_intro">
                    <p>{title}</p>
            
            <div className = "technologies_container">
                   <div onMouseOut = {offhandleLogo} onMouseOver = {onhandleLogo}> {showlogo ? <img src={netflixlogo} className = "work_logo"/> : <PageTwo_click_snip desc="NETFLIX Clone"/>}</div>
                    
            </div>  
            </div>   
                <div className = "item_lowerThird">
                    {first &&
                    ( 
                        <div className = "item_expand">
                            <ExpandMoreIcon style = {{ color : "black"}}onClick = {() => {onClickScrollDown()}} className="expandMoreIcon"/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PageTwo
