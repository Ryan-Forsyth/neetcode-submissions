class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const targetsWithIndex: Map<number,number> = new Map<number,number>
        for(let i=0; i < nums.length; i++) {
            targetsWithIndex.set(nums[i], i)
        }
        for(let i=0; i < nums.length; i++) {
            const goal: number = target - nums[i]
            const goalIndex = targetsWithIndex.get(goal)
            if(goalIndex && goalIndex != i) {
                return [i,goalIndex]
            }
        } 
        return []
    }
}
