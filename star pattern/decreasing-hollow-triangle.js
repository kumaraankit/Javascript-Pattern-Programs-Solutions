//Hollow decreasing triangle
/*
* * * * * * * * * * 
*               *
*             *
*           *
*         *
*       *
*     *
*   *
* *
*
*/

let n=10;
string=""

for(let i=1;i<=n;i++){
    for(let j=i;j<=n;j++){
        if(i==1 || j==n || j==i){
            string+="* "
        }
        else{

            string+="  "
        }
    }
    string+="\n"
}
console.log(string)