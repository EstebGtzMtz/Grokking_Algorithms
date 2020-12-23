const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// O(n) = log2

const binarySearch = (sortedArray, item) => {
    let low = 0,
        hight = sortedArray.length - 1;
    while (low <= hight) {
        let mid = Math.floor((low + hight) / 2),
            guess = sortedArray[mid];
        if (guess == item) {
            return console.log(`your number ${item} is on index ${mid}`)
        }
        if (guess > item) {
            hight = mid - 1;
        } else {
            low = mid + 1
        }
    }
    console.log('your numbers does not exist')
}

binarySearch(array, 9) 
