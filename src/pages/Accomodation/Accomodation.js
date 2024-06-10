import styles from './Accomodation.module.scss';
import { useParams } from 'react-router-dom';
import datas from '../../data/data';
import Slider from '../../components/Carousel/Carousel';
import Collapse from '../../components/Collapse/Collapse';
import greyStar from '../../img/grey_stars.svg';
import redStar from '../../img/red_stars.svg';

function Accommodation() {
	let {id} = useParams();
	const dataCurrentAccomodation = datas.find(data => data.id === id);
	const name = dataCurrentAccomodation.title; 
	const rating = dataCurrentAccomodation.rating;
	const description  = dataCurrentAccomodation.description;
	const equipments = dataCurrentAccomodation.equipments;
	return (
		<>
			<Slider imgSlider={dataCurrentAccomodation.pictures}/>
			<main className={styles.accomodation}>
				<div className={styles.content}>
					<div className={styles.infos}>
						<h1>{name}</h1>
						<p>{dataCurrentAccomodation.location}</p>
						<div className={styles.button}>
							{dataCurrentAccomodation.tags.map((tag, index) => {
								return (
									<button className={styles.tagName} key={index}>{tag}</button>
								)
							})}
						</div>
					</div>
					<div className={styles.hote}>
						<div className={styles.profileHote}>
							<img className={styles.picture} src={dataCurrentAccomodation.host.picture} alt="hôte de ce logement" />
							<span className={styles.name}>{dataCurrentAccomodation.host.name}</span>
						</div>							
						<div className={styles.stars}>
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
								)
							})}
						</div>
					</div>
				</div>
				<div className={styles.collapse}>
					<div className={styles.items}>
						<Collapse title={'Description'} content={description} />	
					</div>
					<div className={styles.items}>
						<Collapse title={'Équipements'} content={equipments}/>
					</div>	
				</div>
			</main>
		</>
	)
}

export default Accommodation;