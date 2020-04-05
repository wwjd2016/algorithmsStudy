/*
 * 归并排序
 * @Author: yangzhong 
 * @Date: 2018-02-24 11:18:58 
 * @Last Modified by: yangzhong
 * @Last Modified time: 2018-02-24 14:13:06
 */

const mergeSort = (array) => {
  return mergeRec(array);
}

const mergeRec = (array) => {
  if(array.length === 1) {
    return array
  }
  const arrLength = array.length;
  const mid = Math.floor(arrLength/2);
  const leftArr = array.slice(0, mid);
  const rightArr = array.slice(mid, arrLength);
  return divideConquer(mergeRec(leftArr), mergeRec(rightArr));
}

//分治算法，合并两个有序的数组
const divideConquer = (leftArr, rightArr) => {
  let result = [], 
    left = 0, 
    right = 0,
    leftArrLength = leftArr.length,
    rightArrLength = rightArr.length
  while(left < leftArrLength && right < rightArrLength) {
    if(leftArr[left] < rightArr[right]) {
      result.push(leftArr[left])
      left ++
    } else {
      result.push(rightArr[right])
      right ++
    }
  }
  while(left < leftArrLength) {
    result.push(leftArr[left])
    left ++
  }
  while(right < rightArrLength) {
    result.push(rightArr[right])
    right ++
  }
  return result;
}
let a = [];
for (let i = 500;i>0;i--) {
  a.push(i);
}
console.time('merge')
mergeSort(a)
console.timeEnd('merge')

console.time('sort')
a.sort((a, b) => a - b)
console.timeEnd('sort')
