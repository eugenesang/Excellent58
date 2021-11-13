let obj={
    a:23,
    b:"name",
    c:[
        {
            brand:"samsung",
            itemName:"Galaxy Note 20 ultra",
            price:120000
        },
        {
            brand:"huawei",
            itemName:"Mate 40 pro",
            price:114000
        },
        {
            brand:"Apple",
            itemName:"Iphone 13 Pro Max",
            price:140000
        }
    ]
};
let {a,b,c}=obj;
let [samsung, huawei, apple]=c;
let regNo="G126/1280/2020";
let [courseCode, admNo, year]=regNo.split("/");

function fixArray(array, maxValue){
    let ret=[], carry=0;
    for(let i of array){
        i+=carry;
        if(i>=maxValue){
            carry=parseInt(i/maxValue);
            i%=maxValue;
        }else{
            carry=0;
        }
        ret.push(i);
    }
    if(carry>0){
        ret.push(carry);
        return fixArray(ret, maxValue);
    }
    return ret;
}
function spread(...array){
    for(let i of array){
        console.log(i);
    }
}

//arrow function
let printVal=(...array)=>{
    for (let i of array) {
        console.log(i);
    }
};
// assychronus js and IIFE
async function asFn(d, e){
    return d+e;
};
async function asFn1(a, b){
 return ()=>{
     return a+b;
 }
}
console.log(asFn1(34,23).then(d=>d))