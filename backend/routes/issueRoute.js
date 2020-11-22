import express from 'express'
import issueCtrl from '../controllers/issueController.js'

const router = express.Router()

router
  .route('/api/issues/:project')
  .post(issueCtrl.create)
  .get(issueCtrl.list)
  .put(issueCtrl.update)
  .delete()

export default router
