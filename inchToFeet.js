// const myInches = 12;
// const myFeet = myInches / 12;
// console.log(myFeet);

// const dadaInches = 80;
// const dadaFeet = dadaInches / 12;
// console.log('dada feet', dadaFeet);

// const dadiInches = 65;
// const dadiFeet = dadiInches / 12;
// console.log(dadiFeet);

function inchesToFeet(inches){
    const feet = inches / 12;
    return feet;
}

const dadaInches = 144;
const dadaFeet = inchesToFeet(dadaInches);
console.log(dadaFeet);

const nanaInches = 168;
const nanaFeet = inchesToFeet(nanaInches);
console.log('Nana Feet', nanaFeet);