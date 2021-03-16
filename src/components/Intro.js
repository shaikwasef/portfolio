import React from 'react'
import Button from "./Button"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import profile from "../assets/profile_photo.jpg"
import "./Intro.css";

const Intro = ({title,desc,backgroundImg,onClickScrollDown ,leftBtnTxt , leftBtnLink, rightBtnTxt , rightBtnLink , twoButtons, first}) => {
    return (
        <div className = "item" style = {{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <div className = "item_container">
                <div className = "item_text">
                    <p>{title}</p>
                <div className = "item_textDesc">
                    <p>{desc}</p>
                    </div>
                <img src={profile} alt = "profile" className = "profile_photo"/>    
                </div>
                <div className = "item_lowerThird">
                    {first &&
                    ( 
                        <div className = "item_expand">
                            <ExpandMoreIcon onClick = {() => {onClickScrollDown()}} className="expandMoreIcon"/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Intro