function funSort(numArray){
    numArray = numArray.sort(function (a, b) {  return a - b;  });
    console.log(numArray);
    totalLength = numArray.length;
    console.log(totalLength);
    numArray = [numArray[totalLength-1],numArray[totalLength-2],numArray[0],numArray[1]];
    console.log(numArray);

    //how to add numArray[from index 3 to index totalLength-2]


}


var arr = new Array(100,3000,2,500,70);
funSort(arr);

