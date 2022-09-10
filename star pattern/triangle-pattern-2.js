// triangle pattern

/*

   *
         ***
        *****
       *******
      *********
     ***********
    *************
   ***************
  *****************
 *******************

 */


let n=10;
let string=""

for(let row=0;row<n;row++){
    for(let col=0;col<n-row;col++){
      string+=" "
            
           }

           for(let k=0;k<2*row+1;k++){
            string+="*"
           }

    string+="\n"
}

console.log(string)