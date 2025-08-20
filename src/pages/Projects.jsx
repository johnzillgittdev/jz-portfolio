import styles from './Projects.module.css';

function Projects() {
    return (
        <div className={styles.page}>
            <div className={styles.pageTitle}>
                <div className={styles.bullet}></div>
                <h1>Projects</h1>
            </div>
            <div className={styles.section}>
                <div className={styles.sectionInfo}>
                    <h3>Personal Portfolio</h3>
                    <p>ReactJS</p>
                    <p>CSS Modules</p>
                </div>
                <div className={styles.sectionDescription}>
                    <p>This very website is its own project that I started to give myself the challenge of learning to develop and deploy ReactJS, as well as to give myself a place to showcase who I am and what I do.</p>
                    <p></p>
                </div>
            </div>
        </div>
    );
}
export default Projects;