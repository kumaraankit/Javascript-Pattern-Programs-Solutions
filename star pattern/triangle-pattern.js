// triangle pattern

/*

               * 
              * *
             * * *
            * * * *
           * * * * *
          * * * * * *
         * * * * * * *
        * * * * * * * *
       * * * * * * * * *
      * * * * * * * * * *
     * * * * * * * * * * *
    * * * * * * * * * * * *
   * * * * * * * * * * * * *
  * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * *
 
*/


let n=15;
let string=""

for(let row=0;row<n;row++){
    for(let col=0;col<n-row;col++){
       
            string+=" "
           }
    for(let x=0;x<=row;x++){
        string+="* "
    }

    string+="\n"
}

console.log(string)