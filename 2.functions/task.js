function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let avg;
  let sum = 0;

  for(let i = 0; i < arr.length; i++){
    if(arr[i] < min){
      min = arr[i]
    }
  }

  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i]
    }
  }
  for(let i = 0; i < arr.length; i++){
      sum += arr[i];
  }
  avg = +(sum / arr.length).toFixed(2);


  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let min = arr[0];
  let max = arr[0];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < min){
      min = arr[i]
    }
  }

  for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
      max = arr[i]
    }
  }
  return max - min;

}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for(i= 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i]

    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;  
  let countEvenElement = 0;
  
  for(i= 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      sumEvenElement += arr[i];
      countEvenElement++;
    } 
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = func(...arrOfArr[0]);
  
  for (i = 0; i < arrOfArr.length; i++){
    let result = func(...arrOfArr[i]);
    
    if (result > maxWorkerResult){
      maxWorkerResult = result;
    }
  }
   console.log(maxWorkerResult);
  return maxWorkerResult;
}
