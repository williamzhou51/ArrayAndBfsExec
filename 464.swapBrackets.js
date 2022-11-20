function swapCount(str)
{

    // Keep track of '['
    let pos = [];
    // console.log(pos);
    for(let i = 0; i < str.length; ++i)
        if (str[i] == '[')
            pos.push(i);
            console.log(pos);

    // To count number of encountered '['
    let count = 0;

    // To track position of next '[' in pos
    let p = 0;

    // To store result
    let sum = 0;

    let S = str.split('');
    console.log(S);

    for(let i = 0; i < str.length; ++i)
    {


        if (S[i] == '[')
        {
            ++count;
            ++p;
        }
        else if (S[i] == ']')
            --count;

        if (count < 0)
        {


            sum = sum + (pos[p] - i);
            let temp = S[i];
            S[i] = S[pos[p]];
            S[pos[p]] = temp;
            ++p;

            // Reset count to 1
            count = 1;
        }
    }
    console.log(S);
    console.log(sum);
    return sum;
}


let str = "[]][][";
swapCount(str);

str = "[[][]]";
swapCount(str);

str = "]]][[[";
swapCount(str);