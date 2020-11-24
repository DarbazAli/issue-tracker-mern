import React from 'react'
import Issue from './Issue.js'
const IssueList = ({ issues }) => {
  return (
    <div className='issue-list'>
      {issues.length > 0 ? (
        issues.map((issue) => <Issue key={issue._id} issue={issue} />)
      ) : (
        <h4>This project has no issues!</h4>
      )}
    </div>
  )
}

export default IssueList
