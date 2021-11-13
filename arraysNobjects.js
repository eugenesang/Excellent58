let arr=[1,23,434,545,56];
arr.length;
//appending elemens to the beginning of the array
arr.unshift(23,45,65);

//removing the first element
arr.shift()
//removing the last element
arr.pop()
//appending to the end of the array
arr.push(77);


/* strings 
string are set of characters
*/
let str="Holly City Law Courts";
// for(let c of str){
//     console.log(c , "->", c.charCodeAt(0));
// };
//string split, params= separtator for this case it is a space
str.split(' ');
//array and strings joining
let arr1=[3,4,5], arr2=[6,7,8], arr3=[9,7,8];
let str1=["Peter",'James','smuggled weed'];
let str2="Williamson Drury";
let str4="Priscah";
let str5=str1.join(" & ");
//console.log(str5);
let str3=`
dear ${str1[0]} ,
this is to inform you that an oficer by the name ${str1[1]}
reported that you ${str1[2]}, and therefore you are required together with ${str4},
to apear in court ${str},
thanks with regards ${str2}
`;
//console.log(str3);

//objects
let obj={
    a:23,
    b:"Dev Oops",
    'story line':"nothing much ",
    history:[
        {
            date: new Date(),
            about: "this item was created"
        }, 
        {
            date:new Date(),
            about:"this item was accessed"
        }
    ]
};

//accesing elements
//using dot operator
obj.a
//using square brackets
obj['story line']
//looping through objects 
for (let element in obj){
      //element is the key name, 
     //to access the value ascociated with the key name, we use square bracket oprators
   //  console.log(element, " : " ,obj[element]) 
}
//desctructuring
//array -> we are using the array arr
//we use square brackets
let [one, two, three]=arr;

//console.log(one, two, three)
//objects -> using obj object
//we use curly braces

let {history, b} =obj;
let [objCreated, objAccessed]=history;
console.log(objCreated)