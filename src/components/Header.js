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
                <GitHubIcon style={{ fontSize: 40 }} className = "profile_logo logo_bounce"/>
                <LinkedInIcon style={{ fontSize:40 }} className = "profile_logo logo_bounce"/>
                <LibraryBooksIcon style={{ fontSize: 40 }} className = "profile_logo logo_bounce"/>
                <FacebookIcon style={{ fontSize: 40 }} className = "profile_logo logo_bounce"/>
            </div>
        </div>
    )
}

export default Header
