import styles from './InfoDescriptionCard.module.css'

function ProjectCard(props) {
    return (
        <div className={styles.card}>
            {BuildInfoSection(props.info)}
            {BuildDescriptionSection(props.description)}
        </div>
    )
}
export default ProjectCard;

function BuildInfoSection(info) {
    var infoItems = info.split('|');
    return (
        <div className={styles.projectInfo}>
            {infoItems.map((item, index) => {
                if (index === 0) {
                    return <h3>{item}</h3>
                } else {
                    return <p>{item}</p>
                }
            })}
        </div>
    );
}

function BuildDescriptionSection(description) {
    var descriptionItems = description.split('|');
    return (
        <div className={styles.projectDescription}>
            {descriptionItems.map((item, index) => {
                return <p>{item}</p>
            })}
        </div>
    )
}