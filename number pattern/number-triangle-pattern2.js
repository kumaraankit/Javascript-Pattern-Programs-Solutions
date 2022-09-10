// triangle pattern

/*

1
22
333
4444
55555
666666
7777777
88888888
999999999

*/


let n=9;
let string=""

for(let row=0,p=1;row<n;row++,p++){
    for(let col=0;col<=row;col++){
        string+=p
    }
    string+="\n"
}
console.log(string)


//Another way to do the same problem

// for(let row=1;row<=n;row++){
//     for(let col=1;col<=row;col++){
//         string+=row
//     }
//     string+="\n"
// }
// console.log(string)