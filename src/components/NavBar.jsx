import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
    return (
        <nav className={styles.nav}>
            <div className={styles.name}>
                <h3>John Zillgitt</h3>
                <p>/ Software Engineer</p>
            </div>
            <div className={styles.links}>
                <NavLink to="/" className={({isActive}) => (
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                )}>About Me</NavLink>
                <NavLink to="/experience" className={({isActive}) => (
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                )}>Experience</NavLink>
                <NavLink to="/projects" className={({isActive}) => (
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                )}>Projects</NavLink>
                <NavLink to="/contact" className={({isActive}) => (
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                )}>Contact</NavLink>
            </div>
        </nav>
    );
}

export default NavBar;