//1.variable
var myName = 'Khan';


//math operation: +, -, *, /
//shorthand: +=, --, *=, /=
//++, --

//2.Array
var friends = ['abul', 'babul', 'kabul', 'cabul'];
console.log(friends);
//index      =    0,      1,       2,       3 
var thirdFriend =  friends[2];
friends[3] = 'dambool';
console.log(friends);

//3.conditionals
// <, >, <=, >=, ==, ===, !=, !==

if (friends.length < 2){
    console.log('tui balo');
}
else{
    'nahole balo na'
}

// 4. loop

var number = 0;
while(number <= 6){
    console.log(number);
    number++;
}

for(var i = 0; i <= 10; i++){
    console.log()
}

// 5. function
function isMoonUp(time){
    if(time < 8){
        return true;
    }
}

isMoonUp(7);

// 6. Object

var jantus = {
    height: 5.3, 
    romanticism: 'heavy'
}