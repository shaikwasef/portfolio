import React , {useState,useEffect} from 'react'
import "./Header.css"
import FaceIcon from '@material-ui/icons/Face';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import FacebookIcon from '@material-ui/icons/Facebook';

function Header({onClickScrollTop , status}){
    
const scrollTopButton = (status) => {
        console.log(status);
        if(status){
            return (<div> </div>);
        }
        else{
            return (
            <FaceIcon 
                style={{ fontSize: 50 , cursor : "pointer"}}
                onClick = {() => onClickScrollTop()}
                className = "logo_bounce"
            />);
        }
    }

    return (
        <div className = "header">
            <div className = "header_logo">
                {scrollTopButton(status)}
            </div>
            <div className = "profiles">
                <a  target="_blank" href = "https://github.com/shaikwasef"><GitHubIcon style={{ fontSize: 40 }} className = "profile_logo logo_bounce"/></a>
                <a  target="_blank" href = "https://linkedin.com/in/shaik-wasef-a87572136"><LinkedInIcon style={{ fontSize:40 }} className = "profile_logo logo_bounce"/></a>
                <a target = "_blank" href = "https://www.goodreads.com/user/show/93450543-shaik-wasef"><LibraryBooksIcon style={{ fontSize: 40 }} className = "profile_logo logo_bounce"/></a>
                <a target = "_blank" href = "https://www.facebook.com/profile.php?id=100004963878470"><FacebookIcon style={{ fontSize: 40 }} className = "profile_logo logo_bounce"/></a>
            </div>
        </div>
    )
}

export default Header
