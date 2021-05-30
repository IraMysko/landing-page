import Slider from 'react-slick';

import Title from '../Title';
import Subtitle from '../Subtitle/Subtitle';
import standartsImg from '../Images/Rectange01/Rectangle 2.svg';
import icon from '../Images/Rectange01/OurProject.svg';
import './standarts.scss';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}

const title = 'Высокие стандарты разработки'
const subTitle = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias itaque consectetur nostrum iste ipsa rerum? Sequi nobis, nostrum repellat, cupiditate sint, ex minus tempora maxime recusandae sed consequatur numquam assumenda?'
const projects = [
    { id: 0, icon: icon, qty: 125, title: 'Our project' },
    { id: 1, icon: icon, qty: 125, title: 'Our project' },
    { id: 2, icon: icon, qty: 125, title: 'Our project' },
    { id: 3, icon: icon, qty: 125, title: 'Our project' },
    { id: 4, icon: icon, qty: 125, title: 'Our project' },
];

const Standarts: React.FC = () => {
    return (
        <section className="standarts">
            <div className="container">
                <div className="standarts-container">
                    <div className="preview">
                        <div className="preview-article">
                            <Title align="left" text={title} />
                            <div className="preview-subtitle">
                                <Subtitle align="left" text={subTitle} />
                            </div>

                            <a href="/" className="preview-link">Подробнее о компании</a>
                        </div>
                        <div className="preview-img-container">
                            <img className="preview-img" src={standartsImg} alt="" />
                        </div>
                    </div>
                </div>

                <div className="projects-list-slider">
                    <Slider {...settings}>
                        {projects.map(({ icon, qty, title, id }) => {
                            return (
                                <div key={id} className="projects-list-box">
                                    <div className="projects-list-wrapper">
                                        <img src={icon} alt="" />
                                        <div className="projects-list-qty">{qty}</div>
                                    </div>
                                    <div className="projects-list-title">{title}</div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>

                <div className="projects-list">
                    {projects.map(({ id, icon, qty, title }) => {
                        return (
                            <div key={id} className="projects-list-box">
                                <div className="projects-list-wrapper">
                                    <img src={icon} alt="" />
                                    <div className="projects-list-qty">{qty}</div>
                                </div>
                                <div className="projects-list-title">{title}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
};

export default Standarts;