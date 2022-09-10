//cross pattern
/*

*        *
 *      *
  *    *
   *  *
    **
    **
   *  *
  *    *
 *      *
*        *

*/



let n=10;
let string=""

for(let i=1;i<=n;i++){
    for(let j=1;j<=n;j++){
    if(i==j || i+j==n+1){
        string+="*"
    }
    else{
        string+=" "
    }      
           }
    string+="\n"
}
console.log(string)