import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Fade from 'react-reveal/Fade';
import profile from "../assets/profile_photo.jpg"
import "./Intro.css";
import DescriptionIcon from '@material-ui/icons/Description';

const Intro = ({title,desc,backgroundImg,onClickScrollDown,first,refToScroll}) => {
    return (
        
        <div className = "item" style = {{
            backgroundImage: `url(${backgroundImg})`
        }}>
            <div className = "item_container">
                <div className = "item_text" >
                <Fade bottom><p>{title}</p></Fade>
                <div className = "item_textDesc">
                <Fade bottom><p>{desc}</p></Fade>
                    </div>
                <img src={profile} alt = "profile" className = "profile_photo"/>
                <Fade bottom>
                <a target="_blank" rel="noreferrer" style = {{textDecoration : "inherit"}}
                href = "https://drive.google.com/file/d/1yWkk7bCIbrhQGNrmgXEHZmrcSz8TLoLL/view?usp=sharing"><button className = "resume_button"><DescriptionIcon className = "document_symbol"/>Resume</button></a>
                </Fade>
            </div>
                <div className = "item_lowerThird">
                    {first &&
                    ( 
                        <div>
                            <ExpandMoreIcon style = {{ color : "black" , fontSize :'80'}} onClick = {(reftoScroll) => onClickScrollDown(refToScroll)} className="expandMoreIcon"/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Intro
