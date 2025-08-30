
//เขียนฟังก์ชันรับ array ของตัวเลข แล้ว return array ใหม่ที่มีแต่เลขคู่
//output :evenNumbers([1,2,3,4,5]) // [2,4]

let array =  [1,2,3,4,5]

let evenNumbers = array.reduce((x, y) => {
    if (y % 2 === 0) {
        x.push(y)
    }
    return (x)
} , [])

console.log(evenNumbers)

//หาผลรวมของเลขทุกตัวใน array โดยใช้ .reduce()

let a = [10,20,30]

let sum = a.reduce((num1 ,num2) => num1 + num2 )

console.log(sum)

// //หาmaxโดยใช้ .reduce()

let x = [10,20,30,40,50,90]

let MaxNum = x.reduce((acc , curr) =>{
    if (acc > curr){
         return (acc)
    }else
        return (curr)
},x[0])

console.log(MaxNum)