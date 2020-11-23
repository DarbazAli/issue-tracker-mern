import React from 'react'
import { Card } from 'react-bootstrap'
const ProjectCard = ({ project }) => {
  return (
    <Card
      variant='light'
      style={{ width: '14rem', marginRight: '1rem' }}
      className='my-2'
    >
      <Card.Header as='h4'>
        <Card.Link href={`/issues/${project.project}`}>
          {project.project}
        </Card.Link>
      </Card.Header>
      <Card.Body>
        <Card.Title>{project.issues.length} Issues(s) </Card.Title>
        <Card.Text>{project.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProjectCard
