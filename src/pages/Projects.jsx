import styles from './Projects.module.css';
import ProjectCard from '../components/InfoDescriptionCard';

function Projects() {
    const projects = [
        {
            info: "University Research Paper|Human-Computer Interfaces|Virtual Reality Image Compression",
            description: "Researched human experience with virtual reality images using varying levels of image compression.|Performed in-person experiments to test whether or not participants could meaningfully identify differences between images using different methods and levels of compression.|Determined virtual reality content delivery bandwidth could be reduced by using higher compression in areas of an image where user focus is lower."
        }
    ];

    return (
        <div className={styles.page}>
            <div className={styles.pageTitle}>
                <div className={styles.bullet}></div>
                <h1>Projects</h1>
            </div>
            {projects.map((item, index) => (
                <ProjectCard key={index} info={item.info} description={item.description} />
            ))}
        </div>
    );
}
export default Projects;