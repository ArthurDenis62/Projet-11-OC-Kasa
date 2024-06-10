import { Link } from 'react-router-dom'
import styles from './Card.module.scss'


function Card({id, title, cover}) {

	return (
		<Link to={`/accomodation/${id}`} className={styles.linkCard}>
			<img className={styles.Card} src={cover} alt={title} />
			<h3 className={styles.titleCard}>{title}</h3>	
		</Link>
	)
}

export default Card;