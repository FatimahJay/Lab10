function sum(a,b){
    return a+b;
}

module.exports.sum = sum;


function sub(a,b){
    return a-b;
}

module.exports.sub = sub;

function mult(a,b){
    return a*b;
}

module.exports.mult = mult;

function div(a,b){
    if(b != 0){
    return a/b;
    }
}

module.exports.div = div;



