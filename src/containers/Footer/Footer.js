import styles from './Footer.module.scss';
import LogoFooter from '../../img/logoFooter.svg'

function Footer () {
    return (
            <footer className={styles.footer}>
                <div className='container'>
                    <img src={LogoFooter} alt={'Logo Kasa Footer'} />
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </footer>
       
    )
}

export default Footer;