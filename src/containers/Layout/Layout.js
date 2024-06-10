import { Outlet, Link } from 'react-router-dom';
import logoKasa from '../../img/logoKasa.svg';
import styles from './Layout.module.scss';

const Layout = () => {
    return (
        <div className='container'>
            <nav className={styles.navbar}>
                <ul>
                    <li><img src={logoKasa} alt="Logo Kasa" /></li>
                </ul>
                <ul className={styles.linkNav}>
                    <li><Link to="/" className={styles.linkNavA}>Accueil</Link></li>
                    <li><Link to="/About" className={styles.linkNavA}>A propos</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout;