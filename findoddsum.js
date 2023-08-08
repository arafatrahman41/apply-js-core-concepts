function getSumOfAnArray(numbers){
    let sum = 0;
   for(let i = 0; i < numbers.length; i++){
    const index = i;
    const element = numbers[index];
    sum = sum + element;
    // console.log(index, element, sum);
   }
   return sum;
}

function getOddNumbersofAnArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
     const index = i;
     const element = numbers[index];
     if(element % 2 !== 0){
           console.log(index, element);   
           oddNumbers.push(element);
     }
    }
    return oddNumbers;
}

const myNumbers = [12, 55, 45, 91, 82, 63, 61]
const oddNumbers = getOddNumbersofAnArray(myNumbers);
console.log(oddNumbers);
const oddNumbersum = getSumOfAnArray(oddNumbers);
console.log('odd number sum:', oddNumbersum);