// 1. Reverse a string without using reverse()
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("Hassaan"));


// 2. Find the missing number in [1,2,4,5]

function findMissing(arr) {
    let n = arr.length + 1;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;
    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
    }
    return expectedSum - actualSum;
}
console.log(findMissing([1, 2, 4, 5])); // 3


// 3. Check if a string is a palindrome without reverse()

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrome("MadaM")); 
console.log(isPalindrome("Hassaan"));


// 4. Find the largest and smallest number without Math.max/Math.min

function findLargestSmallest(arr) {
    let largest = arr[0];
    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return {
        largest,
        smallest
    };
}
console.log(findLargestSmallest([10, 4, 25, 7, 1]));

// 5. Find duplicates in an array

function findDuplicates(arr) {
    let seen = {};
    let duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]]) {
            duplicates.push(arr[i]);
        } else {
            seen[arr[i]] = true;
        }
    }
    return duplicates;
}
console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1])); 


// 6. Find what two arrays have in common (without filter() and includes())

function commonElements(arr1, arr2) {
    let common = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                common.push(arr1[i]);
                break;
            }
        }
    }

    return common;
}
console.log(commonElements([1, 2, 3, 4], [3, 4, 5, 6]));