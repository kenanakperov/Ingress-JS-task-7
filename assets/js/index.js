// ! Task 1 | Create Function ========================================================================
// ! Butov funksiyaya cevrilib istediyimiz qeder button elave ede bilerik bir fuksiya ise salmaq vasitesile
// ! Reload olmadan clear button isleyir
// ? Ise salmaq ucun index.html den uncommit edin

// const button = document.querySelector(".imbutton")
// const buttondec = document.querySelector(".imdec")
// const clear = document.querySelector(".clear")

// const button2 = document.querySelector(".imbutton2")
// const buttondec2 = document.querySelector(".imdec2")
// const clear2 = document.querySelector(".clear2")

// let counter

// if(localStorage.getItem("counter")>0){
//     counter = document.querySelector(".count").innerText = localStorage.getItem("counter")
// } else{
//     counter = 0
// }

// let incF = ()=>{
//     counter++
//     localStorage.setItem("counter",counter)
//     document.querySelector(".count").innerText = counter
// }

// let decF = ()=>{
//     if(counter>0){
//         counter-- 
//      }
//      localStorage.setItem("counter",counter)
//      document.querySelector(".count").innerText = counter
// }

// let clearF = ()=>{
//     counter = 0
//     localStorage.removeItem("counter",counter)
//     document.querySelector(".count").innerText = counter
// }

// button.addEventListener("click",()=>{
//     incF()
// })
// buttondec.addEventListener("click",()=>{
//     decF()
// })
// clear.addEventListener("click",()=>{
//     clearF()
// })
// button2.addEventListener("click",()=>{
//     incF()
// })
// buttondec2.addEventListener("click",()=>{
//     decF()
// })
// clear2.addEventListener("click",()=>{
//     clearF()
// })

// ! Task 2 =======================================================================================
// ! Inputlari bos gondermek olmur / space olunan zaman trim edir 

// const registerButton = document.querySelector(".register-button")
// const data = []

// class Person {
//         constructor(name,surname,password){
//             this.name = name;
//             this.surname = surname;
//             this.password = password
//         }
//     }

// registerButton.addEventListener("click",()=>{
//     if(document.querySelector(".user-name").value.trim() !="" && document.querySelector(".user-surname").value.trim() !="" && document.querySelector(".user-password").value.trim() !=""){
        
//         const userName = document.querySelector(".user-name").value.trim()
//         const userSurname = document.querySelector(".user-surname").value.trim()
//         const userPassword = document.querySelector(".user-password").value.trim()
        
//         let flankes = new Person(userName,userSurname,userPassword)
//         data.push(flankes)
//         console.log(data)
//         document.querySelector(".user-name").value = ""
//         document.querySelector(".user-surname").value = ""
//         document.querySelector(".user-password").value = ""
        
//         localStorage.setItem("userData",JSON.stringify(data))
//     }else{
//         alert("Zehmet olmasa melumalari daxil edin")
//     }
// })





