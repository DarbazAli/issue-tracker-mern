import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import IssueList from '../components/IssueList'

const ProjectDetail = () => {
  const { project } = useParams()
  const [issues, setIssues] = useState([])

  useEffect(() => {
    const fetchIssues = async () => {
      const { data } = await axios.get(`/api/issues/${project}`)
      setIssues(data)
    }
    fetchIssues()
  }, [project])

  return (
    <div className='container'>
      <h1>{project}</h1>
      <IssueList issues={issues} />
    </div>
  )
}

export default ProjectDetail

// TODO: Create new issue form
// TODO: Create Issue Card
// TODO: Create Issue list
