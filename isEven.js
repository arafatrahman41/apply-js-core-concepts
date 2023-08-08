function checkEven(number){
    const remainder = number % 2;
   if(remainder === 0){
    return true;
   }
   else{
    return false;
   }
}

const MyNumberIsEven = checkEven(1280);
console.log(MyNumberIsEven);
