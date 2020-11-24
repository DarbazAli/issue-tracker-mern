import React, { useState } from 'react'
import axios from 'axios'
const NewFormIssue = ({ project }) => {
  const [newIssue, setNewIssue] = useState({
    title: '',
    text: '',
    creator: '',
    open: null,
  })

  const [error, setError] = useState('')

  const handleChange = (name) => (event) => {
    setNewIssue({ ...newIssue, [name]: event.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios
      .post(`/api/issues/${project}`, newIssue)
      .then(() => {
        setNewIssue({
          title: '',
          text: '',
          creator: '',
          open: null,
        })
      })
      .catch((error) => setError(error))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Create new issue</h4>
      <input
        placeholder='issue title'
        name='title'
        id='title'
        type='text'
        value={newIssue.title}
        onChange={handleChange('title')}
      />

      <br />

      <textarea
        placeholder='description'
        name='text'
        id='text'
        type='text'
        value={newIssue.text}
        onChange={handleChange('text')}
        style={{ width: '300px', height: '100px' }}
      />
      <br />
      <input
        placeholder='Creator'
        name='creator'
        id='creator'
        type='text'
        value={newIssue.creator}
        onChange={handleChange('creator')}
      />

      <button type='submit'>Submit</button>
      <p className='error'>{error}</p>
    </form>
  )
}

export default NewFormIssue
