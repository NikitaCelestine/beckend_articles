const Router = require('express')

const router = new Router()

const Articles_controller = require('../controller/articles_controller')

router.post( '/', Articles_controller.createArticles)
router.get('/:id', Articles_controller.getArticles)
router.put('/:id', Articles_controller.updateArticles)
router.delete('/:id', Articles_controller.deleteArticles)

module.exports = router