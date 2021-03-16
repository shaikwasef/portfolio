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
import React,{useRef} from 'react'

function App() {
  const item1 = useRef(null);
  const intro = useRef(null);

  const scrollDown = () => {
    item1.current.scrollIntoView({behavior : 'smooth'});
  }

  const scrollTop = () => {
    intro.current.scrollIntoView({behavior : 'smooth'});
  }

  return (
    <div className="App">
        <Header onClickScrollTop = {scrollTop} />
        <div className="app_itemsContainer">
          <div ref = {intro}/>
          <Intro
            title = 'Front-end Developer , Coding Enthusiast and ex-Physicist'
            desc = "I Design and Code beautiful websites and love what I do."
            descLink =''
            backgroundImg = {solarPanels}
            leftBtnTxt = "ORDER NOW"
            leftBtnLink = ""
            rightBtnTxt = "LEARN MORE"
            rightBtnLink = ""
            twoButtons = "true"
            onClickScrollDown = {scrollDown} 
            first
          />
          <div ref = {item1}/>
          <Item
            title = "MODEL S"
            desc = "$69,420"
            descLink =''
            backgroundImg = {ModelS}
            leftBtnTxt = "CUSTOM ORDER"
            leftBtnLink = ""
            rightBtnTxt = "LEARN MORE"
            rightBtnLink = ""
            twoButtons = "true" />
          <Item
            title = "MODEL 3"
            desc = "$79,420"
            descLink =''
            backgroundImg = {Model3}
            leftBtnTxt = "CUSTOM ORDER"
            leftBtnLink = ""
            rightBtnTxt = "LEARN MORE"
            rightBtnLink = ""
            twoButtons = "true" />
          <Item
            title = "MODEL X"
            desc = "$89,420"
            descLink =''
            backgroundImg = {ModelX}
            leftBtnTxt = "CUSTOM ORDER"
            leftBtnLink = ""
            rightBtnTxt = "LEARN MORE"
            rightBtnLink = ""
            twoButtons = "true" />
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
