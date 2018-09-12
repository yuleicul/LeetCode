/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var obj = {};
    var maxlen = 0;
    for (let i = 0; i < s.length; i++) {
        var len = 0;
        for (let j = i; j < s.length; j++) {
            // !!!一定要注意这里不能写成obj.s[j]
            if (!obj[s[j]]) {
                obj[s[j]] = 1;
                len++;
            }
            else {
                for (var key in obj) {
                    delete obj[key];
                }
                break;
            }
        }
        maxlen = maxlen >= len? maxlen: len;
    }
    
    return maxlen;
};

console.log(lengthOfLongestSubstring("abcabcabcbde"));