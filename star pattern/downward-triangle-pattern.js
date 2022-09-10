// downward triangle pattern

image.png

/*

* * * * * * * * * * * * * * * 
 * * * * * * * * * * * * * *
  * * * * * * * * * * * * *
   * * * * * * * * * * * *
    * * * * * * * * * * *
     * * * * * * * * * *
      * * * * * * * * *
       * * * * * * * *
        * * * * * * *
         * * * * * *
          * * * * *
           * * * *
            * * *
             * *
              *

*/


let n=15;
let string=""

for(let row=0;row<n;row++){
    for(let col=0;col<row;col++){
      string+=" "
            
           }

           for(let k=row;k<n;k++){
            string+="* "
           }

    string+="\n"
}

console.log(string)
