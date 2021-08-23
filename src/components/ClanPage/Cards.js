import React from 'react';
import './Card.css';
const Cards=()=>{
    return(
        <div className="container">
            <div className="kuge_top">
                <div className="transbox_top">
                    <img src={"./Images/kuge2.jpeg"} alt="Kuge_Logo"/>
                    <h1>Kuge Gemu Clan</h1>
                    <p>The Kuge (公家) was a Japanese aristocratic className that dominated the Japanese Imperial Court in Kyoto.</p>
                </div>
            </div>
            <div className="clan_flexa">
                <div className="transbox_lft">
                    <img src={"./Images/ke1.jpeg"} alt="Kenjutsu" id="lt"/>
                    <div className="contl">
                        <img src={"./Images/kenjutsu.png"} alt="Kenjutsu_logo" className="iml"/>
                        <div className="textsty">
                            <h2>Kenjutsu 剣術</h2>
                            <h4>Art of Sword</h4>
                            <p>refers to the Japanese warrior arts which were created and developed during feudal Japan.</p>
                        </div>
                    </div>
                </div>
                <div className="transbox_rgt">
                    <div className="contl">
                        <div className="textsty">
                            <h2>Bojutsu 棒術</h2>
                            <h4>Art of Staff</h4>
                            <p>is the martial art of stick fighting using a bō, which is the Japanese word for staff.</p>
                        </div>
                        <img src={"./Images/bojutsu.jpeg"} alt="Bojutsu_logo" className="imr"/>
                    </div>
                    <img src={"./Images/b2.jpeg"} alt="Bojutsu" id="rt"/>
                </div>
            </div>
            <div className="clan_flexb">
                <div className="transbox_lft">
                    <img src={"./Images/k3.jpeg"} alt="Kyujutsu"  id="lb"/>
                    <div className="contl">
                        <img src={"./Images/kujutsu.png"} alt="Kyujutsu_logo" className="iml"/>
                        <div className="textsty">
                            <h2>Kyujutsu 弓術</h2>
                            <h4>Art of Archery</h4>
                            <p>is the traditional Japanese martial art of wielding a bow (yumi) as practiced by the samurai className of feudal Japan.</p>
                        </div>
                    </div>
                </div>
                <div className="transbox_rgt">
                    <div className="contl">
                        <div className="textsty">
                            <h2>Sojutsu 槍術</h2>
                            <h4>Art of Spear</h4>
                            <p>is the Japanese martial art of fighting with a Japanese spear (槍, yari).</p>
                        </div>
                        <img src={"./Images/sojutsu.png"} alt="Sojutsu_logo" className="imr" id="soim"/>
                    </div>
                    <img src={"./Images/s4.jpeg"} alt="Sojutsu" id="rb"/>
                </div>
            </div>
        </div>
    );
}

export default Cards;