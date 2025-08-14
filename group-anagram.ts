// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  for (let word of strs) {
    const key = word.split("").sort().join(""); //key ="aet", "ant", "abt"
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key)?.push(word);
  }
  return Array.from(map.values());
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// "aet": ["eat", "tea", "ate"]
// "ant": ["tan", "nat"]
// "abt": ["bat"]
