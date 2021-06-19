import React  from 'react'
import "./PageOne.css"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import ComputerTwoToneIcon from '@material-ui/icons/ComputerTwoTone';
import javascriptLogo from "../assets/javascript.png"
import HTMLLogo from "../assets/html.png"
import CSSLogo from "../assets/css.png"
import ReactLogo from "../assets/React.png"
import ReduxLogo from "../assets/Redux.png"
import SpringLogo from "../assets/spring_boot.png"
import TypeScriptLogo from "../assets/typescript-logo.svg"
import NextJSLogo from "../assets/next-js.png"

const PageOne = ({title,desc,descFramework,refToScroll,onClickScrollDown}) => {

    return (
        <div className = "item" style = {{
            backgroundColor : "rgba(161, 161, 161)"
        }}>
            <div className = "item_container">
                <div className = "item_text_intro">
                    <Zoom><p>{title}</p></Zoom>
                <div className = "item_textDesc_pageone">
                    <Zoom><div>{desc}</div></Zoom>
                </div>
                <Zoom>
                <div className = "descFramework">
                    {descFramework} <ComputerTwoToneIcon style = {{
                    margin: "10px"
                }}/>
                </div>
                </Zoom>
            
            <div className = "technologies_container">
            <Flip delay={500} left><img alt = "logo" src={javascriptLogo} className = "technologiesLogo"/></Flip>
            <Flip delay={500} left><img alt = "logo" src = {TypeScriptLogo} className = "technologiesLogo"/></Flip>        
            <Flip delay={500} left><img alt = "logo"  src={HTMLLogo} className = "technologiesLogo"/></Flip>
            <Flip delay={500} left><img alt = "logo"  src={CSSLogo} className = "technologiesLogo"/></Flip>
            <Flip delay={500} left><img alt = "logo"  src={ReactLogo} className = "technologiesLogo"/></Flip>
            <Flip delay={500} left><img alt = "logo"  src={NextJSLogo} className = "technologiesLogo"/></Flip>
            <Flip delay={500} left><img alt = "logo"  src={ReduxLogo} className = "technologiesLogo"/></Flip>
            <Flip delay={500} left><img alt = "logo"  src={SpringLogo} className = "technologiesLogo"/></Flip>
            </div>  
            </div>
            <div>
                            <ExpandMoreIcon style = {{ color : "black" , fontSize :'80'}} onClick = {(reftoScroll) => onClickScrollDown(refToScroll)} className="expandMoreIcon"/>
            </div>
            </div>
        </div>
    )
}

export default PageOne 