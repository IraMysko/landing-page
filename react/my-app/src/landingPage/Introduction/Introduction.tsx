import Button from '../Button';

import './introduction.scss';

const Introduction: React.FC = () => {
    return (
        <section className="introduction">
            <div className="container">
                <div className="introduction-container">
                    <div className="introduction-name">Передовая IT студия</div>
                    <div className="introduction-duties">
                        Мы создаем легкие решения сложных задач <span className="one-line">и проблем</span>
                    </div>
                    <div className="introduction-btn">
                        <Button title="Наши проекты" />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Introduction;