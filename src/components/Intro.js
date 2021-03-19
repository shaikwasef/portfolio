import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import profile from "../assets/profile_photo.jpg"
import "./Intro.css";
import GetAppIcon from '@material-ui/icons/GetApp'
import DescriptionIcon from '@material-ui/icons/Description';

const Intro = ({title,desc,backgroundImg,onClickScrollDown,first}) => {
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
                   
                <a target="_blank" style = {{textDecoration : "inherit"}}
                href = "https://drive.google.com/file/d/16NeFdJcIjlEWokzfFEkq9fo7Z4oaAB55/view?usp=sharing"><button className = "resume_button"><DescriptionIcon className = "document_symbol"/>Resume</button></a>
            </div>
                <div className = "item_lowerThird">
                    {first &&
                    ( 
                        <div>
                            <ExpandMoreIcon style = {{ color : "black"}}onClick = {() => {onClickScrollDown()}} className="expandMoreIcon"/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Intro
