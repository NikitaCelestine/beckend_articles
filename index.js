const exspress = require('express');

const model_articles = require('./articles');
const model_comments = require('./comments');

model_articles.sync()
model_comments.sync()

const articlesRouter = require('./routes/articles_router')
const commentsRouter = require('./routes/comments_router')
const RangeComment = require('./routes/range_comments_router')

const PORT = process.env.PORT || 8080

const app = exspress()

app.use(exspress.json())
app.use('/articles', articlesRouter)
app.use('/articles', commentsRouter)
app.use('/analytic/comments', RangeComment)

app.listen(PORT, () => console.log(`${PORT}`))