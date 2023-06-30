function sumOfNumbers(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        sum += arr[i];
      }
    }
  
    return sum;
  }
  
  // Test case 1
  const array1 = [2, "11", 3, "a2", false, 5, 7, 1];
  console.log("Original array:", array1.join(","));
  console.log("Sum all numbers of the said array:", sumOfNumbers(array1));
  
  // Test case 2
  const array2 = [2, 3, 0, 5, 7, 8, true, false];
  console.log("Original array:", array2.join(","));
  console.log("Sum all numbers of the said array:", sumOfNumbers(array2));
  