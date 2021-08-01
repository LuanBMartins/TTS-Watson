const express = require('express')
const cors = require('cors')
const app = express()
const textRoute = require('./routes/textRoute')
const PORT = 3000


app.use(cors())
app.use(express.json())
app.use('/', textRoute)

app.listen(PORT, () => {
    console.log(`app listen to localhost:${PORT}`);
})