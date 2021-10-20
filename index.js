// Add your functions here

function map(sourceArray, callback){
    const a = [];
    for (let i=0; i<sourceArray.length; i++){
        // const number = sourceArray[i]
        a.push(callback(sourceArray[i]));

    }
    return a;
    // return map(sourceArray, function(a){ return a * -1 })
}

function reduce(sourceArray, callback, startingPoint=0){
    let total
    if (startingPoint){
        total = startingPoint;
        for (let i=0; i<sourceArray.length; i++){
            // const number = sourceArray[i]
            total = callback(sourceArray[i], total);
        }
        return total;
    }
    
    else {
        total = sourceArray[0];
        for (let i=1; i<sourceArray.length; i++){
            // const number = sourceArray[i]
            total = callback(sourceArray[i], total);
        }
        return total;
    }
}
    
  