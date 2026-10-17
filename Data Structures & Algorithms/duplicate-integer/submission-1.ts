class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const map = new Map<number, boolean>()
        for(const num of nums) {
            if(map.has(num))
                return true
            map.set(num, true)
        }
        return false
    }
}
