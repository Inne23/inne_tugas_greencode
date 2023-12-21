const DataSaya = require("../../data/data")



exports.GetUser = function (req, res) {
    
    res.json({
        message:"succes data berhasil",
        data : DataSaya,
    })
}