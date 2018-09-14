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

// 解法2：滑动窗口法
//       keep track of 子串开头位置、结尾位置、长度、哈希表
//       扫描到a的重复字符a'则将子字符串开头定位到a的下一位
var lengthOfLongestSubstring = function(s) {
    var i = 0, j = 0, maxlen = 0, len = 0, hash = {};
    while (j < s.length) {
        // 如果不是重复的字符
        // 第二个条件是因为：如abcba，b重复时i跳到c，但是a仍然在哈希表中且位置比i小
        if (hash[s[j]] === undefined ||  (hash[s[j]] !== undefined && hash[s[j]] < i)) {
            hash[s[j]] = j;
        }
        else {
            i = hash[s[j]] + 1;
            hash[s[j]] = j;
        }
        len = j - i + 1;
        j++;
        maxlen = maxlen >= len ? maxlen : len;
    }
   return maxlen;
}
    

// 解法1 ： 从头（i）开始扫描，将扫描到的字符放进一个对象里，遇到重复的字符则清空字符串，i++，重复上述步骤。
// 效率低
var lengthOfLongestSubstring2 = function(s) {
    var obj = {};
    var maxlen = 0;
    for (let i = 0; i < s.length; i++) { // i：子字符串起始位置
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
lengthOfLongestSubstring("bbbbb")
// console.log(lengthOfLongestSubstring("bbbbb"));


