const { tableNames : { BLOG_POSTS } } =  require('../constants')
const Controller = require('./Controller')(BLOG_POSTS)

class BlogPostController extends Controller {}

module.exports = BlogPostController
