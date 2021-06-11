import React from 'react'
import "./PageTwo.css"
import netflixlogo from "../assets/netflix_logo.jpg"
import slacklogo from "../assets/slack.png"
import ethereum from "../assets/ethereum-logo.jpeg"
import graduation from "../assets/graduation.png"
import GitHubIcon from '@material-ui/icons/GitHub'
import gitAppLogo from "../assets/gitAppLogo.png"
import paymentPage from "../assets/paymentPage.jpeg"


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
                        <p className = "Title">Payment's page</p>
                        <div className= "visitButton"><a rel="noreferrer" target="_blank"
                        style = {{textDecoration : "none"}}
                        href = "https://happay-payment.netlify.app/">
                            <button className= "visit">Visit App
                        </button></a></div>
                    </div>
                    <img  alt = "app" src={paymentPage} className = "work_logo"/>
                   </div> 

                   <div className = "logoDiv"> 
                    <div className = "text_over_work_logo">
                        <p className = "Title" >BlockChain Todolist</p>
                        <div className= "visitButton"><a rel="noreferrer" target = "_blank"
                            style = {{textDecoration : "none"}}
                            href = "https://todolist-ethereum.netlify.app/">
                            <button className= "visit">Visit App
                        </button></a></div>
                    </div>
                    <img alt = "app" src={ethereum} className = "work_logo"/>
                   </div> 

                    
                   <div className = "logoDiv"> 
                    <div className = "text_over_work_logo">
                        <p className = "Title" >The GitHub App</p>
                        <div className= "visitButton"><a rel="noreferrer" target = "_blank"
                            style = {{textDecoration : "none"}}
                            href = "https://suspicious-jang-07a34c.netlify.app">
                            <button className= "visit">Visit App
                        </button></a></div>
                    </div>
                    <img alt = "app" src={gitAppLogo} className = "work_logo"/>
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
