import React, { useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import axios from 'axios'

const NewProjectForm = () => {
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .post('/api/projects', { project: name, description: desc })
      .then(() => {
        setName('')
        setDesc('')
        setError('')
      })
      .catch(() => setError('Name is taken'))
  }
  return (
    <Form onSubmit={handleSubmit}>
      <h4>Create new project</h4>
      <Form.Row>
        <Col xs={3}>
          <Form.Control
            placeholder='Project name'
            name='name'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Col>
        <Col xs={6}>
          <Form.Control
            name='description'
            type='text'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder='Project description'
          />
        </Col>
        <Col>
          <Button type='submit'>Submit</Button>
        </Col>
      </Form.Row>
      <p className='error'>{error}</p>
    </Form>
  )
}

export default NewProjectForm
