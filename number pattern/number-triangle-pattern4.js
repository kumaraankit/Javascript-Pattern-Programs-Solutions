// triangle pattern

/*

      1
     123
    12345
   1234567
  123456789
 1234567891011

 */

let n=6;
let string=""

for(let row=0;row<n;row++){
    for(let col=0;col<n-row;col++){
      string+=" "
            
           }

           for(let k=0,p=1;k<2*row+1;k++,p++){
            string+=p
           }

    string+="\n"
}

console.log(string)