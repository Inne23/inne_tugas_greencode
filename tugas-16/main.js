const express = require('express')
const app = express()
const port = 3000
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

let datauser = [{
    "id": 1,
    "code": "XFGH234",
    "name": "inne",
    "category": "regular",
    "price": "Rp 35.000"
}]

app.get("/api-user", function (req, res) {
    
    res.json({
        message:"succes data berhasil",
        data : datauser,
    })
})

app.post("/api-user", function (req , res) {
    const { id, code, name, category, price} = req.body

    datauser.push({
    
    "id": id,
    "code": code,
    "name": name,
    "category": category,
    "price": price,

    })
    res.json({
        message: "data berhasil ditambahkan"
    })
    
})

app.delete("/api-user", function (req, res) {
    const { id, } = req.body;

    for (let index = 0; index < datauser.length; index++) {
        if (id == datauser[index].id) {
            datauser.splice(index, 1)
        }
    }
    res.json({
        message: "data berhasil di hapus"
    });
})
app.listen(port, function () {
    console.log("server berjalan")
})