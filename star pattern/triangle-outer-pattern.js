// triangle outer pattern

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
 * * * * * * * * *
 * * * * * * * *
 * * * * * * *
 * * * * * *
 * * * * *
 * * * *
 * * *
 * *
 *
 
*/

let n=10;
let string=""

for(let row=0;row<n;row++){
    for(let col=0;col<row;col++){
        string+=" *"
    }

    string+="\n"
}
for(let row=0;row<n;row++){
    for(let col=0;col<n-row;col++){
        string+=" *"
    }

    string+="\n"
}

console.log(string)