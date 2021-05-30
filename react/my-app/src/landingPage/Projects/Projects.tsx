import Title from '../Title';
import Subtitle from '../Subtitle';
import Button from '../Button';
import projectsImg from '../Images/OurProjects/Projects.svg';
import './projects.scss';

const title = 'Наши проекты';
const subTitle = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam dolor sit dolores accusantium! Quam maxime, omnis odio, unde nisi animi libero officia itaque repellendus inventore, ipsam debitis nesciunt laboriosam totam.'

const Projects: React.FC = () => {
    return (
        <section className="projects">
            <div className="container">
                <div className="projects-container">
                    <div className="projects-about">
                        <div>
                            <Title text={title} />
                        </div>
                        <Subtitle text={subTitle} />
                    </div>
                    <div className="projects-img-container">
                        <img src={projectsImg} alt="" />
                        <img src={projectsImg} alt="" />
                        <img src={projectsImg} alt="" />
                        <img src={projectsImg} alt="" />
                    </div>
                    <div className="projects-btn">
                        <Button title="Все проекты" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Projects;