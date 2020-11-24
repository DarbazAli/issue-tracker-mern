import React, { useState } from 'react'
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
      .catch(() => setError(`* ${name} is taken`))
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4>Create new project</h4>
      <input
        placeholder='Project name'
        name='name'
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name='description'
        type='text'
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        placeholder='Project description'
      />

      <button type='submit'>Submit</button>
      <p className='error'>{error}</p>
    </form>
  )
}

export default NewProjectForm
