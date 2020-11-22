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
    return res.status(200).json(doc)
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

export default { create, list }
