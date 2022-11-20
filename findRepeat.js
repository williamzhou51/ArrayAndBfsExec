function findRepeat(arr){
    for (let i = 0; i <arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]){
                console.log(arr[i]);
                return arr[i];
            }
        }
    }
}

findRepeat(1,2,3,4,3,5);

// why can not print out!

// 1，2，3，4，3，5

