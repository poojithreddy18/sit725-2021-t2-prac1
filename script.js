function alterText(){
    var sitArray = ["701","702", "703", "704", "725"]
    var number = getRandomNumberBetween(0,sitArray.length - 1)
    console.log("Index: ", number)
    document.getElementById("heading").innerHTML = sitArray[number];
}

function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}