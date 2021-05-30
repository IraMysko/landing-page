import Heading from '../Heading';
import './footerContacts.scss';

const contacts = "Контактная информация";
const links = "Основные ссылки";
const project = "Наши проекты";
const social = "Социальные сети";

const FooterContacts: React.FC = () => {
    return (
        <section className="footer-container">
            <div className="container">
                <div className="footer">
                    <div className="footer-contacts">
                        <Heading text={contacts} />
                        <div className="footer-contacts-email text">test@test.ru</div>
                        <div className="footer-contacts-phone text">+ 8777 555 666 99</div>
                        <div className="footer-contacts-map text">Москва, <span className="one-line">бульвар Ленина 33</span> </div>
                    </div>
                    <div className="footer-links">
                        <Heading text={links} />
                        <div className="footer-link text">Главная</div>
                        <div className="footer-link text">Наши проекты</div>
                        <div className="footer-link text">Наши услуги</div>
                        <div className="footer-link text">Контакты</div>
                    </div>
                    <div className="footer-projects">
                        <Heading text={project} />
                        <div className="footer-link text">РосНано</div>
                        <div className="footer-link text">Сколково</div>
                        <div className="footer-link text">Проект "Восток"</div>
                        <div className="footer-link text">ТЭЦ Калининграда</div>
                    </div>
                    <div className="footer-social">
                        <Heading text={social} />
                        <div className="footer-link text">VK.com</div>
                        <div className="footer-link text">Instagram</div>
                        <div className="footer-link text">Fscebook</div>
                        <div className="footer-link text">Twitter</div>
                    </div>
                </div>
                <div className="footer-reservet">Все правa защищены</div>
            </div>
        </section>
    )
};

export default FooterContacts;