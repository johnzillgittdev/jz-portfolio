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
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.sectionInfo}>
                    <h3>University Research Paper</h3>
                    <p>Human-Computer Interfaces</p>
                    <p>Virtual Reality Image Compression</p>
                </div>
                <div className={styles.sectionDescription}>
                    <p>Researched human experience with virtual reality images using varying levels of image compression.</p>
                    <p>Performed in-person experiments to test whether or not participants could meaningfully identify differences between images using different methods and levels of compression.</p>
                    <p>Determined virtual reality content delivery bandwidth could be reduced by using higher compression in areas of an image where user focus is lower.</p>
                </div>
            </div>
        </div>
    );
}
export default Projects;