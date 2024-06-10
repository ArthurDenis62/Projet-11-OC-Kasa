import styles from './Collapse.module.scss';
import arrow from '../../img/arrow.png';
import { useState } from 'react';

function Collapse({content, title}) {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div className={styles.collapse}>
                <h3 className={styles.title} onClick={() => setToggle(!toggle)}>{title}
                    <img className={toggle ? styles.arrow_up : styles.arrow_down} src={arrow} alt="show content" />
                </h3>
                <div className={toggle ? styles.content : styles.content_hidden}>
                    {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) : content }
                </div>
            </div>
        </>
    )
}

export default Collapse;