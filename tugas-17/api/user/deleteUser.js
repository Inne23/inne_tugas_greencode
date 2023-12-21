const DataSaya = require("../../data/data")



exports.DeleteUser = function (req, res) {
    const { id, } = req.body;

    for (let index = 0; index < DataSaya.length; index++) {
        if (id == DataSaya[index].id) {
            DataSaya.splice(index, 1)
        }
    }
    res.json({
        message: "data berhasil di hapus"
    });
}