import React , {useState} from 'react'
import Button from "./Button"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import profile from "../assets/profile_photo.jpg"
import "./PageTwo.css"
import ComputerTwoToneIcon from '@material-ui/icons/ComputerTwoTone';
import netflixlogo from "../assets/netflix_logo.jpg"
import slacklogo from "../assets/slack.jpg"
import countrieslogo from "../assets/countries.jpg"
import LanguageIcon from '@material-ui/icons/Language'
import GitHubIcon from '@material-ui/icons/GitHub'
import pageTwo from "../assets/pageTwo.jpg"


const PageTwo = ({title,onClickScrollDown ,first}) => {
    const [showlogo , setShowLogo] = useState(true);

    return (
        <div  className = "item" style = {{
            backgroundColor : "rgba(199, 199, 199)"
        }}>
            <div className = "item_container">
                <div className = "item_text_intro">
                    <p style = {{color : "grey"}}>{title}</p>
            
            <div className = "technologies_container">
                   <div className = "logoDiv"> 
                    <div className = "text_over_work_logo">
                        <p className = "Title">Netflix Clone</p>
                        <p className = "Desc">A clone developed using React and Redux libraries.</p>
                        <div className= "visitButton"><button className= "visit">Visit App
                        <LanguageIcon/>
                        </button></div>
                    </div>
                    <img src={netflixlogo} className = "work_logo"/>
                   </div> 

                   <div className = "logoDiv"> 
                    <div className = "text_over_work_logo">
                        <p className = "Title">Slack<br/> Clone</p>
                        <p className = "Desc">A clone developed using the React library.</p>
                        
                        <div className= "visitButton"><button className= "visit">Visit App
                        <LanguageIcon/>
                        </button></div>
                    </div>
                    <img src={slacklogo} className = "work_logo"/>
                   </div> 

                   <div className = "logoDiv"> 
                    <div className = "text_over_work_logo">
                        <p className = "Title">Countries App</p>
                        <p className = "Desc">A web app developed using the React library and countries API.</p>
                        
                        <div className= "visitButton"><button className= "visit">Visit App
                        <LanguageIcon/>
                        </button></div>
                    </div>
                    <img src={countrieslogo} className = "work_logo"/>
                   </div> 

            </div>  

        <button className = "GitHub_button"><GitHubIcon/>See More on Github.com</button>

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

export default PageTwo
