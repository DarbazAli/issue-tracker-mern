import React from 'react'
import DeleteIssueForm from './DeleteIssueForm'

const Issue = ({
  issue: { title, text, creator, open, created, updated, _id },
  project,
}) => {
  return (
    <div className='issue-card'>
      <h2>{title}</h2>
      <p>{text}</p>
      <p>Created by: {creator}</p>
      <p>Status: {open === true ? 'Open' : 'Closed'}</p>
      <p>Created at {created}</p>
      <p>Last updated {updated}</p>
      <DeleteIssueForm project={project} id={_id} />
    </div>
  )
}

export default Issue
