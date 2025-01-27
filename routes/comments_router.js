const Router = require('express')

const router = new Router()

const Comments_controller = require('../controller/comments_controller')

router.post( '/:id/comment', Comments_controller.createComments)
router.get('/:id/comment/', Comments_controller.getComments)
router.put('/:id/comment/:comment_id', Comments_controller.updateComments)
router.delete('/:id/comment/:comment_id', Comments_controller.deleteComments)

module.exports = router