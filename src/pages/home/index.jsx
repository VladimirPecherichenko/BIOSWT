import React from "react";
import { Link } from "react-router-dom";
import './style.scss';


const HomePage = () => (
        <div className={'home'}>
            
            <div className="home_1">
                {/* <img src={'./assets/backgr.jpg'}/> */}
                <div className="home1_box">
                    <a><img src={'./assets/iadeliaizmassiva.png'}/></a>
                    <div className="home1_box2">
                        изделия из<br/> массива дерева
                        <div className="home1_box2_1">
                        <a><Link to={'/'}><img src={'./assets/buttonzakaz.png'}/></Link></a>
                        </div>
                    </div>
                    <div className="home1_box3">
                        <img src={'./assets/line1.png'}/>
                    </div>
                    <div className="home1_box4">
                        <div className="home1_box4_1">
                            <a><img src={'./assets/1.png'}/></a>
                        </div>
                        <div className="home1_box4_2">
                            <a><img src={'./assets/2.png'}/></a>
                        </div>
                        <div className="home1_box4_3">
                            <a><img src={'./assets/3.png'}/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home_2">
                <div className="home_2_material">
                    МАТЕРИАЛЫ
                </div>
                <div className="home_2_materials">
                    <div className="home_2_material_1">
                    <div className="home_2_material_11">
                    <a><img src={'./assets/dub.png'}/></a>
                    </div>
                        <div className="home_2_material_1_2">
                            ДУБ
                        </div>
                        <div className="home_2_material_1_3">
                        <a><img src={'./assets/galochka.png'}/></a>
                            <div>Прочность</div>
                        </div>
                        <div className="home_2_material_1_4">
                        <a><img src={'./assets/galochka.png'}/></a>
                            <div>Текстура</div>
                        </div>
                        <div className="home_2_material_1_5">
                        <a><img src={'./assets/galochka.png'}/></a>
                            <div>Влагостойкость</div>
                        </div>
                    </div>
                    {/*-----------------------------------------  */}
                    <div className="home_2_material_12">
                    <div className="home_2_material_112">
                    <a><img src={'./assets/buk.png'}/></a>
                    </div>
                        <div className="home_2_material_1_22">
                            БУК
                        </div>
                        <div className="home_2_material_1_32">
                        <a><img src={'./assets/galochka.png'}/></a>
                            <div>Прочность</div>
                        </div>
                        <div className="home_2_material_1_42">
                        <a><img src={'./assets/galochka.png'}/></a>
                            <div>Текстура</div>
                        </div>
                    </div>
                    {/*-----------------------------------------  */}
                    <div className="home_2_material_13">
                    <div className="home_2_material_113">
                    <a><img src={'./assets/yasen.png'}/></a>
                    </div>
                        <div className="home_2_material_1_23">
                            ЯСЕНЬ
                        </div>
                        <div className="home_2_material_1_33">
                        <a><img src={'./assets/galochka.png'}/></a>
                            <div>Прочность</div>
                        </div>
                        <div className="home_2_material_1_43">
                        <a><img src={'./assets/galochka.png'}/></a>
                            <div>Текстура</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home_3">
                НАШИ ПРОЕКТЫ
                <div>
                <a><img src={'./assets/nashiprojects.png'}/></a>
                </div>
            </div>
            <div className="home_4">
                <div className="home_4_1">
                    ПРЕИМУЩЕСТВА<br/>РАБОТЫ С НАМИ
                </div>
                    <div className="home_4_2">
                    <a><img src={'./assets/preimushestva.png'}/></a>
                        <div className="home_4_1_1">
                            <div className="home_4_1_1_2">
                            <a><img src={'./assets/galochka.png'}/></a>
                                <div>Собственное столярное<br/>производство</div>
                            </div>
                            <div className="home_4_1_1_3">
                            <a><img src={'./assets/galochka.png'}/></a>
                                <div>Мы обрабатываем<br/>древесину только<br/>экологически чистыми<br/>продуктами</div>
                            </div>
                            <div className="home_4_1_1_4">
                            <a><img src={'./assets/galochka.png'}/></a>
                                <div>Цены от производителя, без<br/>наценок</div>
                            </div>
                        </div>
                    </div>
                    <div className="home_4_3">
                    <a><Link to=""><img src={'./assets/poluchitkonsultaciu.png'}/></Link></a>
                </div>
            </div>
            <div className="home_5">
                {/* <img src={'./assets/iadeliaizmassiva.png'}/> */}
                <div className="home_5_1">О КОМПАНИИ</div>
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

export default HomePage

