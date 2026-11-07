class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    /*
    * Solution: 
        - Count frequency using a hashmap O(n)
        - Sort <Number, Count> tuple by count O(nlogn)
        - Return the top K answers O(n) assuming K < Unique(n) 
    */
    topKFrequent(nums: number[], k: number): number[] {
        const countMap = new Map<number,number>()
        for(let num of nums) {
            const value = countMap.get(num) ?? 0
            countMap.set(num, value + 1)
        }
        const countArray = Array.from(countMap)
        return countArray.sort((a, b) => b[1] - a[1]).map(a => a[0]).slice(0,k)
    }

}
