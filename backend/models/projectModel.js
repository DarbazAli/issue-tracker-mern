import mongoose from 'mongoose'

const IssueShema = new mongoose.Schema({
  id: String,
  title: String,
  text: String,
  creator: String,
  assigend_to: String,
  created: {
    type: Date,
    default: Date.now,
  },
  updated: Date,
  open: Boolean,
})

const ProjectShema = new mongoose.Schema(
  {
    project: {
      type: String,
      required: 'Project name is required',
      trim: true,
      unique: 'Project already exists',
    },

    issues: [IssueShema],
  },
  { timestamps: true }
)

export default mongoose.model('Project', ProjectShema)
