/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]
 
Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

function topKFrequent(nums: number[], k: number): number[] {
  const obj: Record<number, number> = {};
  for (let num of nums) {
    obj[num] = (obj[num] || 0) + 1;
  }
  const array = Object.entries(obj)
    .sort((a, b) =>Number(b[0])  - Number(a[0]))
    .slice(0, k)
    .map(([, count]) => count);

  return array;
}
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
*/
function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  return Array.from(map.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([key, value]) => key);
}
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([-1, -1], 1));
// map = 1 => 3
//       2 => 2
//       3=> 1
