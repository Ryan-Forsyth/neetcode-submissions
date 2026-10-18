class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        //Runtime: O(nlog(n))
        const sortedAnagramCache: Map<string,string[]> = new Map<string, string[]>()
        for(let str of strs) {
            const sortedStr = [...str].sort().join("")
            const currentList = sortedAnagramCache.get(sortedStr) ?? []
            sortedAnagramCache.set(sortedStr,[...currentList, str])
        }
        return [...sortedAnagramCache.values()]
    }
}
