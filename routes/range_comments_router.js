const Router = require('express')

const router = new Router()

const RangeComment = require('../controller/comment_range')

router.get('/', RangeComment.getComments)

module.exports = router