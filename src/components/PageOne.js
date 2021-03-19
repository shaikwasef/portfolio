import React from 'react'
import "./PageOne.css"
import ComputerTwoToneIcon from '@material-ui/icons/ComputerTwoTone';
import javascriptLogo from "../assets/javascript.png"
import HTMLLogo from "../assets/html.png"
import CSSLogo from "../assets/css.png"
import ReactLogo from "../assets/React.png"
import ReduxLogo from "../assets/Redux.png"
import JavaLogo from "../assets/Java.png"
import SpringLogo from "../assets/spring.png"

const PageOne = ({title,desc,descFramework}) => {
    return (
        <div className = "item" style = {{
            backgroundColor : "rgba(161, 161, 161)"
        }}>
            <div className = "item_container">
                <div className = "item_text_intro">
                    <p>{title}</p>
                <div className = "item_textDesc_pageone">
                    <p>{desc}</p>
                </div>
                <p className = "descFramework">{descFramework} <ComputerTwoToneIcon style = {{
                    margin: "10px" ,
                    fontSize : 40
                }}/>
                </p>
            
            <div className = "technologies_container">
                   <img alt = "logo" src={javascriptLogo} className = "technologiesLogo"/> 
                   <img alt = "logo"  src={HTMLLogo} className = "technologiesLogo"/> 
                   <img alt = "logo"  src={CSSLogo} className = "technologiesLogo"/> 
                   <img alt = "logo"  src={ReactLogo} className = "technologiesLogo"/> 
                   <img alt = "logo"  src={ReduxLogo} className = "technologiesLogo"/> 
                   <img alt = "logo"  src={JavaLogo} className = "technologiesLogo"/> 
                   <img alt = "logo"  src={SpringLogo} className = "technologiesLogo" 
                   style = {{
                       marginLeft: "-30px"
                   }}
                   /> 
            </div>  
            </div>   
            </div>
        </div>
    )
}

export default PageOne 