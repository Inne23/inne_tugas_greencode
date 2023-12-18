const apiurl = "http://localhost:3000/"
const getdata = document.getElementById("data")
const getdata2 = document.getElementById("data2")
fetch(apiurl + "api-user")
.then((res) => res.json())
.then((data) => {
    console.log(data)
    for (let index = 0; index < data.data.length; index++) {
        getdata.innerHTML += `<tr>
        <th>${data.data[index].id}</th>
        <th>${data.data[index].code}</th>
        <th>${data.data[index].name}</th>
        <th>${data.data[index].category}</th>
        <th>${data.data[index].price}</th>
        
    </tr>`


    getdata2.innerHTML += `<li>${data.data[index].name}</li>`
        
    }
})

function addData() {
    const getInputid = document.getElementById("input-id");
    const getInputcode = document.getElementById("input-code");
    const getInputname = document.getElementById("input-name");
    const getInputcategory = document.getElementById("input-category");
    const getInputprice = document.getElementById("input-price");

    const data = {
        "id": getInputid.value,
        "code": getInputcode.value,
        "name": getInputname.value,
        "category": getInputcategory.value,
        "price": getInputprice.value
    }

    fetch(apiurl + "api-user", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    window.location.reload();
}