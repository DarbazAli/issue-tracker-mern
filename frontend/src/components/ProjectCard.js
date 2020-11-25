import React from 'react'
import { Link } from 'react-router-dom'
const ProjectCard = ({ project }) => {
  const issueLen = project.issues.length
  return (
    <div className='project-card'>
      <h4>
        <Link to={`/issues/${project.project}`}>{project.project}</Link>
      </h4>

      <p>
        <b>{issueLen <= 1 ? `${issueLen} Issue` : `${issueLen} Issues`} </b>
      </p>

      <p>{project.description}</p>
    </div>
  )
}

export default ProjectCard
