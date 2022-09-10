
// triangle pattern

/*

5
54
543
5432
54321

*/


let n=5;
string=""

for(let i=0;i<n;i++){
    let p=5
    for(let j=0;j<=i;j++){
        string+=p--
    }
    string+="\n"
}

console.log(string)