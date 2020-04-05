/*
* 动态规划-求最大子段和
*/

const dpMS = (arr) => {
	let sum = arr[0];
	let ans = arr[0];
	for (let i of arr) {
		sum = Math.max(i, sum + i);
		ans = Math.max(ans, sum);
	}
	return ans;
}
const testArr = [1, 2, -4, 5, 2, -2]
const res = dpMS(testArr)
console.log(res)
