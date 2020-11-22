import Project from '../models/projectModel.js'

/*-------------------------------------
@desc     POST NEW PROJECT
@route    /api/projects
@access   Public
--------------------------------------*/
const create = async (req, res) => {
  const { project, description } = req.body
  try {
    // check if project is already exists
    const isExist = await Project.findOne({ project })
    if (isExist)
      return res.status(400).json({
        error: `'${project}' already exists`,
      })
    else {
      const newProject = new Project({
        project,
        description,
        issues: [],
      })
      const prj = await newProject.save()

      return res.status(200).json(prj)
    }
  } catch (err) {
    return res.status(400).json({
      error: err,
    })
  }
}

/*-------------------------------------
@desc     LIST ALL PROJECTS
@route    /api/projects
@access   Public
--------------------------------------*/
const list = async (req, res) => {
  try {
    const projects = await Project.find()
    if (!projects)
      return res.status(400).json({
        message: 'No projects found',
      })
    return res.status(200).json(projects)
  } catch (err) {
    return res.status(400).json({
      error: err,
    })
  }
}

export default { create, list }
