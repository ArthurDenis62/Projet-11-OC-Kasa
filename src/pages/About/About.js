import Banner from "../../components/Banner/Banner";
import Collapse from '../../components/Collapse/Collapse';
import styles from './About.module.scss';
import AboutBanner from "../../img/bgApropos.svg";

function About () {
    const fiablilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
    const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
    const service = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
    const securite = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";
    return (
        <>
            <div>
                <Banner image={AboutBanner} altText={`Banner A propos`} textContent={null} />
            </div>
            <main className={styles.About}>
                <div className={styles.collapse}>
                    <div className={styles.items}>
                        <Collapse title={'Fiablilité'} content={fiablilite}/>	
                    </div>
                    <div className={styles.items}>
                        <Collapse title={'Respect'} content={respect}/>
                    </div>
                    <div className={styles.items}>
                        <Collapse title={'Service'} content={service}/>
                    </div>
                    <div className={styles.items}>
                        <Collapse title={'Sécurité'} content={securite}/>
                    </div>	
                </div>
            </main>
        </>
    )
}

export default About;