// triangle pattern

/*

         1
        12
       123
      1234
     12345
    123456
   1234567
  12345678
 123456789

 */

let n=10;
let string=""

for(let row=0;row<n;row++){
    for(let col=0;col<n-row;col++){
       
            string+=" "
       
    }
    for(let x=0,p=1;x<row;x++,p++){
        string+=p
    }

    string+="\n"
}

console.log(string)