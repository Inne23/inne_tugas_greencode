const apiurl = "http://localhost:3000/"
const getdata = document.getElementById("data")
const getdata2 = document.getElementById("data2")
fetch(apiurl + "tugas-user")
.then((res) => res.json())
.then((data) => {
    console.log(data)
    for (let index = 0; index < data.data.length; index++) {
        getdata.innerHTML += `<tr>
        <td>${data.data[index].id}</td>
        <td>${data.data[index].name}</td>
        <td>${data.data[index].nmr_phone}</td>
        <td>${data.data[index].point}</td>
        <td>
            <button onclick="deletedata(${data.data[index].id})">delete</button>
            <button>edit</button>
        </td>
        
    </tr>`
    }
})
function deletedata(id) {
    fetch(apiurl + "tugas-user", {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id })
    })

    window.location.reload();
}


function addData() {
    const getInputid = document.getElementById("input-id");
    const getInputname = document.getElementById("input-name");
    const getInputnmr_phone = document.getElementById("input-nmr_phone");
    const getInputpoint = document.getElementById("input-point");

    const data = {
        "id": getInputid.value,
        "name": getInputname.value,
        "nmr_phone": getInputnmr_phone.value,
        "point": getInputpoint.value
    }

    fetch(apiurl + "tugas-user", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    window.location.reload();
}