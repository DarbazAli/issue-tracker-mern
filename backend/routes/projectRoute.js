import express from 'express'
import projectCtrl from '../controllers/projectController.js'
const router = express.Router()

router.route('/api/projects').post(projectCtrl.create).get(projectCtrl.list)

export default router
