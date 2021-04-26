import React from 'react'
import "./PageTwo.css"
import netflixlogo from "../assets/netflix_logo.jpg"
import slacklogo from "../assets/slack.png"
import countrieslogo from "../assets/countries.jpg"
import graduation from "../assets/graduation.png"
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
                        </button></a></div>
                    </div>
                    <img  alt = "app" src={netflixlogo} className = "work_logo"/>
                   </div> 

                   <div className = "logoDiv"> 
                    <div className = "text_over_work_logo">
                        <p className = "Title">Slack Clone</p>
                        <div className= "visitButton"><a rel="noreferrer" target="_blank"
                        style = {{textDecoration : "none"}}
                        href = "https://boring-allen-dbc0cc.netlify.app/">
                            <button className= "visit">Visit App
                        </button></a></div>
                    </div>
                    <img  alt = "app" src={slacklogo} className = "work_logo"/>
                   </div> 

                   <div className = "logoDiv"> 
                    <div className = "text_over_work_logo">
                        <p className = "Title" >Countries App</p>
                        <div className= "visitButton"><a rel="noreferrer" target = "_blank"
                            style = {{textDecoration : "none"}}
                            href = "https://wonderful-rosalind-5f808a.netlify.app/">
                            <button className= "visit">Visit App
                        </button></a></div>
                    </div>
                    <img alt = "app" src={countrieslogo} className = "work_logo"/>
                   </div> 

                   <div className = "logoDiv"> 
                    <div className = "text_over_work_logo">
                        <p className = "Title" >Course Registration</p>
                        <div className= "visitButton"><a rel="noreferrer" target = "_blank"
                            style = {{textDecoration : "none"}}
                            href = "https://sharp-ardinghelli-26d02e.netlify.app">
                            <button className= "visit">Visit App
                        </button></a></div>
                    </div>
                    <img alt = "app" src={graduation} className = "work_logo"/>
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
