const express = require('express')
const path = require('path')
const app = express()
const port = 3503

const vueClientFolder = path.join(process.cwd(),'../', 'vue-client/dist')

console.log(vueClientFolder)

app.use(express.static(vueClientFolder))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})