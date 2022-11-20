function arrayNewoutput(str){
    var N = 0;
    var count =0;
    const arr = str.split(""); // string to array
    // console.log(arr);
    // console.log(arr.length);
    var arr1 = new Array();
    var arr2 = new Array();
    while(N < arr.length) {

        count++;
        if (arr[N] != arr[N + 1]) {
            console.log(count);
            console.log(arr[N]);
            arr1 = [arr[N] + count];
            count = 0;
        }
        arr2 = arr2.concat(arr1);
        N++;
    }
    var str2 = arr2.toString();
    console.log(str2);


}

var str = "aaabbbcccd";

// console.log(arr[0]);
// console.log(arr[5]);
// arrayNewoutput(str);

arrayNewoutput(str);



