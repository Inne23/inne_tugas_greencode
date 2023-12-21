const DataProduk = require("../../data/dataProduk")



exports.PostProduk = function (req , res) {
    const { id, name, harga, stok} = req.body

    DataProduk.push({
    
    "id": id,
    "name": name,
    "harga": harga,
    "stok": stok,

    })
    res.json({
        message: "data berhasil ditambahkan"
    })
    
}