// triangle pattern

/*

1111111111
222222222
33333333
4444444
555555
66666
7777
888
99
10

*/

let n=10;
let string=""

for (let i=0,p=1; i<n; i++,p++)
{
    for (let j=0; j<n-i; j++)
    {
      string+=p
    }
    for (let j=0; j>i; j-- )
    {
        string+=" "
    }
    string+="\n"
}
console.log(string)