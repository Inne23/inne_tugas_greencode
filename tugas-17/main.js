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

let datasaya = [{
    "id": 1,
    "name": "inne",
    "nmr_phone": "082210415064",
    "point": "350 point"
}]

app.get("/tugas-user", function (req, res) {
    
    res.json({
        message:"succes data berhasil",
        data : datasaya,
    })
})

app.post("/tugas-user", function (req , res) {
    const { id, name, nmr_phone, point} = req.body

    datasaya.push({
    
    "id": id,
    "name": name,
    "nmr_phone": nmr_phone,
    "point": point,

    })
    res.json({
        message: "data berhasil ditambahkan"
    })
    
})

app.delete("/tugas-user", function (req, res) {
    const { id, } = req.body;

    for (let index = 0; index < datasaya.length; index++) {
        if (id == datasaya[index].id) {
            datasaya.splice(index, 1)
        }
    }
    res.json({
        message: "data berhasil di hapus"
    });
})
app.listen(port, function () {
    console.log("server berjalan")
})

