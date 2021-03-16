import React from 'react'
import "./Header.css"
import FaceIcon from '@material-ui/icons/Face';

const Header = ({onClickScrollTop}) => {
    return (
        <div className = "header">
            <div className = "header_logo">
                <FaceIcon 
                style={{ fontSize: 50 }}
                onClick = {() => onClickScrollTop()}
                />
            </div>
        </div>
    )
}

export default Header
