import React from 'react'
import "./PageTwo.css"
import netflixlogo from "../assets/netflix_logo.jpg"
import slacklogo from "../assets/slack.png"
import countrieslogo from "../assets/countries.jpg"
import LanguageIcon from '@material-ui/icons/Language'
import GitHubIcon from '@material-ui/icons/GitHub'


const PageTwo = ({title,onClickScrollDown ,first}) => {

    return (
        <div  className = "item" style = {{
            backgroundColor : "rgba(199, 199, 199)"
        }}>
            <div className = "item_container">
                <div className = "item_text_intro_page_two">
                    <p>{title}</p>
            
            <div className = "technologies_container">
                   <div className = "logoDiv"> 
                    <div className = "text_over_work_logo">
                        <p className = "Title">Netflix Clone</p>
                        <div className= "visitButton"><a rel="noreferrer" target="_blank"
                        style = {{textDecoration : "none"}}
                        href = "https://netflix-clone-c750b.web.app/profile?">
                        <button className= "visit">Visit App
                        <LanguageIcon/>
                        </button></a></div>
                    </div>
                    <img  alt = "app" src={netflixlogo} className = "work_logo"/>
                   </div> 

                   <div className = "logoDiv"> 
                    <div className = "text_over_work_logo">
                        <p className = "Title">Slack<br/> Clone</p>
                        
                        <div className= "visitButton"><a rel="noreferrer" target="_blank"
                        style = {{textDecoration : "none"}}
                        href = "https://slack-clone-73c2d.web.app/">
                            <button className= "visit">Visit App
                        <LanguageIcon/>
                        </button></a></div>
                    </div>
                    <img  alt = "app" src={slacklogo} className = "work_logo"/>
                   </div> 

                   <div className = "logoDiv"> 
                    <div className = "text_over_work_logo">
                        <p className = "Title" style = {{fontSize : "40px"}}>Countries App</p>
                        
                        <div className= "visitButton"><a rel="noreferrer" target = "_blank"
                            style = {{textDecoration : "none"}}
                            href = "https://wonderful-rosalind-5f808a.netlify.app/">
                            <button className= "visit">Visit App
                        <LanguageIcon/>
                        </button></a></div>
                    </div>
                    <img alt = "app" src={countrieslogo} className = "work_logo"/>
                   </div> 

            </div>  

            <a rel="noreferrer" target="_blank" href = "https://github.com/shaikwasef" style = {
                { textDecoration : "inherit"}
            }><button className = "GitHub_button"><GitHubIcon/>See More on Github.com</button></a>

            </div>   
            </div>
        </div>
    )
}

export default PageTwo
