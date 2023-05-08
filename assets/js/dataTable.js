const userData = JSON.parse(localStorage.getItem("userData")) 

console.log(userData)

userData.map(item=>{
    document.querySelector("#customers").innerHTML += `
    <tr>
    <td>${item.name}</td>
    <td>${item.surname}</td>
    <td>${item.password}</td>
  </tr>
    `
})