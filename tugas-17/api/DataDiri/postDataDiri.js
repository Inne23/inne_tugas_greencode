const DataDiri = require("../../data/dataDiri")



exports.PostDataDiri = function (req , res) {
    const { id, nama, jenis_kelamin, agama, alamat, usia, tanggal_lahir} = req.body

    DataDiri.push({
    
    "id": id,
    "nama": nama,
    "jenis_kelamin": jenis_kelamin,
    "agama": agama,
    "alamat": alamat,
    "usia": usia,
    "tanggal_lahir": tanggal_lahir,

    })
    res.json({
        message: "data berhasil ditambahkan"
    })
    
}