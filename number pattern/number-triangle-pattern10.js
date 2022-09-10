// triangle pattern

/*

9
87
765
6543
54321

*/


let n=5;
string=""

for(let i=0,x=9;i<n;i++,x--){
    let p=x
    for(let j=0;j<=i;j++){
        string+=p--
    }
    string+="\n"
}

console.log(string)