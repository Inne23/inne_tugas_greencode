const DataProduk = require("../../data/dataProduk")



exports.DeleteProduk = function (req, res) {
    const { id, } = req.body;

    for (let index = 0; index < DataProduk.length; index++) {
        if (id == DataProduk[index].id) {
            DataProduk.splice(index, 1)
        }
    }
    res.json({
        message: "data berhasil di hapus"
    });
}