// 1. feladat Leonardo numbers - Leonardo számok
L = (n, L0, L1, add) => {
    // return what you are told....
    let result = [L0, L1];
    for(let i = 2; i < n; i++) {
        let newNumber = L0 + L1 + add;
        L0 = L1;
        L1 = newNumber;
        result.push(newNumber);
    }

    return result;
}


console.log(L(5, 1, 1, 1), [1, 1, 3, 5, 9]);
console.log(L(5, 0, 0, 2), [0, 0, 2, 4, 8]);
console.log(L(5, 0, 0, 0), [0, 0, 0, 0, 0]);
console.log(L(10, 0, 1, 4), [0, 1, 5, 10, 19, 33, 56, 93, 153, 250]);



// 2. feladat Every nth array element - Minden n-edik tömbelem
function every(arr, interval, start) {
    let result = [];
    if(start == undefined || start == null || start == NaN)
        start = 0;
    if(interval == undefined || interval == null || interval == NaN)
    start = 0;
    
    for(let i = start; i < arr.length; i += interval)
        result.push(arr[i]);
    
    return result;
}

console.log(every([0, 1, 2, 3, 4]), [0, 1, 2, 3, 4]);
console.log(every([0, 1, 2, 3, 4], 1), [0, 1, 2, 3, 4]);
console.log(every([0, 1, 2, 3, 4], 2), [0, 2, 4]);
console.log(every([0, 1, 2, 3, 4], 3), [0, 3]);
console.log(every([0, 1, 2, 3, 4], 3, 1), [1, 4]);



// 3. feladat Odd Ones Out! - Páratlanok!
function oddOnesOut(nums) {
    // kód helye
    let numbers = [];
    for(let i = 0; i < nums.length; i++) {
        let n = nums[i];
        if(!contains(numbers, n))
            numbers.push([n, 1]);
        else {
            for(let j = 0; j < numbers.length; j++) {
                if(numbers[j[0]] == n)
                    numbers[j[1]]++;
            }
        }
    }
    let result = [];
    for(let i = 0; i < numbers.length; i++) {
        if(numbers[i[1]] % 2 === 0)
            result.push(numbers[i[0]]);
    }

    return result;
}

function contains(arr, num) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === num)
            return true;
    }
    return false;
}

console.log(oddOnesOut([1, 2, 3, 1, 3, 3]), [1, 1]);
console.log(oddOnesOut([75, 68, 75, 47, 68]), [75, 68, 75, 68]);
console.log(oddOnesOut([42, 72, 32, 4, 94, 82, 67, 67]), [67, 67]);
console.log(oddOnesOut([100, 100, 5, 5, 100, 50, 68, 50, 68, 50, 68, 5, 100]), [100, 100, 100, 100]);
console.log(oddOnesOut([82, 86, 71, 58, 44, 79, 50, 44, 79, 67, 82, 82, 55, 50]), [44, 79, 50, 44, 79, 50]);