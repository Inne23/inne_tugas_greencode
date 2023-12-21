const DataDiri = require("../../data/dataDiri")



exports.GetDataDiri = function (req, res) {
    
    res.json({
        message:"succes data berhasil",
        data : DataDiri,
    })
}