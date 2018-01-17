const { tableNames : { BLOG_POSTS } } =  require('../../constants')

exports.seed = knex => {
  return knex(BLOG_POSTS).del().then(() => {
    return knex(BLOG_POSTS).insert([
      { id: 1, title: 'Clever blog title', content},
      { id: 2, title: 'Poigniat point', content},
      { id: 3, title: 'Misused Quote', content},
      { id: 4, title: 'Reference that dates author', content},
      { id: 5, title: 'Poor attempt at humor', content},
    ])
  }).then(() => {
    return knex.raw(`SELECT setval('${BLOG_POSTS}_id_seq', (SELECT MAX(id) FROM ${BLOG_POSTS}));`)
  })
}


const content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam mi leo. Etiam interdum, elit euismod pretium sagittis, leo nibh iaculis mauris, ut vulputate velit libero vel mauris. Donec dictum quis nibh quis elementum. Vestibulum faucibus arcu porttitor erat placerat, quis luctus magna iaculis. Morbi ut sem lacus. Maecenas diam nunc, consequat ac purus vitae, gravida viverra arcu. Donec congue lacus sed purus varius, eu varius sem volutpat. Quisque vel lacinia dui, at venenatis libero. Curabitur varius nunc urna, vitae pulvinar dui consequat sit amet. Integer et feugiat ante.

Morbi sagittis ipsum sed orci sollicitudin, ac viverra dolor tristique. Nam tempus aliquam tincidunt. Duis mollis, massa at hendrerit porttitor, nibh leo vestibulum turpis, eu porttitor tellus elit in ligula. Phasellus tempor nisi ut mi suscipit, non pellentesque ligula scelerisque. Etiam laoreet aliquet quam in suscipit. Integer hendrerit rutrum arcu in facilisis. Suspendisse sed sapien imperdiet, viverra est quis, tempor purus. Sed diam sapien, pretium sed pulvinar ac, eleifend ut ex. Phasellus fermentum gravida lorem eu posuere. Ut congue vitae odio a semper.

Aliquam metus urna, suscipit ac metus sed, viverra imperdiet lorem. Aenean imperdiet et nulla non congue. In hac habitasse platea dictumst. Nulla quis maximus libero. Curabitur rutrum elit felis. Duis facilisis, enim ut molestie malesuada, mi lacus sollicitudin ligula, quis eleifend dui tortor sed massa. Sed dolor magna, malesuada id pretium et, posuere quis orci. Sed ac aliquam nulla. Donec facilisis semper blandit. Suspendisse vel nulla sodales, rutrum nisl id, lacinia neque. Mauris euismod elit pretium ornare pharetra. Phasellus convallis rhoncus blandit.

Mauris vel enim nec neque dictum sollicitudin. Quisque ac arcu quis ligula suscipit commodo. Phasellus luctus lacus sed risus molestie ullamcorper. Suspendisse ac diam sed metus congue suscipit vitae interdum velit. Etiam fringilla metus eu venenatis vestibulum. Praesent sit amet feugiat libero. In quis cursus lacus. Etiam nec vehicula sem. Nulla varius dignissim condimentum. In hac habitasse platea dictumst. Duis elementum tortor non finibus imperdiet. Suspendisse in purus ullamcorper, sollicitudin nulla quis, vestibulum mauris. Sed mattis, lacus vel fringilla pharetra, nulla arcu ornare elit, in pellentesque leo odio id est. Vivamus dignissim posuere justo, vel molestie mi pharetra bibendum. Sed bibendum neque eu libero sodales placerat. Vivamus ligula ligula, facilisis a ornare at, bibendum id odio.

Vestibulum mattis, nunc ac porta commodo, ipsum quam volutpat justo, a auctor tortor tortor eget ipsum. Suspendisse consequat quis nunc ut hendrerit. Integer eu porttitor enim, ac pharetra dui. Morbi aliquam nisi in pellentesque porttitor. Sed vulputate malesuada turpis. Sed ullamcorper dui sit amet nibh rhoncus, ac auctor orci gravida. Mauris at rutrum mauris, id semper libero.`
