const express = require('express')
const app = express()
const port = 3000
app.use(express.json());

app.get('/get-user', function (req, res) {
    res.json({

        message: "succes get data",
        username: "inne",
        email: "inne@gmail.com",
        password: 232323,
    })
})
app.post('/create-user', function (req, res) {
    const{username, email, password} = req.body;

    res.json({
        message: "succes get data",
        username: "inne",
        email: "inne@gmail.com",
        password: 232323,
    })
    
})

app.put('/create-user', function (req, res) {
    const{username, email, password} = req.body;

    res.json({
        message: "succes get data",
        username: "inne",
        email: "inne@gmail.com",
        password: 23,
    })
    
})

app.delete('/delete-user', function (req, res) {
    res.json({

        message: "succes delete data",
       
        
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})