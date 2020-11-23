import React, { useState, useEffect } from 'react'
import { CardGroup } from 'react-bootstrap'
import axios from 'axios'
import ProjectCard from '../components/ProjectCard'
import NewProjectForm from '../components/NewProjectForm'

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await axios.get('/api/projects')
      setProjects(data)
    }
    fetchProjects()
  }, [projects])
  return (
    <div>
      <NewProjectForm />
      <h3>Recent Projects</h3>

      {projects.map((project) => (
        <ProjectCard project={project} key={project._id} />
      ))}
    </div>
  )
}

export default Projects
