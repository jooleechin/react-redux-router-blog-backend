const db = require('../db')
const { tableNames : { BLOG_POSTS } } =  require('../constants')
const Model = require('./Model')(BLOG_POSTS)

class BlogPost extends Model {}

module.exports = BlogPost
