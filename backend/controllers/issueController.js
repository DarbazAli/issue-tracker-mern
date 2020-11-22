import shortid from 'shortid'
const { generate } = shortid
import Project from '../models/projectModel.js'

/*------------------------------------------------
CREATE NEW ISSUE
@des POST new issue
@url /api/issues/:project
@access public
-------------------------------------------------*/
const create = async (req, res) => {
  const { project } = req.params

  const { title, text, creator, assigned_to, open } = req.body

  try {
    // check if project is available
    const isExist = await Project.findOne({ project })
    // if project is not available, then return with error
    if (!isExist) return res.status(400).json({ error: 'Project not found' })

    // else create new issue, and push it the issues array
    const newIssue = {
      _id: generate(),
      title,
      text,
      creator,
      assigned_to,
      open: open === 'Open' ? true : false,
    }

    const doc = await Project.updateOne(
      { project: project },
      { $push: { issues: newIssue } }
    )
    if (doc.ok)
      return res.status(200).json({ message: 'New issue added successfully' })
  } catch (err) {
    return res.status(400).json({ error: err })
  }
}

/*------------------------------------------------
LIST ALL ISSUES
@des GET all issues
@url /api/issues/:project
@access public
-------------------------------------------------*/
const list = async (req, res) => {
  const { project } = req.params
  try {
    const { issues } = await Project.findOne({ project })
    return res.status(200).json(issues)
  } catch (err) {
    return res.status(400).json({
      error: 'Project not found',
    })
  }
}

/*------------------------------------------------
UPDATE ISSUE
-------------------------------------------------*/
const update = async (req, res) => {
  const { project } = req.params

  const { id, title, text, creator, assigned_to, open } = req.body
  const newIssue = {
    _id: generate(),
    title,
    text,
    creator,
    assigned_to,
    open: open === 'Open' ? true : false,
  }

  try {
    const issue = await Project.updateOne(
      { project: project, 'issues._id': id },
      { $set: { 'issues.$': newIssue } }
    )
    if (issue.ok)
      return res.status(200).json({ message: 'Issue updated successfully' })
  } catch (err) {
    return res.status(400).json({ error: err })
  }
}

/*------------------------------------------------
DELETE ISSUE
-------------------------------------------------*/
const deleteIssue = async (req, res) => {
  const { project } = req.params
  const { id } = req.body

  try {
    const deletedIssue = await Project.updateOne(
      { project },
      { $pull: { issues: { _id: id } } },
      { new: true }
    )
    return res.status(200).json({
      message: 'Issue deleted successfully',
      issue: deletedIssue,
    })
  } catch (err) {
    return res.status(400).json({ error: err })
  }
}
export default { create, list, update, deleteIssue }
