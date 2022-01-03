import classes from './projectsGrid.module.css'
import { PROJECT_DATA } from '../public/projects-data'
import { useState } from 'react'
import ProjectGridItem from './ProjectGridItem'
const ProjectsGrid = () => {
    const [data, setData] = useState(PROJECT_DATA)

    if (!data) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div className={classes.main}>
            { data.map(project => (
                <ProjectGridItem project={project} key={project.id} />
            ))}
        </div>
    )
}

export default ProjectsGrid
