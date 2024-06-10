import styles from './Banner.module.scss';

const Banner = ({image, altText, textContent}) => {
    return (
        <div className={styles.banner} style={{backgroundImage:`url(${image})`}}>
            {textContent ? <h1 className={styles.title}>{textContent}</h1> : ``}
        </div>
    )
}

export default Banner;