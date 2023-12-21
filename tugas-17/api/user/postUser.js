const DataSaya = require("../../data/data")



exports.PostUser = function (req , res) {
    const { id, name, nmr_phone, point} = req.body

    DataSaya.push({
    
    "id": id,
    "name": name,
    "nmr_phone": nmr_phone,
    "point": point,

    })
    res.json({
        message: "data berhasil ditambahkan"
    })
    
}