const fs = require("fs");
fs.writeFileSync(
  "./.env",
  `
baseURL=${process.env.baseURL}\n
postsURL=${process.env.postsURL}\n
URL=${process.env.URL}
`
);
