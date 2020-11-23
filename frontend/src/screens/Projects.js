import React, { useState, useEffect } from 'react'
import { CardGroup } from 'react-bootstrap'
import axios from 'axios'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await axios.get('/api/projects')
      setProjects(data)
    }
    fetchProjects()
  }, [])
  return (
    <div>
      <h3>List of all projects</h3>
      <CardGroup>
        {projects.map((project) => (
          <ProjectCard project={project} key={project._id} />
        ))}
      </CardGroup>
    </div>
  )
}

export default Projects
