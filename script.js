//1
const arr = [ 1, 2, 3 , 4, 5 ];
console.log(arr);
const newarr = [];

for (let i = 4; i >= 0; i--) {
    newarr.push(arr[i]);
}

console.log(newarr);


//2
const strArray = ["cat","mouse","panter","chicken"];
console.log(strArray);
strArray.shift();
strArray.push("bird");
console.log(strArray);


//3
const array= [ 1, 2, 3, 4, 5];
console.log(array);

for(let i = 0; i < 5; i++){
    array.push(array[i]**2); 
}

console.log(array);


//4
const string = [1, 2, 3, 4, 5, 6, 7, 8];
const newarray= []
console.log(string);

for (let i = 0; i < 8; i++) {
    if(string[i] % 2 == 0){
        newarray.push(string[i]);
    }
}

console.log(newarray);