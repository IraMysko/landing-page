import Title from '../Title';
import Subtitle from '../Subtitle';
import Button from '../Button';
import './services.scss';

const title = "Мы создаем мобильные приложения для крупных корпораций";
const subtitle = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur animi molestiae dicta, repudiandae et totam earum praesentium suscipit."
const descriptionText = "Lorem Ipsum - это текст рыба, часто испльзуемый в печати и дизайне";
const serviceCatalogue = [
    { id: 1, title: 'Создание сайтов', description: descriptionText },
    { id: 2, title: 'Создание сайтов', description: descriptionText },
    { id: 3, title: 'Создание сайтов', description: descriptionText }
];

const Services: React.FC = () => {
    return (
        <section className="services">
            <div className="container">
                <div className="services-container">
                    <div className="services-block">
                        <Title text={title} />
                        <div className="services-title">
                            <Subtitle text={subtitle} />
                        </div>
                    </div>

                    <div>
                        <div className="catalogue">
                            {serviceCatalogue.map(({ id, title, description }) => {
                                return (
                                    <div key={id} className="catalogue-box">
                                        <div className="catalogue-border" />
                                        <div className="catalogue-text">
                                            <p className="catalogue-title">{title}</p>
                                            <span className="catalogue-description">{description}</span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="services-btn">
                            <Button title="Все услуги" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Services;