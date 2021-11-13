# Introduction to Javascript Arrays and Objects
Now that we have learned about primitives in Javascript its time to talk about objects and arrays
> It's worth Notting that we will get strings on the way
>
## Arrays
*It is a collection of different data, like a store of variables*
We initialize an array using

``` 
let arr=[] ;
let arr1=new Array() ;
```
We could as well initialize it with data and remember to separate values with  comas (,)
```
let arr=[2,3,5,9];
let arr1=[
        'book', 
        'pen', 
        'pencil', 
        'ink', 
        'dictionary' 
    ] ;
```
An array is an object in itself, so there are methods attached to them
>pop()
>
>shift()
>
>unshift()
>
>push()
>
>length
>
>join()
>
A *String* is also a special array that have all these methods except a few and with addition of a few like
>split()
>
>concat()
>
We call each piece of data in an array an ` element `

The position of an element in an array is called ` index ` of an element

The index of the first element is 0

The index of the last element in an array is the ` length ` of the array - 1

` length ` of an array is the population of elements in an array which can be accessed using the ` .length ` method

In Javascript, you are free to keep all sorts of datatypes in your array 

It is a good practice to keep data of similar structures in an array for the sake of optimisation
 
## Objects
*They are a set of key value pairs *

They are initialized as 
```
let obj={};
let obj1=new Object();
```
It is a good practice to initialize it using the first style

Data can be added to it using the dot operator
```
obj.firstValue=20;
obj.secondValue="this is an object";
```

Keep in mind that this could also be initialized as
```
let obj={
    firstValue:20,
    secondValue:"this is an object"
}
```
We can access a specific element in an object using the dot operator with the valid name
` console.log(obj.firstValue) ` for instance will log to the console the value 20

Sometimes the dot operator might let us down so we get the luxury of using the square brackets 
*instructions*
> the key of the element in question should be defined within the object in question 
>
> the key should be put inside quotes, I.e it should be in ` String ` format.
>
*example*
```
obj["background story"]="born and grew up somewhere in Microsoft supercomputers";
```
If you want to access the ` background story ` of the object ` obj `, you will write something like ` obj["background story"]`

## Iterating through Objects and Arrays 
### Arrays
Traditionally, we iterate though arrays using ` for ` loops
For example,
```
for (let i=0; i<arr.length; i++){
// arr[i] is the current element at any point 
}
```
*pros*
>you get the index of the current element
>
>you can start from the top or the bottom of the array 
>
*cons*
>You'll have to assign the current value to another variable if the process performed needs it called several times lest it'll be clunky and verbose 
>
The solution to this is the idea of ` for of ` loop which looks like
```
for (let I of arr){
// I is the current element at any point in the iteration
}
```

### Objects
In Javascript it is possible to iterate through objects as well

In this case we use the ` for in ` loop for example
``` 
for(let I in obj){
// I is the key of the current element in the object
// to get the value we use the square brackets and the key
// therefore obj[I] is the value of the current element
}
```
