const express = require('express');
const app = express();

app.enable('trust proxy')

app.get('/api/whoami', (req, res) => {
   return res.status(200).json({ ipaddress: req.ip, language: req.headers['accept-language'], software: req.headers['user-agent'] })
})

app.listen(3000, () => {
    console.log("Server is running at port 3000 ...")
})