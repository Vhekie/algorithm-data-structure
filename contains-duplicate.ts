/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
Input: nums = [1,2,3,1]

Output: true

Explanation:

The element 1 occurs at the indices 0 and 3.

Example 2:

Input: nums = [1,2,3,4]

Output: false

Explanation:

All elements are distinct.

Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]

Output: true

 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

function containsDuplicate(nums: number[]): boolean {
  const elements = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    if (elements.has(nums[i])) {
      return true;
    } else {
      elements.add(nums[i]);
    }
  }
  return false;
}
// function containsDuplicate(nums: number[]): boolean {
//   const uniqueEl = new Set<number>([...nums]);
//   return uniqueEl.size !== nums.length;
// }
