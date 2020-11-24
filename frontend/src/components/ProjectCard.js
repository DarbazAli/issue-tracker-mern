import React from 'react'
import { Link } from 'react-router-dom'
const ProjectCard = ({ project }) => {
  return (
    <div className='project-card'>
      <h4>
        <Link to={`/issues/${project.project}`}>{project.project}</Link>
      </h4>

      <p>
        <b>{project.issues.length} Issues(s) </b>
      </p>

      <p>{project.description}</p>
    </div>
  )
}

export default ProjectCard
