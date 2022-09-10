// number triangle pattern

/*

 1
 1 1
 1 1 1
 1 1 1 1
 1 1 1 1 1
 1 1 1 1 1 1
 1 1 1 1 1 1 1
 1 1 1 1 1 1 1 1
 1 1 1 1 1 1 1 1 1
 1 1 1 1 1 1 1 1 1 1
 1 1 1 1 1 1 1 1 1 1 1
 1 1 1 1 1 1 1 1 1 1 1 1
 1 1 1 1 1 1 1 1 1 1 1 1 1
 1 1 1 1 1 1 1 1 1 1 1 1 1 1
 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1

 */

let n=15;
let string=""

for(let row=0;row<n;row++){
    for(let col=0;col<=row;col++){
        string+=" 1"
    }
    string+="\n"
}
console.log(string)