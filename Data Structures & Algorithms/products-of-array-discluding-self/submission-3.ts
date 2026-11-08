class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    /**
     * Failed: Reason one zero ruins the whole thing. Making the value zero. Also dividing by zero makes NaN. 
     * n = length of nums
     * 1. Multiply all numbers in array O(n)
     * 2. Iterate over nums divide by current position O(n)
     * 
     * New solution: 2 pass 
     * 1. Make 2 arrays:
     *  1. Forward Pass: Each value represents the multiple of all values to the left
     *  2. Backwards Pass: Each value represemts the mulitiple of all values to the right
     * 2. Results[i] = Forward[i - 1] ?? 1 * Backward[i+1] ?? 1
     */
    productExceptSelf(nums: number[]): number[] {
        const backwardPass: number[] = new Array(nums.length)
        const forwardPass = nums.reduce((prev, curr) => {
            const prevMult =  prev[prev.length - 1] ?? 1
            void prev.push(prevMult * curr)   
            return prev  
        }, [])
        for(let i=nums.length - 1; i >= 0; i--) {
            backwardPass[i] = (backwardPass[i + 1] ?? 1) * nums[i]
        }
        const result = []
        for(let i=0;i<nums.length; i++) {
            const left = forwardPass[i - 1] ?? 1
            const right = backwardPass[i+1] ?? 1
            result.push(left * right)
        }
        return result
    }
}
