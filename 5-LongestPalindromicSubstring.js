/*============================================================
Given a string s, find the longest palindromic substring in s. 
You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
=============================================================*/

/**
 * @param {string} s
 * @return {string}
 */

// 解法1：反转字符串，找出俩字符串中的最长子串
var longestPalindrome = function(s1) {
    
    // 1. 反转字符串
    var arr = s1.split("");
    arr.reverse();
    var s2 = arr.join("");
    
    // 2. 找出最长子串'
    var res = ""; 
    var maxlen = 0; 
    
    var currentStr = "";
    var len = 0;
    
    var i = 0, j = 2;// 子串开始/结尾位置

    while (j <= s1.length) { // substring左闭右开所以j取到=length
        currentStr = s1.substring(i, j);
        strIndex = s2.indexOf(currentStr);
        console.log(currentStr)
        // 如果找到了子串
        if (strIndex !== -1) {
            len = j - i + 1;
            // 找到子串还需要在可以想象的位置
            if (strIndex + j === s1.length) {
                console.log(strIndex+j)
                if (maxlen < len) {
                    maxlen = len;
                    res = currentStr;
                }
                j++;    
            }
            else {
                i++; 
                j++;
            }
        }
        else {
            i++; 
            j++;
        }
    }
    return res;
};

console.log(longestPalindrome("abbabbbb"));