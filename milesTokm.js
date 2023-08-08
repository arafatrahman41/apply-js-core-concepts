function mileToKilometer(miles){
    const kilometer =miles*1.609;
    return kilometer;
}

const roadMiles = 8;
const roadKm = mileToKilometer(roadMiles);
console.log(roadKm);