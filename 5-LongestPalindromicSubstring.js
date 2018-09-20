// Manacher算法参考资料 https://segmentfault.com/a/1190000003914228

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

// 解法2：Manacher 算法——中心拓展法的优化
var longestPalindrome = function(s) {

    // 1. 在字符串间隔填充*
    // 前后都要填充是因为a的回文是a，ab的回文是a或b
    // 且保证填充前和填充后字符的回文性质不变
    var arr = s.split("");
    var str1 = arr.join("*");
    var str = "*" + str1 + "*";
    console.log(str);
    
    // 2. 优化的中心扩展法
    var r = []; // 辅助数组，用来记录每个位置的回文半径（== 原字符串长度）
    var maxR = 0; // 最长回文字符串的最右位置
    var pos = 0; // 最长回文字符串的对称轴位置
    var result = [];
    r[0] = 0;
    r[str.length - 1] = 0;
    
    // 计算出每个位置的回文半径
    for (let i = 1; i < str.length; i++) {
        // 如果当前位置小于maxR则有两种取值
        if (i < maxR) 
            if (r[2 * pos - i] < maxR - i) {
                r[i] = r[2 * pos - i];
            }
            else {
                for (let j = maxR + 1; j <= str.length && 2 * i - j >= -1; j++) {
                    if (str[j] === str[2 * i - j] && j != str.length && 2 * i - j != -1) {
                        continue;
                    }
                    else {
                        r[i] = j - 1 - i;
                        break;
                    }
                }
            }
        }
        // 如果当前位置大于等于maxR则必须用中心扩展计算
        else {
            for (let j = i + 1; j <= str.length && 2 * i - j >= -1; j++) {
                if (str[j] === str[2 * i - j] && j != str.length && 2 * i - j != -1) {
                    continue;
                }
                else {
                    r[i] = j - 1 - i;
                    break;
                }
            }
        }
        if (r[i] > maxR - pos) {
            maxR = r[i] + i;
            pos = i;
        }
    }
    var resArr = [];
    for (let i = 2 * pos - maxR + 1; i < maxR; i += 2) {
       resArr.push(str[i]);
    }
    res = resArr.join("");
    return res;
}

// 解法1：反转字符串，找出俩字符串中的最长子串
// 结果：wrong answer 
// 原因：不能处理形如abcpppcba的字符串
var longestPalindrome_wrong = function(s1) {
    
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

console.log(longestPalindrome("a"));
console.log(longestPalindrome("acu"));
console.log(longestPalindrome("oac"));
console.log(longestPalindrome("abc"));
//a*b*b*b*a*b*b*b*b