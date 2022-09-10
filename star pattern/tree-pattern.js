// tree-pattern

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
        string+="* "
    }
    string+="\n"
}
for (let i=0; i<n; i++)
{
    for (let j=n-i; j>1; j--)
    {
      string+=" "
    }
    for (let j=0; j<=i; j++ )
    {
        string+="* "
    }
    string+="\n"
}
console.log(string)