function directedGraph(arr1, arr2) {

    for(let i=0; i<arr1.length; i++){
        if(arr1[i] !== arr2[i]) {
            for (let j = 0; j < arr2.length; j++) {
                if(arr1[i] === arr2[j]){
                    if(arr1[j] === arr2[i]){
                        return(console.log("A=" + "[" + arr1 + "]" + "B=" + "[" + arr2 + "]" + "is a cycle of length" + arr1.length));

                    }
                }
            }
        }else {
            return(console.log("A=" + "[" + arr1 + "]" + "B=" + "[" + arr2 + "]" + "is a cycle of length" + arr1.length));

        }
    }

    console.log("A=" + "[" + arr1 + "]" + "B=" + "[" + arr2 + "]" + "is NOT a cycle of length" + arr1.length);
}

let arr1 = new Array(1,2,3,4,5,6,7,8);
let arr2 = new Array(7,3,4,5,6,8,1,2);
directedGraph(arr1, arr2);