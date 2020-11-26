import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import IssueList from '../components/IssueList'
import NewFormIssue from '../components/NewFormIssue'

const ProjectDetail = () => {
  const { project } = useParams()
  const [issues, setIssues] = useState([])

  useEffect(() => {
    const fetchIssues = async () => {
      const { data } = await axios.get(`/api/issues/${project}`)
      setIssues(data)
    }
    fetchIssues()
    return issues
  }, [project, issues])

  return (
    <div className='container'>
      <NewFormIssue project={project} />
      <h1>{project}</h1>
      <h4>{issues.length} Issues </h4>
      <IssueList issues={issues} project={project} />
    </div>
  )
}

export default ProjectDetail
