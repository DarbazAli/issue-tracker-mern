import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'
const ProjectCard = ({ project }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{project.project}</Card.Title>
        <Card.Subtitle className='mb-2 text-muted'>
          {project.issues.length} Issues
        </Card.Subtitle>
        <Card.Text>{project.description}</Card.Text>
        <Card.Link href='#'>Open</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard
