const DataProduk = require("../../data/dataProduk")



exports.GetProduk = function (req, res) {
    
    res.json({
        message:"succes data berhasil",
        data : DataProduk,
    })
}