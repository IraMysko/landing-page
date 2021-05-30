import { useEffect, useState } from 'react';
import Slider from 'react-slick';

import Title from '../Title';
import Button from '../Button';
import Subtitle from '../Subtitle';
import img from '../Images/Duties/Rectangle 2.2.png';
import './duties.scss';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "slider-box"
};

const title = "Наши работы, на которых мы специализируемся";
const subTitle = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias itaque consectetur nostrum iste ipsa rerum? Sequi nobis, nostrum repellat, cupiditate sint, ex minus tempora maxime recusandae sed consequatur numquam assumenda?'
const duties = [
    { id: 0, image: img, para: "01.", title: "Исследование и упаковка" },
    { id: 1, image: img, para: "01.", title: "Исследование и упаковка" },
    { id: 2, image: img, para: "01.", title: "Исследование и упаковка" },
];

const Duties: React.FC = () => {
    const [windowWidth, setwindowWidth] = useState<number>(window.innerWidth);

    const resizeWindow = () => {
        setwindowWidth(window.innerWidth);
    };

    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);

        return () => {
            window.removeEventListener("resize", resizeWindow)
        };
    }, []);

    return (
        <section className="duties">
            <div className="container">
                <div className="duties-container">
                    <div className="duties-heading">
                        <Title color="white" align="left" text={title} />
                        <div className="btn-container">
                            <Button title="Все услуги" />
                        </div>
                    </div>

                    <div className="duties-slider">
                        <Slider {...settings}>
                            {duties.map(({ image, para, title, id }) => {
                                return (
                                    <div key={id}>
                                        <div>
                                            <img src={image} alt="" />
                                        </div>

                                        <div className="duties-text">
                                            <div className="duties-head">
                                                <p className="duties-para">{para}</p>
                                                <p className="duties-title">{title}</p>
                                            </div>
                                            <Subtitle
                                                align="left"
                                                color={windowWidth < 351 ? "white" : null}
                                                text={subTitle}
                                            />
                                            <a className="duties-link" href="/">Подробнее</a>
                                            <div className="duties-border" />
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>

                    <div className="duties-description">
                        {duties.map(({ id, image, para, title }) => {
                            return (
                                <div key={id}>
                                    <div>
                                        <img className="duties-img" src={image} alt="" />
                                    </div>

                                    <div className="duties-text">
                                        <div className="duties-head">
                                            <p className="duties-para">{para}</p>
                                            <p className="duties-title">{title}</p>
                                        </div>
                                        <Subtitle align="left" text={subTitle} />
                                        <a className="duties-link" href="/">Подробнее</a>
                                        <div className="duties-border" />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Duties;