// left triangle pattern

/*

 *
 * *
 * * *
 * * * *
 * * * * *
 * * * * * *
 * * * * * * *
 * * * * * * * *
 * * * * * * * * *
 * * * * * * * * * *
 * * * * * * * * * * *
 * * * * * * * * * * * *
 * * * * * * * * * * * * *
 * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * *
 
*/


let n=15;
let string=""

for(let row=0;row<n;row++){
    for(let col=0;col<=row;col++){
        string+=" *"
    }
    string+="\n"
}
console.log(string)