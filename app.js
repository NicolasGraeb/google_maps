const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/test', (req, res) => {
    res.send('hi');

})

const port = 3000;

app.listen(port, () =>{
    console.log(`server is running on port http://localhost:${port}`);
})
