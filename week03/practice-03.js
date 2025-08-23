function getFreqOfWords(sentence) {
    if( sentence === undefined || sentence === null){
        return undefined
    }
    let words = sentence.toLowerCase().split(" ");
   
    let result = {}
     for ( let i = 0 ; i < words.length; i++ ){
        let w = words[i]
   
            if(result[w]){
                result[w]++
            }
            else {
                result[w] = 1
            }
        
     }
     
     return result
}

console.log(getFreqOfWords('Today is present and present is your gift'))
console.log(getFreqOfWords('Do you best just do it'))
console.log(getFreqOfWords(null))
console.log(getFreqOfWords(undefined))
