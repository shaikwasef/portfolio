import './App.css';
import Header from "./components/Header"
import Intro from "./components/Intro.js"
import IntroBackground from "./assets/intro_background.jpeg"
import React,{useRef , useState} from 'react'
import PageOne from "./components/PageOne"
import PageTwo from "./components/PageTwo"
import LastPage from "./components/LastPage"

function App() {
  const intro_buttom = useRef(null);
  const page1_buttom = useRef(null);
  const page2_buttom = useRef(null);
  const intro = useRef(null);
  const capp = useRef(null);

  const [scrollTopButton , stateScrollTopButton] = useState(true);

  const transitionNavBar = () => {
    if(capp.current.scrollTop >= 320){
        stateScrollTopButton(false);}
      else{
        stateScrollTopButton(true);
      }
}

  const scrollDown = (item) => {
    item.current.scrollIntoView({behavior : 'smooth'});
  }

  const scrollTop = () => {
    intro.current.scrollIntoView({behavior : 'smooth'});
  }

  return (
    <div className="App" >
        <Header onClickScrollTop = {scrollTop} status = {scrollTopButton}/>
        <div className="app_itemsContainer"  ref = {capp}  onScroll = {transitionNavBar}>
          <div ref = {intro}/>
          <Intro
            title = 'Front-end Developer , Coding Enthusiast , writer and ex-Physicist'
            desc = "I design and code beautiful websites and love what I do."
            descLink =''
            backgroundImg = {IntroBackground}
            leftBtnTxt = "ORDER NOW"
            leftBtnLink = ""
            rightBtnTxt = "LEARN MORE"
            rightBtnLink = ""
            twoButtons = "true"
            onClickScrollDown = {(item) => scrollDown(item)} 
            refToScroll = {intro_buttom}
            first
          />
          <div ref = {intro_buttom}/>
          <PageOne
            title = "Hi , I'm Wasef , nice to meet you "
            desc = "I have been learning web development for some time now and building some cool projects .I love coding in general and like learning new technologies for building interesting web applications .I'm quietly confident, naturally curious, and perpetually working on improving my chops one problem at a time. Apart from my interest in coding ,I have also worked extensively in the field of theoretical physics and published papers in reputed journals and conferences.I currently work as a front end developer for Regology Inc. and also work on free lancing projects in my free time. Check out my projects below."
            descFramework = "Languages , Libraries and Frameworks I use "
            onClickScrollDown = {(item) => scrollDown(item)} 
            refToScroll = {page1_buttom}
             />
             <div ref = {page1_buttom}/>
          <PageTwo title = "My Recent Work" onClickScrollDown = {(item) => scrollDown(item)} refToScroll = {page2_buttom}/>
            <div ref = {page2_buttom}/>
          <LastPage
            title = "CONTACT ME"
            desc = "I would be glad to hear from you"/>
        </div>
    </div>
  );
}

export default App;
