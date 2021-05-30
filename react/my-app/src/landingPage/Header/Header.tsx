import './header.scss';

const headerMenu = [
    { link: '/', title: 'Главная' },
    { link: '/', title: 'Наши проекты' },
    { link: '/', title: 'Услуги' },
    { link: '/', title: 'Новости' },
    { link: '/', title: 'Контакты' },
];

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-container">
                    <input id="hamburger-menu-toggle" type="checkbox" />
                    <label className="hamburger-menu-btn" htmlFor="hamburger-menu-toggle">
                        <span></span>
                    </label>
                    <ul className="header-menu-box hamburger-menu-box">
                        {headerMenu.map(({ link, title }) => {
                            return (
                                <li className="header-menu" key={title}>
                                    <a className="header-links hamburger-menu-item" href={link}>
                                        {title}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </header >
    )
};

export default Header;