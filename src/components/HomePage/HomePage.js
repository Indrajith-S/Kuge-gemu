import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="header-container">
            <div className="wrapper">
                <div className="left-text">
                    <h4> ESPORTS CLUB</h4>
                    <br/>
                    <h2> Watch, Analyze, <br/>
                    Seek and <br/>
                    Destroy </h2> 
                </div>
                <div className="Controller" id="cont">
                    <img src="../../Images/cont.png" alt="Controller"/>
                </div>
                <div className="chess">
                    <img src="./Images/chess.png" alt="hero"/>
                </div>
                <div className="hero-right">
                    <div className="Box">
                        <div className="box-text">
                            <p>The kuge (公家) was a Japanese aristocratic<br/>
                            class that dominated the Japanese Imperial<br/>
                            Court in Kyoto. The kuge were important from the<br/>
                            establishment of Kyoto as the capital during the <br/>
                            Heian period in the late 8th century until the rise <br/>
                            of the Kamakura shogunate in the 12th century, <br/>
                            at which point it was eclipsed by the bushi.<br/>
                            </p>
                        </div>
                        <div className="contact__text"><p>Social media links</p></div>
                        <div className="contact__links">
                            <div className="Column"><li><p><img alt="Discord" src="./Images/discord.jpeg"/></p></li></div>
                            <div className="Column"><li><p><img alt="Instagram" src="./Images/insta.jpeg"/></p></li></div>
                            <div className="Column"><li><p><img alt="Twitter" src="./Images/twitter.jpeg"/></p></li></div>
                            <div className="Column"><li><p><img alt="Youtube" src="./Images/utube.jpeg"/></p></li></div>
                            <div className="Column"><li><p><img alt="Linkedin" src="./Images/link.jpeg"/></p></li></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;