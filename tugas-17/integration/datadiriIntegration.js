const apiurl = "http://localhost:3000/"
const getdata = document.getElementById("data")
const getdata2 = document.getElementById("data2")
fetch(apiurl + "datadiri-user")
.then((res) => res.json())
.then((data) => {
    console.log(data)
    for (let index = 0; index < data.data.length; index++) {
        getdata.innerHTML += `<tr>
        <td>${data.data[index].id}</td>
        <td>${data.data[index].nama}</td>
        <td>${data.data[index].jenis_kelamin}</td>
        <td>${data.data[index].agama}</td>
        <td>${data.data[index].alamat}</td>
        <td>${data.data[index].usia}</td>
        <td>${data.data[index].tanggal_lahir}</td>
        <td>
            <button onclick="deletedata(${data.data[index].id})">delete</button>
            <button>edit</button>
        </td>
        
    </tr>`
    }
})
function deletedata(id) {
    fetch(apiurl + "datadiri-user", {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    })

    window.location.reload();
}


function addDataDiri() {
    const getInputid = document.getElementById("input-id");
    const getInputnama = document.getElementById("input-nama");
    const getInputjenis_kelamin = document.getElementById("input-jenis_kelamin");
    const getInputagama = document.getElementById("input-agama");
    const getInputalamat = document.getElementById("input-alamat");
    const getInputusia = document.getElementById("input-usia");
    const getInputtanggal_lahir = document.getElementById("input-tanggal_lahir");

    const data = {
        "id": getInputid.value,
        "nama": getInputnama.value,
        "jenis_kelamin": getInputjenis_kelamin.value,
        "agama": getInputagama.value,
        "alamat": getInputalamat.value,
        "usia": getInputusia.value,
        "tanggal_lahir": getInputtanggal_lahir.value
    }

    fetch(apiurl + "datadiri-user", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    window.location.reload();
}