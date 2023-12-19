import React from "react";
import { Link } from "react-router-dom";
import './style.scss';

const AboutPage = () => (
    <div className={'about'}>
        <div className="home_5">
                {/* <img src={'./assets/iadeliaizmassiva.png'}/> */}
                <div className="home_5_1">О НАС</div>
                <div className="home_5_22">BIO CWT - Мы производим<br/>
                изделия из массива дерева по<br/>
                индивидуальным чертежам. Мы<br/>производим стулья, кресала,<br/>
                шкафы-купе, кровати и многое<br/>
                другое в нашей собственной<br/>
                мастерской, оснащенной всем<br/>
                необходимым промышленным<br/>
                оборудованием.
                <div className="home_5_3"><a><img src={'./assets/stack.png'}/></a></div>
                </div>
            </div>
            <div className="home_3">
                НАШИ ПРОЕКТЫ
                <div>
                <img src={'./assets/nashiprojects.png'}/>
                </div>
            </div>
            <div className="home_6">
                у вас Есть вопросы?
                <div className="home_6_1">
                Напишите нам, и мы обязательно ответим на все ваши<br/>
                вопросы и дадим вам исчерпывающую консультацию. Для<br/>
                этого перейдите в раздел “Контакты”
                </div>
            </div>
    </div>    
)
export default AboutPage;