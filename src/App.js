import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Item from "./components/Item"
import ModelS from "./assets/Desktop-ModelS.jpeg"
import Model3 from "./assets/Desktop-Model3.jpeg"
import ModelX from "./assets/Desktop-ModelX.jpeg"
import ModelY from "./assets/Desktop-ModelY.jpeg"
import solarPanels from "./assets/Desktop-SolarPanels.jpeg"
import Intro from "./components/Intro.js"
import IntroBackground from "./assets/intro_background.jpeg"
import React,{useRef , useState , useEffect} from 'react'
import PageOne from "./components/PageOne"
import PageTwo from "./components/PageTwo"
import LastPage from "./components/LastPage"

function App() {
  const item1 = useRef(null);
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

  const scrollDown = () => {
    item1.current.scrollIntoView({behavior : 'smooth'});
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
            title = 'Front-end Developer , Coding Enthusiast and ex-Physicist'
            desc = "I Design and Code beautiful websites and love what I do."
            descLink =''
            backgroundImg = {IntroBackground}
            leftBtnTxt = "ORDER NOW"
            leftBtnLink = ""
            rightBtnTxt = "LEARN MORE"
            rightBtnLink = ""
            twoButtons = "true"
            onClickScrollDown = {scrollDown} 
            first
          />
          <div ref = {item1}/>
          <PageOne
            title = "Hi , I'm Wasef , nice to meet you "
            desc = "I have been learning web development for some time now and building some cool projects .I love coding in general and like learning new frameworks for building interesting web applications .I'm quietly confident, naturally curious, and perpetually working on improving my chops one problem at a time. Apart from my interest in coding , I have also worked extensively in the field of theoretical physics and published papers in reputed journals and conferences."
            descFramework = "Languages , Libraries and Frameworks I use "

             />
          <PageTwo
            title = "My Recent Work"
             />
          <LastPage
            title = "Contact Me" />
          <Item
            title = "MODEL Y"
            desc = "$65,420"
            descLink =''
            backgroundImg = {ModelY}
            leftBtnTxt = "CUSTOM ORDER"
            leftBtnLink = ""
            rightBtnTxt = "LEARN MORE"
            rightBtnLink = "" /> 
        </div>
    </div>
  );
}

export default App;
