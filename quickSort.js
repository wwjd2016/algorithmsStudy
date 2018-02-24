/*
 * 快排
 * @Author: yangzhong 
 * @Date: 2018-02-24 14:10:23 
 * @Last Modified by: yangzhong
 * @Last Modified time: 2018-02-24 14:14:24
 */

const quickSort = function(arr) {
  if (arr.length <= 1) { return arr; }
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr.splice(pivotIndex, 1)[0];
    let left = [];
    let right = [];
    for (var i = 0; i < arr.length; i++){
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quickSort(left).concat([pivot], quickSort(right));
};

let a = [];
for (let i = 500;i>0;i--) {
  a.push(i);
}
console.time('quick')
quickSort(a)
console.timeEnd('quick')

console.time('sort')
a.sort((a, b) => a - b)
console.timeEnd('sort')