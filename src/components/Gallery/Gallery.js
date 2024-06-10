import styles from './Gallery.module.scss'
import datas from '../../data/data'
import Card from '../Card/Card'

function Gallery() {
    return (
        <main className={styles.containerCard}>
            <div className={styles.container}>
            {datas.map(data => {
                return (
                    <Card
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
            </div>
        </main>
    )
}

export default Gallery;