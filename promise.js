let newPromise=new Promise((resolve,reject)=>{
    let a=5
    let b=5

    if(a===b){
        resolve('Promise are fulfilled')
    }
    else{
        reject('Promise are not fulfilled')
    }
})

// console.log(newPromise)

// settlement of Promise
// .then --> resolve
// .catch --> reject

newPromise
    .then((data)=>{
        console.log('resolved data:', data)
    })
    .catch((error)=>{         // kewal user side se error ko pakad paata hai
        console.log('rejected data:',error)
    })
    .finally(()=>{
        console.log('Promise is done or not')
    })