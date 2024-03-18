fetch("https://api.storerestapi.com/products").then(y => {
    return y.json();
}).then(y => {
    console.log(y);
    mydata = y.data;
    displaydata(mydata)


})

let mydata = [];

const displaydata = (data) => {

    let tabledata = data.map(function (value) {
        return `<tr><td>id-:${value._id}</td>
    <td>title-:${value.title}</td>
    <td>name-:${value.category.name}</td>

    <td>price-:${value.price}</td></tr>
    `
    })

    document.getElementById("table").innerHTML = tabledata.join(" ");

}



function Search() {

    let searchdata = document.getElementById('search').value.toLowerCase();

    let filterData = mydata.filter((val) => {
        return val.title.toLowerCase().includes(searchdata);

    })
    console.log(filterData)
    displaydata(filterData)

}