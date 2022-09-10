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

*/

let n=8;
string=""

for(let i=0;i<n;i++){
    let p=1
    for(let j=0;j<=i;j++){
        string+=p++
    }
    string+="\n"
}

console.log(string)