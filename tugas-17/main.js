const express = require('express');
const { GetUser } = require('./api/user/getUser');
const { PostUser } = require('./api/user/postUser');
const { DeleteUser } = require('./api/user/deleteUser');
const { GetProduk } = require('./api/Produk/getProduk');
const { PostProduk } = require('./api/Produk/postProduk');
const { DeleteProduk } = require('./api/Produk/deleteProduk');
const { GetDataDiri } = require('./api/DataDiri/getDataDiri');
const { PostDataDiri } = require('./api/DataDiri/postDataDiri');
const { DeleteDataDiri } = require('./api/DataDiri/deleteDataDiri');
const app = express()
const port = 3000
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get("/tugas-user",GetUser)
app.post("/tugas-user", PostUser)
app.delete("/tugas-user", DeleteUser)

app.get("/produk-user",GetProduk)
app.post("/produk-user",PostProduk)
app.delete("/produk-user",DeleteProduk)

app.get("/datadiri-user",GetDataDiri)
app.post("/datadiri-user",PostDataDiri)
app.delete("/datadiri-user",DeleteDataDiri)









app.listen(port, function () {
    console.log("server berjalan")
})

