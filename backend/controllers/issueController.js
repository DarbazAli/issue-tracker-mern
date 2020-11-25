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

  if (!title || !text || !creator)
    return res.status(400).json({ error: 'required field(s) missing' })

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
      created: Date.now().toString(),
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
  let { open, creator } = req.query

  try {
    const { issues } = await Project.findOne({ project })

    // sort issues by created time
    issues.sort((a, b) => b.created.getTime() - a.created.getTime())

    // filter issue by open status
    if (open) {
      if (open === 'true') {
        return res.status(200).json(issues.filter((x) => x.open === true))
      } else {
        return res.status(200).json(issues.filter((x) => x.open === false))
      }
    }

    // filter by creator
    if (creator && !open) {
      return res.status(200).json(issues.filter((x) => x.creator === creator))
    }

    if (creator && open === 'true') {
      return res
        .status(200)
        .json(
          issues
            .filter((x) => x.open === true)
            .filter((x) => x.creator === creator)
        )
    }

    if (creator && open === 'false') {
      return res
        .status(200)
        .json(
          issues
            .filter((x) => x.open === false)
            .filter((x) => x.creator === creator)
        )
    }

    // return without filtering
    else {
      return res.status(200).json(issues)
    }
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

  if (!id) return res.status(400).json({ error: 'Missing id' })
  const newIssue = {
    title,
    text,
    creator,
    assigned_to,
    updated: Date.now().toString(),
    open: open.toLowerCase() === 'open' ? true : false,
  }

  try {
    const issue = await Project.updateOne(
      { project: project, 'issues._id': id },
      { $set: { 'issues.$': newIssue } }
    )
    if (issue.ok)
      return res
        .status(200)
        .json({ message: 'Issue updated successfully', _id: newIssue._id })
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
