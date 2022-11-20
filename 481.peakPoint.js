function peakPoint(arr){
    var N =0;
    var sum = 0;
    while(N<arr.length-2){
        N++;
        if (arr[N-1] < arr[N] && arr[N] > arr[N+1]){
            sum++;
        };
    };
    console.log(sum);
    return sum;
};

let arr = new Array(5,6,10,1,15,6,99,25,0);
peakPoint(arr);
