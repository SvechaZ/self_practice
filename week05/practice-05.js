// โจทย์ฝึก map()
// รับ array ของตัวเลข แล้ว return array ที่ทุกตัวเลขยกกำลังสอง
// squareNumbers([1,2,3,4]) // [1,4,9,16]
const num = [1,2,3,4]
let squareNumbers = num.map(num => num ** 2)
console.log(squareNumbers)


// รับ array ของ string แล้ว return array ใหม่ที่ทุกคำมีความยาวของมัน
// wordLengths(["cat", "elephant", "hi"]) // [3,8,2]
 const ary = ["cat", "elephant", "hi"]

 let str = ary.map(word => word.length)

 console.log(str)


// รับ array ของ object {name, age} แล้ว return แค่ array ของชื่อทั้งหมด
// getNames([{name:"A", age:20}, {name:"B", age:25}]) // ["A","B"]

const person = [
    
    {name : "A" , age : 20},
    {name : "B" , age : 25}
]

let text = person.map(person => person.name)
console.log(text)

// เปลี่ยน array ของตัวเลขเป็น object
// เขียนฟังก์ชันที่รับ array ของตัวเลข แล้วใช้ map() สร้าง array ใหม่ที่เป็น object เก็บค่าเลขและเลขยกกำลังสอง
// input: [2, 3, 4]
// output: [ {num: 2, square: 4}, {num: 3, square: 9}, {num: 4, square: 16} ]

const number = [2,3,4]

let sqr = number.map(number => {
    return {num:number, sqr:number ** 2}
})

console.log(sqr)


