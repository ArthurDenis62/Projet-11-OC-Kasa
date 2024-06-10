import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import HomeBanner from "../../img/bgAccueil.svg";
import '../../font/font.module.scss';

const Home = () => {
    return (
        <div>
            <Banner image={HomeBanner} altText={`Banner Accueil`} textContent={'Chez vous, partout et ailleurs'} />
            <div className="container">
                <Gallery />
            </div>
        </div>
    )
}

export default Home;