import styles from './InfoCard.module.css';
import profilePic from '../assets/me.jpeg';
import { ReactComponent as LinkedInIcon } from '../assets/linkedin.svg';
import { ReactComponent as GitHubIcon } from '../assets/github.svg';

function InfoCard() {
    return (
        <div className={styles.card}>
            <div className={styles.profile}>
                <div className={styles.profilePic}>
                    <img src={profilePic} alt="Profile" className={styles.profileImg} />
                </div>
                <h2>John Zillgitt</h2>
                <div className={styles.line}></div>
                <p>SOFTWARE ENGINEER</p>
            </div>
            <div className={styles.contact}>
                <a href="https://www.linkedin.com/in/john-zillgitt" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon className={styles.contactIcon} />
                </a>
                <a href="https://github.com/johnzillgittdev" target="_blank" rel="noopener noerrer">
                    <GitHubIcon className={styles.contactIcon} />
                </a>
            </div>
        </div>
    );
}

export default InfoCard;