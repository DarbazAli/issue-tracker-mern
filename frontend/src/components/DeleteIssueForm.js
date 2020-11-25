import React from 'react'
import axios from 'axios'

const DeleteIssueForm = ({ id, project }) => {
  const handleSubmit = async (e) => {
    e.preventDefault()

    await axios.delete(`/api/issues/${project}`, {
      data: { id: id },
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type='submit'>Delete</button>
    </form>
  )
}

export default DeleteIssueForm
