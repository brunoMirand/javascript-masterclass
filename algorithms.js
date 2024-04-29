// Insertion sort
const numbers = [2, 6, 9, 10, 63, 7, 1, 4, 3, 8, 5, 2, 2,2,2, 9, 9];
for (let i = 1; i < numbers.length; i++) {
  let current = numbers[i];
  let previusIndex = i - 1;
  // console.log('indice anterior', previusIndex);
  // console.log(numbers[previusIndex]);
  // console.log('indice atual', i);
  // console.log(current);
  // console.error(numbers[previusIndex] > current);

  while (numbers[previusIndex] > current) {
    // console.warn('to no while');
    numbers[previusIndex + 1] = numbers[previusIndex];
    previusIndex--;
  }

  numbers[previusIndex + 1] = current;
}

// console.log(numbers);


// Quick Sort
// [2,6,9,10,63,7,1,<- |Pivot| -> 4,3,8,5,2,-1,6,9,9];
function quickSort(numbers) {
  if (numbers.length <= 1) {
    return numbers;
  }

  const pivotIndex = Math.floor(numbers.length / 2);
  const pivot = numbers[pivotIndex];
  const leftValue = [];
  const rightValue = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < pivot) {
      leftValue.push(numbers[i]);
    } else if (numbers[i] > pivot) {
      rightValue.push(numbers[i]);
    }
  }
  return [...quickSort(leftValue), pivot, ...quickSort(rightValue)];s
}

//console.log(quickSort(numbers));

// Soma dos elementos
// console.log(numbers.reduce((acc, curr) => acc + curr, 0));

// Buscando maior valor
// console.log(numbers.reduce((acc, curr) => acc > curr ? acc : curr, 0));

// Buscando menor valor
// console.log(numbers.reduce((acc, curr) => acc < curr ? acc : curr, numbers[0]));

let resultFor = 0;
let resultForOf = 0;
let resultForEach = 0;
let resultForIn = 0;

for (let i = 0; i < numbers.length; i++) {
  resultFor += numbers[i];
}

for (n of numbers) {
  resultForOf += n;
}

numbers.forEach((number) => resultForEach += number);

for (n in numbers) {
  resultForIn += numbers[n];
}

// console.log(resultFor);
// console.log(resultForOf);
// console.log(resultForEach);
// console.log(resultForIn);

const numbersList = [[1,2,3], [4,5,6], [7,8,9]];
const sumLists = numbersList.map(number => number.reduce((acc, curr) => acc + curr, 0));
// console.log(sumLists);

const maxSumList = sumLists.reduce((acc, curr) => acc + curr, 0);
// console.log(maxSumList);

let sums = [];
for (let i = 0; i < numbersList.length; i++) {
  let sum = 0;
  for (let j = 0; j < numbersList[i].length; j++) {
    sum += numbersList[i][j];
  }
  sums.push(sum);
}

// console.log(sums);


let sumsTotal = 0;
for (let sum of sums) {
  sumsTotal += sum;
}

// console.log(sumsTotal);

// ----->
function getMax(numbers) {
  let max = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}


const maxElements = numbersList.map(numbers => getMax(numbers));

console.log(maxElements);

// ------>
const numbersList2 = [1,2,3,4,5,6,7,8,9];

let max = 0;
for (let i = 0; i < numbersList2.length; i++) {
  if (numbersList2[i] > max) {
    max = numbersList2[i];
  }
}

// console.log(max);