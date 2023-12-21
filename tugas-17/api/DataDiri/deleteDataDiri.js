const DataDiri = require("../../data/dataDiri")



exports.DeleteDataDiri = function (req, res) {
    const { id, } = req.body;

    for (let index = 0; index < DataDiri.length; index++) {
        if (id == DataDiri[index].id) {
            DataDiri.splice(index, 1)
        }
    }
    res.json({
        message: "data berhasil di hapus"
    });
}