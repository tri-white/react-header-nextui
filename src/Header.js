import React, {Component} from "react";
import './App.css';
import {Select, SelectSection, SelectItem} from "@nextui-org/react";
import {Link} from "@nextui-org/react";
import {NextUIProvider} from "@nextui-org/react";

class Header extends Component {
     render() {
        return(
        <div className="Header91">
        <div className="Header">
          <img className="Rectangle1"  src={require("./img/rectangle-1.png")} />
          <img className="Rectangle2" src={require("./img/rectangle-2.png")} />
          <img className="Rectangle3" src={require("./img/rectangle-3.png")} />
          <img className="Rectangle4" src={require("./img/rectangle-4.png")} />
          <img className="Rectangle5" src={require("./img/rectangle-5.png")} />
          <div
            className="LearnAboutThePossibilitiesOfDigitalPlatformsAndScenariosForUsingBigDataWhichAreRelevantFor95OfRussianAndForeignCompanies">
            Learn about the possibilities of digital platforms and scenarios for using Big Data, which are relevant for 95% of
            Ukrainian and foreign companies</div>
          <div className="BigData2021">BIG DATA 2021</div>
          <div className="Ellipse5" />
          <div className="Ellipse8" />
          <img className="VectorLeft" src={require("./img/vectorLeft.png")} />
          <img className="VectorRight" src={require("./img/vectorRight.png")} />
          <div className="PageNow">01</div>
          <div className="Line1"></div>
          <div className="Group7">
            <div className="SolutionsAndServices">Solutions and services<br /></div>
            <img className="Union" src={require("./img/Union.png")} />
          </div>
          <div className="Rectangle37" />
          <div className="Ellipse16" >
            <img className="playButton" src={require("./img/polygon.png")}/>
          </div>
        </div>
        <Link href="#" color="foreground" className="Sitelogo">
          <div className="Line3" />
          <div className="Line4" />
          <div className="Line5" />
          <div className="Sitelogodiv">
            <span className="SitelogoSpan">Site</span><span className="SitelogoSpan">Logo</span>
          </div>
        </Link>
      
        <div className="ButtonMore">
          <div className="More">More</div>
        </div>
        <div className="Menu">
        <Link href="/about" color="foreground">About</Link>
            <Link href="/features" color="foreground">Features</Link>
            <Link href="/pricing" color="foreground">Pricing</Link>
            <Link href="/gallery" color="foreground">Gallery</Link>
            <Link href="/team" color="foreground">Team</Link>
        </div>
        <img className="IconSearch"  src={require("./img/icon2.png")} />
        <img className="IconPhone" src={require("./img/icon3.png")} />
        <img className="IconBurger" src={require("./img/icon1.png")} />
        <Select className="Language" defaultSelectedKeys={["en"]}>
          <SelectItem key="en" value="En">
            En
          </SelectItem>
          <SelectItem key="ukr" value="Ukr">
            Ukr
          </SelectItem>
        </Select>
       </div> 
        );
     }

 }

 export default Header;