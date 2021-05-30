import { useEffect, useState } from 'react';

import Title from '../Title';
import Subtitle from '../Subtitle';
import Button from '../Button';
import Heading from '../Heading';
import './video.scss';

const title = "Видео о нашей работе";
const subtitle = "Просто посмотрите, как мы работаем";
const mailSubtitle = "Полезные статьи, акции, новости - получите все это сейчас!"

const Video: React.FC = () => {
    const [windowWidth, setwindowWidth] = useState<number>(window.innerWidth);

    const resizeWindow = () => {
        setwindowWidth(window.innerWidth);
    };

    useEffect(() => {
        resizeWindow();
        window.addEventListener("resize", resizeWindow);

        return () => {
            window.removeEventListener("resize", resizeWindow);
        }
    }, []);

    return (
        <section className="video">
            <div className="container">
                <div className="video-container">
                    <div className="video-description">
                        <Title color="white" text={title} />
                    </div>
                    <Subtitle color="white" text={subtitle} />
                    <div className="video-link">
                        <iframe
                            className="video-youTube"
                            width="970"
                            height="430"
                            src="https://www.youtube.com/embed/7S7smPw9EiE"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                        </iframe>
                    </div>
                </div>

                <div className="mailing">
                    <Heading
                        color={windowWidth < 481 ? "white" : null}
                        text="Подпишитесь на нашу рассылку"
                    />
                    <span className="mailing-box">
                        <Subtitle color={windowWidth < 481 ? "white" : null} text={mailSubtitle} />
                    </span>
                    <div>
                        <input
                            className="mailing-input"
                            type="text"
                            placeholder="Ваш e-mail" />
                        <Button border="border" title="Подписаться" />
                    </div>
                    <div className="mailing-subtitle">Мы не шлем спам и не передаем ваши данные</div>
                </div>
            </div>
        </section>
    )
};

export default Video;