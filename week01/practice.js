
let x = 4

if (typeof x !== 'number' || !Number.isFinite(x) || !Number.isInteger(x)){
    console.log("Put a number only")
}else if (x <= 1) {
    console.log("It must be a positive integer greater than 1 ")
}else{
    let IsPrime = true
    for(let i = 2 ; i < x ; i++){
        if(x % i === 0){
            IsPrime = false
            console.log("NO")
             break
        }
        
    }
    if(IsPrime)
     console.log("YES")
       
}

