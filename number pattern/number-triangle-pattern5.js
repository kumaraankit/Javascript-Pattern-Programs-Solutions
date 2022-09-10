// triangle pattern

/*

         2 
        1 1
       2 2 2
      1 1 1 1
     2 2 2 2 2
    1 1 1 1 1 1
   2 2 2 2 2 2 2
  1 1 1 1 1 1 1 1
 2 2 2 2 2 2 2 2 2
1 1 1 1 1 1 1 1 1 1

*/

let n=10;
let string=""

for (let i=0; i<n; i++)
{
    for (let j=n-i; j>1; j--)
    {
      string+=" "
    }
    for (let j=0; j<=i; j++ )
    {
        if(i%2==0)
        string+="2 "
        else string+="1 "
    }
    string+="\n"
}
console.log(string)