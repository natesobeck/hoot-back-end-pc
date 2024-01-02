import { Router } from 'express'
import * as blogsCtrl from '../controllers/blogs.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

// ========== Public Routes ===========


// ========= Protected Routes ========= 
router.use(decodeUserFromToken)
router.post('/', checkAuth, blogsCtrl.create)
router.get('/', checkAuth, blogsCtrl.index)
router.get('/:blogId', checkAuth, blogsCtrl.show)
router.put('/:blogId', checkAuth, blogsCtrl.update)
router.delete('/:blogId', checkAuth, blogsCtrl.delete)
router.post('/:blogId/comments', checkAuth, blogsCtrl.createComment)


export { router }