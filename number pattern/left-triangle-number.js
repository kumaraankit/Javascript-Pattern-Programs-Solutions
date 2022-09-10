// left triangle number

/*

1 
12
123
1234
12345
123456
1234567
12345678
123456789
12345678910

*/


let n=10;
let string=""

for(let row=0;row<n;row++){
    for(let col=0;col<=row;col++){
        string+=col+1
    }

    string+=" \n"
}

console.log(string)