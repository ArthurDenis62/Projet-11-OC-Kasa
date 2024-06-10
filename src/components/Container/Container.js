import styles from './Container.module.scss';

const Container = () => {
    const allCards = Array.from({ length: 20 }, (_, index) => <Card key={index} />);
    return (
        <div className={styles.container}>
            <div className={styles.containerCard}>
                {allCards }
            </div>
        </div>
    );
}

const Card = ({id, title, cover}) => {
    return (
            <div className={styles.card}>
                <p className={styles.paragraphe}>Titre de la location</p>
            </div>
    )
}

export default Container;