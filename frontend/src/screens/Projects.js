import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProjectCard from '../components/ProjectCard'
import NewProjectForm from '../components/NewProjectForm'

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    return axios.get('/api/projects').then((res) => setProjects(res.data))
  }, [])
  return (
    <div>
      <NewProjectForm />
      <h3>Recent Projects</h3>
      <div className='projects'>
        {projects.reverse().map((project) => (
          <ProjectCard project={project} key={project._id} />
        ))}
      </div>
    </div>
  )
}

export default Projects
