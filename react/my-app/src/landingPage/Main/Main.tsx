import Duties from "../Duties";
import FooterContacts from "../FooterContacts";
import Header from "../Header";
import Introduction from "../Introduction";
import Projects from "../Projects";
import Services from "../Services";
import Standarts from "../Standarts";
import VideoComponent from "../Video";

import 'rc-slider/assets/index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './main.scss';

const Main: React.FC = () => {
    return (
        <>
            <Header />
            <Introduction />
            <Services />
            <Standarts />
            <Duties />
            <Projects />
            <VideoComponent />
            <FooterContacts />

        </>
    )
};

export default Main;