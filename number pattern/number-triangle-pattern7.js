// triangle pattern

/*

        1
       222
      33333
     4444444
    555555555
   66666666666
  7777777777777
 888888888888888

 */

let n=8;
let string=""

for(let row=0,p=1;row<n;row++,p++){
    for(let col=0;col<n-row;col++){
      string+=" "
            
           }

           for(let k=0;k<2*row+1;k++){
            string+=p
           }

    string+="\n"
}

console.log(string)