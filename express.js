const express = require('express');
const cors = require('cors');
const app = express();
const port = 80;

app.use(cors({
    origin: '*',
}))

app.use('/', express.static("src"));

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})