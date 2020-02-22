const fs = require('fs')
fs.writeFileSync('./.env', `
baseURL=${process.env.baseURL}\n
postURL=${process.env.POSTS_URL}\n
URL=${process.env.URL}\n
FORMS_TOKEN=${process.env.FORMS_TOKEN}
`)