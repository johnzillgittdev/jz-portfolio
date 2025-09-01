import styles from './Experience.module.css';
import ExperienceCard from '../components/InfoDescriptionCard';

function Experience() {
    const jobs = [
        {
            info: "Senior Software Engineer|General Dynamics Mission Systems (Progeny Systems)|2019 - Present|Las Vegas, NV",
            description: "Built cross-platform mobile applications, web applications, REST APIs, and SQL database access classes.|Gained and deployed knowledge with frameworks like .NET Core, .NET MAUI, ExtJS, Spring, Oracle SQL, and more.|Built .NET code library with reusable front-end components and instrumental service methods.|Mentored fellow engineers on joining the company and feeling like part of the culture."
        },
        {
            info: "Vice President of Academics|Southern Utah University Student Association|Apr 2018 - Apr 2019|Cedar City, UT",
            description: "Led Student Life committee to focus on improvements to campus life and student experience.|Managed \"My SUU Voice\" program to receive and incorporate direct student feedback.|Planned involvement events to get students engaged with caring about what happens on campus."
        },
        {
            info: "Teaching Assistant|Southern Utah University|Jan 2017 - Apr 2019|Cedar City, UT",
            description: "Supported instruction for core computer science courses.|Enhanced student performance through personalized tutoring."
        }
    ];

    const education = [
        {
            info: "B.S. - Computer Science|Southern Utah University|Aug 2015 - May 2019|Cedar City, UT",
            description: "Graduated Magna Cum Laude.|Served as Vice President of Academics and Chief of Staff for Student Association.|Served as freshman orientation team captain to introduce new students to the school.|Member of campus hockey club (community league)"
        }
    ];

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
            {jobs.map((item, index) => (
                <ExperienceCard key={index} info={item.info} description={item.description} />
            ))}
            <div className={styles.experienceTitle}>
                <h2>Education</h2>
            </div>
            {education.map((item, index) => (
                <ExperienceCard key={index} info={item.info} description={item.description} />
            ))}
        </div>
    );
}

export default Experience;