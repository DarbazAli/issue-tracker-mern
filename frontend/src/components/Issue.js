import React from 'react'

const Issue = ({ issue }) => {
  return (
    <div className='issue-card'>
      <h2>{issue.title}</h2>
      <p>{issue.text}</p>
      <p>Created by: {issue.creator}</p>
      <p>Status: {issue.open === true ? 'Open' : 'Closed'}</p>
      <p>Created at {issue.created}</p>
      <p>Last updated {issue.updated}</p>
    </div>
  )
}

export default Issue
