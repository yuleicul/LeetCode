/* =================================================
The string "PAYPALISHIRING" is written in a zigzag 
pattern on a given number of rows like this: (you 
may want to display this pattern in a fixed font 
for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this
conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I
===================================================*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// 解法2：找规律
// z型第一行和最后一行字符的规律是: a[i] -> a[i + gap]
// 中间第i行(0开始)的规律是: a[i] -> a[ 2(n-i-1) ] -> a[ 2(n-i-1) + 2i ]
var convert = function(s, numRows) {
    var res = "";
    var gap = 2 * (numRows - 1)?2 * (numRows - 1):1;
    var dis = 0;
    for (let i = 0; i < numRows; i++) {
        dis = 2 * (numRows - i - 1);
        for (let j = i; j < s.length; j += gap) {
            if (i === 0 || i === numRows - 1) {
                res += s[j];
                continue;
            }
            res += s[j];
            res += s[j + dis]?s[j + dis]:"";
        }
    }
    console.log(res);
    return res;
}

// 解法1：将z字每一行的字符存进1-2个数组中，按规律输出字符
// 结果：runtime error 辅助空间太大且超时
var convert_timeout = function(s, numRows) {
    var arr = [];
    var gap = 2 * (numRows - 1);
    for (let i = 0; i < gap; i++) {
        arr.push(new Array());
        for (let j = i; j < s.length; j += gap) {
            arr[i].push(s[j]);
        }
        console.log(arr);
    }
    var res = arr[0].join("");
    for (let i = 1; i <= numRows - 2; i++) {
        for (let j in arr[i]) {
            res += arr[i][j] + (arr[gap - i][j] ? arr[gap - i][j] : "");
        }
    }
    res += arr[numRows - 1].join("");
    console.log(res);
    return res;
};

// 0   4   8
// 1 3 5 7 9  11
// 2   6   10

// 0     6
// 1   5 7
// 2 4   8 10  
// 3

// 3 4 2*(3-1)
// 4 6 2*(4-1)
// 5 8 2*(n-1)个数组

convert("abcd", 3);


