import React , {useState} from 'react'
import Button from "./Button"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import profile from "../assets/profile_photo.jpg"
import "./LastPage.css"
import ComputerTwoToneIcon from '@material-ui/icons/ComputerTwoTone';
import netflixlogo from "../assets/netflix_logo.jpg"
import slacklogo from "../assets/slack.jpg"
import countrieslogo from "../assets/countries.jpg"
import LanguageIcon from '@material-ui/icons/Language'
import GitHubIcon from '@material-ui/icons/GitHub'
import pageTwo from "../assets/pageTwo.jpeg"

const LastPage = ({title,onClickScrollDown ,first}) => {

    return (
        <div  className = "item" style = {{
            backgroundColor : "black"
        }}>
            <div className = "item_container">
                <div className = "item_text_intro">
                    <p style = {{color : "grey"}}>{title}</p>
                
                </div>   
            </div>
        </div>
    )
}

export default LastPage
