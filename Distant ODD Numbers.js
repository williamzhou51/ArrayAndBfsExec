function segregateEvenOdd(arr)
{
    /* Initialize left and right indexes */
    var left = 0, right = arr.length - 1;
    while (left < right)
    {
        /* Increment left index while
           we see 0 at left */
        while (arr[left]%2 == 0 && left < right)
            left++;

        /* Decrement right index while we see
           1 at right */
        while (arr[right]%2 == 1 && left < right)
            right--;

        if (left < right)
        {
            /* Swap arr[left] and arr[right]*/
            var temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
}

segregateEvenOdd(2,4,7,3,5,8,10)
