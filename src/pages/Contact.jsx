import styles from './Contact.module.css';

function Contact() {
    return (
        <div className={styles.page}>
            <div className={styles.pageTitle}>
                <div className={styles.bullet}></div>
                <h1>Contact Me</h1>
            </div>
            <div className={styles.contactContainer}>
                <h3>I am always excited about new opportunities, reach me at <a href="mailto:john.zillgitt@gmail.com">john.zillgitt@gmail.com</a></h3>
                <h3>Check out my projects on my <a href="https://github.com/johnzillgittdev" target="_blank" rel="noopener noerrer">GitHub</a></h3>
                <h3>Join my network on <a href="https://www.linkedin.com/in/john-zillgitt" target="_blank" rel="noopener noreferrer">LinkedIn</a></h3>
            </div>
        </div>
    );
}
export default Contact;