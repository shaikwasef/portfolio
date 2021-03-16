import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Item from "./components/Item"
import ModelS from "./assets/Desktop-ModelS.jpeg"
import Model3 from "./assets/Desktop-Model3.jpeg"
import ModelX from "./assets/Desktop-ModelX.jpeg"
import ModelY from "./assets/Desktop-ModelY.jpeg"
import solarPanels from "./assets/Desktop-SolarPanels.jpeg"

function App() {
  return (
    <div className="App">
        <Header />
        <div className="app_itemsContainer">
          <Item
            title = "Lowest cost solar panels in America"
            desc = "Money-back-guarantee"
            descLink =''
            backgroundImg = {solarPanels}
            leftBtnTxt = "ORDER NOW"
            leftBtnLink = ""
            rightBtnTxt = "LEARN MORE"
            rightBtnLink = ""
            twoButtons = "true"
            first
          />
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
