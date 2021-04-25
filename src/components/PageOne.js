import React from 'react'
import "./PageOne.css"
import ComputerTwoToneIcon from '@material-ui/icons/ComputerTwoTone';
import javascriptLogo from "../assets/javascript.png"
import HTMLLogo from "../assets/html.png"
import CSSLogo from "../assets/css.png"
import ReactLogo from "../assets/React.png"
import ReduxLogo from "../assets/Redux.png"
import SpringLogo from "../assets/spring_boot.png"

const PageOne = ({title,desc,descFramework}) => {
    return (
        <div className = "item" style = {{
            backgroundColor : "rgba(161, 161, 161)"
        }}>
            <div className = "item_container">
                <div className = "item_text_intro">
                    <p>{title}</p>
                <div className = "item_textDesc_pageone">
                    <div>{desc}</div>
                </div>
                <div className = "descFramework">{descFramework} <ComputerTwoToneIcon style = {{
                    margin: "10px"
                }}/>
                </div>
            
            <div className = "technologies_container">
                   <img alt = "logo" src={javascriptLogo} className = "technologiesLogo"/> 
                   <img alt = "logo"  src={HTMLLogo} className = "technologiesLogo"/> 
                   <img alt = "logo"  src={CSSLogo} className = "technologiesLogo"/> 
                   <img alt = "logo"  src={ReactLogo} className = "technologiesLogo"/> 
                   <img alt = "logo"  src={ReduxLogo} className = "technologiesLogo"/>  
                   <img alt = "logo"  src={SpringLogo} className = "technologiesLogo" /> 
            </div>  
            </div>   
            </div>
        </div>
    )
}

export default PageOne 