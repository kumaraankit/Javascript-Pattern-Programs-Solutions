//Hollow Increasing triangle

/*

* 
* *
*   *
*     *
*       *
*         *
*           *
*             *
*               *
*                 *
*                   *
*                     *
*                       *
*                         *
* * * * * * * * * * * * * * *

*/

let n=15;
string=""

for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        if(i==n || j==1 || j==i){
            string+="* "
        }
        else{

            string+="  "
        }
    }
    string+="\n"
}
console.log(string)