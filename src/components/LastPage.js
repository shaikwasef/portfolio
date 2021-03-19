import React , {useRef} from 'react'
import SendIcon from '@material-ui/icons/Send';
import "./LastPage.css"

const LastPage = ({title, desc}) => {
    const name_field = useRef(null);
    const email = useRef(null);
    const subject = useRef(null);
    const message = useRef(null);

    const handleSubmit = () => {
        name_field.current.value = "";
        email.current.value = "";
        subject.current.value = "";
        message.current.value = "";
    }

    return (
        <div  className = "item" style = {{
            backgroundColor : "black"
        }}>
            <div className = "item_container">
                <div className = "item_text_intro_last_page">
                    <p >{title}</p>
                <div className = "item_textDesc_last_page">
                    <p>{desc}</p>
                    </div>
                </div> 
                
                <div className="contact_me">
                    <input  ref = {name_field} className = "input_field" placeholder = " Enter your name"   name="name" required/>
                    <input ref = {email} className = "input_field" placeholder = " Enter your email address"  name="email" type="email" required/>
                    <input ref = {subject} className = "input_field" placeholder = " Subject" name="subject" required/>
                    <textarea ref = {message}  className = "input_field message" placeholder = "Message"  name="message" />
                    <button className= "submit_response" type = "submit" onClick = {handleSubmit}>SUBMIT<SendIcon/></button>
                </div>
                
            </div>
        </div>
    )
}

export default LastPage
