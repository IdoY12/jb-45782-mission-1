let products = []

function addProductToTable(event) {
    event.preventDefault()
    const data = takeDataFromForm()
    products.push(data)
    renderNewTable()
    resetForm()
}

function takeDataFromForm() {
    const productName = document.getElementById("productName").value
    const price = document.getElementById("price").value
    const selectOption = document.getElementById("selectOption").value
    const image = document.getElementById("image").value
    return {
        productName,
        price,
        selectOption,
        image
    }
}

function deleteProductFromTable(index) {
    products.splice(index, 1)
    renderNewTable()
}

function renderNewTable() {
    const tbody = document.getElementById("tBody")
    tbody.innerHTML = ""
    for(let count = 0; count < products.length; count++) {
        const product = products[count] 
        const newTR = `
        <tr>
            <td>${product.productName}</td>
            <td>${product.price}</td>
            <td>${product.selectOption}</td>
            <td> <img src="${product.image}"> </td>
            <td>
            <button onclick="deleteProductFromTable(${count})" class="btn btn-danger">
            Delete product
            </button>
            </td>
        </tr>
    `
    tbody.innerHTML += newTR
    }
}

function resetForm(){
    document.getElementById("form").reset()
}