import React from 'react'
import Button from "./Button"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import profile from "../assets/profile_photo.jpg"
import "./PageOne.css"
import ComputerTwoToneIcon from '@material-ui/icons/ComputerTwoTone';
import javascriptLogo from "../assets/javascript.png"
import HTMLLogo from "../assets/html.png"
import CSSLogo from "../assets/css.png"
import ReactLogo from "../assets/React.png"
import ReduxLogo from "../assets/Redux.png"
import JavaLogo from "../assets/Java.png"
import SpringLogo from "../assets/spring.png"

const PageOne = ({title,desc,onClickScrollDown , descFramework ,first}) => {
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
                   <img src={javascriptLogo} className = "technologiesLogo"/> 
                   <img src={HTMLLogo} className = "technologiesLogo"/> 
                   <img src={CSSLogo} className = "technologiesLogo"/> 
                   <img src={ReactLogo} className = "technologiesLogo"/> 
                   <img src={ReduxLogo} className = "technologiesLogo"/> 
                   <img src={JavaLogo} className = "technologiesLogo"/> 
                   <img src={SpringLogo} className = "technologiesLogo" 
                   style = {{
                       marginLeft: "-30px"
                   }}
                   /> 
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

export default PageOne 