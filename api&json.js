// const user={
//     name:"Abhijeet",
//     age: 20
// }

// const jsonString='{"name":"Abhijeet", "age":20}'
// const data=JSON.parse(jsonString)         //string -> obj
// console.log(data)
// const text=JSON.stringify(user)           //obj -> string
// console.log(text)

const url="https:dummyjson.com/products/1"
// fetch("https://dummyjson.com/products/1")
//     .then((response)=>{
//         if(!response.ok){
//             throw new Error("DATA NOT FOUND")
//         }
//         return response.json()
//     })
//     .then((data)=>{
//         console.log(data.title)
//     })
//     .catch((error)=>{
//         console.error("Error:",error)
//     })

// <<---------------------------------------------------------------------------->>

// const url_2="https://jsonplaceholder.typicode.com/users/1"
// fetch(url_2)
//     .then((response)=>{
//         return response.json()
//     })
//         .then(data=>{
//             console.log(data.name)              //top-level field
//             console.log(data.address.city)      //nested field
//             console.log(data.company.name)      //nested field
//         })
//         .catch((error)=>{
//             console.log("ERROR",error)
//         })

// <<---------------------------------------------------------------------------->>

// function getUser(username){
//     const url3=`https://api.github.com/users/${username}`
//     fetch(url3)
//         .then((response)=>{
//             if (!response.ok){
//                 throw new Error(`User not found: ${response.status}`)
//             }
//             return response.json()
//         })
//         .then((user)=>{
//             console.log(`Name: ${user.name}`)
//             console.log(`Bio: ${user.bio || "No bio available"}`)
//             console.log(`Public Repos: ${user.public_repos}`)
//         })
// }

// getUser("abhijeet-s24")

// <<---------------------------------------------------------------------------->>

// //async await

async function data_x(api) {
    try{
        let response=await fetch(api)
        if(!response.ok){
            throw new Error("data not found")
        }
        let data=await response.json()
        console.log(data.title)
    }catch(error){
        console.log(error)
    }
}
data_x(url)

// <<---------------------------------------------------------------------------->>

// const url="https:dummyjson.com/products/1"
// fetch(url)
//     .then((response)=>{
//         if(!response.ok){
//             throw new Error("DATA NOT FOUND")
//         }
//         return response.json()
//     })
//     .then((data)=>{
//         console.log(data.title)
//     })
//     .catch((error)=>{
//         console.log("error",error)
//     })