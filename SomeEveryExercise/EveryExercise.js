function hasOddNumber(arr) {
    return arr.some(val => val % 2 !== 0);
  }
  
  console.log(hasOddNumber([1, 2, 2, 2, 2, 2, 4])); // true
  console.log(hasOddNumber([2, 2, 2, 2, 2, 4]));    // false
  
  function hasAZero(num) {
    return num.toString().includes('0');
  }
  
  console.log(hasAZero(33321232131012)); // true
  console.log(hasAZero(1212121));        // false
  
  function hasOnlyOddNumbers(arr) {
    return arr.every(val => val % 2 !== 0);
  }
  
  console.log(hasOnlyOddNumbers([1, 3, 5, 7]));     // true
  console.log(hasOnlyOddNumbers([1, 2, 3, 5, 7]));  // false
  
  function hasNoDuplicates(arr) {
    return new Set(arr).size === arr.length;
  }
  
  console.log(hasNoDuplicates([1, 2, 3, 1])); // false
  console.log(hasNoDuplicates([1, 2, 3]));    // true
  
  function hasCertainKey(arr, key) {
    return arr.every(obj => key in obj);
  }
  
  let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ];
  
  console.log(hasCertainKey(arr, 'first'));       // true
  console.log(hasCertainKey(arr, 'isCatOwner'));  // false
  
  function hasCertainValue(arr, key, searchValue) {
    return arr.every(obj => obj[key] === searchValue);
  }
  
  console.log(hasCertainValue(arr, 'title', 'Instructor')); // true
  console.log(hasCertainValue(arr, 'first', 'Elie'));       // false
  