import styles from './About.module.css';
import InfoCard from '../components/InfoCard';

function About() {
    return (
        <div className={styles.page}>
            <div className={styles.left}>
                <div className={styles.info}>
                <InfoCard />
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.stack}>
                    <h1>Hello!</h1>
                    <h2>My name is John Zillgitt and I am excited to tell you a bit about myself</h2>
                    <p>Profesionally, I am a Software Engineer with 5+ years of experience across the full stack of development, including</p>
                    <ul>
                        <li>Front-end creation for mobile and web applications using XAML, JavaScript, and CSS</li>
                        <li>Back-end support to handle database and business logic using C#, Java, and SQL</li>
                        <li>REST API architecting to support efficient and scalable application-server communication</li>
                    </ul>
                    <p>Outside of my programming work, I enjoy hands-on projects like woodworking or home improvement projects.</p>
                    <h4>My favorite hobby by far is building lasting memories with my wonderful family.</h4>
                </div>
            </div>
        </div>
    );
}
export default About;