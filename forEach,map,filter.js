// forEach,map,filter all of them take 3 parameters first is value, second is index and last is array

const arr = [1,3,4,8]

//forEach

// const result = arr.forEach((val,i)=>{
//     console.log(val,i)
//         return val+5
// })


// <<----------------------------------------------------------------------------->>

// map

// const result = arr.map((val,index,arr)=>{
//     return val+5;
// })
    

// <<----------------------------------------------------------------------------->>

// filter

const result = arr.filter((val,i,arr)=>{
    if(val>=3){
        return true;
    }
    return false;
})


console.log(result)
