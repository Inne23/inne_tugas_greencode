const apiurl = "http://localhost:3000/"
const getdata = document.getElementById("data")
const getdata2 = document.getElementById("data2")
fetch(apiurl + "produk-user")
.then((res) => res.json())
.then((data) => {
    console.log(data)
    for (let index = 0; index < data.data.length; index++) {
        getdata.innerHTML += `<tr>
        <td>${data.data[index].id}</td>
        <td>${data.data[index].name}</td>
        <td>${data.data[index].harga}</td>
        <td>${data.data[index].stok}</td>
        <td>
            <button onclick="deletedata(${data.data[index].id})">delete</button>
            <button>edit</button>
        </td>
        
    </tr>`
    }
})
function deletedata(id) {
    fetch(apiurl + "produk-user", {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    })

    window.location.reload();
}


function addDataProduk() {
    const getInputid = document.getElementById("input-id");
    const getInputname = document.getElementById("input-name");
    const getInputharga = document.getElementById("input-harga");
    const getInputstok = document.getElementById("input-stok");

    const data = {
        "id": getInputid.value,
        "name": getInputname.value,
        "harga": getInputharga.value,
        "stok": getInputstok.value
    }

    fetch(apiurl + "produk-user", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    window.location.reload();
}