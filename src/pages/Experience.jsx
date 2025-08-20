import styles from './Experience.module.css';

function Experience() {
    return (
        <div className={styles.page}>
            <div className={styles.pageTitle}>
                <div className={styles.bullet}></div>
                <h1>Experience</h1>
            </div>
            <div className={styles.experienceTitle}>
                <h2>Career Timeline</h2>
                <a href="/resume.pdf" download>Download Resume</a>
            </div>
            <div className={styles.section}>
                <div className={styles.sectionInfo}>
                    <h3>Senior Software Engineer</h3>
                    <p>General Dynamics Mission Systems (Progeny Systems)</p>
                    <p>2019 - Present <b>|</b> Las Vegas, NV</p>
                </div>
                <div className={styles.sectionDescription}>
                    <p>Developed cross-platform apps with .NET MAUI and XAML, designed REST APIs, optimized SQL performance, and mentored junior engineers.</p>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.sectionInfo}>
                    <h3>Vice President of Academics</h3>
                    <p>Southern Utah University Student Association</p>
                    <p>Apr 2018 - Apr 2019 <b>|</b> Cedar City, UT</p>
                </div>
                <div className={styles.sectionDescription}>
                    <p></p>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.sectionInfo}>
                    <h3>Teaching Assistant</h3>
                    <p>Southern Utah University</p>
                    <p>Jan 2017 - Apr 2019 <b>|</b> Cedar City, UT</p>
                </div>
                <div className={styles.sectionDescription}>
                    <p></p>
                </div>
            </div>
            <div className={styles.experienceTitle}>
                <h2>Education</h2>
            </div>
            <div className={styles.section}>
                <div className={styles.sectionInfo}>
                    <h3>Bachelor of Science</h3>
                    <h3>Computer Science</h3>
                    <p>Southern Utah University</p>
                    <p>Aug 2015 - May 2019 <b>|</b> Cedar City, UT</p>
                </div>
                <div className={styles.sectionDescription}>
                    <p>Graduated Magna Cum Laude.</p>
                    <p>Served as Vice President of Academics and Chief of Staff for Student Association.</p>
                    <p>Served as freshman orientation team captain to introduce new students to the school.</p>
                    <p>Member of campus hockey club (community league)</p>
                </div>
            </div>
        </div>
    );
}

export default Experience;