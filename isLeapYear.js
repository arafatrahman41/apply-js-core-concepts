// function isLeapYear (year){
//     const remainder = year % 4;
//     if(remainder === 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
function isLeapYear (year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
        return false;
}

const isMyYearLeapYear = isLeapYear(1933);
console.log('My Year',  isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear(1960);
console.log('Her Year', isHerYearLeapYear);