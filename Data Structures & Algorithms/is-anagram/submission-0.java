class Solution {
    public boolean isAnagram(String s, String t) {
       Map<Character, Integer> sMap = new HashMap<Character, Integer>();
       if(s.length() != t.length())
            return false;
       for(char sChar: s.toCharArray()) {
            int currentCount = sMap.getOrDefault(sChar,0)+ 1;
            sMap.put(sChar, currentCount);
       }
       for(char tChar: t.toCharArray()) {
            if(!sMap.containsKey(tChar))
                return false;
            int count = sMap.get(tChar) - 1;
            if(count < 0)
                return false;
            sMap.put(tChar, count);
       }
         for(char sChar: s.toCharArray()) {
            if(sMap.get(sChar) != 0)
                return false;
       }
       return true;
    }
}
