import classes from './projects.module.css'
import ProjectsGrid from './ProjectsGrid'
const Projects = () => {
    return (
        <div className={classes.main} id='projects'>
            <div className={ classes.titleContainer }>
                <h2><span className={ classes.titleSpan }>03.</span> My Projects</h2>
            </div>
            <div className={ classes.descriptionContainer }>
                <ProjectsGrid />
            </div>
        </div>
    )
}

export default Projects
