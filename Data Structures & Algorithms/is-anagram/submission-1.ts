class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length != t.length)
            return false
        const countCache = new Map<string,number>()
        for(let i = 0; i <s.length; i++) {
            const sChar = s.charAt(i)
            const tChar = t.charAt(i)
            countCache.set(sChar, (countCache.get(sChar) ?? 0) + 1)
            countCache.set(tChar,(countCache.get(tChar) ?? 0) - 1)
        }
        return ![...countCache.values()].some((x) => x != 0)
        }
}
